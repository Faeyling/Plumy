import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite4: QuestionQCMCours[] = [
  // ─── Qu'est-ce que la danse moderne ? (section 0) ─────────────────────────
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 0,
    question: "Quelle a été la rupture principale de la danse moderne avec le ballet académique ?",
    bonneReponse: "Le rejet des pointes, du turn-out obligatoire et du livret narratif comme fondement",
    choix: [
      "Le rejet des pointes, du turn-out obligatoire et du livret narratif comme fondement",
      "L'abandon de la musique pour danser en silence",
      "Le remplacement de la scène de théâtre par des espaces publics",
      "La suppression de tout travail en groupe pour favoriser le solo",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 0,
    question: "Qu'est-ce qui distingue la danse moderne de la danse contemporaine ?",
    bonneReponse: "La moderne utilise des techniques codifiées et croit encore qu'il y a quelque chose à exprimer ; la contemporaine remet ce postulat en question",
    choix: [
      "La moderne utilise des techniques codifiées et croit encore qu'il y a quelque chose à exprimer ; la contemporaine remet ce postulat en question",
      "La contemporaine se pratique seulement en studio ; la moderne uniquement sur scène",
      "La danse moderne est plus récente que la contemporaine",
      "Il n'y a aucune différence : les deux termes désignent la même chose",
    ],
  },

  // ─── Les isolations et la segmentation corporelle (section 1) ─────────────
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 1,
    question: "D'où vient l'isolation corporelle, telle qu'elle est codifiée en danse moderne ?",
    bonneReponse: "Des traditions africaines et afro-américaines intégrées par la danse moderne",
    choix: [
      "Des traditions africaines et afro-américaines intégrées par la danse moderne",
      "De la gymnastique rythmique européenne du XIXe siècle",
      "De la danse classique indienne Bharatanatyam",
      "D'exercices de rééducation médicale adaptés à la danse",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 1,
    question: "Qu'est-ce que le polycentrisme en danse moderne ?",
    bonneReponse: "Plusieurs parties du corps actives simultanément avec des énergies et des rythmes différents",
    choix: [
      "Plusieurs parties du corps actives simultanément avec des énergies et des rythmes différents",
      "La capacité à danser simultanément sur deux musiques différentes",
      "Le déplacement vers plusieurs points de l'espace au cours d'une phrase",
      "L'utilisation des deux côtés du corps avec la même fluidité",
    ],
  },

  // ─── Le travail du buste — flat back, hinge, ondulation (section 2) ────────
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 2,
    question: "En quoi consiste le flat back en danse moderne ?",
    bonneReponse: "Le torse s'incline depuis les hanches en maintenant la colonne parfaitement droite et horizontale",
    choix: [
      "Le torse s'incline depuis les hanches en maintenant la colonne parfaitement droite et horizontale",
      "Le dos s'arrondit complètement vers l'avant depuis la taille",
      "La colonne se courbe en C depuis le bas du dos vers le haut",
      "Le torse s'incline latéralement en gardant une légère torsion",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 2,
    question: "Quelle est la source du mouvement dans le hinge (Technique Horton) ?",
    bonneReponse: "Les genoux — le corps entier s'incline en arrière comme un seul bloc",
    choix: [
      "Les genoux — le corps entier s'incline en arrière comme un seul bloc",
      "La taille — le haut du corps bascule indépendamment des jambes",
      "Les épaules — elles tirent le corps vers l'arrière",
      "Le bassin — il pousse vers l'avant pour créer la diagonale",
    ],
  },

  // ─── Les trois grandes techniques modernes (section 3) ────────────────────
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 3,
    question: "Quel chorégraphe célèbre a été formé à la technique Horton et l'a transmise au monde entier ?",
    bonneReponse: "Alvin Ailey",
    choix: [
      "Alvin Ailey",
      "José Limón",
      "Merce Cunningham",
      "Jerome Robbins",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 3,
    question: "Quel principe radical caractérise la technique Cunningham ?",
    bonneReponse: "La dissociation de la danse et de la musique — elles coexistent sans se synchroniser",
    choix: [
      "La dissociation de la danse et de la musique — elles coexistent sans se synchroniser",
      "La fusion totale du mouvement avec les paroles de la chanson",
      "L'obligation de danser sur un rythme classique de 4/4",
      "Le refus de toute forme de répétition dans la chorégraphie",
    ],
  },

  // ─── Canon et unisson (section 4) ─────────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 4,
    question: "Qu'est-ce qu'un canon en composition chorégraphique ?",
    bonneReponse: "Plusieurs danseurs réalisent la même phrase à des moments différents, avec un décalage précis",
    choix: [
      "Plusieurs danseurs réalisent la même phrase à des moments différents, avec un décalage précis",
      "Tous les danseurs réalisent exactement le même mouvement au même moment",
      "Un danseur improvise pendant que les autres restent immobiles",
      "Une phrase chorégraphique répétée identiquement sans variation de tempo",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-moderne',
    sectionIndex: 4,
    question: "Quelle œuvre de 1982 est citée comme référence incontournable du canon en danse ?",
    bonneReponse: "Fase d'Anne Teresa De Keersmaeker et Steve Reich",
    choix: [
      "Fase d'Anne Teresa De Keersmaeker et Steve Reich",
      "Café Müller de Pina Bausch",
      "Appalachian Spring de Martha Graham",
      "Rainforest de Merce Cunningham et John Cage",
    ],
  },
]
