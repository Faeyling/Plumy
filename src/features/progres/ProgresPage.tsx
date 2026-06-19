import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { useStats } from '@/hooks/useStats'
import { fr } from '@/i18n/fr'

export function ProgresPage() {
  const { stats } = useStats()

  return (
    <div className="flex flex-col items-center gap-8 p-6 pt-10">
      <PluмyMascot etat={stats && stats.points > 0 ? 'reussite' : 'accueil'} taille={100} />
      <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
        {fr.progres.titre}
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <StatCard label={fr.progres.points} value={stats?.points ?? 0} color="var(--color-candy-lavande)" />
        <StatCard label={fr.progres.serie} value={stats?.serieJours ?? 0} color="var(--color-candy-menthe)" suffix="j" />
        <StatCard label={fr.progres.termesVus} value={0} color="var(--color-plumy-blue)" />
        <StatCard label={fr.progres.quizReussis} value={stats?.quizJoues ?? 0} color="var(--color-candy-corail)" />
      </div>

      <p className="text-[var(--color-gris-texte)] text-sm text-center max-w-xs">
        Les graphiques de progression arrivent bientôt. Continue d'apprendre !
      </p>
    </div>
  )
}

function StatCard({ label, value, color, suffix = '' }: { label: string; value: number; color: string; suffix?: string }) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-card)] text-center">
      <p className="font-[var(--font-titre)] font-extrabold text-3xl" style={{ color }}>
        {value}{suffix}
      </p>
      <p className="text-xs text-[var(--color-gris-texte)] mt-1">{label}</p>
    </div>
  )
}
