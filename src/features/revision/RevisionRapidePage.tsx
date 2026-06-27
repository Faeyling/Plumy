import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { tousLesTermes } from '@/content/termes/index'
import { statsRepository } from '@/data/repositories/statsRepository'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'
import { db } from '@/data/db'
import type { Terme } from '@/content/schema'

const NB_TERMES = 10
const DUREE_SECONDES = 120

type Jugement = 'su' | 'a-revoir'

export function RevisionRapidePage() {
  const navigate = useNavigate()
  const [deck, setDeck] = useState<Terme[]>([])
  const [index, setIndex] = useState(0)
  const [retourne, setRetourne] = useState(false)
  const [jugements, setJugements] = useState<Map<string, Jugement>>(new Map())
  const [tempsRestant, setTempsRestant] = useState(DUREE_SECONDES)
  const [termine, setTermine] = useState(false)
  const [raison, setRaison] = useState<'fini' | 'temps'>('fini')
  const [exitDir, setExitDir] = useState<1 | -1>(1)
  const [animKey, setAnimKey] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    progressionRepository.list().then(progressions => {
      const aRevoir = progressions.filter(p => p.statut === 'a-revoir').map(p => p.termeId)
      const jV = progressions.filter(p => p.statut === 'jamais-vu').map(p => p.termeId)
      const priorises = [...aRevoir, ...jV]
      const candidats = tousLesTermes.filter(t => priorises.includes(t.id))
      const autres = tousLesTermes.filter(t => !priorises.includes(t.id))
      const selection = [...candidats, ...autres].slice(0, NB_TERMES)
      setDeck(selection.sort(() => Math.random() - 0.5))
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (loading || termine || deck.length === 0) return
    const interval = setInterval(() => {
      setTempsRestant(t => {
        if (t <= 1) {
          clearInterval(interval)
          setRaison('temps')
          setTermine(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [loading, termine, deck.length])

  const terminerSession = useCallback(async (jugMap: Map<string, Jugement>) => {
    const mises = Array.from(jugMap.entries()).map(([termeId, juge]) => ({
      termeId,
      statut: (juge === 'su' ? 'maitrise' : 'a-revoir') as 'maitrise' | 'a-revoir',
    }))
    if (mises.length > 0) await progressionRepository.mettreAJourStatutBatch(mises)
    await statsRepository.ajouterQuizReussiAujourdhui()
    await db.historiqueQuiz.add({
      date: new Date().toISOString().slice(0, 10),
      type: 'revision-rapide',
      correct: Array.from(jugMap.values()).filter(j => j === 'su').length,
      total: jugMap.size,
    })
  }, [])

  const juger = useCallback(async (j: Jugement) => {
    if (!deck[index]) return
    setExitDir(j === 'su' ? 1 : -1)
    setRetourne(false)
    const newJugements = new Map(jugements).set(deck[index].id, j)
    setJugements(newJugements)
    if (index + 1 >= deck.length) {
      await terminerSession(newJugements)
      setRaison('fini')
      setTermine(true)
    } else {
      setAnimKey(k => k + 1)
      setIndex(i => i + 1)
    }
  }, [deck, index, jugements, terminerSession])

  const formatTemps = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  const pctTemps = (tempsRestant / DUREE_SECONDES) * 100
  const nbSu = Array.from(jugements.values()).filter(j => j === 'su').length

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-svh">
        <div className="w-8 h-8 border-2 border-[var(--color-candy-rose)] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (deck.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-svh gap-5 p-8 text-center">
        <PluмyMascot etat="encouragement" taille={80} />
        <p className="text-[var(--color-gris-texte)] text-sm">{fr.revisionRapide.aucunTerme}</p>
        <button onClick={() => navigate('/')} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour à l'accueil
        </button>
      </div>
    )
  }

  if (termine) {
    return (
      <div className="flex flex-col items-center justify-center min-h-svh bg-[var(--color-plumy-bg)] p-8 gap-6 text-center">
        <PluмyMascot etat={nbSu >= jugements.size / 2 ? 'reussite' : 'encouragement'} taille={100} />
        <div>
          <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-1">
            {raison === 'temps' ? fr.revisionRapide.tempsEcoule : 'Session terminée !'}
          </h1>
          <p className="text-sm text-[var(--color-gris-texte)]">
            {nbSu} / {jugements.size} termes maîtrisés
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            onClick={() => navigate('/revision')}
            className="w-full py-3 rounded-2xl bg-[var(--color-candy-rose)] text-white font-bold text-sm"
          >
            Voir les termes à revoir
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 rounded-2xl border border-[var(--color-gris-doux)] text-[var(--color-gris-texte)] text-sm"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  const carte = deck[index]

  return (
    <div className="flex flex-col min-h-svh bg-[var(--color-plumy-bg)]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-10 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {fr.revisionRapide.titre}
        </button>
        <div className="flex items-center gap-2">
          <span className={`font-[var(--font-titre)] font-bold text-sm ${tempsRestant <= 30 ? 'text-[var(--color-candy-corail)]' : 'text-[var(--color-gris-texte)]'}`}>
            {formatTemps(tempsRestant)}
          </span>
          <span className="text-xs text-[var(--color-gris-texte)]">{index + 1}/{deck.length}</span>
        </div>
      </header>

      {/* Barre de temps */}
      <div className="px-4 mb-4">
        <div className="h-1.5 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full transition-colors"
            style={{ backgroundColor: tempsRestant <= 30 ? 'var(--color-candy-corail)' : 'var(--color-candy-rose)' }}
            animate={{ width: `${pctTemps}%` }}
            transition={{ duration: 1 }}
          />
        </div>
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
            <button
              onClick={!retourne ? () => setRetourne(true) : undefined}
              className={`w-full min-h-52 rounded-3xl shadow-lg border text-left transition-all duration-200 ${
                retourne
                  ? 'bg-white border-[var(--color-candy-rose)] cursor-default'
                  : 'bg-[#fce4ec] border-[var(--color-candy-rose)] cursor-pointer hover:shadow-xl active:scale-[0.98]'
              }`}
              type="button"
              aria-label={retourne ? undefined : 'Voir la définition'}
            >
              {!retourne ? (
                <div className="p-6 flex flex-col gap-3">
                  <p className="font-bold text-2xl text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
                    {carte.nom}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {carte.disciplines.slice(0, 2).map(d => (
                      <span key={d} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--color-candy-rose)] text-white">{d}</span>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--color-candy-rose-dark)] mt-auto">Appuie pour voir la définition →</p>
                </div>
              ) : (
                <div className="p-6 flex flex-col gap-2">
                  <p className="text-xs font-semibold text-[var(--color-candy-rose)] uppercase tracking-wide">Définition</p>
                  <p className="text-sm font-semibold text-[var(--color-encre)] leading-relaxed">{carte.definition}</p>
                </div>
              )}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Boutons */}
      <div className="px-5 pb-10 pt-4">
        <AnimatePresence>
          {retourne ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex gap-3"
            >
              <button
                onClick={() => juger('a-revoir')}
                className="flex-1 py-4 rounded-2xl border-2 border-[var(--color-candy-corail)] text-[var(--color-candy-corail)] font-bold text-sm flex flex-col items-center gap-1 active:scale-95 transition-transform"
              >
                <span className="text-xl">↩</span>
                À revoir
              </button>
              <button
                onClick={() => juger('su')}
                className="flex-1 py-4 rounded-2xl bg-[var(--color-candy-menthe)] text-white font-bold text-sm flex flex-col items-center gap-1 active:scale-95 transition-transform"
              >
                <span className="text-xl">✓</span>
                Je sais
              </button>
            </motion.div>
          ) : (
            <p className="text-center text-xs text-[var(--color-gris-texte)] py-4">
              Appuie sur la carte pour voir la définition
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
