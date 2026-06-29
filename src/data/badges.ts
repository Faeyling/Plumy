export interface BadgeDefinition {
  id: string
  nom: string
  description: string
  symbole: string
  couleur: string
}

export const BADGES: BadgeDefinition[] = [
  // ─── Découverte ───────────────────────────────────────────────────────────
  {
    id: 'premier-pas',
    nom: 'Premiers pas',
    description: 'Premier terme exploré',
    symbole: '★',
    couleur: 'var(--color-candy-menthe)',
  },
  {
    id: 'curieux',
    nom: 'Curieux',
    description: '10 termes explorés',
    symbole: '◆',
    couleur: 'var(--color-candy-bleu)',
  },
  {
    id: 'studieux',
    nom: 'Studieux',
    description: '50 termes explorés',
    symbole: '◆',
    couleur: 'var(--color-candy-lavande)',
  },
  {
    id: 'encyclopediste',
    nom: 'Encyclopédiste',
    description: '100 termes explorés',
    symbole: '◆',
    couleur: 'var(--color-candy-rose-dark)',
  },
  // ─── Quiz ─────────────────────────────────────────────────────────────────
  {
    id: 'premier-quiz',
    nom: 'Premier quiz',
    description: 'Premier quiz joué',
    symbole: '▲',
    couleur: 'var(--color-candy-jaune)',
  },
  {
    id: 'quiz-x10',
    nom: 'Quizzeur',
    description: '10 quiz joués',
    symbole: '▲',
    couleur: 'var(--color-candy-corail)',
  },
  {
    id: 'quiz-x25',
    nom: 'Champion du quiz',
    description: '25 quiz joués',
    symbole: '▲',
    couleur: 'var(--color-candy-rose-dark)',
  },
  // ─── Streak ───────────────────────────────────────────────────────────────
  {
    id: 'serie-3',
    nom: 'En route',
    description: '3 jours de suite',
    symbole: '●',
    couleur: 'var(--color-candy-corail)',
  },
  {
    id: 'serie-7',
    nom: 'Semaine parfaite',
    description: '7 jours de suite',
    symbole: '●',
    couleur: 'var(--color-candy-jaune)',
  },
  {
    id: 'serie-30',
    nom: 'Un mois avec Plumy',
    description: '30 jours de suite',
    symbole: '●',
    couleur: 'var(--color-candy-lavande)',
  },
  // ─── Maîtrise ─────────────────────────────────────────────────────────────
  {
    id: 'premier-maitrise',
    nom: 'Premier maîtrisé',
    description: 'Premier terme maîtrisé',
    symbole: '✦',
    couleur: 'var(--color-candy-menthe)',
  },
  {
    id: 'maitrise-x10',
    nom: 'Expert',
    description: '10 termes maîtrisés',
    symbole: '✦',
    couleur: 'var(--color-candy-lavande)',
  },
  {
    id: 'maitrise-x50',
    nom: 'Maître danseur',
    description: '50 termes maîtrisés',
    symbole: '✦',
    couleur: 'var(--color-candy-rose-dark)',
  },
  // ─── Favoris ──────────────────────────────────────────────────────────────
  {
    id: 'collectionneur',
    nom: 'Collectionneur',
    description: '10 termes en favoris',
    symbole: '♥',
    couleur: 'var(--color-candy-rose)',
  },
  // ─── Paliers de points ────────────────────────────────────────────────────
  {
    id: 'palier-plume',
    nom: 'Plume légère',
    description: '100 points accumulés',
    symbole: '🪶',
    couleur: '#a78bfa',
  },
  {
    id: 'palier-en-scene',
    nom: 'En scène',
    description: '300 points accumulés',
    symbole: '💃',
    couleur: '#f472b6',
  },
  {
    id: 'palier-etoile',
    nom: 'Étoile montante',
    description: '750 points accumulés',
    symbole: '⭐',
    couleur: '#fbbf24',
  },
  {
    id: 'palier-role',
    nom: 'Premier rôle',
    description: '1 500 points accumulés',
    symbole: '🎭',
    couleur: '#fb923c',
  },
  {
    id: 'palier-vedette',
    nom: 'Vedette',
    description: '3 000 points accumulés',
    symbole: '🏆',
    couleur: '#f59e0b',
  },
  {
    id: 'palier-plumy-or',
    nom: "Plumy d'or",
    description: '6 000 points accumulés',
    symbole: '🦚',
    couleur: '#10b981',
  },
]

export function getBadge(id: string): BadgeDefinition | undefined {
  return BADGES.find((b) => b.id === id)
}
