import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { useStats } from '@/hooks/useStats'
import { statsRepository } from '@/data/repositories/statsRepository'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { unites } from '@/content/unites'
import type { Unite } from '@/content/schema'
import { fr } from '@/i18n/fr'

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

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

export function AccueilPage() {
  const { stats, refresh } = useStats()
  const [premiereFois, setPremiereFois] = useState(false)
  const [aRevoir, setARevoir] = useState(0)

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
  }, [refresh])

  const serieJours = stats?.serieJours ?? 0
  const points = stats?.points ?? 0

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête rose */}
      <header className="relative bg-gradient-to-b from-[var(--color-candy-rose-light)] to-[var(--color-plumy-bg)] pt-10 pb-6 px-5 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3"
        >
          <PluмyMascot etat={premiereFois ? 'accueil' : 'retour'} taille={130} />
          <p className="font-[var(--font-manuscrit)] text-[var(--color-encre)] text-lg leading-snug max-w-xs px-2">
            {message}
          </p>
        </motion.div>
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-candy-lavande)] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[var(--color-candy-rose)] opacity-10 pointer-events-none" />
      </header>

      {/* Bande de stats */}
      <section
        aria-label="Tes statistiques"
        className="flex items-center justify-center gap-6 py-4 px-5 bg-white/60 border-b border-[var(--color-gris-doux)]"
      >
        <StatPill value={points} label={fr.accueil.pointsLabel} color="var(--color-candy-lavande)" />
        <div className="w-px h-8 bg-[var(--color-gris-doux)]" />
        <StatPill
          value={serieJours}
          label={serieJours <= 1 ? '1 jour de suite' : `${serieJours} jours de suite`}
          color="var(--color-candy-menthe)"
          icon="🔥"
        />
        {aRevoir > 0 && (
          <>
            <div className="w-px h-8 bg-[var(--color-gris-doux)]" />
            <Link to="/revision">
              <StatPill value={aRevoir} label="à revoir" color="var(--color-candy-corail)" icon="↩" />
            </Link>
          </>
        )}
      </section>

      {/* Liste des unités */}
      <section className="flex-1 px-4 py-6 space-y-3" aria-label="Unités de cours">
        <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-lg mb-4">
          {fr.accueil.toutesLesUnites}
        </h2>
        {unites.map((unite, idx) => (
          <UniteCard key={unite.numero} unite={unite} index={idx} />
        ))}
      </section>
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

function UniteCard({ unite, index }: { unite: Unite; index: number }) {
  const couleur = iconeCouleur[unite.iconeSvgId] ?? 'var(--color-candy-lavande)'

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
          {index}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
            {unite.titre}
          </p>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  )
}
