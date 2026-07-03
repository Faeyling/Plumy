import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { unites } from '@/content/unites'
import { getTermesParUnite } from '@/content/termes/index'
import { getCoursParUnite } from '@/content/cours/index'
import { progressionRepository } from '@/data/repositories/progressionRepository'
import { termesPersoRepository } from '@/data/repositories/termesPersoRepository'
import type { ProgressionTerme, TermePersonnel } from '@/content/schema'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { iconeIllustration } from '@/content/illustrations'
import { fr } from '@/i18n/fr'
import { SpeakButton } from '@/components/ui/SpeakButton'
import { getCoursProgression, aLuRecemment } from '@/lib/coursProgression'
import { getStreakSansCours } from '@/lib/streakSansCours'

export function UnitePage() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find((u) => u.numero === numUnite)
  const termes = getTermesParUnite(numUnite)
  const cours = getCoursParUnite(unite?.coursIds ?? [])

  const [progressions, setProgressions] = useState<Record<string, ProgressionTerme>>({})
  const [termesPerso, setTermesPerso] = useState<TermePersonnel[]>([])
  const [suggestionFermee, setSuggestionFermee] = useState(false)

  useEffect(() => {
    progressionRepository.list().then((list) => {
      const map: Record<string, ProgressionTerme> = {}
      for (const p of list) map[p.termeId] = p
      setProgressions(map)
    })
    termesPersoRepository.list().then(all => {
      setTermesPerso(all.filter(t => t.uniteId === numUnite))
    })
  }, [numUnite])

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

  const illustration = iconeIllustration[unite.iconeSvgId]
  const vus = termes.filter((t) => progressions[t.id]?.statut !== 'jamais-vu' && progressions[t.id] !== undefined).length
  const total = termes.length
  const pourcentage = total > 0 ? Math.round((vus / total) * 100) : 0

  const totalSectionsUnite = cours.reduce((s, c) => s + c.sections.length, 0)
  const sectionsLuesUnite = cours.reduce((s, c) => s + getCoursProgression(c.id).sectionsVues.length, 0)
  const pourcentageTheorie = totalSectionsUnite > 0 ? Math.round((sectionsLuesUnite / totalSectionsUnite) * 100) : 0

  const streakSansCours = getStreakSansCours()
  const coursSuggere = cours.find((c) => getCoursProgression(c.id).sectionsVues.length < c.sections.length)
  const afficherSuggestion = !suggestionFermee && streakSansCours >= 3 && coursSuggere !== undefined

  return (
    <div className="flex flex-col min-h-svh">
      {/* En-tête */}
      <header className="relative bg-[var(--color-plumy-bg)] px-5 pt-12 pb-6 overflow-hidden">
        {/* Plume watermark décorative */}
        <img
          src={['/plumes/plume-duo-croisees.png', '/plumes/plume-solo-reve.png', '/plumes/plume-duo-arc.png'][numUnite % 3]}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute -right-8 -bottom-6 w-48 pointer-events-none select-none"
          style={{ opacity: 0.10, mixBlendMode: 'multiply', transform: 'rotate(10deg)' }}
        />
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

        {illustration && (
          <div className="flex justify-center mb-3">
            <img src={illustration} alt="" aria-hidden="true" className="w-[32rem] h-[32rem] object-contain" />
          </div>
        )}
        <div className="flex items-start gap-4">
          <span
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-titre)] font-bold text-white text-base"
            style={{ backgroundColor: 'var(--color-candy-lavande)' }}
            aria-hidden="true"
          >
            {numUnite}
          </span>
          <div className="flex-1 min-w-0">
            <h1 className="font-[var(--font-titre)] font-extrabold text-xl text-[var(--color-encre)] leading-tight">
              {unite.titre}
            </h1>
            <div className="flex items-start gap-1 mt-1">
              <p className="text-sm text-[var(--color-gris-texte)] leading-snug flex-1">
                {unite.description}
              </p>
              <SpeakButton text={unite.description} size={13} />
            </div>
          </div>
        </div>

        {/* Progression double */}
        {(total > 0 || totalSectionsUnite > 0) && (
          <div className="mt-4 space-y-2">
            {total > 0 && (
              <div>
                <div className="flex justify-between text-xs text-[var(--color-gris-texte)] mb-1">
                  <span>Vocabulaire — {vus} / {total} termes vus</span>
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
            {totalSectionsUnite > 0 && (
              <div>
                <div className="flex justify-between text-xs text-[var(--color-gris-texte)] mb-1">
                  <span>Théorie — {sectionsLuesUnite} / {totalSectionsUnite} sections lues</span>
                  <span>{pourcentageTheorie}%</span>
                </div>
                <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--color-candy-menthe)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pourcentageTheorie}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>
            )}
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

            {/* Suggestion Plumy après 3 quiz sans lecture */}
            {afficherSuggestion && coursSuggere && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 bg-[var(--color-candy-lavande-light)] border border-[var(--color-candy-lavande)] rounded-[var(--radius-card)] p-3 flex gap-3"
              >
                <img
                  src="/mascotte/plumy-encouragement.png"
                  alt="Plumy suggère"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-sm mb-1">
                    Tu joues super bien !
                  </p>
                  <p className="text-xs text-[var(--color-encre)] leading-snug mb-2">
                    Mais j'ai des pages dans mes carnets qui vont tout éclairer — 3 minutes et tu comprends <em>pourquoi</em> ça marche, pas juste <em>quoi</em> répondre.
                  </p>
                  <Link
                    to={`/cours/${coursSuggere.id}`}
                    className="text-xs font-semibold text-[var(--color-plumy-blue)] underline"
                  >
                    Ouvrir « {coursSuggere.titre} »
                  </Link>
                </div>
                <button
                  onClick={() => setSuggestionFermee(true)}
                  className="flex-shrink-0 text-[var(--color-gris-texte)] text-lg leading-none"
                  aria-label="Fermer la suggestion"
                >
                  ×
                </button>
              </motion.div>
            )}

            <div className="space-y-2">
              {cours.map((c) => {
                const prog = getCoursProgression(c.id)
                const totalSections = c.sections.length
                const vuesSections = prog.sectionsVues.length
                const termine = totalSections > 0 && vuesSections >= totalSections
                const enCours = vuesSections > 0 && !termine
                const bonusActif = aLuRecemment(c.id)
                return (
                  <div
                    key={c.id}
                    className="flex items-center gap-2 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
                  >
                    <Link
                      to={`/cours/${c.id}`}
                      className="flex items-center gap-3 p-3 flex-1 min-w-0"
                    >
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                        style={{ backgroundColor: termine ? 'var(--color-candy-menthe-light, #d1fae5)' : 'var(--color-candy-lavande-light)' }}
                      >
                        {termine ? '✓' : '📖'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm leading-snug">
                          {c.titre}
                        </p>
                        <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                          {c.resume}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          {(termine || enCours) && (
                            <p
                              className="text-xs font-semibold"
                              style={{ color: termine ? 'var(--color-candy-menthe)' : 'var(--color-candy-jaune, #f59e0b)' }}
                            >
                              {termine ? '✓ Terminé' : `En cours · ${vuesSections} / ${totalSections} sections`}
                            </p>
                          )}
                          {bonusActif && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[var(--color-candy-menthe)] text-white leading-none">
                              📖 +50 % pts
                            </span>
                          )}
                        </div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-gris-texte)]">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <SpeakButton text={c.resume} size={13} className="mr-2" />
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Flashcards */}
        {unite.quizDisponibles.includes('flashcards') && (
          <section aria-label="Révision par flashcards">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Révision
            </h2>
            <Link
              to={`/flashcards/${numUnite}`}
              className="flex items-center gap-3 p-4 bg-[var(--color-candy-lavande-light)] border border-[var(--color-candy-lavande)] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-candy-lavande)] flex items-center justify-center" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
                  <path d="M8 9h8M8 13h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                  {fr.flashcards.titre}
                </p>
                <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">
                  {fr.flashcards.deDeCartes(total)} — termes à revoir en priorité
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-candy-lavande)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </section>
        )}

        {/* Schéma origines/interactions — unité 1 uniquement */}
        {numUnite === 1 && (
          <section aria-label="Schéma interactif">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Schéma des origines
            </h2>
            <Link
              to="/graphe-danses"
              className="flex items-center gap-3 p-4 bg-[var(--color-candy-lavande-light)] border border-[var(--color-candy-lavande)] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-candy-lavande)] flex items-center justify-center" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="5" cy="12" r="2" fill="white" />
                  <circle cx="12" cy="5" r="2" fill="white" />
                  <circle cx="19" cy="12" r="2" fill="white" />
                  <circle cx="12" cy="19" r="2" fill="white" />
                  <line x1="7" y1="11" x2="10" y2="6.5" stroke="white" strokeWidth="1.5" />
                  <line x1="14" y1="6.5" x2="17" y2="11" stroke="white" strokeWidth="1.5" />
                  <line x1="7" y1="13" x2="10" y2="17.5" stroke="white" strokeWidth="1.5" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                  Origines et interactions des danses
                </p>
                <p className="text-xs text-[var(--color-gris-texte)] mt-0.5">
                  Schéma interactif — 8 disciplines, de l'origine à aujourd'hui
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-candy-lavande)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </section>
        )}

        {/* Quiz d'entraînement */}
        {(['qcm', 'association', 'texte-a-trous', 'reconnaissance-visuelle'] as const).some(t => unite.quizDisponibles.includes(t)) && (
          <section aria-label="Quiz d'entraînement">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Entraînement
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {unite.quizDisponibles.includes('qcm') && (
                <Link
                  to={`/quiz/qcm/${numUnite}`}
                  className="flex flex-col items-center gap-2 p-4 bg-[#fffde7] border border-[var(--color-candy-jaune)] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl bg-[var(--color-candy-jaune)] flex items-center justify-center font-bold text-white text-lg" aria-hidden="true">Q</span>
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">QCM</p>
                </Link>
              )}
              {unite.quizDisponibles.includes('association') && (
                <Link
                  to={`/quiz/association/${numUnite}`}
                  className="flex flex-col items-center gap-2 p-4 bg-[#e3f2fd] border border-[var(--color-candy-bleu)] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl bg-[var(--color-candy-bleu)] flex items-center justify-center font-bold text-white text-lg" aria-hidden="true">A</span>
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">Association</p>
                </Link>
              )}
              {unite.quizDisponibles.includes('texte-a-trous') && (
                <Link
                  to={`/quiz/texte-a-trous/${numUnite}`}
                  className="flex flex-col items-center gap-2 p-4 bg-[#fce4ec] border border-[var(--color-candy-corail)] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl bg-[var(--color-candy-corail)] flex items-center justify-center font-bold text-white text-lg" aria-hidden="true">T</span>
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">Texte à trous</p>
                </Link>
              )}
              {unite.quizDisponibles.includes('reconnaissance-visuelle') && (
                <Link
                  to={`/quiz/reconnaissance-visuelle/${numUnite}`}
                  className="flex flex-col items-center gap-2 p-4 bg-[#d1fae5] border border-[#059669] rounded-[var(--radius-card)] hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg" style={{ backgroundColor: '#059669' }} aria-hidden="true">R</span>
                  <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">Reconnaître</p>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* Termes */}
        {(termes.length > 0 || termesPerso.length > 0) && (
          <section aria-label="Termes de l'unité">
            <h2 className="font-[var(--font-titre)] font-bold text-[var(--color-encre)] text-base mb-3">
              Vocabulaire — {total + termesPerso.length} termes
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
              {termesPerso.map((terme, i) => (
                <motion.div
                  key={terme.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (termes.length + i) * 0.03, duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 p-3 bg-[var(--color-candy-rose-light)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border border-[var(--color-candy-rose)]/30">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: 'var(--color-candy-rose)' }}
                      aria-label="Terme personnel"
                      title="Ton terme"
                    >
                      ✎
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">
                        {terme.nom}
                      </p>
                      {terme.definition && (
                        <p className="text-xs text-[var(--color-gris-texte)] line-clamp-1 mt-0.5">
                          {terme.definition}
                        </p>
                      )}
                    </div>
                    <Link
                      to="/carnets"
                      className="text-xs text-[var(--color-candy-rose)] underline flex-shrink-0"
                      aria-label="Modifier dans mes carnets"
                    >
                      ✏
                    </Link>
                  </div>
                </motion.div>
              ))}
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
