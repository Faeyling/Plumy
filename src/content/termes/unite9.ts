import type { Terme } from '../schema'

export const termesUnite9: Terme[] = [

  // ─── Art de l'effeuillage ─────────────────────────────────────────────────

  {
    id: 'effeuillage',
    nom: 'Effeuillage',
    alias: ['striptease artistique', 'reveal', 'dévoilement', 'undress'],
    disciplines: ['burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Art du dévoilement progressif du corps par le retrait chorégraphié de vêtements et accessoires — élément central du burlesque artistique, où le processus de révélation est plus important que l'état final, et où l'humour, le mystère ou le jeu de scène privent l'acte de toute vulgarité.",
    description: "L'effeuillage est l'art dans le burlesque, pas l'obscénité. La différence est dans l'intention et la maîtrise.\n\n**Ce qui distingue l'effeuillage artistique :**\n- Le **processus** (le tease) est au centre, pas la destination\n- Chaque retrait est chorégraphié — timing, regard, intention\n- Il y a un personnage qui retire, pas juste un corps qui se dévoile\n- L'humour, l'ironie, la sensualité ou l'absurde colorent l'acte\n\n**La progression de l'effeuillage :**\n\n**1. L'entrée :**\nLe costume complet. Le personnage est installé. Le public ne sait pas encore ce qui va se passer.\n\n**2. Les premiers hints :**\nUn geste vers un accessoire, un regard complice. L'effeuillage commence dans l'intention, avant tout retrait.\n\n**3. Les accessoires :**\nGants, boa, chapeau — les accessoires partent en premiers. Chacun est 'utilisé' avant d'être retiré.\n\n**4. Les vêtements :**\nLe timing est tout — trop vite et l'effet disparaît, trop lent et le public décroche.\n\n**5. Le reveal final :**\nSi reveal il y a — il est toujours inattendu, comique ou spectaculaire. Rarement 'frontal' dans le néo-burlesque contemporain.\n\n**Ce que l'effeuillage n'est pas :**\nUn déshabillage mécanique, une performance de type strip-club sans intention artistique.",
    erreursCourantes: [
      "Trop vite — l'effeuillage efficace prend du temps, utilise le rythme musical, laisse le public imaginer.",
      "Effeuillage sans personnage — c'est la présence du character qui transforme le retrait en art.",
    ],
    conseils: [
      "La règle d'or du burlesque : ce que tu NE montres pas est plus érotique que ce que tu montres. La main qui couvre, l'épaule tournée, le regard qui promet sans tenir — c'est ça, le tease.",
    ],
    difficulteInterne: 3,
    termesLies: ['tease', 'character-burlesque', 'prop-burlesque'],
  },

  {
    id: 'tease',
    nom: 'Tease',
    alias: ['taquinerie', 'teasing', 'suggestion', 'promesse'],
    disciplines: ['burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Art de suggérer sans montrer, de promettre sans tenir — qualité d'interaction avec le public qui crée l'anticipation, le désir et l'humour à travers le jeu avec la révélation et la dissimulation.",
    description: "Le mot 'burlesque' vient de 'burla' (plaisanterie en espagnol). Et le tease est la grande plaisanterie entre l'artiste et le public.\n\n**Le tease comme dialogue :**\nLe public attend quelque chose. L'artiste voit cette attente, joue avec, la frustre et la satisfait — jamais tout à fait comme prévu.\n\n**Techniques du tease :**\n\n**Le hold :**\nÀ un moment crucial (retrait d'un gant, ouverture d'un vêtement), s'arrêter. Regarder le public. Faire semblant de ne pas continuer. Le silence est de l'or.\n\n**Le misdirection :**\nCommencer à faire quelque chose (sembler vouloir retirer un vêtement), puis aller vers autre chose. Le public est trompé — avec humour.\n\n**Le slow reveal :**\nMontrer très lentement, centimètre par centimètre, quelque chose que le public s'attend à voir. La lenteur devient elle-même comique.\n\n**Le cover-reveal-cover :**\nMontrer brièvement puis cacher à nouveau. Le public rit — il a eu et il n'a plus.\n\n**Le timing comique :**\nLe tease burlesque a souvent une dimension humoristique — le moment de suspense, le moment de 'oh non', le moment de 'enfin'. C'est de la comédie physique.",
    erreursCourantes: [
      "Tease sans timing — le timing EST le tease. Trop vite = pas de tease. Trop lent = ennui.",
    ],
    conseils: [
      "Exercice de tease : assieds-toi devant un miroir avec un gant. Essaie de prendre 2 minutes entières pour retirer ce gant en utilisant le hold, le misdirection et le slow reveal. 2 minutes, c'est long — et c'est le temps d'un bon tease.",
    ],
    difficulteInterne: 3,
    termesLies: ['effeuillage', 'rapport-public', 'timing-burlesque'],
  },

  {
    id: 'character-burlesque',
    nom: 'Personnage burlesque',
    alias: ['character', 'persona burlesque', 'alter-ego', 'personnage de scène'],
    disciplines: ['burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Identité artistique construite et jouée sur scène — le personnage de burlesque est une création de l'artiste, souvent différente de sa personnalité quotidienne, qui lui permet d'explorer d'autres facettes de lui-même dans l'espace protégé de la scène.",
    description: "Le burlesque se danse *avec* un personnage. Sans personnage, c'est du déshabillage. Avec un personnage, c'est de l'art.\n\n**Qu'est-ce qu'un personnage burlesque ?**\n\nLe personnage peut être :\n- Une figure historique revisitée (Cléopâtre, Marie Curie)\n- Un archétype (la fatale, le naïf, le savant fou)\n- Un personnage fictif (une super-héroïne, une poupée de cire)\n- Une projection de l'artiste lui-même (son alter-ego)\n\n**Les éléments du personnage :**\n\n**Nom :** Presque tous les artistes burlesque ont un nom de scène\n\n**Costume :** Le costume *est* le personnage au premier regard\n\n**Mouvement signature :** Un geste, une façon de marcher, un tic qui appartient au personnage\n\n**Rapport au public :** Le personnage est-il séducteur, mystérieux, comique, dramatique ?\n\n**Le personnage comme protection :**\nLe caractère protège l'artiste. Ce n'est pas *moi* sur scène qui retire mes vêtements — c'est mon personnage, qui a ses propres motivations et son propre sens de l'humour.\n\n**Construire son personnage :**\n1. Choisir une inspiration (une image, un film, une musique)\n2. Choisir un registre (séduction, humour, mystère...)\n3. Choisir un costume cohérent\n4. Trouver le mouvement signature\n5. Développer en répétition la psychologie du personnage",
    erreursCourantes: [
      "Personnage trop vague ('une femme fatale') — le personnage gagne en richesse quand il est précis et particulier.",
    ],
    conseils: [
      "Donne à ton personnage une biographie imaginaire. Qui est-il/elle ? Quel est son secret ? Qu'est-ce qu'il/elle veut ce soir ? Ces réponses n'apparaîtront pas telles quelles sur scène, mais elles nourriront ta façon de bouger et de regarder.",
    ],
    difficulteInterne: 3,
    termesLies: ['effeuillage', 'tease', 'presentation-scenique'],
  },

  {
    id: 'shimmy',
    nom: 'Shimmy',
    alias: ['tremblement d\'épaules', 'shoulder shimmy', 'chest shimmy', 'hip shimmy'],
    disciplines: ['burlesque'],
    categories: ['qualites-de-mouvement', 'pas'],
    definition: "Vibration ou tremblement rapide d'une partie du corps — généralement les épaules, la poitrine ou les hanches — créant un effet de frémissement expressif. Élément signature du burlesque et de nombreuses danses afro-américaines.",
    description: "Le shimmy est l'un des gestes les plus reconnaissables du burlesque — et l'un des plus difficiles à exécuter proprement.\n\n**Types de shimmy :**\n\n**Shoulder shimmy :**\nLes deux épaules alternent rapidement avant-arrière. La cage thoracique participe légèrement. Utilisé pour ponctuer un moment comique ou sensuel.\n\n**Chest shimmy :**\nLa cage thoracique vibre latéralement, entraînant un léger mouvement de poitrine. Plus subtil que le shoulder shimmy.\n\n**Hip shimmy :**\nLes hanches vibrent latéralement à haute fréquence. Vient des danses orientales (danse du ventre), intégré dans le burlesque.\n\n**Comment créer le shimmy :**\n- Ce n'est pas un mouvement décidé — c'est une vibration\n- Commencer lentement (alternance nette épaule droite/gauche)\n- Accélérer progressivement jusqu'à ce que les mouvements fusionnent en vibration\n- Relâcher les muscles parasites (surtout les bras et les mains)\n\n**Le shimmy dans le spectacle :**\nUtilisé sur les moments d'accent musical, les 'big band hits', les montées d'orchestre. C'est une ponctuation — pas un fond.",
    erreursCourantes: [
      "Corps trop rigide (le shimmy ne peut pas vibrer dans un corps crispé).",
      "Shimmy de tout le corps en même temps (perdre la spécificité de la zone isolée).",
    ],
    conseils: [
      "Laisse tomber tes épaules. Maintenant, pousse légèrement l'épaule droite vers l'avant, puis la gauche. Alterne lentement. Accélère. Relâche les bras. Laisse la vibration se créer d'elle-même. Tu as un shimmy.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolation', 'bump-grind', 'effeuillage'],
  },

  {
    id: 'bump-grind',
    nom: 'Bump and grind',
    alias: ['bump', 'grind', 'bump and grind', 'mouvement de bassin burlesque'],
    disciplines: ['burlesque'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Technique de mouvement du bassin associant le 'bump' (impulsion nette du bassin dans une direction) et le 'grind' (mouvement circulaire ou en 8 du bassin) — caractéristique du burlesque classique et du cabaret érotique.",
    description: "Le bump and grind est une signature du burlesque classique américain des années 1940–1960.\n\n**Le bump :**\nImpulsion nette et précise du bassin vers l'avant, vers le côté ou vers l'arrière — sur un accent musical. Comme une ponctuation corporelle.\n\n**Le grind :**\nMouvement circulaire du bassin — lent, continu, souvent sur les temps lents de la musique. Peut être une figure-8 ou un cercle complet.\n\n**Les rythmes du bump and grind :**\n- **Slow grind** : sur une musique lente et grave (blues, soul)\n- **Fast bump** : sur les accents d'un orchestre de big band\n- **Bump-hold** : le bump suivi d'une tenue — pour l'effet comique ou dramatique\n\n**Le bump and grind et le public :**\nTraditionnellement, le bump était dirigé vers le public (ou vers un partenaire imaginaire) — créant une interaction directe, souvent comique dans le burlesque néo.\n\n**Dans le néo-burlesque :**\nLe bump and grind est souvent utilisé avec une dimension parodique — exagéré, timing comique, jeu avec l'attente du public.",
    erreursCourantes: [
      "Grind sans isolation (tout le corps bouge alors que le bassin seul devrait).",
    ],
    conseils: [
      "Pratique le bump en solo : compte 1-2-3-BUMP. Sur chaque BUMP, le bassin fait une impulsion nette dans une direction choisie. Le reste du corps reste relativement immobile. C'est cette isolation qui rend le bump lisible.",
    ],
    difficulteInterne: 2,
    termesLies: ['shimmy', 'travail-bassin', 'effeuillage'],
  },

  {
    id: 'prop-burlesque',
    nom: 'Accessoires en burlesque',
    alias: ['props', 'accessoires scéniques burlesque', 'gants burlesque', 'fan dance prop'],
    disciplines: ['burlesque'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Ensemble des accessoires chorégraphiques utilisés dans le burlesque — gants longs, boa de plumes, éventails, chapeaux, chaises, capes, cannes — chacun faisant partie de la narration et de l'effeuillage.",
    description: "En burlesque, les accessoires ne décorent pas le numéro — ils *sont* des personnages du numéro.\n\n**Les accessoires classiques du burlesque :**\n\n**Les gants longs :**\nAccessoire numéro 1 du burlesque. Le retrait des gants est souvent le premier (et le plus chorégraphié) effeuillage. Tradition du 'glove peel' — retirer le gant doigt par doigt, puis d'un seul mouvement.\n\n**Le boa de plumes :**\nVolumineux, expressif, complice. Il voile, révèle, entoure, s'envole. Voir technique dédiée.\n\n**L'éventail :**\nSurtout dans la fan dance (style Sally Rand). Permet de jouer avec la révélation et le voilage.\n\n**La chaise :**\nAccessoire de scène universel — elle donne un point fixe pour le jeu de scène, permet des transitions, des poses, des moments de connivence avec le public.\n\n**La cape :**\nEffet dramatique d'entrée — la cape qui tombe révèle le costume. Ou inversement : utilisée pour voiler.\n\n**Technique des gants :**\n1. Porter le gant entier\n2. Retirer d'abord chaque doigt en séquence\n3. Faire rouler le gant jusqu'au poignet\n4. Retirer d'un seul geste du coude\n5. Tourner et 'jeter' (ou poser élégamment) le gant",
    erreursCourantes: [
      "Accessoire qui gêne la danse au lieu de la compléter (répéter avec l'accessoire longtemps avant le spectacle).",
    ],
    conseils: [
      "Chaque accessoire a une psychologie. Le boa est espiègle. Les gants sont élégants et sensuels. L'éventail est mystérieux. Avant de choisir tes accessoires, demande-toi quelle émotion tu veux créer — l'accessoire doit servir cette émotion.",
    ],
    difficulteInterne: 2,
    termesLies: ['boa-eventail', 'effeuillage', 'character-burlesque'],
  },

  {
    id: 'timing-burlesque',
    nom: 'Timing burlesque',
    alias: ['timing comique', 'timing dramatique', 'pause', 'rythme du numéro'],
    disciplines: ['burlesque'],
    categories: ['concepts', 'jeu-de-scene'],
    definition: "Maîtrise du temps dans un numéro de burlesque — l'art de savoir quand accélérer, ralentir, s'arrêter, laisser le silence ou le regard, et quand utiliser l'accent musical comme ponctuation chorégraphique.",
    description: "Le timing est peut-être la compétence la plus difficile à enseigner en burlesque — et la plus importante.\n\n**Les lois du timing burlesque :**\n\n**La pause :**\nLe moment d'immobilité totale — le plus court possible pour créer le maximum d'effet. Le public 'retient son souffle'.\n\n**L'accent musical :**\nSynchroniser les moments de reveal, de bump, de shimmy sur les accents de l'orchestre. La musique est un partenaire chorégraphique.\n\n**Le tempo variable :**\nUn bon numéro de burlesque n'est pas à vitesse constante — il accélère, ralentit, s'arrête. La variation de tempo crée le drame.\n\n**Le timing comique :**\nEn comédie (et le burlesque est souvent comique), le rire naît du contraste temporel — le long silence avant la chute, le geste inattendu qui arrive trop tôt ou trop tard.\n\n**La règle du 3 :**\nEn burlesque classique, les moments de tease sont souvent répétés 3 fois avec variation :\n- Première fois : introduction\n- Deuxième fois : confirmation\n- Troisième fois : subversion/surprise\n\n**Apprendre le timing :**\nLe timing s'apprend par l'expérience de scène et l'observation du public. Il ne peut pas se répéter en studio — il naît de la relation réelle avec un vrai public.",
    erreursCourantes: [
      "Trop vite — la plupart des débutants en burlesque sont trop rapides. Tout faire deux fois plus lentement est souvent la bonne direction.",
    ],
    conseils: [
      "Regarde des numéros de Dita Von Teese ou de Dirty Martini et compte les pauses. Tu verras que certains moments durent 5, 10, parfois 15 secondes d'immobilité totale — et que ces moments sont les plus puissants.",
    ],
    difficulteInterne: 4,
    termesLies: ['tease', 'rapport-public', 'effeuillage'],
  },

  {
    id: 'neo-burlesque',
    nom: "Néo-burlesque",
    alias: ['neo-burlesque', 'burlesque contemporain', 'burlesque revival'],
    disciplines: ['burlesque'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Mouvement artistique né dans les années 1990 aux États-Unis qui renouvelle et réinvente le burlesque classique des années 1940–1960 — en intégrant des valeurs féministes, une inclusion radicale des corps et des genres, et une liberté de style totale.",
    description: "Le néo-burlesque est né à New York et San Francisco dans les années 1990 comme acte de résistance culturelle et réappropriation féministe.\n\n**Les origines :**\n- **1990s** : Scènes burlesque à New York (World Famous BOB, Murray Hill), San Francisco\n- **2000s** : Explosion internationale, Dita Von Teese popularise le burlesque auprès du grand public\n- **2010s** : Le néo-burlesque dans toutes les grandes villes du monde\n\n**Ce qui différencie le néo-burlesque du burlesque classique :**\n\n**Inclusion des corps :**\nLe burlesque classique avait ses standards (le 'chorégirl look'). Le néo-burlesque célèbre activement tous les corps — toutes les tailles, tous les genres, toutes les couleurs.\n\n**Diversité de style :**\nThème medieval, science-fiction, punk, queerpunk, horror burlesque, politique — tout est possible.\n\n**Dimension féministe et queer :**\nLe néo-burlesque se positionne explicitement comme art de la souveraineté corporelle — 'Mon corps, mes règles'.\n\n**Les grandes artistes néo-burlesque :**\n- **Dita Von Teese** : référence glamour et classique\n- **Dirty Martini** : artiste plus size, militante\n- **Jo Boobs** : activiste et organisatrice communautaire\n- **Harvest Moon** : style plus dark et politique",
    erreursCourantes: [],
    conseils: [
      "Le néo-burlesque n'a pas de 'bon corps' ou de 'bon style'. Sa seule règle est l'intention artistique et la souveraineté de l'artiste sur sa propre présentation. C'est sa force et sa beauté.",
    ],
    difficulteInterne: 1,
    termesLies: ['effeuillage', 'character-burlesque', 'burlesque-origines'],
  },
]
