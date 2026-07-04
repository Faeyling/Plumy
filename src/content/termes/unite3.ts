import type { Terme } from '../schema'

export const termesUnite3: Terme[] = [

  // ─── Structure de la classe ───────────────────────────────────────────────

  {
    id: 'barre-classique',
    nom: 'La barre',
    alias: ['exercices à la barre', 'travail de barre'],
    disciplines: ['classique'],
    categories: ['concepts'],
    definition: "Première partie d'un cours de danse classique, où les danseurs effectuent des exercices en tenant une barre fixe pour développer l'alignement, la force et la souplesse.",
    description: "La barre est l'espace d'échauffement et de travail fondamental du danseur classique. Tenir la barre d'une main (parfois des deux en débutant) permet de se concentrer sur le travail des jambes et du buste sans gérer l'équilibre en permanence.\n\n**Structure classique d'une barre :**\n1. Pliés (grande et demi-pliés dans toutes les positions)\n2. Battements tendus\n3. Battements dégagés / jetés\n4. Ronds de jambe par terre\n5. Battements fondus\n6. Battements frappés\n7. Ronds de jambe en l'air\n8. Développés / adage à la barre\n9. Grands battements\n\nChaque exercice se fait des deux côtés. La progression suit une logique physiologique : du grand au petit, du lent au rapide, du simple au complexe.\n\n**Durée typique :** 30 à 45 minutes sur une heure de cours.",
    erreursCourantes: [
      "S'appuyer trop fort sur la barre — la main doit effleurer, pas s'accrocher.",
      "Travailler face à la barre en cours avancé (signe de déséquilibre).",
      "Négliger la barre pour aller vite au milieu — c'est là que se construisent les fondations.",
    ],
    conseils: [
      "Imagine que la barre est en verre et que tu ne dois pas la casser. Ta main est légère — la stabilité vient du centre.",
    ],
    difficulteInterne: 1,
    termesLies: ['milieu-classique', 'plie', 'tendu', 'degage', 'grand-battement'],
  },

  {
    id: 'milieu-classique',
    nom: 'Le milieu',
    alias: ['travail au milieu', 'centre'],
    disciplines: ['classique'],
    categories: ['concepts'],
    definition: "Deuxième partie d'un cours de danse classique, où les exercices s'effectuent sans appui, au centre de la salle, sollicitant l'équilibre et la coordination.",
    description: "Le milieu reprend les exercices de la barre mais sans appui. Le danseur doit trouver sa propre stabilité, ce qui engage davantage le gainage du centre et l'épaulement.\n\n**Structure typique du milieu :**\n- **Adage** : travail lent, développés, arabesques, attitudes, équilibres\n- **Pirouettes** : tours sur place en différentes positions\n- **Petit allegro** : petits sauts, changements de pied, pas de bourrée, glissades\n- **Grand allegro** : grands sauts, grand jeté, tours enchaînés\n- **Exercices sur pointes** (pour les femmes en niveau avancé)\n\nLa progression barre → milieu est fondamentale : on ne saute pas les étapes.",
    erreursCourantes: [
      "Reproduire exactement les bras de la barre au milieu — les bras doivent s'ouvrir et s'engager en épaulement.",
      "Perdre l'axe en passant du côté barre au milieu — la barre ne doit pas être une béquille mentale.",
    ],
    conseils: [
      "Au milieu, ton regard est ton ancre. Fixe un point à hauteur des yeux avant de bouger.",
    ],
    difficulteInterne: 1,
    termesLies: ['barre-classique', 'adage', 'allegro', 'epaulement'],
  },

  {
    id: 'en-dehors-en-dedans',
    nom: 'En dehors / en dedans',
    alias: ['rotation externe', 'rotation interne', 'dehors', 'dedans'],
    disciplines: ['classique'],
    categories: ['concepts'],
    definition: "Direction de rotation d'un mouvement : en dehors signifie vers l'extérieur (sens anti-horaire pour la jambe droite), en dedans vers l'intérieur (sens horaire pour la jambe droite).",
    description: "Cette distinction s'applique à presque tous les mouvements du vocabulaire classique — ronds de jambe, pirouettes, tours, jetés.\n\n**En dehors** (en anglais : *outward*) :\n- Jambe qui s'ouvre vers l'extérieur\n- Pirouette qui tourne vers la jambe de travail\n- Direction « naturelle » pour la plupart des mouvements\n\n**En dedans** (en anglais : *inward*) :\n- Jambe qui croise vers l'intérieur\n- Pirouette qui tourne vers la jambe d'appui\n- Souvent plus difficile à maîtriser\n\nLa notion est liée au **turn-out** (rotation externe des hanches) : danser en dehors, c'est maximiser cette rotation. Danser en dedans, c'est parfois la réduire.",
    erreursCourantes: [
      "Confondre la direction du mouvement (en dehors) avec la rotation des hanches (turn-out) — ce sont deux notions liées mais distinctes.",
      "En pirouette en dehors, oublier que c'est la jambe de travail qui initie la rotation.",
    ],
    conseils: [
      "Pour retenir : en dehors = vers l'extérieur, comme si tu voulais montrer la semelle de ta chaussure au public.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'dehors' (outside) et 'dedans' (inside) — termes directionnels simples devenus technicisés en danse classique.",
    termesLies: ['turn-out', 'pirouette', 'rond-de-jambe'],
  },

  // ─── Positions ─────────────────────────────────────────────────────────────

  {
    id: 'cinq-positions-pieds',
    nom: 'Les cinq positions des pieds',
    alias: ['5 positions', 'positions des pieds'],
    disciplines: ['classique'],
    categories: ['positions'],
    definition: "Cinq positions de base codifiées par Pierre Beauchamp au XVIIe siècle, dans lesquelles les pieds sont placés en rotation externe (turn-out), servant de point de départ et d'arrivée à la quasi-totalité des mouvements classiques.",
    description: "Ces cinq positions sont la grammaire de la danse classique. Toute phrase chorégraphique part et revient à l'une d'elles.\n\n| Position | Description | Usage |\n|----------|-------------|-------|\n| **1ère** | Talons joints, pointes vers l'extérieur (idéal 180°) | Début de nombreux exercices |\n| **2ème** | Pieds écartés d'un pied de largeur, même ouverture | Pliés, grands pliés |\n| **3ème** | Un pied devant l'autre, talon du pied avant au milieu de l'autre | Intermédiaire (peu utilisée en avancé) |\n| **4ème** | Pieds en avant l'un de l'autre, écartés d'un pied | Préparation aux pirouettes |\n| **5ème** | Pieds croisés, talon du pied avant contre orteils de l'autre | Position principale de départ et d'arrivée |\n\n**Ouverture idéale :** 180° (pointes opposées). En réalité, l'ouverture dépend de la rotation naturelle des hanches de chaque danseur — forcer au-delà est dangereux.\n\n> La 5ème position est la plus exigeante — elle demande une rotation externe complète et un gainage important pour ne pas compenser par les genoux ou les chevilles.",
    erreursCourantes: [
      "Forcer le turn-out depuis les pieds ou les genoux (rotation compensatoire) plutôt que depuis les hanches.",
      "En 5ème, avoir les pieds mal emboîtés — l'orteil du pied arrière doit affleurer le talon du pied avant.",
      "Croire que la 3ème position est une étape dépassée — elle est utile en débutant pour construire la coordination.",
    ],
    conseils: [
      "Avant de placer les pieds, engage la rotation depuis les hanches. Les pieds suivent le bassin — pas l'inverse.",
    ],
    difficulteInterne: 1,
    etymologie: "Codifiées par Pierre Beauchamp, maître de ballet de Louis XIV, vers 1700. Publiées formellement par Raoul-Auger Feuillet dans sa 'Chorégraphie' (1700).",
    securite: {
      risques: ["Syndrome de la douleur fémoro-patellaire", "Tendinopathie de la cheville", "Douleurs au genou par surrotation compensatoire"],
      precautions: ["Ne jamais forcer le turn-out au-delà de la rotation naturelle de la hanche", "Renforcer les rotateurs externes (pelvi-trochantériens) avant d'exiger une grande ouverture"],
    },
    termesLies: ['turn-out', 'plie', 'barre-classique', 'positions-bras'],
  },

  {
    id: 'positions-bras',
    nom: 'Positions des bras',
    alias: ['port de bras positions', 'positions en danse classique', 'bras en danse'],
    disciplines: ['classique'],
    categories: ['positions', 'ports-de-bras'],
    definition: "Positions standardisées des bras et des mains en danse classique, variant selon les écoles (Cecchetti, Vaganova, RAD), qui encadrent tous les mouvements et enchaînements.",
    description: "Contrairement aux positions des pieds — universelles — les positions des bras varient selon les écoles. Les trois principales :\n\n**École Vaganova (Russie / Mariinsky) :**\n- Position préparatoire : bras bas, légèrement arrondis (bras en bas)\n- 1ère : bras devant soi, mains à hauteur du nombril\n- 2ème : bras ouverts sur les côtés\n- 3ème : un bras haut, un bras sur le côté\n- 4ème : un bras haut, un bras devant\n- 5ème : deux bras en haut\n\n**École Cecchetti (Italie / anglophone) :**\n- Numérotation différente et positions intermédiaires supplémentaires\n\n**Royal Academy of Dance — RAD (UK) :**\n- Nomenclature en français mais positions légèrement différentes\n\nDans tous les cas, les bras doivent être :\n- Légèrement arrondis au coude (jamais tendus à bloc)\n- Mains souples, doigt médius légèrement abaissé\n- Épaules basses et détendues\n- Ligne continue du dos jusqu'au bout des doigts",
    erreursCourantes: [
      "Coudes tombants — ils doivent être légèrement relevés, soutenus.",
      "Mains crispées ou doigts collés — la main doit être vivante, souple.",
      "Épaules montantes — surtout en portant les bras en 5ème (bras en haut).",
    ],
    conseils: [
      "Imagine tenir une bulle de savon dans chaque main. Assez de tonus pour ne pas la lâcher, assez de douceur pour ne pas la faire éclater.",
    ],
    difficulteInterne: 2,
    termesLies: ['port-de-bras', 'epaulement', 'cinq-positions-pieds'],
  },

  {
    id: 'epaulement',
    nom: 'Épaulement',
    alias: ['épauler', 'placement des épaules'],
    disciplines: ['classique'],
    categories: ['concepts', 'ports-de-bras'],
    definition: "Légère rotation du buste et des épaules par rapport aux hanches, créant une ligne diagonale entre les épaules, l'épaulement donne de la vie et de la musicalité au mouvement classique.",
    description: "L'épaulement est ce qui différencie la danse classique d'une simple gymnastique. Sans épaulement, même un parfait technique semble mécanique.\n\n**Deux positions d'épaulement :**\n- **Croisé** (*croisé*) : le corps est de 3/4 face, l'épaule avant croise la ligne centrale\n- **Effacé** (*ouvert*) : le corps est de 3/4 face mais ouvert, l'épaule arrière est en avant\n\n**Comment l'utiliser :**\n- Le regard suit et prolonge la ligne des épaules\n- La tête s'incline légèrement vers l'épaule haute\n- Le buste tourne depuis le milieu du dos, pas depuis le cou seul\n\n> L'épaulement transforme un exercice en danse. C'est la marque du danseur qui pense à l'intention artistique, pas seulement à la position.",
    erreursCourantes: [
      "Épauler avec la tête seulement, sans engager le buste.",
      "Épaulement figé — il doit être vivant, respirer avec la phrase musicale.",
      "Oublier l'épaulement à la barre et ne l'ajouter qu'au milieu.",
    ],
    conseils: [
      "L'épaulement n'est pas un ajout décoratif — c'est la façon dont tu t'adresses au public. Pense à lui parler avec tes épaules.",
    ],
    difficulteInterne: 3,
    etymologie: "Du français 'épaule' — la rotation part littéralement des épaules, même si elle engage tout le buste.",
    termesLies: ['positions-bras', 'port-de-bras', 'arabesque', 'attitude'],
  },

  // ─── Exercices de barre ────────────────────────────────────────────────────

  {
    id: 'plie',
    nom: 'Plié',
    alias: ['demi-plié', 'grand plié', 'pliés'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Flexion des genoux en rotation externe, en conservant les talons au sol (demi-plié) ou en les décollant (grand plié). Premier exercice de la barre, fondation de tous les sauts et tours.",
    description: "Le plié est à la danse ce que l'échauffe-mouvement est au sport — mais aussi bien plus : c'est un exercice technique à part entière que les danseurs pratiquent toute leur vie.\n\n**Demi-plié :** Flexion des genoux jusqu'au point où les talons commencent à décoller. Les talons restent au sol. Se fait dans les 5 positions (sauf 3ème rarement).\n\n**Grand plié :** Flexion complète des genoux. Les talons décollent en 1ère, 3ème et 5ème positions (inévitable par la géométrie). Ils restent au sol en 2ème position.\n\n**Fonctions du plié :**\n- Échauffement des tendons d'Achille, genoux et hanches\n- Amortissement à l'atterrissage de tous les sauts\n- Propulsion dans les sauts (comme un ressort)\n- Préparation aux pirouettes (plié d'élan)\n- Fluidité dans les enchaînements (plié de liaison)\n\n**Musicalité :** Les pliés se font dans une pulsion lente et régulière, souvent sur 4 temps — 2 temps pour descendre, 2 temps pour remonter.",
    erreursCourantes: [
      "Genoux qui tombent en avant des orteils — les genoux suivent la direction des orteils.",
      "Tronc qui s'incline en avant dans le grand plié — il reste vertical.",
      "Grand plié trop rapide — il faut sentir la résistance de chaque millimètre.",
      "Talons décollés en 2ème position — une compensation fréquente de manque de souplesse.",
    ],
    conseils: [
      "Le grand plié en 2ème est ton meilleur allié pour gagner de la souplesse dans les adducteurs. Prends le temps d'y descendre doucement et de monter encore plus doucement.",
    ],
    difficulteInterne: 1,
    etymologie: "Du français 'plier' (plier, fléchir). Conjugué comme un adjectif verbal en danse : 'un plié' = 'un [genou] plié'.",
    securite: {
      risques: ["Syndrome fémoro-patellaire", "Hyperpression sur les ménisques si le genou dépasse les orteils"],
      precautions: ["Aligner le genou sur le 2ème ou 3ème orteil", "Ne pas laisser le genou s'effondrer vers l'intérieur (valgus)"],
    },
    termesLies: ['cinq-positions-pieds', 'releve', 'allegro'],
  },

  {
    id: 'releve',
    nom: 'Relevé',
    alias: ['élévation', 'se relever'],
    disciplines: ['classique'],
    categories: ['pas', 'equilibres'],
    definition: "Montée sur demi-pointe (ou pointe pour les danseurs en chaussons de pointe) en partant des pieds à plat, sans saut. Exercice fondamental pour renforcer les chevilles et préparer au travail en pointes.",
    description: "Le relevé est souvent confondu avec l'échappé sauté ou le temps levé — mais il n'implique aucun saut. C'est un travail de poussée progressive.\n\n**Relevé simple :** De la 1ère ou 5ème position, pousser sur les métatarses pour monter sur demi-pointes, puis redescendre avec contrôle.\n\n**Relevé passé :** Monter sur demi-pointe de la jambe d'appui en passant la jambe libre en retiré (passé). Préparation directe à la pirouette.\n\n**Fonctions :**\n- Renforcement des mollets, tendons d'Achille et muscles intrinsèques du pied\n- Préparation au travail en pointes\n- Exercice de gainage du centre (équilibre sur demi-pointe)\n\n> Il faut 12 à 18 mois de relevés quotidiens pour construire la force nécessaire au travail en pointes.",
    erreursCourantes: [
      "Monter sur les bords des demi-pointes (en supinat ou pronat) plutôt que droit sur les métatarses.",
      "Descendre trop vite — la descente contrôlée est aussi importante que la montée.",
      "Oublier de rassembler les adducteurs en montant — les pieds ont tendance à s'écarter.",
    ],
    conseils: [
      "En relevé, imagine qu'une ficelle tire le sommet de ta tête vers le plafond. Tu grandis en montant, pas seulement en t'élevant.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'relever' (se lever à nouveau, se soulever). Participe passé utilisé comme nom.",
    termesLies: ['plie', 'sur-les-pointes', 'pirouette'],
  },

  {
    id: 'tendu',
    nom: 'Battement tendu',
    alias: ['tendu', 'tendu simple', 'battement'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Glissement du pied de travail depuis la 5ème position jusqu'à la pointe touchant le sol, sans lever la jambe, puis retour. Exercice fondamental du travail de pied et d'articulation.",
    description: "Le tendu (abréviation de *battement tendu*, littéralement 'battement tendu') est le deuxième exercice de la barre après le plié. Apparemment simple, il cache une grande richesse technique.\n\n**Exécution :**\n1. Partir de la 5ème position\n2. Glisser le pied de travail vers la 4ème devant, la 2ème (côté) ou la 4ème derrière\n3. La pointe du pied reste au sol au terminus (contrairement au dégagé)\n4. Revenir en 5ème en glissant — talon, voûte, métatarses, orteils\n\n**Ce que le tendu développe :**\n- L'articulation complète du pied (cheville, métatarses, orteils)\n- Le turn-out actif de la jambe de travail\n- Le travail du pied du côté barre (jambe d'appui aussi travaille)\n- La précision de la 5ème position (rentrée en 5ème, pas en 4ème)\n\n**Variations :** tendus croisés, tendus à deux temps, tendus avec demi-plié, tendus en tournant.",
    erreursCourantes: [
      "Pointe du pied en avant des orteils sans véritable articulation — le pied doit s'étirer activement.",
      "Rentrer en 3ème ou 4ème au lieu de la 5ème — manque de précision.",
      "Hanches qui basculent lors du tendu derrière — maintenir le bassin stable.",
      "Jambe d'appui en plié non voulu — elle reste tendue sauf indication contraire.",
    ],
    conseils: [
      "Imagine que tu veux effacer une trace au sol avec ton pied de travail. Le contact avec le plancher doit être continu et actif.",
    ],
    difficulteInterne: 1,
    etymologie: "Du français 'tendre' (étirer, allonger). 'Battement' = mouvement répété de la jambe. L'ensemble = mouvement d'allongement répété.",
    termesLies: ['degage', 'grand-battement', 'cinq-positions-pieds'],
  },

  {
    id: 'degage',
    nom: 'Battement dégagé',
    alias: ['dégagé', 'battement jeté', 'jeté'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Extension rapide de la jambe depuis la 5ème position, le pied quittant le sol jusqu'à environ 45°, puis retour. Variante plus dynamique du tendu, aussi appelé battement jeté.",
    description: "Le dégagé (de son nom complet *battement dégagé*, ou *battement jeté* selon les écoles) est l'accélération du tendu. Le pied quitte le sol — la jambe se 'dégage' du plancher.\n\n**Différence avec le tendu :**\n- Tendu : pointe au sol au terme de l'extension\n- Dégagé : pied levé à environ 25°–45° au terme de l'extension\n\n**Exécution :**\n1. Partir de la 5ème, glisser comme pour un tendu\n2. À la pointe, continuer le mouvement — le pied décolle\n3. La jambe monte à environ 45° (hauteur variable selon l'exercice)\n4. Retour en glissant, pointe au sol, puis 5ème\n\n**Tempo :** Plus rapide que le tendu — souvent sur 1 temps ou 1/2 temps. Prépare à l'allegro.\n\n**Ce que le dégagé développe :**\n- La vitesse d'articulation du pied\n- La coordination jambe de travail / jambe d'appui\n- L'impulsion pour les petits sauts (le dégagé est l'élan du jeté)",
    erreursCourantes: [
      "Jambe de travail en flexion (genou plié) au lieu d'être tendue.",
      "Vitesse insuffisante — le dégagé doit être plus rapide que le tendu.",
      "Hanche qui monte lors du dégagé derrière — bassin stable.",
    ],
    conseils: [
      "Pense que ta jambe est une flèche lancée depuis ta hanche. Elle part vite, elle revient avec contrôle.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'dégager' (libérer, dégager). La jambe se libère du sol. 'Jeté' = lancé, comme jeté depuis l'appui.",
    termesLies: ['tendu', 'jete', 'grand-battement', 'allegro'],
  },

  {
    id: 'rond-de-jambe',
    nom: 'Rond de jambe',
    alias: ['rond de jambe par terre', 'rond de jambe en l\'air'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Mouvement circulaire de la jambe de travail, traçant un demi-cercle sur le sol (par terre) ou dans les airs (en l'air), en dehors ou en dedans.",
    description: "Le rond de jambe est l'exercice de mobilisation de la hanche par excellence. Il existe en deux versions principales :\n\n**Rond de jambe par terre :**\n- La pointe du pied reste au sol et trace un demi-cercle\n- En dehors : devant → côté → derrière (dans le sens de rotation externe)\n- En dedans : derrière → côté → devant\n- Exercice lent (adagio) ou rapide\n\n**Rond de jambe en l'air :**\n- La jambe est levée à 90°, le genou est fixe\n- La partie basse de la jambe (tibia/pied) trace un ovale dans les airs\n- En dehors ou en dedans\n- Exercice plus avancé, qui travaille la rotation de la hanche et la souplesse du genou\n\n**Ce que le rond de jambe développe :**\n- L'amplitude de rotation externe de la hanche\n- La souplesse de l'articulation coxo-fémorale\n- La conscience du turn-out en mouvement (pas seulement statique)",
    erreursCourantes: [
      "En rond de jambe par terre, le pied qui quitte le sol — la pointe doit rester en contact.",
      "Bassin qui bascule pour aider l'amplitude — la rotation vient de la hanche, pas du bassin.",
      "Rond de jambe en l'air : genou qui bouge (il est le pivot fixe).",
    ],
    conseils: [
      "Pour sentir la bonne sensation, place ta main sur ta hanche et sens-la tourner de l'intérieur vers l'extérieur. C'est la hanche qui fait le rond, le pied suit.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'rond de jambe' = cercle de jambe. Littéralement descriptif du mouvement.",
    termesLies: ['en-dehors-en-dedans', 'turn-out', 'developpe'],
  },

  {
    id: 'fondu',
    nom: 'Battement fondu',
    alias: ['fondu', 'fondus'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Extension simultanée de la jambe de travail et redressement de la jambe d'appui depuis une position de demi-plié, créant une extension « fondante », fluide et continue.",
    description: "Le fondu est un exercice de coordination et de fluidité — les deux jambes agissent ensemble mais inversement.\n\n**Exécution type :**\n1. Jambe de travail en retiré (ou sur le cou-de-pied), jambe d'appui en demi-plié\n2. Simultanément : la jambe de travail s'étend vers la 4ème ou la 2ème ; la jambe d'appui se redresse\n3. Au terminus : jambe de travail tendue, jambe d'appui en relevé (option avancée)\n4. Retour : simultané\n\n**L'image du fondu :**\n> Comme du beurre qui fond — progressif, continu, sans à-coups.\n\n**Ce que le fondu prépare :**\n- Les sauts (le demi-plié d'impulsion ressemble à la phase de fondu)\n- L'adage (les développés s'ouvrent dans un esprit fondu)\n- Les pirouettes (la préparation en plié)\n\n**Variations :** fondu simple (à 45°), fondu développé (à 90°), fondu en tournant.",
    erreursCourantes: [
      "Mouvement séquentiel au lieu de simultané — les deux jambes doivent bouger ensemble.",
      "Jambe d'appui qui reste en plié au lieu de se redresser complètement.",
      "Jambe de travail qui monte trop haut (compensation du plié insuffisant).",
    ],
    conseils: [
      "Imagine deux poulies reliées par une corde : quand une jambe monte, l'autre descend. L'action est simultanée et équilibrée.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'fondre' (s'amollir, devenir mou et continu). Décrit la qualité du mouvement, pas sa forme.",
    termesLies: ['plie', 'developpe', 'adage'],
  },

  {
    id: 'frappe',
    nom: 'Battement frappé',
    alias: ['frappé', 'frappes'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Frappe du pied de travail sur le sol (ou frappe imaginaire) depuis une position sur le cou-de-pied, suivi d'une extension vive. Travaille la vivacité et l'impact du pied.",
    description: "Le frappé développe la puissance et la vitesse du pied de travail — la qualité d'impact nécessaire pour les battements et la batterie.\n\n**Exécution :**\n1. Jambe de travail sur le cou-de-pied (pied enveloppant la cheville de la jambe d'appui)\n2. Frappe vive du métatarse (ou talon en frappé derrière) contre le sol ou contre la cheville\n3. Extension immédiate de la jambe — le pied s'ouvre vers la 4ème ou la 2ème\n4. Retour sur le cou-de-pied\n\n**Deux formes :**\n- **Simple** : frappe + extension à 45°\n- **Double** : deux frappes avant l'extension (frappe croisé + frappe décroisé)\n\n**Ce que le frappé développe :**\n- La vivacité du pied (réflexe neuromusculaire)\n- La préparation aux battements de batterie\n- Le tonus musculaire du pied et de la cheville",
    erreursCourantes: [
      "Jambe de travail qui ne revient pas sur le cou-de-pied entre les frappés.",
      "Extension trop lente après la frappe — la puissance doit se libérer instantanément.",
      "Frappe avec le talon côté devant (c'est le métatarse qui frappe en avant).",
    ],
    conseils: [
      "Le frappé, c'est comme claquer des doigts avec le pied. Il faut de l'élan, une libération soudaine et un retour immédiat.",
    ],
    difficulteInterne: 3,
    termesLies: ['tendu', 'degage', 'batterie'],
  },

  {
    id: 'developpe',
    nom: 'Développé',
    alias: ['battement développé', 'développement'],
    disciplines: ['classique'],
    categories: ['pas', 'equilibres'],
    definition: "Extension lente et contrôlée de la jambe de travail depuis le retiré jusqu'à une position élevée (90° ou plus), en passant par les positions intermédiaires. Cœur du travail d'adage.",
    description: "Le développé est le mouvement d'adage par excellence — lent, contrôlé, élevé. Il révèle la souplesse, la force et la grâce du danseur.\n\n**Phases du développé devant (en avant) :**\n1. **Retiré** : jambe de travail levée, genou plié, pied au genou de la jambe d'appui\n2. **Glissement** : le pied glisse le long de la jambe d'appui vers le haut\n3. **Extension** : la jambe s'ouvre et s'étend, montant vers la 4ème ou plus\n4. **Tenue** : maintien de la position (2–4 temps)\n5. **Fermeture** : retour contrôlé en 5ème\n\n**Les quatre directions :**\n- Devant (en avant) : jambe vers la 4ème devant\n- Côté : jambe à la seconde (90° sur le côté)\n- Derrière (en arrière) : jambe vers la 4ème derrière\n- En arabesque : jambe tendue derrière, corps en arabesque\n\n**Hauteur idéale :** 90° minimum. Les artistes atteignent 120°–140° voire davantage grâce à leur souplesse exceptionnelle.",
    erreursCourantes: [
      "Sauter le retiré — le développé doit passer par le retiré, pas partir directement du sol.",
      "Hanche qui monte pour aider la jambe (compensation) — maintenir l'alignement du bassin.",
      "Jambe de travail qui retombe trop vite — tenir la position est aussi important que la monter.",
    ],
    conseils: [
      "Au retiré, prends le temps. C'est là que se charge l'énergie. La jambe ne peut s'ouvrir magnifiquement que si elle a pris son élan dans le retiré.",
    ],
    difficulteInterne: 3,
    termesLies: ['arabesque', 'attitude', 'adage', 'fondu'],
  },

  {
    id: 'grand-battement',
    nom: 'Grand battement',
    alias: ['grands battements', 'battement lancé'],
    disciplines: ['classique'],
    categories: ['pas'],
    definition: "Lancement vigoureux de la jambe de travail jusqu'à la hauteur maximale (90° ou au-dessus), puis retour contrôlé en 5ème. Dernier exercice de la barre, qui travaille l'amplitude et la force.",
    description: "Le grand battement clôt traditionnellement la barre parce qu'il sollicite toutes les qualités développées pendant les exercices précédents : tour-out, extension du pied, alignement du bassin, force du centre.\n\n**Exécution :**\n1. Partir de la 5ème\n2. Glisser rapidement comme un tendu\n3. La jambe se lance vigoureusement vers la hauteur\n4. Au sommet : jambe tendue, pied tendu, turn-out maintenu\n5. Descente contrôlée (pas de chute) — la jambe résiste à la gravité\n6. Retour en 5ème sans impact brusque\n\n**Directions :** devant, côté, derrière.\n\n**Ce que le grand battement développe :**\n- L'amplitude maximale de la hanche\n- La force des fléchisseurs (jambe devant) et extenseurs (jambe derrière)\n- La préparation aux grands sauts (grand jeté)\n- Le contrôle excentrique de la descente (prévention des blessures)",
    erreursCourantes: [
      "Bassin qui bascule violemment lors du lancement (surtout vers l'arrière).",
      "Jambe de travail qui fléchit au sommet du mouvement.",
      "Descente en chute libre — contrôler la descente est aussi important que monter haut.",
    ],
    conseils: [
      "Le grand battement n'est pas une compétition de hauteur. Une jambe lancée à 90° avec un bassin stable est bien supérieure à une jambe à 120° qui fait partir le bassin.",
    ],
    difficulteInterne: 2,
    securite: {
      risques: ["Claquage des ischio-jambiers (grand battement derrière)", "Douleur à l'aine (psoas-iliaque forcé)"],
      precautions: ["Échauffer les ischio-jambiers et le psoas avant les grands battements", "Progresser graduellement dans la hauteur"],
    },
    termesLies: ['tendu', 'degage', 'jete', 'arabesque'],
  },

  {
    id: 'port-de-bras',
    nom: 'Port de bras',
    alias: ['port des bras', 'portés de bras'],
    disciplines: ['classique'],
    categories: ['ports-de-bras'],
    definition: "Mouvement des bras passant d'une position à une autre de façon fluide et expressive, coordonné à la respiration et au mouvement du corps. Aussi désigne une série d'exercices complets de cambrés et de flexions.",
    description: "Le terme port de bras a deux significations en danse classique :\n\n**1. Le port de bras en tant que qualité de mouvement :**\nComment les bras se déplacent d'une position à l'autre — jamais brusquement, toujours en passant par des positions intermédiaires logiques. La main guide (pas le coude), les épaules restent basses.\n\n**2. L'exercice « port de bras » à la barre ou au milieu :**\nUne série d'exercices qui combinent :\n- Cambré avant (inclinaison vers l'avant)\n- Cambré arrière (ouverture de la poitrine vers l'arrière)\n- Inclinaison latérale (côté)\n- Parfois, grand port de bras en arabesque ou attitude\n\n**La connexion bras-respiration-dos :**\nLe port de bras s'inspire du souffle. En expirant, on s'incline. En inspirant, on se redresse. Les bras sont la surface visible de la respiration intérieure.",
    erreursCourantes: [
      "Bras qui arrivent avant le corps (ou après) — les bras et le corps voyagent ensemble.",
      "Coudes qui s'élèvent pendant le port de bras en bas — ils restent orientés vers le bas.",
      "Bras rigides entre deux positions — le mouvement doit être continu, jamais saccadé.",
    ],
    conseils: [
      "Tes bras ne sont pas des accessoires — ils parlent. Chaque port de bras est une phrase. Pense à ce qu'elle dit avant de la faire.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'porter les bras' — littéralement 'la façon de porter ses bras', le transport des bras dans l'espace.",
    termesLies: ['positions-bras', 'epaulement', 'adage'],
  },

  // ─── Adage et équilibres ──────────────────────────────────────────────────

  {
    id: 'adage',
    nom: 'Adage',
    alias: ['adagio', 'travail d\'adage', 'adage classique'],
    disciplines: ['classique'],
    categories: ['concepts'],
    definition: "Partie lente du milieu classique, composée de développés, d'arabesques, d'attitudes et d'équilibres enchaînés dans un tempo largo, qui travaille le contrôle, l'amplitude et l'expression.",
    description: "Le terme vient de la musique (*adagio* = lent en italien). En danse classique, l'adage est à la fois :\n- Une section du cours (après les exercices de barre au milieu)\n- Un type de travail : lent, soutenu, expressif\n- La partie du *pas de deux* où les partenaires dansent ensemble lentement\n\n**Caractéristiques de l'adage :**\n- Tempo largo (très lent)\n- Développés dans les quatre directions\n- Arabesques et attitudes tenues\n- Équilibres prolongés\n- Turns lents (*promenades*) si en pas de deux\n- Transitions fluides (fondu → développé → arabesque → attitude)\n\n**Différence adage solo / adage pas de deux :**\n- Solo : l'équilibre est entièrement à la charge du danseur\n- Pas de deux : le partenaire soutient, tourne (*promenade*) ou porte (*portés*)\n\n**L'adage révèle :** la qualité du travail silencieux — là où la technique se voit dans toute sa richesse.",
    erreursCourantes: [
      "Aller trop vite — l'adage n'est pas ennuyeux lent, il est riche lent.",
      "Perdre la connexion musicale (respirer hors des phrases musicales).",
      "Bras qui tombent lors des équilibres — soutenir en permanence.",
    ],
    conseils: [
      "L'adage est ta conversation avec la musique. Écoute avant de bouger. Chaque note mérite un geste.",
    ],
    difficulteInterne: 3,
    etymologie: "De l'italien 'adagio' (lentement, à l'aise). Terme musical adopté par la danse pour décrire le tempo et le style du travail.",
    termesLies: ['arabesque', 'attitude', 'developpe', 'milieu-classique'],
  },

  {
    id: 'arabesque',
    nom: 'Arabesque',
    alias: ['arabesques', '1ère arabesque', '2ème arabesque'],
    disciplines: ['classique'],
    categories: ['equilibres'],
    definition: "Position où le danseur est en équilibre sur une jambe, l'autre jambe tendue à l'horizontal ou au-dessus derrière lui, les bras ouverts en ligne, créant la plus longue ligne possible de la pointe des doigts à la pointe du pied arrière.",
    description: "L'arabesque est l'une des positions les plus emblématiques du ballet classique — la silhouette d'une danseuse en arabesque est une icône culturelle mondiale.\n\n**Les quatre arabesques classiques (numérotation Cecchetti) :**\n\n| Arabesque | Bras avant | Bras arrière | Face au public |\n|-----------|-----------|-------------|----------------|\n| 1ère | Bras côté jambe de travail | Bras opposé en arrière | De profil |\n| 2ème | Bras côté jambe d'appui | Bras opposé en arrière | De profil |\n| 3ème | Deux bras devant | — | Face public |\n| 4ème | Bras haut + bras devant | — | 3/4 face |\n\n**Hauteur idéale :** 90° (horizontal). La jambe peut monter plus haut chez les artistes très souples, mais la ligne doit rester belle — une arabesque à 100° avec un bassin incliné est inférieure à une arabesque à 90° bien alignée.\n\n**L'arabesque penchée (*penché*) :** Le corps s'incline en avant, la jambe arrière monte proportionnellement. Réservée aux artistes avancés.",
    erreursCourantes: [
      "Hanches non horizontales — la hanche côté jambe de travail monte. Il faut la garder parallèle à l'autre.",
      "Jambe arrière en rotation interne — le genou et l'orteil regardent le bas, pas l'extérieur.",
      "Corps qui s'effondre vers l'avant — le buste est relevé, pas avachi.",
      "Jambe trop haute qui fait perdre l'alignement — la hauteur ne vaut rien sans la ligne.",
    ],
    conseils: [
      "L'arabesque parfaite commence dans le dos, pas dans la jambe. Grandir dans la colonne, ouvrir le sternum, et la jambe suit naturellement.",
    ],
    difficulteInterne: 2,
    etymologie: "De l'arabe 'arabesque' → français 'arabesque' = motif décoratif aux lignes courbes entrecroisées. La position rappelle ces entrelacs élégants.",
    termesLies: ['attitude', 'developpe', 'adage', 'epaulement'],
  },

  {
    id: 'attitude',
    nom: 'Attitude',
    alias: ['attitude derrière', 'attitude devant', 'attitude croisée'],
    disciplines: ['classique'],
    categories: ['equilibres'],
    definition: "Position d'équilibre sur une jambe, l'autre jambe levée en arrière ou en avant avec le genou fléchi à environ 90°, le pied à la hauteur du genou ou au-dessus. Inspirée de la statue de Mercure de Jean Bologne.",
    description: "L'attitude est souvent présentée comme la sœur romantique de l'arabesque — là où l'arabesque est droite et classique, l'attitude est courbe et expressionniste.\n\n**Histoire :**\nLe chorégraphe **Carlo Blasis** (1795–1878) codifie l'attitude dans son *Traité élémentaire de la danse* (1820), en s'inspirant directement de la statue du Mercure de Jean Bologne (Florence, 1565). La statue montre Mercure en équilibre sur une jambe, l'autre relevée en arrière avec le genou fléchi.\n\n**Attitude derrière (la plus classique) :**\n- Jambe de travail levée en arrière, genou fléchi à 90°\n- Le genou est à la hauteur ou légèrement au-dessus de la hanche\n- Le pied est pointé, dirigé vers l'extérieur\n- Le bras du même côté que la jambe de travail est levé en haut\n\n**Attitude devant :**\n- Même principe, jambe en avant et en arrondissement\n- Moins courante mais très expressive\n\n**Attitude en tournant :** Pirouette en attitude — la jambe reste fléchie pendant la rotation.",
    erreursCourantes: [
      "Genou trop bas — il doit être à la hauteur de la hanche ou plus haut.",
      "Pied pendant (en flexion) — le pied est pointé, prolongeant la ligne du genou.",
      "Épaules carrées — en attitude, l'épaulement est essentiel.",
    ],
    conseils: [
      "L'attitude, c'est de la sculpture. Cherche la ligne plastique, pas seulement la hauteur. Chaque partie du corps contribue à la forme globale.",
    ],
    difficulteInterne: 3,
    etymologie: "Du latin 'aptitudo' → français 'attitude' = posture, position. En danse, désigne cette position spécifique depuis le XVIIIe siècle.",
    termesLies: ['arabesque', 'adage', 'pirouette'],
  },

  // ─── Allegro et sauts ─────────────────────────────────────────────────────

  {
    id: 'allegro',
    nom: 'Allegro',
    alias: ['travail allegro', 'petit allegro', 'grand allegro'],
    disciplines: ['classique'],
    categories: ['concepts'],
    definition: "Partie rapide et sautée d'un cours de danse classique, divisée en petit allegro (petits sauts vifs) et grand allegro (grands sauts avec déplacement). Du terme musical allegro (rapide).",
    description: "L'allegro est la partie la plus spectaculaire du cours — celle des sauts, des envolées, des tours en l'air. Elle suit l'adage dans la structure du milieu.\n\n**Petit allegro :**\n- Petits sauts rapides : changements de pied, échappés, assemblés, jetés, glissades\n- Combinaisons courtes, tempo rapide\n- Travaille la vivacité, l'articulation du pied au sol, la légèreté\n\n**Grand allegro :**\n- Grands sauts avec déplacement en diagonale ou en manège\n- Grand jeté, pas de chat, tours chainés, pirouettes enchaînées\n- Combinaisons longues, pleine scène\n- Travaille l'amplitude, la puissance, la projection scénique\n\n**L'importance du plié en allegro :**\nTous les sauts partent d'un demi-plié et atterrissent en demi-plié. Le plié est le ressort de l'allegro. Un bon allegro se reconnaît à la souplesse des atterrissages — jamais bruyants.",
    erreursCourantes: [
      "Atterrissages bruyants — signe d'atterrissage sur jambes raides, sans passer par le demi-plié.",
      "Pieds qui ne s'articulent pas pendant les sauts (orteils qui ne pointent pas).",
      "Perdre le turn-out en l'air — il se maintient depuis les hanches même en suspension.",
    ],
    conseils: [
      "Imagine que le sol est une trampoline qui t'aide à rebondir. Plus tu l'embrasses au départ et à l'arrivée, plus tu montes haut.",
    ],
    difficulteInterne: 3,
    etymologie: "De l'italien 'allegro' (gai, vif, rapide) — terme musical adopté pour la section sautée du cours.",
    termesLies: ['plie', 'jete', 'assemble', 'echappe', 'milieu-classique'],
  },

  {
    id: 'echappe',
    nom: 'Échappé',
    alias: ['échappé sauté', 'échappé sur pointes'],
    disciplines: ['classique'],
    categories: ['sauts'],
    definition: "Saut depuis la 5ème position vers la 2ème (ou 4ème), les deux pieds s'échappant vers l'extérieur, suivi d'un retour en 5ème. Premier des sauts du petit allegro.",
    description: "L'échappé (*echapper* = s'échapper) est souvent l'un des premiers sauts enseignés car il reste sur place et la coordination est simple.\n\n**Exécution de l'échappé en 2ème :**\n1. 5ème position, demi-plié\n2. Saut : les deux pieds s'écartent simultanément vers la 2ème\n3. Atterrissage en 2ème, demi-plié\n4. Saut : les deux pieds se rapprochent vers la 5ème\n5. Atterrissage en 5ème, demi-plié\n\n**Deux formes :**\n- **Sauté** : avec saut complet\n- **Sur pointes / demi-pointes** : le pied monte sur la pointe ou la demi-pointe sans saut (en niveau avancé)\n\n**Ce que l'échappé développe :**\n- La coordination des deux jambes dans le saut\n- L'habitude de partir et atterrir en 5ème\n- La préparation aux battements battus et à la batterie",
    erreursCourantes: [
      "Pieds non simultanés — les deux pieds s'écartent exactement en même temps.",
      "Atterrissage en 2ème sans plié (jambes raides).",
      "Retour en 3ème ou 4ème au lieu de la 5ème.",
    ],
    conseils: [
      "Visualise les deux pieds reliés par un élastique. Quand tu sautes, l'élastique s'étire vers la 2ème — et il te ramène en 5ème.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'échapper' — les pieds s'échappent de la 5ème position, s'en éloignent.",
    termesLies: ['allegro', 'assemble', 'plie', 'cinq-positions-pieds'],
  },

  {
    id: 'assemble',
    nom: 'Assemblé',
    alias: ['assemblé sauté', 'assemble'],
    disciplines: ['classique'],
    categories: ['sauts'],
    definition: "Saut dans lequel la jambe de travail se lance sur le côté, en avant ou en arrière, et les deux jambes s'assemblent en 5ème dans les airs avant l'atterrissage.",
    description: "Le terme dit tout : les jambes s'assemblent (*assembler* = réunir) en l'air, en 5ème position.\n\n**Exécution de l'assemblé de côté :**\n1. 5ème position, demi-plié\n2. La jambe de travail se dégage vers la 2ème (45°)\n3. La jambe d'appui pousse le sol et se soulève\n4. En l'air : les deux jambes rejoignent la 5ème\n5. Atterrissage en 5ème, demi-plié\n\n**Directions :** devant, côté, derrière.\n\n**Variantes :**\n- **Assemblé dessus** : pied arrière passe devant en fermant\n- **Assemblé dessous** : pied avant passe derrière\n- **Assemblé battu** : jambes qui se croisent en battant avant d'atterrir\n- **Grand assemblé** : version avec grand jet de jambe, dans le grand allegro\n\nL'assemblé est l'un des pas les plus fréquents dans les enchaînements d'allegro et les variations.",
    erreursCourantes: [
      "Jambe de travail qui monte trop tôt avant que la jambe d'appui quitte le sol.",
      "5ème non formée en l'air — les jambes s'assemblent en route, pas à l'atterrissage.",
      "Atterrissage d'un seul pied à la fois (séquentiel au lieu de simultané).",
    ],
    conseils: [
      "L'assemblé, c'est aimanter tes deux jambes dans les airs. Elles se cherchent et se trouvent avant d'atterrir.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'assembler' — les deux jambes s'assemblent, se rejoignent.",
    termesLies: ['allegro', 'echappe', 'jete', 'plie'],
  },

  {
    id: 'jete',
    nom: 'Jeté',
    alias: ['petit jeté', 'grand jeté', 'jeté en avant', 'jeté entrelacé'],
    disciplines: ['classique'],
    categories: ['sauts', 'deplacements'],
    definition: "Famille de sauts dans lesquels on s'élance d'une jambe pour atterrir sur l'autre. Du petit jeté du petit allegro au grand jeté du grand allegro, c'est la famille de sauts la plus vaste du vocabulaire classique.",
    description: "Le mot 'jeté' désigne tous les sauts qui transfèrent le poids d'une jambe à l'autre — le principe du pas (transfert d'appui) est ici amplifié par le saut.\n\n**Petit jeté :**\n- Petit saut d'une jambe sur l'autre\n- La jambe de travail se lance à environ 45°\n- Atterrissage sur la jambe de travail, autre jambe en retiré\n- Enchaîné en série de côté, devant ou derrière\n\n**Grand jeté :**\n- Grand saut avec lancer de jambe à 90° ou au-dessus\n- Moment de suspension au sommet : les deux jambes tendues, grand écart en l'air\n- Déplacement important vers l'avant\n- Le plus spectaculaire des sauts classiques\n\n**Grand jeté entrelacé (Tours en l'air / Italian jeté) :**\n- Le corps effectue une demi-rotation dans les airs\n- Atterrissage face à l'autre direction\n- Souvent en diagonale\n\n**Préparation au grand jeté :**\n- Glissade ou pas de couru pour prendre de l'élan\n- Demi-plié profond sur la jambe d'impulsion\n- Lancer vigoureux de la jambe de travail comme un grand battement",
    erreursCourantes: [
      "Élan insuffisant — sans glissade ou pas de couru préparatoire, le grand jeté perd de la hauteur.",
      "Corps qui penche vers l'avant dans le grand jeté (ne pas « tomber » vers la jambe de travail).",
      "Petit jeté : jambe qui revient trop vite au sol, sans tenue en retiré.",
    ],
    conseils: [
      "Pour le grand jeté : regarde un point devant toi, très loin. Ton corps va vers ce point, comme si tu voulais t'y accrocher.",
    ],
    difficulteInterne: 3,
    etymologie: "Du français 'jeter' — la jambe est lancée, 'jetée' dans l'espace.",
    termesLies: ['assemble', 'allegro', 'grand-battement', 'glissade'],
  },

  {
    id: 'pas-de-chat',
    nom: 'Pas de chat',
    alias: ['saut de chat', 'cat step'],
    disciplines: ['classique'],
    categories: ['sauts'],
    definition: "Saut dans lequel les deux genoux se plient successivement vers la poitrine, rappelant le bond souple d'un chat. Les pieds passent par le retiré, la jambe arrière rejoignant la première.",
    description: "Le pas de chat est l'un des pas les plus reconnaissables et les plus enseignés en petit allegro — et l'un des plus appréciés du public pour sa légèreté apparente.\n\n**Exécution :**\n1. 5ème position, demi-plié\n2. La jambe arrière se lève en retiré\n3. La jambe avant pousse et se lève à son tour en retiré\n4. En l'air : les deux pieds sont en retiré simultanément (moment de suspension)\n5. La jambe qui s'est levée en premier atterrit\n6. L'autre jambe suit en 5ème\n\n**La difficulté :** la succession rapide des deux retiré doit donner une impression de fluidité, pas de saccade. Le moment de suspension avec les deux retiré est l'instant magique du pas de chat.\n\n**Variations :**\n- **Pas de chat en arrière** : moins courant\n- **Grand pas de chat** : avec un vrai grand battement (jambe tendue, non en retiré) — utilisé en grand allegro",
    erreursCourantes: [
      "Les deux pieds arrivent au sol simultanément — la succession doit être légèrement décalée.",
      "Genoux pas suffisamment hauts — les pieds doivent monter vers la poitrine.",
      "Corps qui penche en avant — le buste reste vertical ou légèrement incliné, jamais avachi.",
    ],
    conseils: [
      "Regarde un chat bondir par-dessus un obstacle. Il est suspendu une fraction de seconde, les quatre pattes ramassées. C'est exactement ça — légèreté et amplitude simultanées.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'pas de chat' = pas de chat. La comparaison avec le bond d'un félin est directement dans le nom.",
    termesLies: ['jete', 'allegro', 'assemble'],
  },

  {
    id: 'glissade',
    nom: 'Glissade',
    alias: ['glissade derrière', 'glissade devant', 'glissade de côté'],
    disciplines: ['classique'],
    categories: ['deplacements', 'liaisons'],
    definition: "Petit pas de liaison dans lequel les pieds glissent sur le sol, l'un rejoignant l'autre avant de se rouvrir. La glissade prépare les grands sauts et relie les pas entre eux.",
    description: "La glissade est un *pas de liaison* — elle ne se fait presque jamais seule, mais prépare et relie les autres pas.\n\n**Exécution de la glissade de côté (la plus courante) :**\n1. 5ème position, demi-plié\n2. La jambe de travail glisse vers la 2ème sur la pointe, puis à plat\n3. Le poids se transfère sur la jambe de travail\n4. La jambe d'appui glisse en 5ème (peut passer brièvement en 1ère)\n5. Arrivée en demi-plié dans la direction choisie\n\n**Rôle de la glissade :**\n- Préparer le grand jeté (glissade + grand jeté)\n- Préparer l'assemblé (glissade + assemblé)\n- Préparer les tours (glissade + pirouette)\n- Changer de direction avec fluidité\n\n**Directions :** devant (en avant), derrière (en arrière), de côté (la plus utilisée).\n\n**Dessin :** les pieds se ferment brièvement en 1ère ou 5ème au passage — c'est ce 'glissement' caractéristique qui donne son nom au pas.",
    erreursCourantes: [
      "Glissade avec saut — les pieds restent au sol en contact glissé.",
      "Pas se fermer au passage (les pieds restent écartés).",
      "Glissade trop bruyante — les pieds glissent, ils ne frappent pas.",
    ],
    conseils: [
      "La glissade, c'est une mise sur rampe de lancement. Elle doit vous donner de l'élan et de la direction pour le pas qui suit.",
    ],
    difficulteInterne: 1,
    etymologie: "Du français 'glisser' — les pieds glissent sur le sol, contrairement aux sauts où ils le quittent.",
    termesLies: ['jete', 'assemble', 'pas-de-bourree', 'allegro'],
  },

  // ─── Tours ────────────────────────────────────────────────────────────────

  {
    id: 'pirouette',
    nom: 'Pirouette',
    alias: ['tour sur place', 'pirouette en dehors', 'pirouette en dedans'],
    disciplines: ['classique'],
    categories: ['tours'],
    definition: "Tour complet (ou multiple) effectué sur une jambe, en rotation autour de l'axe vertical, dans la position retiré (pied de la jambe libre au genou de la jambe d'appui). Tour le plus emblématique du répertoire classique.",
    description: "La pirouette est le test d'une bonne technique — elle révèle l'axe, l'équilibre, le placement et la coordination.\n\n**Préparation de la pirouette en dehors :**\n1. 4ème position (devant), demi-plié\n2. Élan : les bras s'ouvrent depuis la préparation\n3. Rotation : la jambe libre se lève en retiré, la jambe d'appui se redresse sur demi-pointe (ou pointe)\n4. Les bras se ferment rapidement vers la 1ère position\n5. La tête tourne (*fouetté de tête*) : reste fixée en avant, tourne rapidement pour « attraper » la face à chaque tour\n6. Fin : fermeture en 4ème ou 5ème\n\n**Le fouetté de tête (spotting) :**\nLa tête ne tourne pas à la vitesse du corps — elle reste sur un point fixe le plus longtemps possible, puis effectue un retournement rapide. Sans spotting, la pirouette finit en étourdissement.\n\n**Pirouette en dehors vs en dedans :**\n- En dehors : la rotation va vers le côté de la jambe de travail\n- En dedans : la rotation va vers le côté de la jambe d'appui (plus difficile pour beaucoup)\n\n**Nombre de tours :** de 1 (niveau intermédiaire) à 10+ (artistes exceptionnels).",
    erreursCourantes: [
      "Axe de rotation non vertical — le corps part en arrière ou en avant.",
      "Retiré qui descend pendant la rotation — le genou doit rester à hauteur de hanche.",
      "Bras qui se rouvrent pendant la rotation (perdent la 1ère position).",
      "Absence de spotting — sans fouetté de tête, impossible de faire plus d'un tour.",
    ],
    conseils: [
      "Choisis un point au mur, à hauteur des yeux. Regarde-le jusqu'à la dernière seconde avant que ta tête parte. Retrouve-le immédiatement après le retournement. Ce point est ton ancre.",
    ],
    difficulteInterne: 4,
    etymologie: "Du français 'pirouetter' — tourner sur soi-même. Probablement de 'pirouer' (tournoyer) + suffixe '-ette'.",
    securite: {
      risques: ["Syndrome vertigineux si le spotting est absent", "Entorse de cheville en demi-pointe si l'axe n'est pas stable"],
      precautions: ["Pratiquer le spotting seul avant d'essayer plusieurs tours", "Ne pas augmenter le nombre de tours avant de maîtriser la qualité du tour unique"],
    },
    termesLies: ['fouette', 'chaines', 'en-dehors-en-dedans', 'releve'],
  },

  {
    id: 'fouette',
    nom: 'Fouetté en tournant',
    alias: ['fouetté', 'fouettés', '32 fouettés'],
    disciplines: ['classique'],
    categories: ['tours'],
    definition: "Tour sur une jambe dans lequel la jambe libre, après une ouverture à la seconde (90°), vient en retiré et relance la rotation par un mouvement fouetté (cinglant). Les 32 fouettés enchaînés de Lac des cygnes sont l'une des prouesses techniques les plus célèbres du ballet.",
    description: "Le fouetté en tournant est l'une des pirouettes les plus difficiles du répertoire — et l'une des plus spectaculaires.\n\n**Principe :**\nLa jambe libre maintient la rotation en effectuant successivement :\n1. Une ouverture à la seconde (45°–90°)\n2. Un retiré rapide\n3. Ce mouvement relance la rotation à chaque tour\n\n**Les 32 fouettés de Lac des cygnes :**\n- Introduits par Pierina Legnani en 1895 à Saint-Pétersbourg\n- Odile (le Cygne Noir) effectue 32 fouettés enchaînés sans interruption\n- Devient un test de virtuosité pour toutes les ballerines depuis lors\n\n**Différence pirouette / fouetté :**\n- Pirouette : relève en retiré et tourne\n- Fouetté : chaque tour est relancé par un fouet de jambe\n\n**Variantes :** fouetté à la seconde (jambe à l'horizontale tout le tour), fouetté en attitude",
    erreursCourantes: [
      "Voyager (se déplacer sur la scène) au lieu de rester sur place.",
      "Jambe libre en flexion (genou plié) lors de l'ouverture à la seconde — elle doit être tendue.",
      "Perdre l'axe après le premier fouetté — chaque tour repart du même axe.",
    ],
    conseils: [
      "Visualise un poteau planté sous ta jambe d'appui. Tu tournes autour de lui — tu ne le quittes pas d'un millimètre.",
    ],
    difficulteInterne: 5,
    termesLies: ['pirouette', 'chaines', 'allegro'],
  },

  {
    id: 'chaines',
    nom: 'Chaînés-déboulés',
    alias: ['chaînés', 'déboulés', 'tours chaînés'],
    disciplines: ['classique'],
    categories: ['tours', 'deplacements'],
    definition: "Série rapide de demi-tours enchaînés, les pieds se rejoignant en 1ère position à chaque demi-rotation, créant un mouvement continu de déplacement en ligne droite ou en manège.",
    description: "Les chaînés sont les tours les plus simples en terme de position — mais l'un des plus exigeants en terme d'endurance et de vitesse.\n\n**Principe :**\nChaque demi-rotation se fait sur 1 temps. Les pieds alternent : pied droit, pied gauche, pied droit... à un tempo très rapide. C'est l'accumulation des demi-tours qui donne l'impression d'une rotation continue.\n\n**Exécution :**\n1. Sur demi-pointe (ou pointe pour les femmes avancées)\n2. Les pieds se rejoignent en 1ère à chaque pas\n3. Le spotting est capital — sans lui, impossible de maintenir la ligne\n4. Les bras restent en 1ère fermée\n\n**Usage :**\n- En diagonale (traversée de scène en chaînés)\n- En manège (cercle de scène — très impressionnant)\n- En conclusion de variation ou de grand allegro\n\n**Déboulés :** version plus large des chaînés, où les pieds s'ouvrent plus (proche de la 2ème à chaque pas) — plus de déplacement, plus spectaculaire.",
    erreursCourantes: [
      "Tête qui ne fait pas de spotting — les tours partent dans tous les sens.",
      "Demi-pointes insuffisantes — les pieds sont trop à plat.",
      "Vitesse insuffisante — les chaînés ont besoin d'élan et de maintien de la vitesse.",
    ],
    conseils: [
      "En chaînés, le secret est dans la tête : tu vois le mur devant toi aussi longtemps que possible, puis ta tête tourne deux fois plus vite pour le retrouver. Tes pieds suivent le rythme de ta tête.",
    ],
    difficulteInterne: 3,
    etymologie: "Du français 'chaîner' — les tours s'enchaînent comme les maillons d'une chaîne. 'Déboulés' de 'débouler' (dévaler, aller vite).",
    termesLies: ['pirouette', 'allegro', 'fouette'],
  },

  // ─── Batterie et liaisons ─────────────────────────────────────────────────

  {
    id: 'batterie',
    nom: 'Batterie',
    alias: ['brisé', 'entrechat', 'cabriole', 'temps de cuisse'],
    disciplines: ['classique'],
    categories: ['batterie', 'sauts'],
    definition: "Ensemble des pas dans lesquels les jambes se croisent, se battent ou s'entrechoquent en l'air pendant le saut. La batterie est une spécialité historique du danseur masculin classique.",
    description: "La batterie est l'art de faire 'parler' les jambes dans les airs. Chaque pas de batterie implique que les jambes se touchent ou se croisent pendant la phase de suspension.\n\n**Principaux pas de batterie :**\n\n**Entrechat :**\n- Saut avec croisements rapides des pieds en l'air\n- Entrechat quatre : 4 croisements (départ et retour en 5ème inclus)\n- Entrechat six : 6 croisements — réservé aux artistes très avancés\n- Les entrechats se comptent en pairs (deux croisements = entrechat deux)\n\n**Royale :**\n- Comme un entrechat deux, mais avec un battement au passage\n- Saut de la 5ème, jambes se battent une fois, retour en 5ème\n\n**Brisé :**\n- Petit saut dans lequel une jambe se lance et se bat contre l'autre\n- Peut se faire devant ou derrière, avec déplacement\n\n**Cabriole :**\n- Grande batterie avec élan : une jambe se lance, l'autre la frappe en l'air\n- Simple (un battement) ou double (deux battements)\n- Le plus difficile des pas de batterie",
    erreursCourantes: [
      "Entrechat : les jambes qui battent derrière soi au lieu de battre devant le corps.",
      "Saut trop plat (pas assez de hauteur) — la batterie nécessite de la suspension.",
      "Vitesse de battement insuffisante — les jambes doivent claquer, pas se frôler.",
    ],
    conseils: [
      "Pour l'entrechat : saute d'abord haut, puis pense aux jambes. Si tu penses aux jambes avant de sauter, tu perds de la hauteur.",
    ],
    difficulteInterne: 4,
    etymologie: "Du français 'battre' — les jambes se battent, s'entrechoquent dans les airs. 'Entrechat' de l'italien 'intrecciato' (entrelacé).",
    termesLies: ['allegro', 'frappe', 'assemble'],
  },

  {
    id: 'pas-de-bourree',
    nom: 'Pas de bourrée',
    alias: ['pas de bourrée dessus', 'pas de bourrée dessous', 'bourrée'],
    disciplines: ['classique'],
    categories: ['deplacements', 'liaisons'],
    definition: "Pas de liaison composé de trois petits pas sur demi-pointe, déplaçant le danseur sur le côté ou dans une direction oblique, en croisant ou décroisé. L'un des pas de liaison les plus polyvalents du vocabulaire classique.",
    description: "Le pas de bourrée est le couteau suisse de la danse classique — il s'adapte à toutes les situations.\n\n**Exécution type (pas de bourrée dessous de côté) :**\n1. 5ème position, demi-plié sur la jambe avant\n2. Petit temps levé (ou sans saut en bourrée simple)\n3. Le pied arrière se pose sur demi-pointe\n4. Le pied avant se pose à côté sur demi-pointe\n5. Le pied arrière se pose à côté, fermant en 5ème ou s'ouvrant en 2ème pour le pas suivant\n\n**Types :**\n- **Dessus** : le pied de devant passe derrière (croisé par derrière)\n- **Dessous** : le pied de derrière passe devant (croisé par devant)\n- **En tournant** : le pas s'effectue en pivotant\n- **Couru** : version continue et rapide (course sur demi-pointes)\n\n**Rôle dans les enchaînements :**\n- Préparer une pirouette\n- Suivre un saut\n- Changer de direction\n- Lier deux pas de nature différente",
    erreursCourantes: [
      "Pas effectuer les trois petits pas (glisser en 1 ou 2 pas au lieu de 3).",
      "Demi-pointes insuffisantes — le pas de bourrée se fait vraiment sur les métatarses.",
      "Manque de légèreté — les pas de bourrée ne doivent pas faire de bruit.",
    ],
    conseils: [
      "Pense au bruit que ferait le pas de bourrée sur du parquet. On devrait l'entendre à peine — trois petits froissements, pas trois claquements.",
    ],
    difficulteInterne: 2,
    etymologie: "Du nom de la danse folklorique 'bourrée' (Auvergne, France) — danse en rythme ternaire à pas rapides. Le pas de bourrée de danse classique s'en inspire structurellement.",
    termesLies: ['glissade', 'pirouette', 'allegro'],
  },

  {
    id: 'grand-jete',
    nom: 'Grand jeté',
    alias: ['grand jeté en avant', 'jeté porté', 'saut de l\'ange'],
    disciplines: ['classique'],
    categories: ['sauts', 'allegro'],
    definition: "Grand saut dans lequel le danseur élance une jambe tendue vers l'avant pendant que l'autre pousse à la verticale, créant un grand écart aérien. Le grand jeté est l'un des sauts les plus spectaculaires du vocabulaire classique.",
    description: "Le grand jeté en avant, c'est le saut que tout le monde reconnaît même sans avoir jamais pris un cours de danse. Ces deux jambes tendues en plein vol, à l'horizontale — c'est lui.\n\n**Exécution :**\n1. Élan (souvent par une glissade ou un chassé)\n2. Impulsion sur la jambe d'appui (demi-plié + poussée)\n3. La jambe libre s'élance vers l'avant, tendue\n4. La jambe d'appui pousse et part vers l'arrière\n5. Au point culminant : grand écart aérien\n6. Réception sur la jambe avant, puis plié\n\n**Ce qui fait la qualité du grand jeté :**\n- La suspension au sommet (feeling de flottement)\n- Les deux jambes tendues au maximum\n- La ligne des bras qui s'ouvre en arabesque ou en attitude\n- Un regard vers l'avant, jamais vers le sol\n\n**Variantes :**\n- Grand jeté en attitude : jambe arrière fléchie en attitude\n- Grand jeté en tournant : avec rotation dans les airs (saut de biche)",
    erreursCourantes: [
      "Regarder ses jambes pendant le saut — si tu baisses la tête, tu perds l'élan.",
      "Réception trop dure : le plié doit amortir progressivement, pas s'arrêter net.",
      "Jambe arrière trop basse — les deux jambes doivent tendre vers l'horizontale.",
    ],
    conseils: [
      "Avant de penser à la hauteur, pense à la longueur — le grand jeté voyage. Saute loin, pas seulement haut.",
    ],
    difficulteInterne: 4,
    etymologie: "Du français 'grand' et 'jeté' (de 'jeter') — littéralement, un grand lancer de jambe.",
    termesLies: ['jete', 'assemble', 'allegro', 'arabesque'],
  },

  {
    id: 'pas-de-deux',
    nom: 'Pas de deux',
    alias: ['adage de deux', 'grand pas de deux'],
    disciplines: ['classique'],
    categories: ['concepts', 'ensemble'],
    definition: "Danse pour deux partenaires — généralement structurée en entrée, adage, variations solos et coda. Dans le ballet classique, le pas de deux est le moment culminant où la ballerine atteint ses plus grandes lignes soutenue par son partenaire.",
    description: "Le pas de deux, c'est l'un des moments les plus poétiques du ballet classique. Deux corps qui dialoguent, se soutiennent, se répondent.\n\n**Structure du grand pas de deux classique :**\n1. **Entrée** : les deux danseurs arrivent ensemble\n2. **Adage** : danse lente et soutenue, la ballerine est portée et équilibrée par le partenaire\n3. **Variation de la ballerine** : solo technique de la danseuse\n4. **Variation du danseur** : solo technique du danseur\n5. **Coda** : finale virtuose à deux\n\n**Le rôle du porteur :**\nSoutenir, porter, tourner — tout doit sembler sans effort. L'objectif du partenaire est de sublimer, pas de sauver.\n\n**Célèbres pas de deux :**\n- Le Lac des Cygnes — l'adage du lac\n- La Belle au Bois Dormant — le rose adagio\n- Le Corsaire — virtuosité explosive\n- Giselle — tension dramatique inoubliable\n\n**Évolution :**\nLa forme a évolué — les rôles de porteur/porté ne sont plus genrés dans de nombreuses compagnies contemporaines.",
    erreursCourantes: [
      "Le porteur qui compense les manques au lieu de sublimer — le but n'est pas de sauver, mais d'élever.",
      "La danseuse qui s'accroche au lieu de confier son poids librement — ce n'est pas pareil du tout.",
    ],
    conseils: [
      "En pas de deux, apprenez à vous faire confiance avant d'apprendre les figures. La connexion, ça se construit dans la durée.",
    ],
    difficulteInterne: 5,
    etymologie: "Du français : 'pas' (danse, pas de danse) + 'de deux' (à deux). Il existe aussi le pas de trois et le pas de quatre.",
    termesLies: ['adage', 'arabesque', 'attitude', 'pirouette'],
  },

  {
    id: 'sissonne',
    nom: 'Sissonne',
    alias: ['sissonne ouverte', 'sissonne fermée', 'sissonne simple'],
    disciplines: ['classique'],
    categories: ['sauts', 'allegro'],
    definition: "Saut prenant appui sur deux pieds et retombant sur un seul pied. La sissonne est l'un des sauts les plus fondamentaux du répertoire classique, déclinable à l'infini selon la position de la jambe libre et la direction.",
    description: "La sissonne est partout dans le ballet — dans l'allegro du milieu, dans les variations, dans les diagonales. C'est un saut que tu vas rencontrer quotidiennement.\n\n**Exécution de base :**\n1. Demi-plié en 5ème position\n2. Saut sur deux pieds\n3. En l'air : ouverture de la jambe libre (devant, derrière ou côté)\n4. Réception sur une jambe\n5. Fermeture en 5ème (sissonne fermée) ou maintien de la jambe (sissonne ouverte)\n\n**Les principales sissonnes :**\n- **Sissonne fermée** : retour en 5ème position à la réception\n- **Sissonne ouverte** : la jambe libre reste levée à la réception\n- **En attitude ou en arabesque** : sissonne ouverte dans la position correspondante\n- **Petite sissonne** vs **grande sissonne** : hauteur et ouverture de jambe\n\n**Ce qui différencie une belle sissonne :**\nLa qualité de l'impulsion (les deux pieds doivent partir ensemble) et la tenue de la jambe libre à la réception.",
    erreursCourantes: [
      "Sauter d'un pied au lieu de deux — la sissonne part toujours des deux pieds.",
      "Jambe libre qui s'affaisse à la réception — elle doit rester à la hauteur travaillée.",
      "Plié d'impulsion trop court — compresse comme un ressort avant de sauter.",
    ],
    conseils: [
      "Visualise la sissonne en deux temps : impulsion vers le haut, puis ouverture de la jambe libre. Si tu fais les deux en même temps, tu perds les deux.",
    ],
    difficulteInterne: 3,
    etymologie: "Attribué à une M. de Sissonne, danseuse du XVIIe siècle. L'origine exacte reste incertaine.",
    termesLies: ['assemble', 'allegro', 'batterie', 'arabesque'],
  },

  {
    id: 'changement-de-pied',
    nom: 'Changement de pied',
    alias: ['changement', 'petit changement', 'grand changement'],
    disciplines: ['classique'],
    categories: ['sauts', 'allegro'],
    definition: "Petit saut partant et arrivant en 5ème position, avec changement des pieds en l'air. Le pied qui était devant passe derrière, et vice-versa.",
    description: "Le changement de pied est souvent l'un des premiers petits sauts qu'on apprend. Tout simple en apparence — mais maîtrisé à la perfection, c'est la base de toute la batterie.\n\n**Exécution :**\n1. 5ème position, demi-plié\n2. Saut — les deux pieds quittent le sol simultanément\n3. En l'air : le pied avant passe derrière\n4. Réception en demi-plié, 5ème position inversée\n\n**Points clés :**\n- Les deux pieds doivent quitter le sol **en même temps**\n- Pointes étirées en l'air\n- Passage par les demi-pointes à la réception avant le plié\n- Le changement se fait **en l'air** — pas avant de quitter le sol\n\n**Lien avec la batterie :**\nL'entrechat, la royale, le brisé — ce sont tous des changements de pied avec battements en plus. Maîtriser le changement simple, c'est poser les fondations de la batterie.",
    erreursCourantes: [
      "Les pieds ne se croisent pas assez en l'air — la 5ème doit être nette à la réception.",
      "Plié d'impulsion trop court — prends le temps de plier pour sauter haut.",
      "Réception sur les talons — toujours passer par les demi-pointes avant.",
    ],
    conseils: [
      "Décompose : plié — poussée — suspension — changement — réception. Chaque phase mérite ton attention avant d'accélérer.",
    ],
    difficulteInterne: 1,
    etymologie: "Du français : 'changer les pieds'. Terme entièrement descriptif.",
    termesLies: ['batterie', 'assemble', 'cinq-positions', 'plie'],
  },

  {
    id: 'temps-leve',
    nom: 'Temps levé',
    alias: ['temps levé sauté', 'temps levé en arabesque'],
    disciplines: ['classique'],
    categories: ['sauts', 'allegro'],
    definition: "Petit saut sur une jambe, l'autre jambe maintenant une position (retiré, arabesque, dégagé…). Le temps levé est le saut le plus simple sur une jambe de la danse classique.",
    description: "Le temps levé est à la fois un saut en soi et un outil de liaison permanent entre les pas. Tu l'utilises constamment sans forcément y prêter attention.\n\n**Exécution :**\n1. Demi-plié sur la jambe d'appui\n2. Saut — la jambe d'appui se tend complètement en l'air\n3. La jambe libre maintient sa position (retiré, arabesque, dégagé, etc.)\n4. Réception sur la même jambe, demi-plié\n\n**Positions de la jambe libre les plus fréquentes :**\n- **Retiré** : jambe pliée, pied à hauteur du genou\n- **Arabesque** : jambe tendue derrière\n- **Dégagé à la hauteur** : jambe tendue de côté ou devant\n\n**Usage dans les enchaînements :**\nLe temps levé apparaît souvent en répétitions (temps levés en arabesque enchaînés), comme préparation à un grand saut, ou comme conclusion d'une phrase.",
    erreursCourantes: [
      "Jambe libre qui change de position pendant le saut — elle doit rester exactement où elle était.",
      "Saut trop bas : même petit, le temps levé doit avoir de la suspension.",
      "Jambe d'appui qui ne se tend pas complètement en l'air.",
    ],
    conseils: [
      "Dans les temps levés en arabesque enchaînés, pense à chaque saut individuellement — ne cours pas après le suivant avant d'avoir terminé celui-là.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français : 'temps' (ici, 'mouvement') + 'levé' (soulevé). Littéralement : un mouvement de levée.",
    termesLies: ['arabesque', 'assemble', 'allegro'],
  },

  {
    id: 'demi-pointes',
    nom: 'Demi-pointes',
    alias: ['demi-pointe', 'relevé sur demi-pointes', 'mi-pointes'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz'],
    categories: ['technique-corps', 'fondamentaux'],
    definition: "Position dans laquelle le danseur se tient sur la partie avant du pied — les métatarses — les talons décollés du sol. Les demi-pointes sont à mi-chemin entre le pied à plat et les pointes sur les orteils.",
    description: "Les demi-pointes, c'est l'endroit où on passe une grande partie du temps en cours. Entre le pied à plat et les vraies pointes, il y a ce territoire intermédiaire — les métatarses — qui demande autant de travail qu'on ne le croit.\n\n**La position :**\n- Talons levés, pied en appui sur le tiers avant\n- Les orteils restent posés à plat (contrairement aux pointes)\n- Le genou s'aligne avec l'axe du pied\n\n**L'importance en classique :**\nQuasiment tous les pas de liaison se font sur demi-pointes (pas de bourrée, glissade, chassé). Les pirouettes se lancent et se terminent via les demi-pointes.\n\n**Demi-pointes vs pointes :**\nSur demi-pointes, les orteils sont posés — accessible sans chausson de pointe. Sur pointes, le poids repose sur le bout des orteils dans un chausson rigide — hauteur et contraintes totalement différentes.\n\n**Renforcement :**\nTravailler en demi-pointes renforce les chevilles, les mollets et les intrinsèques du pied. Un travail progressif évite les blessures.",
    erreursCourantes: [
      "Cheville qui s'effondre vers l'intérieur (pronation) en demi-pointe — garder l'alignement genou-cheville-pied.",
      "Orteils qui s'agrippent — ils doivent rester détendus et posés à plat.",
      "Monter sur demi-pointe sans passer progressivement par les phases du pied.",
    ],
    conseils: [
      "Teste ta stabilité en demi-pointe sur une jambe, yeux fermés. C'est un excellent indicateur de la force de ta cheville.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français : 'demi' (à moitié) + 'pointe' (la pointe du pied). Intermédiaire entre pied plat et pointe.",
    termesLies: ['pointes', 'releve', 'plie', 'pirouette'],
  },

  {
    id: 'ballon',
    nom: 'Ballon',
    alias: ['qualité de ballon', 'légèreté en l\'air', 'suspension'],
    disciplines: ['classique'],
    categories: ['qualites-mouvement', 'concepts'],
    definition: "Qualité de légèreté et de suspension dans les sauts — le danseur paraît flotter un instant au sommet de sa trajectoire. Le ballon n'est pas une hauteur brute, c'est une impression de flottement.",
    description: "Le ballon est l'une des qualités les plus enviées et les plus difficiles à définir en danse classique. Ce n'est pas la hauteur du saut — c'est cette seconde de suspension qui fait croire que le danseur peut rester là-haut.\n\n**Ce qui crée le ballon :**\n- Une montée **progressive** et silencieuse vers le sommet\n- Un **sommet prolongé** — la vitesse ralentit au point culminant\n- Une **réception douce** qui amortit progressivement sans bruit\n- Une **ligne** impeccable pendant tout le vol\n\n**Ballon vs hauteur :**\nCertains danseurs très hauts en saut ont peu de ballon. D'autres, plus modestes en hauteur, donnent l'impression de flotter. Le public perçoit le ballon, pas les centimètres.\n\n**Développer le ballon :**\n- Travailler les pliés (l'impulsion douce vient du plié profond)\n- Soigner la réception (pied-demi-pointe-plié, progressif et silencieux)\n- Ne jamais précipiter la descente — laisser le corps 'tomber' lentement\n- Pointes tendues au maximum en l'air (ça étire visuellement la trajectoire)",
    erreursCourantes: [
      "Confondre ballon et hauteur : monter haut ne suffit pas, c'est la qualité du vol qui compte.",
      "Réception dure qui 'coupe' l'impression de légèreté au dernier moment.",
    ],
    conseils: [
      "Écoute tes réceptions — elles doivent être silencieuses. Si tu entends tes pieds, tu perds du ballon.",
    ],
    difficulteInterne: 4,
    etymologie: "Du français 'ballon' (sphère). Par métaphore : le corps léger comme un ballon, qui rebondit et flotte.",
    termesLies: ['allegro', 'assemble', 'jete', 'grand-jete'],
  },

  {
    id: 'coupe',
    nom: 'Coupé',
    alias: ['coupé-jeté', 'coupé en tournant', 'temps coupé'],
    disciplines: ['classique'],
    categories: ['liaisons', 'deplacements'],
    definition: "Petit pas de liaison dans lequel un pied vient se poser sous le centre de gravité, libérant ainsi l'autre pied pour le pas suivant. Le coupé 'vole' la place du pied porteur.",
    description: "Le coupé est invisible pour le public mais essentiel pour le danseur. C'est lui qui prépare les pirouettes, lance les grands sauts, relie les pas entre eux.\n\n**Exécution :**\n1. Un pied en l'air (suite d'un pas précédent)\n2. Ce pied vient se poser sous le centre de gravité, en demi-plié\n3. L'autre pied se libère immédiatement\n4. Ce pied libre enchaîne le pas suivant (jeté, assemblé, pirouette…)\n\n**Coupé dessus / dessous :**\n- **Coupé dessus** : le pied actif passe devant\n- **Coupé dessous** : le pied actif passe derrière\n\n**Coupé en tournant :**\nVariante qui prépare les grandes pirouettes — le coupé se fait avec une rotation qui lance l'élan rotatif.\n\n**Importance dans les enchaînements :**\nLe coupé précède souvent l'assemblé, le jeté, ou sert de lancement à la pirouette. Sans coupé efficace, l'élan se perd.",
    erreursCourantes: [
      "Coupé qui fait du bruit — il doit se poser discrètement, pas claquer.",
      "Plié insuffisant dans le coupé — sans plié, il n'y a pas d'élan pour le pas suivant.",
      "Manque de précision sur dessus ou dessous — ça change tout pour la suite.",
    ],
    conseils: [
      "Pense au coupé comme à un tremplin, pas comme à un pas en soi. Son seul but, c'est de lancer ce qui vient après.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'couper' — le pied coupe la place de l'autre, l'interrompt et la prend.",
    termesLies: ['plie', 'assemble', 'jete', 'pirouette'],
  },

  {
    id: 'enchainement',
    nom: 'Enchaînement',
    alias: ['combinaison', 'phrase de danse', 'séquence'],
    disciplines: ['classique', 'jazz', 'contemporain', 'moderne'],
    categories: ['concepts', 'fondamentaux'],
    definition: "Série de mouvements liés les uns aux autres dans un ordre déterminé, formant une phrase de danse cohérente. L'enchaînement est l'unité de travail de base dans un cours de danse technique.",
    description: "En cours, l'enchaînement, c'est la 'phrase' que le professeur te donne à apprendre et à refaire. C'est l'art de relier les pas entre eux sans rupture.\n\n**Pourquoi enchaîner est difficile :**\nChaque pas individuel peut être maîtrisé, mais les relier demande de :\n- Anticiper (penser toujours au pas suivant)\n- Trouver les pas de liaison (coupé, chassé, pas de bourrée)\n- Respecter le phrasé musical\n- Maintenir la qualité de chaque élément même en mouvement\n\n**Niveaux de complexité :**\n- **Simple** : deux à quatre pas de base liés\n- **Intermédiaire** : changements de direction, de niveau\n- **Avancé** : sauts, tours et liaisons enchaînés avec fluidité\n\n**Enchaînement vs chorégraphie :**\nL'enchaînement est une phrase technique répétée pour développer le corps. La chorégraphie est une composition artistique complète avec intention dramatique ou esthétique.",
    erreursCourantes: [
      "Faire des pauses entre les pas au lieu de les enchaîner — la continuité est l'essence même du mot.",
      "Apprendre les pas séparément et ne jamais travailler leur liaison.",
    ],
    conseils: [
      "Avant de faire un enchaînement en musique, dis-le d'abord à voix haute en marquant les temps : 'plié — arabesque — tombé — pas de bourrée — pirouette'. Ça aide vraiment.",
    ],
    difficulteInterne: 2,
    etymologie: "Du français 'enchaîner' — relier par une chaîne. Les pas s'attachent les uns aux autres comme des maillons.",
    termesLies: ['allegro', 'adage', 'pas-de-bourree', 'coupe'],
  },

  {
    id: 'etoile',
    nom: 'Étoile',
    alias: ['danseuse étoile', 'danseur étoile', 'première danseuse', 'principal dancer'],
    disciplines: ['classique'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Grade le plus élevé dans la hiérarchie des danseurs de l'Opéra de Paris et de certains autres ballets. L'étoile est nommée directement par le directeur de la compagnie, souvent lors d'une représentation — c'est l'un des moments les plus émouvants de la vie d'un danseur.",
    description: "La hiérarchie de l'Opéra de Paris est l'une des plus codifiées au monde, et le titre d'Étoile en est le sommet absolu.\n\n**La hiérarchie classique (Opéra de Paris) :**\n1. **Quadrille** (corps de ballet, entrée de carrière)\n2. **Coryphée** (commence à sortir du corps de ballet)\n3. **Sujet** (rôles plus importants)\n4. **Premier sujet** (rôles principaux réguliers)\n5. **Danseur étoile / Danseuse étoile** (le sommet)\n\n**Le sacre d'une Étoile :**\nÀ l'Opéra de Paris, la nomination se fait souvent sur scène, après une représentation brillante, par le directeur qui prononce les mots : 'Je vous nomme Étoile.' Un moment magique qui a marqué des générations.\n\n**Étoiles célèbres :**\nRudolf Noureev, Margot Fonteyn, Sylvie Guillem, Marie-Agnès Gillot, Benjamin Pech, Aurélie Dupont.\n\n**Autres compagnies :**\nLe titre varie : 'Principal Dancer' au Royal Ballet de Londres ou à l'ABT, 'Primaballerina' dans d'autres compagnies.",
    erreursCourantes: [],
    conseils: [
      "Regarde les nominations d'Étoile en vidéo — ces moments captés sur scène sont parmi les plus émouvants que la danse classique offre.",
    ],
    difficulteInterne: 1,
    etymologie: "Du français 'étoile' — littéralement l'astre qui brille plus que les autres.",
    termesLies: ['corps-de-ballet', 'ballet'],
  },
]
