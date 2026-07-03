import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite10: QuestionQCMCours[] = [
  // ─── prevention-generale ─────────────────────────────────────────────────

  // Comprendre la blessure (section 0)
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 0,
    question: "Quelle est la cause principale des blessures en danse selon les études épidémiologiques ?",
    bonneReponse: "Le surmenage (overuse) — 80 % des blessures résultent d'une accumulation de micro-traumatismes, pas d'un accident isolé",
    choix: [
      "Le surmenage (overuse) — 80 % des blessures résultent d'une accumulation de micro-traumatismes, pas d'un accident isolé",
      "Les chutes accidentelles lors de portés ou de sauts mal exécutés",
      "Un manque de flexibilité générale dans les membres inférieurs",
      "L'absence de chaussures de danse adaptées à la discipline pratiquée",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 0,
    question: "Quels sont les trois critères d'un signal d'alarme qui doit pousser à consulter un médecin du sport ?",
    bonneReponse: "Douleur localisée, persistant plus de 72 h, et qui modifie la façon de danser",
    choix: [
      "Douleur localisée, persistant plus de 72 h, et qui modifie la façon de danser",
      "Douleur diffuse, présente uniquement pendant l'effort, disparaissant au repos immédiat",
      "Toute douleur ressentie pendant un cours, quelle qu'en soit l'intensité",
      "Fatigue musculaire générale accompagnée de courbatures les jours suivants",
    ],
  },

  // Reconnaître et gérer la douleur (section 1)
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 1,
    question: "Que recommande le protocole de gestion de la douleur au stade 2 ?",
    bonneReponse: "Consulter maintenant — le stade 2 (douleur qui modifie le mouvement) nécessite une évaluation médicale sans délai",
    choix: [
      "Consulter maintenant — le stade 2 (douleur qui modifie le mouvement) nécessite une évaluation médicale sans délai",
      "Appliquer de la glace 20 minutes puis reprendre l'entraînement normalement",
      "Réduire l'intensité de 50 % pendant une semaine avant de reprendre",
      "Attendre 5 à 7 jours pour voir si la douleur disparaît d'elle-même",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 1,
    question: "De combien la durée de guérison peut-elle être réduite en consultant tôt après une blessure ?",
    bonneReponse: "De 60 à 80 % — une prise en charge précoce évite que la blessure chronique s'installe",
    choix: [
      "De 60 à 80 % — une prise en charge précoce évite que la blessure chronique s'installe",
      "De 10 à 20 % — l'essentiel de la guérison dépend du repos, pas de la rapidité de consultation",
      "Il n'y a aucune différence : le corps guérit au même rythme quelle que soit la date de consultation",
      "De 30 à 40 % uniquement pour les blessures articulaires, pas musculaires",
    ],
  },

  // Échauffement et récupération (section 2)
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 2,
    question: "De combien un échauffement bien conduit réduit-il le risque de blessure ?",
    bonneReponse: "De 50 % environ — c'est l'intervention préventive la plus efficace documentée",
    choix: [
      "De 50 % environ — c'est l'intervention préventive la plus efficace documentée",
      "De 10 à 15 % — son effet est limité et souvent surestimé",
      "De 100 % — un bon échauffement rend toute blessure impossible",
      "L'effet n'est pas quantifiable car il dépend entièrement de la discipline pratiquée",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 2,
    question: "Pourquoi les étirements statiques prolongés avant l'effort sont-ils contre-productifs ?",
    bonneReponse: "Ils inhibent temporairement la production de force et réduisent la réactivité neuromusculaire",
    choix: [
      "Ils inhibent temporairement la production de force et réduisent la réactivité neuromusculaire",
      "Ils augmentent la température corporelle trop rapidement et provoquent des crampes",
      "Ils allongent les tendons de façon permanente et déstabilisent les articulations",
      "C'est uniquement une convention de cours, sans justification physiologique réelle",
    ],
  },

  // Renforcement et proprioception (section 3)
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 3,
    question: "Pourquoi l'hypermobilité sans force musculaire associée est-elle un facteur de risque ?",
    bonneReponse: "L'amplitude non contrôlée par la force expose les structures passives (ligaments, capsules) à des contraintes excessives",
    choix: [
      "L'amplitude non contrôlée par la force expose les structures passives (ligaments, capsules) à des contraintes excessives",
      "L'hypermobilité augmente le risque de crampes musculaires lors des efforts intenses",
      "Les muscles hypermobiles consomment plus d'oxygène et fatiguent plus vite",
      "L'hypermobilité n'est un risque que chez les personnes de plus de 30 ans",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 3,
    question: "Qu'est-ce qu'un exercice excentrique et pourquoi est-il prioritaire en prévention ?",
    bonneReponse: "Un exercice où le muscle se contracte en s'allongeant — il renforce la capacité à contrôler la descente, zone la plus exposée aux blessures",
    choix: [
      "Un exercice où le muscle se contracte en s'allongeant — il renforce la capacité à contrôler la descente, zone la plus exposée aux blessures",
      "Un exercice effectué de façon asymétrique pour corriger les déséquilibres musculaires",
      "Un exercice cardio à faible intensité destiné à la récupération active après l'effort",
      "Un exercice sur le sol qui travaille les abdominaux profonds sans impact articulaire",
    ],
  },

  // Nutrition, sommeil et santé globale (section 4)
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 4,
    question: "Qu'est-ce que le RED-S et pourquoi concerne-t-il particulièrement les danseurs ?",
    bonneReponse: "Le Relative Energy Deficiency in Sport — un déficit énergétique chronique qui dégrade les os, hormones et système immunitaire, fréquent en danse où la minceur est valorisée",
    choix: [
      "Le Relative Energy Deficiency in Sport — un déficit énergétique chronique qui dégrade les os, hormones et système immunitaire, fréquent en danse où la minceur est valorisée",
      "Un syndrome de fatigue aiguë causé par la déshydratation pendant les spectacles de longue durée",
      "Une blessure typique des danseurs de compétition due à la répétition des sauts",
      "Un trouble de la coordination qui apparaît après plusieurs années de danse intensive",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-generale',
    sectionIndex: 4,
    question: "Quelle durée de sommeil est recommandée pour les danseurs en période d'entraînement intense ?",
    bonneReponse: "8 à 9 heures — le sommeil est la première fenêtre de récupération tissulaire",
    choix: [
      "8 à 9 heures — le sommeil est la première fenêtre de récupération tissulaire",
      "6 heures suffisent si la qualité du sommeil est bonne",
      "10 à 12 heures pour compenser les efforts physiques intenses",
      "La durée n'a pas d'importance — seule la régularité des horaires compte",
    ],
  },

  // ─── prevention-par-discipline ────────────────────────────────────────────

  // Classique et contemporain (section 0)
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 0,
    question: "Quelle blessure résulte typiquement d'un turn-out compensé par le genou ou la cheville plutôt que par la hanche ?",
    bonneReponse: "Des contraintes en rotation sur le genou et des douleurs au niveau du compartiment médial du genou",
    choix: [
      "Des contraintes en rotation sur le genou et des douleurs au niveau du compartiment médial du genou",
      "Un raccourcissement des tendons du mollet causant des douleurs au tendon d'Achille",
      "Une hypertrophie des quadriceps créant un déséquilibre avec les ischio-jambiers",
      "Une fatigue générale des pieds sans localisation articulaire précise",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 0,
    question: "Combien d'années de danse classique minimum sont recommandées avant d'autoriser le travail en pointes ?",
    bonneReponse: "3 ans minimum, avec un test osseux et musculaire validé par un professionnel de santé",
    choix: [
      "3 ans minimum, avec un test osseux et musculaire validé par un professionnel de santé",
      "6 mois si les pieds sont naturellement forts et la flexibilité suffisante",
      "1 an, car les os du pied sont suffisamment formés dès l'adolescence",
      "Il n'y a pas de critère temporel — seule la décision du professeur compte",
    ],
  },

  // Contemporain, moderne et release (section 1)
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 1,
    question: "Pourquoi la technique release présente-t-elle un risque spécifique pour les articulations ?",
    bonneReponse: "La release travaille sur un tonus minimal — elle ne signifie pas absence de tonus, mais un tonus insuffisant peut exposer les articulations",
    choix: [
      "La release travaille sur un tonus minimal — elle ne signifie pas absence de tonus, mais un tonus insuffisant peut exposer les articulations",
      "La release interdit tout renforcement musculaire et fragilise les tendons sur le long terme",
      "Les planchers souples utilisés en release augmentent le risque de chutes",
      "La release ne présente aucun risque spécifique par rapport aux autres techniques",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 1,
    question: "Pourquoi apprend-on les roulades avant d'aborder les chutes directes en contemporain ?",
    bonneReponse: "La roulade distribue l'impact sur toute la surface du dos, réduisant les chocs ponctuels sur les genoux, hanches et coudes",
    choix: [
      "La roulade distribue l'impact sur toute la surface du dos, réduisant les chocs ponctuels sur les genoux, hanches et coudes",
      "La roulade est plus esthétique et appréciée des jurys de compétition",
      "Les chutes directes sont interdites dans les studios pour des raisons d'assurance",
      "La roulade renforce les vertèbres cervicales avant d'aborder des mouvements plus brusques",
    ],
  },

  // Heels et jazz (section 2)
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 2,
    question: "Pourquoi les étirements de mollet sont-ils prioritaires après une séance de danse heels ?",
    bonneReponse: "La biomécanique en talons raccourcit fonctionnellement le mollet — ne pas étirer crée une rétraction progressive qui augmente le risque de tendinopathie",
    choix: [
      "La biomécanique en talons raccourcit fonctionnellement le mollet — ne pas étirer crée une rétraction progressive qui augmente le risque de tendinopathie",
      "Les mollets ne sont pas sollicités en heels et ont besoin d'activation par les étirements",
      "Les étirements de mollet améliorent l'équilibre sur les talons pour la séance suivante",
      "C'est une convention de cours sans base anatomique documentée",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 2,
    question: "Quelle blessure du pied et de la cheville est particulièrement fréquente en jazz en raison des sauts répétés ?",
    bonneReponse: "Les tendinopathies du tendon d'Achille et les syndromes de stress osseux du pied (fractures de fatigue)",
    choix: [
      "Les tendinopathies du tendon d'Achille et les syndromes de stress osseux du pied (fractures de fatigue)",
      "Les luxations de la cheville dues aux rotations en position instable",
      "Les bursites de la hanche causées par le travail en dehors",
      "Les contractures des ischio-jambiers dues à l'extension répétée de la jambe",
    ],
  },

  // Pole dance (section 3)
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 3,
    question: "Quelle zone du corps est la plus blessée en pole dance selon les études ?",
    bonneReponse: "L'épaule — elle représente environ 54,5 % des blessures en pole dance",
    choix: [
      "L'épaule — elle représente environ 54,5 % des blessures en pole dance",
      "Le poignet — les prises répétées sur la barre créent des microtraumatismes cumulatifs",
      "Le genou — les compressions lors des spins exposent le ménisque",
      "La nuque — les inversions fréquentes créent des tensions cervicales chroniques",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 3,
    question: "Pourquoi faut-il éviter le hang passif en pole dance ?",
    bonneReponse: "Laisser le poids du corps tirer passivement sur l'épaule déstabilise la coiffe des rotateurs et favorise les impingements",
    choix: [
      "Laisser le poids du corps tirer passivement sur l'épaule déstabilise la coiffe des rotateurs et favorise les impingements",
      "Le hang passif consume trop d'énergie et épuise les réserves musculaires rapidement",
      "La barre peut se désolidariser si elle supporte un poids statique prolongé",
      "Le hang passif est interdit dans les studios pour des raisons d'assurance",
    ],
  },

  // Burlesque, tango et prévention transversale (section 4)
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 4,
    question: "Qu'est-ce que la règle d'Ottawa et à quelle situation s'applique-t-elle en danse ?",
    bonneReponse: "Un protocole clinique d'indication de radiographie après une entorse de cheville — si certains critères sont présents, une fracture doit être exclue",
    choix: [
      "Un protocole clinique d'indication de radiographie après une entorse de cheville — si certains critères sont présents, une fracture doit être exclue",
      "Un règlement international encadrant les compétitions de danse en matière de sécurité",
      "Un protocole de retour à l'entraînement après une blessure musculaire grave",
      "Une norme de sécurité pour les équipements de pole dance homologués en compétition",
    ],
  },
  {
    type: 'cours',
    coursId: 'prevention-par-discipline',
    sectionIndex: 4,
    question: "Quel type d'exercice est recommandé pour traiter une tendinopathie en phase subaiguë ?",
    bonneReponse: "Le renforcement excentrique — il stimule la régénération du tendon sans le surcharger",
    choix: [
      "Le renforcement excentrique — il stimule la régénération du tendon sans le surcharger",
      "Le repos complet pendant 6 semaines sans aucun travail musculaire",
      "Des étirements statiques prolongés (30 minutes par jour) pour assouplir le tendon",
      "La chaleur continue (bains chauds) pour augmenter la vascularisation du tendon",
    ],
  },
]
