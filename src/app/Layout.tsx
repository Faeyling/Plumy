import { useEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { fr } from '@/i18n/fr'
import { statsRepository } from '@/data/repositories/statsRepository'
import { BoutonSauvegarde } from '@/features/sauvegarde/BoutonSauvegarde'
import { RappelSauvegarde } from '@/features/sauvegarde/RappelSauvegarde'
import { OnboardingModal } from '@/features/onboarding/OnboardingModal'
import { PlumesBackground } from '@/components/ui/PlumesBackground'
type TaillePolice = 'normale' | 'grande' | 'tres-grande'
const TAILLE_SCALE: Record<TaillePolice, string> = { normale: '16px', grande: '18px', 'tres-grande': '20px' }
function appliquerTaillePolice(t: TaillePolice) { document.documentElement.style.fontSize = TAILLE_SCALE[t] }

const navItems = [
  { to: '/', label: fr.nav.accueil, icon: HomeIcon, end: true },
  { to: '/glossaire', label: fr.nav.glossaire, icon: BookIcon },
  { to: '/quiz', label: fr.nav.quiz, icon: StarIcon },
  { to: '/progres', label: fr.nav.progres, icon: ChartIcon },
  { to: '/carnets', label: fr.nav.carnets, icon: PenIcon },
  { to: '/sources', label: fr.nav.sources, icon: SourcesIcon },
]

export function Layout() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    statsRepository.get().then(stats => {
      if (!stats.onboardingVu) setShowOnboarding(true)
    })
    const taille = (localStorage.getItem('plumy-taille-police') as Parameters<typeof appliquerTaillePolice>[0]) ?? 'normale'
    appliquerTaillePolice(taille)
  }, [])

  return (
    <div className="flex flex-col min-h-svh">
      <PlumesBackground />
      {/* Skip link accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-candy-rose)] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold"
      >
        Aller au contenu principal
      </a>

      {/* Bouton sauvegarde permanent + paramètres */}
      <div className="fixed top-3 right-3 z-40 flex items-center gap-2">
        <BoutonSauvegarde />
        <button
          onClick={() => navigate('/parametres')}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-sm border border-[var(--color-gris-doux)]"
          aria-label={fr.parametres.titre}
        >
          <GearIcon />
        </button>
      </div>

      <main id="main-content" className="flex-1 overflow-y-auto pb-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <RappelSauvegarde />

      {showOnboarding && (
        <OnboardingModal onTermine={() => setShowOnboarding(false)} />
      )}

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-[var(--color-gris-doux)] safe-area-pb"
        aria-label="Navigation principale"
      >
        <ul className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl transition-colors text-xs font-medium ${
                    isActive
                      ? 'text-[var(--color-candy-rose-dark)]'
                      : 'text-[var(--color-gris-texte)] hover:text-[var(--color-encre)]'
                  }`
                }
                aria-label={label}
              >
                {({ isActive }) => (
                  <>
                    <Icon active={isActive} />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

function GearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="var(--color-gris-texte)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="var(--color-gris-texte)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BookIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a2 2 0 012-2h14v14H6.5A2.5 2.5 0 004 19.5z"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? 'var(--color-candy-rose-dark)' : 'none'}
        fillOpacity={active ? 0.08 : 0}
      />
    </svg>
  )
}

function StarIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? 'var(--color-candy-jaune)' : 'none'}
        fillOpacity={active ? 0.5 : 0}
      />
    </svg>
  )
}

function ChartIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 20V10M12 20V4M6 20v-6"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
      />
    </svg>
  )
}

function PenIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SourcesIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4"
        stroke={active ? 'var(--color-candy-rose-dark)' : 'currentColor'}
        strokeWidth={active ? 2.5 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
