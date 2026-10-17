import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { fr } from '@/i18n/fr'

// Bandeau d'état réseau : hors ligne, prêt hors ligne.
// Les mises à jour s'appliquent seules (registerType 'autoUpdate') : un mode « prompt »
// laisserait bloqués sur l'ancienne version les utilisateurs déjà installés.
export function BandeauReseau() {
  const [enLigne, setEnLigne] = useState(() => navigator.onLine)
  const {
    offlineReady: [pretHorsLigne, setPretHorsLigne],
  } = useRegisterSW()

  useEffect(() => {
    const onOnline = () => setEnLigne(true)
    const onOffline = () => setEnLigne(false)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  useEffect(() => {
    if (!pretHorsLigne) return
    const t = setTimeout(() => setPretHorsLigne(false), 5000)
    return () => clearTimeout(t)
  }, [pretHorsLigne, setPretHorsLigne])

  if (!enLigne) {
    return (
      <div role="status" className="fixed top-0 left-0 right-0 z-50 px-4 py-1.5 text-center text-xs font-semibold text-[var(--color-encre)] bg-[var(--color-candy-jaune)]">
        {fr.reseau.horsLigne}
      </div>
    )
  }

  if (pretHorsLigne) {
    return (
      <div role="status" className="fixed bottom-20 left-3 right-3 z-50 max-w-lg mx-auto flex items-center gap-2 px-4 py-3 rounded-2xl bg-white shadow-lg border-2 border-[var(--color-candy-menthe)] text-sm">
        <span className="flex-1 text-[var(--color-encre)]">{fr.reseau.pretHorsLigne}</span>
        <button onClick={() => setPretHorsLigne(false)} className="px-2 py-1 text-[var(--color-gris-texte)]" aria-label={fr.reseau.fermer}>
          ✕
        </button>
      </div>
    )
  }

  return null
}
