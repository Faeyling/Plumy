import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getTermesParUnite } from '@/content/termes/index'
import { unites } from '@/content/unites'
import { genererReconnaissanceVisuelle, type QuestionReconnaissanceVisuelle } from './quiz.utils'
import { statsRepository } from '@/data/repositories/statsRepository'
import { useBadgeCheck } from '@/hooks/useBadgeCheck'
import { getBadge } from '@/data/badges'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

const PTS_CORRECT = 10

export function ReconnaissanceVisuelleSession() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find(u => u.numero === numUnite)
  const termes = getTermesParUnite(numUnite)

  const [questions, setQuestions] = useState<QuestionReconnaissanceVisuelle[]>(() => genererReconnaissanceVisuelle(termes, 8))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [corrects, setCorrects] = useState(0)
  const [termine, setTermine] = useState(false)
  const [ptsGagnes, setPtsGagnes] = useState(0)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const { checkBadges } = useBadgeCheck()

  function handleRecommencer() {
    setQuestions(genererReconnaissanceVisuelle(termes, 8))
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
        <button onClick={() => navigate(`/unite/${numUnite}`)} className="text-[var(--color-plumy-blue)] underline text-sm">
          {fr.quiz.retourUnite}
        </button>
      </div>
    )
  }

  const question = questions[index]
  const total = questions.length
  const isAnswered = selected !== null
  const isLast = index === total - 1
  const isCorrect = selected === question.bonneReponse

  async function handleSelect(choix: string) {
    if (isAnswered) return
    setSelected(choix)
    const correct = choix === question.bonneReponse
    if (correct) setCorrects(c => c + 1)
  }

  async function handleNext() {
    if (isLast) {
      const pts = corrects * PTS_CORRECT
      setPtsGagnes(pts)
      await statsRepository.ajouterPoints(pts)
      const stats = await statsRepository.get()
      await statsRepository.update({ quizJoues: stats.quizJoues + 1 })
      await statsRepository.ajouterQuizReussiAujourdhui()
      const badges = await checkBadges()
      setNewBadges(badges)
      setTermine(true)
    } else {
      setIndex(i => i + 1)
      setSelected(null)
    }
  }

  if (termine) {
    const totalCorrects = corrects
    const pct = Math.round((totalCorrects / total) * 100)
    return (
      <div className="flex flex-col min-h-svh">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 gap-6 text-center">
          <PluмyMascot etat={pct >= 50 ? 'reussite' : 'echec'} taille={100} />
          <div>
            <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
              {fr.quiz.finTitre}
            </h1>
            <p className="text-4xl font-[var(--font-titre)] font-extrabold mt-2" style={{ color: 'var(--color-candy-menthe)' }}>
              {fr.quiz.score(totalCorrects, total)}
            </p>
            {ptsGagnes > 0 && (
              <p className="text-sm text-[var(--color-candy-lavande)] mt-1">{fr.quiz.pointsGagnes(ptsGagnes)}</p>
            )}
          </div>
          {newBadges.length > 0 && (
            <div className="bg-[var(--color-candy-lavande-light)] rounded-[var(--radius-card)] p-4 w-full max-w-xs space-y-1">
              <p className="text-xs font-[var(--font-titre)] font-bold text-[var(--color-candy-lavande)] uppercase tracking-wide">
                {fr.badges.nouveauBadge}
              </p>
              {newBadges.map(id => {
                const b = getBadge(id)
                return b ? (
                  <p key={id} className="text-sm text-[var(--color-encre)]">
                    {b.symbole} {fr.badges.debloque(b.nom)}
                  </p>
                ) : null
              })}
            </div>
          )}
          <div className="flex gap-3 w-full max-w-xs">
            <button
              onClick={handleRecommencer}
              className="flex-1 py-3 bg-[var(--color-candy-menthe)] text-white font-[var(--font-titre)] font-bold rounded-xl text-sm"
            >
              {fr.quiz.recommencer}
            </button>
            <button
              onClick={() => navigate(`/unite/${numUnite}`)}
              className="flex-1 py-3 bg-white border border-[var(--color-gris-doux)] text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-xl text-sm"
            >
              {fr.quiz.retourUnite}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête */}
      <header className="px-5 pt-10 pb-4 bg-[var(--color-plumy-bg)]">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(`/unite/${numUnite}`)} className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm" aria-label="Retour">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour
          </button>
          <span className="text-sm text-[var(--color-gris-texte)]">
            {fr.quiz.question} {index + 1} {fr.quiz.sur} {total}
          </span>
        </div>
        {/* Barre de progression */}
        <div className="h-2 bg-white/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: '#059669' }}
            animate={{ width: `${((index) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-[var(--font-titre)] font-bold" style={{ color: '#059669' }}>
            {unite?.titre ?? `Unité ${numUnite}`}
          </span>
          <span className="text-xs text-[var(--color-gris-texte)]">
            {fr.quiz.typesLabels['reconnaissance-visuelle']}
          </span>
        </div>
      </header>

      {/* Question */}
      <div className="flex-1 px-4 py-6 space-y-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Indices visuels */}
            <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5 space-y-3">
              <p className="text-xs font-[var(--font-titre)] font-bold text-[#059669] uppercase tracking-wide">
                Quel terme est décrit ici ?
              </p>
              {/* Tags discipline */}
              <div className="flex flex-wrap gap-1.5">
                {question.disciplines.map(d => (
                  <span
                    key={d}
                    className="px-2 py-0.5 rounded-full text-xs font-[var(--font-titre)] font-semibold bg-[#d1fae5] text-[#065f46]"
                  >
                    {fr.disciplines[d as keyof typeof fr.disciplines] ?? d}
                  </span>
                ))}
                <span className="px-2 py-0.5 rounded-full text-xs bg-[var(--color-gris-doux)] text-[var(--color-gris-texte)] font-[var(--font-titre)]">
                  {question.categorie.replace(/-/g, ' ')}
                </span>
              </div>
              {/* Extrait de description */}
              <p className="text-[var(--color-encre)] text-sm leading-relaxed italic">
                « {question.extrait}{question.extrait.length >= 199 ? '…' : ''} »
              </p>
            </div>

            {/* Choix */}
            <div className="grid grid-cols-2 gap-2">
              {question.choix.map(choix => {
                let bg = 'bg-white border-[var(--color-gris-doux)]'
                let textColor = 'text-[var(--color-encre)]'
                if (isAnswered) {
                  if (choix === question.bonneReponse) {
                    bg = 'bg-[#d1fae5] border-[#059669]'
                    textColor = 'text-[#065f46]'
                  } else if (choix === selected) {
                    bg = 'bg-[#fee2e2] border-[var(--color-candy-corail)]'
                    textColor = 'text-[var(--color-candy-corail)]'
                  }
                }
                return (
                  <button
                    key={choix}
                    onClick={() => handleSelect(choix)}
                    disabled={isAnswered}
                    className={`p-3 border-2 rounded-[var(--radius-card)] text-sm font-[var(--font-titre)] font-semibold text-left transition-all ${bg} ${textColor}`}
                  >
                    {choix}
                  </button>
                )
              })}
            </div>

            {/* Feedback */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-[var(--radius-card)] p-4 ${isCorrect ? 'bg-[#d1fae5]' : 'bg-[#fee2e2]'}`}
              >
                <p
                  role="status"
                  aria-live="polite"
                  className={`font-[var(--font-titre)] font-bold text-sm ${isCorrect ? 'text-[#065f46]' : 'text-[var(--color-candy-corail)]'}`}
                >
                  {isCorrect ? fr.quiz.bonne : fr.quiz.mauvaise}
                </p>
                {!isCorrect && (
                  <p className="text-xs text-[var(--color-gris-texte)] mt-1">
                    {fr.quiz.bonne_reponse_etait} <strong>{question.bonneReponse}</strong>
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bouton suivant */}
      {isAnswered && (
        <div className="px-4 pb-6">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNext}
            className="w-full py-4 rounded-xl font-[var(--font-titre)] font-bold text-white text-base"
            style={{ backgroundColor: '#059669' }}
          >
            {isLast ? fr.quiz.terminer : fr.quiz.suivant}
          </motion.button>
        </div>
      )}
    </div>
  )
}
