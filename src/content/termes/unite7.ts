import type { Terme } from '../schema'

export const termesUnite7: Terme[] = [

  // ─── Tronc commun jazz ────────────────────────────────────────────────────

  {
    id: 'groove',
    nom: 'Groove',
    alias: ['feeling', 'swing', 'pocket', 'sens du rythme'],
    disciplines: ['jazz'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Qualité rythmique fondamentale du jazz — la capacité à s'installer dans le rythme plutôt que de simplement le suivre, créant une pulsation interne qui connecte le danseur à la musique et lui donne son caractère organique et 'humain'.",
    description: "Le groove est difficile à définir mais immédiatement reconnaissable. C'est ce qui fait qu'un danseur de jazz a l'air d'être *dans* la musique plutôt que de danser *sur* la musique.\n\n**La différence entre suivre le rythme et groover :**\n- Suivre le rythme : je pose un geste sur chaque temps\n- Groover : le rythme *vit* dans mon corps, il rebondit, il respire\n\n**Les éléments du groove :**\n\n**Le placement (le 'pocket') :**\nLe groove jazz se joue souvent légèrement en arrière du temps — pas en avance, pas en retard, mais dans le *creux* du temps. C'est ce que les musiciens appellent le 'pocket'.\n\n**La ponctuation :**\nLe corps ne bouge pas de façon uniforme — certains temps sont accentués, d'autres amortis. Cette inégalité crée le groove.\n\n**Le rebond :**\nLa légère flexion des genoux (souvent maintenue en permanence dans le jazz) crée un ressort naturel qui permet le groove.\n\n**Le chest pop :**\nPetite impulsion de la cage thoracique vers l'avant sur l'accent — caractéristique du groove afro-américain.\n\n**Origines culturelles :**\nLe groove vient directement des traditions musicales africaines transmises via le blues, le gospel et le jazz. Il est impossible de séparer le groove jazz de cet héritage culturel.",
    erreursCourantes: [
      "Danser *sur* les temps au lieu de *dans* les temps (trop mécanique).",
      "Corps rigide — le groove exige que tout le corps participe, pas seulement les pieds.",
      "Confondre groove et agitation — le groove peut être subtil, intérieur.",
    ],
    conseils: [
      "Ferme les yeux et écoute la musique. Laisse ta tête commencer à bouger naturellement. Puis tes épaules. Puis le bassin. Ne décide pas — laisse venir. Quand tu n'as plus besoin de décider, tu as trouvé le groove.",
    ],
    difficulteInterne: 3,
    etymologie: "De l'américain 'groove' (sillon d'un disque vinyle) — la musique *tourne* dans le sillon, et le danseur *tourne* dans le groove.",
    termesLies: ['accent-jazz', 'isolations-jazz', 'polycentrisme'],
  },

  {
    id: 'accent-jazz',
    nom: 'Accent rythmique',
    alias: ['accent', 'contretemps jazz', 'syncopation', 'off-beat'],
    disciplines: ['jazz'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Placement intentionnel d'une impulsion de mouvement sur des temps forts ou faibles de la mesure, notamment sur les contretemps (les 'et' entre les temps), créant le caractère syncopé caractéristique du jazz.",
    description: "Le jazz est une danse **syncopée** — son énergie vit souvent entre les temps, sur les contretemps, sur les 'et'. Comprendre les accents, c'est comprendre le jazz.\n\n**Le comptage jazz :**\nEn jazz, on compte en 8 temps (deux mesures de 4) :\n```\n1 et 2 et 3 et 4 et | 5 et 6 et 7 et 8 et\n```\nLes 'et' sont les contretemps — c'est là que vit une grande partie du jazz.\n\n**L'accent fort (downbeat) :**\nLes temps 1, 2, 3, 4 — le temps 'fort' de chaque battement.\n\n**L'accent faible (upbeat / contretemps) :**\nLes 'et' entre chaque temps — là où le jazz syncopé place souvent son énergie.\n\n**Le rebond comme générateur d'accents :**\nLa légère flexion des genoux avant l'accent prépare l'impulsion. C'est le secret de la percussion corporelle jazz.\n\n**Accent vs isolation :**\nL'accent peut toucher n'importe quelle partie du corps — une épaule, un genou, la poitrine. C'est la rencontre de l'isolation et de la rythmique.",
    erreursCourantes: [
      "Placer tous les mouvements sur les temps forts (1-2-3-4) sans jamais aller sur les 'et'.",
      "Accent sans relâchement — l'accent nécessite un rebond, une préparation et une suite.",
    ],
    conseils: [
      "Claque dans tes mains sur les temps (1-2-3-4). Maintenant, claque seulement sur les 'et' (les contretemps). Entends la différence ? Maintenant mets ça dans tes épaules.",
    ],
    difficulteInterne: 2,
    termesLies: ['groove', 'preparation-elan', 'eight-count'],
  },

  {
    id: 'eight-count',
    nom: 'Eight count (le 8 temps)',
    alias: ['8-count', 'huit temps', 'comptage en 8'],
    disciplines: ['jazz'],
    categories: ['concepts'],
    definition: "Unité de mesure chorégraphique fondamentale du jazz (et de nombreuses danses populaires) : deux mesures de 4 temps formant un bloc de 8 temps, dans lequel la plupart des pas et phrases jazz s'organisent.",
    description: "En danse jazz, on ne compte généralement pas 1-2-3-4 comme en classique. On compte en **8 temps** — une convention qui vient du jazz musical et qui organise toute la pédagogie.\n\n**Pourquoi 8 et pas 4 ?**\nUne phrase musicale jazz se déroule souvent sur 8 temps (deux mesures de 4/4). Regrouper en 8 permet de penser en termes de *phrases* plutôt que de *mesures*.\n\n**Le comptage avec 'et' :**\n```\n5, 6, 7, 8 — 1 et 2 et 3 et 4 et, 5 et 6 et 7 et 8 et\n```\nLa préparation est souvent donnée sur 5-6-7-8 avant le 1.\n\n**La convention 'professeur' :**\nEn cours, le professeur donne généralement :\n- '5, 6, 7, 8' : compte de préparation\n- '1, 2, 3, 4, 5, 6, 7, 8' : phrase complète\n- 'Et 1, et 2...' : pour indiquer les contretemps\n\n**Multiples de 8 :**\nLes chorégraphies jazz s'organisent souvent en blocs de 8, 16, 32 ou 64 temps — permettant une structure claire et mémorisable.",
    erreursCourantes: [
      "Confondre le 8-count jazz avec le comptage en 4 du classique — deux systèmes différents.",
      "Commencer sur le 1 sans préparation — en jazz, on anticipe sur le '8 et'.",
    ],
    conseils: [
      "Chaque fois que tu écoutes une chanson pop ou R&B, essaie de trouver les 8 temps. Claque à 1, claque à 5. Tu verras que presque tout est construit en phrases de 8.",
    ],
    etymologie: "De l'anglais 'eight count' (compte de huit). Spécificité du jazz et des danses commerciales : contrairement au ballet qui pense en mesures de 3 ou 4, le jazz structure ses phrases en blocs de 8 — l'unité naturelle du phrasé jazz-musical.",
    difficulteInterne: 1,
    termesLies: ['accent-jazz', 'preparation-elan'],
  },

  {
    id: 'preparation-elan',
    nom: 'Préparation / Élan',
    alias: ['prep', 'pick-up', 'anacrouse en jazz', 'swing'],
    disciplines: ['jazz'],
    categories: ['concepts'],
    definition: "Mouvement préparatoire qui précède et génère l'énergie d'un pas ou d'une phrase. En jazz, la préparation est souvent aussi importante que le mouvement qu'elle prépare — elle crée l'élan, la direction et la qualité du mouvement principal.",
    description: "En danse classique, la préparation est souvent discrète — une simple orientation du corps. En jazz, la préparation est un **mouvement à part entière** qui crée l'énergie du mouvement principal.\n\n**La préparation comme rebond :**\nAvant de sauter, le danseur plie. Avant d'isoler à droite, le corps fait un micro-mouvement à gauche. Ce contre-mouvement crée l'élan.\n\n**Qualités de préparation en jazz :**\n- **Préparation en flexion** : genoux qui plient avant l'impulsion\n- **Préparation en opposition** : le corps va dans la direction opposée\n- **Préparation rhythmée** : le pick-up se place sur le contretemps qui précède l'accent\n\n**Le 'et' comme préparation :**\nDans le comptage jazz, le 'et' avant le 1 est souvent le moment de préparation :\n- 'et 1' : préparer sur le 'et', frapper sur le 1\n- La préparation *fait partie* de la phrase\n\n**Pourquoi la préparation est enseignée en séquence :**\nUn élève débutant oublie la préparation → son mouvement manque de punch, d'énergie. Quand il apprend à *préparer*, son mouvement gagne immédiatement en qualité.",
    erreursCourantes: [
      "Sauter directement à l'accent sans préparer — le mouvement perd son énergie.",
      "Préparation trop visible (qui vole le regard sur le mouvement principal) — elle doit être efficace, pas décorative.",
    ],
    conseils: [
      "Applaudis fort. Observe ton bras qui se lève *avant* de frapper — c'est la préparation. Maintenant, mets cette logique dans tes accents de jazz : monte avant de frapper.",
    ],
    difficulteInterne: 2,
    termesLies: ['accent-jazz', 'groove', 'ball-change'],
  },

  {
    id: 'ball-change',
    nom: 'Ball change',
    alias: ['ball-change', 'changement de poids', 'transfer de poids'],
    disciplines: ['jazz'],
    categories: ['pas', 'deplacements'],
    definition: "Transfert de poids rapide sur deux temps consécutifs — généralement une demi-pointe et un retour au pied plat — servant de lien rythmique entre deux phrases, de rebond ou de préparation à un saut ou un tour.",
    description: "Le ball change est **le** pas de liaison du jazz. Presque toutes les phrases jazz contiennent un ou plusieurs ball changes.\n\n**Exécution :**\n1. Pied droit en demi-pointe vers l'arrière ou sur le côté ('ball' = avant du pied)\n2. Retour du poids sur le pied gauche plat\n3. Sur deux temps : 'et 1', 'et 2', ou tout autre doublet rythmique\n\n**Variantes :**\n- **Ball change avant** : le pied part vers l'avant\n- **Ball change latéral** : le pied part sur le côté\n- **Ball change tournant** : le corps effectue une demi-rotation pendant le changement\n\n**Le ball change dans les phrases :**\nIl sert souvent de 'reset' — repositionner le poids pour permettre la suite. Après un pas droit, le ball change permet de repartir sur la gauche.\n\n**Notation courant :**\n'step-ball-change' = un pas suivi d'un ball-change (3 temps : 1 et 2)\n\n**Dans Broadway jazz :**\nBob Fosse utilise le ball change avec une qualité particulière — retenu, précis, souvent avec une rotation légère du buste.",
    erreursCourantes: [
      "Faire deux pas complets au lieu du 'ball' (demi-pointe) — le ball change est léger et rapide.",
      "Perdre le rythme — le ball change est un pas de 2 temps ('et' + temps), pas de 4.",
      "Ne pas transférer réellement le poids — s'assurer que le changement est complet.",
    ],
    conseils: [
      "Marche normalement. Maintenant, lors de chaque pas, pose la *moitié avant* du pied en premier (demi-pointe), puis complète le pied. Tu as ralenti le transfert de poids. C'est la sensation du ball change.",
    ],
    etymologie: "De l'anglais 'ball' (la boule — avant du pied, la demi-pointe) et 'change' (changement de poids). Le pied se pose sur sa partie avant (*ball*), puis le poids change (*change*) — deux mots, deux temps.",
    difficulteInterne: 1,
    termesLies: ['jazz-square', 'preparation-elan', 'chasse-jazz'],
  },

  {
    id: 'jazz-square',
    nom: 'Jazz square',
    alias: ['carré jazz', 'box step', 'jazz box', 'carré en croix'],
    disciplines: ['jazz'],
    categories: ['pas', 'deplacements'],
    definition: "Pas de base en 4 temps décrivant un carré dans l'espace : croisé, arrière, côté, avant (ou dans différentes directions selon la variante). L'un des pas les plus caractéristiques et universels de la danse jazz.",
    description: "Le jazz square (ou 'carré jazz') est enseigné dans tous les cours de jazz — et utilisé dans presque tous les styles.\n\n**Exécution standard :**\n1. Temps 1 : pied droit croise devant le gauche\n2. Temps 2 : pied gauche recule\n3. Temps 3 : pied droit s'ouvre sur le côté\n4. Temps 4 : pied gauche rejoint (ou avance)\n\n**Les 4 pas tracent un carré dans l'espace** — d'où le nom.\n\n**Variantes :**\n- Jazz square avec pivot (buste tourne au temps 2 ou 3)\n- Jazz square avec clap (frappe sur les temps forts)\n- Jazz square avec style bras (arm styling au-dessus ou sur le côté)\n- Jazz square tournant (se déplace tout en dessinant le carré)\n\n**Dans les sous-styles :**\n- **Broadway** : jazz square net et élégant\n- **Fosse** : jazz square avec intériorité, légère flexion\n- **Street jazz** : jazz square groove, bas dans les genoux, qualité hip-hop\n\n**Musicalement :**\nSe place naturellement sur 4 temps — le pas épouse la structure musicale.",
    erreursCourantes: [
      "Carré trop petit (manque d'espace) — les 4 pas doivent vraiment dessiner un carré visible.",
      "Pas de connexion avec la musique — le jazz square est un pas *musical*, chaque temps doit sonner.",
    ],
    conseils: [
      "Dessine un carré sur le sol avec de la craie. Poses tes 4 pas sur les coins du carré. Répète jusqu'à ce que tu 'voies' le carré sans la craie.",
    ],
    etymologie: "De l'anglais 'jazz square' (carré de jazz). Les quatre pas décrivent un carré (ou un losange) sur le sol — une image géométrique simple qui nomme parfaitement le pattern. Aussi appelé 'jazz box' aux États-Unis.",
    difficulteInterne: 1,
    termesLies: ['ball-change', 'jazz-walk', 'chasse-jazz'],
  },

  {
    id: 'chasse-jazz',
    nom: 'Chassé jazz',
    alias: ['chassé', 'chase step', 'glissé lateral', 'slide jazz'],
    disciplines: ['jazz'],
    categories: ['pas', 'deplacements'],
    definition: "Pas de déplacement latéral ou diagonal en 3 temps (pas-joint-pas) où un pied 'chasse' l'autre pour prendre sa place. Pas fondamental de déplacement en jazz, utilisé pour couvrir de l'espace rapidement et fluidement.",
    description: "Le chassé est partagé avec le ballet (où il vient du français 'chasser') mais son exécution en jazz est différente.\n\n**Exécution du chassé latéral :**\n1. Pas vers la droite (pied droit)\n2. Pied gauche joint au pied droit (ou presque)\n3. Pas vers la droite (pied droit) — le gauche a 'chassé' la place du droit\n\n**Se compte sur 3 temps : 1 - et - 2** (ou 'step-together-step')\n\n**Chassé vs glissade (classique) :**\n- La glissade classique : pieds en dehors, dans les deux directions\n- Le chassé jazz : parallèle ou en dehors selon le contexte, qualité 'groovée'\n\n**Variantes en jazz :**\n- **Chassé avant** : vers l'avant\n- **Chassé diagonal** : en diagonale\n- **Triple step** : variante avec accent sur chaque pas\n\n**Dans le contexte chorégraphique :**\nLe chassé est souvent utilisé pour déplacer le groupe dans l'espace, changer de formation ou comme transition entre deux phrases.",
    erreursCourantes: [
      "Atterrissage trop lourd — le chassé jazz doit rester léger et rapide.",
      "Ne pas vraiment 'chasser' l'autre pied — il faut un vrai transfert de poids à chaque étape.",
    ],
    conseils: [
      "Pense à une partie de football : quand tu glisses latéralement pour couvrir ton adversaire, tu fais presque un chassé. C'est rapide, dynamique, ancré. C'est le chassé jazz.",
    ],
    difficulteInterne: 1,
    termesLies: ['jazz-square', 'ball-change', 'jazz-walk'],
  },

  {
    id: 'jazz-walk',
    nom: 'Jazz walk',
    alias: ['marche jazz', 'walk jazz', 'cat walk jazz', 'strut'],
    disciplines: ['jazz'],
    categories: ['pas', 'deplacements'],
    definition: "Déplacement caractéristique du jazz — marche avec intention, qualité et style propres au jazz. Peut être neutre et rythmé ou très marqué et expressif selon le sous-style et le contexte chorégraphique.",
    description: "La marche est aussi du jazz, si elle a la bonne intention. Le jazz walk transforme un acte ordinaire en expression artistique.\n\n**Le jazz walk de base :**\n- Posture légèrement vers l'avant (ou tenue selon le style)\n- Genoux légèrement fléchis (souplesse permanente)\n- Chaque pas a un accent rythmique\n- Les bras ont un styling qui accompagne\n- Regard vers l'avant, projeté\n\n**Variantes stylistiques :**\n\n**Broadway jazz walk :**\nDroit, élégant, projection forte, bras nets, regard public.\n\n**Fosse jazz walk :**\nPenché légèrement vers l'avant, intérieur, mystérieux, pas de strut. Regard souvent oblique.\n\n**Street jazz walk :**\nBas dans les genoux, grounded, attitude, bras avec style urbain.\n\n**Strut :**\nJazz walk avec attitude exacerbée — chest out, chin up, owning the space. Typique du Broadway et de la revue.\n\n**Le walk dans le contexte :**\nUn jazz walk peut communiquer : confiance, séduction, menace, légèreté, tristesse — selon l'intention du danseur. La marche est un outil expressif.",
    erreursCourantes: [
      "Marcher sans intention — le jazz walk est toujours chargé d'une qualité ou d'une attitude.",
      "Corps rigide — le jazz walk doit avoir de la souplesse dans les genoux et dans le buste.",
    ],
    conseils: [
      "Choisit une émotion : confiance absolue. Maintenant marche en tenant cette émotion dans tout ton corps — pas juste dans ton visage, mais dans tes épaules, ta poitrine, tes pas. C'est un jazz walk.",
    ],
    difficulteInterne: 1,
    termesLies: ['groove', 'arm-styling', 'jazz-square'],
  },

  {
    id: 'arm-styling',
    nom: 'Arm styling',
    alias: ['bras en jazz', 'style des bras', 'port de bras jazz', 'styling'],
    disciplines: ['jazz'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Langage des bras en danse jazz — leur placement, leur qualité, leur énergie et leur style selon la discipline et le contexte chorégraphique. L'arm styling individualise le danseur et exprime son registre esthétique.",
    description: "Si les pieds font le rythme, les bras font le style. L'arm styling est ce qui différencie un danseur 'qui exécute' d'un danseur 'qui exprime'.\n\n**Principes généraux des bras en jazz :**\n- Les bras ne sont jamais 'en déco' — ils sont toujours motivés\n- Chaque position de bras a une énergie (not just a shape)\n- Les doigts terminent et prolongent l'énergie\n- La qualité change selon le sous-style\n\n**Arm styling par sous-style :**\n\n**Jazz classique :** Bras allongés, élégants, courbe naturelle, proche du classique\n\n**Broadway :** Bras nets, fortes lignes, expressifs et lisibles du fond de la salle\n\n**Fosse :** Coudes relevés, poignets cassés, énergie vers l'intérieur, sophistiqué\n\n**Street jazz :** Bras avec 'texture' urbaine — pop, lock, gesture (gestes de la rue)\n\n**Afro-jazz :** Bras avec poids et ancrage, connexion au sol même via les bras\n\n**Le rôle des mains :**\nEn jazz, les mains ne sont pas neutres. Elles peuvent être :\n- Main ouverte (style classique, Broadway)\n- Main poing (street jazz, hip-hop)\n- Doigts étalés (expressif, dramatique)\n- Poignet cassé (Fosse)",
    erreursCourantes: [
      "Bras qui 'suivent' le corps sans intention propre — les bras doivent être actifs.",
      "Même arm styling pour tous les styles — chaque sous-style a son propre langage des bras.",
    ],
    conseils: [
      "Fais la même phrase sans bras, puis avec bras. La différence devrait te faire comprendre ce que le styling ajoute — c'est l'âme du mouvement.",
    ],
    difficulteInterne: 2,
    termesLies: ['jazz-walk', 'groove', 'niveau-bas'],
  },

  {
    id: 'niveau-bas',
    nom: 'Travail en niveaux bas',
    alias: ['working low', 'niveau bas', 'staying low', 'genoux fléchis'],
    disciplines: ['jazz'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Maintien d'une flexion permanente des genoux et d'un centre de gravité abaissé, caractéristique de nombreux styles de jazz — donnant ancrage, dynamisme et une qualité d'énergie vers le sol.",
    description: "En ballet classique, on cherche l'élévation — le centre de gravité haut, les jambes tendues. En jazz (et plus encore en street jazz et afro-jazz), le niveau bas est une **qualité esthétique fondamentale**.\n\n**Ce que le niveau bas apporte :**\n- Ancrage dans le sol (grounded feeling)\n- Dynamisme — les genoux fléchis sont un ressort permanent\n- Possibilité de changements de direction rapides\n- Connexion à l'héritage afro-américain des danses\n\n**Le demi-plié permanent :**\nDans de nombreux cours de jazz, les exercices de base se font avec les genoux légèrement fléchis en permanence — pas de jambes tendues rigides.\n\n**Niveaux en danse jazz :**\n- **Niveau haut** : relevé, debout, positions de grandeur\n- **Niveau moyen** : station debout normale\n- **Niveau bas** : demi-plié, lunge, positions accroupies\n- **Niveau au sol** : floorwork jazz (slides, splits, travail de sol)\n\n**Dans le street jazz :**\nLe niveau bas est encore plus marqué — les pas s'effectuent souvent en demi-plié profond, proches de la position de la culture hip-hop.\n\n**Santé :**\nTravailler longtemps en niveau bas exige des quadriceps et des genoux solides. Échauffement et renforcement spécifiques recommandés.",
    erreursCourantes: [
      "Alterner aléatoirement entre jambes fléchies et jambes tendues — le niveau doit être cohérent dans une phrase.",
      "Valgus des genoux (genoux qui rentrent) lors du niveau bas — aligner genou-2e orteil.",
    ],
    conseils: [
      "Tiens-toi en légère flexion de genoux pendant 30 secondes, immobile. Si tu commences à trembler, c'est que ta force de quadriceps est à développer. Le travail en niveau bas s'entraîne.",
    ],
    difficulteInterne: 2,
    termesLies: ['groove', 'chasse-jazz', 'pirouette-jazz'],
  },

  {
    id: 'pirouette-jazz',
    nom: 'Pirouette jazz',
    alias: ['tour en jazz', 'turn jazz', 'pirouette parallèle', 'fouetté jazz'],
    disciplines: ['jazz'],
    categories: ['tours'],
    definition: "Tours effectués en danse jazz, souvent en position parallèle (pieds parallèles, en opposition avec le turn-out classique) ou en dedans, avec une qualité d'énergie et un bras de support différents du tour classique.",
    description: "Les tours en jazz ont leur propre logique — pas identiques aux pirouettes classiques, même si les principes de base se partagent.\n\n**Principes communs avec le classique :**\n- Spot (regard fixe qui whip)\n- Pied d'appui en relevé\n- Bras en guirlande (position de départ)\n- Préparation claire avant le tour\n\n**Ce qui est différent en jazz :**\n- **Position parallèle** : les pieds ne sont pas en turn-out (en dehors) mais parallèles\n- **Qualité d'énergie** : plus dynamique, moins précis, plus 'habité'\n- **Bras** : souvent un seul bras tendu (style Broadway) ou dans des positions spécifiques au sous-style\n- **Fin du tour** : peut se terminer sur un accent fort (pop, frappe) plutôt qu'une position propre\n\n**Le tour en dedans jazz :**\nLe tour s'effectue vers le pied de support — souvent avec le genou de la jambe libre relevé devant.\n\n**Le tour en dehors jazz :**\nMoins courant, souvent emprunté au classique et adapté dans le style jazz.\n\n**Tours multiples en jazz :**\nLe jazz valorise la vitesse et le punch plutôt que le nombre de tours — mieux vaut 2 tours parfaits et expressifs que 4 tours approximatifs.",
    erreursCourantes: [
      "Oublier le spot — les tours sans spot manquent de contrôle et font perdre l'orientation.",
      "Bras qui s'ouvrent pendant le tour (perte de l'axe).",
    ],
    conseils: [
      "Avant de travailler le tour complet, travaille le spot seul : debout, tourne la tête rapidement d'un côté, reviens. La tête reste fixe le plus longtemps possible, puis whip rapidement. Ce point focal tenu = spot.",
    ],
    difficulteInterne: 3,
    termesLies: ['pirouette', 'niveau-bas', 'preparation-elan'],
  },

  {
    id: 'leaps-jazz',
    nom: 'Sauts en jazz',
    alias: ['leap', 'split leap', 'stag leap', 'grand jeté jazz', 'sauts jazz'],
    disciplines: ['jazz'],
    categories: ['sauts'],
    definition: "Famille de sauts en danse jazz incluant le grand jeté jazz (split leap), le stag leap (jambe pliée), le tour jeté et autres sauts caractéristiques — avec une qualité d'énergie, un timing et un arm styling propres au jazz.",
    description: "Les sauts en jazz sont spectaculaires et expressifs — mais ils s'exécutent différemment des sauts classiques.\n\n**Les grands sauts jazz :**\n\n**Split leap (grand jeté jazz) :**\n- Saut d'une jambe sur l'autre avec ouverture maximale des jambes en l'air\n- En jazz : souvent en position parallèle ou légèrement en dehors\n- Plus dramatique et expressif que le grand jeté classique\n\n**Stag leap :**\n- Saut avec une jambe tendue devant et l'autre pliée derrière (stag = cerf)\n- Donne un look asymétrique et dynamique\n\n**Tour jeté jazz :**\n- Saut avec demi-tour dans les airs\n- Bras expressifs pendant la rotation\n\n**Ce qui fait le caractère jazz :**\n- Le timing : souvent sur l'accent (frappe du temps)\n- La préparation : visible, dynamisée\n- L'arm styling : bras expressifs, pas juste en équilibre\n- La qualité en l'air : le corps est 'habité' même pendant le saut\n\n**Progression d'apprentissage :**\n1. Renforcement des jambes et du tronc\n2. Battement simple (la jambe avant)\n3. Saut bas, ouverture progressive\n4. Saut complet avec arm styling\n5. Saut en séquence (enchaîné avec d'autres pas)",
    erreursCourantes: [
      "Sauter avant d'avoir l'ouverture nécessaire — le split leap demande beaucoup de souplesse des hanches.",
      "Atterrir sur les talons (risque de blessure) — toujours : pointe → mi-pied → talon en amortissement.",
    ],
    conseils: [
      "Commence par un saut bas — juste pour sentir l'ouverture en l'air. L'important n'est pas la hauteur mais la sensation de 'split' en l'air. La hauteur vient avec la force.",
    ],
    difficulteInterne: 3,
    termesLies: ['elevation-moderne', 'preparation-elan', 'niveau-bas'],
  },

  {
    id: 'isolations-jazz',
    nom: 'Isolations jazz',
    alias: ['isolations en jazz', 'chest pop', 'hip pop', 'shoulder pop'],
    disciplines: ['jazz'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Application des isolations corporelles dans le contexte et la rythmique du jazz — avec des accents sharps (secs et précis), des pops (impulsions rapides) et des qualités d'énergie propres à la tradition jazz et funk.",
    description: "Les isolations en jazz sont plus percussives, plus rythmées, plus sharps que dans d'autres disciplines.\n\n**Les isolations jazz signature :**\n\n**Chest pop (pop de poitrine) :**\nImpulsion rapide de la cage thoracique vers l'avant sur un temps fort. Très utilisé en funk, street jazz, commercial jazz.\n\n**Hip pop (pop de hanches) :**\nImpulsion rapide du bassin sur un côté — souvent sur les contretemps. Central au funk et au commercial jazz.\n\n**Shoulder pop (pop d'épaule) :**\nL'épaule fait une petite impulsion vers l'avant ou vers le haut. Caractéristique du jazz classique et du Broadway.\n\n**Head pop :**\nTête qui fait une impulsion rapide — avant, arrière, ou côté.\n\n**Sharp vs. smooth :**\n- **Sharp** : l'isolation est percutante, franche, avec un début et une fin nets\n- **Smooth** : l'isolation est plus fluide, plus liée — character jazz, lyrical jazz\n\n**Les isolations en rythme :**\nL'originalité du jazz est de placer ces isolations sur des temps spécifiques — le chest pop sur le 'et 1', le hip pop sur le '2', la tête sur le '4 et'. C'est la polyrythmie du corps jazz.",
    erreursCourantes: [
      "Isolations floues (manque de précision) — en jazz, les isolations doivent être nettes et lisibles.",
      "Même qualité pour toutes les isolations — varier entre sharp, smooth, pop selon le contexte.",
    ],
    conseils: [
      "Fais une isolation d'épaule droite. Maintenant fais-la deux fois plus vite et deux fois plus loin. Observe comment ça change de qualité — cette frappe est le 'pop'. C'est ça, les isolations jazz.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolation', 'groove', 'accent-jazz'],
  },

  // ─── Sous-styles jazz ─────────────────────────────────────────────────────

  {
    id: 'sous-style-jazz-classique',
    nom: 'Jazz classique',
    alias: ['jazz traditionnel', 'jazz show', 'classic jazz', 'jazz des origines'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['jazz-classique'],
    definition: "Style de jazz des années 1930–1960 issu directement des Lindy Hoppers, du vaudeville et des premières revues américaines — caractérisé par une musicalité forte, des lignes élégantes et un plaisir du spectacle assumé.",
    description: "Le jazz classique est le jazz à son état le plus pur — proche de la musique qui l'a fait naître, avant les influences des années 1980 et du hip-hop.\n\n**Caractéristiques :**\n- Musicalité au centre : les pas épousent la musique jazz live\n- Lignes longues et élégantes, souplesse du bassin\n- Syncopation claire et visible\n- Technique solide : turns, leaps, footwork précis\n- Moins de floorwork, plus de déplacements dans l'espace\n\n**Figures clés :**\n- **Jack Cole** (1911–1974) : systématise les isolations et crée le 'theatrical jazz'\n- **Katharine Dunham** (1909–2006) : anthropologue et chorégraphe, integre les danses caribéennes\n- **Matt Mattox** (1921–2013) : prolonge l'héritage de Jack Cole en Europe\n\n**Dans quels contextes :**\nCompétitions de jazz classique, revues, spectacles vintage, cours de technique fondamentale.",
    erreursCourantes: [
      "Confondre jazz classique et Broadway (qui a ses propres codes scéniques différents).",
    ],
    conseils: [
      "Écoute du jazz des années 1940–1950 (Count Basie, Duke Ellington) et laisse la musique guider ton corps. Le jazz classique vient de l'écoute.",
    ],
    difficulteInterne: 3,
    termesLies: ['jazz-walk', 'isolations-jazz', 'groove'],
  },

  {
    id: 'sous-style-broadway',
    nom: 'Broadway jazz',
    alias: ['musical theatre jazz', 'theatre jazz', 'Broadway dance'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['broadway-jazz'],
    definition: "Jazz codifié pour les productions de Broadway — caractérisé par une projection forte, des lignes nettes et expressives, une lisibilité depuis le fond de salle, un sens du spectacle et de la narration par le mouvement.",
    description: "Le Broadway jazz ne se danse pas pour la caméra — il se danse pour la rangée Z du théâtre. Chaque mouvement doit être vu.\n\n**Caractéristiques :**\n- Projection extrême : chaque geste est amplifié pour être vu de loin\n- Bras en lignes nettes et fortes\n- Expressions du visage assumées (sourire, jeu de scène)\n- Technique solide doublée d'un sens du jeu théâtral\n- Style souvent influencé par l'ère des comédies musicales classiques\n\n**Chorégraphes emblématiques :**\n- **Jerome Robbins** (1918–1998) : West Side Story, Gypsy — jazz theatral, précis, narratif\n- **Michael Bennett** (1943–1987) : A Chorus Line — humanité et précision\n- **Twyla Tharp** (b. 1941) : Singin' in the Rain — jazz-ballet hybride\n\n**Dans les concours :**\nLe Broadway jazz est une catégorie à part entière dans les concours de danse — des critères précis : projection, arm styling net, sens du spectacle.",
    erreursCourantes: [
      "Sous-jouer — en Broadway, tout doit être visible depuis le fond de salle.",
      "Bras mous — les bras en Broadway ont une énergie jusqu'au bout des doigts.",
    ],
    conseils: [
      "Danse devant un miroir, puis éloigne-toi de 5 mètres. Voir si ton mouvement est encore lisible. Si non, amplifie. C'est le principe Broadway.",
    ],
    difficulteInterne: 2,
    termesLies: ['arm-styling', 'jazz-walk', 'sous-style-fosse'],
  },

  {
    id: 'sous-style-fosse',
    nom: 'Style Fosse',
    alias: ['Bob Fosse style', 'Fosse', 'Chicago style', 'Cabaret style'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['fosse'],
    definition: "Style chorégraphique développé par Bob Fosse (1927–1987) — caractérisé par l'intériorité, les chapeaux et cannes comme extensions du corps, les coudes relevés, les poignets cassés, la séduction sophistiquée et l'ironie.",
    description: "Bob Fosse est l'un des rares chorégraphes dont le style est immédiatement reconnaissable au premier coup d'œil — et l'un des plus étudiés dans les cours de danse.\n\n**Les signatures du style Fosse :**\n- **Intériorité** : au lieu de projeter vers le public, le danseur semble se replier, mystérieux\n- **Coudes relevés** et poignets cassés (position de main particulière)\n- **Talons en avant** dans certaines positions\n- **Dos légèrement voûté** (pas droit mais voûté avec intention)\n- **Chapeau et canne** : extensions du corps, utilisés avec précision\n- **Isolation de hanches** : très sexy, mais retenu — jamais vulgaire\n- **Regard en biais** : l'œil qui regarde de côté, jamais tout à fait en face\n\n**Œuvres incontournables :**\n- *Cabaret* (1972) — film de Bob Fosse\n- *Chicago* (1975/2002) — 'All That Jazz', 'Cell Block Tango'\n- *All That Jazz* (1979) — film autobiographique\n\n**Fosse et les femmes :**\nSes chorégraphies pour femmes subliment la sensualité tout en y injectant une dose d'ironie et de pouvoir — ses danseuses ne sont pas objectifiées, elles jouent avec l'objectification.",
    erreursCourantes: [
      "Confondre style Fosse et burlesque — le style Fosse est sophistiqué, jamais vulgaire.",
      "Voûter le dos sans intention — la voûte Fosse est un choix expressif, pas une mauvaise posture.",
    ],
    conseils: [
      "Regarde 'All That Jazz' (le film) — tu comprendras Fosse en 10 minutes. Sa façon de marcher dans le couloir, d'allumer une cigarette, de regarder — c'est déjà du Fosse.",
    ],
    difficulteInterne: 3,
    etymologie: "Style nommé directement d'après son créateur, Robert Louis Fosse dit 'Bob Fosse' (1927–1987).",
    termesLies: ['arm-styling', 'isolations-jazz', 'sous-style-broadway'],
  },

  {
    id: 'sous-style-modern-jazz',
    nom: 'Modern jazz',
    alias: ['jazz contemporain', 'jazz lyrique', 'concert jazz', 'jazz d\'art'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['modern-jazz'],
    definition: "Style de jazz influencé par la technique de danse moderne (Graham, Cunningham, Limón) — plus abstrait et moins narratif que le Broadway, centré sur la qualité du mouvement, la musicalité et le corps comme instrument expressif.",
    description: "Le modern jazz est à mi-chemin entre la danse jazz et la danse moderne — il emprunte à l'une et l'autre.\n\n**Caractéristiques :**\n- Technique moderne intégrée : travail au sol, succession, contraction-release\n- Musicalité sophistiquée : souvent sur des compositions musicales modernes ou des arrangements\n- Moins de showmanship, plus d'exploration du mouvement\n- Lignes poétiques et qualité du corps au premier plan\n\n**Pédagogues fondateurs :**\n- **Luigi** (Eugene Louis Faccuito, 1925–2015) : crée une technique jazz fondée sur la souplesse et la continuité du mouvement (*Never Stop Moving*)\n- **Gus Giordano** (1923–2008) : Chicago, fonde la Giordano Dance Company, intègre le jazz et la technique moderne\n- **Frank Wagner** : influence européenne du modern jazz\n\n**Le modern jazz en Europe :**\nEn France et en Europe, le 'jazz moderne' s'est développé dans une direction plus technique et plus proche de la contemporain — ce qui explique que le terme 'jazz' en France recouvre souvent plusieurs réalités.",
    erreursCourantes: [
      "Confondre modern jazz et jazz classique — deux esthétiques très différentes malgré le nom commun.",
    ],
    conseils: [
      "Cherche des vidéos de la technique Luigi — son principe *Never Stop Moving* te donnera la continuité caractéristique du modern jazz.",
    ],
    difficulteInterne: 3,
    termesLies: ['contraction-release', 'fall-recovery', 'sous-style-broadway'],
  },

  {
    id: 'sous-style-lyrical',
    nom: 'Lyrical jazz',
    alias: ['lyrical', 'lyrico-jazz', 'contemporary jazz', 'jazz lyrique'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['lyrical-jazz'],
    definition: "Style de jazz expressif et fluide qui met la connexion émotionnelle avec la musique au premier plan — caractérisé par des mouvements fluides, des transitions gracieuses, une narration personnelle et l'utilisation de la musicalité pour communiquer des émotions.",
    description: "Le lyrical jazz est le style le plus expressif du jazz — il danse les *paroles* autant que le rythme.\n\n**Caractéristiques :**\n- Connexion directe avec les paroles ou la mélodie (pas seulement le rythme)\n- Fluidité et transitions douces (peu de sharp isolations)\n- Expression émotionnelle : le danseur 'vit' la musique\n- Corps fluide, lignes longues et gracieuses\n- Peut incorporer des éléments de ballet et de contemporain\n\n**Ce qui le distingue du jazz classique :**\n- Moins de percussion, plus de fluidité\n- L'expression prime sur la technique pure\n- Les mouvements racontent une histoire personnelle\n\n**Ce qui le distingue du lyrical contemporain :**\n- Le lyrical jazz garde une base technique jazz (grooves, jazz square, ball changes)\n- Le lyrical contemporain est plus proche de la release technique\n\n**Choix musicaux :**\nSouvent sur des ballades pop, des chansons R&B ou soul, des compositions instrumentales émouvantes.",
    erreursCourantes: [
      "Danser 'triste' sans technique (le lyrical jazz n'est pas une permission de tout oublier).",
      "Sur-expressivité : le visage qui joue sans que le corps suive.",
    ],
    conseils: [
      "Écoute la chanson trois fois avant de bouger. Laisse-toi toucher par elle. Puis laisse ta réaction physique devenir le mouvement. C'est le lyrical.",
    ],
    difficulteInterne: 2,
    termesLies: ['groove', 'fluidite-mouvement', 'sous-style-modern-jazz'],
  },

  {
    id: 'sous-style-street-jazz',
    nom: 'Street jazz',
    alias: ['urban jazz', 'commercial jazz', 'street', 'jazz urbain'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['street-jazz'],
    definition: "Style de jazz hybride qui fusionne la technique jazz avec les esthétiques des danses urbaines (hip-hop, dancehall, waacking, krump) — caractérisé par une attitude forte, un niveau bas marqué, une musique contemporaine et une énergie brute.",
    description: "Le street jazz est le jazz le plus vivant du moment — celui qui évolue en temps réel avec la culture populaire.\n\n**Origines :**\nNé dans les clips vidéo des années 1980–1990 et les émissions de TV comme 'So You Think You Can Dance', le street jazz fusionne la technique jazz et les danses de rue.\n\n**Caractéristiques :**\n- Musique : hip-hop, R&B, trap, afropop, dancehall, pop contemporaine\n- Niveau bas : genoux fléchis, grounded, ancré dans le sol\n- Attitude forte : confidence, swagger\n- Isolations sharps et pops\n- Arm styling urbain (gestes, poses)\n- Peut intégrer : bboy/bgirl moves, waacking, voguing, dancehall\n\n**Chorégraphes influents :**\n- **Brian Friedman** : clips Britney Spears, X Factor choreography\n- **Parris Goebel** : Justin Bieber, Janet Jackson — Auckland → monde\n- **Willdabeast Adams** : cours YouTube, esthétique raw et musicale\n\n**Ce qui le distingue du hip-hop pur :**\nLe street jazz garde une structure de formation, une technique jazz de base et une chorégraphie apprise — là où le hip-hop peut être plus cypher et improvisation.",
    erreursCourantes: [
      "Street jazz sans technique jazz en dessous — l'urban attitude ne suffit pas, il faut la base technique.",
    ],
    conseils: [
      "Regarde des chorégraphies de Parris Goebel ou Willdabeast sur YouTube. Observe comme ils marient technique et attitude. C'est ça, le street jazz.",
    ],
    difficulteInterne: 2,
    termesLies: ['niveau-bas', 'isolations-jazz', 'groove'],
  },

  {
    id: 'sous-style-afro-jazz',
    nom: 'Afro-jazz',
    alias: ['afrojazz', 'danse afro-jazz', 'jazz africain', 'afro-jazz contemporain'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    sousStyles: ['afro-jazz'],
    definition: "Style de jazz qui renoue explicitement avec les origines africaines du jazz en intégrant des mouvements, rythmes et esthétiques des danses d'Afrique de l'Ouest — caractérisé par le polycentrisme, les pieds en contact avec le sol, les bras expressifs et une relation intime à la percussion.",
    description: "L'afro-jazz est à la fois le style le plus 'ancien' (il revient aux sources) et le plus actuel (il opère une réconciliation culturelle consciente).\n\n**Ce que l'afro-jazz réintègre :**\n- Le **polycentrisme** africain : plusieurs centres du corps actifs simultanément\n- Les **pieds ancrés** dans le sol (vs élévation du classique)\n- Les **percussions** comme base primaire (le corps répond aux tambours)\n- La **communauté** : souvent dansé en groupe, avec interaction\n- Les **danses cérémonielles** de différentes ethnies (yoruba, ewe, mandingue...)\n\n**Caractéristiques :**\n- Mouvements amples de bras et de bassin\n- Connexion forte au sol (pieds qui frappent, stamping)\n- Polyrythmie corporelle\n- Expressions du visage ouvertes et sincères\n- Spirales, ondulations, contractions profondes\n\n**Figures importantes :**\n- **Kariamu Welsh Asante** : codification de l'Umfundalai (technique africaine)\n- **Germaine Acogny** (b. 1944) : 'mère de la danse africaine contemporaine', École des Sables (Sénégal)\n- **Jawole Willa Jo Zollar** : Urban Bush Women, danse afro-américaine contemporaine\n\n**L'afro-jazz comme décolonisation :**\nNommer et célébrer les origines africaines du jazz, c'est reconnaître ce qui a longtemps été effacé ou approprié.",
    erreursCourantes: [
      "Réduire l'afro-jazz à un style esthétique sans comprendre son héritage culturel.",
      "Faire de l'afro-jazz sans s'être documenté sur les cultures qu'il honore.",
    ],
    conseils: [
      "Cherche des vidéos de Germaine Acogny et de l'École des Sables. Regarde aussi des danses yoruba ou mandingue traditionnelles. Comprendre d'où vient l'afro-jazz, c'est le danser avec plus de vérité.",
    ],
    difficulteInterne: 3,
    termesLies: ['polycentrisme', 'travail-bassin', 'groove'],
  },

  {
    id: 'jazz-run',
    nom: 'Jazz Run',
    alias: ['course jazz', 'run jazz'],
    disciplines: ['jazz'],
    categories: ['deplacements', 'fondamentaux'],
    definition: "Déplacement en course stylisé propre au jazz dance, caractérisé par un posé ball-heel (avant du pied d'abord), une légère inclinaison du buste en avant et une énergie projetée vers l'avant.",
    description: "Le jazz run, c'est la façon dont un danseur de jazz traverse la scène — ça n'a rien à voir avec courir pour attraper un bus. C'est une course qui a du style, de l'intention, de l'élan.\n\n**Caractéristiques :**\n- **Pose du pied** : ball-heel (avant du pied d'abord, puis talon)\n- **Genou plié** à chaque appui (jamais raides)\n- **Buste** légèrement incliné en avant\n- **Bras** libres, naturels ou stylisés selon la chorégraphie\n- **Regard** vers l'avant ou vers la destination\n\n**Différence avec la course ordinaire :**\nDans la vie quotidienne, on court talon-avant. En jazz, c'est ball-heel. Ce changement crée une qualité plus fluide, plus 'glissante', plus stylisée.\n\n**Usages :**\n- Traversée de scène\n- Préparation avant un grand saut (stag leap, grand saut)\n- Entrée ou sortie de plateau\n- Transition dans un enchaînement\n\n**Variations :**\n- Jazz run avec bras expressifs\n- Jazz run en flexion (niveau bas)\n- Jazz run avec pivot final",
    erreursCourantes: [
      "Courir talon-avant au lieu de ball-heel — ça casse toute la qualité jazz.",
      "Jambes raides — les genoux doivent absorber chaque appui.",
      "Buste trop droit : perds l'inclinaison et tu perds l'élan caractéristique.",
    ],
    conseils: [
      "Commence par marcher en jazz walk stylisé, puis accélère progressivement. La qualité du pied doit rester la même, quelle que soit la vitesse.",
    ],
    difficulteInterne: 1,
    termesLies: ['jazz-walk', 'ball-change', 'chasse-jazz', 'sauts-jazz'],
  },

  {
    id: 'kick-jazz',
    nom: 'Kick',
    alias: ['kick ball change', 'front kick', 'side kick', 'fan kick jazz'],
    disciplines: ['jazz', 'heels', 'cabaret'],
    categories: ['techniques-jambes', 'fondamentaux'],
    definition: "Lancer de jambe tendue — la jambe s'envoie vers le haut (devant, côté ou derrière) avec force et précision, puis revient. Le kick est un fondamental du jazz et du cabaret.",
    description: "Le kick, c'est un grand classique du jazz — direct, énergique, visible. Il y en a pour tous les goûts : devant, côté, derrière, haut ou bas.\n\n**Types de kicks :**\n- **Front kick** : jambe lancée devant\n- **Side kick** : jambe lancée sur le côté\n- **Back kick** : jambe lancée derrière\n- **High kick** : front kick à hauteur maximale (cabaret, cancan)\n- **Fan kick** : arc de cercle de bas en haut en passant par le côté\n- **Hitch kick** : saut pendant lequel une ou deux jambes se lancent\n\n**Exécution (front kick) :**\n1. Poids sur la jambe d'appui\n2. La jambe libre s'envoie vers l'avant, genou tendu\n3. Au sommet : pointe ou flex selon le style\n4. Retour contrôlé — ne pas 'laisser tomber' la jambe\n5. Souvent suivi d'un ball change ou d'un step\n\n**Facteurs de qualité :**\n- Hauteur (flexibilité et force)\n- Précision de la direction\n- Contrôle du retour\n- Stabilité de la jambe d'appui",
    erreursCourantes: [
      "Genou plié pendant le kick — la jambe doit être tendue au point culminant.",
      "Jambe d'appui qui vacille — le kick requiert une stabilité parfaite de la jambe portante.",
      "Laisser la jambe 'tomber' après le kick au lieu de la contrôler.",
    ],
    conseils: [
      "La hauteur vient de la flexibilité ET de la force. Travailler uniquement l'étirement ne suffit pas — renforce aussi le fléchisseur de hanche qui envoie la jambe.",
    ],
    difficulteInterne: 2,
    termesLies: ['fan-kick', 'ball-change', 'sauts-jazz', 'chasse-jazz'],
  },

  {
    id: 'hip-roll',
    nom: 'Hip Roll',
    alias: ['roulement de bassin', 'rotation de hanches', 'hip circle'],
    disciplines: ['jazz', 'heels', 'burlesque'],
    categories: ['isolations', 'techniques-corps'],
    definition: "Isolation du bassin décrivant un cercle complet dans un plan horizontal — les hanches tournent de l'avant vers le côté, vers l'arrière et retour, ou inversement.",
    description: "Le hip roll, c'est l'isolation qui fait tourner les hanches en cercle. Simple à décrire, plus subtil à bien exécuter.\n\n**Exécution :**\n1. Pieds à la largeur des hanches, genoux légèrement fléchis\n2. Pousser les hanches vers l'avant\n3. Faire pivoter vers le côté droit\n4. Pousser vers l'arrière\n5. Pivoter vers le côté gauche\n6. Revenir devant — cercle complet\n7. Répéter en continu ou inverser le sens\n\n**Points techniques :**\n- Le haut du corps reste **stable** (isolation = mouvement isolé du bassin)\n- Les genoux restent fléchis pour permettre la mobilité\n- La qualité est **fluide et continue**, pas saccadée\n\n**Hip roll vs figure 8 :**\nLe hip roll décrit un cercle horizontal. Le figure 8 décrit un huit en oscillant de côté à côté. Deux isolations, deux effets très différents.\n\n**Usages :**\nJazz show, heels, burlesque, danse orientale — le hip roll traverse de nombreuses disciplines.",
    erreursCourantes: [
      "Haut du corps qui tourne avec le bassin — ça doit être une isolation, pas une rotation complète du tronc.",
      "Mouvement saccadé plutôt que fluide — le hip roll est une courbe, pas une succession d'angles.",
      "Genoux trop raides — les fléchis un peu, ça libère les hanches.",
    ],
    conseils: [
      "Commence en ralenti avec les mains sur les hanches pour sentir exactement où elles sont à chaque phase. La conscience proprioceptive vient avant la fluidité.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolations-jazz', 'travail-bassin', 'shimmy'],
  },

  {
    id: 'freeze-jazz',
    nom: 'Freeze',
    alias: ['position freeze', 'arrêt net', 'pause sculptée'],
    disciplines: ['jazz', 'heels', 'street-jazz'],
    categories: ['techniques-corps', 'effets-sceniques'],
    definition: "Arrêt net et sculptural dans une position — le danseur s'immobilise instantanément, créant un contraste saisissant avec le mouvement précédent. Le freeze est un outil de dynamique et de théâtralité.",
    description: "Un bon freeze, c'est comme appuyer sur 'pause' — sauf que le corps continue de parler même immobile. L'arrêt est net, la position forte, le regard vivant.\n\n**Types de freezes :**\n- **Freeze debout** : arrêt dans une pose verticale (attitude, écarté, etc.)\n- **Freeze au sol** : arrêt dans une position de floorwork\n- **Freeze en équilibre** : arrêt sur une jambe ou en déséquilibre contrôlé\n- **Group freeze** : plusieurs danseurs qui s'arrêtent simultanément\n\n**Ce qui fait un bon freeze :**\n- L'**instantanéité** : zéro glissement, zéro décélération\n- La **tension** : le corps reste engagé, les muscles actifs\n- La **lisibilité** : la position doit être claire et forte\n- Le **regard** : il se pose quelque part avec intention\n\n**Freeze et musicalité :**\nLe freeze arrive généralement sur un accent fort (un beat, un accent orchestral, une rupture musicale). C'est là toute sa force dramatique.",
    erreursCourantes: [
      "Freeze qui 'décélère' au lieu de s'arrêter net — le passage au stop doit être instantané.",
      "Corps qui se relâche dans le freeze — l'immobilité doit avoir de l'énergie.",
      "Regard perdu — pendant un freeze, le regard est une partie essentielle de la communication.",
    ],
    conseils: [
      "Entraîne-toi avec de la musique et des signaux sonores : danse librement, et au signal, arrête-toi net. Plus tu pratiques, plus le freeze devient instinctif.",
    ],
    difficulteInterne: 2,
    termesLies: ['isolations-jazz', 'groove', 'accent-rythmique'],
  },

  {
    id: 'barrel-turn',
    nom: 'Barrel Turn',
    alias: ['barrel jump', 'tour tonneau', 'saut tonneau'],
    disciplines: ['jazz'],
    categories: ['tours', 'sauts'],
    definition: "Tour ou saut en rotation sur un axe incliné — le corps tourne comme un tonneau qui roule latéralement, contrairement à la pirouette qui tourne sur un axe vertical.",
    description: "Le barrel turn est l'un des tours les plus spectaculaires du jazz. Quand il est bien fait, il ressemble à une roue humaine qui vole.\n\n**Barrel turn (au sol) :**\n1. Élan vers le côté\n2. La jambe extérieure se lance vers le haut\n3. Le corps bascule latéralement et tourne\n4. Rotation complète autour d'un axe incliné\n5. Réception sur l'autre pied\n\n**Barrel jump (sauté) :**\nVersion aérienne : les deux jambes quittent le sol pendant la rotation. Le corps décrit un arc complet dans l'espace.\n\n**Ce qui le différencie d'une pirouette :**\nLa pirouette tourne sur un axe vertical. Le barrel turn tourne sur un axe incliné (environ 45° ou plus). C'est ce qui crée la sensation de 'roulement'.",
    erreursCourantes: [
      "Axe trop vertical — ça devient une pirouette ratée, pas un barrel turn.",
      "Élan insuffisant — sans momentum latéral, la rotation ne se produit pas.",
      "Réception déséquilibrée ou trop dure.",
    ],
    conseils: [
      "Commence par un barrel turn simple sans saut pour intégrer l'inclinaison de l'axe. Une fois l'axe acquis, ajoute l'impulsion verticale.",
    ],
    difficulteInterne: 4,
    termesLies: ['pirouette-jazz', 'sauts-jazz', 'jazz-run'],
  },

  {
    id: 'stag-leap',
    nom: 'Stag Leap',
    alias: ['grand écart sauté', 'stag jump', 'cerf volant jazz'],
    disciplines: ['jazz', 'contemporain'],
    categories: ['sauts'],
    definition: "Grand saut dans lequel une jambe est tendue en avant pendant que l'autre est fléchie en arrière, la cuisse parallèle au sol et le pied pointé vers le haut. Cette forme asymétrique ressemble à un cerf en plein vol.",
    description: "Le stag leap est l'un des sauts signatures du jazz — cette forme asymétrique mi-écart, mi-arabesque en l'air est immédiatement reconnaissable.\n\n**La forme typique :**\n- Jambe avant : tendue, projetée en avant à hauteur de hanche ou plus\n- Jambe arrière : genou plié, cuisse vers le bas, pied pointé vers le ciel\n- Bras : ouverts, souvent en grande 2ème ou en haut\n- Regard : devant, légèrement vers le haut\n\n**Variantes :**\n- **Double stag** : les deux jambes fléchies\n- **Stag turn** : rotation pendant le saut\n- **Stag leap bas** : même forme mais ras du sol (effet de vitesse)\n\n**L'élan :**\nLe stag leap se prépare souvent par un jazz run ou un chassé. L'impulsion vient de la jambe d'appui qui pousse pendant que la jambe avant s'élance.",
    erreursCourantes: [
      "Jambe arrière trop basse — la cuisse doit être parallèle au sol au minimum.",
      "Jambe avant trop fléchie — elle doit tendre au maximum.",
      "Manque d'élan — sans vitesse horizontale, le saut manque de style et de hauteur.",
    ],
    conseils: [
      "Exagère la forme en dehors du saut : étire la jambe avant, plie la jambe arrière au maximum. En l'air, ton corps reproduira ce que tes muscles ont mémorisé.",
    ],
    difficulteInterne: 3,
    termesLies: ['sauts-jazz', 'grand-jete', 'jazz-run', 'chasse-jazz'],
  },

  {
    id: 'tilt-jazz',
    nom: 'Tilt',
    alias: ['penché jazz', 'attitude tilt', 'arabesque tilt'],
    disciplines: ['jazz', 'heels'],
    categories: ['techniques-corps', 'equilibres'],
    definition: "Position dans laquelle le danseur incline latéralement le corps tout en levant une jambe du côté opposé — le tilt crée une ligne oblique de la tête au pied levé.",
    description: "Le tilt est l'une des positions iconiques du jazz — cette inclinaison latérale avec une jambe haute crée une ligne visuelle forte et immédiatement reconnaissable.\n\n**La position :**\n- La jambe d'appui reste au sol, genou tendu ou légèrement fléchi\n- La jambe libre monte sur le côté, genou tendu\n- Le buste s'incline dans la direction opposée à la jambe\n- Tête dans le prolongement du corps ou regardant vers le haut\n- Bras : souvent un bras levé, l'autre tendu vers le bas\n\n**Ce qui crée la ligne :**\nLa beauté du tilt vient de la continuité : depuis le pied levé jusqu'au sommet du bras tendu — une diagonale ininterrompue.\n\n**Tilt vs arabesque :**\nL'arabesque s'incline vers l'avant, la jambe s'envole derrière. Le tilt s'incline sur le côté, la jambe monte latéralement. Deux diagonales, deux effets très différents.\n\n**Variantes :**\n- **Attitude tilt** : même inclinaison mais jambe arrière fléchie\n- **Penché** : tilt vers l'avant (proche de l'arabesque penché classique)",
    erreursCourantes: [
      "Bassin qui tourne au lieu de rester ouvert — le tilt n'est pas une rotation.",
      "Jambe libre trop basse — vise au moins la hauteur de la hanche pour que la ligne soit visible.",
      "Corps qui se brise à la taille au lieu de former une ligne continue.",
    ],
    conseils: [
      "Regarde-toi dans le miroir et trace mentalement la ligne depuis ton pied levé jusqu'à ton bras tendu. Elle doit être droite.",
    ],
    difficulteInterne: 3,
    termesLies: ['arabesque', 'pirouette-jazz', 'isolations-jazz'],
  },

  {
    id: 'pivot-turn',
    nom: 'Pivot Turn',
    alias: ['pivot', 'tour pivot', 'pivot step', 'demi-tour'],
    disciplines: ['jazz', 'heels', 'contemporain'],
    categories: ['tours', 'deplacements'],
    definition: "Tour sur deux pieds en déplacement — un pied pivote sur lui-même (demi-pointe ou plat) pendant que l'autre se pose, créant une rotation avec translation dans l'espace. Contrairement à la pirouette qui tourne sur place, le pivot turn voyage.",
    description: "Le pivot turn est un tour simple mais extrêmement polyvalent. Il permet de changer de direction avec style, de traverser l'espace en tournant, et de créer de l'élan pour des figures plus complexes.\n\n**Mécanisme :**\n1. Poids sur le pied avant (demi-pointe ou plat selon le style)\n2. Rotation de 180° ou 360° sur ce pied\n3. Transfert du poids sur l'autre pied à la fin de la rotation\n4. Enchaîner ou se stabiliser\n\n**Pivot step (demi-tour) :**\nVersion à 180° — retournement d'une demi-rotation. Très utilisé pour changer de face dans les chorégraphies.\n\n**Ce qui le différencie de la pirouette :**\nLa pirouette tourne sur une jambe (jambe libre en retiré). Le pivot turn reste sur deux appuis successifs et se déplace dans l'espace.\n\n**Usages en jazz :**\n- Transition entre séquences face-dos\n- Accélération dans un enchaînement de tours\n- Préparation à un kick ou un saut",
    erreursCourantes: [
      "Perdre l'axe vertical pendant la rotation — le corps doit rester droit.",
      "Trop de force : le pivot turn est précis, pas explosif.",
      "Oublier le spotting (fixer un point pour le regard) pour éviter la perte d'orientation.",
    ],
    conseils: [
      "Le pivot turn vient souvent en série — deux, quatre, huit demi-tours. Commence à vitesse lente pour trouver ton axe, puis monte en vitesse progressivement.",
    ],
    difficulteInterne: 2,
    termesLies: ['pirouette-jazz', 'chasse-jazz', 'jazz-walk', 'jazz-run'],
  },

  {
    id: 'moonwalk',
    nom: 'Moonwalk',
    alias: ['back slide', 'glissement lunaire', 'backslide'],
    disciplines: ['jazz', 'street-jazz'],
    categories: ['deplacements', 'culture-histoire'],
    definition: "Pas de glissement vers l'arrière créant l'illusion optique d'une marche vers l'avant — la jambe semble avancer alors que le corps recule. Rendu iconique par Michael Jackson en 1983, mais utilisé dans le jazz bien avant lui.",
    description: "Le moonwalk, c'est l'un des pas de danse les plus reconnaissables de l'histoire de la pop culture. Et la bonne nouvelle : c'est faisable ! L'illusion repose entièrement sur la mécanique du pied.\n\n**Mécanisme :**\n1. Pied droit : talon posé, pointe levée\n2. Pied gauche : sur demi-pointe\n3. Le pied gauche glisse vers l'arrière en s'aplatissant\n4. En même temps, le pied droit monte sur demi-pointe\n5. Le pied gauche est à plat, le droit sur demi-pointe → échange des rôles\n6. Répéter en continuité\n\n**L'illusion :**\nL'alternance entre le pied plat (ancré) et le pied en glissement crée visuellement l'impression d'une marche vers l'avant. L'œil suit le pied 'fixe' et se fait tromper.\n\n**Histoire :**\nLe 'backslide' existait dès les années 1930 (Cab Calloway, Fred Astaire). Jeffrey Daniel le popularisa dans les années 1970. Michael Jackson en fit une œuvre d'art lors de Motown 25 (1983) avec 'Billie Jean'.",
    erreursCourantes: [
      "Soulever le pied au lieu de le faire glisser — l'illusion repose sur le glissement continu.",
      "Surface trop rugueuse — le moonwalk nécessite un sol lisse ou des chaussures à semelle douce.",
      "Vitesse irrégulière — les deux pieds doivent se déplacer à vitesse constante pour que l'illusion tienne.",
    ],
    conseils: [
      "Commence chaussettes sur parquet. La surface lisse aide à comprendre le mécanisme avant de le transposer en chaussures de cours.",
    ],
    difficulteInterne: 3,
    etymologie: "Littéralement 'marche sur la lune' — évoque la démarche flottante des astronautes. Le terme technique est 'back slide'.",
    termesLies: ['jazz-walk', 'jazz-run', 'groove'],
  },
]
