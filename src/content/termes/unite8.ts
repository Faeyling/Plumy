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

  {
    id: 'attitude-heels',
    nom: 'Attitude en heels',
    alias: ['attitude hauts talons', 'arabesque fléchie heels'],
    disciplines: ['heels'],
    categories: ['positions', 'equilibres'],
    definition: "Position d'équilibre sur une jambe avec la jambe libre levée et fléchie à 90°, exécutée en talons hauts — adaptation de l'attitude classique aux contraintes du talon haut et à l'esthétique heels.",
    description: "L'attitude est une des positions d'équilibre les plus élégantes de la danse — et en heels, elle prend une dimension encore plus sculpturale.\n\n**Ce qui change avec le talon haut :**\n- Le centre de gravité est plus haut → l'équilibre demande plus de précision\n- L'appui se fait sur l'avant du talon haut, pas sur la demi-pointe\n- La jambe libre levée crée un contrepoids naturel\n\n**Attitude derrière (la plus courante en heels) :**\nLa jambe libre monte derrière, genou plié. La hanche de la jambe libre s'ouvre légèrement. Le buste s'incline vers l'avant en opposition.\n\n**Développer l'attitude en heels :**\n1. D'abord pratiquer l'attitude à la barre, chaussures plates\n2. Ajouter les chaussures heels à la barre\n3. Sans barre : chercher un point fixe (spot) et l'équilibre dans le centre\n4. Maintenir 2 secondes, puis augmenter progressivement",
    erreursCourantes: [
      "Jambe libre trop basse (juste au-dessus du sol) — l'attitude doit être à au moins 45°, idéalement 90°.",
      "Buste qui s'effondre vers l'avant par manque de gainage — l'opposition buste/jambe doit être active.",
    ],
    conseils: [
      "Trouve un point fixe au mur avant de lever la jambe. Le spot stabilise ton équilibre bien plus que tu ne le penses. En heels, le spot est encore plus crucial qu'en chaussures plates.",
    ],
    difficulteInterne: 3,
    termesLies: ['posture-heels', 'heel-turn', 'walk-heels'],
  },

  {
    id: 'developpe-heels',
    nom: 'Développé en heels',
    alias: ['extension en heels', 'extension jambe heels', 'développé hauts talons'],
    disciplines: ['heels'],
    categories: ['positions', 'pas'],
    definition: "Extension progressive de la jambe libre depuis une position de passé (genou levé) jusqu'à l'extension complète, exécutée en talons hauts — geste qui allie force des hanches fléchisseurs et souplesse de la chaîne postérieure.",
    description: "Le développé en heels est l'un des gestes les plus exigeants du vocabulaire heels — et l'un des plus beaux quand il est maîtrisé.\n\n**Le chemin du développé :**\n1. **Retiré/Passé** : le genou monte devant, pied en passé (talon contre genou)\n2. **Développement** : la jambe s'allonge progressivement\n3. **Extension** : jambe tendue, hauteur variable selon la souplesse et la force\n\n**Ce qui change avec le talon haut :**\n- La hauteur du talon soulève le bassin du côté d'appui → ajustement de l'alignement\n- Le pied de la jambe libre est déjà «pointé» naturellement par le talon\n- L'équilibre est plus fin → engagement du centre corps obligatoire\n\n**Hauteur réaliste :**\nEn heels, un développé à 90° (horizontal) est déjà remarquable. Cherche la qualité de l'extension plutôt que la hauteur brute.",
    erreursCourantes: [
      "Précipiter le développement — aller trop vite avant que la jambe soit prête. Le développé est lent et contrôlé par définition.",
      "Laisser le bassin se déporter du côté de la jambe qui monte — l'alignement reste centré.",
    ],
    conseils: [
      "Travaille d'abord le passé seul — le genou bien haut avant de dérouler. Si le passé est solide, le développé suivra naturellement. En heels, le contrôle du centre corps compense les déséquilibres du talon.",
    ],
    difficulteInterne: 3,
    termesLies: ['posture-heels', 'attitude-heels', 'walk-heels'],
  },

  {
    id: 'high-kick-heels',
    nom: 'High kick en heels',
    alias: ['battement en heels', 'kick hauts talons', 'coup de pied en heels'],
    disciplines: ['heels'],
    categories: ['batterie'],
    definition: "Battement de jambe à haute amplitude exécuté en talons hauts — mouvement de type «coup de pied» qui projette la jambe libre vers la hauteur, issu de la tradition des chorus lines et du cancan américain.",
    description: "Le high kick en heels, c'est l'un de ces mouvements qui impressionnent autant qu'ils demandent du travail.\n\n**Origine du high kick :**\nLes chorus girls des années 1920–1950 (Ziegfeld Follies, Radio City Music Hall) exécutaient des high kicks en chaussures à talons. L'esthétique heels contemporaine a hérité de cette tradition.\n\n**La technique :**\n1. **Départ** : poids sur la jambe d'appui, corps centré\n2. **L'élan** : la jambe libre repart du sol avec élan\n3. **Le kick** : projection rapide vers le haut, jambe tendue\n4. **Le retour** : contrôlé — pas de chute libre\n\n**Ce qui change avec le talon :**\n- L'appui sur le talon haut pendant le kick demande un ancrage parfait de la jambe d'appui\n- Le bassin tend à se déporter — le gainage le maintient en place\n- L'atterrissage est plus délicat (risque d'entorse si mal aligné)\n\n**Variantes :**\n- Kick devant (le plus courant)\n- Kick de côté (plus rare, demande plus d'ouverture)\n- Double kick (deux kicks rapides sur le même élan)",
    erreursCourantes: [
      "Jambe d'appui pliée pendant le kick — elle doit être tendue et ancrée.",
      "Bassin qui bascule excessivement d'un côté lors du kick — le centre corps doit tenir.",
    ],
    securite: {
      risques: ["Entorse de cheville à l'atterrissage", "Sollicitation excessive des ischio-jambiers si pas échauffé"],
      precautions: ["Bien s'échauffer les ischio-jambiers et la chaîne postérieure avant", "Sol non-glissant obligatoire"],
    },
    conseils: [
      "Commence par des kicks à 45° avant de viser la hauteur maximale. La sécurité et le contrôle d'abord, la hauteur ensuite. Un kick à 90° bien contrôlé est plus impressionnant qu'un kick à 120° désorganisé.",
    ],
    difficulteInterne: 3,
    termesLies: ['walk-heels', 'posture-heels', 'heel-turn'],
  },

  {
    id: 'hip-circle-heels',
    nom: 'Hip circle en heels',
    alias: ['rotation de bassin heels', 'cercle de hanches', 'rotation hanches'],
    disciplines: ['heels'],
    categories: ['qualites-de-mouvement'],
    definition: "Rotation complète et continue du bassin dans un plan horizontal — cercle décrit par les hanches en séquençant une ondulation avant, latérale, arrière et latérale — mouvement fondamental du vocabulaire heels et des danses à accent de bassin.",
    description: "Le hip circle est souvent l'un des premiers mouvements explorés en heels — et pourtant, bien fait, il demande une coordination et une conscience corporelle réelles.\n\n**Le chemin du hip circle :**\n- **Avant** : le bassin pousse vers l'avant (cambrure)\n- **Côté droit** : le bassin part vers la droite\n- **Arrière** : le bassin pousse vers l'arrière (fessiers vers l'arrière)\n- **Côté gauche** : le bassin revient à gauche\n- **Boucle continue** sans à-coups\n\n**Ce qui fait la qualité d'un hip circle :**\n- La fluidité : pas de blocage entre les 4 phases\n- L'amplitude : explorer la plage maximale de mouvement du bassin\n- L'indépendance : le buste reste relativement fixe pendant que le bassin tourne\n\n**En heels :**\nLa hauteur du talon accentue naturellement la cambrure — le hip circle vers l'avant est donc plus ample. Compenser en cherchant également l'amplitude vers l'arrière.",
    erreursCourantes: [
      "Bouger tout le corps ensemble au lieu d'isoler le bassin — le hip circle vient du bassin, pas des épaules.",
      "Angles et à-coups entre les 4 phases — le cercle doit être continu et fluide.",
    ],
    conseils: [
      "Mets les mains sur tes hanches et imagine un cerceau de hula hoop. Trace le cercle le plus grand possible avec tes hanches. Quand tu peux maintenir le cercle en continuant à respirer normalement, tu as trouvé le bon relâchement.",
    ],
    difficulteInterne: 2,
    termesLies: ['body-roll-heels', 'floorwork-heels', 'posture-heels'],
  },

  {
    id: 'shoulder-roll-heels',
    nom: 'Shoulder roll en heels',
    alias: ["roulement d'épaule", 'ondulation des épaules heels', 'shoulder wave'],
    disciplines: ['heels'],
    categories: ['qualites-de-mouvement', 'ports-de-bras'],
    definition: "Ondulation séquentielle des épaules — l'une monte pendant que l'autre descend, ou les deux roulent vers l'avant ou l'arrière — geste signature du vocabulaire heels, influencé par les danses afro-américaines et le cabaret.",
    description: "Le shoulder roll, c'est un de ces mouvements qui ont l'air simple mais qui révèlent immédiatement si quelqu'un est à l'aise dans son corps — ou non.\n\n**Variations de shoulder roll :**\n\n**Roll alterné (le plus courant) :**\nÉpaule droite monte et roule vers l'avant pendant que la gauche descend. Puis alternance. Crée une vague horizontale entre les deux épaules.\n\n**Roll simultané vers l'avant :**\nLes deux épaules roulent vers l'avant ensemble — souvent utilisé avec une inclinaison du buste.\n\n**Roll vers l'arrière :**\nMouvement d'ouverture de la poitrine — qualité très différente : plus libre, plus ouvert.\n\n**Ce qui connecte le shoulder roll au reste du corps :**\nUn bon shoulder roll voyage jusqu'à la poitrine, qui suit légèrement. Ce n'est pas juste les épaules qui bougent — c'est toute la ceinture scapulaire.\n\n**Dans le contexte heels :**\nLe shoulder roll est souvent utilisé dans les transitions de walk, dans les moments d'attente musicale, ou comme intro à un body roll complet.",
    erreursCourantes: [
      "Épaules tendues et crispées — le shoulder roll demande du relâchement dans les trapèzes.",
      "Mouvement limité aux seules épaules sans connexion au sternum et à la poitrine.",
    ],
    conseils: [
      "Détends d'abord les épaules en les montant aux oreilles, puis en les laissant tomber. Répète 3 fois. Maintenant essaie le roll avec cette détente comme point de départ. La tension est l'ennemi du shoulder roll.",
    ],
    difficulteInterne: 2,
    termesLies: ['body-roll-heels', 'hip-circle-heels', 'walk-heels'],
  },

  {
    id: 'chest-pop-heels',
    nom: 'Chest pop en heels',
    alias: ['pop de poitrine', 'accent pectoral', 'chest isolation heels'],
    disciplines: ['heels'],
    categories: ['qualites-de-mouvement'],
    definition: "Accent musculaire bref et précis de la poitrine — projection soudaine et contrôlée du sternum vers l'avant — utilisé pour marquer les accents musicaux forts en heels et dans les danses urbaines.",
    description: "Le chest pop est l'outil de ponctuation musicale du vocabulaire heels. Là où un accent musical demande un marquage physique fort, le chest pop est souvent la réponse.\n\n**Comment fonctionne le chest pop :**\nLe sternum projette vers l'avant brièvement et revient. C'est une action musculaire de la cage thoracique, pas juste des épaules. Les muscles intercostaux et les pectoraux participent.\n\n**Types de chest pop :**\n\n**Pop vers l'avant (le plus courant) :**\nLe sternum sort vers l'avant d'un coup — impression que la poitrine «part» en avant.\n\n**Pop vers le bas :**\nPression vers le bas de la cage thoracique — souvent utilisé sur les basses fortes.\n\n**Pop alterné :**\nCôté droit, puis côté gauche — alternance rapide qui crée une vague horizontale.\n\n**Dans la musique :**\nLe chest pop répond aux accents forts (downbeats, drops, bass hits). En heels commercial, il marque les temps forts des productions EDM ou trap.\n\n**Connection avec le reste du corps :**\nUn chest pop qui voyage dans le buste entier, puis dans les bras, puis dans les hanches — c'est de la chorégraphie.",
    erreursCourantes: [
      "Chest pop qui vient des épaules au lieu du sternum — vérifier en posant une main sur le sternum.",
      "Pop sans retour (le sternum part et reste là) — le pop est une action brève avec un retour à la position neutre.",
    ],
    conseils: [
      "Pose une main à plat sur ton sternum. Sens le sternum qui pousse ta main vers l'avant d'un coup bref et revient. C'est ça le chest pop. La main donne un feedback proprioceptif précieux pour isoler le bon mouvement.",
    ],
    difficulteInterne: 2,
    termesLies: ['body-roll-heels', 'shoulder-roll-heels', 'hip-circle-heels'],
  },

  {
    id: 'chair-work-heels',
    nom: 'Chair work (travail avec chaise)',
    alias: ['travail chaise heels', 'chair dance', 'danse avec chaise'],
    disciplines: ['heels'],
    categories: ['jeu-de-scene', 'accessoires'],
    definition: "Vocabulaire chorégraphique développé autour d'une chaise comme accessoire scénique — utilisation du dossier, de l'assise et des pieds de la chaise pour créer des figures, des poses et des transitions propres au style heels.",
    description: "La chaise en heels, c'est à la fois un accessoire iconique et un véritable partenaire de danse. Elle offre un appui, une structure, une relation physique — et elle définit un espace scénique.\n\n**Les grandes zones de la chaise :**\n\n**Le dossier :**\nAppui des mains pour des penchés vers l'avant ou l'arrière. Support pour des attitudes et développés. Outil de tension dans la relation corps/accessoire.\n\n**L'assise :**\nPosition assise avec jambes croisées, jambe levée ou cambré vers l'arrière. Point de départ pour des poses sculpturales.\n\n**Techniques de base :**\n- **Passe-devant la chaise** : contournement du dossier avec prise sur le côté\n- **Penché arrière assis** : assis sur l'assise, cambré vers l'arrière, tête qui tombe\n- **Extension jambe dossier** : main sur dossier, jambe tendue en arabesque ou attitude\n\n**L'esthétique du chair work :**\nLe chair work vient du burlesque, du cabaret et du strip-tease. Dans l'heels contemporain, il est réinterprété avec une intention artistique — la chaise n'est pas qu'un accessoire, elle est un partenaire chorégraphique.",
    erreursCourantes: [
      "Chaise instable — toujours vérifier que la chaise ne glisse pas avant de l'utiliser comme appui.",
      "Ignorer la chaise entre les poses — la relation à la chaise doit être continue, pas seulement aux moments de figure.",
    ],
    securite: {
      risques: ["Glissement de la chaise si le sol est lisse", "Déséquilibre dans les poses assises cambrées"],
      precautions: ["Chaise avec embouts antidérapants ou sur tapis", "Apprendre chaque pose séparément avant de les enchaîner"],
    },
    conseils: [
      "Apprends à tourner autour de ta chaise comme si elle était un partenaire — pas un meuble. Quel côté présentes-tu au public ? Comment entres-tu dans la relation avec elle ? La chaise a une présence : traite-la comme telle.",
    ],
    difficulteInterne: 3,
    termesLies: ['floorwork-heels', 'sass', 'body-roll-heels'],
  },

  {
    id: 'death-drop-heels',
    nom: 'Death drop en heels',
    alias: ['back fall heels', 'chute arrière heels', 'dip arrière vogueing'],
    disciplines: ['heels'],
    categories: ['travail-au-sol', 'figures-aeriennes'],
    definition: "Figure spectaculaire de chute contrôlée vers l'arrière depuis la position debout — le corps tombe en arrière-splits ou en extension arrière et atterrit au sol en une fraction de seconde — originaire du vogueing et du ballroom.",
    description: "Le death drop est l'une des figures les plus emblématiques du vogueing et du ballroom — et depuis les années 2010, il a migré vers l'heels commercial. Impressionnant, oui. Dangereux si mal appris, oui. Apprenable correctement, absolument.\n\n**Origine :**\nLe death drop naît dans les ballrooms de la communauté LGBTQ+ afro-américaine et latino-américaine à New York dans les années 1980–1990. C'est un geste de performance pure — l'abandon dramatique du corps au sol.\n\n**La technique :**\n1. **Départ** : debout, pieds légèrement écartés\n2. **L'arrière** : le bassin part vers l'arrière-bas, la jambe avant reste tendue\n3. **La chute** : contrôlée, rapide — atterrissage sur les fesses/hanche/cuisse, jambe avant en extension\n4. **La pose** : le corps au sol, une jambe étendue, l'autre fléchie\n\n**Ce qui rend le death drop sûr :**\nC'est une chute CONTRÔLÉE — pas un abandon total. Le bassin guide la descente, les bras amortissent. L'impact n'est pas sur le coccyx mais sur la cuisse/hanche.\n\n**En heels :**\nLe pied avant doit être placé précisément pour ne pas bloquer la jambe pendant la chute.",
    erreursCourantes: [
      "Tomber sur le coccyx au lieu de la hanche/cuisse — très douloureux et dangereux.",
      "Chute trop lente sans engagement — le death drop perd tout son effet sans la rapidité de l'abandon.",
    ],
    securite: {
      risques: ["Impact sur le coccyx si la technique est incorrecte", "Entorse si le pied avant est mal positionné"],
      precautions: ["Apprendre d'abord sur un matelas épais ou crash mat", "Ne jamais pratiquer sur un sol dur sans maîtrise préalable"],
    },
    conseils: [
      "Commence par apprendre la position finale au sol — assieds-toi par terre dans la pose du death drop. Puis apprends à y descendre progressivement depuis la position accroupie. L'approche progressive est la seule safe pour ce mouvement.",
    ],
    difficulteInterne: 4,
    termesLies: ['floorwork-heels', 'vogue-ballroom-heels', 'cat-walk-heels'],
  },

  {
    id: 'lunge-heels',
    nom: 'Lunge en heels',
    alias: ['fente en heels', 'lunge hauts talons', 'fente avant heels'],
    disciplines: ['heels'],
    categories: ['positions', 'equilibres'],
    definition: "Fente avant ou latérale exécutée en talons hauts — une jambe avancée fléchie, l'autre en extension arrière — position sculpturale utilisée comme pose statique, transition ou préparation à d'autres mouvements.",
    description: "La lunge en heels semble simple — et pourtant, en talons hauts, même une fente de base demande une technique précise pour rester stable et sans douleur.\n\n**La lunge avant :**\n- Pied avant devant, genou fléchi à 90° au-dessus du pied (ni dedans, ni dehors)\n- Pied arrière en extension, talon de la chaussure posé au sol\n- Buste droit ou légèrement incliné selon l'esthétique\n- Le poids est partagé entre les deux jambes\n\n**Ce qui change avec le talon haut :**\n- Le talon haut de la jambe arrière force la cheville en flexion plantaire permanente — la jambe arrière est naturellement en position pointe\n- L'atterrissage en lunge (depuis la marche) demande plus de contrôle\n\n**Variantes :**\n- **Lunge avec cambré** : buste incliné vers l'arrière dans la lunge\n- **Lunge avec extension de bras** : bras en opposition pour le geste théâtral\n\n**La lunge comme pose scénique :**\nDans le vocabulaire heels, la lunge est souvent une pose de conclusion — l'image finale d'une phrase. La façon dont elle est maintenue et «regardée» compte autant que la technique.",
    erreursCourantes: [
      "Genou avant qui dépasse le pied (en avant des orteils) — risque pour le genou, surtout en heels.",
      "Talon avant levé du sol au lieu d'être posé — la stabilité repose sur le contact du talon avec le sol.",
    ],
    conseils: [
      "En heels, le lunge est aussi une question de regard et d'intention. Une fois en position, choisis où tu regardes — vers le bas, c'est l'effacement. Vers le public, c'est la présence. Cette décision transforme le même geste technique en deux choses très différentes.",
    ],
    difficulteInterne: 2,
    termesLies: ['walk-heels', 'posture-heels', 'floorwork-heels'],
  },
]
