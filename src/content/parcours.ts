export interface Parcours {
  id: string
  titre: string
  description: string
  emoji: string
  couleur: string
  termeIds: string[]
  coursIds?: string[]
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
    coursIds: ['transversal-corps-fondamentaux', 'transversal-musique-danse'],
  },
  {
    id: 'au-sol',
    titre: "Au sol",
    description: "Le sol comme espace chorégraphique à part entière — traité différemment dans chaque discipline.",
    emoji: "🪸",
    couleur: 'var(--color-candy-bleu)',
    termeIds: [
      'floorwork', 'chute-controlee', 'roulade', 'poids-abandon', 'fall-recovery',
      'niveau-bas', 'freeze-jazz',
      'floorwork-heels', 'vogue-ballroom-heels',
      'floorwork-pole',
    ],
    coursIds: ['transversal-floorwork-pourquoi', 'transversal-floorwork-technique'],
  },
  {
    id: 'poids-appuis-connexion',
    titre: "Poids, appuis, connexion",
    description: "Comment le corps gère son poids, seul ou à deux — du ballon classique à l'abrazo du tango.",
    emoji: "⚖️",
    couleur: 'var(--color-candy-lavande)',
    termeIds: [
      'centre-de-gravite', 'tonicite',
      'desequilibre', 'suspension', 'partage-poids', 'point-de-contact',
      'ballon', 'demi-pointes',
      'abrazo', 'eje', 'apilado', 'transfert-de-poids', 'connexion-tango',
      'preparation-elan', 'niveau-bas',
      'grip-pole', 'conditioning-pole',
    ],
    coursIds: ['transversal-gerer-son-poids', 'transversal-danser-a-deux'],
  },
  {
    id: 'isolations-polycentrisme',
    titre: "Isolations et polycentrisme",
    description: "La dissociation du corps comme langage commun au moderne, au jazz, au burlesque et aux heels.",
    emoji: "🔀",
    couleur: 'var(--color-candy-rose)',
    termeIds: [
      'isolation', 'travail-bassin', 'polycentrisme', 'succession-corporelle',
      'isolations-jazz', 'hip-roll',
      'shimmy', 'bump-grind',
      'body-roll-heels',
    ],
    coursIds: ['transversal-art-isolation', 'transversal-bassin-centre'],
  },
  {
    id: 'tours-rotations',
    titre: "Tours et rotations",
    description: "La rotation comme technique universelle — une logique commune, un vocabulaire propre à chaque discipline.",
    emoji: "🌀",
    couleur: 'var(--color-candy-jaune)',
    termeIds: [
      'pirouette', 'fouette', 'chaines',
      'pirouette-jazz', 'barrel-turn', 'pivot-turn',
      'pivot-tango', 'molinete', 'ocho',
      'spin-pole',
      'heel-turn',
    ],
    coursIds: ['transversal-mecanique-rotation', 'transversal-tours-disciplines'],
  },
  {
    id: 'presence-identite-scenique',
    titre: "Présence et identité scénique",
    description: "Construire un personnage et habiter la scène — du jazz Broadway au burlesque, en passant par le cabaret et les heels.",
    emoji: "🎭",
    couleur: 'var(--color-candy-corail)',
    termeIds: [
      'presentation-scenique', 'rapport-public', 'meneuse-revue',
      'character-burlesque', 'timing-burlesque', 'nom-scene-burlesque', 'pose-burlesque',
      'frame-heels', 'sass',
      'arm-styling', 'sous-style-broadway', 'freeze-jazz',
      'etat-de-disponibilite', 'intention-artistique',
    ],
    coursIds: ['transversal-identite-scene', 'transversal-habiter-scene'],
  },
]
