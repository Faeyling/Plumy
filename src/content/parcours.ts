export interface Parcours {
  id: string
  titre: string
  description: string
  emoji: string
  couleur: string
  termeIds: string[]
}

export const parcours: Parcours[] = [
  {
    id: 'premiers-pas',
    titre: "Premiers pas dans la danse",
    description: "Les fondamentaux trans-disciplines pour poser des bases solides, quelle que soit ta discipline.",
    emoji: "🌱",
    couleur: 'var(--color-candy-menthe)',
    termeIds: [
      'alignement', 'centre-de-gravite', 'tonicite', 'qualites-de-mouvement',
      'niveaux-espace', 'effort-laban',
      'plie', 'releve', 'tendu', 'arabesque', 'port-de-bras', 'cinq-positions-pieds',
      'isolations-jazz', 'jazz-walk', 'groove',
      'tempo', 'mesure-musicale', 'phrase-musicale',
    ],
  },
  {
    id: 'presence-scenique',
    titre: "Présence scénique",
    description: "Tout ce qui fait qu'un danseur capte l'attention — du regard au timing, du costume au silence.",
    emoji: "✨",
    couleur: 'var(--color-candy-jaune)',
    termeIds: [
      'presentation-scenique', 'rapport-public', 'intention-artistique',
      'character-burlesque', 'timing-burlesque', 'pose-burlesque', 'nom-scene-burlesque',
      'port-costume', 'boa-eventail', 'meneuse-revue',
      'frame-heels', 'sass', 'strut',
      'etat-de-disponibilite', 'instant-composition',
    ],
  },
  {
    id: 'danses-de-scene',
    titre: "Danses de scène",
    description: "Cabaret, heels et burlesque réunis : le triptyque de la danse spectacle et de la présence incarnée.",
    emoji: "💄",
    couleur: 'var(--color-candy-rose)',
    termeIds: [
      'french-cancan', 'high-kick', 'fan-kick', 'chorus-line', 'synchronisation-chorus',
      'chahut', 'galop-cancan', 'meneuse-revue',
      'posture-heels', 'walk-heels', 'hair-toss', 'cat-walk-heels', 'vogue-ballroom-heels',
      'effeuillage', 'tease', 'shimmy', 'bump-grind', 'reveal-burlesque', 'tassel-twirling',
    ],
  },
]
