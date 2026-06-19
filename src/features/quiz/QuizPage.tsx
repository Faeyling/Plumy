import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

export function QuizPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-8 text-center">
      <PluмyMascot etat="repos" taille={100} />
      <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
        {fr.nav.quiz}
      </h1>
      <p className="text-[var(--color-gris-texte)] text-sm max-w-xs">
        Les quiz arrivent après chaque unité. Patience, Plumy prépare les questions !
      </p>
    </div>
  )
}
