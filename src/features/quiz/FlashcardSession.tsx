import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { fr } from '@/i18n/fr'
import { unites } from '@/content/unites'
import { getTermesParUnite } from '@/content/termes/index'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import type { Terme, ProgressionTerme } from '@/content/schema'

type Jugement = 'su' | 'a-revoir'
type Statut = ProgressionTerme['statut']

const STATUT_ORDER: Record<Statut, number> = {
  'a-revoir': 0,
  'vu': 1,
  'jamais-vu': 2,
  'maitrise': 3,
}

interface CarteDeck {
  terme: Terme
  statutInitial: Statut
}

export function FlashcardSession() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find((u) => u.numero === numUnite)

  const [deck, setDeck] = useState<CarteDeck[]>([])
  const [index, setIndex] = useState(0)
  const [retourne, setRetourne] = useState(false)
  const [jugements, setJugements] = useState<Map<string, Jugement>>(new Map())
  const [termine, setTermine] = useState(false)
  const [exitDir, setExitDir] = useState<1 | -1>(1)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const termes = getTermesParUnite(numUnite)
    progressionRepository.list().then((progressions) => {
      const progMap = new Map(progressions.map((p) => [p.termeId, p]))
      const cartes: CarteDeck[] = termes.map((t) => ({
        terme: t,
        statutInitial: progMap.get(t.id)?.statut ?? 'jamais-vu',
      }))
      cartes.sort((a, b) => STATUT_ORDER[a.statutInitial] - STATUT_ORDER[b.statutInitial])
      setDeck(cartes)
    })
  }, [numUnite])

  const carteActuelle = deck[index]

  const juger = useCallback(
    async (j: Jugement) => {
      if (!carteActuelle) return
      setExitDir(j === 'su' ? 1 : -1)
      setRetourne(false)
      const newJugements = new Map(jugements).set(carteActuelle.terme.id, j)
      setJugements(newJugements)

      if (index + 1 >= deck.length) {
        const mises = Array.from(newJugements.entries()).map(([termeId, juge]) => ({
          termeId,
          statut: (juge === 'su' ? 'maitrise' : 'a-revoir') as Statut,
        }))
        await progressionRepository.mettreAJourStatutBatch(mises)
        setTermine(true)
      } else {
        setAnimKey((k) => k + 1)
        setIndex((i) => i + 1)
      }
    },
    [carteActuelle, index, deck.length, jugements],
  )

  const recommencer = () => {
    setIndex(0)
    setRetourne(false)
    setJugements(new Map())
    setTermine(false)
    setAnimKey((k) => k + 1)
    const termes = getTermesParUnite(numUnite)
    progressionRepository.list().then((progressions) => {
      const progMap = new Map(progressions.map((p) => [p.termeId, p]))
      const cartes: CarteDeck[] = termes.map((t) => ({
        terme: t,
        statutInitial: progMap.get(t.id)?.statut ?? 'jamais-vu',
      }))
      cartes.sort((a, b) => STATUT_ORDER[a.statutInitial] - STATUT_ORDER[b.statutInitial])
      setDeck(cartes)
    })
  }

  if (!unite) {
    return (
      <div className="flex items-center justify-center min-h-svh p-8 text-center">
        <p className="text-[var(--color-gris-texte)]">Unité introuvable.</p>
      </div>
    )
  }

  if (deck.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-svh p-8">
        <div className="w-8 h-8 border-2 border-[var(--color-candy-lavande)] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (termine) {
    return <EcranFin jugements={jugements} deck={deck} onRecommencer={recommencer} onRetour={() => navigate(`/unite/${numUnite}`)} />
  }

  return (
    <div className="flex flex-col min-h-svh bg-[var(--color-plumy-bg)]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-10 pb-4">
        <button
          onClick={() => navigate(`/unite/${numUnite}`)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {unite.titre}
        </button>
        <span className="text-xs font-medium text-[var(--color-gris-texte)]">
          {fr.flashcards.progressLabel(index + 1, deck.length)}
        </span>
      </header>

      {/* Barre de progression */}
      <div className="px-4 mb-6">
        <div className="h-1.5 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[var(--color-candy-lavande)]"
            animate={{ width: `${((index) / deck.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-[10px] text-[var(--color-gris-texte)] mt-1 text-right">
          {fr.flashcards.ordreExplication}
        </p>
      </div>

      {/* Carte */}
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
            <Carte
              carte={carteActuelle}
              retourne={retourne}
              onRetourner={() => setRetourne(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Légende statut initial */}
        <div className="mt-3 flex items-center gap-1.5">
          <StatutPill statut={carteActuelle.statutInitial} />
          <span className="text-xs text-[var(--color-gris-texte)]">statut actuel</span>
        </div>
      </div>

      {/* Boutons de jugement */}
      <div className="px-5 pb-8 pt-4">
        <AnimatePresence>
          {retourne && (
            <motion.div
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
          )}
          {!retourne && (
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

function Carte({ carte, retourne, onRetourner }: { carte: CarteDeck; retourne: boolean; onRetourner: () => void }) {
  const { terme } = carte

  return (
    <button
      onClick={!retourne ? onRetourner : undefined}
      className={`w-full min-h-64 rounded-3xl shadow-lg border text-left transition-all duration-200 ${
        retourne
          ? 'bg-white border-[var(--color-candy-lavande)] cursor-default'
          : 'bg-[var(--color-candy-lavande-light)] border-[var(--color-candy-lavande)] cursor-pointer hover:shadow-xl active:scale-[0.98]'
      }`}
      aria-label={retourne ? undefined : fr.flashcards.retourner}
      type="button"
    >
      {!retourne ? (
        /* Recto */
        <div className="p-6 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5 mb-1">
            {terme.disciplines.slice(0, 2).map((d) => (
              <span
                key={d}
                className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--color-candy-lavande)] text-white"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="font-bold text-2xl text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
            {terme.nom}
          </p>
          {terme.alias && terme.alias.length > 0 && (
            <p className="text-sm text-[var(--color-gris-texte)] font-[var(--font-manuscrit)]">
              {terme.alias.slice(0, 3).join(' · ')}
            </p>
          )}
          <div className="mt-auto pt-4 flex justify-center">
            <span className="text-xs text-[var(--color-candy-lavande)] font-medium">
              {fr.flashcards.retourner} →
            </span>
          </div>
        </div>
      ) : (
        /* Verso */
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs font-semibold text-[var(--color-candy-lavande)] uppercase tracking-wide">
            {fr.flashcards.definition}
          </p>
          <p className="text-sm font-semibold text-[var(--color-encre)] leading-relaxed">
            {terme.definition}
          </p>
          {terme.erreursCourantes && terme.erreursCourantes.length > 0 && (
            <div className="mt-2 p-3 bg-[var(--color-candy-corail-light)] rounded-xl">
              <p className="text-[10px] font-bold text-[var(--color-candy-corail)] uppercase tracking-wide mb-1">
                Erreur courante
              </p>
              <p className="text-xs text-[var(--color-encre)] leading-relaxed">
                {terme.erreursCourantes[0]}
              </p>
            </div>
          )}
        </div>
      )}
    </button>
  )
}

function StatutPill({ statut }: { statut: Statut }) {
  const config: Record<Statut, { bg: string; label: string }> = {
    'jamais-vu': { bg: 'var(--color-gris-doux)', label: 'Non vu' },
    'vu': { bg: 'var(--color-candy-bleu)', label: 'Vu' },
    'a-revoir': { bg: 'var(--color-candy-corail)', label: 'À revoir' },
    'maitrise': { bg: 'var(--color-candy-menthe)', label: 'Maîtrisé' },
  }
  const c = config[statut]
  return (
    <span
      className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
      style={{ backgroundColor: c.bg }}
    >
      {c.label}
    </span>
  )
}

function EcranFin({
  jugements,
  deck,
  onRecommencer,
  onRetour,
}: {
  jugements: Map<string, Jugement>
  deck: CarteDeck[]
  onRecommencer: () => void
  onRetour: () => void
}) {
  const nbSu = Array.from(jugements.values()).filter((j) => j === 'su').length
  const nbARevoir = Array.from(jugements.values()).filter((j) => j === 'a-revoir').length
  const nbNonJuge = deck.length - jugements.size

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

      <div>
        <h1 className="text-2xl font-bold text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
          {fr.flashcards.fin}
        </h1>
        <p className="text-sm text-[var(--color-gris-texte)] mt-1">Session de {deck.length} cartes</p>
      </div>

      <div className="w-full max-w-xs space-y-3">
        <StatRow
          color="var(--color-candy-menthe)"
          label={fr.flashcards.maitrisees(nbSu)}
          value={nbSu}
          total={deck.length}
        />
        <StatRow
          color="var(--color-candy-corail)"
          label={fr.flashcards.aReviser(nbARevoir)}
          value={nbARevoir}
          total={deck.length}
        />
        {nbNonJuge > 0 && (
          <StatRow
            color="var(--color-gris-texte)"
            label={fr.flashcards.nonJuge(nbNonJuge)}
            value={nbNonJuge}
            total={deck.length}
          />
        )}
      </div>

      <p className="text-xs text-[var(--color-gris-texte)]">
        Tes statuts ont été mis à jour automatiquement.
      </p>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button
          onClick={onRecommencer}
          className="w-full py-3.5 rounded-2xl bg-[var(--color-candy-lavande)] text-white font-bold text-sm active:scale-95 transition-transform"
        >
          {fr.flashcards.recommencer}
        </button>
        <button
          onClick={onRetour}
          className="w-full py-3.5 rounded-2xl border border-[var(--color-gris-doux)] text-[var(--color-gris-texte)] font-medium text-sm active:scale-95 transition-transform"
        >
          {fr.flashcards.retourUnite}
        </button>
      </div>
    </div>
  )
}

function StatRow({ color, label, value, total }: { color: string; label: string; value: number; total: number }) {
  const pct = total > 0 ? (value / total) * 100 : 0
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-[var(--color-encre)]">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>
          {value}
        </span>
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
