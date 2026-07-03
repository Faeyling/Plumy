import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite11: QuestionQCMCours[] = [
  // ─── improvisation ────────────────────────────────────────────────────────

  // Qu'est-ce que l'improvisation en danse ? (section 0)
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 0,
    question: "Quel collectif new-yorkais des années 1960 a ouvert la voie à l'improvisation comme forme artistique à part entière ?",
    bonneReponse: "Le Judson Dance Theater — des artistes qui ont questionné ce qui peut être considéré comme de la danse",
    choix: [
      "Le Judson Dance Theater — des artistes qui ont questionné ce qui peut être considéré comme de la danse",
      "Le New York City Ballet — qui a intégré l'improvisation dans ses représentations classiques",
      "La compagnie Alvin Ailey — qui a développé l'improvisation dans le cadre de la danse africaine-américaine",
      "Le Martha Graham Dance Company — qui a créé les premières partitions d'improvisation codifiées",
    ],
  },
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 0,
    question: "Comment définir l'improvisation en danse ?",
    bonneReponse: "Composer le mouvement en temps réel, en réponse à des stimuli internes ou externes, sans résultat prédéterminé",
    choix: [
      "Composer le mouvement en temps réel, en réponse à des stimuli internes ou externes, sans résultat prédéterminé",
      "Danser sans musique pour développer son sens du rythme intérieur",
      "Répéter librement une chorégraphie apprise en variant les dynamiques à chaque fois",
      "Exécuter des mouvements aléatoires sans intention artistique ni conscience corporelle",
    ],
  },

  // L'état d'improvisation (section 1)
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 1,
    question: "Comment se définit l'état de disponibilité requis pour improviser ?",
    bonneReponse: "Ni passif (attendre qu'il se passe quelque chose) ni hyper-actif (forcer à tout prix) — une vigilance souple, prête à répondre",
    choix: [
      "Ni passif (attendre qu'il se passe quelque chose) ni hyper-actif (forcer à tout prix) — une vigilance souple, prête à répondre",
      "Un état de relaxation totale où le corps est détendu et le mental en veille",
      "Une tension maximale de tous les muscles pour réagir immédiatement à chaque stimulus",
      "Un état méditatif obtenu après 20 minutes de préparation mentale silencieuse",
    ],
  },
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 1,
    question: "Quel est le principal obstacle psychologique à l'improvisation en danse ?",
    bonneReponse: "La suspension du jugement — le filtre « est-ce que c'est bien ? » interrompt le flux avant même que le mouvement existe",
    choix: [
      "La suspension du jugement — le filtre « est-ce que c'est bien ? » interrompt le flux avant même que le mouvement existe",
      "Le manque de forme physique qui limite le répertoire de mouvements disponibles",
      "L'absence de formation en danse classique qui rend l'improvisation techniquement impossible",
      "La peur du silence musical qui bloque toute spontanéité corporelle",
    ],
  },

  // Scores et contraintes (section 2)
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 2,
    question: "Qu'est-ce qu'un score en improvisation dansée ?",
    bonneReponse: "Un cadre de règles, de consignes ou de contraintes qui organise l'espace de l'improvisation sans en fixer le résultat",
    choix: [
      "Un cadre de règles, de consignes ou de contraintes qui organise l'espace de l'improvisation sans en fixer le résultat",
      "Une partition musicale sur laquelle le danseur improvise librement",
      "Une chorégraphie entièrement notée qui laisse place à des variations mineures",
      "Un score de points attribué par un jury lors des compétitions d'improvisation",
    ],
  },
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 2,
    question: "Pourquoi une contrainte peut-elle libérer la créativité plutôt que la limiter ?",
    bonneReponse: "Elle réduit l'espace des choix possibles, ce qui évite la paralysie face au vide total et oblige à explorer une zone précise en profondeur",
    choix: [
      "Elle réduit l'espace des choix possibles, ce qui évite la paralysie face au vide total et oblige à explorer une zone précise en profondeur",
      "Elle donne une structure rassurante qui remplace la créativité quand on manque d'inspiration",
      "Les contraintes n'ont aucun effet libérateur — elles ne servent qu'à encadrer les débutants",
      "Elle permet d'évaluer objectivement la performance lors des examens de danse",
    ],
  },

  // Improvisation à deux (section 3)
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 3,
    question: "Quel est le piège principal dans l'improvisation à deux ?",
    bonneReponse: "Anticiper et décider avant d'avoir vraiment reçu ce que l'autre propose — on répond à ce qu'on imaginait, pas à ce qui s'est passé",
    choix: [
      "Anticiper et décider avant d'avoir vraiment reçu ce que l'autre propose — on répond à ce qu'on imaginait, pas à ce qui s'est passé",
      "Imiter trop fidèlement le partenaire sans apporter sa propre contribution",
      "Regarder le sol pour mieux sentir le sol plutôt que son partenaire",
      "Danser trop vite, ce qui empêche la communication non verbale de s'établir",
    ],
  },
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 3,
    question: "Parmi les niveaux de relation à l'autre en improvisation, qu'est-ce que l'indépendance active ?",
    bonneReponse: "Danser sa propre partition en étant pleinement conscient de la présence de l'autre — pas l'ignorer mais choisir de ne pas réagir directement",
    choix: [
      "Danser sa propre partition en étant pleinement conscient de la présence de l'autre — pas l'ignorer mais choisir de ne pas réagir directement",
      "Ne pas regarder son partenaire et danser dos à dos pour éviter toute influence",
      "Attendre que l'autre finisse sa phrase avant de commencer la sienne",
      "Un niveau réservé aux improvisateurs avancés qui n'ont plus besoin de partenaire",
    ],
  },

  // De l'improvisation à la composition (section 4)
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 4,
    question: "Quelles sont les étapes du processus qui mène de l'improvisation à la composition ?",
    bonneReponse: "Explorer → sélectionner → fixer → organiser → raffiner",
    choix: [
      "Explorer → sélectionner → fixer → organiser → raffiner",
      "Imaginer → noter → répéter → présenter → oublier",
      "Échauffer → improviser → filmer → analyser → recommencer",
      "Ressentir → partager → corriger → mémoriser → performer",
    ],
  },
  {
    type: 'cours',
    coursId: 'improvisation',
    sectionIndex: 4,
    question: "Qu'est-ce que la mémoire du corps en improvisation ?",
    bonneReponse: "La capacité du corps à retrouver des qualités, des sensations ou des chemins de mouvement sans passer par la verbalisation consciente",
    choix: [
      "La capacité du corps à retrouver des qualités, des sensations ou des chemins de mouvement sans passer par la verbalisation consciente",
      "La mémorisation des pas d'une chorégraphie après de nombreuses répétitions",
      "Un muscle memory uniquement applicable aux séquences techniques apprises",
      "La capacité à se souvenir de ses improvisations passées pour les reproduire exactement",
    ],
  },

  // ─── composition ──────────────────────────────────────────────────────────

  // Les points de départ (section 0)
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 0,
    question: "Combien de types de points de départ pour une composition chorégraphique sont répertoriés dans le cours ?",
    bonneReponse: "8 types : un mouvement, une image, une émotion, un texte, un son, un espace, un concept, une contrainte formelle",
    choix: [
      "8 types : un mouvement, une image, une émotion, un texte, un son, un espace, un concept, une contrainte formelle",
      "3 types : le corps, la musique et l'intention narrative",
      "5 types : musique, émotion, technique, espace et temps",
      "Il n'existe pas de classification — le point de départ est toujours personnel et non catégorisable",
    ],
  },
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 0,
    question: "Comment formuler une intention chorégraphique efficace selon les outils de composition ?",
    bonneReponse: "Compléter la phrase « je veux que le spectateur… » — formuler l'effet cherché sur l'autre, pas ce que soi on veut faire",
    choix: [
      "Compléter la phrase « je veux que le spectateur… » — formuler l'effet cherché sur l'autre, pas ce que soi on veut faire",
      "Décrire les pas utilisés dans un ordre précis pour pouvoir les enseigner",
      "Choisir d'abord la musique, puis adapter l'intention à ce qu'elle inspire",
      "Écrire une note de programme de 10 lignes expliquant la signification symbolique de l'œuvre",
    ],
  },

  // Le motif chorégraphique (section 1)
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 1,
    question: "Quelles sont les quatre qualités d'un bon motif chorégraphique ?",
    bonneReponse: "Mémorable, riche (porteur de développement), concis (court) et expressif (porteur de sens)",
    choix: [
      "Mémorable, riche (porteur de développement), concis (court) et expressif (porteur de sens)",
      "Long, complexe, technique et impressionnant pour marquer le public",
      "Simple, répétitif, symétrique et facilement transmissible à d'autres danseurs",
      "Improvisé, unique, non répétable et lié à une émotion du moment",
    ],
  },
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 1,
    question: "Qu'est-ce que le rétrograde d'un motif chorégraphique ?",
    bonneReponse: "La séquence lue à l'envers dans le temps — le dernier mouvement devient le premier",
    choix: [
      "La séquence lue à l'envers dans le temps — le dernier mouvement devient le premier",
      "Le motif exécuté du côté opposé (main gauche à la place de la main droite)",
      "Le motif ralenti de moitié pour en révéler les détails cachés",
      "Le motif transposé dans un espace différent (sol au lieu d'être debout)",
    ],
  },

  // Structure et dramaturgie (section 2)
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 2,
    question: "À quel moment de la pièce le climax dramaturgique est-il généralement placé ?",
    bonneReponse: "Aux deux tiers de la durée totale — pas à la moitié, pas à la fin",
    choix: [
      "Aux deux tiers de la durée totale — pas à la moitié, pas à la fin",
      "À la toute fin de la pièce pour laisser un maximum d'impact",
      "Au début, pour capturer l'attention du public immédiatement",
      "À la moitié exacte, pour créer une symétrie structurelle équilibrée",
    ],
  },
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 2,
    question: "Dans une structure ABA, pourquoi le retour à A n'est-il jamais identique à la première occurrence ?",
    bonneReponse: "Parce que le chemin parcouru (la section B) a changé la signification de A — le même matériau est chargé d'un sens nouveau",
    choix: [
      "Parce que le chemin parcouru (la section B) a changé la signification de A — le même matériau est chargé d'un sens nouveau",
      "Pour des raisons techniques : les danseurs sont fatigués et exécutent A différemment",
      "La musique change toujours entre la première et la dernière occurrence de A",
      "C'est une convention formelle sans signification dramaturgique particulière",
    ],
  },

  // Espace, dynamique et qualités Laban (section 3)
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 3,
    question: "Pourquoi la diagonale est-elle le trajet le plus fort dans un espace scénique ?",
    bonneReponse: "C'est le plus long trajet possible dans l'espace — il traverse la profondeur et la largeur, et donne une impression de puissance maximale",
    choix: [
      "C'est le plus long trajet possible dans l'espace — il traverse la profondeur et la largeur, et donne une impression de puissance maximale",
      "La diagonale est la seule trajectoire visible depuis tous les sièges de la salle",
      "Les juges de compétition attribuent plus de points aux trajets en diagonale",
      "La diagonale est conventionnellement réservée au personnage principal d'une pièce",
    ],
  },
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 3,
    question: "Quelles sont les quatre qualités du mouvement selon le système Laban ?",
    bonneReponse: "Poids (fort/léger), temps (soudain/soutenu), espace (direct/indirect), flux (lié/libre)",
    choix: [
      "Poids (fort/léger), temps (soudain/soutenu), espace (direct/indirect), flux (lié/libre)",
      "Vitesse, amplitude, tension et direction",
      "Force, souplesse, équilibre et coordination",
      "Niveau, rythme, dynamique et forme",
    ],
  },

  // Le processus de création (section 4)
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 4,
    question: "Quelle attitude adopter face à la première version d'une composition chorégraphique ?",
    bonneReponse: "Accepter qu'elle soit imparfaite — la première version existe pour être travaillée, pas pour être présentée",
    choix: [
      "Accepter qu'elle soit imparfaite — la première version existe pour être travaillée, pas pour être présentée",
      "La présenter immédiatement pour obtenir des retours avant d'investir plus de temps",
      "La garder secrète jusqu'à ce qu'elle soit parfaite pour éviter les critiques prématurées",
      "La comparer aux œuvres de référence pour évaluer si elle vaut la peine d'être poursuivie",
    ],
  },
  {
    type: 'cours',
    coursId: 'composition',
    sectionIndex: 4,
    question: "Quelles sont les six étapes du processus de création chorégraphique dans l'ordre ?",
    bonneReponse: "Recherche → structure → répétition → détail → prise de distance → présentation",
    choix: [
      "Recherche → structure → répétition → détail → prise de distance → présentation",
      "Idée → écriture → mémorisation → filage → générale → représentation",
      "Improvisation → sélection → notation → transmission → répétition → spectacle",
      "Intention → motif → développement → climax → résolution → fin",
    ],
  },

  // ─── notation-danse ───────────────────────────────────────────────────────

  // Le défi de transmettre le mouvement (section 0)
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 0,
    question: "Quelles sont les quatre caractéristiques du mouvement qui le rendent difficile à noter ?",
    bonneReponse: "Il est continu, multidimensionnel, qualitatif et relationnel — quatre dimensions que l'écriture linéaire capture mal",
    choix: [
      "Il est continu, multidimensionnel, qualitatif et relationnel — quatre dimensions que l'écriture linéaire capture mal",
      "Il est éphémère, coûteux à enseigner, subjectif et inaccessible au grand public",
      "Il nécessite un corps entraîné, de l'espace, du temps et de l'énergie pour exister",
      "Il dépend de la mémoire, de l'intention, de l'anatomie et de la culture",
    ],
  },
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 0,
    question: "Quel est le risque principal d'une transmission exclusivement orale des œuvres chorégraphiques ?",
    bonneReponse: "Elle dépend de la continuité humaine — si la chaîne de transmission se rompt, l'œuvre disparaît avec ses derniers interprètes",
    choix: [
      "Elle dépend de la continuité humaine — si la chaîne de transmission se rompt, l'œuvre disparaît avec ses derniers interprètes",
      "Elle est plus lente que la notation écrite et retarde la diffusion internationale des œuvres",
      "Elle introduit trop de variations et empêche toute standardisation de la technique",
      "Elle est coûteuse car elle nécessite la présence physique d'un maître pour chaque transmission",
    ],
  },

  // Les grands systèmes de notation (section 1)
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 1,
    question: "Qu'est-ce qui distingue la Labanotation des autres systèmes de notation du mouvement ?",
    bonneReponse: "Une partition verticale lue de bas en haut (comme le temps qui avance), créée par Rudolf Laban en 1928",
    choix: [
      "Une partition verticale lue de bas en haut (comme le temps qui avance), créée par Rudolf Laban en 1928",
      "Une partition horizontale qui lit le temps de gauche à droite, comme la notation musicale",
      "Un système de symboles uniquement pour les membres supérieurs, complété par la vidéo",
      "Une notation créée en 1955 par Benesh, adoptée par le Royal Ballet de Londres",
    ],
  },
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 1,
    question: "Quel système de notation utilise une portée de cinq lignes horizontales et est associé au monde du ballet académique ?",
    bonneReponse: "La notation Benesh (1955) — adoptée notamment par le Royal Ballet de Londres",
    choix: [
      "La notation Benesh (1955) — adoptée notamment par le Royal Ballet de Londres",
      "La Labanotation — qui utilise aussi cinq lignes mais en partition verticale",
      "L'Eshkol-Wachman — système mathématique de notation angulaire",
      "Le DanceWriting de Ann Hutchinson — notation syllabique américaine",
    ],
  },

  // La vidéo comme outil de transmission (section 2)
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 2,
    question: "Quelle est la limite fondamentale de la vidéo comme outil de transmission chorégraphique ?",
    bonneReponse: "Elle montre quoi (la forme extérieure) mais pas comment ni pourquoi — les qualités sensorielles et les intentions échappent à l'image",
    choix: [
      "Elle montre quoi (la forme extérieure) mais pas comment ni pourquoi — les qualités sensorielles et les intentions échappent à l'image",
      "La qualité d'image insuffisante dans les années 1980–1990 rendait les détails illisibles",
      "Les droits d'auteur interdisent d'utiliser des vidéos d'œuvres protégées pour l'enseignement",
      "La vidéo ne capte qu'un seul point de vue et rend impossible la lecture en trois dimensions",
    ],
  },
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 2,
    question: "Même avec une notation écrite complète, que faut-il toujours pour transmettre une œuvre chorégraphique ?",
    bonneReponse: "Un passeur humain — quelqu'un qui a pratiqué et peut transmettre les qualités que la notation ne capture pas",
    choix: [
      "Un passeur humain — quelqu'un qui a pratiqué et peut transmettre les qualités que la notation ne capture pas",
      "Un logiciel de motion capture pour convertir la notation en modèle 3D précis",
      "Une vidéo haute définition pour compléter les lacunes de la notation écrite",
      "Un jury de certification internationale pour valider la fidélité à l'œuvre originale",
    ],
  },

  // La notation comme théorie du mouvement (section 3)
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 3,
    question: "Quelle reconstitution emblématique illustre l'apport des archives de notation pour ressusciter des œuvres perdues ?",
    bonneReponse: "Le Sacre du printemps de Nijinski, reconstitué en 1987 par Millicent Hodson et Kenneth Archer à partir d'archives de notation et de témoignages",
    choix: [
      "Le Sacre du printemps de Nijinski, reconstitué en 1987 par Millicent Hodson et Kenneth Archer à partir d'archives de notation et de témoignages",
      "Giselle reconstituée en 1950 par Rudolf Laban à partir de ses propres partitions",
      "Swan Lake de Petipa, reconstitué en 1995 par le Royal Ballet grâce à la notation Benesh",
      "La Sylphide de Bournonville, reconstituée en 1960 grâce aux carnets personnels du chorégraphe",
    ],
  },
  {
    type: 'cours',
    coursId: 'notation-danse',
    sectionIndex: 3,
    question: "Pourquoi chaque système de notation est-il aussi une théorie du mouvement ?",
    bonneReponse: "Ce qu'un système choisit de noter révèle ce qu'il considère comme essentiel dans le mouvement — la notation est déjà une interprétation",
    choix: [
      "Ce qu'un système choisit de noter révèle ce qu'il considère comme essentiel dans le mouvement — la notation est déjà une interprétation",
      "Chaque système a été créé par un théoricien qui a d'abord écrit un traité philosophique sur la danse",
      "Les systèmes de notation sont accrédités par des institutions académiques qui en valident la théorie",
      "La notation exige de quantifier le mouvement, ce qui force son auteur à développer une théorie physique",
    ],
  },
]
