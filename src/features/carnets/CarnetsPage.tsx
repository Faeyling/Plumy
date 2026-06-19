import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

export function CarnetsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-8 text-center">
      <PluмyMascot etat="encouragement" taille={100} />
      <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
        {fr.nav.carnets}
      </h1>
      <p className="text-[var(--color-gris-texte)] text-sm max-w-xs">
        {fr.carnets.aucunTermePerso}
      </p>
    </div>
  )
}
