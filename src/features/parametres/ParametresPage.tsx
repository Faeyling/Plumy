import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fr } from '@/i18n/fr'

type TaillePolice = 'normale' | 'grande' | 'tres-grande'

const TAILLE_SCALE: Record<TaillePolice, string> = {
  normale: '16px',
  grande: '18px',
  'tres-grande': '20px',
}

function getTaillePolice(): TaillePolice {
  return (localStorage.getItem('plumy-taille-police') as TaillePolice) ?? 'normale'
}

function appliquerTaillePolice(taille: TaillePolice) {
  document.documentElement.style.fontSize = TAILLE_SCALE[taille]
  localStorage.setItem('plumy-taille-police', taille)
}

export function ParametresPage() {
  const navigate = useNavigate()
  const [taille, setTaille] = useState<TaillePolice>(getTaillePolice)

  useEffect(() => {
    appliquerTaillePolice(taille)
  }, [taille])

  return (
    <div className="flex flex-col min-h-svh">
      <header className="bg-[var(--color-plumy-bg)] px-5 pt-12 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm mb-4"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </button>
        <h1 className="font-[var(--font-titre)] font-extrabold text-2xl text-[var(--color-encre)]">
          {fr.parametres.titre}
        </h1>
      </header>

      <div className="flex-1 px-4 py-5 space-y-6 pb-28">
        {/* Taille de police */}
        <Section titre={fr.parametres.affichage}>
          <div className="space-y-3">
            <p className="text-sm text-[var(--color-gris-texte)]">{fr.parametres.taillePolice}</p>
            <div className="flex gap-2">
              {(['normale', 'grande', 'tres-grande'] as TaillePolice[]).map(t => {
                const labels: Record<TaillePolice, string> = {
                  normale: fr.parametres.normale,
                  grande: fr.parametres.grande,
                  'tres-grande': fr.parametres.tresGrande,
                }
                return (
                  <button
                    key={t}
                    onClick={() => setTaille(t)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-colors ${
                      taille === t
                        ? 'border-[var(--color-candy-rose)] bg-[#fce4ec] text-[var(--color-candy-rose-dark)]'
                        : 'border-[var(--color-gris-doux)] text-[var(--color-gris-texte)]'
                    }`}
                    aria-pressed={taille === t}
                  >
                    {labels[t]}
                  </button>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Installer l'app */}
        <Section titre={fr.parametres.installer}>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--color-encre)]">{fr.parametres.installerAndroid}</p>
            <ol className="space-y-2 text-sm text-[var(--color-gris-texte)]">
              {fr.parametres.installerEtapes.map((etape, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: 'var(--color-candy-lavande)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span>{etape}</span>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Contact */}
        <Section titre={fr.parametres.contact}>
          <div className="space-y-2">
            <p className="text-sm text-[var(--color-gris-texte)]">{fr.parametres.contactTexte}</p>
            <a
              href="mailto:faeyling@proton.me"
              className="flex items-center gap-2 text-sm text-[var(--color-plumy-blue)] underline underline-offset-2 font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              faeyling@proton.me
            </a>
          </div>
        </Section>

        {/* RGPD */}
        <Section titre={fr.parametres.confidentialite}>
          <div className="space-y-3 text-sm text-[var(--color-gris-texte)] leading-relaxed">
            <p>
              <strong className="text-[var(--color-encre)]">Aucune donnée envoyée en ligne.</strong>{' '}
              {fr.parametres.rgpdTexte1}
            </p>
            <p>{fr.parametres.rgpdTexte2}</p>
            <p>
              <strong className="text-[var(--color-encre)]">Export de tes données.</strong>{' '}
              {fr.parametres.rgpdTexte3}
            </p>
            <p>
              <strong className="text-[var(--color-encre)]">Suppression.</strong>{' '}
              {fr.parametres.rgpdTexte4}
            </p>
          </div>
        </Section>

        <p className="text-center text-xs text-[var(--color-gris-texte)] py-2">
          {fr.parametres.version}
        </p>
      </div>
    </div>
  )
}

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
        {titre}
      </h2>
      <div className="bg-white rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-card)]">
        {children}
      </div>
    </section>
  )
}
