import type { Terme } from '../schema'

export const termesUnite6: Terme[] = [

  // ─── Isolations et segmentation ───────────────────────────────────────────

  {
    id: 'isolation',
    nom: 'Isolation corporelle',
    alias: ['isolations', 'isolation de tête', 'isolation des épaules', 'isolation des hanches'],
    disciplines: ['moderne', 'jazz'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Mouvement d'une seule partie du corps — tête, épaules, cage thoracique, bassin, genoux — pendant que le reste reste immobile. Technique fondamentale de la danse moderne et du jazz, héritée des danses afro-américaines.",
    description: "L'isolation est la capacité de faire bouger une partie du corps indépendamment des autres. C'est l'une des grandes différences avec la danse classique, où le corps est traité comme une unité.\n\n**Les zones d'isolation principales :**\n\n| Zone | Mouvements possibles |\n|------|---------------------|\n| **Tête** | Droite/gauche, haut/bas, rotation, cercle |\n| **Épaules** | Avant/arrière, haut/bas, rotation |\n| **Cage thoracique** | Droite/gauche, avant/arrière, rotation |\n| **Bassin / hanches** | Droite/gauche, avant/arrière, rotation, figure-8 |\n| **Genoux** | Avant/arrière isolé |\n\n**Origine africaine :**\nLes isolations viennent directement des traditions de danse d'Afrique de l'Ouest, où le **polycentrisme** — plusieurs centres du corps actifs et indépendants simultanément — est un principe fondamental. Les danses yoruba, mandingues et d'autres traditions ont apporté cette culture du corps aux Amériques.\n\n**Jack Cole** est le premier à systématiser les isolations dans un contexte de formation jazz-moderne (années 1940–1950). Bob Fosse les pousse à leur extrême dans ses chorégraphies de Broadway.\n\n**Qualité de l'isolation :**\nUne isolation est dite 'propre' quand seule la partie désignée bouge. Un épaule qui monte doit laisser la tête, l'autre épaule et le buste totalement immobiles.",
    erreursCourantes: [
      "Corps qui compense (si le bassin bouge à droite, l'épaule part à gauche involontairement).",
      "Amplitude insuffisante — l'isolation doit aller jusqu'au bout du mouvement.",
      "Raideur dans les zones supposées immobiles — tension parasite.",
    ],
    conseils: [
      "Pose les deux mains sur tes hanches pour les sentir. Maintenant, déplace uniquement la cage thoracique à droite — les hanches restent sous tes mains, immobiles. Si elles bougent, tu as perdu l'isolation.",
    ],
    difficulteInterne: 2,
    etymologie: "Du latin *insula* (île) → *insulare* → français 'isoler'. En danse, isoler une partie du corps c'est en faire une 'île' : un territoire indépendant qui bouge sans entraîner les continents voisins.",
    termesLies: ['polycentrisme', 'travail-bassin', 'succession-corporelle'],
  },

  {
    id: 'succession-corporelle',
    nom: 'Succession corporelle',
    alias: ['mouvement séquentiel', 'body wave', 'succession', 'ondulation séquentielle'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['qualites-de-mouvement'],
    definition: "Propagation séquentielle d'une impulsion à travers les segments du corps, chaque partie activant la suivante dans une chaîne continue — comme une vague qui parcourt le corps de bas en haut ou d'une extrémité à l'autre.",
    description: "La succession est le principe fondamental du mouvement fluide en danse moderne. Elle s'oppose au mouvement en 'bloc' (toutes les parties bougent ensemble).\n\n**Deux types de succession :**\n\n**Succession verticale (body wave) :**\n- Part des pieds (plié), remonte aux genoux, aux hanches, au buste, aux épaules, à la tête et aux bras\n- Comme une vague océanique\n- Peut aussi descendre (de la tête vers les pieds)\n\n**Succession horizontale :**\n- L'impulsion part d'un côté et parcourt le corps vers l'autre\n- Exemple : l'épaule droite s'avance, entraîne la cage, puis le bassin, puis la jambe\n\n**Succession dans le bras :**\n- L'épaule initie, le coude suit, le poignet suit, les doigts terminent\n- Ou dans l'autre sens : les doigts initient, le poignet suit...\n\n**Différence avec la spirale (U3) :**\n- La spirale ajoute une composante rotationnelle\n- La succession pure est une propagation dans un axe donné\n\n**Ce qui crée la beauté de la succession :**\nL'impression que le corps est habité par une onde — chaque segment répond au précédent avec un léger décalage.",
    erreursCourantes: [
      "Sauter des segments — la succession doit être continue et inclure toutes les articulations.",
      "Trop de délai entre chaque segment (la succession devient décousu).",
      "Isolation d'une partie sans propagation — commencer la succession mais ne pas la laisser voyager.",
    ],
    conseils: [
      "Imagine une vague qui rentre dans la mer. Elle commence aux pieds (plié léger), monte doucement à travers tes genoux, ton bassin, ta colonne, tes épaules — jusqu'à tes doigts qui terminent le voyage. Répète jusqu'à sentir l'eau dans ton corps.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolation', 'undulation', 'polycentrisme'],
  },

  {
    id: 'opposition-corps',
    nom: 'Opposition des membres',
    alias: ['opposition', 'contre-mouvement', 'opposition bras-jambes'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Principe selon lequel deux parties du corps s'étirent simultanément dans des directions opposées, créant une tension linéaire qui allonge et dynamise le mouvement. Fondement de l'équilibre en mouvement.",
    description: "L'opposition est ce qui empêche le corps de s'effondrer sur lui-même. Elle crée de l'espace, de la tension et de la longueur dans le mouvement.\n\n**Opposition naturelle dans la marche :**\nQuand la jambe droite avance, le bras gauche avance — c'est l'opposition naturelle du mouvement humain. La danse moderne amplifie et conscientise cette opposition.\n\n**Oppositions en danse moderne :**\n\n**Opposition verticale :**\n- Le sommet de la tête s'étire vers le haut\n- Le coccyx s'étire vers le bas\n- La colonne s'allonge entre les deux\n\n**Opposition latérale :**\n- Le bras droit s'étire à droite\n- Le bras gauche s'étire à gauche\n- Le corps s'élargit\n\n**Opposition diagonale (la plus courante en mouvement) :**\n- Le bras droit en avant / la jambe gauche en arrière\n- Le bras gauche en haut / le côté droit du bassin vers le bas\n\n**Dans la technique Limón :**\nLes oppositions sont extrêmes et expressives — le corps semble déchiré entre des forces contraires, ce qui crée une intensité dramatique.\n\n**Rôle fonctionnel :**\nLes oppositions stabilisent le corps en mouvement — elles créent un équilibre dynamique.",
    erreursCourantes: [
      "Étirer une direction sans activer l'opposition (le corps s'affaisse de l'autre côté).",
      "Oppositions trop timides — elles doivent être engagées, presque exagérées.",
    ],
    conseils: [
      "Prends conscience de l'opposition en marchant normalement. Exagère-la progressivement — bras de plus en plus loin, jambes de plus en plus étirées vers l'arrière. Tu fais de la danse moderne.",
    ],
    difficulteInterne: 2,
    termesLies: ['torsion', 'succession-corporelle', 'flat-back'],
  },

  // ─── Travail du buste ─────────────────────────────────────────────────────

  {
    id: 'flat-back',
    nom: 'Flat back',
    alias: ['dos plat', 'inclinaison dos plat', 'flat'],
    disciplines: ['moderne', 'jazz'],
    categories: ['concepts'],
    definition: "Position dans laquelle le torse s'incline depuis les hanches en maintenant la colonne parfaitement droite et horizontale, formant un angle de 90° avec les jambes. Terme anglais universellement utilisé dans les cours de danse moderne et jazz.",
    description: "Le flat back est l'une des positions les plus caractéristiques de la danse moderne — et des plus délicates à exécuter correctement.\n\n**Exécution :**\n1. Debout, pied à largeur des hanches\n2. Basculer le torse en avant depuis les hanches (pliage de hanche, pas de la taille)\n3. Le dos reste plat et parallèle au sol\n4. La tête prolonge la ligne du dos (regard vers le sol, légèrement en avant)\n5. Les bras peuvent être dans le prolongement du dos, vers le ciel ou en d'autres positions\n\n**Plié en flat back :**\nVariante debout avec genoux légèrement fléchis — permet de travailler plus profondément dans les ischio-jambiers.\n\n**Flat back latéral :**\nInclinaison latérale du buste (pas en avant mais sur le côté), en maintenant la colonne droite.\n\n**Différence flat back / contraction Graham :**\n- Flat back : colonne droite, inclinaison depuis les hanches\n- Contraction Graham : colonne arrondie en C, creusement du ventre\n\n**Ce que le flat back développe :**\n- Souplesse et conscience des ischio-jambiers\n- Force et stabilité lombaire\n- Conscience de l'axe de la colonne\n- Contrôle du basculement pelvien",
    erreursCourantes: [
      "Arrondir le dos (la colonne part en C au lieu de rester droite).",
      "Le plié de hanches depuis la taille (un niveau trop haut) — le pliage part des hanches.",
      "Tête qui tombe vers le bas au lieu de rester dans la ligne de la colonne.",
    ],
    securite: {
      risques: ["Tension lombo-sacrée si le dos n'est pas maintenu droite", "Douleur aux ischio-jambiers si forcé sans échauffement"],
      precautions: ["Échauffer les ischio-jambiers avant le flat back profond", "Contrôle du placement pelvien (pas de bascule excessive)"],
    },
    conseils: [
      "Imagine une planche sur ton dos. Elle te force à rester droit. Maintenant penche-toi en avant depuis tes hanches — la planche reste horizontale. Voilà le flat back.",
    ],
    etymologie: "De l'anglais 'flat' (plat, horizontal) et 'back' (dos). La dénomination anglaise s'est imposée mondialement dans les cours de danse moderne et jazz, même dans les pays francophones.",
    difficulteInterne: 2,
    termesLies: ['hinge', 'undulation', 'table-moderne'],
  },

  {
    id: 'hinge',
    nom: 'Hinge',
    alias: ['inclinaison Horton', 'inclinaison arrière', 'back hinge'],
    disciplines: ['moderne'],
    categories: ['concepts'],
    definition: "Inclinaison du buste en arrière depuis les genoux, le corps formant une ligne diagonale rigide de genoux à tête, comme une charnière. Position emblématique de la technique Lester Horton.",
    description: "Le hinge (anglais = charnière, gond) est une position spectaculaire et très exigeante de la technique Horton.\n\n**Exécution du hinge arrière :**\n1. Debout en première parallèle, genoux en légère flexion\n2. Depuis les genoux (pas depuis la taille), incliner tout le corps vers l'arrière\n3. La ligne genou-hanche-épaule-tête reste droite\n4. Les pieds restent à plat sur le sol\n5. Les bras peuvent s'ouvrir vers les côtés, vers le haut ou dans différentes positions\n\n**Amplitude possible :** De quelques degrés à une inclinaison quasi horizontale chez les pratiquants avancés.\n\n**Hinge latéral :**\nVariante où le corps s'incline sur le côté depuis les genoux — plus accessible que le hinge arrière.\n\n**Ce qui rend le hinge unique :**\n- Le corps forme une ligne d'un seul bloc (pas de brisure à la taille)\n- La source du mouvement est dans les genoux, pas dans le dos\n- Exige une grande force des quadriceps et une bonne conscience du gainage\n\n**Dans la technique Horton :**\nLester Horton (1906–1953) développe une technique centrée sur l'anatomie et la compréhension fonctionnelle du corps. Les hinges, les laterals et les flat backs sont ses positions signature.",
    erreursCourantes: [
      "S'incliner depuis la taille (cassure visible) au lieu des genoux (ligne droite).",
      "Genoux qui se poussent vers l'avant (valgus) pendant l'inclinaison.",
      "Revenir trop vite — contrôler la montée autant que la descente.",
    ],
    securite: {
      risques: ["Pression lombaire si le gainage est insuffisant", "Hyperpression des genoux si mal alignés"],
      precautions: ["Gainage abdominal actif pendant tout le hinge", "Genoux alignés dans l'axe des orteils (pas de valgus)"],
    },
    conseils: [
      "Débout contre un mur, les pieds à 30 cm du mur. Glisse ton dos vers le bas en gardant tout le corps droit. Ce contact avec le mur t'aide à sentir la ligne du hinge.",
    ],
    difficulteInterne: 3,
    etymologie: "De l'anglais 'hinge' (charnière, gond) — le corps s'ouvre comme une porte depuis les genoux.",
    termesLies: ['flat-back', 'technique-horton', 'lunge-moderne'],
  },

  {
    id: 'undulation',
    nom: 'Ondulation',
    alias: ['undulation', 'body wave verticale', 'vague corporelle', 'onde'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['qualites-de-mouvement'],
    definition: "Vague qui parcourt le corps verticalement (bas vers haut ou haut vers bas) en passant par toutes les articulations de façon séquentielle et fluide, créant une impression d'onde continue.",
    description: "L'ondulation est la succession dans sa forme la plus visible — une vague qui parcourt le corps de pied en cap.\n\n**Ondulation ascendante (la plus courante) :**\n1. Légère flexion des genoux (début de la vague)\n2. Le bassin s'avance légèrement\n3. Le bas du dos s'arrondit puis s'étend\n4. La cage thoracique s'avance\n5. Les épaules suivent\n6. La tête termine en extension légère\n\n**Ondulation descendante :**\nLe sens inverse — de la tête vers les pieds.\n\n**L'undulation de poitrine (chest roll) :**\nVersion réduite : la cage thoracique seule effectue une vague avant-arrière.\n\n**Utilisations dans les danses :**\n- Danse moderne : transition, qualité de mouvement, expression\n- Jazz : introduction à des phrases, lien entre pas\n- Danses du monde : présente dans les danses africaines, orientales\n- Pole dance : technique de base\n\n**Ce qui fait la beauté de l'ondulation :**\nL'impression de continuité — aucun segment ne s'arrête avant que le suivant commence.",
    erreursCourantes: [
      "Faire 3 segments (genoux, bassin, épaules) au lieu d'une vague continue à travers toute la colonne.",
      "Tête en avant trop tôt (avant les épaules).",
      "Amplitude trop petite pour être visible.",
    ],
    conseils: [
      "Allonge-toi sur le dos et fait une 'table' (genoux pliés). Décolle ton bassin du sol, puis le bas du dos, puis le haut du dos, vertèbre par vertèbre. Redescends dans l'ordre. C'est l'ondulation en position couchée — sentir d'abord, puis mettre debout.",
    ],
    etymologie: "Du latin *undula* (petite vague), de *unda* (onde, vague). L'ondulation reproduit dans le corps la propagation d'une vague — chaque segment s'active après le précédent, comme des rouleaux successifs.",
    difficulteInterne: 2,
    termesLies: ['succession-corporelle', 'flat-back', 'isolation'],
  },

  {
    id: 'table-moderne',
    nom: 'Position table',
    alias: ['flat back horizontal', 'table top', 'position horizontale'],
    disciplines: ['moderne'],
    categories: ['concepts'],
    definition: "Position dans laquelle le torse est incliné à 90°, dos plat et parallèle au sol, comme la surface d'une table. Peut s'effectuer debout (jambes tendues ou fléchies) ou à quatre appuis.",
    description: "La position table est le flat back poussé à son maximum — un angle de 90° entre les jambes et le torse.\n\n**Table debout :**\n- Flat back complet, buste horizontal, tête dans le prolongement du dos\n- Peut intégrer des bras tendus devant, sur les côtés ou vers le haut\n- Exige une grande souplesse et force des ischio-jambiers\n\n**Table à quatre appuis :**\n- Genoux et mains au sol\n- Le dos reste plat (ni creusé ni arrondi)\n- Mobilisation : on peut passer de la table à la contraction arrondie (dos de chat)\n- Exercice courant en début de cours de contemporain ou moderne\n\n**Utilisations chorégraphiques :**\n- Comme surface pour un partenaire (portés)\n- Comme position de départ d'une roulade ou d'une chute\n- Comme moment de suspension dans une phrase (l'image est forte)\n\n**La neutralité de la colonne en table :**\nLe dos n'est ni creusé (hyperlordose) ni arrondi (cyphose) — il est en position neutre, ce qui exige un engagement abdominal léger.",
    erreursCourantes: [
      "Dos creusé (lordose lombaire accentuée) au lieu d'être plat.",
      "Genoux hyperstendus en position table debout — légère flexion est acceptable.",
      "Tête qui pend vers le bas — elle reste dans l'axe de la colonne.",
    ],
    conseils: [
      "En table à quatre appuis : pose un verre imaginaire sur ton dos. Il ne doit pas glisser ni tomber. C'est la colonne neutre — ni trop creusée ni trop arrondie.",
    ],
    difficulteInterne: 2,
    termesLies: ['flat-back', 'floorwork', 'lunge-moderne'],
  },

  {
    id: 'lunge-moderne',
    nom: 'Lunge / Fente',
    alias: ['lunge', 'fente avant', 'fente basse', 'position de fente'],
    disciplines: ['moderne', 'jazz'],
    categories: ['pas'],
    definition: "Grand pas en avant ou sur le côté avec flexion profonde du genou avant, la jambe arrière tendue derrière. Position de force et d'ancrage très utilisée en danse moderne comme base de travail ou transition.",
    description: "Le lunge (de l'anglais) ou fente est une position fondamentale qui croise la danse, le fitness et les arts martiaux.\n\n**Lunge avant (le plus courant) :**\n- Grand pas en avant, genou avant en flexion à 90° (ou moins)\n- Jambe arrière tendue, talon décolé ou au sol selon l'exercice\n- Le genou avant ne dépasse pas les orteils\n- Corps vertical ou légèrement incliné\n\n**Lunge bas (deep lunge) :**\n- Le genou arrière touche ou frôle le sol\n- Plus grande amplitude de mouvement à la hanche\n- Étirement fort du psoas\n\n**Lunge latéral :**\n- Grand pas sur le côté, genou qui fléchit, autre jambe tendue\n- Étirement des adducteurs de la jambe tendue\n\n**Utilisations en danse moderne :**\n- Comme position d'arrivée après un déplacement\n- Comme position de départ pour un saut ou un tour\n- Dans les portés (le porteur en lunge reçoit le poids)\n- En combinaison avec flat back ou hinge pour des positions expressives\n\n**Qualité du lunge en danse :**\nContrairement au lunge sportif, le lunge en danse est aussi une position expressive — l'orientation du regard, des bras et du buste lui donne son sens artistique.",
    erreursCourantes: [
      "Genou qui dépasse les orteils (hyperpression du genou avant).",
      "Bassin qui tourne ou bascule (alignement perdu).",
      "Corps qui s'effondre vers l'avant — maintenir la verticalité du buste.",
    ],
    securite: {
      risques: ["Syndrome fémoro-patellaire (genou en valgus ou dépassement des orteils)", "Tension au psoas-iliaque si le lunge bas est forcé"],
      precautions: ["Aligner genou-2ème orteil", "Échauffer psoas et quadriceps avant les lunges profonds"],
    },
    conseils: [
      "En lunge, imagine un fil qui remonte depuis le sommet de ta tête. Il t'empêche de t'effondrer vers l'avant. Ton genou peut fléchir, mais ton buste reste droit et fier.",
    ],
    difficulteInterne: 1,
    termesLies: ['flat-back', 'table-moderne', 'hinge'],
  },

  {
    id: 'travail-bassin',
    nom: 'Travail du bassin',
    alias: ['isolation pelvienne', 'bassin', 'pelvis work', 'hip work'],
    disciplines: ['moderne', 'jazz'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Ensemble des mouvements d'isolation et de mobilisation du bassin (pelvis) — bascule avant-arrière, déplacement latéral, rotation, figure-8 — libérant une partie du corps souvent maintenue rigide dans la danse classique.",
    description: "En danse classique, le bassin est maintenu neutre et 'sous contrôle' en permanence. En danse moderne et jazz, le bassin devient un centre expressif actif.\n\n**Les axes du bassin :**\n\n**Bascule avant-arrière (antéversion/rétroversion) :**\n- Antéversion : le bas du dos se creuse (bassin bascule en avant)\n- Rétroversion : le bas du dos s'arrondit (bassin bascule en arrière)\n\n**Déplacement latéral :**\n- Le bassin glisse à droite ou à gauche sans incliner le buste\n- Isolation pure\n\n**Rotation du bassin :**\n- Le bassin tourne dans le plan horizontal\n- Les épaules restent face (opposition)\n\n**La figure-8 (huit du bassin) :**\n- Combinaison de déplacement latéral et de bascule avant-arrière\n- Trace un 8 dans l'espace\n- Centrale dans les danses orientales (danse du ventre) et présente en jazz\n\n**Origines culturelles :**\nLe travail du bassin vient des danses africaines et afro-caribéennes. Son intégration en danse moderne (notamment par Martha Graham) et en jazz est un acte de reconnaissance de ces héritages.",
    erreursCourantes: [
      "Compenser le déplacement du bassin avec le buste (qui doit rester immobile).",
      "Retenir la respiration — le travail du bassin s'accompagne naturellement de la respiration.",
      "Blocage psychologique face à un mouvement jugé 'trop sensuel' — neutraliser l'affect pour étudier le mouvement.",
    ],
    conseils: [
      "Pour isoler le bassin : assieds-toi sur une chaise. Tu ne peux bouger QUE le bassin — le reste est limité par le dossier et le siège. C'est l'isolation pelvienne pure. Ensuite, retrouve cette même isolation debout.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolation', 'polycentrisme', 'undulation'],
  },

  {
    id: 'polycentrisme',
    nom: 'Polycentrisme',
    alias: ['corps polycentrique', 'multi-centrage', 'multiple centers'],
    disciplines: ['moderne', 'jazz'],
    categories: ['concepts'],
    definition: "Principe de danse dans lequel plusieurs parties du corps agissent simultanément comme centres autonomes de mouvement, chacune avec sa propre énergie et direction. Héritage des traditions de danse africaine.",
    description: "En opposition au **monocentrisme** du ballet classique (où tout le corps rayonne depuis un axe central vertical unique), le polycentrisme propose que le bassin, la tête, la cage thoracique et les membres peuvent chacun être un centre de mouvement indépendant et simultané.\n\n**Origines africaines :**\nLes danses d'Afrique de l'Ouest (yoruba, ewe, mandingue) sont polycentriques par nature — plusieurs percussions, plusieurs centres de corps, plusieurs rythmes simultanés s'interagissent. Ces danses ont voyagé aux Amériques avec la traite et ont influencé toute la danse afro-américaine.\n\n**Polycentrisme et polyrythmie :**\nLe corps polycentrique répond souvent à une musique polyrythmique — les épaules suivent un rythme, le bassin un autre, les pieds un troisième. C'est la base du groove en jazz.\n\n**Dans la pratique :**\n- Bassin qui bouge indépendamment de la cage thoracique\n- Épaules et tête en opposition avec le bas du corps\n- Bras qui ont leur propre phrase pendant que les jambes en font une autre\n\n**Dans la technique Horton :**\nLa technique Horton (pédagogie pour des danseurs afro-américains à Los Angeles) intègre explicitement la pensée polycentrique.",
    erreursCourantes: [
      "Perdre la coordination (chaque centre doit avoir sa logique même en liberté).",
      "Polycentrisme = désordre : non — c'est une organisation complexe, pas un chaos.",
    ],
    conseils: [
      "Commence avec deux centres : fais battre tes mains à un rythme régulier. Pendant ce temps, fais bouger ton bassin dans un rythme différent. C'est le début du polycentrisme — deux centres, deux rythmes, un seul corps.",
    ],
    etymologie: "Du grec *polus* (plusieurs) et *kentron* (centre, point central). Le polycentrisme dansé est l'opposé du monocentrisme ballet : plusieurs centres du corps actifs et indépendants en même temps, héritage direct des danses d'Afrique de l'Ouest.",
    difficulteInterne: 3,
    termesLies: ['isolation', 'travail-bassin', 'succession-corporelle'],
  },

  // ─── Techniques modernes ──────────────────────────────────────────────────

  {
    id: 'technique-horton',
    nom: 'Technique Horton',
    alias: ['Horton technique', 'Lester Horton', 'technique danse Horton'],
    disciplines: ['moderne'],
    categories: ['culture-histoire'],
    definition: "Technique de danse moderne développée par Lester Horton (1906–1953) à Los Angeles, fondée sur l'anatomie fonctionnelle, l'amplitude maximale du mouvement et une attention particulière au développement physique complet du danseur.",
    description: "**Lester Horton** est une figure particulière de la danse américaine du XXe siècle — souvent sous-estimé comparé à Graham ou Humphrey, mais dont l'influence est immense via ses élèves.\n\n**Ses élèves les plus célèbres :**\n- **Alvin Ailey** — fondateur de l'Alvin Ailey American Dance Theater, il répand la technique Horton dans le monde entier\n- **Carmen de Lavallade** — ballerine et chorégraphe afro-américaine\n- **Frank Cavens** et **Joyce Trisler**\n\n**Principes de la technique Horton :**\n- **Anatomie d'abord** : chaque exercice est justifié par une compréhension anatomique précise\n- **Corps complet** : travail de toutes les parties du corps dans toutes les directions\n- **Amplitude maximale** : chercher les limites réelles du mouvement\n- **Inclusivité** : Horton acceptait des danseurs de toutes origines ethniques à une époque de ségrégation\n\n**Vocabulaire signature :**\nHinges, flat backs, T-positions, latéral en extension, progressions longues à travers la salle.\n\n**Héritage :**\nAlvin Ailey a intégré la technique Horton au répertoire de sa compagnie (notamment dans *Revelations*, 1960) — faisant de la technique Horton la base de la formation de milliers de danseurs dans le monde.",
    erreursCourantes: [
      "Confondre la technique Horton avec la technique Graham — deux approches très différentes malgré une époque commune.",
    ],
    conseils: [
      "Cherche des vidéos d'Alvin Ailey American Dance Theater en cours technique. Tu verras la technique Horton vivante — ses flat backs, ses hinges, ses T-positions caractéristiques.",
    ],
    difficulteInterne: 2,
    termesLies: ['flat-back', 'hinge', 'isolation', 'polycentrisme'],
  },

  {
    id: 'technique-cunningham',
    nom: 'Technique Cunningham',
    alias: ['Merce Cunningham', 'technique néoclassique contemporaine', 'Cunningham'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['culture-histoire'],
    definition: "Technique de danse développée par Merce Cunningham (1919–2009), qui dissocie le mouvement de la narrativité et de l'expressivité émotionnelle, traite le corps comme une architecture dans l'espace et le temps, et utilise le hasard comme outil de composition.",
    description: "**Merce Cunningham** (1919–2009) est l'une des figures les plus radicales de la danse du XXe siècle. Ancien danseur de Martha Graham, il rompt avec ses principes pour développer une esthétique radicalement différente.\n\n**Principes fondamentaux :**\n\n**1. Dissociation de la danse et de la musique :**\nLa danse et la musique se déroulent simultanément mais de façon indépendante — elles coexistent sans synchronisation. Cunningham travaille avec John Cage qui compose la musique séparément.\n\n**2. Dissociation de la danse et du sens :**\nLe mouvement n'a pas besoin d'exprimer une émotion ou de raconter une histoire. Il *est* — dans l'espace et le temps.\n\n**3. L'espace comme champ égal :**\nIl n'y a pas de centre de scène privilégié — tous les points de l'espace ont la même valeur.\n\n**4. Le hasard comme outil de composition :**\nCunningham utilise des dés ou des cartes pour décider de l'ordre des séquences, des formations, des transitions.\n\n**Caractéristiques techniques :**\n- Colonne mobile dans toutes les directions (héritage de Graham mais libérée)\n- Jambes dans l'esprit classique (virtuosité technique)\n- Tête active et indépendante\n- Vitesse et précision\n\n**Le MCDC (Merce Cunningham Dance Company) :**\nFerme en 2011, deux ans après la mort de Cunningham, en accord avec sa volonté.",
    erreursCourantes: [
      "Croire que la technique Cunningham est 'froide' ou sans expression — la neutralité est elle-même un choix expressif.",
    ],
    conseils: [
      "Regarde *Rainforest* (1968) ou *BIPED* (1999) du MCDC — deux œuvres qui montrent à quel point l'absence de narrativité peut être fascinante.",
    ],
    difficulteInterne: 3,
    termesLies: ['phrase-mouvement', 'contraction-release', 'technique-horton'],
  },

  {
    id: 'technique-limon',
    nom: 'Technique Limón',
    alias: ['José Limón', 'technique Humphrey-Limón', 'Limon technique'],
    disciplines: ['moderne'],
    categories: ['culture-histoire'],
    definition: "Technique de danse développée par José Limón (1908–1972) dans l'héritage de Doris Humphrey, basée sur l'utilisation du poids, du swing, des successions et des oppositions pour créer un mouvement profondément humain et dramatique.",
    description: "**José Limón** (1908–1972), d'origine mexicaine-américaine, développe sous la direction de Doris Humphrey une technique qui devient l'une des plus enseignées dans les universités américaines.\n\n**Les principes de la technique Limón :**\n\n**Poids et gravité :**\nLe corps utilise réellement son poids — pas d'illusion de légèreté. Les bras tombent, les jambes s'abandonnent, la tête est lourde.\n\n**Swing :**\nLes membres oscillent en pendule — gravité + élan + suspension. Le swing Limón est ample et expressif.\n\n**Succession :**\nL'impulsion voyage à travers le corps segment par segment — chaque partie initie la suivante.\n\n**Chute et récupération :**\nHéritage direct de Humphrey — le mouvement vit entre l'équilibre et la chute.\n\n**Oppression et libération :**\nLes œuvres de Limón traitent souvent de la condition humaine, de la liberté, de la résistance — son Héritage mexicain et afro-américain nourrit sa vision.\n\n**Grandes œuvres :**\n- *There is a Time* (1956) — basé sur l'Ecclésiaste\n- *Missa Brevis* (1958) — en hommage aux victimes de guerre\n- *A Choreographic Offering* (1964) — hommage à Doris Humphrey\n\n**Aujourd'hui :**\nLa Limon Dance Company (New York) continue de développer cette technique.",
    erreursCourantes: [
      "Simuler le poids au lieu de le donner vraiment — la technique Limón exige un abandon physique réel.",
    ],
    conseils: [
      "Regarde *There is a Time* (1956) de José Limón — les swings des bras, le poids des torses, les chutes et récupérations. C'est la technique Limón dans toute sa richesse dramatique.",
    ],
    difficulteInterne: 3,
    termesLies: ['fall-recovery', 'poids-abandon', 'suspension', 'opposition-corps'],
  },

  // ─── Éléments de composition ──────────────────────────────────────────────

  {
    id: 'canon',
    nom: 'Canon',
    alias: ['canon chorégraphique', 'décalage temporel', 'round'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['concepts'],
    definition: "Procédé de composition et d'interprétation dans lequel plusieurs danseurs ou groupes réalisent la même phrase de mouvement à des moments différents, créant un effet de décalage temporel — comme le canon musical.",
    description: "Le canon est l'un des procédés compositionnels les plus utilisés — et les plus efficaces — en danse moderne et contemporaine.\n\n**Principe :**\nComme le canon en musique (Frère Jacques, par exemple), le canon en danse consiste à reprendre la même phrase avec un décalage d'un ou plusieurs temps.\n\n**Types de canon :**\n\n**Canon strict :** Chaque danseur commence à un temps précis après le précédent (ex : tous les 8 temps)\n\n**Canon libre :** Décalages variables\n\n**Canon en miroir :** La phrase est aussi retournée (droite/gauche ou avant/arrière)\n\n**Canon en augmentation/diminution :** La phrase est ralentie ou accélérée chez certains danseurs\n\n**Effets visuels du canon :**\n- Crée une impression de **vague** qui traverse le groupe\n- Met en valeur la **structure** de la phrase (on la voit plusieurs fois)\n- Permet de remplir l'espace avec peu de matériel chorégraphique\n- Crée une **conversation** entre les danseurs\n\n**Dans le répertoire :**\nMerce Cunningham, Anne Teresa De Keersmaeker et Steve Reich utilisent massivement le canon. *Fase* de De Keersmaeker/Reich (1982) est un chef-d'œuvre de canon en danse.",
    erreursCourantes: [
      "Perdre le décalage en s'ajustant sur les autres danseurs (l'oreille musicale prime sur le regard).",
      "Canon trop court — le canon demande une phrase suffisamment longue pour que le décalage soit perceptible.",
    ],
    conseils: [
      "À deux : apprenez la même phrase de 8 temps. Maintenant, B commence quand A est à son temps 5. Vous êtes à 4 temps de décalage. Observez comment la même phrase devient deux choses différentes — c'est la magie du canon.",
    ],
    etymologie: "Du grec *kanon* (règle, mesure, baguette droite) via le latin. Emprunté à la terminologie musicale : en musique, le canon est une mélodie imitée par une voix en décalage — même principe transposé au mouvement.",
    difficulteInterne: 3,
    termesLies: ['unisson', 'phrase-mouvement'],
  },

  {
    id: 'unisson',
    nom: 'Unisson',
    alias: ['mouvement en unisson', 'ensemble synchronisé'],
    disciplines: ['moderne', 'jazz'],
    categories: ['concepts'],
    definition: "Procédé de composition dans lequel plusieurs danseurs réalisent exactement le même mouvement au même moment, créant un effet de puissance collective. L'unisson parfait exige une écoute musicale commune et une synchronisation totale.",
    description: "L'unisson est l'outil compositonnel le plus immédiatement lisible — et le plus exigeant en termes d'interprétation collective.\n\n**Ce qui rend l'unisson difficile :**\n- Chaque danseur a son propre timing naturel\n- Les amplitudes de mouvement varient selon les corps\n- L'écoute musicale doit être collective (tous respirent ensemble)\n- La qualité de mouvement doit être homogène (pas seulement la forme)\n\n**Unisson vs uniformité :**\n- L'uniformité vise la ressemblance mécanique des formes\n- L'unisson aspire à une **respiration commune** — l'énergie voyage au même moment dans tous les corps\n\n**L'effet de l'unisson :**\n- Puissance, force collective\n- Peut être oppressant (régimes, corps-de-ballet militaire)\n- Peut être libérateur (la synchronisation comme joie partagée)\n\n**Usage en composition :**\nL'unisson est souvent utilisé par contraste avec le canon, les solos ou les formations libres — le passage à l'unisson est un moment fort.",
    erreursCourantes: [
      "Regarder les autres pour se synchroniser (ça crée le retard). Il faut écouter la musique ensemble.",
      "Unisson de forme mais pas d'énergie — les corps font le même geste mais l'intention est différente.",
    ],
    conseils: [
      "En groupe : fermez tous les yeux. Écoutez la musique ensemble. Sentez le moment où vous voulez tous bouger en même temps. Ouvrez les yeux et bougez. C'est l'unisson qui vient de l'intérieur.",
    ],
    difficulteInterne: 2,
    termesLies: ['canon', 'phrase-mouvement'],
  },

  {
    id: 'marche-moderne',
    nom: 'Marche dansée',
    alias: ['marche scénique', 'walk', 'travel', 'déplacement dansé'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['deplacements'],
    definition: "Utilisation artistique de la marche comme matériau chorégraphique — la marche quotidienne transformée en mouvement de danse par l'intention, la qualité et la conscience corporelle.",
    description: "La marche est l'une des grandes révolutions de la danse postmoderne (Judson Church, années 1960). Yvonne Rainer et Steve Paxton l'ont érigée en acte artistique en soi — et cette décision a changé la danse pour toujours.\n\n**La marche ordinaire :**\nRegarder comment les gens marchent dans la rue — leur rythme naturel, leur posture, leur dynamique — c'est du matériau chorégraphique brut.\n\n**La marche scénique (technique) :**\nLa marche sur scène nécessite des adaptations :\n- Posture droite sans être rigide\n- Regard vers le public (pas vers le sol)\n- Talon-pointe ou pointe-talon selon la qualité voulue\n- Bras naturellement opposés aux jambes\n- Projection de l'énergie vers l'avant\n\n**Qualités de marche en danse moderne :**\n- Marche avec poids (ancrée, lourde)\n- Marche suspendue (légère, portée par l'élan)\n- Marche rythmée (avec accents)\n- Marche avec succession (vague dans le corps à chaque pas)\n\n**La marche comme composition :**\nSimone Forti, Trisha Brown : leurs 'pièces de déplacement' n'utilisent que la marche et le regard comme matériau.",
    erreursCourantes: [
      "Marcher en regardant le sol (perd le contact avec le public et l'espace).",
      "Marcher 'en ballet' (orteils en dehors, jambes très tendues) en cours contemporain — la marche parallèle est la norme.",
    ],
    conseils: [
      "Marche normalement. Maintenant, ajoute une intention : tu marches vers quelqu'un que tu aimes. Sens comme ça change. Maintenant, tu marches vers un danger. Observe. La marche dansée, c'est ça — une marche avec une intention qui la traverse.",
    ],
    difficulteInterne: 1,
    termesLies: ['phrase-mouvement', 'contraction-release'],
  },

  {
    id: 'elevation-moderne',
    nom: 'Élévation en danse moderne',
    alias: ['saut en danse moderne', 'jump', 'leap moderne'],
    disciplines: ['moderne'],
    categories: ['sauts'],
    definition: "Les sauts en danse moderne se distinguent des sauts classiques par leur rapport à la gravité (on entend l'atterrissage, le corps pèse), leur départ (souvent pieds parallèles) et leur qualité (ancrage dans le sol autant qu'élévation).",
    description: "En ballet classique, les sauts visent l'illusion de légèreté — silence à l'atterrissage, élévation maximale, turn-out maintenu. En danse moderne, les sauts ont une autre philosophie.\n\n**Caractéristiques des sauts modernes :**\n\n**Départ :** Souvent en parallèle (pieds parallèles) plutôt qu'en dehors\n**Qualité :** Le sol est engagé — on utilise son poids pour rebondir\n**Atterrissage :** Peut être sonore (frappe intentionnelle du sol)\n**Forme :** Le corps peut être non aligné, tordre en l'air, avoir des niveaux différents\n**Expression :** Le saut peut exprimer la lourdeur autant que la légèreté\n\n**Types de sauts modernes :**\n- **Leap (grand jeté moderne)** : grand saut d'une jambe sur l'autre, corps souvent horizontal\n- **Jump** : saut sur deux jambes et retour sur deux jambes\n- **Hop** : saut sur une jambe et retour sur la même jambe\n- **Spring** : rebond léger, qualité de ballon\n\n**Dans la technique Limón :**\nLes sauts sont chargés — le corps tombe vers le sol autant qu'il s'élève. L'atterrissage est un moment de chute récupérée.",
    erreursCourantes: [
      "Appliquer l'esthétique du ballet (légèreté absolue, silence) à des sauts modernes qui doivent parfois avoir du poids.",
      "Ne pas plier en réception — les genoux absorbent toujours.",
    ],
    conseils: [
      "Essaie deux fois le même saut : une fois en cherchant à t'élever le plus haut possible. Une fois en cherchant à t'ancrer dans le sol avant de partir. Le deuxième devrait te propulser plus haut. C'est le principe du rebond moderne.",
    ],
    difficulteInterne: 2,
    termesLies: ['fall-recovery', 'rebond-swing', 'suspension'],
  },

  {
    id: 'contraction-moderne',
    nom: 'Contraction (Graham)',
    alias: ['contraction Graham', 'contraction abdominale moderne', 'contraction release Graham'],
    disciplines: ['moderne'],
    categories: ['qualites-de-mouvement', 'positions'],
    definition: "Mouvement fondamental de la technique Graham — flexion de la colonne lombaire vers l'intérieur (creuser le ventre vers la colonne), accompagnée d'une rétroversion du bassin — qui exprime la contraction émotionnelle et physique intérieure.",
    description: "La contraction est au cœur de toute la technique Graham. C'est plus qu'un exercice — c'est une philosophie du corps.\n\n**Ce qu'est la contraction :**\nLe ventre se creuse vers la colonne (contraction des abdominaux profonds). Le bassin bascule vers l'arrière (rétroversion). La colonne lombaire se courbe vers l'intérieur. Le sternum descend légèrement. Ce n'est pas un effondrement — c'est une action musculaire active.\n\n**Contraction vs effondrement :**\nL'erreur classique est de confondre la contraction avec un affaissement du buste. La contraction Graham est toujours active — le dos est fort même dans sa courbure.\n\n**La release :**\nLa contraction ne se comprend qu'avec sa release (extension) — le balancier entre la contraction (intérieur, douleur, terre) et la release (ouverture, ciel, liberté). C'est le dialogue fondamental de la technique Graham.\n\n**Où l'utiliser :**\n- Assise au sol (base de la technique au sol)\n- Debout (version différente, moins prononcée)\n- Dans les enchaînements et les grandes phrases\n\n**Origine symbolique chez Graham :**\nLa contraction représente l'intériorité — la matrice, la terre, la douleur mais aussi la source. La release est l'ouverture vers l'extérieur.",
    erreursCourantes: [
      "Effondrer les épaules vers l'avant au lieu de contracter les abdominaux — la différence est entre passivité et action.",
      "Perdre la hauteur du buste — même en contraction, la colonne reste active verticalement.",
    ],
    conseils: [
      "Assieds-toi jambes tendues devant toi. Expire à fond et imagine que ton nombril veut toucher ta colonne. Sens le bas du dos qui s'arrondit, le bassin qui bascule. C'est la contraction. Maintenant inspire et ouvre — c'est la release. Le dialogue entre les deux, c'est la technique Graham.",
    ],
    etymologie: "De l'anglais *contraction*, du latin *contractio* (resserrement). Martha Graham a codifié ce terme pour désigner ce mouvement spécifique dans sa technique dans les années 1920–1930.",
    difficulteInterne: 2,
    termesLies: ['contraction-release', 'technique-horton', 'flat-back'],
  },

  {
    id: 'swing-moderne',
    nom: 'Swing (pendule) en danse moderne',
    alias: ['swing Humphrey', 'swing Limón', 'pendule en danse moderne', 'oscillation corporelle'],
    disciplines: ['moderne'],
    categories: ['qualites-de-mouvement'],
    definition: "Mouvement oscillatoire d'un membre ou du corps entier qui utilise la gravité et l'élan — comme un pendule qui descend par gravité, est propulsé par l'élan et monte par inertie jusqu'à une suspension — principe central des techniques Humphrey et Limón.",
    description: "Le swing est la réponse de Doris Humphrey et José Limón à la déconnexion du sol de la danse classique. Utiliser la gravité, pas la combattre — laisser le poids faire le travail.\n\n**La courbe du swing :**\n1. **La chute** (fall) : la gravité tire le membre vers le bas — le mouvement commence\n2. **L'élan** (momentum) : la vitesse augmente au passage bas du pendule\n3. **La montée** (recovery) : l'élan porte le membre vers le haut\n4. **La suspension** (suspension) : le moment de flottement avant la chute suivante\n\n**Types de swing :**\n- **Swing de bras** : le bras oscille devant-derrière ou latéralement\n- **Swing de jambe** : la jambe oscille depuis la hanche\n- **Swing du buste** : le buste entier oscille dans un plan sagittal ou latéral\n- **Grand swing** : le corps entier part en arc depuis les pieds\n\n**Ce qui fait la qualité du swing :**\nLaisse tomber vraiment — ne contrôle pas le mouvement descendant. Puis laisse l'élan faire le travail dans la montée. Un swing trop contrôlé perd son caractère physique essentiel.\n\n**Connection avec la Terre :**\nLe swing est une façon d'honorer la gravité — de reconnaître que le sol est là et que le corps y appartient.",
    erreursCourantes: [
      "Contrôler la descente (résister à la gravité) — laisser tomber est la partie la plus difficile pour les danseurs formés en classique.",
      "Swing sans suspension — l'arrêt en haut du pendule est essentiel à l'architecture du mouvement.",
    ],
    conseils: [
      "Laisse ton bras tomber depuis l'épaule — complètement, sans résistance. Sens le poids. Maintenant laisse-le se balancer d'avant en arrière de lui-même, avec juste assez d'élan pour que la suspension en haut soit naturelle. Ne l'aide pas. C'est ça, le swing.",
    ],
    difficulteInterne: 2,
    termesLies: ['fall-recovery', 'suspension', 'rebond-swing', 'poids-abandon', 'technique-limon'],
  },

  {
    id: 'respiration-moderne',
    nom: 'Respiration et initiation du mouvement',
    alias: ['breath-initiated movement', 'mouvement par la respiration', 'souffle et danse'],
    disciplines: ['moderne'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Utilisation de la respiration comme point d'initiation et moteur du mouvement — l'inspire et l'expire déclenchent, amplifient ou organisent la qualité du geste — pratique centrale dans de nombreuses techniques modernes et approches somatiques.",
    description: "Utiliser la respiration comme organisateur du mouvement, c'est une idée simple — et révolutionnaire. Beaucoup de danseurs apprennent les formes d'abord, et la respiration vient après. En danse moderne, c'est souvent l'inverse.\n\n**Pourquoi la respiration change le mouvement :**\nL'inspire gonfle la cage thoracique, éloigne les côtes, lève le sternum — ce qui crée naturellement des possibilités d'expansion, d'ouverture, de montée. L'expire vide, rapproche les côtes, baisse le sternum — ce qui crée des possibilités de descente, de contraction, de repli.\n\n**Utilisation technique :**\n- **Inspire = expansion** : ouvrir les bras, se lever, s'allonger\n- **Expire = descente** : plier, descendre, contacter\n- **Rétention** = suspension dans le mouvement\n\n**La respiration comme outil d'interprétation :**\nDeux danseurs peuvent exécuter la même phrase avec les mêmes formes mais une respiration différente — le résultat est radicalement différent. La respiration qualifie le mouvement de l'intérieur.\n\n**Dans les pratiques somatiques :**\nBody-Mind Centering, Feldenkrais, Alexander Technique — toutes ces approches utilisent la respiration comme chemin d'accès à un mouvement plus organique et moins mécanique.",
    erreursCourantes: [
      "Retenir sa respiration lors des moments difficiles techniquement — ça crée de la tension et prive le mouvement de vie.",
      "Respirer en rythme avec la musique au lieu de laisser la respiration avoir son propre timing.",
    ],
    conseils: [
      "Choisis une phrase que tu connais bien. Exécute-la en inspirant sur la première moitié et en expirant sur la seconde. Puis fais l'inverse. Puis laisse ta respiration décider elle-même. Tu verras trois versions très différentes de la même phrase — et tu comprendras ce que la respiration fait au mouvement.",
    ],
    difficulteInterne: 2,
    termesLies: ['contraction-release', 'swing-moderne', 'suspension', 'qualites-de-mouvement'],
  },
]
