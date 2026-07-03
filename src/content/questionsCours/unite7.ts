import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite7: QuestionQCMCours[] = [
  // ─── Histoire du cabaret (section 0) ──────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 0,
    question: "En quelle année le Moulin Rouge a-t-il ouvert ses portes, et quels danseurs l'ont rendu célèbre ?",
    bonneReponse: "1889 — La Goulue et Valentin-le-Désossé",
    choix: [
      "1889 — La Goulue et Valentin-le-Désossé",
      "1881 — Mistinguett et Joséphine Baker",
      "1900 — Bob Fosse et Jerome Robbins",
      "1920 — les Ziegfeld Follies et les Bluebell Girls",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 0,
    question: "Pourquoi Joséphine Baker est-elle une figure majeure de l'histoire du cabaret ?",
    bonneReponse: "Elle a été une révolutionnaire artistique et politique, notamment aux Folies Bergère",
    choix: [
      "Elle a été une révolutionnaire artistique et politique, notamment aux Folies Bergère",
      "Elle a inventé le cancan et les principales figures techniques de la revue",
      "Elle a fondé le Moulin Rouge et défini le style de la meneuse de revue",
      "Elle a écrit les premières partitions musicales spécifiques à la revue française",
    ],
  },

  // ─── Le french cancan (section 1) ─────────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 1,
    question: "Quelle œuvre musicale d'Offenbach est devenue la musique définitive du cancan ?",
    bonneReponse: "Le galop infernal d'Orphée aux Enfers (1858)",
    choix: [
      "Le galop infernal d'Orphée aux Enfers (1858)",
      "La Belle Hélène (1864)",
      "La Vie parisienne (1866)",
      "Les Contes d'Hoffmann (1881)",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 1,
    question: "En quoi le fan kick est-il plus complexe que le high kick en cancan ?",
    bonneReponse: "La jambe décrit un arc avant → côté en restant haute, ce qui exige une mobilité de hanche dans plusieurs plans",
    choix: [
      "La jambe décrit un arc avant → côté en restant haute, ce qui exige une mobilité de hanche dans plusieurs plans",
      "Le fan kick se fait en saut, contrairement au high kick qui reste au sol",
      "Le fan kick exige les deux jambes simultanément alors que le high kick est unilatéral",
      "Il n'y a aucune différence — fan kick et high kick sont deux noms du même mouvement",
    ],
  },

  // ─── La chorus line (section 2) ────────────────────────────────────────────
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 2,
    question: "Quelle œuvre de Broadway de 1974 rend hommage à la chorus line tout en questionnant l'institution ?",
    bonneReponse: "A Chorus Line",
    choix: [
      "A Chorus Line",
      "Chicago",
      "42nd Street",
      "West Side Story",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 2,
    question: "Pourquoi ne doit-on pas regarder ses voisines pour se synchroniser en chorus line ?",
    bonneReponse: "Regarder ses voisines crée un délai supplémentaire — la synchronisation doit commencer dans les oreilles, pas dans les yeux",
    choix: [
      "Regarder ses voisines crée un délai supplémentaire — la synchronisation doit commencer dans les oreilles, pas dans les yeux",
      "Regarder ses voisines fait perdre l'expression du visage face au public",
      "C'est une règle de scène pour ne jamais tourner la tête vers les coulisses",
      "La vision frontale améliore l'équilibre lors des high kicks",
    ],
  },

  // ─── Port du costume et des accessoires (section 3) ───────────────────────
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 3,
    question: "Quelle qualité propre au boa de plumes faut-il anticiper et utiliser en danse ?",
    bonneReponse: "Il suit le corps avec un délai — ce délai crée une opportunité chorégraphique",
    choix: [
      "Il suit le corps avec un délai — ce délai crée une opportunité chorégraphique",
      "Il est très léger et ne génère aucune contrainte sur le mouvement",
      "Il tourne automatiquement dans le sens opposé au corps",
      "Il amplifie les sons de la respiration et doit être géré silencieusement",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 3,
    question: "Quelle est la règle d'or concernant le costume en cabaret ?",
    bonneReponse: "Répéter en costume complet dès que possible, car le costume modifie la danse",
    choix: [
      "Répéter en costume complet dès que possible, car le costume modifie la danse",
      "Ne mettre le costume qu'au moment du spectacle pour préserver sa fraîcheur",
      "Répéter toujours en vêtements de sport pour garder une liberté de mouvement maximale",
      "Apprendre d'abord la manipulation des accessoires, puis les intégrer à la danse",
    ],
  },

  // ─── Présentation scénique et rapport au public (section 4) ────────────────
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 4,
    question: "Quel est le rôle de la meneuse dans une revue de cabaret ?",
    bonneReponse: "Elle mène en énergie et en présence — la troupe se cale sur elle, pas l'inverse",
    choix: [
      "Elle mène en énergie et en présence — la troupe se cale sur elle, pas l'inverse",
      "Elle dirige les répétitions depuis la salle et non depuis la scène",
      "Elle est la danseuse qui effectue le plus grand nombre de figures techniques",
      "Elle est chargée de vérifier la synchronisation de toutes les danseuses en coulisses",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-cabaret',
    sectionIndex: 4,
    question: "Quelle distinction Plumy fait-il entre technique et présentation scénique en cabaret ?",
    bonneReponse: "La technique est nécessaire mais la présentation scénique fait le spectacle — sans projection, le public ne reçoit rien",
    choix: [
      "La technique est nécessaire mais la présentation scénique fait le spectacle — sans projection, le public ne reçoit rien",
      "La technique est plus importante : une fois maîtrisée, la présentation vient naturellement",
      "La présentation scénique remplace la technique pour les artistes expérimentés",
      "Les deux sont identiques — une bonne technique implique toujours une bonne présentation",
    ],
  },
]
