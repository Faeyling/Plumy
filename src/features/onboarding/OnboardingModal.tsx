import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { statsRepository } from '@/data/repositories/statsRepository'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

type EtatMascotte = 'accueil' | 'encouragement' | 'repos'

interface Ecran {
  etat: EtatMascotte
  titre: string
  texte: string
}

const ECRANS: Ecran[] = [
  {
    etat: 'accueil',
    titre: fr.onboarding.ecran1Titre,
    texte: fr.onboarding.ecran1Texte,
  },
  {
    etat: 'encouragement',
    titre: fr.onboarding.ecran2Titre,
    texte: fr.onboarding.ecran2Texte,
  },
  {
    etat: 'repos',
    titre: fr.onboarding.ecran3Titre,
    texte: fr.onboarding.ecran3Texte,
  },
]

interface Props {
  onTermine: () => void
}

export function OnboardingModal({ onTermine }: Props) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const ecran = ECRANS[index]
  const isLast = index === ECRANS.length - 1

  async function terminer() {
    await statsRepository.update({ onboardingVu: true })
    onTermine()
  }

  function suivant() {
    if (isLast) {
      terminer()
    } else {
      setDir(1)
      setIndex((i) => i + 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[var(--radius-card)] w-full max-w-sm shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Bienvenue dans Plumy"
      >
        {/* Barre de progression */}
        <div className="flex gap-1.5 p-4 pb-0">
          {ECRANS.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i <= index ? 'bg-[var(--color-candy-rose)]' : 'bg-[var(--color-gris-doux)]'
              }`}
            />
          ))}
        </div>

        {/* Contenu */}
        <div className="p-6 pb-4">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ x: dir * 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -40, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col items-center gap-5 text-center"
            >
              <PluмyMascot etat={ecran.etat} taille={96} />
              <div className="space-y-2">
                <h2 className="font-[var(--font-titre)] font-bold text-xl text-[var(--color-encre)]">
                  {ecran.titre}
                </h2>
                <p className="text-sm text-[var(--color-gris-texte)] leading-relaxed max-w-xs mx-auto">
                  {ecran.texte}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-col gap-2">
          <button
            onClick={suivant}
            className="w-full py-3 bg-[var(--color-candy-rose)] text-white font-[var(--font-titre)] font-bold rounded-xl text-sm"
          >
            {isLast ? fr.onboarding.commencer : fr.onboarding.suivant}
          </button>
          <button
            onClick={terminer}
            className="w-full py-2 text-[var(--color-gris-texte)] text-sm"
          >
            {fr.onboarding.passer}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
