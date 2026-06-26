import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCours } from '@/content/cours/index'
import { getTerme } from '@/content/termes/index'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'

export function CoursPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const cours = getCours(id ?? '')
  const [sectionOuverte, setSectionOuverte] = useState<number>(0)

  if (!cours) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
        <PluмyMascot etat="echec" taille={80} />
        <p className="text-[var(--color-gris-texte)]">Cours introuvable.</p>
        <button onClick={() => navigate(-1)} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête */}
      <header className="bg-gradient-to-b from-[var(--color-candy-menthe-light)] to-[var(--color-plumy-bg)] px-5 pt-12 pb-6">
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

        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">📖</span>
          <div>
            <h1 className="font-[var(--font-titre)] font-extrabold text-xl text-[var(--color-encre)] leading-tight">
              {cours.titre}
            </h1>
            <p className="text-sm text-[var(--color-gris-texte)] mt-1 leading-snug">
              {cours.resume}
            </p>
          </div>
        </div>
      </header>

      {/* Sections accordéon */}
      <div className="flex-1 px-4 py-5 space-y-3 pb-8">
        {cours.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-[var(--color-papier-creme)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => setSectionOuverte(sectionOuverte === i ? -1 : i)}
              aria-expanded={sectionOuverte === i}
            >
              <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm pr-4 leading-snug">
                {section.titre}
              </h2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="flex-shrink-0 text-[var(--color-gris-texte)] transition-transform"
                style={{ transform: sectionOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {sectionOuverte === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="px-4 pb-4"
              >
                <CoursMarkdown content={section.contenuMarkdown} />
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Termes abordés */}
        {cours.termesAbordes && cours.termesAbordes.length > 0 && (
          <div className="mt-4">
            <h3 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm mb-2">
              Termes abordés dans ce cours
            </h3>
            <div className="flex flex-wrap gap-2">
              {cours.termesAbordes.map((tid) => {
                const t = getTerme(tid)
                return t ? (
                  <Link
                    key={tid}
                    to={`/terme/${tid}`}
                    className="text-sm bg-white border border-[var(--color-gris-doux)] text-[var(--color-plumy-blue)] px-3 py-1 rounded-full hover:bg-[var(--color-candy-bleu-light)] transition-colors"
                  >
                    {t.nom}
                  </Link>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CoursMarkdown({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let inTable = false
  let tableRows: string[][] = []

  const flushTable = (key: string) => {
    if (tableRows.length < 2) return
    const headers = tableRows[0]
    const body = tableRows.slice(2)
    elements.push(
      <div key={key} className="overflow-x-auto my-3 rounded-lg border border-[var(--color-gris-doux)]">
        <table className="w-full text-xs">
          <thead className="bg-[var(--color-papier-alt)]">
            <tr>
              {headers.map((h, hi) => (
                <th key={hi} className="px-3 py-2 text-left font-semibold text-[var(--color-encre)]">
                  <InlineMarkdown text={h.trim()} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="border-t border-[var(--color-gris-doux)]">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-[var(--color-encre)]">
                    <InlineMarkdown text={cell.trim()} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
    tableRows = []
  }

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('|')) {
      inTable = true
      tableRows.push(line.split('|').filter(Boolean).map((c) => c.trim()))
      i++
      continue
    }

    if (inTable) {
      flushTable(`table-${i}`)
      inTable = false
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm mt-4 mb-1">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-[var(--font-manuscrit)] font-semibold text-[var(--color-encre)] text-lg mt-4 mb-1">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="carnet-postit my-3">
          <InlineMarkdown text={line.slice(2)} />
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-sm text-[var(--color-encre)] leading-relaxed ml-4 list-disc">
          <InlineMarkdown text={line.slice(2)} />
        </li>
      )
    } else if (line.startsWith('```')) {
      i++
      const codeLines: string[] = []
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre
          key={i}
          className="bg-[var(--color-papier-alt)] rounded-lg p-3 text-xs font-mono overflow-x-auto my-3 text-[var(--color-encre)]"
        >
          {codeLines.join('\n')}
        </pre>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />)
    } else {
      elements.push(
        <p key={i} className="text-sm text-[var(--color-encre)] leading-relaxed">
          <InlineMarkdown text={line} />
        </p>
      )
    }
    i++
  }

  if (inTable) flushTable('table-end')

  return <div className="space-y-1">{elements}</div>
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-[var(--color-encre)]">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}
