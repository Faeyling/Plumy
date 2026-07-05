import { useState, useMemo } from 'react'
import { fr } from '@/i18n/fr'
import { references } from '@/content/references'
import type { Reference } from '@/content/schema'
import { SpeakButton } from '@/components/ui/SpeakButton'

type ThemeReference = Reference['theme']

const THEME_ORDER: ThemeReference[] = [
  'epidemiologie',
  'psychologie',
  'hanche-turnout-flexibilite',
  'renforcement-neuromusculaire',
  'pole-dance',
  'talons-heels',
  'francophone',
  'physiologie',
  'culture-histoire',
  'tango-argentin',
]

const DISCIPLINES = [
  'classique',
  'contemporain',
  'moderne',
  'jazz',
  'cabaret',
  'pole-dance',
  'burlesque',
  'heels',
  'tango-argentin',
] as const

export function SourcesPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('tous')

  const filtered = useMemo(() => {
    if (selectedDiscipline === 'tous') return references
    return references.filter((r) => r.disciplines?.includes(selectedDiscipline as never))
  }, [selectedDiscipline])

  const byTheme = useMemo(() => {
    const map = new Map<ThemeReference, Reference[]>()
    for (const theme of THEME_ORDER) {
      const items = filtered.filter((r) => r.theme === theme)
      if (items.length > 0) map.set(theme, items)
    }
    return map
  }, [filtered])

  return (
    <div className="min-h-screen bg-[var(--color-plumy-bg)] pb-24">
      <header className="px-4 pt-10 pb-6 bg-white border-b border-[var(--color-gris-doux)]">
        <h1 className="text-2xl font-bold text-[var(--color-encre)]" style={{ fontFamily: 'var(--font-titre)' }}>
          {fr.sources.titre}
        </h1>
        <p className="text-sm text-[var(--color-gris-texte)] mt-1">{fr.sources.sousTitre}</p>

        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
          {fr.sources.avertissement}
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-[var(--color-gris-texte)] mb-2">{fr.sources.filtrerDiscipline}</p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <FilterChip
              label={fr.sources.tous}
              active={selectedDiscipline === 'tous'}
              onClick={() => setSelectedDiscipline('tous')}
            />
            {DISCIPLINES.map((d) => (
              <FilterChip
                key={d}
                label={fr.disciplines[d]}
                active={selectedDiscipline === d}
                onClick={() => setSelectedDiscipline(d)}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-8">
        {byTheme.size === 0 && (
          <p className="text-center text-[var(--color-gris-texte)] text-sm py-12">
            Aucune référence pour cette discipline.
          </p>
        )}
        {THEME_ORDER.map((theme) => {
          const items = byTheme.get(theme)
          if (!items) return null
          return (
            <section key={theme} aria-labelledby={`theme-${theme}`}>
              <h2
                id={`theme-${theme}`}
                className="text-base font-semibold text-[var(--color-encre)] mb-3 pb-2 border-b border-[var(--color-gris-doux)]"
                style={{ fontFamily: 'var(--font-titre)' }}
              >
                {fr.sources.themes[theme]}
                <span className="ml-2 text-xs font-normal text-[var(--color-gris-texte)]">
                  ({items.length})
                </span>
              </h2>
              <ul className="space-y-3">
                {items.map((ref) => (
                  <ReferenceCard key={ref.id} reference={ref} />
                ))}
              </ul>
            </section>
          )
        })}
      </main>
    </div>
  )
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
        active
          ? 'bg-[var(--color-candy-rose-dark)] text-white'
          : 'bg-white border border-[var(--color-gris-doux)] text-[var(--color-gris-texte)] hover:border-[var(--color-candy-rose-dark)]'
      }`}
    >
      {label}
    </button>
  )
}

function ReferenceCard({ reference: r }: { reference: Reference }) {
  return (
    <li className="bg-white rounded-xl p-4 shadow-sm border border-[var(--color-gris-doux)]">
      <p className="text-sm font-semibold text-[var(--color-encre)] leading-snug">{r.titre}</p>
      <p className="text-xs text-[var(--color-gris-texte)] mt-1">
        {r.auteurs} — {r.annee}
        {r.revue && <span> · <em>{r.revue}</em></span>}
      </p>
      {r.resume && (
        <div className="flex items-start gap-1 mt-2">
          <p className="text-xs text-[var(--color-encre)] leading-relaxed opacity-80 flex-1">{r.resume}</p>
          <SpeakButton text={r.resume} size={13} />
        </div>
      )}
      <div className="flex items-center gap-3 mt-3">
        {r.disciplines && r.disciplines.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {r.disciplines.map((d) => (
              <span
                key={d}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--color-candy-bleu)] text-white opacity-80"
              >
                {fr.disciplines[d as keyof typeof fr.disciplines] ?? d}
              </span>
            ))}
          </div>
        )}
        {r.lien && (
          <a
            href={r.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 text-xs font-medium text-[var(--color-candy-rose-dark)] hover:underline flex items-center gap-1"
          >
            {fr.sources.voirPublication}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </li>
  )
}
