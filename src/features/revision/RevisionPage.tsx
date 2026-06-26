import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { getTerme, termesParUnite } from '@/content/termes/index'
import { unites } from '@/content/unites'
import type { Terme } from '@/content/schema'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'

interface GroupeUnite {
  numero: number
  titre: string
  termes: Terme[]
}

export function RevisionPage() {
  const navigate = useNavigate()
  const [groupes, setGroupes] = useState<GroupeUnite[]>([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    progressionRepository.listARevoir().then(liste => {
      const aRevoirIds = new Set(liste.map(p => p.termeId))
      const result: GroupeUnite[] = []

      for (const [numoStr, ids] of Object.entries(termesParUnite)) {
        const numero = Number(numoStr)
        const unite = unites.find(u => u.numero === numero)
        if (!unite) continue
        const termesARevoir = ids
          .filter(id => aRevoirIds.has(id))
          .map(id => getTerme(id))
          .filter((t): t is Terme => t !== undefined)
        if (termesARevoir.length > 0) {
          result.push({ numero, titre: unite.titre, termes: termesARevoir })
        }
      }

      result.sort((a, b) => a.numero - b.numero)
      setGroupes(result)
      setChargement(false)
    })
  }, [])

  const total = groupes.reduce((sum, g) => sum + g.termes.length, 0)

  if (chargement) {
    return <div className="flex items-center justify-center min-h-[60vh]" aria-busy="true" />
  }

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-6 bg-[var(--color-plumy-bg)]">
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
        <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)]">
          {fr.revision.titre}
        </h1>
        {total > 0 && (
          <p className="text-sm text-[var(--color-gris-texte)] mt-1">
            {fr.revision.compte(total)}
          </p>
        )}
      </header>

      <div className="flex-1 px-4 py-5 space-y-6">
        {total === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
            <PluмyMascot etat="reussite" taille={100} />
            <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-lg">
              {fr.revision.aucun}
            </p>
          </div>
        ) : (
          groupes.map((groupe, gi) => (
            <motion.section
              key={groupe.numero}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.05 }}
              aria-label={groupe.titre}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base">
                  {groupe.titre}
                </h2>
                {unites.find(u => u.numero === groupe.numero)?.quizDisponibles.includes('flashcards') && (
                  <Link
                    to={`/flashcards/${groupe.numero}`}
                    className="text-xs text-[var(--color-candy-corail)] font-[var(--font-titre)] font-semibold underline"
                  >
                    {fr.revision.flashcardsUnite}
                  </Link>
                )}
              </div>
              <div className="space-y-2">
                {groupe.termes.map(terme => (
                  <Link
                    key={terme.id}
                    to={`/terme/${terme.id}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: 'var(--color-candy-corail)' }}
                      aria-hidden="true"
                    >
                      ↩
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                        {terme.nom}
                      </p>
                      <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                        {terme.definition}
                      </p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))
        )}
      </div>
    </div>
  )
}
