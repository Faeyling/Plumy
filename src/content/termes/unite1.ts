import type { Terme } from '../schema'

export const termesUnite1: Terme[] = [
  {
    id: 'effort-laban',
    nom: 'Effort',
    alias: ['facteurs d\'effort', 'effort Laban'],
    disciplines: ['commun'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Modèle d'analyse du mouvement créé par Rudolf Laban, décrivant comment le corps s'engage dans l'espace selon quatre facteurs : le Poids, l'Espace, le Temps et le Flux.",
    description: "Rudolf Laban (1879–1958) a développé un langage universel pour décrire le mouvement humain. L'Effort n'est pas l'intensité physique mais la qualité intérieure qui anime le geste. Chaque facteur se situe sur un continuum entre deux polarités :\n\n**Poids** : fort ↔ léger — L'engagement du poids du corps dans le mouvement.\n**Espace** : direct ↔ indirect — La trajectoire dans l'espace, focalisée ou diffuse.\n**Temps** : soudain ↔ soutenu — La relation au temps, urgente ou étalée.\n**Flux** : lié ↔ libre — Le degré de contrôle ou de fluidité du mouvement.\n\nUne combinaison de ces facteurs produit des «états d'effort» reconnaissables : le rêve (flux + espace), la passion (poids + temps), la stabilité (poids + espace), etc.",
    erreursCourantes: [
      "Confondre l'Effort avec l'effort physique — Laban parle de qualité, pas de quantité.",
      "Travailler les facteurs de façon isolée sans comprendre leurs combinaisons.",
      "Négliger le Flux, souvent oublié au profit des trois autres facteurs.",
    ],
    conseils: [
      "Commence par explorer un seul facteur à la fois dans une improvisation de 2 minutes.",
      "Plumy te suggère : improvise en 'temps soudain + poids léger' — tu obtiendras quelque chose d'aérien et vif, proche de l'oiseau.",
    ],
    etymologie: "Terme français emprunté directement par Laban pour son système, publié en allemand sous 'Antrieb' (impulse) puis traduit et popularisé en anglais comme 'Effort'.",
    difficulteInterne: 2,
    termesLies: ['kinesphere', 'qualites-de-mouvement', 'niveaux-espace'],
  },

  {
    id: 'kinesphere',
    nom: 'Kinesphère',
    alias: ['espace kinesphérique', 'espace personnel'],
    disciplines: ['commun'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Bulle d'espace tridimensionnel autour du corps, délimitée par la portée maximale des membres sans déplacer le centre de gravité.",
    description: "La kinesphère est l'espace personnel du danseur — une sphère imaginaire qui l'entoure, dont le centre est approximativement au nombril (ou au centre de gravité). Laban la visualisait comme un icosaèdre de 26 directions possibles.\n\nOn distingue trois portées :\n- **Portée proche** : gestes serrés contre le corps\n- **Portée médiane** : bras à mi-chemin\n- **Portée éloignée** : extension maximale sans pas\n\nLa kinesphère se déplace avec le danseur quand il traverse l'espace général (la scène entière). Apprendre à cartographier sa propre kinesphère est fondamental pour toutes les disciplines.",
    erreursCourantes: [
      "Rester toujours en portée proche par timidité — ce qui réduit la présence scénique.",
      "Confondre kinesphère et espace général : la kinesphère se déplace avec toi.",
    ],
    conseils: [
      "Ferme les yeux et tends les bras dans toutes les directions. Ce que tu touches est ta kinesphère. Apprends à en cartographier tous les recoins.",
    ],
    etymologie: "Du grec 'kinein' (mouvoir) et 'sphaira' (sphère). Terme créé par Laban.",
    difficulteInterne: 2,
    termesLies: ['effort-laban', 'niveaux-espace'],
  },

  {
    id: 'niveaux-espace',
    nom: 'Niveaux dans l\'espace',
    alias: ['niveaux', 'plans spatiaux'],
    disciplines: ['commun'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Découpage vertical de l'espace en trois zones : le niveau bas (au sol), le niveau moyen (debout décontracté) et le niveau haut (pointes, sauts, élévations).",
    description: "Tout mouvement occupe un niveau dans l'espace. Laban identifiait trois grands plans :\n\n**Niveau bas** : positions au sol, accroupies, roulades — espace du poids et du contact.\n**Niveau moyen** : la hauteur naturelle debout — espace du quotidien et de la marche.\n**Niveau haut** : relevés, sauts, portés — espace de la légèreté et de l'envol.\n\nLes transitions entre niveaux sont des moments chorégraphiques à part entière. Une descente au sol peut être aussi expressive que le plus grand saut. Le contemporain et la pole dance explorent tous les niveaux avec une grande liberté ; le classique privilégie le haut.",
    erreursCourantes: [
      "Cantonner la danse à un seul niveau (souvent le moyen) par habitude.",
      "Transitionner brusquement entre niveaux sans investir le chemin lui-même.",
    ],
    conseils: [
      "Dans ta prochaine improvisation, impose-toi de passer par les trois niveaux toutes les 8 mesures. Tu verras comme ça change ta palette.",
    ],
    difficulteInterne: 1,
    termesLies: ['kinesphere', 'effort-laban'],
  },

  {
    id: 'qualites-de-mouvement',
    nom: 'Qualités de mouvement',
    alias: ['texture de mouvement', 'dynamiques'],
    disciplines: ['commun'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Caractéristiques qualitatives d'un geste, distinctes de sa forme géométrique : sa fluidité, sa force, sa rapidité et ses nuances expressives.",
    description: "La même figure peut être exécutée de mille façons selon la qualité investie. Un rond de jambe classique exécuté en qualité 'coulante' n'a rien à voir avec le même rond exécuté en qualité 'percussive'.\n\nLes grandes qualités de mouvement selon les traditions pédagogiques :\n- **Soutenu** : continu, lié, sans rupture\n- **Percussif** : ponctué d'accents nets\n- **Suspendu** : flottant, comme retenu avant de tomber\n- **Vibratoire** : tremblé, frémissant\n- **Coulant** : fluide, lié comme de l'eau\n- **Statique / tenu** : immobilité active\n\nCes qualités sont au cœur de l'expression dans toutes les disciplines, du ballet à l'effeuillage burlesque.",
    erreursCourantes: [
      "Copier la forme du mouvement sans en adopter la qualité — le geste reste vide.",
      "Utiliser toujours la même qualité par défaut (souvent soutenu/fluide) et manquer de variété.",
    ],
    difficulteInterne: 2,
    termesLies: ['effort-laban'],
  },

  {
    id: 'alignement',
    nom: 'Alignement',
    alias: ['alignement corporel', 'placement'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Organisation verticale optimale des segments corporels — tête, cage thoracique, bassin et pieds — sur un axe qui minimise les contraintes articulaires.",
    description: "Un bon alignement n'est pas une posture rigide mais un équilibre dynamique. En position debout neutre :\n- Les oreilles sont au-dessus des épaules\n- Les épaules au-dessus des hanches\n- Les hanches au-dessus des chevilles\n- La colonne garde ses courbures naturelles (lordose cervicale, cyphose dorsale, lordose lombaire)\n\nPourquoi c'est vital : un mauvais alignement répété engendre des blessures (tendinites, douleurs lombaires, syndrome rotulien). L'alignement change selon les disciplines — le classique demande une verticalité très précise, le contemporain joue délibérément avec les déséquilibres.\n\nL'alignement se travaille sans relâche, même en dehors des cours : dans la file d'attente, assis, en marchant.",
    erreursCourantes: [
      "Cambrer excessivement les lombaires ('rentrer le ventre' en forçant la lordose).",
      "Pousser les hanches en avant, créant un déséquilibre antérieur.",
      "Crisper les épaules vers les oreilles sous l'effet de la concentration.",
    ],
    conseils: [
      "Imagines-toi un fil partant du sommet du crâne qui te tire doucement vers le plafond. Les épaules tombent, la nuque s'allonge — c'est ça, l'alignement.",
    ],
    difficulteInterne: 1,
    termesLies: ['turn-out', 'centre-de-gravite', 'tonicite'],
  },

  {
    id: 'turn-out',
    nom: 'Turn-out',
    alias: ['en dehors', 'rotation externe', 'ouverture'],
    disciplines: ['commun'],
    categories: ['positions', 'concepts'],
    definition: "Rotation externe des membres inférieurs depuis les articulations coxo-fémorales (hanches), permettant d'orienter les pieds et les genoux vers l'extérieur.",
    description: "Le turn-out est un concept central dans de nombreuses disciplines de danse, bien que son degré varie considérablement :\n\n**Classique** : idéalement 180° (pieds formant une ligne), travaillé dès les premières années\n**Jazz** : turn-out partiel, souvent combiné à des positions parallèles\n**Contemporain** : turn-out et parallèle coexistent librement\n**Heels / Pole** : position souvent parallèle ou légèrement en dehors\n\nLe turn-out naît de la hanche — jamais du genou ou du pied. Forcer le turn-out depuis le bas de la jambe est la première source de blessures du genou chez les danseurs.\n\nAnatomiquement, le turn-out dépend de la forme du col du fémur (antéversion/rétroversion). Chaque corps a son turn-out naturel maximal qu'il ne faut pas dépasser.",
    erreursCourantes: [
      "Forcer le turn-out depuis le genou ou la cheville — met en danger les ligaments.",
      "Perdre le turn-out dès qu'on plie les genoux ('pliés en canard').",
      "Rouler les chevilles vers l'intérieur pour simuler plus d'ouverture.",
    ],
    conseils: [
      "Teste ton vrai turn-out en t'allongeant sur le dos. Laisse tes jambes se rotater naturellement sans effort. C'est ton turn-out osseux, qu'on peut ensuite travailler en musculation.",
    ],
    securite: {
      risques: ["Syndrome fémoro-patellaire", "Lésions méniscales si forcé", "Tendinite du moyen fessier"],
      precautions: ["Ne jamais forcer au-delà du confort articulaire", "Toujours activer les rotateurs externes (sous-fessier, obturateur) pour porter le turn-out"],
    },
    etymologie: "Anglais 'turn out', littéralement 'tourner vers l'extérieur'.",
    difficulteInterne: 2,
    termesLies: ['alignement', 'centre-de-gravite'],
  },

  {
    id: 'centre-de-gravite',
    nom: 'Centre de gravité',
    alias: ['centre de masse', 'centre', 'hara'],
    disciplines: ['commun'],
    categories: ['concepts', 'equilibres'],
    definition: "Point imaginaire du corps autour duquel la masse est équilibrée, situé approximativement dans le bas-ventre (deux travers de doigt sous le nombril).",
    description: "Le centre de gravité (CDG) est le point depuis lequel tout mouvement peut être initié ou organisé. En physique, c'est le point où s'applique la résultante des forces gravitationnelles.\n\nPour le danseur, le CDG est une boussole intérieure :\n- Un équilibre est stable quand la ligne verticale passant par le CDG tombe dans la base de sustentation (les pieds)\n- Les tours partent du CDG — un CDG bas aide la stabilité, un CDG projeté crée de l'instabilité créative\n- En contemporain et en pole, jouer avec le CDG en dehors de la base de sustentation crée des postures spectaculaires (mais demande force et contrôle)\n\nDans certaines traditions (arts martiaux, butoh), ce point est appelé 'hara' ou 'tan tien' et est considéré comme le siège de l'énergie vitale.",
    erreursCourantes: [
      "Penser uniquement aux bras et aux jambes en oubliant d'initier le mouvement depuis le centre.",
      "Bloquer le bas du ventre ('tenir le ventre') au lieu d'en garder une tonicité légère et mobile.",
    ],
    conseils: [
      "Pose une main sur ton bas-ventre pendant un exercice. Sens-tu le mouvement naître de là ? C'est le but.",
    ],
    difficulteInterne: 2,
    termesLies: ['alignement', 'tonicite'],
  },

  {
    id: 'tonicite',
    nom: 'Tonicité musculaire',
    alias: ['tonus', 'tonus de base'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "État de légère tension musculaire permanente maintenant le corps prêt à réagir, à mi-chemin entre la décontraction totale et la contraction maximale.",
    description: "Le tonus musculaire de base est ce qui te tient debout sans effort conscient. Pour le danseur, il s'agit de trouver le juste milieu :\n\n**Trop peu de tonus** = flaccidité, manque de précision, risque de blessure\n**Trop de tonus** = crispation, perte de fluidité, fatigue prématurée\n\nChaque discipline a son rapport au tonus :\n- **Classique** : tonus élevé et précis, engagement permanent\n- **Contemporain** : joue entre hyper et hypotonus, le relâché est un outil\n- **Heels / Burlesque** : tonus abdominal et des jambes, mais épaules et bras souvent plus détendus\n- **Pole** : tonus maximum lors des figures, mais capacité à relâcher entre\n\nLa proprioception (conscience du corps) est intimement liée au tonus.",
    erreursCourantes: [
      "Crispation générale par stress ou concentration — bloquer la respiration et les épaules.",
      "Confondre tonus et rigidité : un muscle tonique reste souple et réactif.",
    ],
    difficulteInterne: 1,
    termesLies: ['alignement', 'proprioception'],
  },

  {
    id: 'proprioception',
    nom: 'Proprioception',
    alias: ['sens kinesthésique', 'sens du mouvement', 'sens proprioceptif'],
    disciplines: ['commun'],
    categories: ['concepts', 'sante-prevention'],
    definition: "Capacité du système nerveux à percevoir la position, le mouvement et l'état de tension des segments corporels sans les regarder, grâce aux récepteurs musculaires, tendineux et articulaires.",
    description: "La proprioception, c'est littéralement 'sentir son propre corps'. C'est le sixième sens du danseur — celui qui lui permet de danser les yeux fermés, de savoir où sont ses mains sans les regarder.\n\nLes récepteurs proprioceptifs se trouvent dans :\n- Les **fuseaux neuromusculaires** (dans les muscles)\n- Les **organes tendineux de Golgi** (aux jonctions tendons-muscles)\n- Les **mécanorécepteurs articulaires** (dans les capsules des articulations)\n\nPourquoi c'est crucial :\n- Prévention des entorses et chutes (réflexe de protection rapide)\n- Mémorisation du mouvement (mémoire corporelle)\n- Correction automatique de l'équilibre\n\nLa proprioception s'améliore avec l'entraînement. Elle peut être altérée après une blessure — la rééducation proprioceptive est essentielle avant le retour à la danse.",
    erreursCourantes: [
      "Dépendre uniquement des miroirs pour se corriger — ça bride le développement proprioceptif.",
      "Négliger la rééducation proprioceptive après une entorse de cheville.",
    ],
    conseils: [
      "Entraîne-toi régulièrement les yeux fermés, même pour de simples exercices de barre. C'est inconfortable au début — c'est normal, ça veut dire que ça travaille.",
    ],
    securite: {
      risques: ["Proprioception diminuée = risque accru de récidive après blessure"],
      precautions: ["Exercices d'équilibre sur plan instable en rééducation", "Éviter de reprendre la danse avant d'avoir récupéré la proprioception"],
    },
    difficulteInterne: 3,
    termesLies: ['tonicite', 'alignement'],
  },

  {
    id: 'cote-cour',
    nom: 'Côté cour',
    alias: ['left stage', 'stage left'],
    disciplines: ['commun'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Côté gauche de la scène du point de vue du danseur face au public, correspondant au côté droit de la salle vu depuis le public.",
    description: "La convention scénique française divise la scène en zones. 'Cour' et 'jardin' sont des termes hérités du théâtre classique français.\n\nL'origine de ces termes remonte à Versailles : à la Comédie-Française, le côté 'cour' donnait sur la cour royale et le côté 'jardin' sur les jardins du Palais-Royal.\n\n**Repère mnémotechnique :** CJF — Cour à gauche du danseur, Jardin à droite du danseur, Face au public.\n\nLes zones de la scène :\n- **Côté cour** : à la gauche du danseur (droite du public)\n- **Côté jardin** : à la droite du danseur (gauche du public)\n- **Face** : devant, vers le public\n- **Lointain** : derrière, vers le fond de scène\n- **Avant-scène** : zone proche du public\n- **Cour-face** / **Jardin-lointain** : les quatre coins de la scène\n\nDans les indications de mise en scène et les notations chorégraphiques, ces repères sont utilisés universellement.",
    erreursCourantes: [
      "Confondre cour et jardin — très fréquent, même chez des danseurs expérimentés.",
      "Utiliser 'gauche' et 'droite' sans préciser le point de vue (danseur ou public) — source de confusion permanente.",
    ],
    conseils: [
      "Moyen mémo : 'j'ai mon Jardin à ma droite quand je suis en garde'. Ou simplement : Cour = Court = à gauche, Jardin = plus long à dire = à droite. Invente ton truc !",
    ],
    etymologie: "Héritage du théâtre à la française, du Palais-Royal et de Versailles (XVIIe s.).",
    difficulteInterne: 1,
    termesLies: ['cote-jardin', 'face-lointain', 'diagonale'],
  },

  {
    id: 'cote-jardin',
    nom: 'Côté jardin',
    alias: ['jardin', 'right stage', 'stage right'],
    disciplines: ['commun'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Côté droit de la scène du point de vue du danseur face au public, correspondant au côté gauche de la salle vu depuis le public.",
    description: "Le côté jardin est la moitié droite de la scène du point de vue du danseur. Il porte ce nom depuis les théâtres classiques français où ce côté donnait sur les jardins.\n\nDans la plupart des traditions chorégraphiques :\n- Les entrées de côté jardin sont souvent associées aux rôles de protagoniste (dans le ballet romantique)\n- La diagonale jardin-cour est la plus fréquemment utilisée pour les grandes traversées\n- Les feux de coulisses sont numérotés depuis le côté cour (1 côté cour, 1 côté jardin, etc.)\n\nDans les partitions chorégraphiques (notation Laban, Benesh), ces repères spatiaux sont systématiquement utilisés.",
    erreursCourantes: [
      "Confondre jardin et cour — se rappeler : Jardin = à ma droite quand je regarde le public.",
    ],
    difficulteInterne: 1,
    termesLies: ['cote-cour', 'face-lointain', 'diagonale'],
  },

  {
    id: 'face-lointain',
    nom: 'Face et lointain',
    alias: ['avant-scène', 'fond de scène', 'upstage', 'downstage'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "La 'face' désigne la partie de la scène orientée vers le public (avant-scène) ; le 'lointain' est la partie opposée, vers le fond de scène.",
    description: "La profondeur de la scène s'organise selon l'axe face-lointain :\n\n**La face (avant-scène)** :\n- La zone la plus proche du public\n- Traditionnellement l'espace le plus intime et expressif\n- Une position en face met le danseur 'en lumière' (au sens propre comme au figuré)\n- En anglais : 'downstage' (les anciennes scènes étaient inclinées vers le bas, vers le public)\n\n**Le lointain (fond de scène)** :\n- La zone la plus éloignée du public\n- Espace de l'entrée et de la disparition, du mystère\n- Une position lointain donne un sentiment d'éloignement, de distance\n- En anglais : 'upstage'\n\nLes combinaisons face/lointain avec cour/jardin donnent les huit zones scéniques : cour-face, milieu-face, jardin-face, cour-milieu, centre, jardin-milieu, cour-lointain, milieu-lointain, jardin-lointain.",
    erreursCourantes: [
      "Passer la majorité du temps en face sans jamais explorer les zones lointain — qui offrent pourtant des dynamiques expressives très fortes.",
    ],
    difficulteInterne: 1,
    termesLies: ['cote-cour', 'cote-jardin', 'diagonale'],
  },

  {
    id: 'diagonale',
    nom: 'Diagonale',
    alias: ['en diagonale', 'traversée en diagonale'],
    disciplines: ['commun'],
    categories: ['deplacements', 'concepts'],
    definition: "Trajectoire traversant la scène en biais, généralement du coin jardin-lointain vers le coin cour-face (ou inversement), permettant de parcourir le plus grand espace scénique possible.",
    description: "La diagonale est la trajectoire la plus utilisée en cours et en spectacle pour plusieurs raisons :\n\n1. **Distance maximale** : c'est le chemin le plus long sur scène\n2. **Dynamisme visuel** : l'angle brisé crée une tension visuelle plus forte que la ligne droite latérale\n3. **Versatilité** : permet grands sauts, grandes traversées, exercices techniques\n\nDiagonales principales :\n- **Jardin-lointain → Cour-face** : la plus classique, utilisée dans presque tous les styles\n- **Cour-lointain → Jardin-face** : l'autre sens, moins fréquente mais tout aussi valide\n\nEn cours, les exercices en diagonale permettent à plusieurs danseurs de traverser à la suite, par groupes.\n\nEn chorégraphie, une diagonale signale souvent un moment fort, une arrivée ou un climax.",
    erreursCourantes: [
      "Couper la diagonale et finir trop tôt ou trop loin — il faut aller jusqu'au coin opposé.",
      "Perdre la direction en cours de route et finir au milieu de la scène.",
    ],
    difficulteInterne: 1,
    termesLies: ['cote-cour', 'cote-jardin', 'face-lointain'],
  },

  {
    id: 'en-croix',
    nom: 'En croix',
    alias: ['quatre directions', 'croix cardinale'],
    disciplines: ['commun'],
    categories: ['deplacements', 'concepts'],
    definition: "Travail d'un exercice dans les quatre directions cardinales : devant, côté, derrière, côté — formant une croix autour du corps ou dans l'espace.",
    description: "Le terme 'en croix' désigne une organisation spatiale où un même mouvement est exécuté successivement dans 4 ou 8 directions.\n\nA la barre classique, les exercices 'en croix' s'effectuent systématiquement :\n- **Devant** (en avant, vers la face)\n- **Côté** (à la seconde, vers cour ou jardin)\n- **Derrière** (en arrière, vers le lointain)\n- **Côté** (retour à la seconde)\n\nCette organisation garantit un développement symétrique et complet de tous les groupes musculaires.\n\nOn retrouve ce principe 'en croix' dans d'autres disciplines : les isolations en croix du jazz, les mouvements de bassin en croix du burlesque et du heels, les directions en croix en improvisation contemporaine.\n\nLa croix cardinale est aussi liée à l'architecture spatiale de Laban, qui organisait les 26 directions de la kinesphère autour d'axes croisés.",
    erreursCourantes: [
      "Oublier la direction 'arrière' souvent moins naturelle et travaillée.",
      "Ne pas maintenir l'alignement du corps quand on travaille dans les directions non-frontales.",
    ],
    difficulteInterne: 1,
    termesLies: ['kinesphere', 'niveaux-espace', 'diagonale', 'cote-cour'],
  },
]
