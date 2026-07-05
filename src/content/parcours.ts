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
    id: 'corps-prevention',
    titre: "Corps et prévention",
    description: "Prendre soin de son corps pour danser longtemps, intelligemment et sans se blesser.",
    emoji: "💚",
    couleur: 'var(--color-candy-corail)',
    termeIds: [
      'echauffement-danse', 'retour-au-calme', 'repos-recuperation',
      'gainage-fonctionnel', 'renforcement-neuromusculaire', 'proprioception',
      'souplesse-mobilite', 'turn-out', 'en-dehors-en-dedans',
      'blessure-surmenage', 'blessure-traumatique', 'facteurs-risque',
      'entorse-cheville', 'tendinopathie', 'syndrome-rotulien',
      'equilibre-musculaire', 'hygiene-vie', 'sante-mentale-danse',
    ],
  },
  {
    id: 'histoire-danse',
    titre: "Histoire de la danse",
    description: "Des origines aux disciplines contemporaines : comprendre d'où viennent les huit arts chorégraphiques.",
    emoji: "📜",
    couleur: 'var(--color-candy-lavande)',
    termeIds: [
      'ballet-de-cour', 'ballet-romantique', 'ballet-classique-academique', 'sur-les-pointes',
      'danse-moderne', 'ausdruckstanz', 'danse-contemporaine', 'danse-postmoderne',
      'origines-jazz-dance', 'lindy-hop', 'jazz-theatrical', 'katherine-dunham', 'alvin-ailey',
      'cancan', 'kabarett', 'burlesque-origines', 'neo-burlesque',
      'vogue-ballroom', 'heels-dance',
      'mat-chinois', 'pole-contemporain',
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
    id: 'musique-et-danse',
    titre: "Musique et danse",
    description: "Apprendre à écouter la musique autrement — tempo, phrasé, dynamiques, et dialogue avec la mélodie.",
    emoji: "🎵",
    couleur: 'var(--color-candy-bleu)',
    termeIds: [
      'tempo', 'mesure-musicale', 'phrase-musicale', 'anacrouse', 'syncope',
      'marquage-tempo', 'rubato',
      'dynamiques-musicales', 'crescendo', 'legato', 'staccato',
      'forme-musicale', 'motif-musical', 'cadence-harmonique',
      'groove', 'accent-jazz', 'eight-count',
      'musicalidad-tango', 'compas-tango',
    ],
  },
  {
    id: 'jazz-et-ses-mondes',
    titre: "Jazz et ses mondes",
    description: "Du tronc commun jazz aux sept sous-styles : Broadway, Fosse, lyrical, street, afro-jazz et plus.",
    emoji: "🎷",
    couleur: 'var(--color-candy-rose)',
    termeIds: [
      'groove', 'eight-count', 'ball-change', 'jazz-square', 'jazz-walk', 'jazz-run',
      'isolations-jazz', 'arm-styling', 'niveau-bas', 'hip-roll',
      'pirouette-jazz', 'stag-leap', 'barrel-turn', 'tilt-jazz',
      'sous-style-broadway', 'sous-style-fosse', 'sous-style-lyrical',
      'sous-style-street-jazz', 'sous-style-afro-jazz',
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
  {
    id: 'tango-argentin',
    titre: "Tango argentin",
    description: "L'abrazo, la marche, les figures improvisées — le langage complet du tango social de Buenos Aires.",
    emoji: "🌹",
    couleur: 'var(--color-candy-corail)',
    termeIds: [
      'abrazo', 'eje', 'apilado', 'connexion-tango', 'transfert-de-poids', 'roles-tango',
      'cadencia', 'caminada', 'salida-tango', 'paso-lateral',
      'disociacion-tango', 'pivot-tango', 'ocho', 'parada', 'molinete',
      'adorno-tango', 'amague', 'lapiz',
      'gancho', 'boleo', 'sacada',
      'milonga', 'cabeceo', 'musicalidad-tango', 'codigos-milonga',
    ],
  },
  {
    id: 'pole-dance',
    titre: "Pole dance",
    description: "Des prises aux inversions : le vocabulaire technique du pole et l'histoire de celles qui l'ont créé.",
    emoji: "🌀",
    couleur: 'var(--color-candy-lavande)',
    termeIds: [
      'origine-pole', 'mat-chinois', 'pole-contemporain',
      'pole-sport', 'pole-art', 'exotic-pole',
      'grip-pole', 'prise-basique', 'montee-pole', 'spin-pole',
      'figure-statique', 'inversion-pole', 'ayesha',
      'floorwork-pole', 'conditioning-pole',
    ],
  },
  {
    id: 'improvisation-composition',
    titre: "Improvisation et composition",
    description: "Créer sur le moment, structurer une pièce, noter le mouvement — les outils du danseur-créateur.",
    emoji: "🎭",
    couleur: 'var(--color-candy-jaune)',
    termeIds: [
      'etat-de-disponibilite', 'improvisation-structuree', 'contrainte-creative', 'donnee-de-depart',
      'score-improvisation', 'instant-composition', 'ecoute-partenaire',
      'motif-choregraphique', 'phrase-choregraphique', 'procedes-composition',
      'structure-choregraphique', 'intention-artistique',
      'notation-mouvement', 'labanotation', 'benesh-notation',
    ],
  },
]
