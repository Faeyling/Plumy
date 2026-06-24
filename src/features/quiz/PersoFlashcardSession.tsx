import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { termesPersoRepository } from '@/data/repositories/termesPersoRepository'
import type { TermePersonnel } from '@/content/schema'
import { fr } from '@/i18n/fr'

type Jugement = 'su' | 'a-revoir'

export function PersoFlashcardSession() {
  const navigate = useNavigate()
  const [deck, setDeck] = useState<TermePersonnel[]>([])
  const [index, setIndex] = useState(0)
  const [retourne, setRetourne] = useState(false)
  const [jugements, setJugements] = useState<Map<string, Jugement>>(new Map())
  const [termine, setTermine] = useState(false)
  const [exitDir, setExitDir] = useState<1 | -1>(1)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    termesPersoRepository.list().then(setDeck)
  }, [])

  const carteActuelle = deck[index]

  const juger = useCallback(
    (j: Jugement) => {
      if (!carteActuelle) return
      setExitDir(j === 'su' ? 1 : -1)
      setJugements(prev => new Map(prev).set(carteActuelle.id, j))
      setRetourne(false)
      if (index + 1 >= deck.length) {
        setTermine(true)
      } else {
        setAnimKey(k => k + 1)
        setIndex(i => i + 1)
      }
    },
    [carteActuelle, index, deck.length],
  )

  const recommencer = () => {
    setIndex(0)
    setRetourne(false)
    setJugements(new Map())
    setTermine(false)
    setAnimKey(k => k + 1)
  }

  if (deck.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-svh gap-6 px-6 text-center">
        <span className="text-4xl opacity-30">📓</span>
        <p className="text-[var(--color-gris-texte)] text-sm max-w-xs">
          {fr.carnets.aucunTermePerso}
        </p>
        <button
          onClick={() => navigate('/carnets')}
          className="py-3 px-6 rounded-2xl bg-[var(--color-candy-rose)] text-white font-bold text-sm"
        >
          Aller dans mes carnets
        </button>
      </div>
    )
  }

  if (termine) {
    const nbSu = Array.from(jugements.values()).filter(j => j === 'su').length
    const nbARevoir = jugements.size - nbSu
    return (
      <div className="flex flex-col items-center justify-center min-h-svh bg-[var(--color-plumy-bg)] px-6 text-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[var(--color-candy-lavande-light)] flex items-center justify-center text-4xl"
        >
          ✨
        </motion.div>
        <h1 className="text-2xl font-bold text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
          {fr.flashcards.fin}
        </h1>
        <div className="w-full max-w-xs space-y-3">
          <ResultRow color="var(--color-candy-menthe)" label={fr.flashcards.maitrisees(nbSu)} value={nbSu} total={deck.length} />
          <ResultRow color="var(--color-candy-corail)" label={fr.flashcards.aReviser(nbARevoir)} value={nbARevoir} total={deck.length} />
        </div>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            onClick={recommencer}
            className="w-full py-3.5 rounded-2xl bg-[var(--color-candy-lavande)] text-white font-bold text-sm"
          >
            {fr.flashcards.recommencer}
          </button>
          <button
            onClick={() => navigate('/carnets')}
            className="w-full py-3.5 rounded-2xl border border-[var(--color-gris-doux)] text-[var(--color-gris-texte)] font-medium text-sm"
          >
            Retour aux carnets
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-svh bg-[var(--color-plumy-bg)]">
      <header className="flex items-center justify-between px-4 pt-10 pb-4">
        <button
          onClick={() => navigate('/carnets')}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Mes termes
        </button>
        <span className="text-xs font-medium text-[var(--color-gris-texte)]">
          {fr.flashcards.progressLabel(index + 1, deck.length)}
        </span>
      </header>

      <div className="px-4 mb-6">
        <div className="h-1.5 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[var(--color-candy-lavande)]"
            animate={{ width: `${(index / deck.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={animKey}
            initial={{ opacity: 0, x: exitDir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -exitDir * 60 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-sm"
          >
            <CartePerso terme={carteActuelle} retourne={retourne} onRetourner={() => setRetourne(true)} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-5 pb-8 pt-4">
        <AnimatePresence>
          {retourne ? (
            <motion.div
              key="boutons"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="flex gap-3"
            >
              <button
                onClick={() => juger('a-revoir')}
                className="flex-1 py-4 rounded-2xl border-2 border-[var(--color-candy-corail)] text-[var(--color-candy-corail)] font-bold text-sm flex flex-col items-center gap-1 active:scale-95 transition-transform"
                aria-label={fr.flashcards.aRevoir}
              >
                <span className="text-xl">↩</span>
                {fr.flashcards.aRevoir}
              </button>
              <button
                onClick={() => juger('su')}
                className="flex-1 py-4 rounded-2xl bg-[var(--color-candy-menthe)] text-white font-bold text-sm flex flex-col items-center gap-1 active:scale-95 transition-transform"
                aria-label={fr.flashcards.jeSais}
              >
                <span className="text-xl">✓</span>
                {fr.flashcards.jeSais}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-xs text-[var(--color-gris-texte)] py-4"
            >
              Appuie sur la carte pour voir la définition
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function CartePerso({
  terme,
  retourne,
  onRetourner,
}: {
  terme: TermePersonnel
  retourne: boolean
  onRetourner: () => void
}) {
  return (
    <button
      onClick={!retourne ? onRetourner : undefined}
      className={`w-full min-h-64 rounded-3xl shadow-lg border text-left transition-all duration-200 ${
        retourne
          ? 'bg-white border-[var(--color-candy-jaune)] cursor-default'
          : 'bg-[var(--color-candy-jaune-light,#fffde7)] border-[var(--color-candy-jaune)] cursor-pointer hover:shadow-xl active:scale-[0.98]'
      }`}
      aria-label={retourne ? undefined : fr.flashcards.retourner}
      type="button"
    >
      {!retourne ? (
        <div className="p-6 flex flex-col gap-3">
          <span className="px-2 py-0.5 rounded-full bg-[var(--color-candy-jaune)] text-[var(--color-encre)] text-[10px] font-bold self-start">
            perso
          </span>
          <p className="font-bold text-2xl text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
            {terme.nom}
          </p>
          <div className="mt-auto pt-4 flex justify-center">
            <span className="text-xs text-[var(--color-gris-texte)] font-medium">
              {fr.flashcards.retourner} →
            </span>
          </div>
        </div>
      ) : (
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs font-semibold text-[var(--color-gris-texte)] uppercase tracking-wide">
            {fr.flashcards.definition}
          </p>
          <p className="text-sm font-semibold text-[var(--color-encre)] leading-relaxed">
            {terme.definition}
          </p>
          {terme.noteLibre && (
            <div className="mt-2 p-3 bg-[var(--color-candy-lavande-light)] rounded-xl">
              <p className="text-xs text-[var(--color-encre)] italic leading-relaxed">
                {terme.noteLibre}
              </p>
            </div>
          )}
        </div>
      )}
    </button>
  )
}

function ResultRow({ color, label, value, total }: { color: string; label: string; value: number; total: number }) {
  const pct = total > 0 ? (value / total) * 100 : 0
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-[var(--color-encre)]">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>{value}</span>
      </div>
      <div className="h-1.5 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
