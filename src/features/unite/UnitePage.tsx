import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { unites } from '@/content/unites'
import { getTermesParUnite } from '@/content/termes/index'
import { getCoursParUnite } from '@/content/cours/index'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import type { ProgressionTerme } from '@/content/schema'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'

export function UnitePage() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find((u) => u.numero === numUnite)
  const termes = getTermesParUnite(numUnite)
  const cours = getCoursParUnite(unite?.coursIds ?? [])

  const [progressions, setProgressions] = useState<Record<string, ProgressionTerme>>({})

  useEffect(() => {
    progressionRepository.list().then((list) => {
      const map: Record<string, ProgressionTerme> = {}
      for (const p of list) map[p.termeId] = p
      setProgressions(map)
    })
  }, [])

  if (!unite) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
        <PluмyMascot etat="echec" taille={80} />
        <p className="text-[var(--color-gris-texte)]">Unité introuvable.</p>
        <button onClick={() => navigate('/')} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const vus = termes.filter((t) => progressions[t.id]?.statut !== 'jamais-vu' && progressions[t.id] !== undefined).length
  const total = termes.length
  const pourcentage = total > 0 ? Math.round((vus / total) * 100) : 0

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête */}
      <header className="bg-gradient-to-b from-[var(--color-candy-lavande-light)] to-[var(--color-plumy-bg)] px-5 pt-12 pb-6">
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

        <div className="flex items-start gap-4">
          <span
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-[var(--font-titre)] font-bold text-white text-lg"
            style={{ backgroundColor: 'var(--color-candy-lavande)' }}
            aria-hidden="true"
          >
            {numUnite}
          </span>
          <div>
            <h1 className="font-[var(--font-titre)] font-extrabold text-xl text-[var(--color-encre)] leading-tight">
              {unite.titre}
            </h1>
            <p className="text-sm text-[var(--color-gris-texte)] mt-1 leading-snug">
              {unite.description}
            </p>
          </div>
        </div>

        {/* Progression */}
        {total > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-[var(--color-gris-texte)] mb-1">
              <span>{vus} / {total} termes vus</span>
              <span>{pourcentage}%</span>
            </div>
            <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: 'var(--color-candy-lavande)' }}
                initial={{ width: 0 }}
                animate={{ width: `${pourcentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}
      </header>

      <div className="flex-1 px-4 py-5 space-y-6">
        {/* Cours (sections) */}
        {cours.length > 0 && (
          <section aria-label="Cours">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Les carnets de Plumy
            </h2>
            <div className="space-y-2">
              {cours.map((c) => (
                <Link
                  key={c.id}
                  to={`/cours/${c.id}`}
                  className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'var(--color-candy-lavande-light)' }}
                  >
                    📖
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
                      {c.titre}
                    </p>
                    <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                      {c.resume}
                    </p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Termes */}
        {termes.length > 0 && (
          <section aria-label="Termes de l'unité">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Vocabulaire — {total} termes
            </h2>
            <div className="space-y-2">
              {termes.map((terme, i) => {
                const prog = progressions[terme.id]
                const statut = prog?.statut ?? 'jamais-vu'
                const favori = prog?.favori ?? false

                return (
                  <motion.div
                    key={terme.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                  >
                    <Link
                      to={`/terme/${terme.id}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                    >
                      <StatutBadge statut={statut} />
                      <div className="flex-1 min-w-0">
                        <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                          {terme.nom}
                        </p>
                        {terme.prononciation && (
                          <p className="text-xs text-[var(--color-gris-texte)] font-[var(--font-manuscrit)]">
                            /{terme.prononciation}/
                          </p>
                        )}
                      </div>
                      {favori && (
                        <span aria-label="Favori" className="text-[var(--color-candy-rose)]">♥</span>
                      )}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function StatutBadge({ statut }: { statut: string }) {
  const config = {
    'jamais-vu': { bg: 'var(--color-gris-doux)', label: '◌', title: 'Non vu' },
    'vu': { bg: 'var(--color-candy-bleu)', label: '●', title: 'Vu' },
    'a-revoir': { bg: 'var(--color-candy-corail)', label: '↩', title: 'À revoir' },
    'maitrise': { bg: 'var(--color-candy-menthe)', label: '✓', title: 'Maîtrisé' },
  }
  const c = config[statut as keyof typeof config] ?? config['jamais-vu']
  return (
    <span
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
      style={{ backgroundColor: c.bg }}
      title={c.title}
      aria-label={c.title}
    >
      {c.label}
    </span>
  )
}
