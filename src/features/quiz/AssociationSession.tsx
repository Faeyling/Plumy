import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTermesParUnite } from '@/content/termes/index'
import { unites } from '@/content/unites'
import { genererAssociation, shuffle, type PaireAssociation } from './quiz.utils'
import { uniteALuRecemment } from '@/lib/coursProgression'
import { statsRepository } from '@/data/repositories/statsRepository'
import { useBadgeCheck } from '@/hooks/useBadgeCheck'
import { getBadge } from '@/data/badges'
import { PluмyMascot } from '@/components/mascotte/PluмyMascot'
import { fr } from '@/i18n/fr'
import { db } from '@/data/db'

const PTS_PAIRE = 15

interface NomItem { termeId: string; nom: string }
interface DefItem { termeId: string; def: string }

function buildItems(paires: PaireAssociation[]) {
  return {
    noms: shuffle(paires.map(p => ({ termeId: p.termeId, nom: p.nom }))),
    defs: shuffle(paires.map(p => ({ termeId: p.termeId, def: p.definition }))),
  }
}

export function AssociationSession() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const numUnite = Number(numero ?? 0)
  const unite = unites.find(u => u.numero === numUnite)
  const termes = getTermesParUnite(numUnite)

  const [paires, setPaires] = useState<PaireAssociation[]>(() => genererAssociation(termes, 5))
  const [nomItems, setNomItems] = useState<NomItem[]>(() => buildItems(paires).noms)
  const [defItems, setDefItems] = useState<DefItem[]>(() => buildItems(paires).defs)
  const [selectedNomId, setSelectedNomId] = useState<string | null>(null)
  const [selectedDefId, setSelectedDefId] = useState<string | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set())
  const [wrongNomId, setWrongNomId] = useState<string | null>(null)
  const [wrongDefId, setWrongDefId] = useState<string | null>(null)
  const [corrects, setCorrects] = useState(0)
  const [termine, setTermine] = useState(false)
  const [ptsGagnes, setPtsGagnes] = useState(0)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const { checkBadges } = useBadgeCheck()
  const bonusLecture = uniteALuRecemment(unite?.coursIds ?? [])

  function handleRecommencer() {
    const nouvellesPaires = genererAssociation(termes, 5)
    const items = buildItems(nouvellesPaires)
    setPaires(nouvellesPaires)
    setNomItems(items.noms)
    setDefItems(items.defs)
    setSelectedNomId(null)
    setSelectedDefId(null)
    setMatchedIds(new Set())
    setWrongNomId(null)
    setWrongDefId(null)
    setCorrects(0)
    setTermine(false)
    setPtsGagnes(0)
    setNewBadges([])
  }

  async function finirAssociation(totalCorrects: number) {
    const pts = Math.round(totalCorrects * PTS_PAIRE * (bonusLecture ? 1.5 : 1))
    await statsRepository.ajouterPoints(pts)
    const stats = await statsRepository.get()
    await statsRepository.update({ quizJoues: stats.quizJoues + 1 })
    await statsRepository.ajouterQuizReussiAujourdhui()
    await db.historiqueQuiz.add({
      date: new Date().toISOString().slice(0, 10),
      type: 'association',
      uniteNumero: numUnite,
      correct: totalCorrects,
      total: paires.length,
    })
    const badges = await checkBadges()
    setPtsGagnes(pts)
    setNewBadges(badges)
    setTermine(true)
  }

  function tryMatch(nomId: string, defId: string) {
    if (nomId === defId) {
      const newMatchedIds = new Set([...matchedIds, nomId])
      const newCorrects = corrects + 1
      setMatchedIds(newMatchedIds)
      setCorrects(newCorrects)
      setSelectedNomId(null)
      setSelectedDefId(null)
      if (newMatchedIds.size === paires.length) {
        finirAssociation(newCorrects)
      }
    } else {
      setWrongNomId(nomId)
      setWrongDefId(defId)
      setSelectedNomId(null)
      setSelectedDefId(null)
      setTimeout(() => {
        setWrongNomId(null)
        setWrongDefId(null)
      }, 600)
    }
  }

  function handleNomClick(termeId: string) {
    if (matchedIds.has(termeId) || wrongNomId !== null) return
    if (selectedNomId === termeId) {
      setSelectedNomId(null)
      return
    }
    if (selectedDefId !== null) {
      tryMatch(termeId, selectedDefId)
    } else {
      setSelectedNomId(termeId)
    }
  }

  function handleDefClick(termeId: string) {
    if (matchedIds.has(termeId) || wrongNomId !== null) return
    if (selectedDefId === termeId) {
      setSelectedDefId(null)
      return
    }
    if (selectedNomId !== null) {
      tryMatch(selectedNomId, termeId)
    } else {
      setSelectedDefId(termeId)
    }
  }

  if (paires.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center gap-4">
        <PluмyMascot etat="repos" taille={80} />
        <p className="text-[var(--color-gris-texte)]">Pas assez de termes pour ce quiz (minimum 3).</p>
        <button
          onClick={() => navigate(`/unite/${numUnite}`)}
          className="text-[var(--color-plumy-blue)] underline text-sm"
        >
          {fr.quiz.retourUnite}
        </button>
      </div>
    )
  }

  if (termine) {
    const pct = Math.round((corrects / paires.length) * 100)
    return (
      <div className="flex flex-col min-h-svh">
        <div className="flex-1 flex flex-col items-center justify-center p-8 gap-5 text-center">
          <PluмyMascot etat={pct >= 50 ? 'reussite' : 'echec'} taille={100} />
          <div>
            <h1 className="font-[var(--font-titre)] font-bold text-2xl text-[var(--color-encre)] mb-1">
              {fr.quiz.finTitre}
            </h1>
            <p className="text-[var(--color-gris-texte)] text-sm">
              {fr.quiz.score(corrects, paires.length)} paires — {pct}%
            </p>
          </div>
          {ptsGagnes > 0 && (
            <div className="bg-[#e3f2fd] border border-[var(--color-candy-bleu)] rounded-[var(--radius-card)] px-5 py-3">
              <p className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
                {fr.quiz.pointsGagnes(ptsGagnes)}
              </p>
            </div>
          )}
          {newBadges.length > 0 && (
            <div className="w-full space-y-2">
              <p className="text-xs text-[var(--color-gris-texte)] uppercase tracking-wide">
                {fr.badges.nouveauBadge}
              </p>
              {newBadges.map(id => {
                const badge = getBadge(id)
                if (!badge) return null
                return (
                  <div key={id} className="flex items-center gap-3 p-3 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
                    <span className="text-2xl" style={{ color: badge.couleur }}>{badge.symbole}</span>
                    <div className="text-left">
                      <p className="font-[var(--font-titre)] font-semibold text-[var(--color-encre)] text-sm">{badge.nom}</p>
                      <p className="text-xs text-[var(--color-gris-texte)]">{badge.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={handleRecommencer}
              className="w-full py-3 bg-[var(--color-candy-bleu)] text-white font-[var(--font-titre)] font-bold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              {fr.quiz.recommencer}
            </button>
            <button
              onClick={() => navigate(`/unite/${numUnite}`)}
              className="w-full py-3 bg-white text-[var(--color-encre)] font-[var(--font-titre)] font-semibold rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              {fr.quiz.retourUnite}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const nbRestantes = paires.length - matchedIds.size

  return (
    <div className="flex flex-col min-h-svh">
      <header className="px-5 pt-10 pb-4 bg-[var(--color-plumy-bg)]">
        <button
          onClick={() => navigate(`/unite/${numUnite}`)}
          className="flex items-center gap-1 text-[var(--color-gris-texte)] text-sm mb-4"
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {unite?.titre ?? `Unité ${numUnite}`}
        </button>
        <div className="flex items-center justify-between mb-2">
          <span className="font-[var(--font-titre)] font-bold text-[var(--color-encre)]">
            {fr.quiz.typesLabels.association}
          </span>
          <div className="flex items-center gap-2">
            {bonusLecture && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--color-candy-menthe)] text-white">
                📖 ×1.5
              </span>
            )}
            <span className="text-xs text-[var(--color-gris-texte)]">
              {fr.quiz.association.pairesRestantes(nbRestantes)}
            </span>
          </div>
        </div>
        <div className="h-2 bg-[var(--color-gris-doux)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-candy-bleu)] rounded-full"
            animate={{ width: `${(matchedIds.size / paires.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </header>

      <div className="px-3 pt-3 pb-2">
        <p className="text-xs text-[var(--color-gris-texte)] text-center">{fr.quiz.association.consigne}</p>
      </div>

      <div className="flex-1 px-3 pb-5 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {/* Noms column */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold text-[var(--color-gris-texte)] uppercase tracking-wide text-center mb-1">Terme</p>
            {nomItems.map((item) => {
              const isMatched = matchedIds.has(item.termeId)
              const isSelected = selectedNomId === item.termeId
              const isWrong = wrongNomId === item.termeId
              let cls = 'w-full p-3 rounded-[var(--radius-card)] border-2 font-[var(--font-titre)] font-semibold text-sm text-center transition-all min-h-[56px] flex items-center justify-center'
              if (isMatched) {
                cls += ' bg-[#e8f5e9] border-[var(--color-candy-menthe)] text-[var(--color-candy-menthe)] opacity-60'
              } else if (isWrong) {
                cls += ' bg-[#fce4ec] border-[var(--color-candy-corail)] text-[var(--color-candy-corail)]'
              } else if (isSelected) {
                cls += ' bg-[#e3f2fd] border-[var(--color-candy-bleu)] text-[var(--color-candy-bleu)]'
              } else {
                cls += ' bg-white border-transparent text-[var(--color-encre)] shadow-[var(--shadow-card)]'
              }
              return (
                <button key={item.termeId} onClick={() => handleNomClick(item.termeId)} disabled={isMatched} className={cls}>
                  {item.nom}
                </button>
              )
            })}
          </div>

          {/* Defs column */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold text-[var(--color-gris-texte)] uppercase tracking-wide text-center mb-1">Définition</p>
            {defItems.map((item) => {
              const isMatched = matchedIds.has(item.termeId)
              const isSelected = selectedDefId === item.termeId
              const isWrong = wrongDefId === item.termeId
              let cls = 'w-full p-3 rounded-[var(--radius-card)] border-2 font-[var(--font-corps)] text-xs text-left transition-all min-h-[56px] flex items-center'
              if (isMatched) {
                cls += ' bg-[#e8f5e9] border-[var(--color-candy-menthe)] text-[var(--color-candy-menthe)] opacity-60'
              } else if (isWrong) {
                cls += ' bg-[#fce4ec] border-[var(--color-candy-corail)] text-[var(--color-candy-corail)]'
              } else if (isSelected) {
                cls += ' bg-[#e3f2fd] border-[var(--color-candy-bleu)] text-[var(--color-candy-bleu)]'
              } else {
                cls += ' bg-white border-transparent text-[var(--color-encre)] shadow-[var(--shadow-card)]'
              }
              return (
                <button key={item.termeId} onClick={() => handleDefClick(item.termeId)} disabled={isMatched} className={cls}>
                  <span className="line-clamp-3">{item.def}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
