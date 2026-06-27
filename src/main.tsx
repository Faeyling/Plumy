import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import './styles/tokens.css'

// Applique la taille de police sauvegardée
const tailleSaved = localStorage.getItem('plumy-taille-police')
if (tailleSaved === 'grande') document.documentElement.style.fontSize = '18px'
else if (tailleSaved === 'tres-grande') document.documentElement.style.fontSize = '20px'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
