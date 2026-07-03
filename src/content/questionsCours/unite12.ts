import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite12: QuestionQCMCours[] = [
  // ─── Origines et identité du tango argentin (section 0) ───────────────────
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 0,
    question: "Dans quel contexte social le tango argentin est-il né à la fin du XIXe siècle ?",
    bonneReponse: "Dans les conventillos (logements surpeuplés) de Buenos Aires, au sein d'une population d'immigrés européens et de descendants africains",
    choix: [
      "Dans les conventillos (logements surpeuplés) de Buenos Aires, au sein d'une population d'immigrés européens et de descendants africains",
      "Dans les salons bourgeois de Buenos Aires comme danse de société réservée aux classes aisées",
      "Dans les théâtres de Paris où des artistes argentins l'ont créé pour le public européen",
      "Dans les écoles militaires argentines comme exercice de discipline et de coordination",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 0,
    question: "Quel paradoxe géographique marque l'histoire du tango argentin ?",
    bonneReponse: "Le tango a d'abord été adopté à Paris avant d'être reconnu et légitimé en Argentine même",
    choix: [
      "Le tango a d'abord été adopté à Paris avant d'être reconnu et légitimé en Argentine même",
      "Le tango est né en Uruguay et importé en Argentine par des musiciens porteños",
      "Le tango argentin a été créé en Europe par des immigrants argentins nostalgiques de leur pays",
      "Le tango a été interdit en Argentine pendant 50 ans avant d'être finalement reconnu",
    ],
  },

  // ─── L'axe, l'abrazo et la connexion (section 1) ─────────────────────────
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 1,
    question: "Qu'est-ce que l'eje en tango argentin ?",
    bonneReponse: "L'axe vertical de chaque danseur, propre à lui-même et indépendant — il n'est pas partagé avec le partenaire",
    choix: [
      "L'axe vertical de chaque danseur, propre à lui-même et indépendant — il n'est pas partagé avec le partenaire",
      "L'axe central de la piste autour duquel tourne le couple pendant la danse",
      "La ligne de connexion entre les deux danseurs qui crée l'équilibre du couple",
      "Le centre de gravité commun au couple, maintenu par la tension de l'abrazo",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 1,
    question: "Comment fonctionne le guidage dans l'abrazo fermé (cerrado) en tango argentin ?",
    bonneReponse: "Par le souffle et la micro-tension du torse — les torses se touchent et le guidage passe par la cage thoracique, pas par les bras",
    choix: [
      "Par le souffle et la micro-tension du torse — les torses se touchent et le guidage passe par la cage thoracique, pas par les bras",
      "Par une poussée claire de la main droite sur le dos du partenaire",
      "Par le contact des cuisses qui indique la direction du prochain pas",
      "Par le regard — les yeux du guide indiquent la direction avant que le corps bouge",
    ],
  },

  // ─── La marche et les figures fondamentales (section 2) ──────────────────
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 2,
    question: "Qu'est-ce qui caractérise la caminada (marche) en tango argentin ?",
    bonneReponse: "Un transfert de poids complet à chaque pas avec le buste stable — ni balancement latéral ni relâchement du haut du corps",
    choix: [
      "Un transfert de poids complet à chaque pas avec le buste stable — ni balancement latéral ni relâchement du haut du corps",
      "Une marche avec les pieds croisés sur une ligne imaginaire, comme en danse heels",
      "Une marche rythmée avec un accent sur les temps forts de la musique uniquement",
      "Une marche lente et glissée sans transfert de poids prononcé pour préserver le contact",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 2,
    question: "Quelle est la clé technique de l'ocho en tango argentin ?",
    bonneReponse: "La dissociation entre le bassin et le buste — les hanches pivotent pendant que le haut du corps reste orienté vers le partenaire",
    choix: [
      "La dissociation entre le bassin et le buste — les hanches pivotent pendant que le haut du corps reste orienté vers le partenaire",
      "Un croisement des pieds en forme de 8 tracé sur le sol par les deux danseurs ensemble",
      "Un tour complet du couple autour d'un axe commun en maintenant l'abrazo",
      "Un transfert de poids alterné sur chaque pied en décrivant un cercle horizontal",
    ],
  },

  // ─── Figures avancées : gancho et boleo (section 3) ──────────────────────
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 3,
    question: "Quelle est la règle absolue pour le gancho en tango argentin ?",
    bonneReponse: "La jambe entre dans l'espace ouvert par le partenaire — elle ne se force jamais et ne percute jamais",
    choix: [
      "La jambe entre dans l'espace ouvert par le partenaire — elle ne se force jamais et ne percute jamais",
      "Le gancho doit toujours être annoncé verbalement avant d'être exécuté pour éviter les blessures",
      "La jambe doit atteindre la hauteur du genou du partenaire pour que le gancho soit valide",
      "Le gancho se pratique uniquement en abrazo ouvert pour donner plus d'espace à la figure",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 3,
    question: "Comment naît le boleo en tango argentin ?",
    bonneReponse: "D'un changement de direction impulsé par le guide — la jambe libre continue son élan pendant que le corps pivote",
    choix: [
      "D'un changement de direction impulsé par le guide — la jambe libre continue son élan pendant que le corps pivote",
      "D'une décision consciente du suiveur de lancer sa jambe en l'air sur un accent musical",
      "D'un accord préalable entre les deux danseurs qui planifient la figure ensemble",
      "D'un signal de la main du guide sur la cuisse du suiveur pour déclencher le mouvement",
    ],
  },

  // ─── La milonga : l'espace social du tango (section 4) ───────────────────
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 4,
    question: "Qu'est-ce qu'une tanda en milonga ?",
    bonneReponse: "Une série de 3 à 4 morceaux du même orchestre et du même style, pendant laquelle on danse avec le même partenaire",
    choix: [
      "Une série de 3 à 4 morceaux du même orchestre et du même style, pendant laquelle on danse avec le même partenaire",
      "Une session de milonga d'une heure divisée en deux parties égales par une pause",
      "Une compétition de tango où les couples sont jugés sur une série de figures imposées",
      "Le nom donné à l'invitation orale traditionnelle pour ouvrir une danse en milonga",
    ],
  },
  {
    type: 'cours',
    coursId: 'intro-tango-argentin',
    sectionIndex: 4,
    question: "Qu'est-ce que le cabeceo et pourquoi est-il essentiel dans la culture milonga ?",
    bonneReponse: "Une invitation par le regard (légère inclinaison de tête) — il permet d'inviter et de décliner sans humiliation publique",
    choix: [
      "Une invitation par le regard (légère inclinaison de tête) — il permet d'inviter et de décliner sans humiliation publique",
      "Un signal musical du DJ indiquant le début d'une nouvelle tanda",
      "Une révérence formelle exécutée en fin de tanda pour remercier le partenaire",
      "Un code vestimentaire strict que les danseurs respectent pour signaler leur niveau",
    ],
  },
]
