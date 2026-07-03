import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite2: QuestionQCMCours[] = [
  // ─── La logique du cours classique (section 0) ────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 0,
    question: "Dans quel ordre se déroule un cours de danse classique traditionnel ?",
    bonneReponse: "Échauffement → barre → milieu → allegro → pointes → révérence",
    choix: [
      "Échauffement → barre → milieu → allegro → pointes → révérence",
      "Barre → milieu → allegro → échauffement → pointes → révérence",
      "Milieu → barre → adage → allegro → pointes → révérence",
      "Échauffement → milieu → barre → allegro → révérence → pointes",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 0,
    question: "Pourquoi la barre précède-t-elle systématiquement le milieu dans le cours classique ?",
    bonneReponse: "La barre chauffe et aligne le corps, le milieu transfère ensuite les acquis sans appui",
    choix: [
      "La barre chauffe et aligne le corps, le milieu transfère ensuite les acquis sans appui",
      "La barre s'apprend plus facilement ; le milieu est réservé aux niveaux avancés",
      "C'est une convention historique sans justification pédagogique particulière",
      "La barre donne de l'endurance cardio avant les exercices libres du milieu",
    ],
  },

  // ─── La barre — exercices fondamentaux (section 1) ────────────────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 1,
    question: "Quel est le premier exercice exécuté à la barre dans un cours classique ?",
    bonneReponse: "Les pliés",
    choix: [
      "Les pliés",
      "Les battements tendus",
      "Les ronds de jambe",
      "Les grands battements",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 1,
    question: "Comment doit-on tenir la barre en danse classique ?",
    bonneReponse: "Main posée légèrement — la barre est un appui, pas une béquille",
    choix: [
      "Main posée légèrement — la barre est un appui, pas une béquille",
      "Main agrippée fermement pour assurer la stabilité",
      "Deux mains sur la barre face au miroir pour un meilleur équilibre",
      "Main posée uniquement sur les exercices lents, retirée sur les exercices rapides",
    ],
  },

  // ─── Les cinq positions et le turn-out (section 2) ────────────────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 2,
    question: "D'où doit partir le turn-out en danse classique ?",
    bonneReponse: "De la hanche, grâce aux rotateurs externes",
    choix: [
      "De la hanche, grâce aux rotateurs externes",
      "Du genou, en ouvrant doucement l'articulation",
      "Du pied, en orientant la pointe vers l'extérieur",
      "De la cheville, en combinant rotation et extension",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 2,
    question: "Quelle blessure peut provoquer un turn-out forcé depuis le genou ?",
    bonneReponse: "Le syndrome fémoro-patellaire",
    choix: [
      "Le syndrome fémoro-patellaire",
      "La tendinite d'Achille",
      "L'entorse de cheville",
      "La fracture de stress du pied",
    ],
  },

  // ─── L'adage — lenteur, amplitude et expression (section 3) ───────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 3,
    question: "De quelle œuvre d'art s'inspire la position de l'attitude en danse classique ?",
    bonneReponse: "La statue de Mercure de Giambologna",
    choix: [
      "La statue de Mercure de Giambologna",
      "La Vénus de Milo de l'Antiquité grecque",
      "Le Penseur de Rodin",
      "La Victoire de Samothrace",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 3,
    question: "D'où doit venir la ligne de l'arabesque en danse classique ?",
    bonneReponse: "Du dos, qui allonge toute la diagonale",
    choix: [
      "Du dos, qui allonge toute la diagonale",
      "De la jambe levée, qui doit monter le plus haut possible",
      "Des bras, qui compensent le poids de la jambe",
      "Du bassin, en le soulevant vers le haut",
    ],
  },

  // ─── L'allegro — de la légèreté à la puissance (section 4) ───────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 4,
    question: "Dans quel ordre le pied doit-il toucher le sol à l'atterrissage d'un saut ?",
    bonneReponse: "Talon — voûte — métatarses — orteils, en demi-plié",
    choix: [
      "Talon — voûte — métatarses — orteils, en demi-plié",
      "Orteils — métatarses — voûte — talon, en jambes tendues",
      "Pointe du pied entière posée à plat simultanément",
      "Talon en premier, puis les orteils, sans plier le genou",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 4,
    question: "Qu'est-ce qu'un pas de bourrée en danse classique ?",
    bonneReponse: "Une liaison de trois petits pas exécutés sur demi-pointe",
    choix: [
      "Une liaison de trois petits pas exécutés sur demi-pointe",
      "Un saut avec assemblé des deux jambes en cinquième",
      "Un grand pas glissé sur le sol d'une jambe à l'autre",
      "Un tour lent d'un demi-cercle sur la pointe du pied",
    ],
  },

  // ─── Les tours — pirouette, fouetté, chaînés (section 5) ──────────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 5,
    question: "En quoi consiste le spotting dans les tours en danse classique ?",
    bonneReponse: "Fixer un point de référence, laisser le corps tourner, puis tourner la tête 360° rapidement pour retrouver ce point",
    choix: [
      "Fixer un point de référence, laisser le corps tourner, puis tourner la tête 360° rapidement pour retrouver ce point",
      "Regarder vers le bas pour maintenir l'équilibre durant la rotation",
      "Fermer les yeux pour mieux sentir l'axe de rotation intérieur",
      "Faire tourner la tête en même temps que le corps, à la même vitesse",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 5,
    question: "D'où vient l'élan d'une pirouette réussie ?",
    bonneReponse: "Du demi-plié de préparation, pas d'un effort brut",
    choix: [
      "Du demi-plié de préparation, pas d'un effort brut",
      "D'un coup de bras énergique au moment du décollage",
      "D'une poussée des deux pieds vers le haut simultanément",
      "De la tension maximale des muscles abdominaux avant la rotation",
    ],
  },

  // ─── Santé et longévité (section 6) ───────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 6,
    question: "Quel est l'âge minimum recommandé pour commencer le travail en pointes ?",
    bonneReponse: "10 à 12 ans, selon la maturité osseuse",
    choix: [
      "10 à 12 ans, selon la maturité osseuse",
      "6 à 8 ans, dès que l'enfant peut tenir l'équilibre",
      "14 à 16 ans, après la puberté complète",
      "Aucun âge minimum : c'est la morphologie qui compte, pas l'âge",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-classique',
    sectionIndex: 6,
    question: "Quelle blessure est associée à un turn-out forcé au niveau du genou ?",
    bonneReponse: "Le syndrome fémoro-patellaire",
    choix: [
      "Le syndrome fémoro-patellaire",
      "La bursite de hanche",
      "La lombalgie par cambrure",
      "L'hallux valgus",
    ],
  },
]
