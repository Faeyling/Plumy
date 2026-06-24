import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { exporterDonnees } from './sauvegardeService'
import { statsRepository } from '@/data/repositories/statsRepository'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

const SEUIL_JOURS = 5

export function RappelSauvegarde() {
  const [visible, setVisible] = useState(false)
  const [jours, setJours] = useState(0)

  useEffect(() => {
    statsRepository.get().then((stats) => {
      if (
        stats.rappelSauvegardeActif !== false &&
        (stats.joursUsageDepuisExport ?? 0) >= SEUIL_JOURS
      ) {
        setJours(stats.joursUsageDepuisExport ?? SEUIL_JOURS)
        setVisible(true)
      }
    })
  }, [])

  async function handleExporter() {
    await exporterDonnees()
    await statsRepository.enregistrerExport()
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="fixed bottom-20 left-3 right-3 z-40 max-w-sm mx-auto"
          role="alertdialog"
          aria-label="Rappel de sauvegarde"
        >
          <div className="bg-white rounded-[var(--radius-card)] shadow-xl border border-[var(--color-candy-lavande)] p-4 flex gap-3 items-start">
            <div className="shrink-0">
              <PluмyMascot etat="repos" taille={44} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[var(--color-encre)] font-medium leading-snug">
                {fr.plumy.rappelSauvegarde.replace('{n}', String(jours))}
              </p>
              <div className="flex gap-2 mt-2.5 flex-wrap">
                <button
                  onClick={handleExporter}
                  className="px-3 py-1.5 bg-[var(--color-candy-rose)] text-white text-xs font-[var(--font-titre)] font-bold rounded-lg shrink-0"
                >
                  {fr.sauvegarde.exporterMaintenant}
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="px-3 py-1.5 text-[var(--color-gris-texte)] text-xs font-medium"
                >
                  {fr.sauvegarde.plusTard}
                </button>
                <button
                  onClick={async () => {
                    await statsRepository.update({ rappelSauvegardeActif: false })
                    setVisible(false)
                  }}
                  className="px-3 py-1.5 text-[var(--color-gris-texte)] text-xs underline underline-offset-2"
                >
                  {fr.sauvegarde.nePlusRappeler}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
