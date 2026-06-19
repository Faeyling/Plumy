import type { Terme } from '../schema'

export const termesUnite8: Terme[] = [

  // ─── Technique fondamentale pole ──────────────────────────────────────────

  {
    id: 'grip-pole',
    nom: 'Grip / Adhérence',
    alias: ['grip', 'prise', 'adhérence barre', 'friction pole'],
    disciplines: ['pole-dance'],
    categories: ['prises-grips', 'concepts'],
    definition: "Qualité et technique d'adhérence de la peau sur la barre en acier — fondement de toute pratique du pole dance, conditionnant la sécurité et la maîtrise de toutes les figures.",
    description: "Le grip est la compétence la plus fondamentale du pole — et la plus sous-enseignée.\n\n**Comment fonctionne le grip :**\nLe pole dance utilise principalement la friction peau-acier. Contrairement à l'escalade (qui utilise des prises), le pole repose sur le contact peau directe avec la barre.\n\n**Zones de grip :**\n- **Mains** : grip principal, plusieurs techniques selon la figure\n- **Avant-bras** : utilisé dans de nombreuses figures\n- **Creux du coude** : appui dans les figures de portée\n- **Cuisses intérieures** : grip essentiel pour les inversions et figures à l'envers\n- **Dos des genoux** : creux poplité, appui sécurisé\n- **Pieds et chevilles** : grip avancé\n\n**Facteurs qui affectent le grip :**\n- **Transpiration** : trop → glissant (utiliser du magnésium). Trop peu → aussi problématique\n- **Hydratation de la peau** : pas de crème hydratante les jours de pole\n- **Température de la barre** : barre froide → meilleur grip. Barre chaude → plus de glisse\n- **Type d'acier** : chrome (plus courant), laiton (meilleur grip), silicone (débutants)\n\n**Le magnésium (chalk) :**\nPoudre de carbonate de magnésium — absorbe la transpiration et améliore le grip. Standard dans la compétition de pole sport.",
    erreursCourantes: [
      "Mettre de la crème hydratante avant le cours — le grip sera nul.",
      "Compter uniquement sur le grip des mains — utiliser toutes les surfaces corporelles disponibles.",
    ],
    securite: {
      risques: ["Chute si le grip est insuffisant", "Marques et contusions pendant l'apprentissage (normales, diminuent avec le temps)"],
      precautions: ["Ne jamais lâcher une figure si le grip est insuffisant", "Tapis de réception au pied de la barre pour l'apprentissage"],
    },
    conseils: [
      "Au début, chaque séance de pole laissera des marques (redness, légères contusions). C'est normal — la peau s'habitue. Ne pas forcer au travers de la douleur vive, mais les marques normales ne sont pas dangereuses.",
    ],
    difficulteInterne: 1,
    termesLies: ['prise-basique', 'montee-pole', 'conditioning-pole'],
  },

  {
    id: 'prise-basique',
    nom: 'Prises fondamentales',
    alias: ['prise', 'grip mains', 'hand grip', 'ballet grip', 'cup grip'],
    disciplines: ['pole-dance'],
    categories: ['prises-grips'],
    definition: "Ensemble des positions de main sur la barre utilisées comme points d'appui — la prise classique (cup grip), la prise renversée (twisted grip), la prise brassée (bracket grip) — chacune adaptée à des figures spécifiques.",
    description: "Les mains sont le premier point de contact avec la barre. Apprendre les prises de base, c'est apprendre le vocabulaire fondamental.\n\n**Les prises principales :**\n\n**Cup grip (prise classique) :**\n- Pouce en bas, quatre doigts en haut\n- Main qui 'entoure' la barre comme une tasse (cup)\n- Prise de base pour la plupart des montées et figures debout\n\n**Baseball grip (prise de base) :**\n- Main qui serre la barre comme un bâton de baseball\n- Pouce qui entoure aussi\n- Prise la plus forte mais aussi la plus fatigante\n\n**Twisted grip (prise renversée) :**\n- La main tourne : doigts vers le bas, pouce en haut\n- Utilisée dans des figures avancées (twisted grip handspring)\n- Controverse sur son utilisation pour les débutants (risque épaule)\n\n**Bracket grip (prise en équerre) :**\n- Deux mains : une cup grip, une à l'envers\n- Crée une 'cage' autour de la barre\n- Stabilité maximale\n\n**Forearm grip (prise avant-bras) :**\n- L'avant-bras appuie contre la barre\n- Utilisé dans des figures comme le flag\n\n**Important :** Les prises ne sont pas des choix esthétiques — elles ont des fonctions spécifiques selon la figure. Utiliser la mauvaise prise pour une figure peut être dangereux.",
    erreursCourantes: [
      "Utiliser la même prise pour toutes les figures — chaque figure a sa prise recommandée.",
      "Crispation excessive des doigts (fatigue prématurée et perte de sensibilité).",
    ],
    conseils: [
      "Pratique les prises hors de la barre : assis, répète les transitions entre cup grip et baseball grip sur ta propre main. La mémoire musculaire se construit aussi en dehors de la barre.",
    ],
    difficulteInterne: 2,
    termesLies: ['grip-pole', 'montee-pole', 'figure-statique'],
  },

  {
    id: 'montee-pole',
    nom: 'Montée',
    alias: ['climb', 'pole climb', 'monter à la barre', 'ascension'],
    disciplines: ['pole-dance'],
    categories: ['montees-climbs'],
    definition: "Technique d'ascension le long de la barre verticale en utilisant la combinaison de prises de mains, de serrage des jambes et de la friction corporelle — compétence fondamentale qui conditionne l'accès aux figures en hauteur.",
    description: "La montée est la compétence qui ouvre l'espace vertical du pole. Sans elle, tout le pole se danse au sol.\n\n**La montée classique (basic climb) :**\n1. Main dominante haute sur la barre, l'autre en dessous\n2. Saut ou poussée des jambes pour élever le centre de gravité\n3. Les jambes enserrent la barre (cuisse interne + creux du genou) pour bloquer\n4. Les mains 'grimpent' l'une après l'autre\n5. Les jambes reprennent appui plus haut\n6. Répéter jusqu'à la hauteur souhaitée\n\n**La montée sans jambes (advanced climb) :**\nUtilise uniquement la force des bras et du gainage — technique de pole sport pour les figures de force.\n\n**Variations de montée :**\n- **Fireman climb** : jambes en position de pompier (une jambe pousse, l'autre tire)\n- **Twisted climb** : la montée avec une spirale du corps\n- **Straddle climb** : jambes en grand écart pendant la montée\n\n**La descente :**\nAussi importante que la montée. La descente contrôlée (en sliding en friction) exige de la peau nue et un bon grip. Ne jamais sauter depuis une hauteur non maîtrisée.",
    erreursCourantes: [
      "Gripper uniquement avec les mains (épuise rapidement) — utiliser les jambes comme levier principal.",
      "Descendre trop vite (risque de brûlure par friction et de chute).",
    ],
    securite: {
      risques: ["Chute si le grip des jambes est insuffisant", "Brûlure de friction à la descente rapide"],
      precautions: ["Tapis au sol", "Ne jamais grimper sans avoir appris à descendre d'abord", "Commencer à faible hauteur"],
    },
    conseils: [
      "Avant de monter, apprends à descendre. Mets-toi en position de montée à 50 cm du sol et pratique le slide de descente. Quand la descente est sûre, la montée devient moins anxiogène.",
    ],
    difficulteInterne: 2,
    termesLies: ['grip-pole', 'prise-basique', 'figure-statique'],
  },

  {
    id: 'spin-pole',
    nom: 'Spin / Tour sur barre',
    alias: ['spin', 'pole spin', 'tour pole', 'rotation pole'],
    disciplines: ['pole-dance'],
    categories: ['tours', 'figures-aeriennes'],
    definition: "Figure de rotation autour de la barre verticale — corps qui tourne en maintenant un point de contact avec la barre, créant différentes silhouettes selon la position des jambes, du buste et des bras.",
    description: "Les spins sont parmi les premières figures enseignées en pole — et ils restent spectaculaires à tous les niveaux.\n\n**Principe physique :**\nLe spin utilise l'élan (momentum) et/ou la rotation de la barre (pole rotatif) pour maintenir la rotation autour de la barre.\n\n**Barre statique vs barre rotative :**\n- **Statique** : la barre ne tourne pas. Le spin utilise uniquement l'élan du corps.\n- **Rotative** : la barre tourne sur elle-même. Le corps peut rester en position et tourner avec la barre. Plus accessible pour les débutants, différent techniquement.\n\n**Spins de base :**\n\n**Fireman spin :**\n- Position : corps vertical, jambes parallèles à la barre (en 'pompier')\n- Prise : deux mains, cup grip\n- Élan : tour d'impulsion du corps\n\n**Chair spin :**\n- Position : corps en angle, jambes en forme de chaise assise\n- Plus accessible et très courant dans les cours débutants\n\n**Attitude spin :**\n- Position : une jambe tendue devant, l'autre pliée derrière\n- Silhouette élégante, proche du ballet\n\n**Spirale du corps pendant le spin :**\nLa position du corps (jambes ouvertes, fermées, en straddle) change la vitesse de rotation — jambes proches du corps = plus vite, jambes éloignées = plus lent (conservation du moment cinétique).",
    erreursCourantes: [
      "Pas assez d'élan pour initier le spin (résultat : le spin s'arrête immédiatement).",
      "Corps rigide — laisser le corps 'flotter' dans la position pendant la rotation.",
    ],
    conseils: [
      "Avant le spin, visualise la position que tu veux avoir pendant la rotation. L'élan crée la rotation, mais c'est ta décision *avant* de partir qui crée la silhouette.",
    ],
    difficulteInterne: 2,
    termesLies: ['figure-statique', 'inversion-pole', 'grip-pole'],
  },

  {
    id: 'figure-statique',
    nom: 'Figure statique',
    alias: ['figure pole', 'pose pole', 'static hold', 'figure de force'],
    disciplines: ['pole-dance'],
    categories: ['figures-aeriennes', 'equilibres'],
    definition: "Position tenue sur la barre sans rotation — le corps est maintenu dans une forme précise par la combinaison du grip, du gainage et de la force musculaire, créant une silhouette statique expressive.",
    description: "Les figures statiques sont les 'poses' du pole — et certaines sont parmi les plus impressionnantes à réaliser.\n\n**Exemples de figures statiques du plus simple au plus complexe :**\n\n**Niveau débutant :**\n- **Pole hold** : accroché à la barre, jambes en l'air (simple défi de grip)\n- **Flag (drapeau)** : corps horizontal, perpendiculaire à la barre\n\n**Niveau intermédiaire :**\n- **Crucifix** : corps en croix, bras en extension latérale\n- **Brass monkey** : position à l'envers, jambes en V\n\n**Niveau avancé :**\n- **Ayesha** : corps horizontal, bras tendus vers le bas (force pure)\n- **Iron X** : corps en croix horizontale, bras en extension (exige une force exceptionnelle)\n\n**Ce qui crée une belle figure statique :**\n- La forme est claire et lisible\n- Le corps est engagé (pas d'affaissement)\n- Le regard est vivant\n- La transition vers la figure et hors de la figure est aussi chorégraphiée\n\n**Progression :**\nToutes les figures statiques exigent un conditioning spécifique. Ne jamais forcer une figure sans avoir préparé les muscles, les tendons et les articulations.",
    erreursCourantes: [
      "Figure techniquement tenue mais sans expression (corps 'éteint') — la figure doit être habitée.",
    ],
    conseils: [
      "Travaille chaque figure en deux temps : d'abord la tenir (force), puis l'habiter (expression). Une figure bien tenue mais vide est moins intéressante qu'une figure tenue avec intention.",
    ],
    difficulteInterne: 3,
    termesLies: ['inversion-pole', 'spin-pole', 'conditioning-pole'],
  },

  {
    id: 'inversion-pole',
    nom: 'Inversion',
    alias: ['inverser', 'tête en bas', 'inverted figure', 'upside down'],
    disciplines: ['pole-dance'],
    categories: ['inversions'],
    definition: "Figure dans laquelle le corps est à l'envers — tête vers le bas, bassin vers le haut — en maintenant le contact et la stabilité sur la barre. Catégorie de figures avancées exigeant un grip spécifique, une maîtrise du gainage et une progression méthodique.",
    description: "Les inversions sont parmi les figures les plus impressionnantes du pole — et les plus techniques à apprendre en sécurité.\n\n**Principes des inversions :**\n\n**Grip en inversion :**\nEn inversion, la gravité travaille différemment. Les jambes deviennent le grip primaire (cuisses, creux de genou). Les mains peuvent s'abaisser ou se repositionner.\n\n**Gainage en inversion :**\nUn gainage abdominal puissant est non-négociable en inversion — il maintient le corps en position et protège la colonne.\n\n**Inversions de base :**\n\n**Candy cane (tuck inversion) :**\n- Jambes ramenées contre la barre, bassin monte, tête descend\n- Première inversion apprise (souvent)\n\n**Outside leg hang :**\n- Une jambe enroule extérieurement la barre\n- L'autre jambe est libre\n- Corps à l'envers, dos vers la salle\n\n**Gemini :**\n- Inversion avec jambe tendue dehors, corps vers la salle\n\n**Progression obligatoire :**\n1. Gainage (pole holds, plank, core work hors barre)\n2. Inversions au sol (sans barre)\n3. Inversion assistée (partenaire ou basse hauteur)\n4. Inversion à hauteur normale avec supervision\n\n**Jamais d'inversion sans supervision pour les débutants.**",
    erreursCourantes: [
      "S'inverser sans avoir le gainage suffisant (risque de chute par perte de contrôle).",
      "Relâcher les jambes avant que les mains soient sécurisées en sortie.",
    ],
    securite: {
      risques: ["Chute sur la tête ou le cou si le grip et le gainage lâchent", "Blessure cervicale"],
      precautions: ["Tapis épais obligatoire", "Supervision par un professeur expérimenté", "Jamais d'inversion en solo avant la maîtrise complète"],
      referencesIds: ['mitrousias2017', 'polept_review'],
    },
    conseils: [
      "Avant toute inversion : 10 secondes de hollow body hold au sol. Si tu tiens 10 secondes sans que le bas du dos ne décolle, tu as le gainage minimal pour commencer à explorer l'inversion assistée.",
    ],
    difficulteInterne: 4,
    termesLies: ['figure-statique', 'conditioning-pole', 'ayesha'],
  },

  {
    id: 'ayesha',
    nom: 'Ayesha',
    alias: ['Ayesha', 'press handstand pole', 'figure Ayesha'],
    disciplines: ['pole-dance'],
    categories: ['figures-aeriennes', 'inversions'],
    definition: "Figure de pole dance dans laquelle le corps est maintenu horizontal, perpendiculaire à la barre, par la seule force des bras — considérée comme une figure signature et un test de force avancé.",
    description: "L'Ayesha est une des figures les plus reconnues et respectées dans la communauté pole — elle demande des années de conditioning.\n\n**Description :**\n- Le corps est en position horizontale\n- Les bras tiennent la barre, l'un au-dessus de l'autre (ou côte à côte selon la variante)\n- Les jambes sont tendues ou dans différentes positions (straddle, split, together)\n- Aucun appui des jambes sur la barre\n\n**Variantes :**\n- **Ayesha straddle** : jambes en grand écart\n- **Ayesha split** : jambes en split horizontal\n- **Ayesha straight** : jambes parallèles et tendues\n- **Flag** : position similaire mais avec les bras dans une prise différente\n\n**Ce qu'exige l'Ayesha :**\n- **Force des épaules et des bras** : immense\n- **Gainage** : le corps doit rester rigide comme une planche\n- **Souplesse des hanches** : pour les variantes en straddle ou split\n- **Conditioning sur 12–24 mois** minimum pour les débutants\n\n**Exercices préparatoires :**\n- Hollow body hold\n- Pike press (sur le sol)\n- Plank latéral\n- Superman hold\n- Pull-ups et dips",
    erreursCourantes: [
      "Tenter l'Ayesha sans conditioning — risque sérieux de blessure épaule.",
    ],
    conseils: [
      "L'Ayesha est un objectif à long terme. Construis les bases : si tu peux tenir un plank latéral 30 secondes de chaque côté, faire 5 dips complets et tenir un hollow body 20 secondes, tu es sur la bonne voie.",
    ],
    securite: {
      risques: ["Blessure grave à l'épaule (déchirure de la coiffe des rotateurs) si tentée sans conditioning suffisant", "Chute depuis la hauteur sans tapis approprié"],
      precautions: ["Minimum 12-24 mois de conditioning préalable", "Toujours sur matelas épais en apprentissage", "Supervision obligatoire par un professeur expérimenté"],
      referencesIds: ['lee2020', 'naczk_goluchowska2022', 'polept_review'],
    },
    difficulteInterne: 5,
    termesLies: ['figure-statique', 'inversion-pole', 'conditioning-pole'],
  },

  {
    id: 'floorwork-pole',
    nom: 'Floorwork pole',
    alias: ['travail au sol pole', 'floor pole', 'exotic floorwork'],
    disciplines: ['pole-dance'],
    categories: ['travail-au-sol'],
    definition: "Ensemble des mouvements effectués au sol ou en contact avec le sol dans la pratique du pole dance — transitions, glissades, roulades et positions de sol qui s'intègrent dans la chorégraphie autour de la barre.",
    description: "Le floorwork en pole dance a connu une révolution avec l'émergence de l'exotic pole — passant d'une transition entre les figures à un style à part entière.\n\n**Floorwork dans les différents styles :**\n\n**Pole sport :**\nLe floorwork est fonctionnel — transitions propres pour remonter sur la barre. Minimal.\n\n**Pole art :**\nLe floorwork est chorégraphié et expressif — il fait partie de la narration artistique.\n\n**Exotic pole :**\nLe floorwork *est* le cœur du style — descentes lentes et sensuelles, positions de sol élaborées, cat walks au sol, body rolls.\n\n**Techniques de floorwork pole :**\n- **Glissade avant** : se laisser glisser vers l'avant depuis la barre\n- **Roulade latérale** : rouleau sur le côté au pied de la barre\n- **Body roll au sol** : ondulation au sol (ventre ou dos)\n- **Kick from floor** : coup de pied depuis le sol\n- **Return to bar** : remontée vers la barre depuis le sol\n\n**Surface de sol :**\nLe floorwork pole nécessite une surface adaptée — ni trop glissante, ni trop rugueuse. Des genouillères peuvent être utilisées pendant l'apprentissage.",
    erreursCourantes: [
      "Floorwork sans transition — la descente et la remontée sont aussi chorégraphiées que le sol lui-même.",
    ],
    conseils: [
      "Commence par apprendre à descendre proprement depuis la barre jusqu'au sol. La beauté du floorwork pole commence dans la qualité de la transition debout → sol.",
    ],
    difficulteInterne: 3,
    termesLies: ['floorwork-heels', 'exotic-pole', 'montee-pole'],
  },

  {
    id: 'conditioning-pole',
    nom: 'Conditioning / Préparation physique',
    alias: ['conditioning', 'préparation physique pole', 'pole conditioning', 'renforcement pole'],
    disciplines: ['pole-dance'],
    categories: ['sante-prevention', 'concepts'],
    definition: "Travail de renforcement musculaire, de mobilité et de préparation physique spécifique au pole dance — conditioning des épaules, du gainage, des prises de mains et des jambes pour progresser en sécurité et prévenir les blessures.",
    description: "Le pole dance exige un niveau de force et de contrôle corporel important. Le conditioning est la base de toute progression.\n\n**Zones de conditioning prioritaires :**\n\n**Épaules :**\n- Rotateurs de l'épaule (notamment la coiffe des rotateurs)\n- Stabilisateurs de l'omoplate\n- Dépresseurs de l'épaule (anti-shrug)\n\n**Gainage :**\n- Abdominaux (hollow body, plank, pike)\n- Lombaires\n- Gainage latéral\n\n**Prises et mains :**\n- Force de serrage (grip strength)\n- Flexibilité des poignets\n- Avant-bras\n\n**Jambes :**\n- Adducteurs (grip intérieur cuisse)\n- Quadriceps\n- Fessiers\n\n**Programme de conditioning de base :**\n- Hollow body hold : 3 × 20 secondes\n- Plank : 3 × 30 secondes\n- Pike compression : 3 × 10\n- Shoulder press : 3 × 8\n- Grip strength (serrer une balle) : 3 × 30\n\n**Le conditioning n'est pas optionnel :**\nSauter le conditioning pour 'juste faire de la barre' augmente significativement le risque de blessure — notamment à l'épaule.",
    erreursCourantes: [
      "Sauter le conditioning pour aller directement aux figures — les blessures viennent souvent de là.",
    ],
    conseils: [
      "Dédier 15 minutes de conditioning à chaque séance *avant* de monter sur la barre. Ce n'est pas du temps perdu — c'est ce qui permettra de danser encore dans 10 ans.",
    ],
    difficulteInterne: 2,
    securite: {
      risques: ["Blessure épaule (impingement, déchirure partielle de la coiffe) si conditioning insuffisant"],
      precautions: ["Jamais de twisted grip avant 6 mois de pratique et de conditioning épaule"],
      referencesIds: ['lee2020', 'naczk2020'],
    },
    termesLies: ['grip-pole', 'inversion-pole', 'figure-statique'],
  },

  {
    id: 'pole-sport',
    nom: 'Pole sport',
    alias: ['pole fitness', 'pole athletics', 'pole compétition sportive'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['pole-sport'],
    definition: "Discipline sportive et compétitive du pole dance — évaluée sur des critères de force, de difficulté technique, d'exécution et d'artistique dans un cadre formalisé par des fédérations internationales (IPSF, IPC).",
    description: "Le pole sport est la face compétitive et institutionnelle du pole dance — en cours de reconnaissance olympique.\n\n**Histoire du pole sport :**\n- **2006** : Création de l'IPSF (International Pole Sports Federation)\n- **2016** : Le pole sport reçoit une reconnaissance de la GAISF (reconnaissance vers les Jeux Olympiques)\n- **Aujourd'hui** : Compétitions dans plus de 80 pays\n\n**Catégories en compétition :**\n- Amateur, Professionnel\n- Par genre (masculin, féminin, couple, open gender)\n- Par niveau : débutant, intermédiaire, avancé, élite\n\n**Critères de jugement :**\n- **Difficulté** : complexité des figures\n- **Exécution** : propreté, contrôle, alignement\n- **Artistique** : musicalité, chorégraphie, présence\n- **Composition** : utilisation de l'espace, transitions\n\n**Pole sport vs autres styles :**\n- Plus technique et moins sexy que l'exotic\n- Plus codifié que le pole art\n- Costumes couvrants (regulations de compétition)\n- Barre statique en compétition internationale\n\n**Débat dans la communauté :**\nCertains voient le mouvement sportif comme une façon de 'désexualiser' le pole pour l'acceptation sociale. D'autres critiquent cette démarche comme une forme de honte de ses origines.",
    erreursCourantes: [],
    conseils: [
      "Regarde les championnats du monde IPSF sur YouTube — les routines des catégories élite te montreront ce que la discipline sportive peut atteindre techniquement.",
    ],
    difficulteInterne: 3,
    termesLies: ['pole-art', 'exotic-pole', 'figure-statique'],
  },

  {
    id: 'pole-art',
    nom: 'Pole art',
    alias: ['pole artistique', 'contemporary pole', 'pole contemporain'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['pole-art'],
    definition: "Pratique du pole dance orientée vers l'expression artistique et chorégraphique — où la barre est un outil de création au même titre que n'importe quel autre accessoire scénique, au service d'une œuvre qui peut traiter n'importe quel sujet.",
    description: "Le pole art est le pole dance comme forme artistique à part entière — sans contrainte esthétique autre que l'intention chorégraphique.\n\n**Ce qui distingue le pole art :**\n- La barre est un outil chorégraphique, pas une fin en soi\n- La technique est au service de l'intention artistique\n- Peut incorporer d'autres disciplines (danse contemporaine, théâtre, acrobatie)\n- Les costumes ne sont pas contraints par des codes (sportifs ou sensuels)\n- Les sujets traités sont infiniment variés\n\n**Artistes pole art contemporains :**\n- **Anastasia Sokolova** : esthétique cinématographique\n- **Oona Kivela** : pole contemporain\n- **Dimitry Politov** : virtuosité technique et artistique masculin\n\n**Dialogue avec la danse contemporaine :**\nDe plus en plus d'artistes de danse contemporaine intègrent la barre dans leur pratique — les frontières entre pole art et danse contemporaine deviennent poreuses.\n\n**Le pole art dans les compagnies :**\nCertaines compagnies de danse physique (Aerial Dance Company, etc.) incorporent le pole art dans leurs créations — traitement scénique du pole qui s'éloigne totalement de ses origines de strip-club.",
    erreursCourantes: [],
    conseils: [
      "Pour explorer le pole art : commence par choisir une intention ou une image (une couleur, un état émotionnel, un personnage). Laisse cette intention guider tes choix de figures et de floorwork, plutôt que de faire une liste de figures à 'checker'.",
    ],
    difficulteInterne: 3,
    termesLies: ['pole-sport', 'exotic-pole', 'floorwork-pole'],
  },

  {
    id: 'exotic-pole',
    nom: 'Exotic pole',
    alias: ['exotic', 'pole sexy', 'floorwork exotic', 'exotic dance'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['exotic'],
    definition: "Style de pole dance qui revendique l'érotisme, la sensualité et la féminité (ou leur expression dans d'autres genres) comme valeurs artistiques centrales — caractérisé par des talons hauts, un floorwork élaboré et une technique du corps différente du pole sport.",
    description: "L'exotic pole est la branche qui honore les origines du pole dance et revendique la sensualité comme valeur artistique — pas comme défaut à cacher.\n\n**Caractéristiques :**\n- **Talons hauts** : souvent entre 15 et 20 cm, plateformes\n- **Floorwork** : élaboré, lent, expressif\n- **Qualité de mouvement** : fluide, serpentin, sensuellement conscient\n- **Techniques** : body rolls, hip waves, cat walks, hair tosses\n- **Musique** : souvent plus lente, trap, R&B, reggaeton\n\n**La révolution russe :**\nL'exotic pole a été révolutionné dans les années 2010 par des danseuses russes (notamment Anastasia Sokolova, Luma Fitness) qui ont développé une technique de floorwork et de heels ultra sophistiquée.\n\n**La question politique :**\nL'exotic pole est souvent objet de polémiques — certains le voient comme 'dégradant', d'autres comme une affirmation de la liberté et de la souveraineté corporelle. La communauté pole est divisée.\n\n**Le point de vue artistique :**\nL'exotic pole est une forme artistique qui, comme le burlesque, traite de l'érotisme consciemment et artistiquement — avec une technique, une intention et une maîtrise du propos.",
    erreursCourantes: [
      "Réduire l'exotic à 'faire sexy' sans technique — l'exotic a une technique corporelle très précise.",
    ],
    conseils: [
      "Pour comprendre l'exotic pole, cherche des vidéos de concours 'Exotic Pole World Championship'. Observe la précision de la technique de floorwork et la maîtrise des niveaux. C'est aussi exigeant que le pole sport.",
    ],
    difficulteInterne: 3,
    termesLies: ['pole-art', 'floorwork-pole', 'posture-heels'],
  },

  {
    id: 'origine-pole',
    nom: "Origines et histoire du pole dance",
    alias: ['histoire pole', 'origine pole dance', 'mallakhamb', 'Chinese pole'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire'],
    definition: "Histoire plurielle du pole dance — depuis le mallakhamb indien (XIIe siècle) et la barre chinoise de cirque jusqu'aux bars américains des années 1950, la scène canadienne des années 1980 et la révolution artistique et sportive contemporaine.",
    description: "Le pole dance a plusieurs histoires — et les connaître, c'est comprendre la richesse de la discipline.\n\n**Le mallakhamb (Inde, XIIe siècle) :**\nEn Inde, le mallakhamb est une discipline traditionnelle de lutteurs — acrobaties sur un poteau de bois. Entraînement, pas performance érotique. Toujours pratiqué aujourd'hui.\n\n**La barre chinoise (cirque) :**\nDans la tradition du cirque chinois et européen, les barres verticales sont utilisées pour des numéros acrobatiques de haute virtuosité — toujours dans un contexte familial.\n\n**L'Amérique du Nord — le hoochy koochy (années 1890) :**\nDes danseuses de foire utilisaient des barres et des poteaux dans des performances suggestives — premier lien avec la sensualité.\n\n**Les bars canadiens (années 1980) :**\nLe pole dance moderne tel qu'on le connaît — danseuses utilisant une barre verticale dans un contexte de strip-club — se développe au Canada dans les années 1980. Fawnia Mondey est souvent citée comme une des premières à l'avoir popularisé hors du strip-club.\n\n**La révolution fitness (années 1990-2000) :**\nKate Jenkinson en Australie, puis de nombreuses instructrices, transforment le pole en pratique fitness accessible à tous dans un contexte de studio.\n\n**Le celles qui ont créé :**\nIl est important de nommer les travailleuses du sexe — souvent anonymes dans l'histoire — qui ont développé les techniques que la communauté pole utilise aujourd'hui. La dignification du pole passe par la dignification de celles qui l'ont inventé.",
    erreursCourantes: [
      "Effacer les origines dans les milieux de strip-club pour 'legitimiser' le pole sport — c'est une forme d'effacement des pionnières.",
    ],
    conseils: [
      "Cherche des informations sur Fawnia Mondey, ainsi que sur le mouvement 'sex worker rights' dans la communauté pole. Comprendre l'histoire complète de ta discipline te donnera un rapport plus honnête à ta pratique.",
    ],
    difficulteInterne: 1,
    termesLies: ['pole-sport', 'pole-art', 'exotic-pole'],
  },
]
