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
    id: 'debutant-scene',
    titre: "Débutant sur scène",
    description: "Les fondamentaux pour comprendre la danse du classique au jazz.",
    emoji: "🌱",
    couleur: 'var(--color-candy-menthe)',
    termeIds: [
      'plie', 'releve', 'tendu', 'arabesque', 'port-de-bras',
      'cinq-positions-pieds', 'positions-bras', 'epaulement',
      'isolations-jazz', 'jazz-walk', 'groove', 'eight-count',
      'tempo', 'mesure-musicale', 'phrase-musicale',
    ],
  },
  {
    id: 'corps-prevention',
    titre: "Corps et prévention",
    description: "Prendre soin de son corps pour danser longtemps et sans se blesser.",
    emoji: "💚",
    couleur: 'var(--color-candy-corail)',
    termeIds: [
      'echauffement-danse', 'retour-au-calme', 'repos-recuperation',
      'gainage-fonctionnel', 'renforcement-neuromusculaire', 'proprioception',
      'souplesse-mobilite', 'turn-out', 'en-dehors-en-dedans',
      'blessure-surmenage', 'entorse-cheville', 'syndrome-rotulien',
      'equilibre-musculaire', 'hygiene-vie', 'sante-mentale-danse',
    ],
  },
  {
    id: 'histoire-danse',
    titre: "Histoire de la danse",
    description: "Un voyage dans le temps pour comprendre d'où viennent nos disciplines.",
    emoji: "📜",
    couleur: 'var(--color-candy-lavande)',
    termeIds: [
      'ballet-de-cour', 'ballet-romantique', 'ballet-classique-academique',
      'danse-moderne', 'danse-contemporaine', 'ausdruckstanz',
      'origines-jazz-dance', 'origine-pole', 'burlesque-origines',
      'neo-burlesque', 'kabarett', 'revue',
      'vogue-ballroom', 'lindy-hop', 'danse-postmoderne',
    ],
  },
  {
    id: 'corps-en-scene',
    titre: "Présence scénique",
    description: "Tout ce qui fait qu'un danseur capte l'attention du premier au dernier rang.",
    emoji: "✨",
    couleur: 'var(--color-candy-jaune)',
    termeIds: [
      'presentation-scenique', 'rapport-public', 'intention-artistique',
      'character-burlesque', 'nom-scene-burlesque', 'pose-burlesque',
      'timing-burlesque', 'port-costume', 'cote-cour', 'face-lointain',
      'phrase-choregraphique', 'motif-choregraphique', 'structure-choregraphique',
      'instant-composition', 'improvisation-structuree',
    ],
  },
]
