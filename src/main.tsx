import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
// Polices auto-hébergées (sous-ensemble latin) pour fonctionner hors ligne
import '@fontsource/nunito/latin-400.css'
import '@fontsource/nunito/latin-600.css'
import '@fontsource/nunito/latin-700.css'
import '@fontsource/nunito/latin-800.css'
import '@fontsource/nunito/latin-900.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/caveat/latin-400.css'
import '@fontsource/caveat/latin-600.css'
import './styles/tokens.css'

// Après une mise à jour, un ancien onglet peut réclamer un fichier JS qui n'existe plus :
// on recharge pour récupérer la nouvelle version au lieu de planter.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  window.location.reload()
})

// Applique la taille de police sauvegardée
const tailleSaved = localStorage.getItem('plumy-taille-police')
if (tailleSaved === 'grande') document.documentElement.style.fontSize = '18px'
else if (tailleSaved === 'tres-grande') document.documentElement.style.fontSize = '20px'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
