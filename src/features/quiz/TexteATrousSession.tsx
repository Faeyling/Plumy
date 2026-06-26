import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getTermesParUnite } from '@/content/termes/index'
import { unites } from '@/content/unites'
import { genererTexteATrous, type QuestionTexteATrous } from './quiz.utils'
import { statsRepository } from '@/data/repositories/statsRepository'
import { useBadgeCheck } from '@/hooks/useBadgeCheck'
import { getBadge } from '@/data/badges'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

const PTS_CORRECT = 10

export function TexteATrousSession() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find(u => u.numero === numUnite)
  const termes = getTermesParUnite(numUnite)

  const [questions, setQuestions] = useState<QuestionTexteATrous[]>(() => genererTexteATrous(termes, 8))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [corrects, setCorrects] = useState(0)
  const [termine, setTermine] = useState(false)
  const [ptsGagnes, setPtsGagnes] = useState(0)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const { checkBadges } = useBadgeCheck()

  function handleRecommencer() {
    setQuestions(genererTexteATrous(termes, 8))
    setIndex(0)
    setSelected(null)
    setCorrects(0)
    setTermine(false)
    setPtsGagnes(0)
    setNewBadges([])
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center gap-4">
        <PluмyMascot etat="repos" taille={80} />
        <p className="text-[var(--color-gris-texte)]">Pas assez de termes pour ce quiz (minimum 4).</p>
        <button
          onClick={() => navigate(`/unite/${numUnite}`)}
          className="text-[var(--color-plumy-blue)] underline text-sm"
        >
          {fr.quiz.retourUnite}
        </button>
      </div>
    )
  }

  const question = questions[index]
  const total = questions.length
  const isAnswered = selected !== null
  const isLast = index === total - 1
  const isCorrect = selected === question.motManquant

  function handleSelect(choix: string) {
    if (isAnswered) return
    setSelected(choix)
    if (choix === question.motManquant) {
      setCorrects(c => c + 1)
    }
  }

  async function handleNext() {
    if (!isLast) {
      setIndex(i => i + 1)
      setSelected(null)
      return
    }
    const pts = corrects * PTS_CORRECT
    await statsRepository.ajouterPoints(pts)
    const stats = await statsRepository.get()
    await statsRepository.update({ quizJoues: stats.quizJoues + 1 })
    await statsRepository.ajouterQuizReussiAujourdhui()
    const badges = await checkBadges()
    setPtsGagnes(pts)
    setNewBadges(badges)
    setTermine(true)
  }

  if (termine) {
    const pct = Math.round((corrects / total) * 100)
    return (
      <div className="flex flex-col min-h-svh">
        <div className="flex-1 flex flex-col items-center justify-center p-8 gap-5 text-center">
          <PluмyMascot etat={pct >= 50 ? 'reussite' : 'echec'} taille={100} />
          <div>
            <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-1">
              {fr.quiz.finTitre}
            </h1>
            <p className="text-[var(--color-gris-texte)] text-sm">
              {fr.quiz.score(corrects, total)} — {pct}%
            </p>
          </div>
          {ptsGagnes > 0 && (
            <div className="bg-[#fce4ec] border border-[var(--color-candy-corail)] rounded-[var(--radius-card)] px-5 py-3">
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
                {fr.quiz.pointsGagnes(ptsGagnes)}
              </p>
            </div>
          )}
          {newBadges.length > 0 && (
            <div className="w-full space-y-2">
              <p className="text-xs text-[var(--color-gris-texte)] uppercase tracking-wide">
                {fr.badges.nouveauBadge}
              </p>
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
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={handleRecommencer}
              className="w-full py-3 bg-[var(--color-candy-corail)] text-white font-[var(--font-titre)] font-bold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              {fr.quiz.recommencer}
            </button>
            <button
              onClick={() => navigate(`/unite/${numUnite}`)}
              className="w-full py-3 bg-white text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              {fr.quiz.retourUnite}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const partsAvecTrous = question.texteAvecTrous.split('___')

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-4 bg-white">
        <button
          onClick={() => navigate(`/unite/${numUnite}`)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm mb-4"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {unite?.titre ?? `Unité ${numUnite}`}
        </button>
        <div className="flex items-center justify-between mb-2">
          <span className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
            {fr.quiz.typesLabels["texte-a-trous"]}
          </span>
          <span className="text-xs text-[var(--color-gris-texte)]">
            {fr.quiz.question} {index + 1} {fr.quiz.sur} {total}
          </span>
        </div>
        <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-candy-corail)] rounded-full"
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
            <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5">
              <p className="text-xs text-[var(--color-gris-texte)] uppercase tracking-wide mb-2">
                {fr.quiz.texteATrous.consigne}
              </p>
              <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-base leading-snug">
                {partsAvecTrous.length > 1 ? (
                  <>
                    {partsAvecTrous[0]}
                    <span className={`inline-block min-w-[80px] text-center border-b-2 mx-1 ${isAnswered ? (isCorrect ? 'text-[var(--color-candy-menthe)] border-[var(--color-candy-menthe)]' : 'text-[var(--color-candy-corail)] border-[var(--color-candy-corail)]') : 'border-[var(--color-candy-corail)] text-[var(--color-candy-corail)]'}`}>
                      {isAnswered ? selected : '___'}
                    </span>
                    {partsAvecTrous[1]}
                  </>
                ) : (
                  question.texteAvecTrous
                )}
              </p>
            </div>

            <div className="space-y-2">
              {question.propositions.map((prop) => {
                const isBonne = prop === question.motManquant
                const isSelected = prop === selected
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
                  <button key={prop} onClick={() => handleSelect(prop)} disabled={isAnswered} className={cls}>
                    {prop}
                  </button>
                )
              })}
            </div>

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
                    {fr.quiz.bonne_reponse_etait} <strong>{question.motManquant}</strong>
                  </p>
                )}
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-[var(--color-candy-corail)] text-white font-[var(--font-titre)] font-bold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
                >
                  {isLast ? fr.quiz.terminer : fr.quiz.suivant}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
