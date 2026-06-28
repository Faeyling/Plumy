import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { tousLesTermes } from '@/content/termes/index'
import { getSituationsDisponibles } from '@/content/enScene'
import { statsRepository } from '@/data/repositories/statsRepository'
import { useBadgeCheck } from '@/hooks/useBadgeCheck'
import { getBadge } from '@/data/badges'
import { fr } from '@/i18n/fr'
import { db } from '@/data/db'
import { shuffle } from './quiz.utils'

const NB_QUESTIONS = 8
const PTS_CORRECT_BASE = 10

interface QuestionScene {
  termeId: string
  nom: string
  description: string
  bonneReponse: string
  choix: string[]
}

function genererQuestionsScene(): QuestionScene[] {
  const situations = getSituationsDisponibles()
  const selection = shuffle(situations).slice(0, NB_QUESTIONS)
  return selection.map(({ termeId, situation }) => {
    const terme = tousLesTermes.find(t => t.id === termeId)
    const nom = terme?.nom ?? termeId
    const distracteurs = tousLesTermes
      .filter(t => t.id !== termeId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(t => t.nom)
    const choix = shuffle([nom, ...distracteurs])
    return {
      termeId,
      nom,
      description: situation,
      bonneReponse: nom,
      choix,
    }
  })
}

function comboMultiplier(combo: number): number {
  if (combo >= 10) return 3
  if (combo >= 5) return 2
  if (combo >= 3) return 1.5
  return 1
}

function comboLabel(combo: number): string | null {
  if (combo >= 10) return fr.combos.seuil10
  if (combo >= 5) return fr.combos.seuil5
  if (combo >= 3) return fr.combos.seuil3
  return null
}

export function EnSceneSession() {
  const navigate = useNavigate()
  const [questions] = useState<QuestionScene[]>(() => genererQuestionsScene())
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [corrects, setCorrects] = useState(0)
  const [combo, setCombo] = useState(0)
  const [ptsTotal, setPtsTotal] = useState(0)
  const [showMiniLecon, setShowMiniLecon] = useState(false)
  const [termine, setTermine] = useState(false)
  const [ptsGagnes, setPtsGagnes] = useState(0)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const { checkBadges } = useBadgeCheck()

  const question = questions[index]
  const total = questions.length
  const isAnswered = selected !== null
  const isLast = index === total - 1
  const isCorrect = selected === question?.bonneReponse
  const multiplier = comboMultiplier(combo)
  const comboMsg = comboLabel(combo)

  function handleSelect(choix: string) {
    if (isAnswered || !question) return
    setSelected(choix)
    if (choix === question.bonneReponse) {
      const newCombo = combo + 1
      setCombo(newCombo)
      const pts = Math.round(PTS_CORRECT_BASE * comboMultiplier(newCombo))
      setPtsTotal(p => p + pts)
      setCorrects(c => c + 1)
    } else {
      setCombo(0)
      setShowMiniLecon(true)
    }
  }

  async function handleNext() {
    setShowMiniLecon(false)
    if (!isLast) {
      setIndex(i => i + 1)
      setSelected(null)
      return
    }
    await statsRepository.ajouterPoints(ptsTotal)
    const stats = await statsRepository.get()
    await statsRepository.update({ quizJoues: stats.quizJoues + 1 })
    await statsRepository.ajouterQuizReussiAujourdhui()
    await db.historiqueQuiz.add({
      date: new Date().toISOString().slice(0, 10),
      type: 'en-scene',
      correct: corrects,
      total,
    })
    const badges = await checkBadges()
    setPtsGagnes(ptsTotal)
    setNewBadges(badges)
    setTermine(true)
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center gap-4">
        <p className="text-[var(--color-gris-texte)]">Pas assez de termes avec des descriptions détaillées.</p>
        <button onClick={() => navigate('/quiz')} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour aux quiz
        </button>
      </div>
    )
  }

  if (termine) {
    const pct = Math.round((corrects / total) * 100)
    return (
      <div className="flex flex-col min-h-svh">
        <div className="flex-1 flex flex-col items-center justify-center p-8 gap-5 text-center">
          <img
            src={pct >= 60 ? '/mascotte/plumy-reussite.png' : '/mascotte/plumy-encouragement.png'}
            alt={pct >= 60 ? 'Plumy célèbre' : 'Plumy encourage'}
            className="w-28 h-28 object-contain"
          />
          <div>
            <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-1">
              {fr.enScene.finTitre}
            </h1>
            <p className="text-[var(--color-gris-texte)] text-sm">
              {fr.quiz.score(corrects, total)} — {pct}%
            </p>
          </div>
          {ptsGagnes > 0 && (
            <div className="bg-[#fffde7] border border-[var(--color-candy-jaune)] rounded-[var(--radius-card)] px-5 py-3">
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
                {fr.quiz.pointsGagnes(ptsGagnes)}
              </p>
            </div>
          )}
          {newBadges.length > 0 && (
            <div className="w-full space-y-2">
              <p className="text-xs text-[var(--color-gris-texte)] uppercase tracking-wide">{fr.badges.nouveauBadge}</p>
              {newBadges.map(id => {
                const badge = getBadge(id)
                if (!badge) return null
                return (
                  <div key={id} className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
                    <span className="text-2xl" style={{ color: badge.couleur }}>{badge.symbole}</span>
                    <div className="text-left">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">{badge.nom}</p>
                      <p className="text-xs text-[var(--color-gris-texte)]">{badge.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <button
              onClick={() => navigate('/quiz')}
              className="w-full py-3 bg-[var(--color-candy-menthe)] text-white font-[var(--font-titre)] font-bold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              Retour aux quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-4 bg-[var(--color-plumy-bg)]">
        <button
          onClick={() => navigate('/quiz')}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm mb-4"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Quiz
        </button>
        <div className="flex items-center justify-between mb-2">
          <span className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
            {fr.enScene.titre}
          </span>
          <div className="flex items-center gap-2">
            {combo >= 3 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--color-candy-jaune)] text-[var(--color-encre)]">
                ×{multiplier} {fr.combos.serie(combo)}
              </span>
            )}
            <span className="text-xs text-[var(--color-gris-texte)]">{index + 1} / {total}</span>
          </div>
        </div>
        <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-candy-menthe)] rounded-full"
            animate={{ width: `${((index + (isAnswered ? 1 : 0)) / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </header>

      <div className="flex-1 px-4 py-5 flex flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.22 }}
            className="flex flex-col gap-3"
          >
            {/* Situation */}
            <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5">
              <p className="text-xs text-[var(--color-candy-menthe)] uppercase tracking-wide font-semibold mb-2">
                {fr.enScene.consigne}
              </p>
              <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-base leading-snug">
                {question.description}
              </p>
            </div>

            {/* Combo flash */}
            {isAnswered && isCorrect && comboMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-1"
              >
                <span className="text-sm font-bold text-[var(--color-candy-jaune)]">{comboMsg}</span>
              </motion.div>
            )}

            {/* Choix */}
            <div className="space-y-2">
              {question.choix.map(choix => {
                const isBonne = choix === question.bonneReponse
                const isSelected = choix === selected
                let cls = 'w-full text-left p-4 rounded-[var(--radius-card)] border-2 font-[var(--font-titre)] font-medium text-sm transition-all shadow-[var(--shadow-card)]'
                if (!isAnswered) {
                  cls += ' bg-white border-transparent text-[var(--color-encre)] active:scale-[0.98]'
                } else if (isBonne) {
                  cls += ' bg-[#e8f5e9] border-[var(--color-candy-menthe)] text-[var(--color-candy-menthe)]'
                } else if (isSelected) {
                  cls += ' bg-[#fce4ec] border-[var(--color-candy-corail)] text-[var(--color-candy-corail)]'
                } else {
                  cls += ' bg-white border-transparent text-[var(--color-gris-texte)] opacity-50'
                }
                return (
                  <button key={choix} onClick={() => handleSelect(choix)} disabled={isAnswered} className={cls}>
                    {choix}
                  </button>
                )
              })}
            </div>

            {/* Mini-leçon post-erreur */}
            {isAnswered && !isCorrect && showMiniLecon && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[var(--color-candy-rose-light)] rounded-[var(--radius-card)] p-4 flex gap-3"
              >
                <img
                  src="/mascotte/plumy-encouragement.png"
                  alt="Plumy encourage"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm mb-1">
                    {fr.miniLecon.titre}
                  </p>
                  <p className="text-xs text-[var(--color-gris-texte)] mb-1 font-semibold">{question.bonneReponse}</p>
                  <p className="text-xs text-[var(--color-encre)] leading-snug line-clamp-3">
                    {tousLesTermes.find(t => t.nom === question.bonneReponse)?.definition}
                  </p>
                  <Link
                    to={`/terme/${question.termeId}`}
                    className="text-xs text-[var(--color-plumy-blue)] underline mt-1 inline-block"
                  >
                    {fr.miniLecon.voirFiche}
                  </Link>
                </div>
              </motion.div>
            )}

            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-semibold ${isCorrect ? 'text-[var(--color-candy-menthe)]' : 'text-[var(--color-candy-corail)]'}`}
                >
                  {isCorrect ? fr.quiz.bonne : fr.quiz.mauvaise}
                </p>
                {!isCorrect && (
                  <p className="text-xs text-[var(--color-gris-texte)]">
                    {fr.quiz.bonne_reponse_etait} <strong>{question.bonneReponse}</strong>
                  </p>
                )}
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-[var(--color-candy-menthe)] text-white font-[var(--font-titre)] font-bold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
                >
                  {!isCorrect ? fr.miniLecon.compris : isLast ? fr.quiz.terminer : fr.quiz.suivant}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
