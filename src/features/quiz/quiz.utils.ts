import type { Terme, QuestionQCMCours } from '@/content/schema'

export type { QuestionQCMCours }

// ─── Types ────────────────────────────────────────────────────────────────────

export interface QuestionReconnaissanceVisuelle {
  type: 'reconnaissance-visuelle'
  termeId: string
  categorie: string
  disciplines: string[]
  extrait: string
  bonneReponse: string
  choix: string[]
}

export interface QuestionQCM {
  type: 'qcm'
  termeId: string
  definition: string
  bonneReponse: string
  choix: string[]
}

export interface PaireAssociation {
  termeId: string
  nom: string
  definition: string
}

export interface QuestionTexteATrous {
  type: 'texte-a-trous'
  termeId: string
  texteAvecTrous: string
  motManquant: string
  propositions: string[]
}

export type QuestionQCMAny = QuestionQCM | QuestionQCMCours

// ─── Utils ────────────────────────────────────────────────────────────────────

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Générateurs ──────────────────────────────────────────────────────────────

export function genererQCM(termes: Terme[], nbQuestions = 10): QuestionQCM[] {
  if (termes.length < 4) return []
  const nb = Math.min(nbQuestions, termes.length)
  return shuffle(termes)
    .slice(0, nb)
    .map((terme) => {
      const distracteurs = shuffle(termes.filter((t) => t.id !== terme.id))
        .slice(0, 3)
        .map((t) => t.nom)
      return {
        type: 'qcm' as const,
        termeId: terme.id,
        definition: terme.definition,
        bonneReponse: terme.nom,
        choix: shuffle([terme.nom, ...distracteurs]),
      }
    })
}

export function genererAssociation(termes: Terme[], nbPaires = 5): PaireAssociation[] {
  if (termes.length < 3) return []
  const nb = Math.min(nbPaires, termes.length)
  return shuffle(termes).slice(0, nb).map((t) => ({
    termeId: t.id,
    nom: t.nom,
    definition: t.definition.length > 110 ? t.definition.slice(0, 107) + '…' : t.definition,
  }))
}

export function genererReconnaissanceVisuelle(termes: Terme[], nbQuestions = 8): QuestionReconnaissanceVisuelle[] {
  const eligibles = termes.filter(t => t.description.length > 60)
  if (eligibles.length < 4) return []
  const nb = Math.min(nbQuestions, eligibles.length)
  return shuffle(eligibles).slice(0, nb).map(terme => {
    const lignes = terme.description
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#') && !l.startsWith('|') && !l.startsWith('-') && !l.startsWith('*') && !l.startsWith('**'))
    const source = (lignes[0] ?? terme.description).slice(0, 200)
    const escaped = terme.nom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const extrait = source.replace(new RegExp(escaped, 'gi'), '___')
    const autres = shuffle(termes.filter(t => t.id !== terme.id)).slice(0, 3)
    return {
      type: 'reconnaissance-visuelle' as const,
      termeId: terme.id,
      categorie: terme.categories[0] ?? 'concepts',
      disciplines: terme.disciplines,
      extrait,
      bonneReponse: terme.nom,
      choix: shuffle([terme.nom, ...autres.map(t => t.nom)]),
    }
  })
}

export function genererTexteATrous(termes: Terme[], nbQuestions = 8): QuestionTexteATrous[] {
  if (termes.length < 4) return []
  const nb = Math.min(nbQuestions, termes.length)
  return shuffle(termes)
    .slice(0, nb)
    .map((terme) => {
      let texteAvecTrous = terme.definition
      const escaped = terme.nom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      if (new RegExp(escaped, 'i').test(terme.definition)) {
        texteAvecTrous = terme.definition.replace(new RegExp(escaped, 'i'), '___')
      } else if (terme.alias) {
        for (const alias of terme.alias) {
          const aEsc = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const replaced = terme.definition.replace(new RegExp(aEsc, 'i'), '___')
          if (replaced !== terme.definition) {
            texteAvecTrous = replaced
            break
          }
        }
      }
      const distracteurs = shuffle(termes.filter((t) => t.id !== terme.id))
        .slice(0, 3)
        .map((t) => t.nom)
      return {
        type: 'texte-a-trous' as const,
        termeId: terme.id,
        texteAvecTrous,
        motManquant: terme.nom,
        propositions: shuffle([terme.nom, ...distracteurs]),
      }
    })
}
