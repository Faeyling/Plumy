import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { exporterDonnees, importerDonnees, validerSauvegarde, type SauvegardeJSON } from './sauvegardeService'
import { statsRepository } from '@/data/repositories/statsRepository'
import { fr } from '@/i18n/fr'

type Phase = 'menu' | 'preview' | 'succes'

export function BoutonSauvegarde() {
  const [ouvert, setOuvert] = useState(false)
  const [phase, setPhase] = useState<Phase>('menu')
  const [donnees, setDonnees] = useState<SauvegardeJSON | null>(null)
  const [erreur, setErreur] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function fermer() {
    setOuvert(false)
    setPhase('menu')
    setDonnees(null)
    setErreur(null)
  }

  async function handleExport() {
    await exporterDonnees()
    await statsRepository.enregistrerExport()
    fermer()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    e.target.value = ''
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const json = JSON.parse(ev.target?.result as string)
        setDonnees(validerSauvegarde(json))
        setPhase('preview')
        setErreur(null)
      } catch (err) {
        setErreur(err instanceof Error ? err.message : 'Fichier invalide.')
      }
    }
    reader.readAsText(file)
  }

  async function handleImport(mode: 'fusionner' | 'remplacer') {
    if (!donnees) return
    try {
      await importerDonnees(donnees, mode)
      setPhase('succes')
      setTimeout(fermer, 2000)
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Erreur lors de l'importation.")
      setPhase('menu')
    }
  }

  return (
    <>
      <button
        onClick={() => setOuvert(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-candy-lavande)] text-[var(--color-encre)] text-xs font-[var(--font-titre)] font-semibold shadow-sm shrink-0"
        aria-label={fr.plumy.sauvegarder}
      >
        <SaveIcon />
        <span className="hidden sm:inline">{fr.plumy.sauvegarder}</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept=".json"
        className="sr-only"
        onChange={handleFileChange}
        aria-hidden="true"
      />

      <AnimatePresence>
        {ouvert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) fermer() }}
          >
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="bg-white rounded-[var(--radius-card)] p-6 w-full max-w-sm shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label={fr.plumy.sauvegarder}
            >
              {phase === 'menu' && (
                <div className="space-y-4">
                  <h2 className="font-[var(--font-titre)] font-bold text-lg text-[var(--color-encre)]">
                    {fr.plumy.sauvegarder}
                  </h2>
                  <p className="text-sm text-[var(--color-gris-texte)]">
                    {fr.plumy.exporterExplication}
                  </p>
                  <button
                    onClick={handleExport}
                    className="w-full py-3 bg-[var(--color-candy-rose)] text-white font-[var(--font-titre)] font-bold rounded-xl text-sm"
                  >
                    ↓ {fr.plumy.exporter}
                  </button>
                  <div className="border-t border-[var(--color-gris-doux)] pt-3 space-y-2">
                    <p className="text-xs text-[var(--color-gris-texte)]">
                      {fr.sauvegarde.importerExplication}
                    </p>
                    <button
                      onClick={() => inputRef.current?.click()}
                      className="w-full py-2.5 border-2 border-[var(--color-gris-doux)] text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-xl text-sm"
                    >
                      ↑ {fr.plumy.importer}
                    </button>
                    {erreur && (
                      <p className="text-xs text-[var(--color-candy-corail)]">{erreur}</p>
                    )}
                  </div>
                  <button
                    onClick={fermer}
                    className="w-full py-2 text-[var(--color-gris-texte)] text-sm"
                  >
                    {fr.actions.fermer}
                  </button>
                </div>
              )}

              {phase === 'preview' && donnees && (
                <div className="space-y-4">
                  <h2 className="font-[var(--font-titre)] font-bold text-lg text-[var(--color-encre)]">
                    {fr.sauvegarde.apercu}
                  </h2>
                  <div className="bg-[var(--color-plumy-bg)] rounded-xl p-3 space-y-1.5 text-sm">
                    <Row label="Exporté le" value={new Date(donnees.exporteLe).toLocaleDateString('fr-FR')} />
                    <Row label="Progression" value={`${donnees.progression?.length ?? 0} termes`} />
                    <Row label="Termes perso" value={String(donnees.termesPersonnels?.length ?? 0)} />
                    {donnees.stats?.points !== undefined && (
                      <Row label="Points" value={String(donnees.stats.points)} />
                    )}
                  </div>
                  <p className="text-xs text-[var(--color-gris-texte)]">{fr.sauvegarde.choisirMode}</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleImport('fusionner')}
                      className="w-full py-2.5 bg-[var(--color-candy-menthe)] text-[var(--color-encre)] font-[var(--font-titre)] font-bold rounded-xl text-sm"
                    >
                      {fr.sauvegarde.fusionner} — <span className="font-normal">{fr.sauvegarde.fusionnerDetail}</span>
                    </button>
                    <button
                      onClick={() => handleImport('remplacer')}
                      className="w-full py-2.5 bg-[var(--color-candy-corail)] text-white font-[var(--font-titre)] font-bold rounded-xl text-sm"
                    >
                      {fr.sauvegarde.remplacer} — <span className="font-normal">{fr.sauvegarde.remplacerDetail}</span>
                    </button>
                  </div>
                  <button
                    onClick={() => setPhase('menu')}
                    className="w-full py-2 text-[var(--color-gris-texte)] text-sm"
                  >
                    {fr.actions.annuler}
                  </button>
                </div>
              )}

              {phase === 'succes' && (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <span className="text-5xl">✓</span>
                  <p className="font-[var(--font-titre)] font-bold text-lg text-[var(--color-encre)]">
                    {fr.sauvegarde.importSucces}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-[var(--color-gris-texte)]">{label}</span>
      <strong className="text-[var(--color-encre)]">{value}</strong>
    </div>
  )
}

function SaveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M17 21v-8H7v8M7 3v5h8"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
