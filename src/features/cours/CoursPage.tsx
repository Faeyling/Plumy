import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCours } from '@/content/cours/index'
import { getTerme } from '@/content/termes/index'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { useSpeech } from '@/hooks/useSpeech'
import { stripMarkdown } from '@/lib/stripMarkdown'
import { getCoursProgression, marquerSectionVue } from '@/lib/coursProgression'
import { resetStreakSansCours } from '@/lib/streakSansCours'

export function CoursPage() {
  const { id } = useParams<{ id: string }>()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const cours = getCours(id ?? '')

  const [sectionOuverte, setSectionOuverte] = useState<number>(() => {
    const sp = searchParams.get('section')
    if (sp !== null) {
      const n = Number(sp)
      if (!isNaN(n)) return n
    }
    return getCoursProgression(id ?? '').derniereSection
  })
  const [sectionsVues, setSectionsVues] = useState<number[]>(() => {
    const prog = getCoursProgression(id ?? '')
    const sp = searchParams.get('section')
    if (sp !== null) {
      const n = Number(sp)
      if (!isNaN(n) && !prog.sectionsVues.includes(n)) return [...prog.sectionsVues, n]
    }
    return prog.sectionsVues
  })

  useEffect(() => {
    const sp = searchParams.get('section')
    if (sp !== null) {
      const n = Number(sp)
      if (!isNaN(n) && cours && n >= 0 && n < cours.sections.length) {
        marquerSectionVue(id ?? '', n)
        resetStreakSansCours()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { isPlaying, isSupported, speak, stop } = useSpeech()
  const [playingSection, setPlayingSection] = useState<number | null>(null)

  function ouvrirSection(i: number) {
    const isOpening = sectionOuverte !== i
    setSectionOuverte(isOpening ? i : -1)
    if (isOpening) {
      marquerSectionVue(id ?? '', i)
      resetStreakSansCours()
      setSectionsVues((prev) => (prev.includes(i) ? prev : [...prev, i]))
    }
  }

  function handleSpeakSection(i: number, text: string) {
    if (isPlaying && playingSection === i) {
      stop()
      setPlayingSection(null)
    } else {
      speak(text)
      setPlayingSection(i)
    }
  }

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

        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">📖</span>
          <div>
            <h1 className="font-[var(--font-titre)] font-extrabold text-xl text-[var(--color-encre)] leading-tight">
              {cours.titre}
            </h1>
            <p className="text-sm text-[var(--color-gris-texte)] mt-1 leading-snug">
              {cours.resume}
            </p>
            <p className="text-xs text-[var(--color-gris-texte)] mt-2">
              <span style={{ color: sectionsVues.length === cours.sections.length && cours.sections.length > 0 ? 'var(--color-candy-menthe)' : 'inherit' }}>
                {sectionsVues.length === cours.sections.length && cours.sections.length > 0
                  ? `✓ ${cours.sections.length} sections lues`
                  : `${sectionsVues.length} / ${cours.sections.length} sections lues`}
              </span>
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
            className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => ouvrirSection(i)}
              aria-expanded={sectionOuverte === i}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: sectionsVues.includes(i) ? 'var(--color-candy-menthe)' : 'var(--color-gris-doux)',
                    color: 'white',
                  }}
                  aria-label={sectionsVues.includes(i) ? 'Section lue' : 'Section non lue'}
                >
                  {sectionsVues.includes(i) ? '✓' : '○'}
                </span>
                <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm pr-2 leading-snug flex-1">
                  {section.titre}
                </h2>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {isSupported && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleSpeakSection(i, section.titre + '. ' + stripMarkdown(section.contenuMarkdown)) }}
                    className="p-1.5 rounded-full transition-colors"
                    style={{ color: (isPlaying && playingSection === i) ? 'var(--color-plumy-blue)' : 'var(--color-gris-texte)' }}
                    aria-label={(isPlaying && playingSection === i) ? 'Arrêter la lecture' : 'Écouter cette section'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {(isPlaying && playingSection === i) ? (
                        <path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor" />
                      ) : (
                        <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </button>
                )}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-[var(--color-gris-texte)] transition-transform"
                  style={{ transform: sectionOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
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
          <InlineMarkdown text={line.slice(4)} />
        </h3>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mt-4 mb-2">
          <InlineMarkdown text={line.slice(3)} />
        </h2>
      )
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-lg mt-5 mb-2">
          <InlineMarkdown text={line.slice(2)} />
        </h1>
      )
    } else if (line.startsWith('> ')) {
      // Collect consecutive blockquote lines into one element
      const startI = i
      const bqLines: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        bqLines.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <blockquote
          key={startI}
          className="border-l-2 border-[var(--color-candy-lavande)] pl-3 italic text-sm text-[var(--color-gris-texte)] my-3 space-y-1"
        >
          {bqLines.map((l, li) => <p key={li}><InlineMarkdown text={l} /></p>)}
        </blockquote>
      )
      continue
    } else if (line.startsWith('- ')) {
      // Collect consecutive list items into one <ul>
      const startI = i
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={startI} className="ml-4 my-1 space-y-0.5">
          {items.map((item, ii) => (
            <li key={ii} className="text-sm text-[var(--color-encre)] leading-relaxed list-disc">
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      // Collect consecutive ordered list items into one <ol>
      const startI = i
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={startI} className="ml-4 my-1 space-y-0.5 list-decimal">
          {items.map((item, ii) => (
            <li key={ii} className="text-sm text-[var(--color-encre)] leading-relaxed">
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ol>
      )
      continue
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
  const inlineRe = /\*\*(.*?)\*\*|\*(.*?)\*|`(.*?)`|\[([^\]]+)\]\(([^)]+)\)/g
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let key = 0
  let match: RegExpExecArray | null
  while ((match = inlineRe.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>)
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={key++} className="font-semibold text-[var(--color-encre)]">{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      nodes.push(<em key={key++}>{match[2]}</em>)
    } else if (match[3] !== undefined) {
      nodes.push(<code key={key++} className="bg-[var(--color-papier-alt)] rounded px-1 py-0.5 text-xs font-mono">{match[3]}</code>)
    } else if (match[4] !== undefined) {
      nodes.push(
        <a key={key++} href={match[5]} target="_blank" rel="noopener noreferrer"
           className="text-[var(--color-plumy-blue)] underline underline-offset-2 hover:opacity-80">
          {match[4]}
        </a>
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    nodes.push(<span key={key++}>{text.slice(lastIndex)}</span>)
  }
  return <>{nodes}</>
}
