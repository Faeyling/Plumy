import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite5: QuestionQCMCours[] = [
  // ─── intro-jazz ───────────────────────────────────────────────────────────

  // Qu'est-ce que la danse jazz ? (section 0)
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 0,
    question: "Parmi ces caractéristiques, laquelle définit la danse jazz tous styles confondus ?",
    bonneReponse: "La syncopation : l'énergie vit souvent entre les temps, pas dessus",
    choix: [
      "La syncopation : l'énergie vit souvent entre les temps, pas dessus",
      "L'unisson strict : tous les danseurs suivent la même technique codifiée",
      "Le turn-out des pieds obligatoire comme en danse classique",
      "L'absence d'individualité au profit d'un style collectif uniforme",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 0,
    question: "Quelles sont les racines de la danse jazz qu'il faut nommer clairement ?",
    bonneReponse: "Les danses africaines et afro-américaines, la musique jazz (blues, ragtime, swing) et les danses sociales comme le Lindy Hop",
    choix: [
      "Les danses africaines et afro-américaines, la musique jazz (blues, ragtime, swing) et les danses sociales comme le Lindy Hop",
      "La danse classique européenne revisitée par les compagnies américaines",
      "Le flamenco espagnol et la danse baroque française du XVIIe siècle",
      "La danse indienne classique et les traditions orientales importées aux États-Unis",
    ],
  },

  // Le groove et la musicalité jazz (section 1)
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 1,
    question: "En combien de temps compte-t-on en danse jazz ?",
    bonneReponse: "En 8 temps (deux mesures de 4)",
    choix: [
      "En 8 temps (deux mesures de 4)",
      "En 4 temps comme en danse classique",
      "En 6 temps comme la valse",
      "En 16 temps pour correspondre à la phrase musicale jazz",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 1,
    question: "Qu'est-ce que danser dans le « pocket » en jazz ?",
    bonneReponse: "Tomber légèrement en arrière du temps plutôt que de le frapper — s'installer dans le creux du rythme",
    choix: [
      "Tomber légèrement en arrière du temps plutôt que de le frapper — s'installer dans le creux du rythme",
      "Anticiper chaque temps d'une fraction de seconde pour paraître plus vif",
      "Danser exactement sur le temps, sans aucun décalage",
      "Improviser librement sans relation au tempo de la musique",
    ],
  },

  // Les pas de base (section 2)
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 2,
    question: "En quoi consiste le ball change en danse jazz ?",
    bonneReponse: "Un transfert de poids rapide sur deux temps : demi-pointe puis plein pied",
    choix: [
      "Un transfert de poids rapide sur deux temps : demi-pointe puis plein pied",
      "Un saut sur deux pieds avec assemblé en l'air",
      "Un tour d'un demi-cercle sur la demi-pointe d'un seul pied",
      "Un pas glissé latéral avec fermeture des pieds joints",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 2,
    question: "Combien de pas compose le jazz square, et quelle figure dessinent-ils dans l'espace ?",
    bonneReponse: "Quatre pas qui dessinent un carré",
    choix: [
      "Quatre pas qui dessinent un carré",
      "Trois pas qui dessinent un triangle",
      "Huit pas qui dessinent un cercle",
      "Deux pas qui dessinent une ligne droite",
    ],
  },

  // Les isolations et le travail par niveaux (section 3)
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 3,
    question: "Qu'est-ce qu'un chest pop en jazz ?",
    bonneReponse: "La cage thoracique propulsée vers l'avant sur un accent musical",
    choix: [
      "La cage thoracique propulsée vers l'avant sur un accent musical",
      "Un saut décollant depuis la poitrine vers l'avant",
      "Un mouvement d'ouverture des bras en croix sur le temps fort",
      "Une contraction du sternum vers l'intérieur en retenant la respiration",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 3,
    question: "Pourquoi beaucoup de styles jazz maintiennent-ils les genoux légèrement fléchis en permanence ?",
    bonneReponse: "Pour créer un ressort constant — une disponibilité permanente au mouvement",
    choix: [
      "Pour créer un ressort constant — une disponibilité permanente au mouvement",
      "Pour protéger les articulations des chocs à l'atterrissage des sauts",
      "Parce que les planchers de studio sont souvent abîmés et glissants",
      "Pour paraître plus petit et accentuer les sauts par contraste",
    ],
  },

  // Tours et sauts (section 4)
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 4,
    question: "Quelle est une différence clé entre les tours en jazz et les tours en danse classique ?",
    bonneReponse: "Les tours jazz se font souvent en position parallèle (pieds non en dehors) avec un arm styling expressif",
    choix: [
      "Les tours jazz se font souvent en position parallèle (pieds non en dehors) avec un arm styling expressif",
      "Les tours jazz sont toujours plus rapides et en position de pointe",
      "Les tours jazz ne nécessitent pas de spotting contrairement au classique",
      "Les tours jazz se terminent obligatoirement par une chute au sol",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-jazz',
    sectionIndex: 4,
    question: "Qu'est-ce qu'un stag leap en jazz ?",
    bonneReponse: "Un saut avec la jambe avant tendue et la jambe arrière pliée, créant une asymétrie",
    choix: [
      "Un saut avec la jambe avant tendue et la jambe arrière pliée, créant une asymétrie",
      "Un saut avec les deux jambes écartées en grand écart horizontal",
      "Un saut groupé où les deux genoux remontent vers la poitrine",
      "Un saut effectué depuis un pied, les deux jambes jointes en l'air",
    ],
  },

  // ─── sous-styles-jazz ─────────────────────────────────────────────────────

  // Pourquoi parler de sous-styles ? (section 0)
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 0,
    question: "Qu'est-ce qui unit tous les sous-styles de danse jazz sans exception ?",
    bonneReponse: "L'héritage africain et afro-américain, la musicalité, la syncopation et l'individualité dans l'expression",
    choix: [
      "L'héritage africain et afro-américain, la musicalité, la syncopation et l'individualité dans l'expression",
      "Une technique unique codifiée au début du XXe siècle aux États-Unis",
      "L'utilisation exclusive de la musique jazz classique des années 1930–1950",
      "La pratique en studio, avec un plancher de bois et un miroir",
    ],
  },
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 0,
    question: "Qu'est-ce qui différencie les sous-styles jazz les uns des autres ?",
    bonneReponse: "L'esthétique, la musique, la technique prioritaire et le contexte d'origine",
    choix: [
      "L'esthétique, la musique, la technique prioritaire et le contexte d'origine",
      "Uniquement la vitesse d'exécution et le nombre de sauts",
      "Le niveau des danseurs : débutant, intermédiaire ou avancé",
      "La nationalité des chorégraphes fondateurs de chaque style",
    ],
  },

  // Jazz classique et Broadway (section 1)
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 1,
    question: "Quel chorégraphe a systématisé les isolations et créé le langage du « theatrical jazz » ?",
    bonneReponse: "Jack Cole",
    choix: [
      "Jack Cole",
      "Bob Fosse",
      "Jerome Robbins",
      "Alvin Ailey",
    ],
  },
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 1,
    question: "Quelle est la priorité technique du Broadway jazz par rapport au jazz classique ?",
    bonneReponse: "La projection extrême — chaque mouvement doit être vu du fond de salle, au service de la narration",
    choix: [
      "La projection extrême — chaque mouvement doit être vu du fond de salle, au service de la narration",
      "La subtilité intérieure — le mouvement est retenu et sophistiqué",
      "La musicalité pure — le corps répond uniquement aux accents jazz",
      "La fluidité — les transitions entre pas doivent être invisibles",
    ],
  },

  // Style Fosse et Modern jazz (section 2)
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 2,
    question: "Quelles sont les signatures visuelles immédiatement reconnaissables du style Fosse ?",
    bonneReponse: "Coudes relevés, poignets cassés, dos légèrement voûté, regard en biais",
    choix: [
      "Coudes relevés, poignets cassés, dos légèrement voûté, regard en biais",
      "Bras tendus à l'horizontale, tête droite, regard frontal au public",
      "Sourire permanent, mouvements amples, jambes très hautes",
      "Pieds en dehors à 180°, corps élancé, sauts spectaculaires",
    ],
  },
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 2,
    question: "Quelle maxime résume la philosophie pédagogique de Luigi dans le modern jazz ?",
    bonneReponse: "Never Stop Moving — la continuité et la fluidité du mouvement",
    choix: [
      "Never Stop Moving — la continuité et la fluidité du mouvement",
      "Feel the Rhythm — danser uniquement sur des musiques de jazz live",
      "Less Is More — réduire chaque geste à son expression minimale",
      "Power Through — utiliser la force maximale dans chaque mouvement",
    ],
  },

  // Lyrical, Street jazz et Afro-jazz (section 3)
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 3,
    question: "Qu'est-ce qui distingue le street jazz du hip-hop pur ?",
    bonneReponse: "Le street jazz garde une structure de formation et une chorégraphie apprise ; le hip-hop est plus libre et cypher",
    choix: [
      "Le street jazz garde une structure de formation et une chorégraphie apprise ; le hip-hop est plus libre et cypher",
      "Le street jazz se pratique uniquement en plein air sur asphalte",
      "Le hip-hop utilise des mouvements lents ; le street jazz est toujours rapide",
      "Il n'y a aucune différence : les deux termes désignent la même pratique",
    ],
  },
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 3,
    question: "Quelle est la dimension politique de l'afro-jazz ?",
    bonneReponse: "Il nomme et célèbre les origines africaines du jazz, longtemps effacées ou appropriées",
    choix: [
      "Il nomme et célèbre les origines africaines du jazz, longtemps effacées ou appropriées",
      "Il revendique l'interdiction du jazz commercial dans les cours de danse",
      "Il promeut l'utilisation exclusive de percussions live dans les spectacles",
      "Il s'oppose à l'enseignement en studio au profit des espaces communautaires",
    ],
  },

  // Comment s'orienter dans la pratique jazz (section 4)
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 4,
    question: "Quelle est la première étape recommandée avant de se spécialiser dans un sous-style jazz ?",
    bonneReponse: "Construire le tronc commun : groove, ball change, jazz square, chassé, isolations, tours et sauts fondamentaux",
    choix: [
      "Construire le tronc commun : groove, ball change, jazz square, chassé, isolations, tours et sauts fondamentaux",
      "Choisir immédiatement le sous-style qu'on préfère et n'en pratiquer qu'un",
      "Visionner uniquement des spectacles professionnels avant de se mettre à danser",
      "Commencer par la danse classique pour acquérir les bases techniques",
    ],
  },
  {
    type: 'cours',
    coursId: 'sous-styles-jazz',
    sectionIndex: 4,
    question: "Selon les conseils de Plumy, comment s'orienter vers un sous-style jazz en particulier ?",
    bonneReponse: "Suivre ses goûts musicaux — la musique qui fait bouger naturellement indique le sous-style adapté",
    choix: [
      "Suivre ses goûts musicaux — la musique qui fait bouger naturellement indique le sous-style adapté",
      "Choisir le sous-style le plus difficile pour progresser plus vite",
      "Prendre l'avis d'un jury de professeurs spécialisés lors d'une audition",
      "Commencer par le sous-style le plus ancien et en maîtriser l'histoire",
    ],
  },
]
