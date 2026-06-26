import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { tousLesTermes } from '@/content/termes/index'
import { termesPersoRepository } from '@/data/repositories/termesPersoRepository'
import type { Terme, TermePersonnel, Discipline, Categorie } from '@/content/schema'
import { fr } from '@/i18n/fr'

import { matchTerme } from '@/lib/recherche'

type TermeItem = Terme | TermePersonnel

const DISCIPLINES: Discipline[] = [
  'classique', 'contemporain', 'moderne', 'jazz', 'cabaret',
  'pole-dance', 'burlesque', 'heels', 'commun',
]

const CATEGORIES: Categorie[] = [
  'positions', 'pas', 'sauts', 'tours', 'ports-de-bras', 'deplacements',
  'qualites-de-mouvement', 'batterie', 'equilibres', 'liaisons', 'concepts',
  'culture-histoire', 'figures-aeriennes', 'montees-climbs', 'prises-grips',
  'inversions', 'travail-au-sol', 'jeu-de-scene', 'accessoires', 'sante-prevention',
]

export function GlossairePage() {
  const [query, setQuery] = useState('')
  const [discipline, setDiscipline] = useState<Discipline | ''>('')
  const [categorie, setCategorie] = useState<Categorie | ''>('')
  const [termesPerso, setTermesPerso] = useState<TermePersonnel[]>([])

  useEffect(() => {
    termesPersoRepository.list().then(setTermesPerso)
  }, [])

  const filtres = useMemo<TermeItem[]>(() => {
    const termes = tousLesTermes
      .filter(t => {
        if (discipline && !t.disciplines.includes(discipline as Discipline)) return false
        if (categorie && !t.categories.includes(categorie as Categorie)) return false
        return matchTerme(t, query)
      })
      .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))

    const perso = termesPerso
      .filter(t => {
        if (discipline && discipline !== 'commun') return false
        if (categorie && (!t.categories || !t.categories.includes(categorie as Categorie))) return false
        return matchTerme(t, query)
      })
      .sort((a, b) => (a.nom ?? '').localeCompare(b.nom ?? '', 'fr'))

    return [...termes, ...perso]
  }, [query, discipline, categorie, termesPerso])

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-4 bg-white">
        <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-3">
          {fr.glossaire.titre}
        </h1>

        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={fr.glossaire.recherche}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[var(--color-gris-doux)] text-sm text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)] shadow-sm"
            aria-label={fr.glossaire.recherche}
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gris-texte)]"
            width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex gap-2 mt-2.5">
          <select
            value={discipline}
            onChange={e => setDiscipline(e.target.value as Discipline | '')}
            className="flex-1 py-2 px-2.5 rounded-lg bg-white border border-[var(--color-gris-doux)] text-xs text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)]"
            aria-label={fr.glossaire.filtrerDiscipline}
          >
            <option value="">{fr.glossaire.tousLesFiltres}</option>
            {DISCIPLINES.map(d => (
              <option key={d} value={d}>{fr.disciplines[d]}</option>
            ))}
          </select>
          <select
            value={categorie}
            onChange={e => setCategorie(e.target.value as Categorie | '')}
            className="flex-1 py-2 px-2.5 rounded-lg bg-white border border-[var(--color-gris-doux)] text-xs text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)]"
            aria-label={fr.glossaire.filtrerCategorie}
          >
            <option value="">{fr.glossaire.tousLesFiltres}</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{fr.categories[c]}</option>
            ))}
          </select>
        </div>

        <p className="text-xs text-[var(--color-gris-texte)] mt-2">
          {fr.glossaire.termesCount(filtres.length)}
        </p>
      </header>

      <div className="flex-1 px-4 py-3" role="list" aria-label="Termes du glossaire">
        {filtres.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
            <span className="text-4xl opacity-30">🔍</span>
            <p className="text-[var(--color-gris-texte)] text-sm">{fr.glossaire.aucunResultat}</p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <AnimatePresence initial={false}>
              {filtres.map((terme, i) => {
                const estPerso = (terme as TermePersonnel).estPersonnel === true
                return (
                  <motion.div
                    key={terme.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, delay: i < 30 ? i * 0.015 : 0 }}
                    role="listitem"
                  >
                    {estPerso ? (
                      <div className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border-l-2 border-[var(--color-candy-jaune)]">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                              {terme.nom}
                            </p>
                            <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-candy-jaune)] text-[var(--color-encre)] text-[10px] font-bold shrink-0">
                              perso
                            </span>
                          </div>
                          <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                            {terme.definition}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={`/terme/${terme.id}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                            {(terme as Terme).nom}
                          </p>
                          <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                            {terme.definition}
                          </p>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
