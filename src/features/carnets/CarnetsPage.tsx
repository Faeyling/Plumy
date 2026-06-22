import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { termesPersoRepository } from '@/data/repositories/termesPersoRepository'
import { getTerme } from '@/content/termes/index'
import type { ProgressionTerme, Terme, TermePersonnel } from '@/content/schema'
import { fr } from '@/i18n/fr'

type Tab = 'favoris' | 'mes-termes'

interface FavoriItem { prog: ProgressionTerme; terme: Terme }

export function CarnetsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('favoris')
  const [favoris, setFavoris] = useState<FavoriItem[]>([])
  const [termesPerso, setTermesPerso] = useState<TermePersonnel[]>([])
  const [form, setForm] = useState<{ nom: string; definition: string; noteLibre: string } | null>(null)
  const [suppression, setSuppression] = useState<string | null>(null)

  const chargerFavoris = useCallback(() => {
    progressionRepository.listFavoris().then(list => {
      const items = list
        .map(prog => ({ prog, terme: getTerme(prog.termeId) }))
        .filter((item): item is FavoriItem => item.terme !== undefined)
      setFavoris(items)
    })
  }, [])

  const chargerTermesPerso = useCallback(() => {
    termesPersoRepository.list().then(setTermesPerso)
  }, [])

  useEffect(() => {
    chargerFavoris()
    chargerTermesPerso()
  }, [chargerFavoris, chargerTermesPerso])

  async function sauvegarderTerme() {
    if (!form || !form.nom.trim() || !form.definition.trim()) return
    await termesPersoRepository.upsert({
      id: crypto.randomUUID(),
      estPersonnel: true,
      nom: form.nom.trim(),
      definition: form.definition.trim(),
      noteLibre: form.noteLibre.trim() || undefined,
      disciplines: ['commun'],
      categories: ['concepts'],
      description: '',
      erreursCourantes: [],
      difficulteInterne: 1,
    })
    chargerTermesPerso()
    setForm(null)
  }

  async function confirmerSuppression(id: string) {
    await termesPersoRepository.delete(id)
    chargerTermesPerso()
    setSuppression(null)
  }

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-4 bg-gradient-to-b from-[var(--color-candy-rose-light)] to-[var(--color-plumy-bg)]">
        <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-4">
          {fr.carnets.titre}
        </h1>
        <div className="flex gap-2">
          {(['favoris', 'mes-termes'] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-[var(--font-titre)] font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[var(--color-candy-rose)] text-white'
                  : 'bg-white text-[var(--color-gris-texte)] border border-[var(--color-gris-doux)]'
              }`}
            >
              {tab === 'favoris' ? fr.carnets.ongletFavoris : fr.carnets.ongletMesTermes}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 px-4 py-5">
        <AnimatePresence mode="wait">
          {activeTab === 'favoris' ? (
            <motion.div
              key="favoris"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.2 }}
            >
              {favoris.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <span className="text-4xl text-[var(--color-candy-rose)] opacity-40">♡</span>
                  <p className="text-[var(--color-gris-texte)] text-sm max-w-xs">
                    {fr.carnets.aucunFavori}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {favoris.map(({ terme }) => (
                    <Link
                      key={terme.id}
                      to={`/terme/${terme.id}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                    >
                      <span className="text-[var(--color-candy-rose)] flex-shrink-0">♥</span>
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
              )}
            </motion.div>
          ) : (
            <motion.div
              key="mes-termes"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Formulaire d'ajout */}
              {form !== null ? (
                <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 space-y-3">
                  <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base">
                    {fr.carnets.nouveauTerme}
                  </h2>
                  <div className="space-y-2">
                    <label className="block">
                      <span className="text-xs text-[var(--color-gris-texte)] mb-1 block">{fr.carnets.nomLabel} *</span>
                      <input
                        type="text"
                        value={form.nom}
                        onChange={e => setForm(f => f ? { ...f, nom: e.target.value } : null)}
                        placeholder="Ex : Pas de bourrée"
                        className="w-full border border-[var(--color-gris-doux)] rounded-lg px-3 py-2 text-sm text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)]"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-[var(--color-gris-texte)] mb-1 block">{fr.carnets.definitionLabel} *</span>
                      <textarea
                        value={form.definition}
                        onChange={e => setForm(f => f ? { ...f, definition: e.target.value } : null)}
                        placeholder="Ma définition personnelle…"
                        rows={3}
                        className="w-full border border-[var(--color-gris-doux)] rounded-lg px-3 py-2 text-sm text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)] resize-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-[var(--color-gris-texte)] mb-1 block">{fr.carnets.noteLabel}</span>
                      <input
                        type="text"
                        value={form.noteLibre}
                        onChange={e => setForm(f => f ? { ...f, noteLibre: e.target.value } : null)}
                        placeholder="Note, contexte, prof…"
                        className="w-full border border-[var(--color-gris-doux)] rounded-lg px-3 py-2 text-sm text-[var(--color-encre)] focus:outline-none focus:border-[var(--color-candy-rose)]"
                      />
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={sauvegarderTerme}
                      disabled={!form.nom.trim() || !form.definition.trim()}
                      className="flex-1 py-2.5 bg-[var(--color-candy-rose)] text-white font-[var(--font-titre)] font-bold rounded-lg text-sm disabled:opacity-40"
                    >
                      {fr.carnets.sauvegarder}
                    </button>
                    <button
                      onClick={() => setForm(null)}
                      className="flex-1 py-2.5 bg-[var(--color-gris-doux)] text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-lg text-sm"
                    >
                      {fr.carnets.annuler}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setForm({ nom: '', definition: '', noteLibre: '' })}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-[var(--color-candy-rose)] text-[var(--color-candy-rose)] rounded-[var(--radius-card)] font-[var(--font-titre)] font-semibold text-sm"
                >
                  <span>+</span>
                  {fr.carnets.nouveauTerme}
                </button>
              )}

              {/* Confirmation suppression */}
              <AnimatePresence>
                {suppression && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
                  >
                    <div className="bg-white rounded-[var(--radius-card)] p-5 w-full max-w-xs shadow-xl space-y-4 text-center">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)]">
                        {fr.carnets.confirmerSuppression}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => confirmerSuppression(suppression)}
                          className="flex-1 py-2.5 bg-[var(--color-candy-corail)] text-white font-[var(--font-titre)] font-bold rounded-lg text-sm"
                        >
                          {fr.carnets.supprimerTerme}
                        </button>
                        <button
                          onClick={() => setSuppression(null)}
                          className="flex-1 py-2.5 bg-[var(--color-gris-doux)] text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-lg text-sm"
                        >
                          {fr.carnets.annuler}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Liste des termes perso */}
              {termesPerso.length === 0 && form === null ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <span className="text-4xl opacity-30">📓</span>
                  <p className="text-[var(--color-gris-texte)] text-sm max-w-xs">
                    {fr.carnets.aucunTermePerso}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {termesPerso.map(terme => (
                    <div
                      key={terme.id}
                      className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                            {terme.nom}
                          </p>
                          <p className="text-xs text-[var(--color-gris-texte)] mt-1 leading-relaxed">
                            {terme.definition}
                          </p>
                          {terme.noteLibre && (
                            <p className="text-xs text-[var(--color-candy-rose)] mt-1 italic">
                              {terme.noteLibre}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => setSuppression(terme.id)}
                          className="flex-shrink-0 text-[var(--color-candy-corail)] text-lg leading-none p-1"
                          aria-label={fr.carnets.supprimerTerme}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
