import type { Terme } from '../schema'

export const termesUnite8: Terme[] = [

  // ─── Technique fondamentale ───────────────────────────────────────────────

  {
    id: 'posture-heels',
    nom: 'Posture en talons hauts',
    alias: ['posture heels', 'alignement heels', 'placement corps heels'],
    disciplines: ['heels'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Alignement corporel spécifique à la pratique en talons hauts : compensation des modifications induites par le talon (bascule du bassin, cambré lombaire), maintien de l'axe vertical et engagement du gainage pour danser sans douleur.",
    description: "Le talon haut change radicalement la biomécanique du corps. Comprendre ces changements permet d'adapter sa posture plutôt que de subir.\n\n**Ce que le talon fait au corps :**\n- Bascule le bassin en antéversion (creux lombaire accentué)\n- Déplace le centre de gravité vers l'avant\n- Raccourcit les ischio-jambiers et les mollets\n- Augmente la pression sur l'avant-pied\n\n**La posture de référence en heels :**\n\n**Pieds :** talons au sol quand statique, jamais bloqués\n**Genoux :** souplesse légère (jamais hyperétendus)\n**Bassin :** contrôle de la bascule — ni trop creusé ni trop effacé\n**Abdominaux :** gainage léger permanent (protège le bas du dos)\n**Épaules :** basses et ouvertes (pas soulevées)\n**Tête :** portée haute, regard vers l'horizon\n\n**La posture comme intention :**\nEn heels, la posture n'est pas seulement fonctionnelle — elle est expressive. La façon dont tu portes ton corps *dit* quelque chose avant même que tu bouges.",
    erreursCourantes: [
      "Cambrure extrême du bas du dos (antéversion non contrôlée) — risque lombaire.",
      "Genoux hyperétendus (verrouillés vers l'arrière) — dangereux, absorber avec légère flexion.",
      "Épaules soulevées par l'effort de maintien — les relâcher activement.",
    ],
    securite: {
      risques: ["Douleurs lombaires si la bascule pelvienne n'est pas contrôlée", "Entorse de cheville si le poids est trop vers l'arrière"],
      precautions: ["Gainage abdominal léger en permanence", "Commencer avec des talons de 5–7 cm avant les talons hauts", "Renforcement des chevilles hors des cours"],
    },
    conseils: [
      "Debout en talons, pose une main sur ton ventre et une dans le creux de tes reins. Le creux doit être présent mais pas excessif. Si ta main est coincée entre le dos et le mur, c'est trop. Si le creux a disparu, tu es en rétroversion. Cherche l'entre-deux.",
    ],
    difficulteInterne: 2,
    termesLies: ['walk-heels', 'frame-heels', 'floorwork-heels'],
  },

  {
    id: 'walk-heels',
    nom: 'Marche en talons hauts',
    alias: ['walk heels', 'heel walk', 'démarche heels'],
    disciplines: ['heels'],
    categories: ['deplacements', 'concepts'],
    definition: "Technique de déplacement fondamentale en heels — adaptation de la marche naturelle à la contrainte du talon haut, avec placement précis du pied, transfert de poids et projection corporelle.",
    description: "La marche est la compétence numéro un du heels. Tout le reste en découle.\n\n**Techniques de walk en heels :**\n\n**Walk talon-pointe :**\n- Le talon pose en premier\n- La plante du pied suit\n- La pointe termine et décolle\n- Démarche naturelle amplifiée\n\n**Walk pointe-talon (ou pointe seule) :**\n- La demi-pointe pose en premier (avant du pied)\n- Le talon descend légèrement ou reste relevé\n- Démarche plus silencieuse, plus élégante\n- Caractéristique du walk sexy/editorial\n\n**Le cross-walk (marche croisée) :**\n- Les pieds posent légèrement en avant de l'autre (axe de la démarche)\n- Crée un balancement des hanches naturel (la 'snake walk')\n- Central dans le heels dance et le voguing\n\n**La projection corporelle :**\nLe regard est vers l'horizon ou au-delà. Les épaules sont ouvertes. La poitrine précède légèrement. On ne regarde pas ses pieds.\n\n**Qualités de walk différenciées :**\n- **Power walk** : sol qui tremble, autorité, poids dans chaque pas\n- **Cat walk** : précision, élégance, direction\n- **Sexy walk** : ondulation des hanches, ralenti, intention",
    erreursCourantes: [
      "Regarder ses pieds (perd le contact avec l'espace et le public).",
      "Pas trop courts par peur de tomber — la confiance s'exprime aussi dans l'amplitude du pas.",
      "Bras qui battent — les bras ont un styling, pas un mouvement de balancier mécanique.",
    ],
    conseils: [
      "Commence par marcher pieds nus en imaginant que tu portes des talons. Ressens comment l'intention change ta marche. Maintenant mets tes talons — l'intention était déjà là.",
    ],
    difficulteInterne: 2,
    termesLies: ['posture-heels', 'strut', 'cat-walk-heels'],
  },

  {
    id: 'strut',
    nom: 'Strut',
    alias: ['démarche affirmée', 'power walk heels', 'swagger walk'],
    disciplines: ['heels'],
    categories: ['deplacements', 'qualites-de-mouvement'],
    definition: "Marche en talons hauts avec une attitude d'autorité et de confiance exacerbée — chest out, chin up, regard perçant, chaque pas affirmant une présence sans excuses.",
    description: "Le strut est la marche transformée en déclaration. Ce n'est pas seulement de la technique — c'est de l'état d'esprit.\n\n**Le strut en pratique :**\n- **Chest out** : poitrine vers l'avant, sternum haut\n- **Chin up** : menton légèrement relevé (pas arrogant, fier)\n- **Shoulders back** : épaules en arrière et basses\n- **Chaque pas atterrit avec intention** — on entend le talon\n- **Le regard** : vers l'horizon ou vers quelqu'un de précis\n\n**Le strut dans les différents contextes :**\n\n**Runway/editorial :**\nMinimaliste, précis, regard neutre ou légèrement hautain. Les bras sont presque immobiles.\n\n**Show/Broadway heels :**\nAmplifié, projection forte, sourire ou jeu de scène assumé.\n\n**Voguing/ballroom :**\nAvec textures urbaines, attitude de compétition, gestes de main.\n\n**Street heels :**\nBasé dans les genoux, groove jazz/afro, plus fluide.\n\n**Pourquoi le strut est difficile :**\nIl nécessite une confiance réelle ou la capacité de la performer — et la plupart des apprenants en heels sont en train de travailler précisément sur cette confiance.",
    erreursCourantes: [
      "Regarder le sol (tue l'attitude et le strut).",
      "Strut sans intention — aller quelque part, vers quelqu'un, ou simplement *être là*.",
    ],
    conseils: [
      "Pense à quelqu'un qui te force à la confiance. Maintenant marche comme si tu entrais dans leur pièce et que tu savais exactement qui tu étais. C'est le strut.",
    ],
    difficulteInterne: 2,
    etymologie: "De l'anglais 'to strut' (se pavaner, marcher avec fierté et affectation). En danse, codifié dans la culture heels et ballroom.",
    termesLies: ['walk-heels', 'frame-heels', 'sass'],
  },

  {
    id: 'body-roll-heels',
    nom: 'Body roll en heels',
    alias: ['body roll', 'ondulation heels', 'vague heels'],
    disciplines: ['heels'],
    categories: ['qualites-de-mouvement'],
    definition: "Ondulation corporelle verticale (de bas en haut ou de haut en bas) exécutée en talons hauts — adaptée à la contrainte du talon qui modifie l'équilibre et l'accès au sol.",
    description: "Le body roll est un élément fondamental du heels — et l'un des plus immédiatement reconnaissables.\n\n**Adaptation au talon :**\nEn talons hauts, l'ondulation se modifie :\n- La partie basse (pieds/chevilles) est contrainte par le talon\n- L'ondulation part donc plus souvent des genoux ou du bassin\n- Le travail du haut du corps (cage, épaules, tête) reste libre\n\n**Body roll ascendant (le plus courant) :**\n1. Flexion des genoux (légère)\n2. Bassin vers l'avant\n3. Bas du dos → cage thoracique\n4. Épaules → tête\n\n**Body roll descendant :**\nDe la tête vers le bassin — souvent utilisé comme arrivée d'un mouvement.\n\n**Wall roll (en appui sur un mur) :**\nVariante où le dos ou les mains s'appuient légèrement sur une surface — permet d'apprendre le mouvement en sécurité.\n\n**Chair work body roll :**\nSur une chaise (accessoire souvent utilisé en heels dance) — le dossier offre un appui pour des ondulations plus profondes.",
    erreursCourantes: [
      "Trois segments au lieu d'une vague — le body roll doit être continu.",
      "Tête en premier (avant les épaules) — elle termine le voyage, pas elle le commence.",
    ],
    conseils: [
      "En heels, commence le body roll depuis les genoux (pas les pieds que tu ne peux pas vraiment plier). Genoux → bassin → cage → épaules → tête. Cinq stations, une seule vague.",
    ],
    etymologie: "De l'anglais 'body' (corps) et 'roll' (rouleau, roulement). Le body roll reproduit le passage d'un rouleau dans le corps — chaque segment s'aplatit puis se soulève dans la continuité du précédent.",
    difficulteInterne: 2,
    termesLies: ['undulation', 'posture-heels', 'sass'],
  },

  {
    id: 'hair-toss',
    nom: 'Hair toss / Hair flip',
    alias: ['hair flip', 'hair toss', 'mouvement de tête cheveux', 'head flip'],
    disciplines: ['heels'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Mouvement de tête vif qui projette les cheveux dans une direction, utilisé comme accent chorégraphique, ponctuation d'un mouvement ou expression d'attitude. Élément signature du heels dance et du burlesque.",
    description: "Le hair toss est un des éléments les plus expressifs du heels — mais aussi un des plus sous-estimés dans sa technicité.\n\n**Types de hair toss :**\n\n**Back toss :** Tête vers l'arrière, cheveux qui suivent (vers l'avant puis retombent dans le dos)\n\n**Side toss :** Tête vers le côté, cheveux qui font un arc\n\n**Circle flip :** La tête effectue un cercle complet, les cheveux suivent en retard\n\n**Front flip :** Tête vers l'avant (buste penché), cheveux vers le bas puis le buste remonte\n\n**Placement rythmique :**\nLe hair toss se place sur un accent musical — il ne précède pas le temps, il *est* le temps. La tête arrive sur le beat, les cheveux continuent après.\n\n**Sans cheveux longs :**\nLe hair toss s'exécute aussi avec des cheveux courts ou liés — c'est la qualité du mouvement de tête qui compte, pas la longueur des cheveux. La même dynamique crée l'effet même avec peu de cheveux.\n\n**Sécurité :**\nLe hair toss répété peut fatiguer les muscles du cou. Échauffer et renforcer les cervicales.",
    erreursCourantes: [
      "Tête qui bouge lentement (perd l'effet) — la vitesse crée le mouvement des cheveux.",
      "Placer le toss entre les temps (il doit tomber sur un accent précis).",
    ],
    conseils: [
      "Écoute la musique et identifie l'accent le plus fort de la phrase. C'est là que va ton hair toss. La tête arrive sur cet accent — pas avant, pas après.",
    ],
    difficulteInterne: 2,
    termesLies: ['sass', 'body-roll-heels', 'frame-heels'],
  },

  {
    id: 'floorwork-heels',
    nom: 'Floorwork en heels',
    alias: ['travail au sol heels', 'floor heels', 'sol en talons'],
    disciplines: ['heels'],
    categories: ['travail-au-sol'],
    definition: "Ensemble des mouvements et transitions effectués au sol ou en appui sur le sol en talons hauts — descentes, remontées, positions de sol, glissades — adaptées à la contrainte du talon et exigeant une technique spécifique pour la sécurité.",
    description: "Le floorwork en heels est une des compétences les plus spectaculaires et les plus techniques de la discipline.\n\n**La contrainte du talon au sol :**\n- Le talon ne peut pas servir d'appui de la même façon qu'un pied nu\n- Certaines positions au sol mettent le talon à risque (ne jamais laisser le poids sur le talon seul vers le côté)\n- Le retour debout exige plus de contrôle\n\n**Descente en sécurité :**\n1. Partir d'un lunge profond\n2. Le genou avant descend d'abord\n3. Le poids se dépose sur le côté de la cuisse / la hanche\n4. Ne jamais s'effondrer sur les genoux directement\n\n**Positions de sol en heels :**\n- **Position de hanche** : allongée sur le côté, hanche ancrée\n- **Bridge** : pont (dos au sol, hanches levées) — talon hors sol ou adapté\n- **Split** : grand écart au sol — talon hors sol côté arrière\n\n**Remontée en heels :**\n1. Pousser sur l'avant du pied (jamais sur le talon)\n2. Utiliser l'élan ou l'appui d'une main\n3. Le lunge avant facilite la montée\n\n**Floorwork comme chorégraphie :**\nEn heels, le floorwork raconte souvent une histoire — séduction, jeu, défi. Le rapport au sol est un rapport au public.",
    erreursCourantes: [
      "S'écraser sur les genoux sans protection — toujours descendre progressivement.",
      "Remonter en force brute — utiliser l'élan et la technique, pas la puissance seule.",
    ],
    securite: {
      risques: ["Contusion des genoux", "Torsion de cheville au retour debout"],
      precautions: ["Genouillères pour l'apprentissage", "Sol non-glissant obligatoire", "Jamais de poids sur l'arrière du talon latéralement"],
    },
    conseils: [
      "Apprends d'abord le floorwork pieds nus, puis en chaussettes, puis en talons bas, puis en talons hauts. Chaque étape ajoute de la contrainte mais le mouvement reste le même.",
    ],
    difficulteInterne: 4,
    termesLies: ['posture-heels', 'walk-heels', 'floorwork'],
  },

  {
    id: 'frame-heels',
    nom: 'Frame / Cadre corporel',
    alias: ['frame', 'cadre', 'présence scénique heels', 'silhouette'],
    disciplines: ['heels'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Ensemble des lignes et de l'organisation spatiale du corps qui crée une silhouette lisible et impactante — le 'cadre' que le danseur offre au regard, notamment dans les positions statiques et les moments de pose.",
    description: "En heels, on dit souvent qu'un bon danseur 'a un beau frame' — même immobile, son corps crée une image forte.\n\n**Les éléments du frame :**\n- **Les lignes** : bras, jambes, tête dans des directions créant une composition\n- **Les angles** : ni tout symétrique ni tout dans le même sens\n- **Le contre-corps** : une partie du corps en opposition à l'autre (hanche droite → épaule gauche)\n- **Le regard** : la ligne finale qui donne vie au frame\n\n**Frame statique (pose) :**\nPosition immobile avec une image forte. Les poses en heels sont des frames statiques.\n\n**Frame en mouvement :**\nMême en dansant, le corps maintient une cohérence de cadre — on n'est jamais 'dispersé'.\n\n**Le frame dans le voguing/ballroom :**\nLe concept de frame est très développé dans la culture voguing — les 'categories' comme 'face' ou 'runway' évaluent précisément la qualité du cadre corporel.\n\n**Développer son frame :**\n- Travailler devant un miroir ou se filmer\n- Observer ce qui crée une image forte vs faible\n- Étudier les poses de magazines, de mannequins, de danseurs professionnels",
    erreursCourantes: [
      "Lignes qui se 'ferment' (épaules vers l'avant, corps qui s'effondre) — les lignes s'ouvrent vers le public.",
      "Pose symétrique et plate — le frame gagne en intérêt avec des angles et des contre-corps.",
    ],
    conseils: [
      "Prends une photo de toi dans ta pose préférée. Regarde-la sans son. Est-ce que le corps dit quelque chose, même sans mouvement ? Un bon frame est une phrase visuelle complète.",
    ],
    difficulteInterne: 2,
    termesLies: ['posture-heels', 'sass', 'vogue-ballroom-heels'],
  },

  {
    id: 'sass',
    nom: 'Sass / Attitude',
    alias: ['sass', 'attitude heels', 'confidence', 'presence', 'caractère'],
    disciplines: ['heels'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Qualité d'expression et de présence propre au heels dance — mélange de confiance, d'impudence et de personnalité qui dépasse la technique pure pour donner au mouvement son caractère et son impact.",
    description: "Le sass est ce qu'on ne peut pas apprendre dans un manuel — mais qu'on peut cultiver.\n\n**Ce que le sass n'est pas :**\n- De l'arrogance (le sass invite, il ne repousse pas)\n- Uniquement pour les femmes (le sass est pour tous les genres)\n- Réservé aux corps minces ou validés (le sass est inclusif par essence)\n\n**Ce que le sass est :**\n- Une relation au corps assumée et choisie\n- La capacité à *habiter* son mouvement plutôt que de le produire\n- Une forme d'humour corporel (le wink non-dit)\n- La conscience que le public *regarde* et le plaisir de l'assumer\n\n**Développer son sass — pratiques :**\n1. Danser seul(e) dans le noir (pas de regard à satisfaire)\n2. Exagérer tout : amplitude, regard, attitude — jusqu'au ridicule, puis trouver le juste milieu\n3. Écouter les danseurs qu'on admire et se demander *ce qu'ils projettent*, pas *ce qu'ils font*\n\n**Le sass est culturel :**\nLe sass vient notamment de la culture afro-américaine, du ballroom, du voguing et de la culture drag. Y puiser honnêtement, c'est reconnaître ces héritages.",
    erreursCourantes: [
      "Penser que le sass est une qualité innée qu'on a ou qu'on n'a pas. C'est un muscle qui se développe.",
    ],
    conseils: [
      "Choisis une chanson qui te donne l'impression d'être la personne la plus puissante de la pièce. Danse uniquement pour toi. Ne juge rien. C'est la source du sass.",
    ],
    etymologie: "De l'anglais américain 'sass' (impudence, effronterie, culot) — d'abord adjectif (*sassy*, désignant quelqu'un qui répond avec audace). Adopté dans la culture heels et ballroom pour nommer cette présence affirmée qui ne s'excuse pas d'exister.",
    difficulteInterne: 3,
    termesLies: ['frame-heels', 'strut', 'vogue-ballroom-heels'],
  },

  {
    id: 'cat-walk-heels',
    nom: "Catwalk / Défilé",
    alias: ['catwalk', 'runway walk', 'défilé', 'model walk'],
    disciplines: ['heels'],
    categories: ['deplacements', 'concepts'],
    definition: "Déplacement linéaire en talons hauts inspiré du défilé de mode — marche précise sur une ligne, croisement des pieds léger, bras presque immobiles, regard neutre ou direct.",
    description: "Le catwalk est le point de rencontre entre la mode et la danse — un des mouvements fondateurs de la culture heels.\n\n**Le catwalk de mode :**\n- Marche sur une ligne imaginaire\n- Léger croisement des pieds (interne) qui crée le balancement des hanches\n- Bras qui oscillent à peine\n- Regard droit devant, neutre ou légèrement hautain\n- Vitesse lente et contrôlée\n\n**Le catwalk en heels dance :**\nAdapté du défilé, le catwalk en heels dance est souvent plus expressif :\n- Peut être plus rapide (tempo musical)\n- Arm styling ajouté\n- Regard peut s'animer, jouer\n- Peut s'arrêter sur une pose\n\n**Le 'model walk' vs le 'dance walk' :**\n- Model walk : minimaliste, controlé, peu de corps\n- Dance walk : musicalité, expression, tout le corps participe\n\n**Le pivot au bout du catwalk :**\nLa rotation de 180° en bout de piste est une compétence à part entière — pivot sur l'avant du pied, jambe libre qui mène la rotation.",
    erreursCourantes: [
      "Pas trop larges (effet de chaloupage excessif) ou trop étroits (démarche raide).",
      "Regarder ses pieds — la ligne de regard est vers l'horizon ou vers le public.",
    ],
    conseils: [
      "Pose un ruban adhésif sur le sol (2 mètres). Marche exactement sur cette ligne, talon dans le prolongement des orteils du pied d'avant. C'est la contrainte du catwalk — puis la lever quand le mouvement devient naturel.",
    ],
    difficulteInterne: 2,
    termesLies: ['walk-heels', 'strut', 'frame-heels'],
  },

  {
    id: 'vogue-ballroom-heels',
    nom: 'Héritage vogue et ballroom',
    alias: ['voguing', 'ballroom culture', 'house dance', 'héritage ballroom'],
    disciplines: ['heels'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Influence majeure de la culture ballroom (Harlem, années 1980) et du voguing sur la danse heels — incluant les catégories, l'attitude, les poses, le 'face' et l'esprit de compétition et d'affirmation de soi.",
    description: "On ne peut pas comprendre la danse heels sans comprendre la culture ballroom qui lui a tant donné.\n\n**La culture ballroom :**\nNée à Harlem dans les années 1950–1960 et codifiée dans les années 1980, la scène ballroom est un espace créé *par et pour* les personnes LGBTQ+ afro-américaines et latinx — souvent rejetées de la société et de leurs familles.\n\n**Les houses :** Les participants s'organisent en 'maisons' (House of LaBeija, House of Xtravaganza, House of Ninja...) qui sont à la fois familles et équipes de compétition.\n\n**Le voguing :** Style de danse simulant les poses de magazines de mode — catégories : old way, new way, vogue fem. La gestuelle angulaire, les dips, les 'death drops'.\n\n**Les catégories ballroom qui influencent le heels :**\n- **Runway** : défilé, présence, catwalk\n- **Face** : la beauté et l'expression du visage\n- **Femme Queen Realness** : authenticité, passing\n- **Sex Siren** : séduction, présence érotique\n\n**L'impact sur le heels dance :**\n- La culture de la 'category' (compétition par style)\n- L'importance du frame et de la pose\n- L'affirmation radicale de soi\n- La notion de 'serving' (donner, offrir, livrer)\n\n**Pourquoi c'est important de le savoir :**\nCertains codes du heels dance (le sass, la 'realness', le strut compétitif) viennent directement du ballroom. Les honorer, c'est reconnaître d'où ils viennent.",
    erreursCourantes: [
      "Pratiquer des éléments de voguing/ballroom sans connaître leur histoire culturelle.",
    ],
    conseils: [
      "Regarde le documentaire *Paris is Burning* (1990) et la série *Pose* (FX). Ce sont les meilleurs passeports vers la culture ballroom — la source de tant de ce que tu pratiques en heels.",
    ],
    etymologie: "Du magazine américain *Vogue* — les premières figures du voguing imitaient les poses de ses modèles. 'Ballroom' désigne les salles underground noires et LGBTQ+ de Harlem (New York), espaces de liberté et de compétition nés d'un rejet social.",
    difficulteInterne: 2,
    termesLies: ['sass', 'frame-heels', 'strut'],
  },

  {
    id: 'heel-turn',
    nom: 'Tour en heels',
    alias: ['turn heels', 'pirouette heels', 'spin heels'],
    disciplines: ['heels'],
    categories: ['tours'],
    definition: "Tour exécuté en talons hauts — avec des adaptations techniques spécifiques à l'équilibre modifié par le talon, incluant des tours sur place, des pivots et des chaînes adaptées à la hauteur du talon.",
    description: "Tourner en talons hauts est une compétence qui demande un travail spécifique — le centre de gravité est différent, l'appui est plus étroit.\n\n**Types de tours en heels :**\n\n**Pivot (½ ou ¼ de tour) :**\nLe plus accessible. Rotation sur l'avant du pied, talon qui guide. Souvent utilisé en bout de catwalk ou dans les phrases de walk.\n\n**Tour sur une jambe :**\nComme une pirouette, mais en talons. Spot obligatoire. L'appui se fait sur la demi-pointe du talon haut.\n\n**Chaîne adapté :**\nSérie de demi-tours enchaînés — exécutables en talons mais avec adaptation du rythme.\n\n**Ce qui change avec le talon :**\n- L'appui est plus haut → centre de gravité plus instable\n- Le relevé est déjà effectué par le talon → moins de travail de la cheville\n- Le tour est souvent plus lent (moins de vitesse angulaire)\n\n**Développer les tours en heels :**\n1. Pratiquer le spot debout (sans tourner)\n2. Pratiquer le tour à 180° en sécurité\n3. Augmenter progressivement la hauteur du talon\n4. Ne jamais forcer un tour que l'équilibre ne permet pas",
    erreursCourantes: [
      "Oublier le spot — encore plus crucial en talons qu'en chaussures plates.",
      "Trop d'élan → déséquilibre → chute. En heels, moins d'élan, plus de contrôle.",
    ],
    securite: {
      risques: ["Entorse de cheville par déséquilibre pendant le tour"],
      precautions: ["Sol non-glissant obligatoire", "Commencer par des tours lents avec appui si besoin"],
    },
    conseils: [
      "Travaille d'abord le spot debout immobile — la tête qui tourne rapidement pendant que le corps reste face. Quand le spot est solide, ajoute le tour du corps autour.",
    ],
    difficulteInterne: 3,
    termesLies: ['pirouette', 'walk-heels', 'posture-heels'],
  },
]
