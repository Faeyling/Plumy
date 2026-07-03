import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { OnboardingModal } from '@/features/onboarding/OnboardingModal'
import { useStats } from '@/hooks/useStats'
import { statsRepository } from '@/data/repositories/statsRepository'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { unites } from '@/content/unites'
import { tousLesTermes, getTermesParUnite } from '@/content/termes/index'
import { iconeIllustration } from '@/content/illustrations'
import { seededRandom, todaySeed } from '@/lib/seededRandom'
import { getEntreeJournal } from '@/content/journal'
import { parcours } from '@/content/parcours'
import type { Unite } from '@/content/schema'
import { fr } from '@/i18n/fr'
import { getPalierCourant, getPalierSuivant } from '@/lib/paliers'
import { SpeakButton } from '@/components/ui/SpeakButton'

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const _seed = todaySeed()
const _rng = seededRandom(_seed)
const _candidats = tousLesTermes.filter(t => t.definition.length > 20)
const TERME_DU_JOUR = [..._candidats].sort(() => _rng() - 0.5)[0]
const ENTREE_JOURNAL = getEntreeJournal(_seed)
const MOT_PLUMY = fr.termeDuJour.motDePlumy[_seed % fr.termeDuJour.motDePlumy.length]

const iconeCouleur: Record<string, string> = {
  'corps-qui-danse': 'var(--color-candy-lavande)',
  'histoire-danse': 'var(--color-candy-corail)',
  classique: 'var(--color-plumy-blue)',
  contemporain: 'var(--color-candy-menthe)',
  moderne: 'var(--color-candy-corail)',
  jazz: 'var(--color-candy-jaune)',
  heels: 'var(--color-candy-rose)',
  cabaret: 'var(--color-candy-corail)',
  'pole-dance': 'var(--color-plumy-teal)',
  burlesque: 'var(--color-candy-lavande)',
  sante: 'var(--color-candy-menthe)',
  improvisation: 'var(--color-candy-jaune)',
}

const ILLUSTRATIONS = unites
  .map(u => iconeIllustration[u.iconeSvgId])
  .filter((src): src is string => !!src)

