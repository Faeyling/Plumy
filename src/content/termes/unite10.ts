import type { Terme } from '../schema'

export const termesUnite10: Terme[] = [

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
    etymologie: "Du verbe français 'effeuiller' (ôter les feuilles, les pétales) — par métaphore poétique, l'effeuillage burlesque désigne l'art d'ôter les vêtements comme on effeuille une fleur : lentement, pétale après pétale.",
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
    etymologie: "De l'anglais 'to tease' (taquiner, agacer, titiller). Le tease burlesque n'est pas la révélation — c'est la promesse maintenue, la taquinerie sans résolution.",
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
    etymologie: "De l'anglais américain 'shimmy' — déformation phonétique du mot 'chemise' (*chémi*). La danse serait nommée ainsi parce que le tremblement des épaules faisait vibrer la chemise ou la robe. Popularisée dans les années 1910–1920.",
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
    etymologie: "De l'anglais 'bump' (choc, impulsion de hanche) et 'grind' (moudre, frotter — mouvement circulaire). Les deux mots décrivent exactement les deux gestes : l'impulsion ponctuelle et le mouvement rotatif continu.",
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

  // ─── Termes supplémentaires burlesque ────────────────────────────────────

  {
    id: 'neo-burlesque',
    nom: 'Néo-burlesque',
    alias: ['new burlesque', 'burlesque contemporain', 'burlesque revival'],
    disciplines: ['burlesque'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Mouvement artistique né dans les années 1990 à New York et San Francisco qui réinvente le burlesque classique avec des valeurs féministes, une inclusion radicale des corps et des genres, et une liberté esthétique totale — en rupture avec les standards de la revue traditionnelle.",
    description: "Le néo-burlesque est pour moi l'une des formes artistiques les plus politiquement intéressantes du XXe siècle finissant. C'est une renaissance — mais pas une nostalgie.\n\n**Comment est né le néo-burlesque :**\nÀ la fin des années 1980 et au début des années 1990, des artistes à New York et San Francisco redécouvrent le burlesque classique — et décident de le réinventer radicalement. L'idée n'est pas de reproduire l'âge d'or, mais d'en prendre l'esprit et d'y injecter une conscience politique contemporaine.\n\n**Ce qui distingue le néo-burlesque :**\n\n**Inclusion radicale :**\nLe burlesque classique avait ses standards de corps (la chorus girl). Le néo-burlesque célèbre *activement* tous les corps — toutes les tailles, tous les genres, toutes les couleurs. Ce n'est pas de la tolérance — c'est de la célébration.\n\n**Pluralité esthétique :**\nHorror burlesque, steampunk burlesque, queer burlesque, comedy burlesque, political burlesque — il n'y a pas de 'bon style'. Chaque artiste invente le sien.\n\n**Souveraineté corporelle :**\n'Mon corps, mes règles.' Le néo-burlesque revendique le droit de chaque artiste à définir ses propres termes de représentation.\n\n**Artistes fondateurs et figures majeures :**\n- **Dita Von Teese** : a popularisé le néo-burlesque au grand public dans les années 2000 — glamour, référence au burlesque classique\n- **Dirty Martini** : artiste plus size, activiste corporelle\n- **Jo Boobs** : organisatrice communautaire, New York Burlesque Festival\n- **Harvest Moon** : style queerpunk, dark et politique\n\n**Le néo-burlesque et le féminisme :**\nLe débat existe et il est sain. Ce qui est sûr : le néo-burlesque *peut* être une pratique féministe quand il est exercé avec conscience, intention et consentement — quand l'artiste est sujet, pas objet.",
    erreursCourantes: [],
    conseils: [
      "Pour comprendre le néo-burlesque, cherche des artistes qui *ne* ressemblent *pas* à Dita Von Teese. La force du mouvement est dans sa diversité — pas dans ses têtes d'affiche les plus médiatisées.",
    ],
    etymologie: "Du grec 'néo' (nouveau) + burlesque. Le terme émerge dans les années 1990–2000 pour distinguer le mouvement de revival du burlesque classique des années 1940.",
    difficulteInterne: 1,
    termesLies: ['effeuillage', 'character-burlesque', 'tease'],
  },

  {
    id: 'fan-dance',
    nom: 'Fan dance',
    alias: ['danse aux éventails', 'danse des éventails', 'Sally Rand dance'],
    disciplines: ['burlesque'],
    categories: ['pas', 'accessoires', 'jeu-de-scene'],
    definition: "Danse de voilage utilisant un ou deux grands éventails de plumes pour révéler et dissimuler le corps en mouvement — popularisée par Sally Rand à l'Exposition Universelle de Chicago en 1933, devenue l'une des images emblématiques du burlesque classique.",
    description: "La fan dance est l'une des formes de burlesque les plus poétiques — et les plus techniques. Je l'aime particulièrement parce qu'elle est un art du non-voir.\n\n**Sally Rand et l'Exposition de Chicago (1933) :**\nSally Rand (1904–1979) crée sa fan dance en 1932 et la présente à l'Exposition Universelle de Chicago en 1933. Elle danse pratiquement nue derrière deux grands éventails de plumes d'autruche blancs — avec une telle maîtrise qu'elle ne révèle presque rien, mais promet tout. C'est un scandale et un triomphe simultanément. Sally Rand devient célèbre du jour au lendemain.\n\n**La technique de la fan dance :**\n\n**Les éventails géants :**\nLes éventails de fan dance sont souvent plus grands que le danseur — ils sont faits de plumes d'autruche ou de plumes synthétiques montées sur un bâton articulé.\n\n**Les principes de base :**\n- **Ouverture/fermeture** : l'éventail s'ouvre et se ferme en arc\n- **Voilage** : l'éventail couvre une partie du corps\n- **Révélation** : l'éventail s'écarte pour révéler\n- **Valse des deux éventails** : l'un se ferme quand l'autre s'ouvre — dialogue entre les deux\n\n**Le paradoxe de la fan dance :**\nC'est une conversation permanente entre révélation et mystère. Le public voit et ne voit pas — et c'est là que réside toute la magie.\n\n**L'éventail comme extension du corps :**\nL'éventail doit sembler être une prolongation naturelle des bras. Si tu penses encore à comment le tenir, tu n'y es pas encore.",
    erreursCourantes: [
      "Éventails qui 'claquent' — les gestes doivent être fluides, pas brusques.",
      "Corps figé derrière l'éventail — le corps bouge, les éventails suivent et précèdent.",
    ],
    conseils: [
      "Avant de chorégraphier, passe 15 minutes à explorer l'éventail sans musique. Ce délai entre ton geste et la réponse de l'éventail — apprends à le sentir. C'est de là que vient la grâce.",
    ],
    etymologie: "De l'anglais 'fan' (éventail) et 'dance' (danse). Désigne spécifiquement la danse aux grands éventails de plumes popularisée par Sally Rand en 1933.",
    difficulteInterne: 3,
    termesLies: ['boa-eventail', 'prop-burlesque', 'tease', 'effeuillage'],
  },

  {
    id: 'strut-burlesque',
    nom: 'Strut',
    alias: ['strut burlesque', 'marche burlesque', 'démarche de scène', 'walk burlesque'],
    disciplines: ['burlesque'],
    categories: ['deplacements', 'jeu-de-scene'],
    definition: "Démarche de scène caractéristique du burlesque — marche intentionnelle, portée, avec un fort engagement de la posture et du regard, qui exprime la présence, la confiance et la personnalité du personnage.",
    description: "Le strut est la façon dont un personnage burlesque *entre* sur scène — et c'est souvent là que tout se joue. Marcher, c'est se déplacer. Strutter, c'est *arriver*.\n\n**Éléments du strut :**\n\n**La posture :**\n- Colonne vertébrale allongée\n- Épaules détendues, légèrement en arrière\n- Poitrine ouverte\n- Menton parallèle au sol — ni baissé ni arrogant\n\n**Le bassin :**\nDans le strut burlesque, le bassin est actif — il participe au mouvement à chaque pas. Ce n'est pas un déhanchement exagéré : c'est une présence dans les hanches.\n\n**Les bras :**\nDécontractés, naturels — pas rigides. Ils suivent le corps avec légèreté.\n\n**Le regard :**\nDroit devant — ou vers le public. Le regard qui ne cherche pas, qui sait déjà.\n\n**Strut et personnage :**\nLe strut change selon le personnage : une reine aura un strut majestueux et lent, une espionne un strut précis et économe, un personnage comique un strut légèrement exagéré.\n\n**Tempo :**\nLe strut prend son temps. C'est peut-être le premier réflexe à corriger : un strut qui se dépêche n'est plus un strut.",
    erreursCourantes: [
      "Strut trop rapide — le strut prend son temps, il ne court pas.",
      "Épaules crispées vers les oreilles — détendre, allonger.",
      "Regard vers le sol — le regard est une partie du strut autant que les jambes.",
    ],
    conseils: [
      "Entraîne-toi à faire dix pas dans une pièce comme si tu arrivais à ta propre fête surprise — et que tout le monde était là pour toi. Filme-toi. Observe ce que ton corps fait quand il sait qu'on le regarde avec admiration.",
    ],
    difficulteInterne: 2,
    termesLies: ['character-burlesque', 'presentation-scenique', 'rapport-public'],
  },

  {
    id: 'pasties',
    nom: 'Pasties',
    alias: ['cache-seins', 'cache-tétons', 'nipple covers', 'tassel pasties'],
    disciplines: ['burlesque'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Petit accessoire adhésif — souvent en forme de coquille, d'étoile ou de spirale pailletée — que les artistes burlesque portent pour couvrir les mamelons, permettant un dévoilement partiel tout en respectant les règles de décence scénique.",
    description: "Les pasties sont un accessoire iconique du burlesque — à la fois pratiques (respect des règles scéniques) et esthétiques (le pasty est lui-même un bijou).\n\n**Histoire des pasties :**\nLes pasties apparaissent dans le burlesque américain classique (années 1940–1960) comme solution pour contourner les lois sur la nudité. Gypsy Rose Lee est parmi les premières à avoir transformé ce cache en accessoire signature — et non en simple obligation.\n\n**Le pasty comme objet artistique :**\nDans le néo-burlesque, les pasties deviennent des œuvres en soi — paillettes, plumes, lumières LED, miniatures, pompons qui tourbillonnent (les 'tassel pasties').\n\n**Tassel twirling :**\nArt de faire tourner les pompons des pasties en mouvement musculaire — compétence à part entière qui consiste à alterner la tension dans chaque pectoral pour faire tourner les tassels dans des directions opposées.\n\n**Matériaux et adhérence :**\nLes pasties adhèrent à la peau avec de la colle double-face ou du spirit gum. Leur retrait se fait à l'huile démaquillante.\n\n**Choisir ses pasties :**\nCouleur, forme (géométrique, naturelle, fantaisiste), taille, décoration — les pasties sont un choix esthétique et identitaire.",
    erreursCourantes: [
      "Mauvaise adhérence — tester systématiquement avant le spectacle, pas le soir même.",
    ],
    conseils: [
      "Si tu travailles les tassel pasties, commence par isoler chaque pectoral séparément. Quand tu peux contracter l'un sans l'autre, tu pourras faire tourner les tassels dans des directions opposées. C'est plus difficile qu'il n'y paraît — et plus satisfaisant quand ça marche.",
    ],
    etymologie: "De l'anglais américain 'pastie' — origine incertaine, probablement de 'paste' (coller) en référence à l'adhésif utilisé.",
    difficulteInterne: 2,
    termesLies: ['effeuillage', 'prop-burlesque', 'tease'],
  },

  {
    id: 'nom-scene-burlesque',
    nom: 'Nom de scène',
    alias: ['stage name', 'nom artiste burlesque', 'nom de performer', 'identité burlesque'],
    disciplines: ['burlesque'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Identité artistique adoptée par un artiste burlesque pour ses performances — distinct du nom civil, souvent évocateur, glamour, humoristique ou symbolique, qui matérialise et complète le personnage de scène.",
    description: "Le nom de scène est une tradition du burlesque depuis ses origines — et dans le néo-burlesque, c'est souvent le moment où tout commence vraiment. Quand le bon nom arrive, le personnage existe.\n\n**Pourquoi un nom de scène ?**\n\n**Séparation privé/public :**\nLe nom de scène trace une frontière entre la vie quotidienne et la scène. Ce n'est pas 'moi' avec ce nom — c'est mon personnage.\n\n**Protection :**\nHistoriquement, les artistes de burlesque utilisaient un nom de scène pour protéger leur vie privée dans un milieu parfois stigmatisé.\n\n**Identité artistique :**\nLe nom dit quelque chose sur le personnage, le style, l'univers de l'artiste — avant même qu'ils entrent sur scène.\n\n**Les noms de scène dans le burlesque classique :**\n- Gypsy Rose Lee (née Louise Hovick)\n- Lili St. Cyr (née Marie Van Schaack)\n- Sally Rand (née Helen Beck)\n- Dita Von Teese (née Heather Sweet)\n\n**Construire son nom de scène :**\nBonne pratique dans le néo-burlesque : le prénom + le nom comme une rencontre de deux références (une période, un lieu, un état d'esprit). Mais il n'y a pas de règle — l'essentiel est que ça *sonne* comme le personnage.\n\n**Le moment du choix :**\nChoisir son nom de scène peut prendre du temps. Et quand le bon arrive, on le sait.",
    erreursCourantes: [],
    conseils: [
      "Prends une feuille. Écris d'un côté des mots qui appartiennent à l'univers que tu veux incarner (époques, lieux, objets, sensations). De l'autre, des prénoms qui te parlent. Combine. Dis-les à voix haute. Celui qui sonne juste — c'est probablement le bon.",
    ],
    difficulteInterne: 1,
    termesLies: ['character-burlesque', 'effeuillage', 'neo-burlesque'],
  },

  {
    id: 'pose-burlesque',
    nom: 'Pose',
    alias: ['freeze burlesque', 'tableau vivant burlesque', 'pose scénique', 'hold position'],
    disciplines: ['burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Moment d'immobilité intentionnelle dans un numéro de burlesque — la pose arrête le mouvement pour concentrer l'attention du public sur une image précise, créant un effet de tableau vivant et amplifiant le timing dramatique.",
    description: "Dans le burlesque, l'immobilité est un outil aussi puissant que le mouvement — et souvent plus difficile à maîtriser. C'est une chose que j'insiste à répéter : savoir s'arrêter, c'est une technique.\n\n**Pourquoi la pose est-elle puissante ?**\nLe mouvement constant habite le regard sans le fixer. La pose *arrête* le regard — elle dit au public 'regarde ici, maintenant, ça'. C'est une ponctuation.\n\n**Types de poses en burlesque :**\n\n**La pose de révélation :**\nAprès un moment de tease, la pose expose l'image que le public attendait — ou une image inattendue.\n\n**La pose de suspense :**\nAvant un moment de tease — immobilité qui crée l'anticipation. Le public sait que quelque chose va se passer, mais quand ?\n\n**La pose comique :**\nDans le burlesque humoristique, une pose trop longue devient elle-même comique. L'artiste sait utiliser ce délai — et le dépasser.\n\n**La pose de clôture :**\nLa position finale du numéro — souvent la plus travaillée, la plus forte visuellement.\n\n**Comment réussir une pose :**\n- Le corps est entièrement immobile\n- L'énergie ne s'effondre pas — la pose est habitée, pas figée\n- Le regard reste actif\n- La durée est choisie — ni trop courte ni trop longue\n\n**Le tableau vivant :**\nLa pose burlesque renvoie à l'art du 'tableau vivant' — tradition du XIXe siècle où des artistes reproduisaient des tableaux de maître en immobilité. Beaucoup d'artistes burlesque s'en inspirent explicitement.",
    erreursCourantes: [
      "Pose qui 'dégonfle' — l'énergie disparaît pendant l'immobilité. La pose doit rester habitée jusqu'au bout.",
      "Pose trop courte — couper soi-même le moment avant que le public ait pu le recevoir.",
    ],
    conseils: [
      "Choisis ta pose finale et tiens-la devant un miroir. Compte jusqu'à 10. Est-ce que ton énergie est encore là à 10 ? Ton regard est-il toujours vivant ? C'est ça, une bonne pose — elle ne se vide pas.",
    ],
    difficulteInterne: 2,
    termesLies: ['timing-burlesque', 'tease', 'presentation-scenique'],
  },

  {
    id: 'glove-peel',
    nom: 'Glove peel',
    alias: ['retrait des gants', 'effeuillage des gants', 'déshabillage des gants longs'],
    disciplines: ['burlesque'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Technique chorégraphiée de retrait des gants longs — effeuillage progressif, doigt par doigt, suivi d'un déroulement du gant jusqu'au coude et d'un retrait dramatique — premier acte de l'effeuillage burlesque et l'un des plus sophistiqués.",
    description: "Le glove peel est le premier chapitre de tout numéro de burlesque qui se respecte — et c'est aussi l'un des plus délicats à exécuter. Un gant qui se retire bien peut durer deux minutes entières et tenir une salle en haleine. J'ai une page entière là-dessus dans mon carnet.\n\n**La structure du glove peel :**\n\n**1. L'invitation :**\nLe regard se pose sur le gant. Le public comprend ce qui va se passer — et l'anticipation commence.\n\n**2. Le retrait des doigts :**\nChaque doigt se retire en séquence — pouce, index, majeur, annulaire, auriculaire. Lentement, avec des holds entre chaque. Ce moment seul peut durer une minute.\n\n**3. Le déroulement :**\nLe gant se retrousse jusqu'au poignet, puis jusqu'au coude — centimètre par centimètre.\n\n**4. Le retrait final :**\nLe gant quitte le bras d'un seul geste décidé — contraste avec la lenteur qui précède.\n\n**5. La disposition :**\nLe gant est jeté dans le public, posé avec soin sur une chaise, ou gardé en bouche le temps de retirer l'autre. C'est un choix de personnage.\n\n**Avec deux gants :**\nLe numéro classique retire les deux gants dans un ordre précis — le gauche d'abord, puis le droit, avec des variations entre les deux pour maintenir l'intérêt.",
    erreursCourantes: [
      "Retirer le gant trop vite — c'est le piège numéro un. Ralentir, encore ralentir, encore.",
      "Oublier le regard pendant le retrait — le regard parle autant que les mains pendant le glove peel.",
    ],
    conseils: [
      "Prends un gant long. Mets-le. Essaie de le retirer en 3 minutes entières en utilisant tous les outils du tease : hold, slow reveal, misdirection. C'est un exercice d'entraînement complet — et très révélateur de là où tu en es.",
    ],
    difficulteInterne: 3,
    termesLies: ['prop-burlesque', 'tease', 'effeuillage', 'timing-burlesque'],
  },

  {
    id: 'reveal-burlesque',
    nom: 'Reveal',
    alias: ['révélation finale', 'grand reveal', 'moment de révélation', 'reveal final'],
    disciplines: ['burlesque'],
    categories: ['jeu-de-scene', 'concepts'],
    definition: "Moment culminant d'un numéro de burlesque où la révélation attendue (ou inattendue) se produit — point de résolution dramatique du tease, qui peut être partiel, total, comique ou délibérément détourné selon l'intention artistique.",
    description: "Le reveal est le moment pour lequel tout le numéro a été construit — et c'est souvent le plus difficile à réussir. Parce que trop souvent, les gens pensent que le reveal, c'est 'montrer'. C'est bien plus complexe que ça.\n\n**Types de reveals :**\n\n**Le reveal partiel :**\nOn révèle une partie seulement — l'épaule, le dos, la jambe. La révélation complète n'arrive jamais (ou arrive hors champ). C'est le reveal le plus sophistiqué.\n\n**Le reveal total :**\nLa révélation complète de l'image finale — pasties, costume de dessous, tenue finale. C'est ce que le public anticipe, et le donner au bon moment est un art.\n\n**Le reveal comique :**\nLa révélation est une surprise humoristique — le dessous est une combinaison ridicule, le corps porte un message inattendu. Le rire remplace le désir.\n\n**Le reveal détourné :**\nLe numéro se termine avant la révélation attendue — lights out, rideau, fin soudaine. Le public n'obtient jamais ce qui lui était promis. C'est le tease poussé à son extrême logique.\n\n**Timing du reveal :**\nLe reveal est toujours placé sur un moment musical fort — l'accent final, le dernier accord, ou parfois le silence total. Le timing transforme le reveal en ponctuation parfaite.",
    erreursCourantes: [
      "Reveal trop tôt — si le tease n'a pas créé suffisamment d'attente, le reveal passe inaperçu.",
      "Reveal non préparé musicalement — le reveal doit coïncider avec un moment fort de la partition.",
    ],
    conseils: [
      "Pose-toi ces trois questions avant de construire ton numéro : qu'est-ce que je révèle ? à quel moment exact ? comment ? La réponse à ces trois questions, c'est le cœur de ton numéro. Tout le reste est construction vers ce point.",
    ],
    difficulteInterne: 3,
    termesLies: ['tease', 'effeuillage', 'timing-burlesque', 'pose-burlesque'],
  },

  {
    id: 'comedy-burlesque',
    nom: 'Comedy burlesque',
    alias: ['burlesque comique', 'burlesque parodique', 'burlesque humoristique', 'comic burlesque'],
    disciplines: ['burlesque'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Style de burlesque qui place l'humour au premier plan — parodie, absurde, gags visuels, timing comique — héritier direct du vaudeville et du slapstick, qui utilise le tease et l'effeuillage comme matière première d'une performance résolument humoristique.",
    description: "La dimension comique du burlesque est aussi vieille que le burlesque lui-même — et je trouve qu'elle est souvent sous-estimée par rapport à la dimension glamour. C'est pourtant là qu'est né l'art.\n\n**Le burlesque et le vaudeville :**\nLe burlesque américain du début du XXe siècle est directement lié au vaudeville — le circuit de théâtres de variétés où se produisaient comédiens, acrobates, magiciens. Le burlesque hérite du vaudeville son sens du timing, ses gags visuels et son rapport direct au public.\n\n**Les formes du comedy burlesque :**\n\n**La parodie :**\nParodier un genre cinématographique, un personnage célèbre, une situation — et y insérer l'effeuillage comme révélation comique inattendue.\n\n**L'absurde :**\nLe numéro part dans une direction inattendue — le tease révèle quelque chose de ridicule plutôt que de sensuel. L'humour naît du décalage.\n\n**Le slapstick burlesque :**\nChutes, accessoires qui tombent, gestes exagérés — la comédie physique traditionnelle adaptée au format burlesque.\n\n**Le commentaire :**\nRegards en coin, haussements d'épaules, mimes — l'artiste commente sa propre performance avec ironie.\n\n**Artistes de référence :**\n- **Dirty Martini** : glamour et humour, jeu de scène très développé\n- **Julie Atlas Muz** : absurde et politique\n- **World Famous *BOB*** : comedy burlesque, drag\n- **The World Famous Pontani Sisters** : chorégraphies burlesques comiques en trio",
    erreursCourantes: [
      "Humour explicatif — le gag doit être lisible immédiatement, sans explications. Si tu dois l'expliquer, il est raté.",
    ],
    conseils: [
      "Pour développer ton comedy burlesque : regarde des comédiens stand-up, pas seulement des artistes burlesque. Le timing comique s'apprend au contact de ceux qui ont passé des années à faire rire. C'est la même chose.",
    ],
    etymologie: "Du latin 'burla' (plaisanterie, moquerie) — le burlesque a toujours eu une dimension comique à sa racine. Le 'comedy burlesque' en est l'expression la plus directe.",
    difficulteInterne: 3,
    termesLies: ['timing-burlesque', 'tease', 'rapport-public', 'neo-burlesque'],
  },

  {
    id: 'tassel-twirling',
    nom: 'Tassel twirling',
    alias: ['rotation des pompons', 'spinning tassels', 'faire tourner les glands'],
    disciplines: ['burlesque'],
    categories: ['accessoires', 'jeu-de-scene'],
    definition: "Art de faire tourner simultanément les pompons (tassels) fixés aux pasties, dans des directions opposées ou en synchronisation, par contrôle musculaire isolé de chaque pectoral — compétence technique et artistique signature du burlesque classique.",
    description: "Le tassel twirling est une des compétences les plus spectaculaires — et les plus absurdes dans le bon sens du terme — du burlesque. C'est de la danse musculaire pure, et c'est totalement unique à cette discipline.\n\n**Comment ça fonctionne :**\nLes tassels (pompons) sont fixés aux pasties. Pour les faire tourner, il faut faire tourner la peau. Ce qui implique de contracter et relâcher les pectoraux dans un mouvement circulaire — une isolation musculaire très précise.\n\n**La technique de base :**\n1. Sentir comment contracter le pectoral droit seul (sans que le gauche bouge)\n2. Puis le gauche seul\n3. Alterner les contractions dans un schéma circulaire\n4. Le tassel commence à osciller, puis à tourner\n\n**Les niveaux de maîtrise :**\n- Les deux tassels qui tournent dans le même sens\n- Les deux tassels qui tournent en sens opposés (le plus spectaculaire)\n- Un tassel qui tourne, l'autre immobile\n- Alternance rythmique en accord avec la musique\n\n**L'apprentissage :**\nLe tassel twirling s'apprend progressivement — d'abord un côté, puis l'autre, puis les deux ensemble. Certains y passent des semaines avant de trouver le schéma musculaire.\n\n**Dans le numéro :**\nC'est souvent un moment de virtuosité pure — et aussi un moment comique. L'absurdité totale de la chose fait toujours sourire. C'est voulu.",
    erreursCourantes: [
      "Forcer le mouvement par les bras ou les épaules — les tassels se font tourner par les pectoraux, pas par des mouvements extérieurs.",
      "Vouloir aller trop vite — le schéma musculaire doit s'installer lentement avant d'accélérer.",
    ],
    conseils: [
      "Commence sans les tassels — juste les mains posées sur la poitrine. Essaie de sentir la contraction circulaire d'un côté. Quand tu peux le faire séparément de chaque côté, ajoute les tassels. La proprioception avant la technique.",
    ],
    difficulteInterne: 4,
    termesLies: ['pasties', 'prop-burlesque', 'effeuillage'],
  },

  {
    id: 'glamour-burlesque',
    nom: 'Glamour burlesque',
    alias: ['esthétique burlesque', 'style classique burlesque', 'glamour pin-up', 'old Hollywood burlesque'],
    disciplines: ['burlesque'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Esthétique de raffinement et d'élégance extrême du burlesque classique et néo-classique — inspirée de Hollywood golden age et de la haute couture — qui utilise le luxe visuel (soie, strass, plumes, corsets) comme langage artistique et déclaration d'identité.",
    description: "Le glamour burlesque, c'est quand le luxe devient un argument artistique. Et ce n'est pas superficiel — c'est une prise de position.\n\n**Les origines du glamour burlesque :**\nLe glamour entre dans le burlesque dans les années 1920–1940, avec des artistes comme Lili St. Cyr et Gypsy Rose Lee, qui apportent sophistication et mise en scène théâtrale là où le burlesque populaire restait plus brut. L'idée : l'effeuillage peut être élégant, raffiné, luxueux.\n\n**Les éléments du glamour burlesque :**\n- **Costumes** : soie, satin, velours, dentelle, strass, plumes d'autruche\n- **Accessoires** : bijoux, gants longs, boa de plumes, coiffes élaborées\n- **Maquillage** : influencé par Hollywood des années 1940 — lèvres rouges, yeux charbonneux, teint mat\n- **Mise en scène** : bain de champagne (Lili St. Cyr), miroirs, escaliers, accessoires théâtraux\n- **Musique** : jazz de grande formation, standards, orchestres de big band\n\n**Dita Von Teese et le renouveau :**\nDita Von Teese (née en 1972) est la figure contemporaine du glamour burlesque — esthétique du burlesque classique, collaborations avec des maisons de haute couture, visibilité au grand public dans les années 2000.\n\n**Glamour et débat féministe :**\nL'esthétique glamour est parfois questionnée dans les cercles néo-burlesque — est-elle une reproduction de standards de beauté normés ? La réponse du mouvement : le glamour *choisi* et *maîtrisé* par l'artiste est une déclaration d'agentivité. La différence entre subir un standard et s'en emparer.",
    erreursCourantes: [],
    conseils: [
      "Si tu travailles dans l'esthétique glamour, investis dans un costume qui te ressemble vraiment. Un costume de qualité — même modeste — change la façon dont tu te portes et dont le public te reçoit. Le glamour burlesque commence dans le rapport à ton propre costume.",
    ],
    difficulteInterne: 2,
    termesLies: ['neo-burlesque', 'character-burlesque', 'effeuillage', 'pasties'],
  },
]
