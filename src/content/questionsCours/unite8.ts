import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite8: QuestionQCMCours[] = [
  // ─── intro-pole-dance ─────────────────────────────────────────────────────

  // La pole dance — une discipline plurielle (section 0)
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 0,
    question: "Quels sont les quatre grands styles de pole dance ?",
    bonneReponse: "Pole sport, pole art, exotic et pole theatre",
    choix: [
      "Pole sport, pole art, exotic et pole theatre",
      "Pole classique, pole moderne, pole contemporain et pole jazz",
      "Pole débutant, pole intermédiaire, pole avancé et pole expert",
      "Pole fitness, pole acrobatique, pole burlesque et pole cabaret",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 0,
    question: "Quelle est la différence entre une barre statique et une barre rotative ?",
    bonneReponse: "La barre statique ne tourne pas — les spins utilisent uniquement l'élan du corps ; la barre rotative tourne avec le danseur",
    choix: [
      "La barre statique ne tourne pas — les spins utilisent uniquement l'élan du corps ; la barre rotative tourne avec le danseur",
      "La barre statique est fixée au plafond ; la barre rotative est fixée uniquement au sol",
      "La barre statique est réservée au pole sport ; la barre rotative à l'exotic",
      "Il n'y a aucune différence technique — c'est uniquement une question d'esthétique",
    ],
  },

  // Grip et prises (section 1)
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 1,
    question: "Sur quoi repose le grip en pole dance ?",
    bonneReponse: "La friction entre la peau et l'acier — sans prises mécaniques comme en escalade",
    choix: [
      "La friction entre la peau et l'acier — sans prises mécaniques comme en escalade",
      "Des gants spéciaux qui augmentent l'adhérence à la barre",
      "De la colle corporelle appliquée avant la séance",
      "Des crampons fixés aux chaussures pour s'ancrer à la base",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 1,
    question: "Pourquoi ne faut-il pas mettre de crème hydratante avant une séance de pole dance ?",
    bonneReponse: "La crème réduit la friction peau-acier et supprime le grip, rendant la pratique dangereuse",
    choix: [
      "La crème réduit la friction peau-acier et supprime le grip, rendant la pratique dangereuse",
      "La crème abîme l'acier de la barre sur le long terme",
      "La crème ralentit les mouvements en alourdissant les membres",
      "C'est uniquement une convention de cours, sans justification technique réelle",
    ],
  },

  // Montées, spins et figures statiques (section 2)
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 2,
    question: "Quelle règle fondamentale s'applique à l'apprentissage de la montée en pole dance ?",
    bonneReponse: "Toujours apprendre la descente avant la montée",
    choix: [
      "Toujours apprendre la descente avant la montée",
      "Toujours apprendre la montée avant la descente pour construire la confiance",
      "Pratiquer la montée et la descente simultanément dès le premier cours",
      "La descente s'apprend seule naturellement — seule la montée s'enseigne",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 2,
    question: "Que se passe-t-il physiquement quand on rapproche les jambes du corps pendant un spin ?",
    bonneReponse: "La rotation s'accélère — les jambes éloignées la ralentissent",
    choix: [
      "La rotation s'accélère — les jambes éloignées la ralentissent",
      "La rotation ralentit — les jambes éloignées l'accélèrent",
      "Les jambes proches augmentent le grip mais n'affectent pas la vitesse",
      "La rotation s'arrête car le corps perd son élan centrifuge",
    ],
  },

  // Inversions (section 3)
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 3,
    question: "Quelle est la règle absolue concernant les inversions pour les débutants ?",
    bonneReponse: "Jamais d'inversion sans supervision d'un professeur, toujours avec un tapis épais",
    choix: [
      "Jamais d'inversion sans supervision d'un professeur, toujours avec un tapis épais",
      "Les inversions peuvent être pratiquées seul dès le premier mois si on se sent à l'aise",
      "Les inversions sont interdites en studio — elles ne se pratiquent qu'à domicile",
      "Un échauffement de 10 minutes suffit à rendre les inversions sûres pour tous les niveaux",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 3,
    question: "Quel test de gainage minimal faut-il réussir avant de s'autoriser les inversions ?",
    bonneReponse: "Tenir un hollow body au sol pendant 10 secondes sans que le bas du dos décolle",
    choix: [
      "Tenir un hollow body au sol pendant 10 secondes sans que le bas du dos décolle",
      "Réaliser 20 pompes consécutives sans pause",
      "Tenir une planche (plank) pendant 1 minute",
      "Effectuer 10 montées complètes sur la barre sans assistance",
    ],
  },

  // Conditioning, floorwork et les quatre styles (section 4)
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 4,
    question: "Quelles zones sont prioritaires à renforcer dans le conditioning pole dance ?",
    bonneReponse: "Épaules, gainage abdominal, adducteurs (grip cuisses) et avant-bras",
    choix: [
      "Épaules, gainage abdominal, adducteurs (grip cuisses) et avant-bras",
      "Mollets, quadriceps, biceps et nuque",
      "Uniquement les bras et les épaules, car les jambes ne sont pas sollicitées",
      "Le cardio-vasculaire d'abord, la force musculaire n'étant pas prioritaire en pole",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-pole-dance',
    sectionIndex: 4,
    question: "Dans quel style de pole dance le floorwork est-il le cœur de la pratique ?",
    bonneReponse: "L'exotic pole",
    choix: [
      "L'exotic pole",
      "Le pole sport",
      "Le pole theatre",
      "Le pole art",
    ],
  },

  // ─── histoire-culturelle-pole ─────────────────────────────────────────────

  // Des origines multiples (section 0)
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 0,
    question: "Qu'est-ce que le mallakhamb, et quel est son lien avec le pole dance ?",
    bonneReponse: "Une discipline indienne du XIIe siècle sur poteau de bois, pratiquée par des lutteurs — une origine distincte et non liée à la sensualité",
    choix: [
      "Une discipline indienne du XIIe siècle sur poteau de bois, pratiquée par des lutteurs — une origine distincte et non liée à la sensualité",
      "La forme originale du pole dance sensuel, inventée en Inde au Moyen Âge",
      "Un style de pole dance contemporain issu des traditions indiennes classiques",
      "Le nom indien des premières compétitions mondiales de pole sport",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 0,
    question: "Ce qui rend le pole dance moderne unique par rapport à ses origines multiples, c'est :",
    bonneReponse: "La synthèse de ces héritages dans une pratique accessible, codifiée et mondialisée",
    choix: [
      "La synthèse de ces héritages dans une pratique accessible, codifiée et mondialisée",
      "Le fait d'avoir une origine unique et clairement documentée",
      "L'absence totale de lien avec les traditions acrobatiques antérieures",
      "Sa création récente, sans héritage culturel antérieur à revendiquer",
    ],
  },

  // L'Amérique du Nord — naissance du pole dance moderne (section 1)
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 1,
    question: "Qui est Fawnia Mondey et quel a été son rôle dans l'histoire du pole dance ?",
    bonneReponse: "Une danseuse et instructrice canadienne pionnière de l'enseignement du pole hors du contexte adulte, notamment via ses DVDs dans les années 1990",
    choix: [
      "Une danseuse et instructrice canadienne pionnière de l'enseignement du pole hors du contexte adulte, notamment via ses DVDs dans les années 1990",
      "La fondatrice de l'IPSF (International Pole Sports Federation) en 2006",
      "La chorégraphe qui a créé l'exotic pole en Russie dans les années 2010",
      "La première championne du monde de pole sport reconnue officiellement",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 1,
    question: "Dans quel pays et dans quel contexte le pole dance moderne est-il né dans les années 1980 ?",
    bonneReponse: "Dans des bars pour adultes canadiens (notamment en Ontario), où des danseuses ont développé des techniques sur une barre verticale",
    choix: [
      "Dans des bars pour adultes canadiens (notamment en Ontario), où des danseuses ont développé des techniques sur une barre verticale",
      "Dans des studios de danse classique américains qui cherchaient une alternative au ballet",
      "Dans des salles de gym australiennes comme cours de fitness alternatif",
      "Dans des cabarets parisiens inspirés du burlesque américain",
    ],
  },

  // La révolution sportive et artistique (section 2)
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 2,
    question: "En quelle année l'IPSF (International Pole Sports Federation) a-t-elle été créée ?",
    bonneReponse: "2006",
    choix: [
      "2006",
      "1995",
      "2016",
      "2000",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 2,
    question: "Quel débat politique divise la communauté pole dance depuis des années ?",
    bonneReponse: "Faut-il désexualiser le pole pour l'accepter socialement, au risque d'effacer ses origines et de stigmatiser l'exotic ?",
    choix: [
      "Faut-il désexualiser le pole pour l'accepter socialement, au risque d'effacer ses origines et de stigmatiser l'exotic ?",
      "Le pole sport doit-il intégrer les Jeux Olympiques ou rester une discipline indépendante ?",
      "Faut-il interdire les barres rotatives dans les compétitions officielles ?",
      "Le pole dance doit-il être réservé aux femmes ou ouvert à tous les genres ?",
    ],
  },

  // Celles qui ont créé (section 3)
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 3,
    question: "Qui sont les pionnières souvent effacées de l'histoire du pole dance moderne ?",
    bonneReponse: "Des femmes souvent travailleuses du sexe, noires, racisées et/ou LGBTQ+, qui ont développé les techniques fondamentales dans les années 1980–1990",
    choix: [
      "Des femmes souvent travailleuses du sexe, noires, racisées et/ou LGBTQ+, qui ont développé les techniques fondamentales dans les années 1980–1990",
      "Des gymnastes professionnelles reconverties après leur carrière sportive",
      "Des instructrices de fitness australiennes formées en danse classique",
      "Des chorégraphes de clips vidéo américains qui ont popularisé le pole dans les médias",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-culturelle-pole',
    sectionIndex: 3,
    question: "Pourquoi Plumy insiste-t-il sur l'importance de connaître l'histoire des pionnières du pole dance ?",
    bonneReponse: "Pour pratiquer avec honnêteté et intégrité — leur dignification fait partie de la dignification de la discipline elle-même",
    choix: [
      "Pour pratiquer avec honnêteté et intégrité — leur dignification fait partie de la dignification de la discipline elle-même",
      "Parce que la loi oblige les instructeurs à citer leurs sources pédagogiques",
      "Uniquement pour les niveaux avancés qui se destinent à l'enseignement professionnel",
      "Pour pouvoir participer aux compétitions internationales qui exigent une culture générale",
    ],
  },
]
