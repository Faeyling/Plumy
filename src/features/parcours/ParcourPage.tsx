import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { parcours } from '@/content/parcours'
import { getTerme } from '@/content/termes/index'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import type { ProgressionTerme } from '@/content/schema'
import { fr } from '@/i18n/fr'

const STATUT_COULEUR: Record<string, string> = {
  'jamais-vu': 'var(--color-gris-doux)',
  vu: 'var(--color-candy-bleu)',
  'a-revoir': 'var(--color-candy-corail)',
  maitrise: 'var(--color-candy-menthe)',
}
const STATUT_LABEL: Record<string, string> = {
  'jamais-vu': 'Nouveau',
  vu: 'Vu',
  'a-revoir': 'À revoir',
  maitrise: 'Maîtrisé',
}

export function ParcourPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const p = parcours.find(pc => pc.id === id)
  const [progressions, setProgressions] = useState<Record<string, ProgressionTerme>>({})

  useEffect(() => {
    progressionRepository.list().then(list => {
      const map: Record<string, ProgressionTerme> = {}
      for (const prog of list) map[prog.termeId] = prog
      setProgressions(map)
    })
  }, [])

  if (!p) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center gap-4">
        <p className="text-[var(--color-gris-texte)]">Parcours introuvable.</p>
        <button onClick={() => navigate('/')} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const termes = p.termeIds.map(id => getTerme(id)).filter(Boolean) as ReturnType<typeof getTerme>[]
  const vus = termes.filter(t => t && progressions[t.id]?.statut !== 'jamais-vu' && progressions[t.id] !== undefined).length
  const pct = termes.length > 0 ? Math.round((vus / termes.length) * 100) : 0

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
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl" aria-hidden="true">{p.emoji}</span>
          <div>
            <h1 className="font-[var(--font-titre)] font-extrabold text-xl text-[var(--color-encre)] leading-tight">
              {p.titre}
            </h1>
            <p className="text-sm text-[var(--color-gris-texte)] mt-0.5">{p.description}</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-[var(--color-gris-texte)] mb-1">
            <span>{fr.parcours.progression(vus, termes.length)}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: p.couleur }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>
      </header>

      <div className="flex-1 px-4 py-5 space-y-2 pb-24">
        {termes.map((terme, idx) => {
          if (!terme) return null
          const prog = progressions[terme.id]
          const statut = prog?.statut ?? 'jamais-vu'
          return (
            <motion.div
              key={terme.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
            >
              <Link
                to={`/terme/${terme.id}`}
                className="flex items-center gap-3 p-3.5 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
              >
                <span
                  className="flex-shrink-0 w-2 h-8 rounded-full"
                  style={{ backgroundColor: STATUT_COULEUR[statut] }}
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
                    {terme.nom}
                  </p>
                  <p className="text-xs text-[var(--color-gris-texte)] mt-0.5 line-clamp-1">
                    {terme.definition}
                  </p>
                </div>
                <span className="text-xs text-[var(--color-gris-texte)] flex-shrink-0">
                  {STATUT_LABEL[statut]}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
