import type { Terme } from '../schema'

export const termesUnite5: Terme[] = [

  // ─── Concepts fondamentaux ────────────────────────────────────────────────

  {
    id: 'release-technique',
    nom: 'Release technique',
    alias: ['release', 'technique release', 'danse release'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "Approche de la danse développée dans les années 1960–1970 qui privilégie l'économie d'effort, le relâchement des tensions inutiles, la conscience somatique et l'utilisation intelligente de la gravité plutôt que la force brute.",
    description: "La release technique est une philosophie autant qu'une technique. Elle naît en réaction aux techniques expressionnistes (Graham, Limón) jugées trop rigides et à l'approche académique du ballet.\n\n**Principes fondamentaux :**\n- **Relâchement des tensions non nécessaires** : identifier et libérer les contractions musculaires parasites\n- **Utilisation de la gravité** : laisser le poids tomber plutôt que le soulever\n- **Efficacité du mouvement** : chercher le moins d'effort pour le plus d'effet\n- **Conscience proprioceptive** : développer une connaissance fine de l'intérieur du corps\n- **Anatomie fonctionnelle** : comprendre la structure osseuse et musculaire pour bouger plus intelligemment\n\n**Les pionniers :**\n- **Mabel Todd** (auteure de *The Thinking Body*, 1937) pose les bases théoriques\n- **Barbara Clark** et **André Bernard** développent l'idéokinèse\n- **Joan Skinner** crée la Skinner Releasing Technique dans les années 1960\n- Les danseurs de Judson Church (Trisha Brown, Steve Paxton) intègrent ces principes\n\n**Différence avec la technique Graham :**\n- Graham : tonus élevé, contraction active, tension expressive\n- Release : tonus minimum nécessaire, relâchement actif, fluidité",
    erreursCourantes: [
      "Confondre 'release' avec 'absence de tonus' — il faut juste le tonus nécessaire, pas zéro.",
      "Croire que la release technique est facile parce qu'elle semble moins acrobatique.",
      "Oublier l'intention artistique au profit du seul confort physique.",
    ],
    conseils: [
      "Scan ton corps depuis les pieds jusqu'au sommet de la tête. Repère les zones où tu tiens sans raison — mâchoire, épaules, ventre. Relâche-les. Ton mouvement sera immédiatement plus grand et plus libre.",
    ],
    etymologie: "De l'anglais 'release' (libération, relâchement) — s'opposant à la 'tension' ou au 'hold'. L'ajout de 'technique' souligne que le relâchement est ici travaillé, pas subi.",
    difficulteInterne: 2,
    termesLies: ['poids-abandon', 'gravite-contemporain', 'somatique', 'fluidite-mouvement'],
  },

  {
    id: 'poids-abandon',
    nom: 'Poids et abandon',
    alias: ['abandon du poids', 'laisser aller le poids', 'weight sharing'],
    disciplines: ['contemporain'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Principe chorégraphique consistant à utiliser le poids réel du corps — en le laissant tomber, rouler, basculer — plutôt que de le maintenir ou le soulever. L'abandon est la confiance donnée à la gravité et, en duo, à l'autre danseur.",
    description: "En danse classique, le corps est toujours *tenu* — l'illusion de légèreté passe par un effort constant pour résister à la gravité. En danse contemporaine, cette résistance peut être abandonnée intentionnellement.\n\n**L'abandon du poids en solo :**\n- La tête part en avant, le corps suit\n- Le bras lancé entraîne le torse\n- Le plié s'approfondit sans résistance\n- La chute vers le sol n'est pas freinée, elle est accueillie\n\n**L'abandon du poids en duo :**\n- Donner réellement son poids à quelqu'un (et pas simuler)\n- Faire confiance à la capacité de l'autre à le recevoir\n- Cette confiance mutuelle est le fondement du **contact improvisation**\n\n**Doris Humphrey** fonde toute sa technique sur ce principe : la danse vit entre l'équilibre et la chute — entre le contrôle et l'abandon. La vie elle-même est cette tension permanente.\n\n**Sensations recherchées :**\n- Lourdeur des membres\n- Fluidité dans les transitions\n- Sensation de tomber *dans* le sol plutôt que de le fuir",
    erreursCourantes: [
      "Simuler l'abandon sans lâcher réellement le contrôle musculaire.",
      "En duo, retenir son poids par peur de 'faire mal' à l'autre — c'est la retenue qui crée le déséquilibre.",
      "Confondre abandon et effondrement — l'abandon a une direction et une intention.",
    ],
    conseils: [
      "Commence par laisser tomber ta tête. Vraiment tomber — sens son poids réel. Ensuite laisse ce poids voyager dans la nuque, les épaules, le dos. L'abandon se répand comme une vague.",
    ],
    etymologie: "Mot hybride de la danse contemporaine francophone : 'poids' du latin *pondus* (ce qui pèse), et 'abandon' du vieux français *a bandon* (mettre à disposition, laisser aller). L'association dit tout : laisser son poids aller librement.",
    difficulteInterne: 2,
    termesLies: ['fall-recovery', 'gravite-contemporain', 'partage-poids', 'contact-improvisation'],
  },

  {
    id: 'gravite-contemporain',
    nom: 'La gravité comme outil',
    alias: ['rapport à la gravité', 'utilisation de la gravité', 'gravité en danse'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "En danse contemporaine, la gravité n'est pas un obstacle à vaincre (comme en ballet) mais une force à utiliser, dialoguer avec, ou laisser agir. Ce rapport inversé à la gravité est l'une des révolutions de la danse du XXe siècle.",
    description: "**Deux visions de la gravité en danse :**\n\n| Ballet classique | Danse contemporaine |\n|-----------------|--------------------|\n| La gravité est l'ennemie | La gravité est alliée |\n| On la surmonte (légèreté, élévation) | On l'utilise (chute, poids, ancrage) |\n| Le sol est un point de départ/arrivée | Le sol est un espace de danse |\n| L'élévation est valorisée | La profondeur est valorisée |\n\n**Comment utiliser la gravité :**\n\n**1. La chute :** laisser le corps descendre sans freiner, et trouver une issue créative à l'impact\n\n**2. L'ancrage :** s'enfoncer dans le sol pour en tirer de la force (comme un arbre dont les racines donnent la stabilité)\n\n**3. Le swing :** le bras qui oscille utilise son propre poids comme pendule — la gravité est le moteur du swing\n\n**4. L'ondulation :** une vague qui parcourt le corps du bas vers le haut (ou l'inverse) utilise le poids de chaque segment\n\n**Isadora Duncan** est la première à verbaliser ce rapport : 'Je n'ai jamais fait que suivre la loi de la gravitation — qui est la loi de l'amour.'",
    erreursCourantes: [
      "Aller 'vers le bas' sans intention — la gravité est utilisée, pas subie.",
      "Confondre s'ancrer et s'effondrer — l'ancrage maintient une présence active.",
    ],
    conseils: [
      "Assieds-toi sur une chaise et laisse vraiment ton poids s'installer dans le siège. Sens la terre sous toi. Cet ancrage — ce dialogue avec la gravité — est la base de tout mouvement contemporain.",
    ],
    difficulteInterne: 1,
    termesLies: ['poids-abandon', 'fall-recovery', 'suspension', 'floorwork'],
  },

  {
    id: 'contraction-release',
    nom: 'Contraction et release',
    alias: ['contraction Graham', 'contraction-extension', 'contraction release technique'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Principe technique central de la danse Graham : la contraction est une concavité active du centre du corps (abdomen, dos) calquée sur l'expiration, le release est son opposé convexe calqué sur l'inspiration. Ces deux états alternés génèrent le mouvement.",
    description: "**Martha Graham** développe ce principe à partir des années 1920 comme alternative au mouvement classique. Pour elle, le mouvement ne part pas des pieds ni des bras, mais du **plexus solaire** — le centre émotionnel et physique du corps.\n\n**La contraction :**\n- Le bas-ventre et le bas du dos se creusent\n- La colonne se curve en C (surtout dans le bas du dos)\n- Associée à l'expiration\n- Sensation : se refermer sur soi, recueillir\n- Usage expressif : douleur, intériorité, combat intérieur\n\n**Le release :**\n- L'inverse de la contraction : le corps s'ouvre, se développe\n- La colonne s'allonge, le sternum se soulève\n- Associée à l'inspiration\n- Sensation : s'ouvrir, s'élancer, se libérer\n- Usage expressif : joie, aspiration, extériorité\n\n**Applications :**\n- Contraction assise au sol (position emblématique Graham)\n- Contraction debout avec appui sur jambe tendue\n- Séquence de contractions en mouvement (traveling contractions)\n- Contraction en arabesque (dos en C, jambe levée)\n\n> Pour Graham, la contraction n'est pas une crispation — c'est un engagement profond et actif du centre. La différence entre crampe et contraction, c'est l'intention.",
    erreursCourantes: [
      "Contracter seulement les abdominaux (comme un exercice de gainage) — la contraction Graham engage tout le bas du dos.",
      "Bloquer la respiration pendant la contraction — elle doit correspondre à l'expiration.",
      "Release sans intention — le release est un état actif, pas un relâchement passif.",
    ],
    conseils: [
      "Expire lentement et laisse ton ventre se creuser vers ta colonne, laisse ton bas du dos s'arrondir. C'est la contraction. Inspire et retrouve ta verticalité. C'est le release. Répète jusqu'à sentir que c'est ta respiration qui crée le mouvement.",
    ],
    difficulteInterne: 2,
    etymologie: "Termes anglais adoptés en français dans la pratique : 'contraction' (tension musculaire active en creux) et 'release' (libération, relâchement).",
    termesLies: ['release-technique', 'poids-abandon', 'spirale', 'floorwork'],
  },

  {
    id: 'fall-recovery',
    nom: 'Chute et récupération',
    alias: ['fall and recovery', 'fall-recovery Humphrey', 'principe de Humphrey'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Principe chorégraphique de Doris Humphrey selon lequel tout mouvement dansé existe dans l'arc entre l'équilibre parfait (stabilité immobile) et la chute totale (perte de contrôle). La danse vit dans cet espace intermédiaire de tension et de récupération.",
    description: "**Doris Humphrey** (1895–1958) formule ce principe dans les années 1920–1930 : pour elle, la vie elle-même est une tension permanente entre deux états extrêmes et impossibles à maintenir.\n\n**Les deux pôles :**\n- **Équilibre absolu** : immobilité parfaite — c'est la mort\n- **Chute totale** : perte de contrôle — c'est aussi la mort\n- **La danse** : tout ce qui se passe entre les deux\n\n**Dans le mouvement :**\nChaque fois que le corps se déplace hors de son axe, il entre dans un état de chute potentielle. La *récupération* est le moment où il reprend le contrôle — mais souvent pour se lancer vers une nouvelle chute.\n\nCette dynamique crée :\n- Une sensation de **vie et d'énergie** dans le mouvement\n- Un rythme naturel d'**aller-retour** (comme la respiration)\n- Des moments de **suspension** (entre la chute et la récupération)\n\n**Applications pratiques :**\n- Swings de bras (chute en avant, récupération par le bas, re-lancer)\n- Déplacements avec penchement du corps\n- Chutes vers le sol récupérées en roulade\n- Portés de partenaire qui utilisent l'élan de la 'chute'\n\n**Héritage :** La technique Limón, les danses de José Limón, et indirectement tout le courant postmoderne s'appuient sur ce principe.",
    erreursCourantes: [
      "La 'récupération' n'est pas un sauvetage paniqué — c'est un choix chorégraphique.",
      "Rester dans l'équilibre confortable et ne jamais risquer la chute — le mouvement devient plat.",
    ],
    conseils: [
      "Lance ton bras en avant, laisse-le entraîner ton buste. Sens le moment où tu es 'en chute'. Puis récupère — mais pas pour t'arrêter, pour te relancer vers la prochaine chute. Ce balancement est la vie du mouvement.",
    ],
    etymologie: "De l'anglais 'fall' (chute) et 'recovery' (rétablissement). Terme forgé par Doris Humphrey pour nommer son principe central : la danse vit dans l'arc entre la chute et le retour à l'équilibre.",
    difficulteInterne: 2,
    termesLies: ['poids-abandon', 'gravite-contemporain', 'suspension', 'rebond-swing'],
  },

  // ─── Qualités de mouvement ────────────────────────────────────────────────

  {
    id: 'suspension',
    nom: 'Suspension',
    alias: ['temps suspendu', 'suspendre le mouvement'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['qualites-de-mouvement'],
    definition: "Moment de flottement dans un mouvement, où le corps semble défier brièvement la gravité avant de retomber. La suspension est l'instant de grâce entre la montée et la descente, entre l'impulsion et l'abandon.",
    description: "La suspension est un concept fondamental dans toutes les techniques qui travaillent avec la gravité — Humphrey-Limón, jazz, contemporain.\n\n**La suspension dans la trajectoire d'un mouvement :**\n- Le corps monte par une impulsion (bras, plié, élan)\n- Au sommet de la trajectoire : **instant de suspension** — quelques millièmes de seconde où le corps semble flotter\n- Puis la descente (plus ou moins contrôlée selon l'intention)\n\n**Suspension vs pause :**\n- Une pause est une immobilité voulue et contrôlée\n- Une suspension conserve l'énergie et la direction du mouvement — elle va quelque part\n\n**Créer de la suspension :**\n- Impulse depuis le bas (plié, ancrage) puis laisse le mouvement monter jusqu'à son pic naturel\n- À ce pic, *ne retiens pas* — laisse l'apesanteur agir une fraction de seconde\n- La descente sera d'autant plus belle que la suspension était vraie\n\n**Rôle expressif :**\nLa suspension crée de l'attente, de la tension, de la beauté. C'est souvent le moment le plus fort d'une phrase de mouvement.",
    erreursCourantes: [
      "Forcer la suspension en retenant le mouvement (c'est alors une pause artificielle).",
      "Ne pas créer d'impulsion suffisante — sans élan, pas de suspension possible.",
    ],
    conseils: [
      "Lance une balle en l'air et regarde-la au sommet de sa trajectoire — l'instant où elle s'arrête avant de redescendre. C'est ça, la suspension. Reproduis cette sensation dans ton bras, ton buste, ta jambe.",
    ],
    etymologie: "Du latin *suspendere* (*sub* + *pendere*, tenir en haut). La suspension dansée est le moment où le corps 'pend' entre montée et descente — comme un pendule au point mort de son oscillation.",
    difficulteInterne: 2,
    termesLies: ['fall-recovery', 'rebond-swing', 'poids-abandon'],
  },

  {
    id: 'rebond-swing',
    nom: 'Rebond et swing',
    alias: ['rebond', 'swing', 'oscillation', 'balancement'],
    disciplines: ['contemporain', 'moderne', 'jazz'],
    categories: ['qualites-de-mouvement'],
    definition: "Le swing est un mouvement oscillatoire qui utilise le poids du membre comme un pendule — impulsion initiale, arc libre, rebond naturel. Le rebond est l'utilisation de l'impact avec le sol comme nouvelle impulsion.",
    description: "**Le swing (oscillation) :**\nUn bras en swing ne se déplace pas par effort musculaire continu — il est lancé une fois et oscille librement comme un pendule, grâce à son propre poids.\n\nLes facteurs du swing :\n1. **Impulsion initiale** : lancer le membre\n2. **Lâcher prise** : ne plus contrôler activement\n3. **Arc** : le membre suit l'arc naturel de la gravité\n4. **Rebond au bas** : l'impact au point le plus bas relance le swing\n\n**Le rebond (bouncing) :**\nL'impact avec le sol (ou avec la résistance de l'espace) génère une nouvelle impulsion vers le haut. C'est le principe d'un ressort ou d'une balle.\n\n**Utilisation en danse :**\n- Swings de bras simples (gauche-droite, avant-arrière)\n- Swing du torse avec poids de la tête\n- Marche avec swing (style Limón)\n- Rebonds dans les pliés (demi-pliés en bounce)\n- Grand swing du corps entier (bascule arrière-avant)\n\n**Différence swing / mouvement contrôlé :**\n- Contrôlé : muscles actifs tout au long du chemin\n- Swing : muscles actifs seulement au lancement, puis liberté",
    erreursCourantes: [
      "Contrôler tout le swing (le bras arrive au bout puis 'stope' — il n'oscille pas).",
      "Rebond sans tonus — le rebond utilise l'élasticité musculaire, il ne s'effondre pas.",
    ],
    conseils: [
      "Prends ton bras non dominant. Donne-lui une petite poussée vers l'avant. Maintenant laisse-le faire. Observe comme il oscille naturellement. C'est le swing. Tu n'as rien à faire — juste lui donner l'impulsion initiale.",
    ],
    difficulteInterne: 1,
    termesLies: ['suspension', 'fall-recovery', 'poids-abandon'],
  },

  {
    id: 'fluidite-mouvement',
    nom: 'Fluidité',
    alias: ['mouvement fluide', 'continuité du mouvement', 'flux continu'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['qualites-de-mouvement'],
    definition: "Qualité de mouvement dans laquelle les transitions entre positions ou impulsions sont continues et sans rupture perceptible, comme un liquide qui coule. Corrèle au facteur de flux 'libre' dans le système Laban.",
    description: "La fluidité est l'une des qualités les plus recherchées en danse contemporaine — et l'une des plus difficiles à enseigner parce qu'elle relève de l'intérieur plus que de la forme.\n\n**Ce qu'est la fluidité :**\n- Absence de rupture dans le transfert d'énergie\n- Chaque fin de mouvement contient déjà le début du suivant\n- Le corps ne 's'arrête' jamais vraiment — il *ralentit* ou *change de direction*\n- La respiration guide et soutient le flux\n\n**Ce que n'est pas la fluidité :**\n- La mollesse ou l'absence de tonus\n- L'uniformité de vitesse (la fluidité peut être rapide ou lente)\n- L'absence d'intention\n\n**Dans le système Laban :**\nLa fluidité correspond au facteur *flux libre* — le mouvement coule sans retenue. Son opposé est le *flux lié* (contrôlé, arrêtable à tout moment).\n\n**Construire la fluidité :**\n- Pratiquer des enchaînements où on ne s'arrête jamais\n- Travailler en 'fondu enchaîné' (chaque fin de geste relance le suivant)\n- Écouter la musique comme une rivière (suivre son courant, pas ses vagues)\n- Réduire les tensions inutiles (release)",
    erreursCourantes: [
      "Fluidité = lenteur (faux — la fluidité peut être rapide).",
      "Ajouter des transitions 'molles' entre des mouvements — la fluidité est dans la continuité de l'énergie, pas dans l'ajout de segments.",
    ],
    conseils: [
      "Ferme les yeux et fais danser tes mains comme si elles étaient dans de l'eau. Ne t'arrête pas. Laisse une impulsion amener la suivante. C'est cette continuité que tu cherches dans tout ton corps.",
    ],
    difficulteInterne: 2,
    termesLies: ['release-technique', 'suspension', 'rebond-swing'],
  },

  {
    id: 'discontinuite',
    nom: 'Discontinuité et contraste',
    alias: ['mouvement discontinu', 'rupture', 'choc', 'accent'],
    disciplines: ['contemporain'],
    categories: ['qualites-de-mouvement'],
    definition: "Qualité de mouvement caractérisée par des ruptures intentionnelles dans le flux, des changements brusques de vitesse, de direction ou de niveau. La discontinuité crée de la tension, de la surprise et du relief dans une phrase chorégraphique.",
    description: "Si la fluidité est la rivière, la discontinuité est la chute d'eau — le brusque changement qui capte l'attention.\n\n**Dans le système Laban :**\nLa discontinuité correspond à la combinaison de flux lié + temps soudain — le mouvement s'arrête net ou change brusquement.\n\n**Formes de discontinuité :**\n- **L'accent** : un pic d'énergie dans une phrase régulière (comme un coup de poing dans une phrase fluide)\n- **La rupture** : arrêt complet puis reprise\n- **Le contraste de vitesse** : très lent puis très rapide\n- **Le contraste de niveau** : debout puis au sol brusquement\n- **La dissonance corps-musique** : couper contre le tempo\n\n**L'intérêt dramaturgique :**\nSans discontinuité, une phrase fluide devient monotone. La discontinuité crée :\n- Des points forts (accents)\n- De la surprise\n- Du suspense (silence avant la reprise)\n- De l'humour parfois (rupture inattendue)\n\n**Pina Bausch** maîtrise cette technique : des séquences lentes et poétiques coupées par des gestes brusques, des cris, des chutes soudaines.",
    erreursCourantes: [
      "Discontinuité non intentionnelle (manque de contrôle) confondue avec discontinuité artistique.",
      "Accents tous identiques — la discontinuité doit varier en intensité.",
    ],
    conseils: [
      "Fais une phrase fluide que tu connais bien. Maintenant choisis UN moment où tu coupes tout — net, immédiat. Observe l'effet sur toi et sur le public. C'est la puissance de la rupture.",
    ],
    difficulteInterne: 3,
    termesLies: ['fluidite-mouvement', 'phrase-mouvement', 'score-improvisation'],
  },

  {
    id: 'vibration',
    nom: 'Vibration et tremblement',
    alias: ['tremblement', 'shaking', 'vibration corporelle'],
    disciplines: ['contemporain'],
    categories: ['qualites-de-mouvement'],
    definition: "Oscillation rapide et de faible amplitude d'une partie ou de tout le corps, utilisée comme qualité de mouvement expressive ou comme technique de libération des tensions musculaires.",
    description: "La vibration est l'une des qualités de mouvement les plus particulières de la danse contemporaine — elle va à l'encontre du contrôle absolu valorisé dans le ballet.\n\n**Deux usages de la vibration :**\n\n**1. Comme outil technique (préparatoire) :**\n- Secouer les membres pour les dé-contracter\n- Vibration du corps entier debout (sur les deux jambes) pour sentir l'ancrage\n- Tremblement des poignets pour libérer les mains\n- Ces exercices viennent des pratiques somatiques (Feldenkrais, BMC)\n\n**2. Comme qualité artistique :**\n- Tremblement expressif (peur, froid, intensité émotionnelle)\n- Vibration de la voix et du corps combinées\n- Shaking rituel (inspiré de pratiques de transe)\n- Micro-vibrations dans une posture (corps qui 'vit' même immobile)\n\n**Dans la composition :**\nLa vibration crée une texture particulière — entre le mouvement et l'immobilité, entre le contrôle et la perte de contrôle. Elle est souvent utilisée pour les états limites.",
    erreursCourantes: [
      "Forcer la vibration musculairement — elle doit venir d'un relâchement suffisant pour que la gravité ou le tonus naturel crée l'oscillation.",
      "Vibration toujours au même tempo — varier la vitesse et l'amplitude.",
    ],
    conseils: [
      "Serre le poing très fort pendant 10 secondes, puis relâche complètement et secoue doucement. Sens la vibration naturelle qui suit. C'est le corps qui libère la tension accumulée — c'est le début de la vibration en danse.",
    ],
    difficulteInterne: 2,
    termesLies: ['release-technique', 'somatique', 'fluidite-mouvement'],
  },

  // ─── Corps et espace ──────────────────────────────────────────────────────

  {
    id: 'spirale',
    nom: 'Spirale',
    alias: ['mouvement en spirale', 'spirale du buste', 'torsion en spirale'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Mouvement rotatif du buste, de la colonne ou d'un membre autour d'un axe, dans lequel les différents segments du corps s'engagent séquentiellement, créant une torsion progressive qui se déroule ou s'enroule.",
    description: "La spirale est l'une des formes de mouvement les plus présentes en danse contemporaine — une alternative à la ligne droite du ballet.\n\n**La spirale de colonne :**\nLa rotation part d'un point de la colonne (souvent la base) et se propage segment par segment vers le haut. C'est *séquentiel*, pas simultané — contrairement à la rotation du buste en bloc.\n\n**La spirale vers le sol (spirale descendante) :**\n- Un bras s'enroule\n- La torsion se propage au buste, au bassin\n- Le corps suit la spirale jusqu'au sol\n- Usage : pour descendre au sol sans violence, pour rouler\n\n**La spirale ascendante :**\n- Depuis le sol ou depuis une flexion\n- La torsion se déroule vers le haut\n- Débouche souvent sur un tour ou une extension\n\n**Dans la technique Graham :**\nLes spirales sont centrales — elles permettent de passer de la contraction (fermeture) à l'extension (ouverture) de façon organique.\n\n**Anatomiquement :**\nLa colonne a une grande capacité de rotation (davantage dans la zone dorsale et lombaire). La spirale utilise et développe cette mobilité.",
    erreursCourantes: [
      "Faire tourner le buste en bloc (rotation) au lieu de laisser chaque vertèbre initier séquentiellement.",
      "Spirale trop courte (2–3 vertèbres) alors qu'elle doit impliquer toute la colonne.",
      "Épaules qui montent pendant la spirale — les laisser tomber.",
    ],
    conseils: [
      "Assieds-toi en tailleur. Place une main sur ton nombril. L'autre main commence à tourner vers la droite — laisse ton nombril la suivre peu à peu, puis ton sternum, tes épaules, ta tête. Chaque partie suit la précédente. C'est la séquentialité de la spirale.",
    ],
    etymologie: "Du latin *spiralis*, tiré du grec *speira* (enroulement, torsade). La spirale est une des formes fondamentales de la nature — la coquille, la galaxie, l'ADN — que la danse contemporaine ramène dans le corps.",
    difficulteInterne: 2,
    termesLies: ['torsion', 'contraction-release', 'floorwork', 'roulade'],
  },

  {
    id: 'torsion',
    nom: 'Torsion',
    alias: ['twist', 'contre-torsion', 'opposition des lignes'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['qualites-de-mouvement'],
    definition: "État de tension entre deux parties du corps qui s'orientent dans des directions opposées, créant une ligne de force diagonale. La torsion est différente de la spirale : elle est un état (une tension maintenue) plus qu'un mouvement.",
    description: "**Torsion vs spirale :**\n- La **spirale** est un mouvement séquentiel (l'un après l'autre)\n- La **torsion** est un état de tension simultané (l'une contre l'autre)\n\n**Exemple classique de torsion :**\n- Le bassin face au public, les épaules de profil\n- Les épaules tournées à droite, le bassin tourné à gauche\n- Un bras vers l'avant, l'autre vers l'arrière\n\n**La torsion comme source de force :**\nUne torsion maintenue crée de l'énergie potentielle — comme un élastique tordu. Le dénouement de cette torsion peut produire une rotation, un saut ou une chute contrôlée.\n\n**Dans le répertoire contemporain :**\nLes chorégraphies de **José Limón** et **Martha Graham** sont pleines de torsions expressives — elles traduisent le conflit intérieur, la déchirure, le doute.\n\n**Anatomiquement :**\nLa torsion engage les muscles obliques (internes et externes) et les rotateurs profonds de la colonne. Un travail modéré de torsion renforce ces muscles ; un travail excessif ou brusque peut les blesser.",
    erreursCourantes: [
      "Torsion bloquée au niveau de la taille seulement — elle doit s'étendre dans toute la colonne.",
      "Laisser une hanche se lever lors de la torsion du buste — maintenir le bassin horizontal.",
    ],
    conseils: [
      "Débout, ancre les pieds au sol et ne les bouge pas. Maintenant, tourne les épaules à droite. Tourne le bassin à gauche. Sens la tension dans ton ventre et ton dos. Voilà la torsion — une force qui tire en deux directions à la fois.",
    ],
    difficulteInterne: 2,
    termesLies: ['spirale', 'contraction-release', 'desequilibre'],
  },

  {
    id: 'desequilibre',
    nom: 'Déséquilibre',
    alias: ['off-balance', 'hors-axe', 'travail hors-axe'],
    disciplines: ['contemporain'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "État intentionnel dans lequel le danseur place son centre de gravité hors de sa base de soutien, créant une tension vers la chute qui est exploitée chorégraphiquement. Le déséquilibre contrôlé est l'une des signatures de la danse contemporaine.",
    description: "En ballet classique, l'équilibre est une valeur absolue — la stabilité est le but. En danse contemporaine, le déséquilibre *intentionnel* est un outil expressif et chorégraphique.\n\n**Types de déséquilibre :**\n\n**1. Déséquilibre sagittal (avant-arrière) :**\n- Corps penché vers l'avant (arabesque penchée, course avec inclinaison)\n- Corps penché vers l'arrière (cambré, chute en arrière)\n\n**2. Déséquilibre frontal (côté) :**\n- Corps incliné latéralement\n- Extension d'un côté qui déporte le centre\n\n**3. Déséquilibre en rotation :**\n- Corps en rotation hors de l'axe vertical\n- Combiné avec une chute ou une récupération\n\n**L'intérêt du déséquilibre :**\n- Crée du mouvement de façon organique (pour récupérer)\n- Exprime l'incertitude, la vulnérabilité, l'élan\n- Rend le corps intéressant — on *veut* voir ce qui va arriver\n\n**Maîtriser le déséquilibre :**\nContrôler un déséquilibre exige plus de force et de conscience que de maintenir l'équilibre. C'est un travail avancé.",
    erreursCourantes: [
      "Déséquilibre non choisi (simple manque d'équilibre) présenté comme artistique.",
      "Ne pas avoir de plan de récupération — le déséquilibre doit aller quelque part.",
    ],
    conseils: [
      "Debout, laisse ton buste partir en avant jusqu'à ce que tu doives faire un pas pour ne pas tomber. Ce pas *est* le déséquilibre récupéré. Maintenant, joue avec ce bord — jusqu'où peux-tu aller sans tomber ? C'est là que la danse contemporaine vit.",
    ],
    difficulteInterne: 3,
    termesLies: ['fall-recovery', 'gravite-contemporain', 'poids-abandon'],
  },

  // ─── Travail au sol ────────────────────────────────────────────────────────

  {
    id: 'floorwork',
    nom: 'Travail au sol',
    alias: ['floorwork', 'travail sol', 'danse au sol'],
    disciplines: ['contemporain'],
    categories: ['travail-au-sol', 'concepts'],
    definition: "Ensemble des techniques de danse qui s'effectuent au sol ou en transition avec le sol : roulades, chutes, reptations, passages au sol, floorwork. Le sol est un partenaire à part entière en danse contemporaine.",
    description: "Le travail au sol est l'une des différences les plus visibles entre la danse contemporaine et le ballet classique — où le sol est uniquement une surface de départ/arrivée.\n\n**Principes du travail au sol :**\n- Le sol offre une surface de soutien à utiliser activement (pas à subir)\n- La transition debout/sol doit être organique (pas une chute accidentelle)\n- La percussion avec le sol peut être utilisée (élan, rebond)\n- Le corps roule, glisse, rampe en utilisant les surfaces osseuses (pas les proéminences fragiles)\n\n**Les surfaces sûres pour rouler :**\n✓ Dos plat → dégager les vertèbres saillantes par le gainage\n✓ Côtés (côté de la cuisse, côté du torse)\n✓ Avant (ventre, pectoraux)\n✗ Genoux, coudes, vertèbres saillantes (directement au sol sans préparation)\n\n**Les familles de mouvements au sol :**\n1. Les **chutes** (contrôlées et dirigées)\n2. Les **roulades** (transition sol-sol ou sol-debout)\n3. Le **reptation** (locomotion au sol)\n4. Le **travail en table** (à 4 appuis)\n5. Les **inversions** (tête en bas)\n\n**Techniques associées :** Forsythe, Cunningham, release, BMC",
    erreursCourantes: [
      "Aller au sol sur les genoux ou les coudes sans préparation — risque de blessure.",
      "Considérer le travail au sol comme une chute récupérée plutôt que comme un espace de danse à part entière.",
      "Sol glissant = risque de glissade non contrôlée — adapter les chaussures ou la technique.",
    ],
    securite: {
      risques: ["Contusion des genoux, coudes, vertèbres", "Entorse de poignet (appui brutal)"],
      precautions: ["Apprendre les chutes contrôlées avant de les intégrer dans des enchaînements", "Utiliser des surfaces adaptées (parquet bois, linoléum danse) — jamais du béton ou de la moquette"],
    },
    conseils: [
      "Le sol est un partenaire, pas un accident. Avant de 'tomber', pense à où tu veux aller après — sur le dos, sur le côté, en roulade ? Le sol te répond si tu lui parles.",
    ],
    etymologie: "De l'anglais 'floor' (sol, plancher) et 'work' (travail). Le terme anglais s'est imposé en français parce que les pionniers qui l'ont théorisé — Cunningham, Forsythe, la scène new-yorkaise — écrivaient et enseignaient en anglais.",
    difficulteInterne: 2,
    termesLies: ['roulade', 'chute-controlee', 'spirale', 'gravite-contemporain'],
  },

  {
    id: 'roulade',
    nom: 'Roulade',
    alias: ['roll', 'rolling', 'roulade diagonale', 'roulade avant', 'roulade arrière'],
    disciplines: ['contemporain'],
    categories: ['travail-au-sol'],
    definition: "Technique de passage au sol dans laquelle le corps roule sur lui-même — sur le dos, le côté ou en diagonale — en utilisant la continuité du mouvement et les surfaces arrondies du corps pour éviter les impacts.",
    description: "La roulade est l'une des premières techniques enseignées en danse contemporaine et en acrobatie — c'est aussi une technique de chute sécurisée (comme dans les arts martiaux).\n\n**La roulade sur le dos (back roll) :**\n1. Depuis la position accroupie ou en chute en arrière\n2. Le dos s'arrondit en C (protéger la nuque)\n3. Les épaules touchent le sol progressivement\n4. Le mouvement se prolonge jusqu'aux pieds\n5. Sortie : en accroupi, en debout, ou en continuation\n\n**La roulade latérale (side roll) :**\n1. Depuis le sol, en spirale\n2. Le corps tourne sur le côté (cuisse → bassin → dos → épaule)\n3. Ou dans l'autre sens\n4. Souvent utilisée pour traverser le sol ou changer de position\n\n**La roulade diagonale (log roll variante) :**\n- Corps allongé qui roule en diagonale\n- Bras tendus devant ou le long du corps\n\n**Clé de sécurité :**\nL'arrondi de la colonne est essentiel — ne jamais rouler sur des vertèbres saillantes. Le gainage abdominal protège.\n\n**Dans le répertoire :**\nLes roulades de Cunningham, les passages au sol de Forsythe ou de Pina Bausch utilisent toutes ce principe.",
    erreursCourantes: [
      "Rouler sur la nuque au lieu de la protéger (la nuque doit être rentrée, le menton vers la poitrine).",
      "Impact brutal des épaules sur le sol — le contact doit être progressif.",
      "S'arrêter au milieu de la roulade (perte d'élan) — maintenir la dynamique.",
    ],
    securite: {
      risques: ["Traumatisme de la nuque si mal protégée", "Contusion des épaules si l'arrondi est insuffisant"],
      precautions: ["Apprendre la roulade avec un encadrant avant de l'intégrer seul", "Menton toujours rentré vers la poitrine pour protéger les cervicales"],
    },
    conseils: [
      "Avant toute roulade : arrondi le dos en C, menton vers la poitrine. Maintiens cet arrondi tout au long du roulement. Si tu sens une vertèbre saillante toucher le sol, ton arrondi n'est pas assez profond.",
    ],
    difficulteInterne: 2,
    termesLies: ['chute-controlee', 'floorwork', 'spirale'],
  },

  {
    id: 'chute-controlee',
    nom: 'Chute contrôlée',
    alias: ['chute', 'falling', 'back fall', 'side fall', 'forward fall'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['travail-au-sol', 'qualites-de-mouvement'],
    definition: "Technique de passage debout/sol dans laquelle la chute est dirigée, absorbée progressivement par les différents segments du corps, et transformée en ressource chorégraphique plutôt qu'en accident.",
    description: "La chute contrôlée est une compétence fondamentale en danse contemporaine — et en sécurité générale. Elle s'enseigne aussi dans les arts martiaux, le cirque et les acrobaties.\n\n**Principes de la chute contrôlée :**\n\n1. **Choisir une direction** (pas se laisser tomber dans le vide)\n2. **Décélérer progressivement** en engageant les articulations dans l'ordre :\n   - D'abord la cheville, puis le genou, puis la hanche\n   - Pour une chute latérale : cuisse → hanche → buste → épaule\n3. **Ne jamais tendre les bras en premier** (fracture du radius)\n4. **Arrondir le corps** à l'arrivée pour rouler ou absorber\n\n**Les trois grandes chutes en technique contemporaine :**\n\n**Back fall (chute en arrière / Limón) :**\n- Du plié profond, le bassin recule et descend\n- Les vertèbres se déposent une à une\n- Arrivée en roll sur le dos avec impulsion de sortie\n\n**Side fall (chute latérale) :**\n- Depuis le plié latéral, le corps s'incline puis descend\n- Cuisse → hanche → côté du torse\n- Souvent continue vers une roulade\n\n**Forward fall (chute en avant) :**\n- La plus technique — protéger la tête\n- Bras qui *accompagnent* (pas qui bloquent brutalement)\n- Avant-bras et pectoraux absorbent",
    erreursCourantes: [
      "Tendre les bras pour freiner la chute — risque de fracture.",
      "Tomber en rigide (corps non articulé) — le corps doit s'adapter segment par segment.",
      "Avoir peur et retenir la chute à mi-chemin — une chute retenue est plus dangereuse qu'une chute complète.",
    ],
    securite: {
      risques: ["Fracture du radius (chute sur mains tendues)", "Contusion du coude ou du genou (chute non absorbée)", "Commotion (chute de la tête)"],
      precautions: ["Apprendre les chutes dans l'ordre : arrière puis côté puis avant", "Toujours s'assurer que le sol est adapté (ni glissant ni trop dur)", "Commencer lentement et petit avant d'aller vite et grand"],
    },
    conseils: [
      "La clé est dans le regard : quand tu chutes vers l'arrière, garde les yeux ouverts et regarde vers le haut. Le regard guide le reste du corps. Si tu fermes les yeux par peur, ton corps se raidit et la chute devient dangereuse.",
    ],
    difficulteInterne: 3,
    termesLies: ['roulade', 'floorwork', 'fall-recovery', 'poids-abandon'],
  },

  // ─── Contact improvisation ────────────────────────────────────────────────

  {
    id: 'point-de-contact',
    nom: 'Point de contact',
    alias: ['contact point', 'point d\'appui partagé'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "En contact improvisation, zone du corps où deux danseurs se touchent et partagent leur poids. Ce point n'est pas fixe — il voyage sur les corps, changeant de nature et de localisation en permanence.",
    description: "Le **contact improvisation** (Steve Paxton, 1972) repose sur un principe simple : deux corps qui partagent un point de contact et laissent ce contact guider l'improvisation.\n\n**Le point de contact est :**\n- Mobile : il voyage de l'épaule au dos, de la main au sternum, etc.\n- Actif : les deux danseurs l'entretiennent mutuellement\n- Informatif : à travers lui circule toute la communication entre les danseurs\n\n**Ce qui passe par le point de contact :**\n- Le poids (combien j'en donne, combien j'en reçois)\n- L'intention de direction\n- L'impulsion et la réponse\n- L'accord ou le désaccord\n\n**Le 'small dance' (Steve Paxton) :**\nExercice fondateur du contact impro : deux personnes debout immobiles, yeux fermés, commencent à percevoir les micro-mouvements de maintien de l'équilibre. Le contact commence déjà là — avec la gravité, avec soi-même.\n\n**Règles implicites du contact impro :**\n- Écouter plus que forcer\n- Maintenir la conscience du point de contact\n- Dire non avec le corps (pas besoin de paroles)\n- Le poids se donne progressivement, pas tout d'un coup",
    erreursCourantes: [
      "Choisir un point de contact et ne pas le laisser bouger — le point doit voyager.",
      "Guider activement l'autre au lieu de co-construire — le contact impro est une conversation, pas un cours.",
      "Donner tout son poids sans prévenir (déséquilibre dangereux).",
    ],
    conseils: [
      "Commence à deux en vous touchant avec le dos d'une main. Fermez les yeux. Laissez cette zone se déplacer naturellement sur vos corps — sans chercher, sans forcer. La main suit le contact. C'est le début du contact improvisation.",
    ],
    difficulteInterne: 2,
    termesLies: ['partage-poids', 'contact-improvisation', 'poids-abandon'],
  },

  {
    id: 'partage-poids',
    nom: 'Partage du poids',
    alias: ['weight sharing', 'donner le poids', 'poids partagé'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "En contact improvisation et en danse duo, technique par laquelle deux danseurs s'appuient mutuellement, transférant et partageant leur poids réel de façon à créer un équilibre dynamique et co-construit.",
    description: "Le partage du poids est la colonne vertébrale technique du contact improvisation et de nombreux duos contemporains.\n\n**Différence avec les portés classiques :**\n\n| Porté classique | Partage de poids contemporain |\n|----------------|------------------------------|\n| Rôles fixes (porteur / porté) | Rôles interchangeables |\n| La femme semble ne pas peser | On donne son poids réel |\n| Acrobatique, préparé | Improvisé, organique |\n| Public voit la légèreté | Public voit la confiance |\n\n**Les niveaux de partage :**\n1. **Contact léger** : effleurement, juste assez de pression pour sentir l'autre\n2. **Appui partiel** : 20–40% du poids sur l'autre\n3. **Appui total** : tout le poids transféré (portés, contrepoids)\n\n**Le contrepoids :**\nDeux danseurs se tiennent mutuellement en s'éloignant — l'équilibre de l'un compense la chute de l'autre. Exemple : face à face, mains jointes, s'éloigner jusqu'à ce que chacun s'appuie sur la résistance de l'autre.\n\n**Construction de confiance :**\nLe partage de poids se construit progressivement. Commencer par de petits transferts avant les grands. La confiance mutuelle est la base.",
    erreursCourantes: [
      "Simuler le poids (retenir son corps) au lieu de le donner vraiment.",
      "Donner tout son poids sans s'assurer que l'autre est prêt à le recevoir.",
      "Le plus lourd pense qu'il ne peut pas être porté — la physique du contrepoids fonctionne pour tous les gabarits.",
    ],
    conseils: [
      "À deux, dos à dos. Appuyez-vous l'un contre l'autre progressivement. Combien de poids pouvez-vous partager sans que l'un tombe ? Cette exploration est le partage de poids. Jouez avec la frontière.",
    ],
    difficulteInterne: 2,
    termesLies: ['point-de-contact', 'contact-improvisation', 'poids-abandon'],
  },

  // ─── Improvisation et composition ─────────────────────────────────────────

  {
    id: 'phrase-mouvement',
    nom: 'Phrase de mouvement',
    alias: ['phrase chorégraphique', 'phrase dansée', 'motif'],
    disciplines: ['contemporain', 'moderne'],
    categories: ['concepts'],
    definition: "Unité de base de la composition chorégraphique : une séquence de mouvements ayant un début, un développement et une fin, formant une unité syntaxique complète — l'équivalent d'une phrase dans le langage.",
    description: "La phrase de mouvement est à la chorégraphie ce que la phrase grammaticale est au texte — l'unité minimale de sens.\n\n**Structure d'une phrase :**\n- **Début** : impulsion, initiation (d'où vient le mouvement)\n- **Développement** : comment le mouvement se propage et évolue\n- **Fin** : résolution, suspension ou transition\n\n**Caractéristiques d'une bonne phrase :**\n- Elle a une *logique interne* (les mouvements s'enchaînent avec cohérence)\n- Elle a une *qualité consistante* (ou un contraste intentionnel)\n- Elle est *mémorisable et reproductible* (critère pratique)\n- Elle peut être transformée (variations, inversions, augmentation)\n\n**Manipulations d'une phrase :**\n| Manipulation | Description |\n|-------------|-------------|\n| Inversion | La phrase à l'envers |\n| Rétrograde | Les gestes en sens inverse |\n| Augmentation | Plus lent |\n| Diminution | Plus rapide |\n| Canon | À décalage temporel |\n| Unisson | Tous ensemble |\n\n**Merce Cunningham** développe une approche radicale : les phrases peuvent être combinées de façon aléatoire — leur sens est créé par la juxtaposition, pas par une narrativité préétablie.",
    erreursCourantes: [
      "Confondre phrase et enchainement — une phrase a une intention artistique, pas seulement une succession.",
      "Phrases toutes de même longueur — varier la durée crée du relief.",
    ],
    conseils: [
      "Construis une phrase de 8 temps. Mémorise-la. Maintenant joue : fais-la deux fois plus lentement. Puis deux fois plus vite. Commence par la fin. Inverse-la. Tu viens de faire de la composition.",
    ],
    difficulteInterne: 3,
    termesLies: ['score-improvisation', 'instant-composition', 'discontinuite'],
  },

  {
    id: 'score-improvisation',
    nom: "Score d'improvisation",
    alias: ['score', 'partition d\'improvisation', 'cadre d\'improvisation'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "Structure ou règle prédéfinie qui organise une improvisation sans en fixer le contenu. Le score donne le cadre (les contraintes), les danseurs remplissent ce cadre avec du mouvement inventé en temps réel.",
    description: "Le score (de l'anglais, 'partition') est l'outil de l'improvisation structurée — une réponse à la question : 'Comment improviser sans que ça devienne du chaos ou de la répétition ?'\n\n**Types de scores :**\n\n**Score spatial :** 'Déplace-toi en suivant les lignes des carreaux du sol'\n\n**Score temporel :** 'Alterne 30 secondes de mouvement rapide et 30 secondes d'immobilité'\n\n**Score relationnel :** 'Quand tu croises quelqu'un, commence à l'imiter en décalé'\n\n**Score qualitatif :** 'Tout ton mouvement doit avoir une qualité aqueuse'\n\n**Score narratif :** 'Tu es une personne qui cherche quelque chose qu'elle a perdu'\n\n**Score de Judson :** Yvonne Rainer et ses contemporains utilisent des instructions minimales pour créer des pièces entières : 'Traverser la scène. S'arrêter. S'asseoir.'\n\n**Pourquoi les scores sont utiles :**\n- Donnent de la liberté dans un cadre (évite la page blanche)\n- Permettent d'explorer une qualité spécifique\n- Créent de la cohérence dans un groupe\n- Sont répétables (chaque exécution est différente mais dans le même cadre)",
    erreursCourantes: [
      "Respecter le score à la lettre au détriment de la qualité de mouvement.",
      "Ignorer le score dès que l'improvisation 'prend' — le score est actif tout au long.",
    ],
    conseils: [
      "Crée ton propre score simple : 'Je ne touche jamais le sol avec mes mains.' Improvise 3 minutes avec cette seule contrainte. Observe comment elle force la créativité.",
    ],
    difficulteInterne: 3,
    termesLies: ['instant-composition', 'phrase-mouvement', 'contact-improvisation'],
  },

  {
    id: 'instant-composition',
    nom: 'Composition instantanée',
    alias: ['CI — composition instantanée', 'real-time composition', 'composition en temps réel'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "Pratique chorégraphique dans laquelle le danseur prend des décisions compositionnelles (structure, espace, temps, relations) en temps réel pendant la performance — sans partition fixe préalable, mais avec une conscience aiguë de l'ensemble.",
    description: "La composition instantanée (CI) est distincte de la simple improvisation — l'improvisateur *bouge* de façon libre, le compositeur instantané *structure* ce qui se passe, pense l'ensemble, fait des choix de mise en scène en temps réel.\n\n**Les deux niveaux de conscience en CI :**\n\n1. **Le niveau du danseur** : je sens, je bouge, je réagis\n2. **Le niveau du compositeur** : comment est distribué l'espace ? quand entre le prochain danseur ? est-ce que cette scène dure assez ou trop ? quel est le rapport à la musique ?\n\n**Pionniers :**\n- **Steve Paxton** : contact improvisation comme CI à deux\n- **Nancy Stark Smith** : théorise et enseigne la CI\n- **Eva Karczag** : CI solo\n- En France : **Julyen Hamilton**, nombreux artistes de la scène de l'improvisation\n\n**L'écoute en CI :**\nLa composition instantanée exige une écoute à plusieurs niveaux simultanément : son propre corps, les autres danseurs, l'espace, le public, le son.\n\n**Les festivals de CI :**\nDes festivals comme le festival 'Biennale de la composition instantanée' (Paris) permettent de voir cette pratique en scène.",
    erreursCourantes: [
      "Confondre CI et improvisation pure — la CI a une dimension de mise en scène en temps réel.",
      "Être tellement dans le 'compositeur' qu'on perd la spontanéité du danseur.",
    ],
    conseils: [
      "Pendant une improvisation de groupe, essaie de regarder la salle depuis l'extérieur (même si tu danses dedans). Que manque-t-il ? Trop de monde au centre — tu vas vers les bords. Silence — tu entres. Tohu-bohu — tu immobilises. C'est le début du regard du compositeur instantané.",
    ],
    difficulteInterne: 4,
    termesLies: ['score-improvisation', 'phrase-mouvement', 'contact-improvisation'],
  },

  // ─── Pratiques somatiques ─────────────────────────────────────────────────

  {
    id: 'somatique',
    nom: 'Pratiques somatiques',
    alias: ['éducation somatique', 'somatique', 'travail somatique', 'approche somatique'],
    disciplines: ['contemporain'],
    categories: ['concepts', 'sante-prevention'],
    definition: "Ensemble d'approches pédagogiques et thérapeutiques centrées sur la conscience du corps de l'intérieur (soma = corps vécu de l'intérieur, par opposition au corps objectivé de l'extérieur). En danse, les pratiques somatiques enrichissent la technique par une conscience proprioceptive affinée.",
    description: "Le terme 'somatique' vient du grec *soma* (corps). L'approche somatique s'intéresse au corps tel qu'il est vécu de l'intérieur — les sensations, les perceptions, les habitudes, les schémas de mouvement inconscients.\n\n**Principales pratiques somatiques utilisées en danse :**\n\n| Pratique | Fondateur | Principe central |\n|---------|----------|------------------|\n| Méthode Feldenkrais | Moshé Feldenkrais | Apprentissage par le mouvement exploratoire |\n| Body-Mind Centering | Bonnie Bainbridge Cohen | Anatomie vécue, cartographie intérieure |\n| Alexander Technique | F.M. Alexander | Inhibition des habitudes, équilibre tête-cou-dos |\n| Idéokinèse | Mabel Todd / André Bernard | Images mentales qui guident le mouvement |\n| Méthode Rolfing | Ida Rolf | Manipulation des fascias |\n\n**Pourquoi les danseurs s'y intéressent :**\n- Affiner la proprioception\n- Réduire les tensions chroniques\n- Augmenter l'amplitude de mouvement sans forcer\n- Prévenir et récupérer des blessures\n- Renouveler la créativité en changeant les habitudes\n\n**Dans l'enseignement :**\nDe nombreux cours de contemporain intègrent 5–15 minutes de pratique somatique en début de cours.",
    erreursCourantes: [
      "Considérer les pratiques somatiques comme du yoga ou de la relaxation — c'est de l'éducation du mouvement, pas du repos.",
      "Penser que c'est incompatible avec la technique — les deux se renforcent.",
    ],
    conseils: [
      "Allonge-toi sur le dos. Scanne ton corps : où est-ce que ça touche le sol ? Où il y a de l'espace ? Un côté plus ancré que l'autre ? Cet outil s'appelle le 'body scan' — c'est l'entrée de toutes les pratiques somatiques.",
    ],
    difficulteInterne: 2,
    termesLies: ['body-mind-centering', 'feldenkrais', 'release-technique'],
  },

  {
    id: 'body-mind-centering',
    nom: 'Body-Mind Centering',
    alias: ['BMC', 'Body Mind Centering', 'Bonnie Bainbridge Cohen'],
    disciplines: ['contemporain'],
    categories: ['concepts', 'sante-prevention'],
    definition: "Approche somatique développée par Bonnie Bainbridge Cohen depuis les années 1970, qui explore la relation corps-esprit à travers l'anatomie vécue de l'intérieur : os, muscles, fascias, organes, fluides, système nerveux.",
    description: "Le **Body-Mind Centering (BMC)** est une des pratiques somatiques les plus utilisées en danse contemporaine. Sa fondatrice, **Bonnie Bainbridge Cohen** (née en 1941), thérapeute en neurodéveloppement et danseuse, développe cette approche à partir des années 1970.\n\n**Principes fondamentaux :**\n- Chaque tissu du corps (os, muscles, organes, fascias, fluides) a une qualité de mouvement propre\n- En portant l'attention sur un tissu spécifique, on peut en modifier la qualité de mouvement\n- Le développement moteur humain (de l'embryon au mouvement adulte) est une ressource chorégraphique\n\n**Les patterns de développement moteur :**\nBMC cartographie les étapes du développement moteur humain :\n1. Mouvements prévertébrés (respiration, fluides)\n2. Reptation\n3. Quadrupédie\n4. Debout\n\nChaque étape peut être revisitée en danse pour trouver de nouvelles ressources de mouvement.\n\n**En pratique dans les cours :**\n- Sentir le poids des os (qualité 'dense')\n- Bouger depuis les organes (qualité 'molle', 'volumique')\n- Travailler avec la fluidité du sang, de la lymphe\n- Explorer les patterns prévertébrés (serpent, étoile de mer)",
    erreursCourantes: [
      "Rester dans le concept sans véritable exploration sensorielle.",
      "Confondre BMC avec de l'anatomie académique — BMC est l'anatomie vécue.",
    ],
    conseils: [
      "Pose ta main sur ton sternum. Laisse ta conscience descendre dans cet os — dense, rigide, protecteur. Maintenant bouge depuis cet os. Sens comme la qualité change. C'est l'approche BMC : l'anatomie comme ressource de mouvement.",
    ],
    difficulteInterne: 3,
    termesLies: ['somatique', 'feldenkrais', 'release-technique'],
  },

  {
    id: 'feldenkrais',
    nom: 'Méthode Feldenkrais',
    alias: ['Feldenkrais', 'IEM', 'Prise de conscience par le mouvement', 'ATM'],
    disciplines: ['contemporain'],
    categories: ['concepts', 'sante-prevention'],
    definition: "Méthode d'éducation somatique développée par Moshé Feldenkrais (1904–1984), physicien et judoka, qui utilise le mouvement exploratoire pour reprogrammer les schémas moteurs habituels et améliorer l'efficacité et le confort du mouvement.",
    description: "**Moshé Feldenkrais** (1904–1984) développe sa méthode après s'être blessé au genou — il cherche à marcher à nouveau sans opération. Sa formation en physique et en judo l'amène à comprendre le mouvement de façon unique.\n\n**Deux formats :**\n\n**ATM (Awarness Through Movement / Prise de conscience par le mouvement) :**\n- Séances en groupe, couché au sol\n- Un instructeur guide verbalement des séquences de mouvement très lentes et répétitives\n- L'élève explore en silence, sans effort\n- Durée : 30–60 min\n\n**IEM (Intégration fonctionnelle) :**\n- Séance individuelle\n- L'instructeur touche et déplace doucement le corps de l'élève\n- Apprentissage par le système nerveux (pas par la volonté)\n\n**Principes clés :**\n- 'Apprendre à apprendre' — développer la capacité d'apprentissage moteur en général\n- Le mouvement doit être confortable, jamais forcé\n- La répétition avec conscience est plus efficace que l'effort répété\n- Les petits mouvements révèlent plus que les grands\n\n**Pour les danseurs :**\n- Résoudre des problèmes techniques chroniques (tour-out, équilibre)\n- Récupérer de blessures\n- Trouver plus d'aisance dans des mouvements difficiles",
    erreursCourantes: [
      "Faire les mouvements Feldenkrais avec effort — la méthode est basée sur l'exploration facile.",
      "S'endormir pendant les séances (c'est courant mais signifie que la conscience s'est perdue).",
    ],
    conseils: [
      "Essaie ceci : tourne la tête à droite, note jusqu'où tu vas. Reviens au centre. Maintenant regarde à droite avec les yeux seulement (pas la tête), plusieurs fois. Puis, tourne à nouveau la tête à droite. Tu vas plus loin ? C'est la Feldenkrais — une petite exploration qui change une grande habitude.",
    ],
    difficulteInterne: 2,
    termesLies: ['somatique', 'body-mind-centering', 'release-technique'],
  },

  {
    id: 'site-specific',
    nom: 'Danse in situ',
    alias: ['site-specific', 'danse in situ', 'performance in situ', 'danse dans l\'espace public'],
    disciplines: ['contemporain'],
    categories: ['concepts'],
    definition: "Pratique chorégraphique dans laquelle une danse est créée pour et à partir d'un lieu spécifique — rue, musée, forêt, architecture industrielle — qui n'est pas une scène conventionnelle et dont les caractéristiques influencent ou déterminent la création.",
    description: "La danse **in situ** (ou *site-specific*) part d'un principe : le lieu n'est pas un décor mais un **co-créateur**. La danse émerge du lieu, répond à ses dimensions, sa texture, son histoire, ses usagers.\n\n**Histoire :**\nLes danseurs de Judson Church sont parmi les premiers à danser dans des espaces non-théâtraux (toits, musées, rues). **Trisha Brown** développe ses pièces 'd'équipement' dans des immeubles et sur les murs. En France, la scène *hors les murs* se développe dès les années 1970.\n\n**Types d'espaces in situ :**\n- Espace urbain (rue, place, gare)\n- Architecture (musée, usine, escaliers, parking)\n- Nature (forêt, plage, falaise)\n- Espace intime (appartement, piscine, ascenseur)\n\n**Le rapport au public :**\nLe public de la danse in situ est souvent mobile, non délimité, surpris. Certaines performances sont annoncées, d'autres sont des interventions dans le flux ordinaire (flash mob artistique).\n\n**Enjeux :**\n- L'accessibilité (pas besoin de billet)\n- Le rapport à la communauté (qui est le public ?)\n- La résistance à la marchandisation de l'art\n- La redécouverte du corps dans l'espace commun",
    erreursCourantes: [
      "Croire que danser dans la rue = danse in situ — la danse in situ est une réponse au lieu, pas juste un changement de scène.",
      "Ignorer les contraintes pratiques (météo, bruit, badauds) au lieu de les intégrer.",
    ],
    conseils: [
      "Va dans un lieu que tu connais bien (bibliothèque, jardin, couloir). Reste 10 minutes à l'observer — ses sons, ses textures, ses lignes. Puis bouge en réponse à ce lieu. Ta danse sera différente de ce qu'elle aurait été en studio. C'est le début du travail in situ.",
    ],
    difficulteInterne: 3,
    termesLies: ['score-improvisation', 'instant-composition', 'phrase-mouvement'],
  },
]