export function AccueilPage() {
  const { stats, refresh } = useStats()
  const [premiereFois, setPremiereFois] = useState(false)
  const [aRevoir, setARevoir] = useState(0)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [progressParUnite, setProgressParUnite] = useState<Record<number, { vus: number; total: number }>>({})
  const [parcoursVus, setParcoursVus] = useState<Record<string, number>>({})
  const [derniereUnite, setDerniereUnite] = useState<Unite | null>(null)
  const [illustrationIdx] = useState(() => {
    const key = 'plumy-accueil-illustration-idx'
    const stored = parseInt(localStorage.getItem(key) ?? '0', 10)
    const idx = isNaN(stored) ? 0 : stored % ILLUSTRATIONS.length
    localStorage.setItem(key, String((idx + 1) % ILLUSTRATIONS.length))
    return idx
  })

  const message = useMemo(
    () =>
      premiereFois
        ? pickRandom(fr.plumy.bienvenue)
        : pickRandom(fr.plumy.bonRetour),
    [premiereFois],
  )

  useEffect(() => {
    statsRepository.get().then((s) => {
      setPremiereFois(!s.onboardingVu)
    })
    statsRepository.enregistrerVisite().then(refresh)
    progressionRepository.listARevoir().then(list => setARevoir(list.length))
    progressionRepository.list().then(progressions => {
      const progMap = new Map(progressions.map(p => [p.termeId, p]))
      const result: Record<number, { vus: number; total: number }> = {}
      for (const unite of unites) {
        const termes = getTermesParUnite(unite.numero)
        const vus = termes.filter(t => {
          const p = progMap.get(t.id)
          return p && p.statut !== 'jamais-vu'
        }).length
        result[unite.numero] = { vus, total: termes.length }
      }
      setProgressParUnite(result)

      const parcResult: Record<string, number> = {}
      for (const p of parcours) {
        const vus = p.termeIds.filter(id => {
          const prog = progMap.get(id)
          return prog && prog.statut !== 'jamais-vu'
        }).length
        parcResult[p.id] = vus
      }
      setParcoursVus(parcResult)

      // Dernière unité visitée
      const avecDate = progressions.filter(p => p.vuLe)
      if (avecDate.length > 0) {
        const plusRecent = avecDate.reduce((a, b) => (b.vuLe ?? 0) > (a.vuLe ?? 0) ? b : a)
        const unite = unites.find(u => u.termeIds.includes(plusRecent.termeId))
        setDerniereUnite(unite ?? null)
      }
    })
  }, [refresh])


  const serieJours = stats?.serieJours ?? 0
  const points = stats?.points ?? 0

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête rose */}
      <header className="relative bg-[var(--color-plumy-bg)] pt-10 pb-6 px-5 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="sr-only">Plumy — Vocabulaire de la danse</h1>
          <motion.img
            src={ILLUSTRATIONS[illustrationIdx]}
            alt=""
            aria-hidden="true"
            className="w-64 h-64 object-contain"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          <p className="font-[var(--font-manuscrit)] text-[var(--color-encre)] text-lg leading-snug max-w-xs px-2">
            {message}
          </p>
        </motion.div>
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-candy-lavande)] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[var(--color-candy-rose)] opacity-10 pointer-events-none" />
      </header>

      {/* Bande de stats */}
      <section aria-label="Tes statistiques" className="bg-white/60 border-b border-[var(--color-gris-doux)]">
        {/* Palier de points */}
        <PalierPoints points={points} />

        {/* Série + à revoir */}
        <div className="flex items-center justify-center gap-6 pb-4 px-5">
          <motion.div
            animate={serieJours >= 1 ? { scale: [1, 1.15, 1] } : {}}
            transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
          >
            <StatPill
              value={serieJours}
              label={serieJours <= 1 ? '1 jour de suite' : `${serieJours} jours de suite`}
              color="var(--color-candy-menthe)"
              icon="🔥"
            />
          </motion.div>
          {aRevoir > 0 && (
            <>
              <div className="w-px h-8 bg-[var(--color-gris-doux)]" />
              <Link to="/revision">
                <StatPill value={aRevoir} label="à revoir" color="var(--color-candy-corail)" icon="↩" />
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Reprends où tu en étais */}
      {derniereUnite && (
        <section className="px-4 pt-5" aria-label="Reprends où tu en étais">
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            Reprends où tu en étais
          </h2>
          <Link
            to={`/unite/${derniereUnite.numero}`}
            className="flex items-center gap-3 p-4 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
          >
            <span
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-titre)] font-bold text-white text-sm"
              style={{ backgroundColor: iconeCouleur[derniereUnite.iconeSvgId] ?? 'var(--color-candy-lavande)' }}
              aria-hidden="true"
            >
              {derniereUnite.numero}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
                {derniereUnite.titre}
              </p>
              <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">
                {progressParUnite[derniereUnite.numero]
                  ? `${progressParUnite[derniereUnite.numero].vus} / ${progressParUnite[derniereUnite.numero].total} termes vus`
                  : 'Continue ta progression'}
              </p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      )}

      {/* Terme du jour */}
      {TERME_DU_JOUR && (
        <section className="px-4 pt-5" aria-label="Terme du jour">
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            {fr.termeDuJour.titre}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 flex gap-3"
          >
            <img
              src="/mascotte/plumy-encouragement.png"
              alt=""
              aria-hidden="true"
              className="w-14 h-14 object-contain flex-shrink-0"
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base leading-snug mb-1">
                {TERME_DU_JOUR.nom}
              </p>
              <div className="flex items-start gap-1 mb-2">
                <p className="text-xs text-[var(--color-gris-texte)] leading-snug line-clamp-2 flex-1">
                  {TERME_DU_JOUR.definition}
                </p>
                <SpeakButton text={TERME_DU_JOUR.definition} size={13} />
              </div>
              <p className="text-xs italic text-[var(--color-candy-rose)] mb-2">{MOT_PLUMY}</p>
              <Link
                to={`/terme/${TERME_DU_JOUR.id}`}
                className="text-xs font-semibold text-[var(--color-plumy-blue)] underline underline-offset-2"
              >
                {fr.termeDuJour.decouvrir}
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Journal de Plumy */}
      {ENTREE_JOURNAL && (
        <section className="px-4 pt-4" aria-label="Journal de Plumy">
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            {fr.journalPlumy.titre}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[var(--color-candy-lavande-light,#f3f0ff)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4"
          >
            <p className="font-[var(--font-manuscrit)] font-bold text-[var(--color-encre)] text-base mb-2">
              {ENTREE_JOURNAL.titre}
            </p>
            <div className="flex items-start gap-1">
              <p className="text-sm italic text-[var(--color-encre)] leading-snug line-clamp-3 flex-1">
                {ENTREE_JOURNAL.contenu}
              </p>
              <SpeakButton text={ENTREE_JOURNAL.contenu} size={13} />
            </div>
            {ENTREE_JOURNAL.termeIds.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {ENTREE_JOURNAL.termeIds.map(id => {
                  const t = tousLesTermes.find(x => x.id === id)
                  if (!t) return null
                  return (
                    <Link
                      key={id}
                      to={`/terme/${id}`}
                      className="text-xs px-2 py-0.5 rounded-full bg-white text-[var(--color-plumy-blue)] font-semibold"
                    >
                      {t.nom}
                    </Link>
                  )
                })}
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* Parcours thématiques */}
      <section className="px-4 pt-4" aria-label={fr.parcours.titre}>
        <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
          {fr.parcours.titre}
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {parcours.map((p, idx) => {
            const vus = parcoursVus[p.id] ?? 0
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
              >
                <Link
                  to={`/parcours/${p.id}`}
                  className="flex flex-col p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow h-full"
                >
                  <span className="text-2xl mb-1" aria-hidden="true">{p.emoji}</span>
                  <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-xs leading-snug mb-1">
                    {p.titre}
                  </p>
                  <p className="text-[10px] text-[var(--color-gris-texte)] leading-snug mb-2 flex-1">
                    {fr.parcours.termes(p.termeIds.length)}
                  </p>
                  <div className="h-1 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${Math.round((vus / p.termeIds.length) * 100)}%`, backgroundColor: p.couleur }}
                    />
                  </div>
                  <p className="text-[9px] text-[var(--color-gris-texte)] mt-0.5">
                    {fr.parcours.progression(vus, p.termeIds.length)}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Liste des unités */}
      <section className="flex-1 px-4 py-6 space-y-3" aria-label="Unités de cours">
        <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-lg mb-4">
          {fr.accueil.toutesLesUnites}
        </h2>
        {unites.map((unite, idx) => (
          <UniteCard key={unite.numero} unite={unite} index={idx} progression={progressParUnite[unite.numero]} />
        ))}
      </section>

      {/* Pied de page */}
      <footer className="px-5 pb-6 pt-2 flex justify-center">
        <button
          onClick={() => setShowOnboarding(true)}
          className="text-xs text-[var(--color-gris-texte)] underline underline-offset-2"
        >
          {fr.onboarding.rejouer}
        </button>
      </footer>

      {showOnboarding && (
        <OnboardingModal onTermine={() => setShowOnboarding(false)} />
      )}
    </div>
  )
}

function PalierPoints({ points }: { points: number }) {
  const courant = getPalierCourant(points)
  const suivant = getPalierSuivant(points)
  const pct = suivant
    ? Math.round(((points - courant.seuilPts) / (suivant.seuilPts - courant.seuilPts)) * 100)
    : 100

  return (
    <div className="px-5 pt-4 pb-3">
      <div className="flex items-baseline justify-between mb-1">
        <div className="flex items-baseline gap-2">
          <span className="font-[var(--font-titre)] font-extrabold text-2xl" style={{ color: courant.couleur }}>
            {points}
          </span>
          <span className="text-xs text-[var(--color-gris-texte)]">{fr.accueil.pointsLabel}</span>
        </div>
        <span className="text-sm font-[var(--font-titre)] font-semibold text-[var(--color-encre)]">
          {courant.symbole} {courant.nom}
        </span>
      </div>
      <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: suivant ? suivant.couleur : courant.couleur }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
      <p className="text-[10px] text-[var(--color-gris-texte)] mt-1">
        {suivant
          ? `${suivant.seuilPts - points} pts pour atteindre ${suivant.symbole} ${suivant.nom}`
          : `Palier maximum atteint — tu es ${courant.symbole} ${courant.nom} !`}
      </p>
    </div>
  )
}

function StatPill({
  value,
  label,
  color,
  icon,
}: {
  value: number
  label: string
  color: string
  icon?: string
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-[var(--font-titre)] font-extrabold text-2xl" style={{ color }}>
        {icon && <span className="mr-1">{icon}</span>}
        {value}
      </span>
      <span className="text-xs text-[var(--color-gris-texte)]">{label}</span>
    </div>
  )
}

function UniteCard({ unite, index, progression }: { unite: Unite; index: number; progression?: { vus: number; total: number } }) {
  const couleur = iconeCouleur[unite.iconeSvgId] ?? 'var(--color-candy-lavande)'
  const pct = progression && progression.total > 0 ? Math.round((progression.vus / progression.total) * 100) : 0
  const termine = pct === 100

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: 'easeOut' }}
    >
      <Link
        to={`/unite/${unite.numero}`}
        className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
        aria-label={`Unité ${index} — ${unite.titre}`}
      >
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-titre)] font-bold text-white text-sm"
          style={{ backgroundColor: couleur }}
          aria-hidden="true"
        >
          {termine ? '✓' : index}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
            {unite.titre}
          </p>
          {progression && progression.total > 0 && (
            <div className="mt-1.5">
              <div className="h-1 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: termine ? 'var(--color-candy-menthe)' : couleur }}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.04 }}
                />
              </div>
              <p className="text-[10px] text-[var(--color-gris-texte)] mt-0.5">
                {progression.vus} / {progression.total}
              </p>
            </div>
          )}
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  )
}
