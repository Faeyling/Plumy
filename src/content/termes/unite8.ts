import type { Terme } from '../schema'

export const termesUnite8: Terme[] = [

  // ─── Technique cabaret ────────────────────────────────────────────────────

  {
    id: 'french-cancan',
    nom: 'French cancan',
    alias: ['cancan', 'can-can', 'cancan français'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire', 'pas'],
    definition: "Danse de revue caractérisée par des séquences de grands battements (high kicks) alternés, des tours, des ports de jupon et des accroupissements acrobatiques, originellement dansée à Paris au XIXe siècle et codifiée dans les revues du Moulin Rouge.",
    description: "Le french cancan est la danse de cabaret la plus iconique au monde — et l'une des plus exigeantes physiquement.\n\n**Histoire :**\n- **1820s** : Le 'chahut' dansé dans les bals populaires parisiens (Bal Bullier, Closerie des Lilas)\n- **1858** : Offenbach compose la musique définitive du cancan (*Orphée aux Enfers*)\n- **1889** : Ouverture du Moulin Rouge — La Goulue et Valentin-le-Désossé font du cancan une sensation internationale\n- **Aujourd'hui** : Les Bluebell Girls (Lido), les Doris Girls (Moulin Rouge) perpétuent la tradition\n\n**Éléments techniques du cancan :**\n- **Grand battement** : jambe tendue qui monte à la verticale, ou au-delà\n- **Arabesque** : jambe en arrière, en ligne\n- **Pirouette** : tours enchaînés\n- **Porte-jupon** : soulèvement du jupon avec les deux mains\n- **Accroche-pied** : saut sur une jambe, l'autre accrochée\n- **Cartwheel** : roue latérale (avancé)\n- **Grand écart** : split final (souvent à terre)\n\n**La synchronisation chorus :**\nLe cancan se danse en ligne de plusieurs danseuses — la synchronisation est un art à part entière.",
    erreursCourantes: [
      "Jambe qui monte sans que le dos reste droit — le grand battement en cancan exige un placement rigoureux.",
      "Jupon négligé — le port du jupon fait partie de la chorégraphie, pas juste du costume.",
    ],
    securite: {
      risques: ["Blessure aux ischio-jambiers si le grand battement est forcé", "Douleur lombaire si le placement n'est pas contrôlé"],
      precautions: ["Échauffement intensif des ischio-jambiers", "Progressivité de l'amplitude"],
    },
    conseils: [
      "Le cancan n'est pas seulement une jambe qui monte — c'est aussi un sourire, une jupe qui vole, et une ligne de danseuses synchronisées. Sans ces trois éléments, c'est un grand battement, pas du cancan.",
    ],
    etymologie: "Du français 'cancan' — terme populaire du XIXe siècle désignant le scandale, le tapage, la chose indécente. La danse portait donc parfaitement son nom à l'époque. Le préfixe 'french' est ajouté à l'étranger pour distinguer la version parisienne de ses imitations.",
    difficulteInterne: 4,
    termesLies: ['chorus-line', 'high-kick', 'grand-battement'],
  },

  {
    id: 'high-kick',
    nom: 'High kick',
    alias: ['grand battement cabaret', 'kick', 'jambe en l\'air', 'coup de pied'],
    disciplines: ['cabaret'],
    categories: ['pas'],
    definition: "Coup de pied vers le haut avec la jambe tendue, pointe pointée, dans un mouvement rapide et précis — élément fondamental et signature du cancan et de la danse de revue.",
    description: "Le high kick est au cabaret ce que la pirouette est au classique — le test de compétence le plus visible.\n\n**Exécution :**\n1. Position de départ : debout, poids sur le pied d'appui\n2. Battement de la jambe vers le haut (tendue, pointe)\n3. Apex : jambe à la verticale ou au-delà (selon la souplesse)\n4. Retour contrôlé vers le bas (pas de chute libre)\n5. Peut s'enchaîner sur l'autre jambe immédiatement\n\n**Les qualités d'un bon high kick :**\n- Jambe parfaitement tendue (pas de genou fléchi)\n- Pied pointé (extension complète)\n- Dos droit pendant le mouvement\n- Le kick est dynamique (pas lent)\n- Le retour est contrôlé\n\n**Variantes :**\n- **Fan kick** : la jambe dessine un arc (de l'avant vers le côté ou l'inverse)\n- **Double kick** : deux battements enchaînés sur la même jambe\n- **Kick with turn** : kick suivi d'un tour\n\n**Dans une ligne chorus :**\nLe high kick en ligne exige que toutes les danseuses arrivent à la même hauteur au même moment — ce qui nécessite de s'ajuster légèrement à la moins flexible du groupe (principe de synchronisation).",
    erreursCourantes: [
      "Genou fléchi pendant le kick — la jambe doit être tendue.",
      "Dos qui recule pour compenser la hauteur — rester droit même si l'amplitude est moins haute.",
    ],
    securite: {
      risques: ["Élongation ou déchirure des ischio-jambiers si forcé", "Douleur lombaire par compensation"],
      precautions: ["Jamais de kick à froid", "Amplitude progressive sur plusieurs semaines"],
    },
    conseils: [
      "Un kick à 90° parfaitement tendu et synchronisé vaut mieux qu'un kick à 120° avec genou fléchi et dos arqué. La qualité prime sur la hauteur.",
    ],
    difficulteInterne: 3,
    termesLies: ['french-cancan', 'fan-kick', 'chorus-line'],
  },

  {
    id: 'fan-kick',
    nom: 'Fan kick',
    alias: ['coup de pied en éventail', 'kick en arc', 'fan', 'rond de jambe kick'],
    disciplines: ['cabaret'],
    categories: ['pas'],
    definition: "Battement de jambe qui décrit un arc de cercle dans l'air — de l'avant vers l'extérieur, ou de l'extérieur vers l'avant — créant une ligne courbe spectaculaire, signature du cancan et des revues.",
    description: "Le fan kick est plus complexe que le high kick car il exige une mobilité de hanche dans plusieurs plans simultanément.\n\n**Exécution (fan kick de l'avant vers l'extérieur) :**\n1. La jambe part vers l'avant (high kick)\n2. Elle ouvre vers le côté (abduction) tout en restant haute\n3. Elle revient vers le bas en arc\n\n**Ce qui fait la beauté du fan kick :**\nL'impression que la jambe trace un demi-cercle parfait dans l'air — fluide, sans accroc.\n\n**Le timing du fan kick :**\nLe fan kick est plus lent que le high kick — il a besoin d'espace dans la phrase musicale.\n\n**Fan kicks en ligne chorus :**\nSi toutes les danseuses font le fan kick au même moment dans la même direction, l'effet est un 'éventail humain' — très visuel.",
    erreursCourantes: [
      "La jambe qui descend avant d'ouvrir (la trajectoire doit passer par le haut, pas couper court).",
      "Le fan kick trop vertical (il doit avoir un composant latéral visible).",
    ],
    conseils: [
      "Imagine que ta jambe peint un arc de cercle sur un mur imaginaire devant toi. Elle commence en bas, monte vers le haut, puis part vers le côté en restant haute. C'est la trajectoire du fan kick.",
    ],
    difficulteInterne: 3,
    termesLies: ['high-kick', 'french-cancan', 'chorus-line'],
  },

  {
    id: 'chorus-line',
    nom: 'Chorus line / Ligne de chorus',
    alias: ['ligne de danseuses', 'chorus', 'line de revue', 'ensemble revue'],
    disciplines: ['cabaret'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Formation de danseurs alignés en ligne effectuant une chorégraphie synchronisée — structure fondamentale de la revue musicale et du cabaret, exigeant une synchronisation précise, une uniformité esthétique et une présence collective.",
    description: "La chorus line est l'image définitive du cabaret — une rangée de danseuses parfaitement synchronisées, en costume identique, formant un ensemble spectaculaire.\n\n**Histoire :**\n- **1866** : The Black Crook (New York) — premières chorus girls aux États-Unis\n- **1925** : Florenz Ziegfeld codifie la Follies — la chorus girl américaine\n- **1974** : *A Chorus Line* (Kander/Ebb) — la comédie musicale qui rend hommage et critique l'institution\n- Moulin Rouge, Lido, Folies Bergère : les grandes maisons du chorus français\n\n**Principes de la chorus line :**\n\n**Synchronisation :**\nToutes les danseuses bougent exactement au même moment. La synchronisation est auditive (écoute musicale) et visuelle (vision périphérique).\n\n**Uniformité esthétique :**\nDans la revue traditionnelle, les danseuses ont les mêmes costumes, la même coiffure, des corps 'similaires' (notion aujourd'hui contestée et en évolution).\n\n**Rapport à la ligne :**\nLa formation en ligne est maintenue même pendant les mouvements — l'écart entre chaque danseuse est constant.\n\n**L'évolution de la chorus line :**\nLe modèle traditionnel est aujourd'hui questionné — diversité des corps, des genres, des ethnies. La chorus line contemporaine intègre cette pluralité.",
    erreursCourantes: [
      "Se synchroniser en regardant les voisines (ça crée un délai). Écouter la musique collectivement.",
    ],
    conseils: [
      "En chorus line, tu n'es pas une soliste — tu es un instrument dans un orchestre. Ton rôle est de *fondre* dans l'ensemble, pas de te distinguer. La beauté vient de l'unité.",
    ],
    etymologie: "De l'anglais 'chorus' (chœur, groupe de danseurs/chanteurs de soutien) et 'line' (ligne). La ligne de chœur est la formation iconique de la revue — rangée alignée, synchronisée, uniformément costumée.",
    difficulteInterne: 2,
    termesLies: ['synchronisation-chorus', 'high-kick', 'french-cancan'],
  },

  {
    id: 'synchronisation-chorus',
    nom: 'Synchronisation en ensemble',
    alias: ['sync', 'timing collectif', 'unisson revue'],
    disciplines: ['cabaret'],
    categories: ['concepts'],
    definition: "Art d'exécuter simultanément les mêmes mouvements avec un groupe de danseurs, avec une précision de timing, d'amplitude et d'énergie suffisante pour que l'ensemble semble animé par une seule intention.",
    description: "La synchronisation en revue est un art à part entière — différent de l'unisson en danse contemporaine par son contexte et ses exigences.\n\n**Ce qui crée la synchronisation :**\n\n**1. L'écoute musicale collective :**\nLe pulse musical est l'horloge commune. Toutes les danseuses doivent 'tomber' dans le même beat — pas regarder les autres pour se caler.\n\n**2. L'amplitude homogène :**\nSi une danseuse fait un high kick à 90° et une autre à 120°, l'image est déséquilibrée. L'amplitude commune est souvent celle de la moins flexible (principe du maillon faible).\n\n**3. La vision périphérique :**\nEn ligne, on ne tourne pas la tête pour regarder ses voisines — on utilise la vision périphérique pour les voir sans les regarder.\n\n**4. Les répétitions et repères :**\nLa synchronisation se construit en répétition — les repères (formations, entrées, accents) s'intègrent progressivement.\n\n**Synchronisation vs uniformité :**\nLa vraie synchronisation est une *énergie commune* — les corps bougent ensemble parce qu'ils *respirent* ensemble, pas parce qu'ils copient mécaniquement.",
    erreursCourantes: [
      "Regarder les voisines pour se synchroniser (crée un délai systématique).",
      "Synchronisation de la forme sans synchronisation de l'énergie.",
    ],
    conseils: [
      "À la fin d'une répétition en groupe, filmez-vous. Regardez la vidéo en mode accéléré (x2) — les désynchronisations deviennent immédiatement visibles.",
    ],
    difficulteInterne: 3,
    termesLies: ['chorus-line', 'unisson'],
  },

  {
    id: 'port-costume',
    nom: 'Port du costume et des accessoires',
    alias: ['port de costume', 'gestion des accessoires', 'technique costume'],
    disciplines: ['cabaret'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Technique d'intégration du costume et des accessoires dans la danse — marcher en robe longue ou à traîne, manier le jupon, le boa, la canne ou le chapeau comme extensions chorégraphiques du corps.",
    description: "En cabaret, le costume n'est pas un ajout à la danse — il *est* une partie de la danse. Le port du costume est une compétence technique à part entière.\n\n**Les défis du port du costume en cabaret :**\n\n**La robe longue / traîne :**\n- Gérer le bas de robe lors des kicks\n- Ne pas trébucher en montant les escaliers scéniques\n- Faire une révérence sans marcher sur la robe\n\n**Le jupon de cancan :**\n- Porte-jupon : saisir le jupon avec les deux mains et le soulever\n- Agiter : ondulations rythmées du jupon\n- Le jupon révèle et cache — c'est une chorégraphie dans la chorégraphie\n\n**Le boa :**\n- Draper sur les épaules, sur les bras, faire tourner\n- Le boa a une inertie propre — il suit le corps mais avec un délai\n- Éviter de l'emmêler dans les pieds\n\n**La canne et le chapeau :**\nVoir termes dédiés — ce sont des accessoires avec leur propre technique.\n\n**La règle d'or :**\nSi le costume gêne la danse, c'est qu'on n'a pas répété *avec* le costume. Toutes les répétitions importantes se font en costume complet.",
    erreursCourantes: [
      "Répéter sans le costume jusqu'à la veille du spectacle — le costume modifie la danse et nécessite une adaptation.",
    ],
    conseils: [
      "Répète avec ton costume (ou un équivalent) dès que possible. Si tu n'as pas ton costume, utilise un drap noué comme jupe pour pratiquer les gestes. Le corps doit être habitué au poids et au volume.",
    ],
    difficulteInterne: 2,
    termesLies: ['canne-chapeau-cabaret', 'boa-eventail', 'french-cancan'],
  },

  {
    id: 'canne-chapeau-cabaret',
    nom: 'Canne et chapeau',
    alias: ['canne', 'chapeau haut-de-forme', 'top hat', 'accessoires scéniques'],
    disciplines: ['cabaret'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Technique de manipulation de la canne et du chapeau haut-de-forme comme extensions chorégraphiques du corps — balancers, jonglages simples, ports et utilisations rythmiques de ces accessoires iconiques du music-hall.",
    description: "La canne et le chapeau haut-de-forme sont des accessoires indissociables du music-hall et du style Fosse.\n\n**La canne en danse :**\n\n**Porter la canne :**\n- En appui (comme une canne ordinaire) pour les poses statiques\n- Sur l'épaule ou dans le creux du coude\n- Tenue par le bas (comme une baguette de chef d'orchestre)\n\n**Manipuler la canne :**\n- **Pirouette avec canne** : la canne tourne dans les doigts pendant un tour\n- **Balancer** : la canne oscille comme un pendule\n- **Tap** : frapper le sol sur les temps pour une ponctuation rythmique\n\n**Le chapeau haut-de-forme :**\n\n**Porter le chapeau :**\n- En équilibre sur la tête (et l'y maintenir pendant les kicks)\n- À la main, bras tendu\n- Incliné sur le côté (attitude cabaret)\n\n**Manipuler le chapeau :**\n- **Roll** : faire rouler le chapeau sur le bras, de la main à l'épaule\n- **Toss** : lancer légèrement et rattraper\n- **Tip** : effleurer le bord du chapeau (geste d'élégance)\n\n**Dans le style Fosse :**\nBob Fosse a élevé la canne et le chapeau au rang d'instruments de danse. *Chicago*, *Cabaret*, *Pippin* : les accessoires sont des partenaires du danseur.",
    erreursCourantes: [
      "Accessoire qui 'distrait' la chorégraphie au lieu de la compléter — l'accessoire doit sembler naturel.",
    ],
    conseils: [
      "Répète sans l'accessoire, puis répète avec. Observe ce que l'accessoire change — dans la façon dont tu tiens le corps, dans la façon dont tu occupes l'espace. L'accessoire *change* ta présence.",
    ],
    difficulteInterne: 3,
    termesLies: ['boa-eventail', 'port-costume', 'sous-style-fosse'],
  },

  {
    id: 'boa-eventail',
    nom: 'Boa et éventail',
    alias: ['boa de plumes', 'éventail', 'fan dance', 'boa feathers'],
    disciplines: ['cabaret', 'burlesque'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Technique de manipulation du boa de plumes et de l'éventail géant comme accessoires chorégraphiques — ondulations, drapés, révélations et voilages caractéristiques du cabaret, du burlesque et de la danse orientale.",
    description: "Le boa et l'éventail sont des accessoires qui ont leur propre physique — apprendre à travailler avec cette physique, c'est comprendre leur poésie.\n\n**Le boa de plumes :**\n\n**Physique du boa :**\nLe boa est lourd et a une inertie propre. Il suit le corps avec un délai — ce délai est beau, et il faut le prévoir.\n\n**Techniques de base :**\n- **Draper** : le boa autour du cou, des épaules ou des bras\n- **Faire tourner** : le boa en moulin au-dessus de la tête\n- **Jeter** : lancer un bout du boa vers le public\n- **Whip** : un claquement du boa vers le bas\n\n**L'éventail géant (fan dance) :**\n\n**La fan dance (Sally Rand, 1933) :**\nSally Rand popularise la fan dance avec deux grands éventails de plumes — l'art de se voiler et de se révéler.\n\n**Techniques de l'éventail :**\n- **Ouverture** : l'éventail s'ouvre en arc devant le corps\n- **Voilage** : l'éventail cache une partie du corps\n- **Révélation** : l'éventail s'écarte pour révéler\n- **Valse des éventails** : deux éventails qui se 'parlent'",
    erreursCourantes: [
      "Ignorer la physique du boa (il ne répond pas comme un bras — anticiper son inertie).",
    ],
    conseils: [
      "Avant de chorégraphier avec un boa, joue avec pendant 10 minutes sans musique. Observe comment il bouge selon ta vitesse, ta direction, ton énergie. C'est lui qui t'apprendra comment l'utiliser.",
    ],
    difficulteInterne: 2,
    termesLies: ['port-costume', 'canne-chapeau-cabaret', 'effeuillage'],
  },

  {
    id: 'meneuse-revue',
    nom: 'Meneuse de revue',
    alias: ['meneuse', 'première danseuse revue', 'lead dancer revue'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire', 'jeu-de-scene'],
    definition: "Danseuse principale d'une revue ou d'un spectacle de cabaret — celle qui mène la troupe sur scène, donne le tempo, anime les tableaux et incarne l'esthétique et l'énergie du spectacle.",
    description: "La meneuse de revue est un métier et un art en soi — bien distinct de celui de danseuse de chorus.\n\n**Le rôle de la meneuse :**\n- Ouvrir et fermer les tableaux\n- Donner le tempo à la troupe (corps visible de toutes)\n- Incarner l'énergie et le style du spectacle\n- Avoir une présence scénique qui domine sans écraser\n\n**Les grandes meneuses :**\n- **Mistinguett** (1875–1956) : Moulin Rouge, Folies Bergère — ses jambes assurées pour 500 000 francs\n- **Joséphine Baker** (1906–1975) : Revue nègre, Folies Bergère — révolutionnaire dans tous les sens du terme\n- **Zizi Jeanmaire** (1924–2020) : chorégraphies de Roland Petit, *Carmen*\n- **Bluebell** (Margaret Kelly, 1910–2004) : créatrice des Bluebell Girls du Lido\n\n**Les qualités de la meneuse :**\n- Présence scénique exceptionnelle\n- Sens du public et du timing\n- Capacité à 'tenir' un spectacle sur la durée\n- Autorité naturelle sur la troupe\n- Charisme qui transcende la technique",
    erreursCourantes: [],
    conseils: [
      "Pour développer la présence de meneuse : répète face à un miroir en imaginant une salle comble. Ton regard, ton maintien, ta façon d'occuper l'espace — tout doit dire 'je suis là pour vous'. C'est ça, mener.",
    ],
    etymologie: "Du verbe français 'mener' (conduire, diriger, guider). La meneuse de revue est celle qui 'mène' le groupe sur scène — elle est à la fois chef de file et incarnation de l'art de la revue.",
    difficulteInterne: 4,
    termesLies: ['chorus-line', 'presentation-scenique', 'rapport-public'],
  },

  {
    id: 'presentation-scenique',
    nom: 'Présentation scénique',
    alias: ['jeu de scène', 'performance cabaret', 'stage presence', 'présence scène'],
    disciplines: ['cabaret'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Ensemble des qualités qui font qu'un artiste 'tient' la scène — regard, sourire, projection, conscience du public, gestion de l'espace scénique et capacité à raconter quelque chose au-delà de la pure exécution technique.",
    description: "La présentation scénique est ce qui différencie un bon technicien d'un artiste de scène.\n\n**Les éléments de la présentation scénique :**\n\n**Le regard :**\nLe regard est la connexion directe avec le public. En cabaret, on ne danse pas dans sa tête — on danse *pour* quelqu'un.\n\n**Le sourire :**\nPas un sourire figé et forcé — un sourire qui dit 'je suis là, je vous vois, je suis ravie d'être ici'. La différence entre un sourire performé et un sourire habité.\n\n**La projection :**\nL'énergie qui sort du corps vers le public. Un danseur peut faire tous les bons gestes sans projeter — alors le public ne 'reçoit' rien.\n\n**La conscience de l'espace :**\nSavoir où on est sur scène, qui est face à soi, comment on se déplace dans l'espace par rapport aux autres et aux décors.\n\n**Le rapport à l'imprévu :**\nEn spectacle, quelque chose se passe toujours : une plume de boa qui tombe, un musicien qui prend un tempo différent. La présentation scénique c'est aussi la capacité à absorber l'imprévu sans le montrer.\n\n**Cabaret vs contemporain :**\nEn cabaret, la présentation scénique est souvent plus extravertie et directement orientée vers le public qu'en danse contemporaine.",
    erreursCourantes: [
      "Danse technique parfaite mais sans regard ni projection — le public ne se sent pas concerné.",
    ],
    conseils: [
      "Filme une répétition, puis une représentation. Observe la différence. En représentation, quelque chose s'allume — c'est la présentation scénique. Maintenant : comment faire brûler ce feu aussi en répétition ?",
    ],
    difficulteInterne: 3,
    termesLies: ['rapport-public', 'meneuse-revue', 'chorus-line'],
  },

  {
    id: 'rapport-public',
    nom: 'Rapport au public',
    alias: ['relation au public', 'audience connection', 'quatrième mur'],
    disciplines: ['cabaret', 'burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Relation intentionnelle et vivante entre le danseur et le public — la capacité à sentir, nourrir et jouer avec la réaction du public, à briser ou maintenir le quatrième mur, à créer une expérience partagée plutôt qu'un simple spectacle.",
    description: "En cabaret et en burlesque, le public n'est pas spectateur — il est *participant*. La relation au public est au centre de l'art.\n\n**Le quatrième mur :**\nEn théâtre classique, il existe une 'paroi invisible' entre la scène et la salle. Le cabaret et le burlesque la brisent intentionnellement.\n\n**Techniques de rapport au public :**\n\n**Le regard direct :**\nLire le regard du public dans les yeux — pas flotter au-dessus de leurs têtes.\n\n**Le wink et le jeu :**\nLes clins d'œil, les sourires complices, les petits gestes privés adressés à une personne dans la salle.\n\n**La lecture de salle :**\nSentir l'énergie du public : sont-ils chauds, froids, surpris ? Adapter son jeu en conséquence (sans changer la chorégraphie).\n\n**Le timing comique :**\nEn cabaret, les moments humoristiques nécessitent un timing parfait — laisser le rire monter, puis reprendre. Ne pas 'couper' le rire.\n\n**La révérence comme communication :**\nLa révérence n'est pas une formalité — c'est le dernier moment de conversation avec le public. Elle doit dire quelque chose.",
    erreursCourantes: [
      "Regarder au-dessus des têtes du public (connexion perdue).",
      "Ne pas laisser de place au public pour réagir (timing trop serré).",
    ],
    conseils: [
      "Lors de ta prochaine représentation, choisis deux ou trois personnes dans le public et danse *pour* elles spécifiquement (en plusieurs moments). Observe comment leur présence change ta danse.",
    ],
    difficulteInterne: 3,
    termesLies: ['presentation-scenique', 'tease', 'sass'],
  },

  // ─── Termes supplémentaires cabaret ──────────────────────────────────────

  {
    id: 'grand-ecart-cancan',
    nom: 'Grand écart',
    alias: ['split', 'grand split cancan', 'split final', 'écart au sol'],
    disciplines: ['cabaret'],
    categories: ['pas', 'equilibres'],
    definition: "Position au sol où les deux jambes sont étendues en ligne droite à 180°, atteinte au terme d'une descente contrôlée — signature dramatique du cancan et de la revue, utilisée comme finale spectaculaire.",
    description: "Le grand écart est la signature finale du cancan — et c'est aussi l'une des choses les plus mal comprises. Ce n'est pas une chute. C'est un choix.\n\n**Le grand écart dans le cancan :**\nIl ne s'agit pas de 'tomber' dans un split — c'est une *descente contrôlée*, chorégraphiée, souvent placée sur un accent musical final. La descente elle-même fait partie du spectacle.\n\n**Exécution :**\n1. Position debout ou en saut de split (grand écart sauté)\n2. Descente progressive vers le sol, jambes qui s'ouvrent simultanément\n3. Arrêt au sol en ouverture maximale\n4. Maintien de la position pour l'effet dramatique\n5. L'expression reste présente — le grand écart ne doit jamais *sembler* douloureux\n\n**Grand écart sauté (niveau avancé) :**\nDans les revues professionnelles, le grand écart peut être précédé d'un saut — la danseuse quitte le sol et atterrit directement en split. Ça nécessite des années de préparation.\n\n**Ce qui fait un bon grand écart en cabaret :**\n- Descente contrôlée et chorégraphiée\n- Position finale tenue avec soin\n- Expression préservée — sourire, regard actif\n- Timing sur un accent musical fort\n\n**Entretien :**\nLe grand écart nécessite une souplesse maintenue au quotidien — ischio-jambiers et fléchisseurs de hanche. Sans entretien régulier, il disparaît vite.",
    erreursCourantes: [
      "Descente non contrôlée — le grand écart se chorégraphie, il ne se 'laisse pas tomber'.",
      "Expression perdue pendant la descente — le visage doit rester présent jusqu'à la position finale.",
      "Forcer l'ouverture sans souplesse préalable — risque de déchirure musculaire.",
    ],
    securite: {
      risques: ["Déchirure des ischio-jambiers ou des adducteurs si forcé", "Blessure en grand écart sauté par atterrissage non contrôlé"],
      precautions: ["Souplesse à entretenir quotidiennement", "Jamais à froid", "Progressivité sur plusieurs mois avant de viser 180°"],
    },
    conseils: [
      "Travaille ton grand écart chaque jour, même 5 minutes. La souplesse se perd vite et se regagne lentement. Si tu ne pratiques que le jour du spectacle, tu vas souffrir — et ça se verra.",
    ],
    etymologie: "Du français 'grand' et 'écart' (distance entre deux éléments). Le grand écart désigne l'ouverture maximale des deux jambes — une image parlante, même hors de la danse.",
    difficulteInterne: 4,
    termesLies: ['french-cancan', 'high-kick', 'chorus-line'],
  },

  {
    id: 'accroche-pied',
    nom: 'Accroche-pied',
    alias: ['saut accroche', 'saut jambe accrochée', 'pas accroche cancan'],
    disciplines: ['cabaret'],
    categories: ['pas', 'sauts'],
    definition: "Saut sur une jambe d'appui où la jambe libre est accrochée en flexion — genou pointé vers le bas, talon ramené vers la fesse — figure rythmique légère caractéristique du french cancan.",
    description: "L'accroche-pied est un des 'petits pas' du cancan — moins spectaculaire que le high kick ou le grand écart, mais essentiel pour la respiration rythmique du numéro. Je l'adore parce qu'il prouve que le cancan ne se résume pas à la jambe qui monte.\n\n**Exécution :**\n1. Position debout, poids sur les deux pieds\n2. Petit saut sur la jambe d'appui\n3. La jambe libre se fléchit, genou pointé vers le bas, talon ramené vers la fesse\n4. Le mouvement est rapide et rebondi — une légèreté vive\n5. La jambe libre 'accroche' derrière\n\n**Usage dans le cancan :**\nL'accroche-pied intervient généralement entre les grands battements — c'est un temps de 'respiration rythmique' qui permet de reprendre l'élan avant le kick suivant.\n\n**La sensation :**\nCelui d'un petit rebond spontané — presque un skip, mais avec la jambe qui s'accroche derrière plutôt que de monter.\n\n**En ligne chorus :**\nEn synchronisation, l'accroche-pied doit être fait à la même hauteur et avec la même énergie par toutes — sinon la ligne devient 'bruyante' visuellement.",
    erreursCourantes: [
      "Genou qui monte vers l'avant — il doit pointer vers le bas, pas vers le haut.",
      "Accroche-pied trop lent — c'est un pas vif, avec rebond spontané, pas une pose.",
    ],
    conseils: [
      "Entraîne-toi d'abord sans saut : reste sur une jambe, fléchis l'autre derrière toi. Quand la position est claire, ajoute le petit saut. La forme avant le dynamisme.",
    ],
    difficulteInterne: 2,
    termesLies: ['french-cancan', 'high-kick', 'chorus-line'],
  },

  {
    id: 'revue',
    nom: 'Revue de music-hall',
    alias: ['revue', 'music-hall', 'spectacle de revue', 'grand spectacle'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Forme de spectacle de variétés composée de tableaux successifs mêlant danse, chant, sketches et effets scéniques — genre emblématique du cabaret parisien et du music-hall international, né à la fin du XIXe siècle.",
    description: "La revue est le format autour duquel s'est construit tout le cabaret occidental. Si je devais résumer : c'est un album de moments — pas un film avec un fil narratif.\n\n**Structure d'une revue :**\nUne revue est une succession de **tableaux** — chacun est un mini-spectacle autonome avec son thème, son costume, sa musique. La revue n'a pas de narration unique : c'est la variété et le contraste qui font le rythme.\n\n**Les ingrédients de base :**\n- **Tableaux** : scènes chorégraphiées thématiques enchaînées\n- **Chorus line** : danseuses synchronisées en ligne\n- **Meneuse** : la soliste qui anime et relie\n- **Costumes extravagants** : plumes, paillettes, coiffes hautes\n- **Décors et machinerie** : escaliers monumentaux, effets de lumière\n- **Artistes invités** : musiciens, comédiens, acrobates\n\n**Les grandes maisons :**\n- **Moulin Rouge** (Paris, 1889) : Doris Girls, cancan, dîner-spectacle\n- **Lido** (Paris, 1946) : Bluebell Girls, décors géants\n- **Folies Bergère** (Paris, 1869) : Joséphine Baker, revues legendaires\n- **Ziegfeld Follies** (New York, 1907–1931) : la revue américaine\n\n**La revue contemporaine :**\nLes grandes maisons continuent. Et le 'néo-cabaret' propose une version plus intime — moins de plumes, plus de sens, plus de diversité.",
    erreursCourantes: [],
    conseils: [
      "Si tu n'as jamais vu une revue en vrai, note le 'parcours émotionnel' des tableaux quand tu en verras une. Comment chaque tableau prépare-t-il le suivant ? C'est l'art du programmateur de revue — et ça s'apprend juste en regardant.",
    ],
    etymologie: "Du latin 'revidere' (revoir) → français 'revue'. Au XIXe siècle, la revue est un spectacle de variétés qui 'passe en revue' l'actualité ou les modes — d'abord satirique, puis purement spectaculaire.",
    difficulteInterne: 1,
    termesLies: ['tableau-revue', 'chorus-line', 'meneuse-revue', 'french-cancan'],
  },

  {
    id: 'tableau-revue',
    nom: 'Tableau',
    alias: ['tableau de revue', 'tableau chorégraphique', 'numéro de revue', 'scène de revue'],
    disciplines: ['cabaret'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Unité autonome d'une revue de music-hall — séquence chorégraphique et scénique avec son propre thème, costume, musique et atmosphère, qui s'enchaîne à d'autres tableaux pour former le spectacle complet.",
    description: "Le tableau est la brique de base de la revue. Comprendre le tableau, c'est comprendre comment fonctionne le cabaret.\n\n**Structure d'un tableau :**\n- Un **thème** unificateur (une époque, un pays, une saison, un état d'esprit)\n- Un **costume** cohérent avec le thème\n- Une **musique** originale ou arrangée\n- Une **chorégraphie** construite autour du thème\n- Un **début et une fin** nets — le tableau a une forme complète\n\n**Exemples de thèmes :**\n- 'Le Brésil' — samba, costumes tropicaux, percussions\n- 'L'Égypte' — lignes géométriques, coiffes de pharaon\n- 'La Belle Époque' — corsets, jupons, valse\n- 'L'Espace' — costumes futuristes, lumières stroboscopiques\n\n**Le rôle du tableau dans la revue :**\nLa succession des tableaux crée le rythme de la soirée. Un tableau lent, un tableau vif, un solo, un grand ensemble — le programme d'une revue est une orchestration de contrastes.\n\n**Durée :**\nUn tableau dure généralement de 3 à 10 minutes. La revue complète peut durer de 90 minutes à 2h30.",
    erreursCourantes: [],
    conseils: [
      "Quand tu regardes une revue, observe les *transitions* entre tableaux. Comment une ambiance glisse vers une autre ? C'est là que se révèle le soin de la mise en scène — dans les coutures invisibles.",
    ],
    difficulteInterne: 1,
    termesLies: ['revue', 'chorus-line', 'meneuse-revue'],
  },

  {
    id: 'chahut',
    nom: 'Chahut',
    alias: ['chahut populaire', 'danse de bal populaire', 'ancêtre du cancan'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire'],
    definition: "Danse populaire parisienne des années 1820–1840, ancêtre direct du french cancan — pratiquée dans les bals publics de Montparnasse et du quartier Latin, caractérisée par une improvisation exubérante, des mouvements acrobatiques et un esprit délibérément scandaleux.",
    description: "Le chahut, c'est le commencement de tout — et j'adore que le cancan ait une histoire aussi populaire. Il n'est pas né dans une école de danse. Il a jailli d'une salle de bal bondée.\n\n**Le chahut dans les bals populaires :**\nLe chahut naît dans les bals publics parisiens du début du XIXe siècle — Bal Bullier, Closerie des Lilas, dans les quartiers du Panthéon et de Montparnasse. C'est une danse mixte, improvisée, pratiquée par des étudiants, des grisettes, des artistes. Elle est délibérément scandaleuse — tapage, gestes suggestifs, jupes qui volent.\n\n**Étymologie du 'chahut' :**\nLe mot signifie 'tapage, désordre, bruit' — la danse porte parfaitement son nom. Elle *dérange*, elle *scandalise*.\n\n**Du chahut au cancan :**\n- 1820s : chahut dans les bals populaires\n- 1858 : Offenbach compose le Galop infernal\n- 1889 : Moulin Rouge — La Goulue et Valentin-le-Désossé transforment le chahut en spectacle professionnel codifié\n\n**Figures historiques du chahut :**\n- **Céleste Mogador** (1824–1909) : danseuse de bal populaire, l'une des premières figures du chahut\n- **Valentin-le-Désossé** (1843–1907) : danseur hors norme au Moulin Rouge, immortalisé par Toulouse-Lautrec\n- **La Goulue** (1866–1929) : celle qui fait passer le chahut au rang de spectacle international",
    erreursCourantes: [],
    conseils: [
      "Comprendre le chahut, c'est comprendre pourquoi le cancan est une danse vivante. Elle n'a pas été inventée dans une académie — elle a jailli d'une salle de bal scandaleuse. Garde cette énergie populaire en tête quand tu danses.",
    ],
    etymologie: "Mot français désignant le tapage, le désordre, le bruit. Utilisé pour désigner la danse par analogie avec l'agitation et le scandale qu'elle provoquait dans les bals populaires parisiens.",
    difficulteInterne: 1,
    termesLies: ['french-cancan', 'galop-cancan', 'revue'],
  },

  {
    id: 'galop-cancan',
    nom: 'Galop',
    alias: ['galop infernal', 'pas de galop', 'galop cancan', 'galop Offenbach'],
    disciplines: ['cabaret'],
    categories: ['deplacements', 'pas'],
    definition: "Pas locomoteur de base du french cancan — séquence de petits sauts alternatifs en déplacement latéral ou en avant, au rythme du Galop infernal d'Offenbach, qui donne au cancan son énergie et sa célérité caractéristiques.",
    description: "Le galop est le moteur du cancan — ce qui fait courir, tourbillonner, s'élancer les danseuses. Impossible de comprendre le cancan sans comprendre le galop.\n\n**La musique du galop :**\nLe 'Galop infernal' d'Offenbach (extrait d'*Orphée aux Enfers*, 1858) est devenu la musique universelle du cancan. Son rythme effréné, à 2/4 très rapide, dicte directement la vitesse et l'énergie du pas.\n\n**Exécution du galop :**\n1. Départ sur une jambe, légèrement en flexion\n2. Saut léger avec impulsion sur cette jambe\n3. Réception sur le pied opposé (en déplacement)\n4. Enchaînement rapide : droite–gauche–droite–gauche\n5. Le mouvement est vif, rebondi, aérien malgré la vitesse\n\n**Variantes :**\n- **Galop latéral** : déplacement vers les côtés (la plus courante en chorus)\n- **Galop en avant** : course légère vers le devant, souvent vers le public\n- **Galop en cercle** : formation tournante\n\n**Le galop dans la phrase musicale :**\nLe galop structure les liaisons entre les figures — il donne de l'élan avant un high kick, permet de changer de position dans la ligne, crée une énergie continue entre les moments forts.",
    erreursCourantes: [
      "Galop lourd et pesant — le galop doit être aérien et rebondi, pas plaqué au sol.",
      "Galop trop grand (les pas sont petits et serrés, pas de grandes enjambées).",
    ],
    conseils: [
      "Écoute le Galop d'Offenbach et essaie de 'tomber' dans son rythme avant de bouger. Le galop n'est pas un effort — c'est un abandon au tempo. Quand tu forces, ça se voit immédiatement.",
    ],
    etymologie: "Du vieux français 'galoper' (aller au galop) — le pas imite le rythme du galop du cheval : léger, alterné, rapide. Le 'Galop infernal' d'Offenbach a popularisé ce pas au-delà de toute autre danse.",
    difficulteInterne: 2,
    termesLies: ['french-cancan', 'chahut', 'high-kick'],
  },

  {
    id: 'arabesque-cancan',
    nom: 'Arabesque cancan',
    alias: ['port de jambe cancan', 'arabesque revue', 'jambe arrière cancan'],
    disciplines: ['cabaret'],
    categories: ['pas', 'equilibres'],
    definition: "Position où la jambe libre est portée en arrière et en hauteur, tendue, tandis que le buste s'incline légèrement vers l'avant — variante théâtrale de l'arabesque intégrée dans le french cancan, souvent associée au port du jupon.",
    description: "L'arabesque cancan est la position qui donne au cancan sa silhouette la plus élégante — et la plus photographiée. La jambe arrière qui monte, le buste qui s'incline, la jupe qui vole. C'est le moment de grâce dans un enchaînement d'énergie.\n\n**Exécution :**\n1. Position debout, poids sur la jambe d'appui\n2. La jambe libre s'étend vers l'arrière, pied pointé\n3. La jambe monte en hauteur (amplitude selon la souplesse)\n4. Le buste s'incline légèrement vers l'avant\n5. Les bras tiennent le jupon, s'ouvrent sur les côtés, ou se posent sur la hanche selon le style\n\n**Différence avec l'arabesque classique :**\nEn danse classique, le dos reste long et horizontal. En cancan, l'inclinaison du buste est plus prononcée — la silhouette est plus théâtrale, moins épurée. Ce n'est pas une faute : c'est le style.\n\n**Usage dans le cancan :**\nL'arabesque cancan arrive dans les moments de respiration rythmique — après une série de kicks, elle ralentit le tempo et crée un contraste élégant avant de repartir.\n\n**Le jupon dans l'arabesque :**\nSouvent, le jupon est tenu d'une ou deux mains pendant l'arabesque — ce qui ajoute un voile de tissu dans l'espace et rend la silhouette encore plus spectaculaire.",
    erreursCourantes: [
      "Jambe arrière fléchie — elle doit rester tendue, pied pointé, tout le long.",
      "Buste qui ne s'incline pas — c'est l'inclinaison qui crée la ligne caractéristique du cancan.",
    ],
    conseils: [
      "Pense à la jambe arrière qui tire le buste vers l'avant — les deux extrémités du corps sont en tension opposée. C'est cette tension qui crée la beauté de la ligne.",
    ],
    difficulteInterne: 3,
    termesLies: ['french-cancan', 'porte-jupon', 'high-kick'],
  },

  {
    id: 'porte-jupon',
    nom: 'Porte-jupon',
    alias: ['soulèvement du jupon', 'agitation du jupon', 'technique du jupon cancan'],
    disciplines: ['cabaret'],
    categories: ['accessoires', 'pas'],
    definition: "Geste technique de soulèvement du jupon de cancan à deux mains, suivi d'une agitation rythmique — chorégraphie dans la chorégraphie, le porte-jupon révèle et dissimule alternativement les jambes en synchronisation avec la musique.",
    description: "Le porte-jupon est l'un des éléments les plus distinctifs du cancan — et l'un des plus sous-estimés. Ce n'est pas un geste décoratif. C'est une technique à part entière, et le jupon a sa propre chorégraphie.\n\n**La prise :**\nAttraper le jupon à deux mains, légèrement de chaque côté du corps — pas trop près, pas trop loin. Les coudes sont légèrement fléchis, les poignets souples.\n\n**Le soulèvement :**\nLever le jupon pour révéler les jambes — la hauteur est chorégraphiée, pas improvisée. Soulèvement bas (cheville), moyen (genou), haut (hanche) — chacun crée une image différente.\n\n**L'agitation :**\nLe jupon oscille : à gauche, à droite, vers l'avant. Cette agitation est rythmique — elle accompagne les accents musicaux, les pas, les kicks.\n\n**Le jupon comme voile :**\nLe jupon révèle (soulèvement) et cache (abaissement). C'est une danse dans la danse.\n\n**L'inertie du jupon :**\nComme le boa de plumes, le jupon a une inertie propre — il suit les bras avec un léger délai. Ce délai crée l'effet de volume et de légèreté qui est sa signature.",
    erreursCourantes: [
      "Agitation désordonnée — le porte-jupon doit être rythmique et précis, pas frénétique.",
      "Jupon tenu trop bas (ne révèle pas les jambes) ou trop haut (perd l'effet de voile).",
    ],
    conseils: [
      "Pratique le porte-jupon séparément de tout le reste. D'abord l'agitation à la main droite seule, puis gauche, puis à deux mains — avant d'intégrer des pas. Le jupon mérite sa propre répétition.",
    ],
    difficulteInterne: 2,
    termesLies: ['french-cancan', 'arabesque-cancan', 'port-costume'],
  },
]
