import type { Terme } from '../schema'

export const termesUnite3: Terme[] = [
  {
    id: 'tempo',
    nom: 'Tempo',
    alias: ['BPM', 'vitesse musicale', 'pulsation'],
    disciplines: ['commun'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Vitesse d'exécution d'une pièce musicale, exprimée en battements par minute (BPM) ou par des indications verbales italiennes (Andante, Allegro, Presto…).",
    description: "Le tempo est le pouls de la musique. Pour le danseur, il fixe la 'grille temporelle' dans laquelle le mouvement s'inscrit.\n\nÉchelle de tempos courants :\n- **Grave** : moins de 40 BPM (très lent, solennel)\n- **Largo / Adagio** : 44–66 BPM (lent, ample)\n- **Andante** : 76–108 BPM (allant, naturel)\n- **Moderato** : 108–120 BPM\n- **Allegro** : 120–168 BPM (vif)\n- **Presto / Prestissimo** : 168–200+ BPM (très rapide)\n\nUne grande liberté chorégraphique vient de la capacité à danser 'contre' le tempo ou à le subdiviser : danser en double-temps (deux mouvements par temps) ou en demi-temps (un mouvement tous les deux temps).\n\nLe tempo influence directement les qualités de mouvement : un tempo rapide appelle souvent l'urgence, le percussif ; un tempo lent invite le soutenu, le suspendu.",
    erreursCourantes: [
      "Ralentir instinctivement dans les passages difficiles — le tempo reste constant.",
      "Confondre tempo et dynamique (force) — une valse peut être jouée forte ou douce sans que son tempo change.",
    ],
    etymologie: "De l'italien 'tempo', temps.",
    difficulteInterne: 1,
    termesLies: ['mesure-musicale', 'phrase-musicale', 'marquage-tempo'],
  },

  {
    id: 'mesure-musicale',
    nom: 'Mesure musicale',
    alias: ['mesure', 'mètre', 'signature rythmique'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Unité de temps régulière qui organise la musique en groupes de battements, indiquée par la signature temporelle (2/4, 3/4, 4/4, 6/8…).",
    description: "La mesure est le 'cadre rythmique' de la musique. La signature temporelle (chiffre de mesure) indique :\n- Le **numérateur** : nombre de temps dans une mesure\n- Le **dénominateur** : valeur de note correspondant à un temps\n\nMesures courantes en danse :\n- **4/4** : la plus courante, 4 temps forts — jazz, hip-hop, contemporain\n- **3/4** : valse, 3 temps (1-2-3) — classique, cabaret\n- **2/4** : marche, polka — cabaret, French cancan\n- **6/8** : 6 croches groupées en 2 (un temps fort + un temps faible fort) — jigs, certains jazzes\n- **5/4 ou 7/8** : mesures asymétriques, contemporain\n\nLe premier temps de chaque mesure est appelé **temps fort** — c'est souvent là que se placent les accents chorégraphiques les plus importants.",
    erreursCourantes: [
      "Compter les secondes au lieu des temps musicaux.",
      "Perdre le fil de la mesure dans les changements de rythme.",
    ],
    difficulteInterne: 1,
    termesLies: ['tempo', 'phrase-musicale', 'anacrouse'],
  },

  {
    id: 'phrase-musicale',
    nom: 'Phrasé musical',
    alias: ['phrase', 'phrasé', 'phrase chorégraphique'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Groupe de mesures formant une unité musicale et expressive cohérente, comme une phrase dans une langue — avec un début, un développement et une fin.",
    description: "Comme en poésie, la musique s'organise en phrases (généralement de 4 ou 8 mesures). Le danseur doit apprendre à 'entendre' les phrases pour aligner son mouvement sur leur structure.\n\nLes phrases musicales créent naturellement :\n- Des **temps forts** (downbeat) : début de phrase, souvent accentué\n- Des **respirations** : fins de phrases où la musique 'reprend son souffle'\n- Des **climax** : souvent vers le milieu ou la fin de phrase\n\nEn chorégraphie, on peut choisir de :\n- **Correspondre** à la phrase musicale (mouvement et musique se renforcent)\n- **Contrepointer** (le mouvement crée son propre phrasé, indépendant)\n- **Décaler** la phrase de mouvement par rapport à la phrase musicale\n\nLe phrasé chorégraphique est l'une des premières compétences à développer pour passer de 'danseur qui suit la musique' à 'danseur qui dialogue avec la musique'.",
    erreursCourantes: [
      "Commencer le mouvement toujours sur le temps 1 sans jouer avec les autres temps.",
      "Ne pas entendre la fin de phrase et enchaîner sans 'respirer'.",
    ],
    conseils: [
      "Écoute une chanson sans bouger. Quand tu sens que la musique 'repart', c'est le début d'une nouvelle phrase. Compte — la plupart des musiques populaires ont des phrases de 8 temps.",
    ],
    difficulteInterne: 2,
    termesLies: ['tempo', 'mesure-musicale', 'anacrouse'],
  },

  {
    id: 'anacrouse',
    nom: 'Anacrouse',
    alias: ['levée', 'upbeat', 'avant-temps'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Note ou groupe de notes qui précèdent le premier temps fort d'une phrase musicale, créant un élan vers ce temps fort.",
    description: "L'anacrouse (du grec 'ana' = en remontant, 'krousis' = frappe) est cette impulsion d'avant le temps fort. Elle est fondamentale en danse parce qu'elle correspond à la **préparation du mouvement**.\n\nExemples musicaux : 'Les...' dans 'Les Champs-Élysées' (avant le temps fort 'Champs').\n\nEn danse, l'anacrouse est le moment de préparation invisible qui permet au mouvement d'arriver exactement sur le temps fort. Sans anacrouse, le mouvement semble arraché, sans préparation. C'est la différence entre un danseur qui *compte* et un danseur qui *ressent* la musique.\n\nEn jazz et en contemporain, on joue souvent **sur** l'anacrouse pour créer de la surprise — c'est ce qu'on appelle danser 'en avance' ou 'en syncope'.",
    erreursCourantes: [
      "Oublier la préparation et sauter directement dans le mouvement — résultat mécanique et sans souffle.",
      "Confondre anacrouse (avant le temps fort) et syncope (sur le temps faible).",
    ],
    conseils: [
      "Avant chaque exercice ou enchaînement, respire sur l'anacrouse. Ton corps se prépare naturellement — et tu arriveras toujours à temps.",
    ],
    etymologie: "Du grec ancien 'anákrousis' (pousser vers le haut).",
    difficulteInterne: 3,
    termesLies: ['phrase-musicale', 'mesure-musicale', 'syncope'],
  },

  {
    id: 'syncope',
    nom: 'Syncope',
    alias: ['syncopé', 'contretemps', 'off-beat'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Déplacement de l'accent rythmique sur un temps normalement faible, créant une tension expressive par décalage entre la pulsation attendue et le mouvement.",
    description: "Dans une mesure à 4 temps (1-2-3-4), les temps forts sont 1 et 3, les temps faibles 2 et 4. La syncope consiste à accentuer les temps 2 et 4 (ou les 'et' entre les temps).\n\nLa syncope est l'ADN du jazz. Le groove du jazz vient en grande partie de cette tension rythmique entre pulsation régulière et accentuation décalée.\n\nEn danse :\n- Danser 'sur les 2 et les 4' donne le groove soul/funk\n- Les 'et' de syncope (entre chaque temps) donnent la texture du shuffle jazz\n- Le contretemps classique (dans le jeu de jambes ballet-jazz) place les actions sur les temps faibles\n\nLa syncope crée de la surprise et de l'énergie — c'est un outil d'expression puissant dans toutes les disciplines.",
    erreursCourantes: [
      "Perdre la pulsation de fond en se concentrant sur les syncopes — la syncope n'a de sens qu'en relation avec le temps fort.",
      "Confondre syncope et rubato (liberté de tempo).",
    ],
    difficulteInterne: 3,
    termesLies: ['mesure-musicale', 'anacrouse', 'tempo'],
  },

  {
    id: 'marquage-tempo',
    nom: 'Marquages de tempo',
    alias: ['indication de tempo', 'termes italiens de tempo', 'adagio', 'allegro', 'andante'],
    disciplines: ['commun'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Termes italiens (adagio, andante, allegro, presto…) indiquant la vitesse et le caractère d'un passage musical, utilisés universellement dans la musique classique et la pédagogie de la danse.",
    description: "Les marquages de tempo désignent non seulement une vitesse mais une **intention expressive**. Dans l'ordre du plus lent au plus rapide :\n\n- **Grave** (<40 BPM) : solennel, pesant\n- **Largo** (40–60) : large, ample\n- **Adagio** (44–68) : lent, expressif, méditatif\n- **Andante** (76–108) : allant, naturel, \"de marche\"\n- **Moderato** (108–120) : modéré\n- **Allegretto** (112–120) : légèrement vif\n- **Allegro** (120–168) : vif, joyeux\n- **Vivace** (140–176) : très animé\n- **Presto** (168–200) : rapide, brillant\n\nD'autres marquages modifient le tempo en cours de route :\n- **Accelerando** (*accel.*) : accélération progressive\n- **Rallentando / Ritardando** (*rall. / rit.*) : ralentissement progressif\n- **Rubato** : liberté expressive par rapport au tempo\n- **A tempo** : retour au tempo initial après une liberté",
    erreursCourantes: [
      "Traiter les marquages comme de simples indications de vitesse — ils décrivent aussi le caractère.",
      "Confondre 'allegro' en musique et 'allegro' en danse classique — en danse, allegro désigne les petits sauts, pas une vitesse.",
    ],
    etymologie: "Termes italiens héritiers de la théorie musicale de la Renaissance et du Baroque.",
    difficulteInterne: 2,
    termesLies: ['tempo', 'rubato', 'dynamiques-musicales'],
  },

  {
    id: 'rubato',
    nom: 'Rubato',
    alias: ['tempo rubato', 'temps volé', 'liberté de tempo'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Liberté expressive par rapport au tempo strict : certains moments sont légèrement étirés (le temps est 'volé'), d'autres légèrement compressés, le tout se compensant sur la phrase.",
    description: "Le mot *rubato* vient de l'italien *rubare* (voler). C'est l'art de \"voler\" du temps à certains moments pour l'offrir à d'autres, créant une respiration expressive dans le flux musical.\n\nDeux types de rubato :\n1. **Rubato mélodique** : seule la mélodie (ou la danse) fluctue, l'accompagnement reste en tempo\n2. **Rubato d'ensemble** : tout le groupe fluctue ensemble\n\nEn danse, le rubato se manifeste par :\n- Des ports de bras qui 's'attardent' sur certaines positions avant de continuer\n- Des pirouettes dont la préparation prend légèrement plus de temps\n- Des transitions qui 'respirent' plutôt que d'enchaîner métronomiquement\n\nLe rubato est omniprésent dans le ballet romantique, le lyrical jazz et l'adage contemporain. Il exige une grande écoute musicale — et de ne jamais 'se perdre' dans la liberté.",
    erreursCourantes: [
      "Confondre rubato et retard involontaire — le rubato est toujours intentionnel et revient au tempo.",
      "Appliquer un rubato uniforme sur tout le morceau — ça perd son effet expressif.",
    ],
    etymologie: "De l'italien *rubare* (voler) — le temps est littéralement 'emprunté'.",
    difficulteInterne: 3,
    termesLies: ['tempo', 'marquage-tempo', 'phrase-musicale'],
  },

  {
    id: 'dynamiques-musicales',
    nom: 'Dynamiques musicales',
    alias: ['nuances', 'volume', 'intensité musicale', 'forte', 'piano', 'pianissimo', 'fortissimo'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Indications d'intensité sonore dans la musique, allant du pianissimo (très doux) au fortissimo (très fort), décrivant le volume et l'énergie d'un passage.",
    description: "Les dynamiques constituent le vocabulaire de l'intensité musicale. Pour le danseur, elles se traduisent directement en qualité d'énergie dans le geste.\n\nDu plus doux au plus fort :\n- **ppp** (pianississimo) : extrêmement doux\n- **pp** (pianissimo) : très doux\n- **p** (piano) : doux\n- **mp** (mezzo-piano) : moyennement doux\n- **mf** (mezzo-forte) : moyennement fort\n- **f** (forte) : fort\n- **ff** (fortissimo) : très fort\n- **fff** (fortississimo) : extrêmement fort\n\nDynamiques en transition :\n- **Crescendo** (*<*) : augmentation progressive du volume\n- **Decrescendo / Diminuendo** (*>*) : diminution progressive\n- **Fortepiano** (*fp*) : fort puis immédiatement doux",
    erreursCourantes: [
      "Interpréter les dynamiques comme absolues — elles sont relatives au contexte (un piano orchestral est plus fort qu'un forte en solo).",
      "Négliger les dynamiques dans la danse — les transitions de nuances définissent souvent le caractère expressif d'une phrase.",
    ],
    difficulteInterne: 1,
    termesLies: ['crescendo', 'legato', 'marquage-tempo'],
  },

  {
    id: 'crescendo',
    nom: 'Crescendo',
    alias: ['decrescendo', 'diminuendo', 'montée en puissance'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Augmentation progressive de l'intensité sonore dans un passage musical (crescendo), à l'opposé du decrescendo (diminution progressive).",
    description: "Le crescendo est l'un des outils expressifs les plus puissants de la musique — et de la danse.\n\n**Crescendo** : la musique (et le corps) montent en intensité, en espace, en énergie. Une phrase en crescendo donne l'impression que quelque chose arrive, se déploie, grandit. En danse, le geste s'amplifie naturellement — la kinesphère s'ouvre, le Poids s'engage, l'espace se remplit.\n\n**Decrescendo / Diminuendo** : l'énergie se retire, le son (et le corps) se concentrent. Loin d'être une simple 'fin', un decrescendo bien habité peut être aussi intense qu'un climax — la retenue a sa propre force.\n\nLes crescendos/decrescendos peuvent être :\n- **Locaux** : sur quelques notes ou un geste\n- **Globaux** : sur toute une section ou un morceau entier (comme le Boléro de Ravel)\n- **Dynamiques** : en relation avec d'autres paramètres (tempo, espace)",
    erreursCourantes: [
      "Anticiper le sommet du crescendo — le corps 'arrive' avant la musique et l'effet est raté.",
      "Faire un decrescendo 'vide' — diminuer sans intention ni direction intérieure.",
    ],
    difficulteInterne: 1,
    termesLies: ['dynamiques-musicales', 'phrase-musicale'],
  },

  {
    id: 'legato',
    nom: 'Legato',
    alias: ['lié', 'coulé', 'legate'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Articulation musicale indiquant que les notes doivent être jouées de façon connectée et fluide, sans interruption entre elles.",
    description: "Le legato (de l'italien *legare*, lier) est la façon la plus naturelle pour beaucoup d'instruments de jouer : les notes s'enchaînent sans silence entre elles, créant une ligne musicale continue.\n\nPour le danseur, le legato est une **qualité de mouvement fondamentale** — la transition fluide entre les positions, le port de bras qui coule, la succession corporelle sans rupture. On retrouve le legato dans :\n- Les ports de bras classiques et les adages\n- Les transitions en contemporary release\n- Les ondulations en heels\n- Les bras stylings en lyrical jazz\n\n**Legato vs staccato :** ce sont les deux pôles de l'articulation. Alterner legato et staccato dans une phrase crée du contraste et de la lisibilité. Un danseur qui maîtrise les deux a une palette d'expression beaucoup plus large.\n\n**Lien avec le Flux Laban :** un mouvement legato tend vers le Flux Libre — il s'écoule sans s'arrêter. Un mouvement staccato tend vers le Flux Lié — il peut s'arrêter à tout moment.",
    erreursCourantes: [
      "Confondre legato avec lenteur — on peut jouer ou danser legato très vite.",
      "Perdre la direction dans un legato trop fluide — le legato doit avoir une intention, pas juste 'couler'.",
    ],
    etymologie: "De l'italien *legare* (lier, attacher).",
    difficulteInterne: 1,
    termesLies: ['staccato', 'dynamiques-musicales', 'phrase-musicale'],
  },

  {
    id: 'staccato',
    nom: 'Staccato',
    alias: ['détaché', 'piqué', 'pointé'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Articulation musicale indiquant que les notes doivent être jouées brèves et détachées, séparées par de courtes silences — à l'opposé du legato.",
    description: "Le staccato (de l'italien *staccare*, détacher) raccourcit chaque note à environ la moitié de sa valeur, créant un effet de rebond, de piqué, de ponctuation.\n\nEn danse, le staccato se traduit par :\n- Les **isolations jazz** : chaque partie du corps claque indépendamment\n- Les **hits** en hip-hop et en contemporary\n- Les **frappes** rythmiques en burlesque\n- Les pas **piqués** en classique (petit saut, pointe piquée)\n\n**Staccato et qualités de Laban :** le staccato correspond souvent au facteur Temps Soudain (le geste 'arrive' et 'repart' rapidement) et au Flux Lié (le geste peut s'arrêter à tout instant).\n\n**Exercice pratique :** prends un geste simple (lever le bras droit). Fais-le en legato : lent, continu, sans arrêt. Puis en staccato : trois petits hits saccadés. Même geste, deux caractères radicalement différents.",
    erreursCourantes: [
      "Confondre staccato avec accent — staccato = durée courte, accent = intensité forte.",
      "Jouer ou danser staccato sans rebond — le staccato est vivant, pas rigide.",
    ],
    etymologie: "De l'italien *staccare* (détacher, séparer).",
    difficulteInterne: 1,
    termesLies: ['legato', 'dynamiques-musicales', 'mesure-musicale'],
  },

  {
    id: 'forme-musicale',
    nom: 'Forme musicale',
    alias: ['structure musicale', 'architecture musicale', 'forme AB', 'forme ABA', 'couplet-refrain'],
    disciplines: ['commun'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Organisation structurelle d'un morceau de musique définissant l'ordre, la répétition et le contraste de ses sections (AB, ABA, rondo, couplet-refrain…).",
    description: "La forme musicale est l'architecture d'un morceau. En comprendre la structure permet au danseur de l'anticiper et de construire une chorégraphie qui 'respire' avec elle.\n\nPrincipales formes :\n- **AB** : deux sections distinctes — idée A puis idée B\n- **ABA** (ternaire) : retour à A après un B contrastant — très courante dans le ballet et l'opéra\n- **Rondo** (ABACADA…) : retour régulier d'un refrain entre des épisodes variés\n- **Couplet-Refrain** : alternance entre des couplets (qui développent) et un refrain (qui revient)\n- **Thème et variations** : un thème est répété et transformé\n- **Fugue** : voix qui se succèdent en canon sur un même thème\n\nEn danse, la forme musicale suggère souvent la structure chorégraphique : les contrastes entre A et B peuvent se traduire en contrastes de qualité, d'espace ou d'énergie.",
    erreursCourantes: [
      "Ne pas écouter la forme avant de commencer à chorégraphier — et se retrouver en décalage avec la structure musicale.",
      "Appliquer une structure chorégraphique rigide qui ignore les changements de section.",
    ],
    difficulteInterne: 2,
    termesLies: ['phrase-musicale', 'motif-musical', 'cadence-harmonique'],
  },

  {
    id: 'motif-musical',
    nom: 'Motif musical',
    alias: ['motif', 'leitmotiv', 'cellule thématique', 'ostinato'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Plus petite unité musicale reconnaissable et significative — quelques notes ou un rythme caractéristique — servant de cellule de base à un développement musical plus large.",
    description: "Le motif est la 'brique de base' de la composition musicale. Depuis quelques notes, une œuvre entière peut se déployer.\n\nTypes de motifs :\n- **Motif mélodique** : succession de notes caractéristique (les 4 notes de la 5e Symphonie de Beethoven)\n- **Motif rythmique** : un pattern rythmique identifiable même sur une seule hauteur\n- **Leitmotiv** : motif associé à un personnage ou une idée, récurrent dans toute l'œuvre (Wagner, musiques de film)\n- **Ostinato** : motif répété exactement, en boucle, sur toute une section (Boléro de Ravel)\n\nEn danse :\n- Un **motif gestuel** est l'équivalent chorégraphique — une combinaison de mouvements identifiable qui revient et se transforme\n- Travailler sur un ostinato musical invite à explorer la variation dans la répétition\n- Entendre les leitmotivs d'une bande-son permet de placer les moments forts d'une chorégraphie",
    erreursCourantes: [
      "Confondre motif et thème — le thème est plus long, le motif est la cellule minimale.",
      "Ne pas entendre le retour des motifs et rater des occasions chorégraphiques.",
    ],
    difficulteInterne: 2,
    termesLies: ['forme-musicale', 'phrase-musicale', 'cadence-harmonique'],
  },

  {
    id: 'cadence-harmonique',
    nom: 'Cadence harmonique',
    alias: ['cadence', 'résolution', 'cadence parfaite', 'cadence imparfaite'],
    disciplines: ['commun'],
    categories: ['concepts'],
    definition: "Enchaînement d'accords qui conclut une phrase musicale, créant une sensation de résolution (cadence parfaite) ou d'ouverture (cadence imparfaite).",
    description: "La cadence est la ponctuation harmonique de la musique. Elle signale au danseur — et à l'auditeur — que quelque chose se termine ou s'ouvre.\n\n**Cadence parfaite** (V→I, dominante vers tonique) : résolution complète, sentiment de conclusion. En danse, c'est le moment pour poser un équilibre, marquer une pause, laisser le geste 'résonner'.\n\n**Cadence imparfaite** (I→V, tonique vers dominante) : la phrase 'reste en suspens', crée de l'attente. En danse, c'est souvent l'amorce d'une transition, d'un nouveau départ.\n\n**Dissonance et résolution :** avant la cadence, la musique crée souvent de la tension par des dissonances (notes qui 'ne s'accordent pas encore'). Cette tension appelle une résolution. Le danseur peut physiquement 'porter' cette tension — suspension, déséquilibre, geste inachevé — puis la 'relâcher' sur la résolution.\n\nL'entente de la cadence transforme le rapport à la musique : on n'attend plus la fin d'un compte, on **sent** quand la phrase arrive à sa conclusion.",
    erreursCourantes: [
      "Ignorer la cadence et enchaîner mécaniquement sans 'respirer' sur la résolution.",
      "Placer un moment fort du mouvement en plein milieu d'une cadence imparfaite — ça crée une impression de décalage.",
    ],
    difficulteInterne: 3,
    termesLies: ['phrase-musicale', 'forme-musicale', 'motif-musical'],
  },
]
