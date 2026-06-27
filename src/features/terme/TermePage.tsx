import { useEffect, useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getTerme } from '@/content/termes/index'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { statsRepository } from '@/data/repositories/statsRepository'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import type { ProgressionTerme } from '@/content/schema'
import { fr } from '@/i18n/fr'

export function TermePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const terme = getTerme(id ?? '')

  const [prog, setProg] = useState<ProgressionTerme | undefined>()
  const [toast, setToast] = useState<string | null>(null)

  const chargerProg = useCallback(() => {
    if (!id) return
    progressionRepository.get(id).then(setProg)
  }, [id])

  useEffect(() => {
    chargerProg()
  }, [chargerProg])

  const afficherToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }

  const partager = async () => {
    const texte = `${terme?.nom} : ${terme?.definition}`
    if (navigator.share) {
      await navigator.share({ title: terme?.nom, text: texte }).catch(() => null)
    } else {
      await navigator.clipboard.writeText(texte).catch(() => null)
      afficherToast(fr.actions.copie)
    }
  }

  const marquerVu = async () => {
    if (!id) return
    const current = await progressionRepository.get(id)
    if (current && current.statut !== 'jamais-vu') return
    await progressionRepository.marquerVu(id)
    await statsRepository.ajouterPoints(5)
    await statsRepository.ajouterTermeVuAujourdhui()
    chargerProg()
    afficherToast('+5 points — terme marqué comme vu !')
  }

  const toggleFavori = async () => {
    if (!id) return
    const nouveau = await progressionRepository.toggleFavori(id)
    chargerProg()
    afficherToast(nouveau ? '♥ Ajouté aux favoris' : 'Retiré des favoris')
  }

  if (!terme) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
        <PluмyMascot etat="echec" taille={80} />
        <p className="text-[var(--color-gris-texte)]">Terme introuvable.</p>
        <button onClick={() => navigate(-1)} className="text-[var(--color-plumy-blue)] underline text-sm">
          Retour
        </button>
      </div>
    )
  }

  const estVu = prog?.statut !== 'jamais-vu' && prog !== undefined
  const estFavori = prog?.favori ?? false

  return (
    <div className="flex flex-col min-h-svh relative">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            role="status"
            aria-live="polite"
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[var(--color-encre)] text-white text-sm px-4 py-2 rounded-full shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* En-tête */}
      <header className="bg-[var(--color-plumy-bg)] px-5 pt-12 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm"
            aria-label="Retour"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={partager}
              className="p-2 rounded-full transition-colors text-[var(--color-gris-texte)]"
              aria-label={fr.actions.partager}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={toggleFavori}
              className="p-2 rounded-full transition-colors"
              style={{ color: estFavori ? 'var(--color-candy-rose)' : 'var(--color-gris-texte)' }}
              aria-label={estFavori ? fr.terme.retirerFavori : fr.terme.ajouterFavori}
            >
              {estFavori ? '♥' : '♡'}
            </button>
          </div>
        </div>

        <h1 className="font-[var(--font-titre)] font-extrabold text-3xl text-[var(--color-encre)] leading-tight">
          {terme.nom}
        </h1>

        {terme.alias && terme.alias.length > 0 && (
          <p className="text-sm text-[var(--color-gris-texte)] mt-1">
            Aussi : {terme.alias.join(', ')}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-3">
          {terme.prononciation && (
            <span className="font-[var(--font-manuscrit)] text-[var(--color-encre)] text-sm bg-[var(--color-candy-jaune-light)] px-2 py-0.5 rounded-full">
              /{terme.prononciation}/
            </span>
          )}
          {terme.equivalentAnglais && (
            <span className="text-[var(--color-gris-texte)] text-xs bg-white px-2 py-0.5 rounded-full border border-[var(--color-gris-doux)]">
              EN : {terme.equivalentAnglais}
            </span>
          )}
          {terme.disciplines.map((d) => (
            <span
              key={d}
              className="text-xs bg-[var(--color-candy-bleu-light)] text-[var(--color-plumy-blue-dark)] px-2 py-0.5 rounded-full"
            >
              {d === 'commun' ? 'Toutes disciplines' : d}
            </span>
          ))}
        </div>
      </header>

      {/* Corps */}
      <div className="flex-1 px-4 py-5 space-y-5 pb-24">
        {/* Définition */}
        <Section titre={fr.terme.definition} couleur="var(--color-candy-bleu)">
          <p className="text-[var(--color-encre)] leading-relaxed">{terme.definition}</p>
        </Section>

        {/* Description */}
        <Section titre={fr.terme.description}>
          <MarkdownSimple content={terme.description} />
        </Section>

        {/* Étymologie */}
        {terme.etymologie && (
          <Section titre={fr.terme.etymologie} couleur="var(--color-candy-lavande)">
            <p className="text-[var(--color-encre)] text-sm leading-relaxed italic">{terme.etymologie}</p>
          </Section>
        )}

        {/* Erreurs courantes */}
        {terme.erreursCourantes.length > 0 && (
          <Section titre={fr.terme.erreursCourantes} couleur="var(--color-candy-corail)">
            <ul className="space-y-2">
              {terme.erreursCourantes.map((e, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--color-encre)]">
                  <span className="flex-shrink-0 text-[var(--color-candy-corail)]">⚠</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Conseils de Plumy */}
        {terme.conseils && terme.conseils.length > 0 && (
          <Section titre={fr.terme.conseils} couleur="var(--color-candy-menthe)">
            <div className="flex gap-3">
              <PluмyMascot etat="encouragement" taille={48} className="flex-shrink-0 mt-1" />
              <ul className="space-y-2">
                {terme.conseils.map((c, i) => (
                  <li key={i} className="text-sm text-[var(--color-encre)] leading-relaxed italic">
                    « {c} »
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {/* Sécurité */}
        {terme.securite && (
          <Section titre={fr.terme.securite} couleur="var(--color-candy-corail)">
            {terme.securite.risques.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-semibold text-[var(--color-candy-corail-dark,var(--color-candy-corail))] uppercase tracking-wide mb-1">
                  {fr.terme.risques}
                </p>
                <ul className="space-y-1">
                  {terme.securite.risques.map((r, i) => (
                    <li key={i} className="text-sm text-[var(--color-encre)] flex gap-2">
                      <span className="text-[var(--color-candy-corail)]">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {terme.securite.precautions.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-[var(--color-candy-menthe)] uppercase tracking-wide mb-1">
                  {fr.terme.precautions}
                </p>
                <ul className="space-y-1">
                  {terme.securite.precautions.map((p, i) => (
                    <li key={i} className="text-sm text-[var(--color-encre)] flex gap-2">
                      <span className="text-[var(--color-candy-menthe)]">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Section>
        )}

        {/* Termes liés */}
        {terme.termesLies && terme.termesLies.length > 0 && (
          <Section titre={fr.terme.termesLies}>
            <div className="flex flex-wrap gap-2">
              {terme.termesLies.map((tid) => {
                const lié = getTerme(tid)
                return lié ? (
                  <Link
                    key={tid}
                    to={`/terme/${tid}`}
                    className="text-sm bg-white border border-[var(--color-gris-doux)] text-[var(--color-plumy-blue)] px-3 py-1 rounded-full hover:bg-[var(--color-candy-bleu-light)] transition-colors"
                  >
                    {lié.nom}
                  </Link>
                ) : null
              })}
            </div>
          </Section>
        )}

        {/* Vidéos */}
        {terme.videosExternes && terme.videosExternes.length > 0 && (
          <Section titre={fr.terme.videos}>
            <ul className="space-y-2">
              {terme.videosExternes.map((v, i) => (
                <li key={i}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-plumy-blue)] underline"
                  >
                    <span>▶</span>
                    {v.titre}
                    <span className="text-xs text-[var(--color-gris-texte)] no-underline">({v.source})</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* Barre d'action fixe en bas */}
      <div className="fixed bottom-16 left-0 right-0 px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-[var(--color-gris-doux)] flex gap-3">
        {!estVu ? (
          <button
            onClick={marquerVu}
            className="flex-1 bg-[var(--color-plumy-blue)] text-white font-[var(--font-titre)] font-bold py-3 rounded-[var(--radius-btn)] text-sm hover:opacity-90 transition-opacity"
          >
            {fr.terme.marquerVu} (+5 pts)
          </button>
        ) : (
          <div className="flex-1 flex items-center justify-center gap-2 text-sm text-[var(--color-candy-menthe)] font-semibold">
            <span>✓</span>
            <span>Vu</span>
            {prog?.statut === 'maitrise' && <span>· Maîtrisé !</span>}
          </div>
        )}
      </div>
    </div>
  )
}

function Section({
  titre,
  couleur = 'var(--color-candy-lavande)',
  children,
}: {
  titre: string
  couleur?: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-1 h-4 rounded-full flex-shrink-0"
          style={{ backgroundColor: couleur }}
          aria-hidden="true"
        />
        <h2 className="font-[var(--font-titre)] font-bold text-sm text-[var(--color-encre)] uppercase tracking-wide">
          {titre}
        </h2>
      </div>
      <div className="bg-white rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-card)]">
        {children}
      </div>
    </section>
  )
}

function MarkdownSimple({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={i} className="font-bold text-[var(--color-encre)] mt-3 mb-1 text-sm">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-sm text-[var(--color-encre)] leading-relaxed ml-3 list-disc">
          <InlineMarkdown text={line.slice(2)} />
        </li>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-2 border-[var(--color-candy-lavande)] pl-3 italic text-sm text-[var(--color-gris-texte)] my-2"
        >
          {line.slice(2)}
        </blockquote>
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
