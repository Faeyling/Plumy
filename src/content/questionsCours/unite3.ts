import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite3: QuestionQCMCours[] = [
  // ─── Qu'est-ce que la danse contemporaine ? (section 0) ───────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 0,
    question: "Quel collectif new-yorkais des années 1960 a opéré une rupture radicale avec la technique moderne et ouvert la voie à la danse contemporaine ?",
    bonneReponse: "Le Judson Dance Theater",
    choix: [
      "Le Judson Dance Theater",
      "L'Alvin Ailey American Dance Theater",
      "Le New York City Ballet",
      "La compagnie Martha Graham",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 0,
    question: "Parmi ces caractéristiques, laquelle NE définit PAS la danse contemporaine ?",
    bonneReponse: "Une technique universelle codifiée transmise de génération en génération",
    choix: [
      "Une technique universelle codifiée transmise de génération en génération",
      "La diversité des corps qui la pratiquent",
      "L'importance accordée au processus autant qu'au résultat",
      "La dimension de questionnement artistique, social ou politique",
    ],
  },

  // ─── Le corps contemporain — rapport à la gravité (section 1) ─────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 1,
    question: "Quelle est la différence fondamentale entre le corps classique et le corps contemporain dans leur rapport à la gravité ?",
    bonneReponse: "Le corps classique lutte contre la gravité ; le corps contemporain dialogue avec elle",
    choix: [
      "Le corps classique lutte contre la gravité ; le corps contemporain dialogue avec elle",
      "Le corps classique ignore la gravité ; le corps contemporain la subit",
      "Le corps classique utilise le sol ; le corps contemporain reste toujours vertical",
      "Il n'y a aucune différence : les deux styles utilisent la gravité de la même façon",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 1,
    question: "Qu'est-ce que l'axe diagonal en danse contemporaine ?",
    bonneReponse: "Le corps penché en déséquilibre volontaire, entre verticale et horizontale",
    choix: [
      "Le corps penché en déséquilibre volontaire, entre verticale et horizontale",
      "Le corps allongé au sol, parallèle au plancher",
      "Une ligne tracée en diagonale sur le plateau pour guider les déplacements",
      "Le corps parfaitement vertical tourné à 45° par rapport au public",
    ],
  },

  // ─── La release technique (section 2) ─────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 2,
    question: "Qu'est-ce que la release technique en danse contemporaine ?",
    bonneReponse: "Une philosophie du mouvement basée sur l'économie d'effort et la libération des tensions parasites",
    choix: [
      "Une philosophie du mouvement basée sur l'économie d'effort et la libération des tensions parasites",
      "Une technique de relaxation qui supprime tout engagement musculaire",
      "Un style esthétique caractérisé par des mouvements très lents",
      "Un échauffement avant le cours contemporain pour se préparer",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 2,
    question: "Dans le scan corporel issu de la release technique, que cherche-t-on à faire ?",
    bonneReponse: "Identifier et libérer les tensions non nécessaires, zone par zone",
    choix: [
      "Identifier et libérer les tensions non nécessaires, zone par zone",
      "Contracter successivement chaque muscle pour vérifier sa force",
      "Endormir les zones du corps inutilisées dans la danse",
      "Mémoriser la position de chaque articulation pour la reproduire",
    ],
  },

  // ─── La contraction-release (section 3) ───────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 3,
    question: "Quelle est l'idée centrale de Martha Graham sur la relation entre respiration et mouvement ?",
    bonneReponse: "La respiration génère le mouvement — elle n'est pas superposée à un mouvement déjà décidé",
    choix: [
      "La respiration génère le mouvement — elle n'est pas superposée à un mouvement déjà décidé",
      "Le mouvement doit toujours être retenu jusqu'à l'expiration complète",
      "La respiration doit être suspendue pendant les moments d'expression intense",
      "La respiration et le mouvement sont deux processus indépendants qu'on apprend à dissocier",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 3,
    question: "Que se passe-t-il dans le corps pendant la contraction Graham ?",
    bonneReponse: "Creusement actif du bas-ventre, la colonne se courbe en C",
    choix: [
      "Creusement actif du bas-ventre, la colonne se courbe en C",
      "Extension du sternum vers le haut, la colonne s'allonge",
      "Les bras s'ouvrent en croix pendant que le tronc reste neutre",
      "Les jambes se ferment en cinquième position pendant que le dos s'arrondit",
    ],
  },

  // ─── Le travail au sol (section 4) ────────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 4,
    question: "Quelles surfaces corporelles sont sûres pour rouler au sol en floorwork ?",
    bonneReponse: "Dos plat, côté de la cuisse, côté du torse, ventre",
    choix: [
      "Dos plat, côté de la cuisse, côté du torse, ventre",
      "Genoux, coudes et hanches — zones les plus musclées",
      "Uniquement la colonne vertébrale, zone centrale du corps",
      "Les os saillants, car ils permettent de rebondir facilement",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 4,
    question: "Qu'est-ce qu'une chute dirigée en danse contemporaine ?",
    bonneReponse: "Une chute effectuée avec une direction choisie et un plan de sortie prévu",
    choix: [
      "Une chute effectuée avec une direction choisie et un plan de sortie prévu",
      "Une chute totalement incontrôlée qui exprime la liberté du corps",
      "Un saut vers le sol depuis une hauteur maximale",
      "Une chute vers l'arrière sur les mains, comme en acrobatie",
    ],
  },

  // ─── Le contact improvisation (section 5) ─────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 5,
    question: "Qui a créé le contact improvisation, et en quelle année ?",
    bonneReponse: "Steve Paxton, en 1972",
    choix: [
      "Steve Paxton, en 1972",
      "Martha Graham, en 1945",
      "Pina Bausch, en 1978",
      "Yvonne Rainer, en 1965",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 5,
    question: "Parmi ces principes, lequel est fondamental dans le contact improvisation ?",
    bonneReponse: "La réciprocité — pas de rôle fixe porteur/porté, tout change en permanence",
    choix: [
      "La réciprocité — pas de rôle fixe porteur/porté, tout change en permanence",
      "La hiérarchie — un danseur porte toujours, l'autre est toujours porté",
      "La mémorisation d'une chorégraphie commune avant la pratique",
      "L'absence de contact physique direct entre les partenaires",
    ],
  },

  // ─── Improvisation et composition (section 6) ─────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 6,
    question: "Qu'est-ce qu'un score (partition d'improvisation) en danse contemporaine ?",
    bonneReponse: "Un cadre de contraintes qui guide l'improvisation sans fixer le contenu du mouvement",
    choix: [
      "Un cadre de contraintes qui guide l'improvisation sans fixer le contenu du mouvement",
      "Une partition musicale sur laquelle le danseur synchronise ses gestes",
      "Une suite de positions chorégraphiées à mémoriser avant d'improviser",
      "Un système de notation qui transcrit exactement chaque mouvement",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-contemporain',
    sectionIndex: 6,
    question: "L'improvisation en danse contemporaine est informée par plusieurs éléments. Lequel de ces éléments en fait partie ?",
    bonneReponse: "La conscience de l'espace et l'écoute musicale",
    choix: [
      "La conscience de l'espace et l'écoute musicale",
      "L'absence totale d'intention pour laisser le corps complètement libre",
      "La reproduction fidèle d'une phrase mémorisée sans variation",
      "La compétition avec les autres danseurs sur scène",
    ],
  },
]
