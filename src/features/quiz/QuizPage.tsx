import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'
import { db, type EntreeHistoriqueQuiz } from '@/data/db'

export function QuizPage() {
  const [historique, setHistorique] = useState<EntreeHistoriqueQuiz[]>([])
  const today = new Date().toISOString().slice(0, 10)
  const dejaFaitAujourdhui = historique.some(h => h.date === today && h.type === 'defi-quotidien')

  useEffect(() => {
    db.historiqueQuiz
      .orderBy('id')
      .reverse()
      .limit(20)
      .toArray()
      .then(setHistorique)
  }, [])

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête */}
      <header className="bg-[var(--color-plumy-bg)] px-5 pt-10 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PluмyMascot etat="encouragement" taille={80} />
          <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mt-3">
            {fr.nav.quiz}
          </h1>
        </motion.div>
      </header>

      <div className="flex-1 px-4 py-5 space-y-6 pb-24">
        {/* Défi du jour */}
        <section>
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            {fr.defiQuotidien.titre}
          </h2>
          {dejaFaitAujourdhui ? (
            <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                  Défi du jour relevé !
                </p>
                <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">
                  {fr.defiQuotidien.dejaFait}
                </p>
              </div>
            </div>
          ) : (
            <Link
              to="/quiz/defi"
              className="flex items-center gap-4 p-4 bg-[var(--color-candy-rose)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl" aria-hidden="true">
                ⚡
              </span>
              <div className="flex-1">
                <p className="font-[var(--font-titre)] font-bold text-white text-base">
                  {fr.defiQuotidien.titre}
                </p>
                <p className="text-sm text-white/80">
                  {fr.defiQuotidien.sousTitre}
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
        </section>

        {/* Révision rapide */}
        <section>
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            {fr.revisionRapide.titre}
          </h2>
          <Link
            to="/revision/rapide"
            className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow border border-[var(--color-candy-lavande)]"
          >
            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[var(--color-candy-lavande)] flex items-center justify-center text-2xl" aria-hidden="true">
              ⏱
            </span>
            <div className="flex-1">
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base">
                {fr.revisionRapide.titre}
              </p>
              <p className="text-sm text-[var(--color-gris-texte)]">
                {fr.revisionRapide.description}
              </p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[var(--color-gris-texte)]">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>

        {/* Historique */}
        <section>
          <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide mb-3">
            {fr.historiqueQuiz.titre}
          </h2>
          {historique.length === 0 ? (
            <p className="text-sm text-[var(--color-gris-texte)] text-center py-4">
              {fr.historiqueQuiz.aucun}
            </p>
          ) : (
            <div className="space-y-2">
              {historique.map((h, i) => {
                const pct = h.total > 0 ? Math.round((h.correct / h.total) * 100) : 0
                const typeLabel = fr.historiqueQuiz.types[h.type] ?? h.type
                return (
                  <motion.div
                    key={h.id ?? i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
                  >
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: pct >= 70 ? 'var(--color-candy-menthe)' : pct >= 40 ? 'var(--color-candy-jaune)' : 'var(--color-candy-corail)' }}
                    >
                      {pct}%
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                        {typeLabel}
                        {h.uniteNumero !== undefined && ` — Unité ${h.uniteNumero}`}
                      </p>
                      <p className="text-xs text-[var(--color-gris-texte)]">
                        {h.correct}/{h.total} · {h.date}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </section>

        {/* Explication */}
        <p className="text-xs text-[var(--color-gris-texte)] text-center pb-2">
          Les quiz détaillés sont accessibles depuis chaque unité.
        </p>
      </div>
    </div>
  )
}
