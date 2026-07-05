import type { Cours } from '../schema'

export const coursParcours: Cours[] = [

  // ─── PARCOURS : PREMIERS PAS ──────────────────────────────────────────────

  {
    id: 'transversal-corps-fondamentaux',
    titre: "Avant tout, le corps",
    resume: "Peu importe la discipline que tu choisis, tu danses avec le même corps. Alignement, centre de gravité, tonicité, espace — ce sont des fondamentaux qui s'appliquent partout, du classique au pole en passant par le tango. Ce cours, c'est ma liste de ce qu'il faut avoir compris avant même de choisir une technique.",
    disciplines: ['commun'],
    termesAbordes: ['alignement', 'centre-de-gravite', 'tonicite', 'proprioception', 'niveaux-espace', 'cote-cour', 'cote-jardin', 'face-lointain', 'en-croix'],
    sections: [
      {
        titre: "Les fondamentaux qui traversent tout",
        contenuMarkdown: `J'aime beaucoup l'idée qu'avant d'être un danseur de jazz, de tango ou de pole, tu es d'abord un corps dans l'espace. Et ce corps a des règles communes que toutes les disciplines partagent — même si elles les expriment différemment.

**L'alignement** d'abord. En classique, on parle de « tenue » et d'aplomb. En contemporain, de « colonne vertébrale allongée ». En tango, de « eje » (l'axe). En pole, de « gainage » pour ne pas s'écrouler dans les figures. C'est le même concept : le corps organisé autour d'un axe vertical imaginaire qui part du sommet du crâne jusqu'aux talons.

Concrètement : épaules dans l'axe des hanches, hanches dans l'axe des pieds, regard horizontal. Pas de cambrure exagérée, pas d'affaissement. Tu ne peux pas danser avec un alignement effondré — quelle que soit la discipline, ça se voit immédiatement.

**Le centre de gravité** est lié à l'alignement mais distinct. C'est ton point d'équilibre naturel — situé environ deux doigts sous le nombril, légèrement vers l'intérieur. En classique, on le stabilise pour les équilibres. En contemporain, on joue avec lui, on le déplace, on l'abandonne. En tango, le couple partage un centre de gravité commun. La conscience de ton centre de gravité change tout à ta façon de bouger.

**La tonicité musculaire**, enfin. Ni trop, ni trop peu. Un corps sans tonus s'écrase ; un corps hyper-tonique devient rigide et cassant. Trouver le « juste tonique » — ce niveau d'engagement musculaire qui permet la liberté — c'est un travail de toute une carrière.`,
      },
      {
        titre: "L'espace : ta géographie de scène",
        contenuMarkdown: `Ce qui m'a frappé quand j'ai commencé à apprendre le vocabulaire scénique, c'est à quel point il est partagé par toutes les disciplines. La scène a ses conventions — et les connaître te rend immédiatement plus clair, plus lisible, plus professionnel.

**Côté cour / côté jardin.** En France, le côté cour est à droite de l'acteur face au public, le côté jardin à gauche. L'origine ? Le Palais-Royal à Paris, où la salle de jeu (*jeu de paume*, ancêtre du théâtre) était d'un côté, et le jardin de l'autre. Ce vocabulaire s'utilise en classique, jazz, cabaret, contemporain — partout.

**Face / lointain / côtés.** La face, c'est le public. Le lointain, c'est le fond de scène (« upstage » en anglais). Ces quatre repères — face, lointain, cour, jardin — te donnent une orientation précise dans n'importe quel espace.

**Les niveaux.** Laban en a identifié trois : bas (sol et accroupi), moyen (debout normal) et haut (sur pointes, sauts, verticalité). Changer de niveau, c'est changer de registre expressif. En contemporain, le sol est un niveau à part entière. En jazz, le « niveau bas » est un choix stylistique fort. En pole, tu changes de niveau constamment — du sol à plusieurs mètres de hauteur.

**L'en-croix.** Devant, côté, derrière, côté opposé — la croix formée par les quatre directions de base. C'est la grammaire spatiale commune à toutes les barres classiques, aux exercices de jazz, aux chorégraphies de groupe.`,
      },
      {
        titre: "Proprioception : te connaître de l'intérieur",
        contenuMarkdown: `Voilà un concept que j'aurais voulu comprendre beaucoup plus tôt. La **proprioception**, c'est la capacité de ton système nerveux à sentir la position de ton corps dans l'espace *sans regarder*. C'est ton sixième sens — celui qui te dit où est ta jambe sans ouvrir les yeux, qui te permet d'atterrir sur un pied sans regarder le sol.

En danse, une proprioception bien développée, c'est ce qui te permet de :
- Reproduire une forme gestuelle après l'avoir vue une seule fois
- Corriger ton alignement sans te regarder dans le miroir
- Sentir l'instant précis où tu perds l'équilibre — et te rattraper
- Danser dans l'obscurité ou sans miroir, comme sur scène

**Comment la développer ?** Par des exercices d'équilibre sur une jambe (yeux fermés), par le travail en barre sans regarder, par le sol en contemporain (le contact du sol devient un repère proprioceptif), par la répétition consciente plutôt que mécanique.

Un tanguero développe une proprioception exceptionnelle des deux corps — le sien et celui de son partenaire. Un danseur de pole développe une conscience tridimensionnelle dans l'espace vertical. Un danseur classique développe la précision centimétrique de ses placements.

Quelle que soit ta discipline, prends l'habitude de fermer les yeux quelques secondes pendant tes exercices. Que perçois-tu ? Où est ton centre ? Tes épaules sont-elles symétriques ? Ta réponse à ces questions, c'est ta proprioception. Plus tu l'entraînes, plus elle est fine — et plus tu danses avec intelligence.`,
      },
    ],
  },

  {
    id: 'transversal-musique-danse',
    titre: "La musique autrement",
    resume: "Toutes les disciplines dansent avec la musique — mais elles ne la lisent pas de la même façon. Le jazz compte en huit-count, le tango suit le compas, le classique suit le phrasé. Comprendre ces différents systèmes, c'est déverrouiller ta relation à la musique quelle que soit la discipline que tu pratiques.",
    disciplines: ['commun'],
    termesAbordes: ['tempo', 'mesure-musicale', 'phrase-musicale', 'anacrouse', 'groove', 'eight-count', 'accent-jazz', 'musicalidad-tango', 'compas-tango'],
    sections: [
      {
        titre: "Compter : pas si simple",
        contenuMarkdown: `J'ai mis des mois à comprendre pourquoi je me perdais dans les comptes selon la discipline. La réponse : le jazz et le classique ne comptent pas la même chose.

**En jazz**, on compte en **huit-count** — huit temps qui correspondent à deux mesures de 4/4. C'est le standard universel du jazz et du hip-hop : "5-6-7-8" avant de partir, et tu comptes jusqu'à 8 avant de recommencer. La chorégraphie se découpe en blocs de 8.

**En classique**, on compte la mesure musicale réelle — souvent du 3/4 (valse) ou du 4/4, mais on fait correspondre les pas aux temps de la partition. "Temps fort" pour l'impulsion, "temps faible" pour la suspension. La musicalité est liée au phrasé musical, pas à un découpage arbitraire en 8.

**En tango argentin**, on suit le **compas** — la pulsation du tango. La musique tango peut être en 4/4 ou en 2/4, avec des accents très marqués. Les danseurs ne comptent généralement pas de chiffres : ils *sentent* le compas, ils marchent avec lui.

**En contemporain**, le rapport est encore différent : la musique peut être asymétrique, changeante, ou absente. On parle de **phrasé de mouvement** — le mouvement a sa propre logique rythmique qui dialogue avec (ou contre) la musique.

Leçon : quand tu changes de discipline, laisse tomber le système de comptage de l'autre. Chaque discipline a le sien pour une raison.`,
      },
      {
        titre: "Groove, phrasé, compas : trois façons d'être dans la musique",
        contenuMarkdown: `Ce qui m'a vraiment aidé, c'est de comprendre que chaque discipline a une *philosophie* différente du rapport à la musique — pas juste une technique de comptage.

**Le groove** (jazz, heels, burlesque) est une sensation physique avant d'être un concept. C'est le *swing*, cette légère mise en retard ou en avant des accents qui donne une qualité "rebondissante" au mouvement. Tu ne danses pas *sur* le temps, tu danses *avec* lui — un peu derrière, un peu dedans. Si tu ne le *sens* pas dans ton corps, tu as beau compter correctement, ça ne groovera pas.

**Le phrasé musical** (classique, contemporain, moderne) implique de comprendre la structure de la musique en arches — montée, apogée, descente — et d'y calquer une architecture gestuelle identique. Un adage classique suit le phrasé d'un largo ; un allegro suit celui d'un presto. La musique *porte* le corps.

**Le compas** (tango argentin) est presque une entité physique. Les musiciens de tango disent que le compas est le *corazón de la música* — le cœur. Les danseurs apprennent à marcher avec ce cœur, à le ressentir dans leurs pieds, à laisser leur corps vibrer à la même fréquence que la musique.

Ces trois approches ne sont pas incompatibles — elles s'enrichissent mutuellement. Un jazzman qui comprend le phrasé classique est plus musical. Un tanguero qui sent le groove a une caminada plus vivante.`,
      },
      {
        titre: "L'anacrouse : le mouvement avant le mouvement",
        contenuMarkdown: `Voilà un concept que j'adore parce qu'il révèle quelque chose de profond sur la façon dont le mouvement dansé est organisé.

L'**anacrouse** est musicalement le ou les temps non accentués qui précèdent le temps fort — le « levé » avant la « frappe ». En danse, l'anacrouse c'est tout ce qui prépare le mouvement principal : le demi-plié avant le saut, le transfer de poids avant la marche du tango, l'élan du bras avant un jeté.

Ce concept change tout à ta façon de préparer les mouvements :

- **En classique** : le demi-plié (anacrouse) précède chaque saut ou chaque tour. Sans lui, il n'y a pas d'énergie à libérer.
- **En jazz** : la *préparation-élan* est l'anacrouse qui lance les grandes figures — le port de bras arrière avant le stag leap, le petit pas en arrière avant la pirouette.
- **En tango** : chaque pas commence par un micro-déplacement du centre de gravité — une anacrouse silencieuse que le guideur donne et que le suiveur reçoit. C'est *la* connexion du tango.
- **En burlesque** : le regard jeté vers un accessoire *avant* de le saisir est une anacrouse théâtrale — elle dit au public ce qui va se passer.

Entraîne-toi à identifier les anacrouses dans tout ce que tu vois danser. Les plus grands danseurs les travaillent autant que les mouvements eux-mêmes.`,
      },
    ],
  },

  // ─── PARCOURS : AU SOL ────────────────────────────────────────────────────

  {
    id: 'transversal-floorwork-pourquoi',
    titre: "Pourquoi aller au sol ?",
    resume: "Le sol n'est pas une chute — c'est un territoire à part entière. Le contemporain l'a revendiqué comme espace chorégraphique dès les années 1960. Le jazz l'explore en niveau bas. Les heels en font une arène. Le pole en fait un tremplin. Ce cours raconte pourquoi descendre au sol est l'un des gestes les plus riches de la danse.",
    disciplines: ['contemporain', 'jazz', 'heels', 'pole-dance'],
    termesAbordes: ['floorwork', 'niveau-bas', 'floorwork-heels', 'floorwork-pole', 'vogue-ballroom-heels'],
    sections: [
      {
        titre: "Le sol comme choix esthétique",
        contenuMarkdown: `J'ai appris à aller au sol très tard dans mon parcours — et j'ai regretté de ne pas y être allée plus tôt. Pendant longtemps, j'avais une image de la danse qui était verticale, érigée, suspensive. Le sol, c'était tomber.

C'est **Isadora Duncan** qui, la première, a commencé à aller au sol comme geste chorégraphique délibéré — non plus comme accident ou acrobatie, mais comme expression. Dans les années 1960, les chorégraphes du **Judson Dance Theater** (Trisha Brown, Yvonne Rainer, Steve Paxton) ont radicalisé cette démarche : le sol devient un espace égal à la verticalité, ni inférieur ni exceptionnel.

En **contemporain** aujourd'hui, le sol est une quatrième dimension du mouvement — après la hauteur, la largeur et la profondeur, il y a la « densité », ce rapport au poids et à la gravité qu'on n'explore vraiment qu'au sol.

En **jazz**, le niveau bas est un outil stylistique fort — penser aux danses de tap et de jazz des années 1930, aux danseurs comme *Earl "Snakehips" Tucker* dont les flexions profondes ont défini un style.

En **heels**, le sol est hérité de la culture ballroom et vogue — les dips, les floor drops, les duck walks. C'est une signature esthétique, pas une difficulté technique.

En **pole**, le sol est le point de départ de toutes les transitions — monter sur la barre implique de maîtriser sa sortie au sol.`,
      },
      {
        titre: "Ce que chaque discipline fait au sol",
        contenuMarkdown: `Ce qui est fascinant, c'est de voir à quel point chaque discipline a développé son propre *langage* du sol — avec ses propres valeurs, ses propres mouvements signature.

**Contemporain** : le sol est un espace de fluidité, de contact, d'exploration du poids. On roule, on glisse, on fait des roulades, on joue avec la gravité. La qualité est douce, organique, souvent lente. Les transitions sol-debout sont continues, sans rupture.

**Jazz** : le sol apparaît surtout dans les niveaux bas — flexion profonde, glissement, « drop ». Le jazz aime le contraste entre la verticalité énergique et le soudain effondrement vers le sol, souvent sur un accent musical fort. Le *freeze au sol* est très caractéristique.

**Heels** : le sol est une arène théâtrale. Héritées du *vogue* et du *ballroom*, les figures au sol (floor work, dip, duck walk) sont hautement stylistiques. On porte ses talons même au sol — la contrainte du talon change toute la mécanique d'appui et de transition.

**Pole** : le sol est fonctionnel avant d'être expressif. La montée sur la barre commence au sol, le *floorwork pole* enchaîne des transitions élégantes qui préparent ou concluent les figures en hauteur. Il faut une conscience précise de ses appuis — poignets, genoux, hanches — pour que le floorwork soit sûr et fluide.`,
      },
    ],
  },

  {
    id: 'transversal-floorwork-technique',
    titre: "Descendre, bouger, remonter",
    resume: "Aller au sol, c'est bien. Savoir comment descendre, se déplacer et remonter sans perdre sa qualité — c'est ce qui fait la différence. Ce cours couvre la mécanique commune du floorwork à travers le contemporain, le jazz, les heels et le pole.",
    disciplines: ['contemporain', 'jazz', 'heels', 'pole-dance'],
    termesAbordes: ['chute-controlee', 'roulade', 'poids-abandon', 'fall-recovery', 'floorwork', 'floorwork-heels', 'floorwork-pole'],
    sections: [
      {
        titre: "La descente : tomber avec intention",
        contenuMarkdown: `La première chose que j'ai apprise en travaillant le floorwork, c'est qu'il n'y a pas de "chute" — il y a des *descentes*. La nuance change tout.

La **chute contrôlée** en contemporain est une technique précise : relâcher le centre de gravité vers le bas en guidant la descente avec les hanches, puis le bassin, puis le dos. Le corps s'abandonne à la gravité mais en *guidant* cette chute, jamais en la subissant. Les poignets, les genoux et la colonne vertébrale sont les points de vigilance — une mauvaise réception sur le poignet, c'est une entorse.

En **jazz**, la descente est souvent plus abrupte, plus dramatique — un *drop* sur les genoux ou sur le côté, exécuté sur un accent musical fort. La qualité est percussive. Le genou doit être *préparé* : on ne frappe jamais le sol avec un genou en extension ; on arrive légèrement fléchi.

En **heels**, la descente pose un problème spécifique : comment s'agenouiller avec des talons hauts sans se vriller une cheville ? La réponse technique est de toujours descendre sur *l'avant du pied*, jamais sur le talon. Les transitions se font via les genoux et les hanches, pas via la plante complète du pied.

En **pole**, la descente du corps vers le sol se fait souvent en spirale autour de la barre — on contrôle la vitesse avec la prise des mains et des jambes. Lâcher trop vite ou trop lentement crée des déséquilibres qui peuvent être dangereux.`,
      },
      {
        titre: "Se déplacer au sol et remonter",
        contenuMarkdown: `Une fois au sol, le mouvement continue. Ce qui distingue un bon floorwork d'une simple pose, c'est la capacité à *voyager* dans l'espace et à remonter avec autant d'intention qu'on est descendu.

**Roulade** (contemporain) : la roulade n'est pas un retournement de gym. Elle passe par les vertèbres une par une — la colonne vertébrale s'arrondit progressivement, le contact avec le sol se fait dos rond, jamais à plat. La direction, la vitesse, l'arrivée — tout est chorégraphié.

**Déplacements bas** (jazz, heels) : glissades sur les genoux, *duck walk* (avancer accroupi en alternant les genoux), rotations au sol sur les hanches. Ces déplacements demandent de la souplesse dans les chevilles et des quadriceps forts — les genoux travaillent beaucoup.

**Transitions pole** : les déplacements au sol autour de la barre (cercles, spirales) sont des *floorwork de transition*. Ils permettent de changer d'orientation par rapport à la barre avant de remonter.

**La remontée** est souvent le moment le plus négligé — on remonte vite, sans intention, pour « être debout ». C'est une erreur. En contemporain, la remontée passe par la colonne vertébrale vertèbre par vertèbre. En jazz, elle peut être un geste en soi — le corps qui déroule vers le haut sur un accent musical. En heels, elle se fait via les hanches et les bras, les mains prenant appui au sol pour pousser, jamais en s'arc-boutant sur les talons.

Pratique : travaille systématiquement tes transitions sol-debout autant que les positions elles-mêmes.`,
      },
    ],
  },

  // ─── PARCOURS : POIDS, APPUIS, CONNEXION ──────────────────────────────────

  {
    id: 'transversal-gerer-son-poids',
    titre: "Ton poids, ton allié",
    resume: "On enseigne souvent la danse comme une lutte contre la gravité. Mais certaines disciplines — et pas des moindres — ont une philosophie exactement inverse : travailler avec le poids, l'abandonner, le jouer. Ce cours explore les différentes façons dont le classique, le contemporain, le tango, le jazz et le pole se rapportent au poids du corps.",
    disciplines: ['classique', 'contemporain', 'jazz', 'tango-argentin', 'pole-dance'],
    termesAbordes: ['ballon', 'suspension', 'poids-abandon', 'fall-recovery', 'desequilibre', 'preparation-elan', 'niveau-bas', 'grip-pole', 'conditioning-pole', 'centre-de-gravite'],
    sections: [
      {
        titre: "La gravité n'est pas l'ennemi",
        contenuMarkdown: `J'ai longtemps cru que la danse consistait à « s'élever au-dessus du sol », à « défier la gravité ». Cette image romantique est aussi un peu trompeuse — parce qu'elle masque la façon dont les grandes danses *utilisent* la gravité plutôt que de la combattre.

**Le classique** cherche effectivement l'élévation — mais le *ballon*, cette qualité de suspension qui fait paraître le danseur léger, n'est pas l'absence de poids. C'est une maîtrise du poids : l'impulsion précise qui envoie le corps vers le haut, la réception progressive qui l'accueille sans bruit. Sans poids, pas de ballon.

**Le contemporain** va encore plus loin en faisant du poids un matériau chorégraphique explicite. La *fall and recovery* de José Limón et Doris Humphrey est entièrement construite sur l'abandon au poids et son rattrapage. *Release technique* : relâcher les tensions superflues pour que le corps trouve ses propres lignes de force. Le sol ici n'est pas une défaite — c'est une direction.

**Le jazz** joue avec le poids de façon différente : l'élan (*préparation-élan*) crée une accumulation de poids et d'énergie qu'on libère dans la figure suivante. Le niveau bas en jazz, c'est aussi plier le corps dans le poids pour mieux rebondir.

**Le tango** a une façon très particulière de gérer le poids : les danseurs ne s'équilibrent pas *contre* leur partenaire mais *avec* lui. L'abrazo, c'est un partage de centre de gravité — ni l'un ne tombe, ni l'autre ne soutient.`,
      },
      {
        titre: "Appuis et ancrages : comment chaque discipline s'ancre au sol",
        contenuMarkdown: `L'ancrage au sol — la façon dont le pied, la main, le genou, le corps entier *prend appui* — est révélateur des valeurs profondes d'une discipline.

**La demi-pointe classique** est un appui de haute précision : le poids repose sur les métatarses, les orteils posés à plat, la cheville alignée. C'est un appui *transitionnel* — on y passe, on en sort, on l'utilise pour pirouetter ou s'élancer. Il demande une cheville très forte et des intrinsèques du pied très développés.

**Le niveau bas jazz** crée un ancrage par le poids lui-même — les genoux fléchis, les hanches basses, le centre de gravité descendu. Ce n'est pas une position de repos : c'est une tension comprimée, prête à se libérer.

**Le grip pole** est un ancrage par la prise — main, avant-bras, cuisse, cheville contre la barre. La qualité de l'ancrage détermine la sécurité et la fluidité des figures. Trop lâche, tu glisses ; trop fort, tu te blesses.

**Le conditioning en pole** — ce travail de renforcement musculaire spécifique au pole — sert directement à développer la capacité d'ancrage : bras, abdominaux, adducteurs, ischio-jambiers. Sans conditioning, les appuis ne tiennent pas.

**En tango**, l'ancrage au sol est une qualité d'*eje* — l'axe vertical qui te maintient debout en équilibre parfait. Les bons tangueros ont les pieds qui semblent coller au sol, même dans les figures les plus complexes.`,
      },
    ],
  },

  {
    id: 'transversal-danser-a-deux',
    titre: "Danser à deux",
    resume: "Le pas de deux classique, l'abrazo du tango, le partage de poids en contact-improvisation — trois façons de danser à deux, trois philosophies totalement différentes du contact et de la connexion. Ce cours explore ce qui se passe quand deux corps entrent en dialogue chorégraphique.",
    disciplines: ['classique', 'contemporain', 'tango-argentin'],
    termesAbordes: ['pas-de-deux', 'point-de-contact', 'partage-poids', 'abrazo', 'eje', 'apilado', 'connexion-tango', 'roles-tango', 'codigos-milonga'],
    sections: [
      {
        titre: "Trois philosophies du contact",
        contenuMarkdown: `J'ai beaucoup réfléchi à la différence entre ces trois façons de danser à deux — et j'en suis arrivée à penser qu'elles révèlent des conceptions très différentes de ce qu'est une relation.

**Le pas de deux classique** repose sur un système hiérarchique et codifié : il y a un *porteur* (souvent le danseur) et une *portée* (souvent la danseuse), des rôles définis, une structure (entrée, adage, variations, coda). Le contact est prévisible, maîtrisé, narratif. L'objectif est de *sublimer* la danseuse — de la porter jusqu'à ses lignes les plus extrêmes. Ce système évolue : de nombreuses compagnies contemporaines remettent en question le genre des rôles.

**Le contact-improvisation** (né dans les années 1970 avec Steve Paxton) est à l'opposé : pas de rôles assignés, pas de hiérarchie, pas de structure prédéfinie. Les deux partenaires suivent en temps réel le *point de contact* — le lieu de leur corps qui se touche — et laissent ce point guider le mouvement commun. N'importe qui peut porter, n'importe qui peut être porté. C'est une conversation, pas une performance.

**Le tango argentin** est entre les deux. Il y a un guide (*quien guía*) et un suiveur (*quien sigue*), mais ces rôles sont fluides selon les couples et les conventions locales. La connexion se fait via l'*abrazo* — l'étreinte — et la décision chorégraphique appartient entièrement aux deux partenaires : rien n'est préchoreographié, tout est improvisé à partir du compas.`,
      },
      {
        titre: "Partager le poids : technique et confiance",
        contenuMarkdown: `Dans tous les duos, le moment clé est le partage du poids. La technique est réelle — mais sans confiance, aucune technique ne tient.

**Partage de poids en contact-impro** : les deux partenaires apprennent à se donner du poids progressivement — d'abord le poids d'une main, puis d'un bras, puis du buste entier. La règle fondamentale est la *responsabilité partagée* : chacun est responsable à parts égales de l'équilibre commun. On ne s'accroche pas à l'autre ; on lui *offre* du poids.

**Connexion en tango** : l'*abrazo* du tango n'est pas une prise — c'est une rencontre. La tension dans les bras doit être juste : ni flasque (pas de connexion) ni rigide (pas de liberté). C'est la musicalité de l'abrazo. L'*apilado* est une technique spécifique de certains styles de tango où les deux partenaires partagent un axe commun légèrement incliné — on se soutient mutuellement, ni l'un ne serait debout sans l'autre.

**Portés en classique** : la règle d'or est que la danseuse facilite le porté — elle donne ses hanches au porteur, engage ses abdominaux, se *place* dans la position, ne s'y abandonne pas passivemement. Un porteur ne soulève pas un poids mort ; il soulève un corps actif qui l'aide.

**La confiance comme technique** : dans les trois cas, on ne peut pas apprendre la technique du duo sans construire la confiance. Ça s'acquiert dans la répétition, dans la communication, dans l'accord progressif entre deux corps qui apprennent à se connaître.`,
      },
    ],
  },

  // ─── PARCOURS : ISOLATIONS ET POLYCENTRISME ───────────────────────────────

  {
    id: 'transversal-art-isolation',
    titre: "L'art d'isoler",
    resume: "En moderne, on appelle ça le polycentrisme. En jazz, c'est l'isolation. En burlesque, c'est le shimmy et le bump-grind. En heels, c'est le hip roll. Même concept, vocabulaires distincts — la capacité à bouger une partie du corps indépendamment des autres est l'une des habiletés les plus transversales de la danse.",
    disciplines: ['moderne', 'jazz', 'burlesque', 'heels'],
    termesAbordes: ['isolation', 'polycentrisme', 'succession-corporelle', 'travail-bassin', 'isolations-jazz', 'shimmy', 'bump-grind', 'body-roll-heels'],
    sections: [
      {
        titre: "Qu'est-ce qu'une isolation ?",
        contenuMarkdown: `J'ai d'abord appris l'isolation en jazz, sans vraiment comprendre ce que je faisais. Ce n'est que plus tard, en découvrant le moderne, que j'ai compris la profondeur du concept.

Une **isolation** est le mouvement d'une partie spécifique du corps — tête, épaule, cage thoracique, bassin — *sans entraîner les autres parties*. Si tu bouges ton bassin vers la droite sans bouger ton buste, c'est une isolation réussie. Si ton buste suit, c'est une *rotation* ou une *inclinaison* du tronc entier — quelque chose de différent.

L'isolation exige deux capacités simultanées :
1. La **mobilité** de la partie qui bouge — les articulations doivent avoir la plage de mouvement nécessaire.
2. Le **gainage** des parties qui ne bougent pas — elles doivent rester stables sans se contracter de façon excessive.

C'est ce paradoxe — liberté d'un côté, tenue de l'autre — qui rend l'isolation difficile et fascinante.

**Les origines** sont à chercher dans les **danses d'Afrique subsaharienne**, où le polycentrisme corporel est une caractéristique fondamentale : le corps n'est pas un tout unifié qui se déplace ensemble, mais une collection de parties qui peuvent dialoguer indépendamment. Cette conception a traversé l'Atlantique avec la diaspora africaine et irrigué le moderne américain, le jazz, le hip-hop, le burlesque — et par extension, les heels.`,
      },
      {
        titre: "Quatre disciplines, quatre vocabulaires",
        contenuMarkdown: `Ce qui me fascine, c'est de voir comment chaque discipline a développé son propre système d'isolation — avec des valeurs et des finalités distinctes.

**Moderne** : Martha Graham a intégré le travail d'isolation dans sa technique via la *contraction et le release* — des isolations profondes du tronc. Mais c'est **Alvin Ailey**, **José Limón** et la tradition d'Afro-American Modern Dance qui ont poussé le polycentrisme au cœur du vocabulaire. La *succession corporelle* (onde qui traverse le corps segment par segment) est une isolation en mouvement.

**Jazz** : les isolations jazz sont directes, précises, souvent percussives. Épaule qui pulse, tête qui checke, cage thoracique qui se déplace de côté. Elles sont liées à la musique — chaque isolation vient sur un accent, un beat. L'*eight-count* jazz structure les isolations en séquences.

**Burlesque** : le *shimmy* (vibration rapide des épaules ou de la poitrine), le *bump* (coup de hanche vers le côté ou vers l'avant) et le *grind* (rotation du bassin) sont les isolations signatures. Elles ont une finalité théâtrale et sensuelle — révéler, mettre en valeur, jouer.

**Heels** : le *hip roll* (rotation circulaire du bassin) et le *body roll heels* (onde partant du bas du dos vers les épaules) sont les isolations de base. La contrainte du talon haut modifie la mécanique — le centre de gravité est déplacé vers l'avant, ce qui change le point de départ de l'isolation du bassin.`,
      },
    ],
  },

  {
    id: 'transversal-bassin-centre',
    titre: "Le bassin au centre",
    resume: "Dans les danses d'origine africaine et africaine-américaine, le bassin est un centre expressif majeur. Cet héritage traverse le moderne, le jazz, le burlesque et les heels avec des vocabulaires distincts mais une même vérité : le bas du corps a autant à dire que le haut.",
    disciplines: ['moderne', 'jazz', 'burlesque', 'heels'],
    termesAbordes: ['travail-bassin', 'polycentrisme', 'hip-roll', 'shimmy', 'bump-grind', 'body-roll-heels'],
    sections: [
      {
        titre: "L'héritage : pourquoi le bassin ?",
        contenuMarkdown: `Dans la tradition chorégraphique européenne classique, le bassin est neutre — il ne « parle » pas, il sert de fondation stable. La danseuse classique tient ses hanches carrées, son bassin centré, sa colonne organisée. Le bassin n'est pas un centre expressif ; c'est un point d'ancrage.

Dans les **danses d'Afrique subsaharienne**, c'est exactement l'inverse. Le bassin est vivant, articulé, expressif. Les percussions parlent aux hanches. Les cérémonies, les fêtes, les rituels passent par le mouvement du bas du corps. Cette conception du corps comme multiple, polycentrique, est fondamentalement différente de l'idéal classique européen.

Avec la diaspora africaine, cette conception a traversé l'Atlantique et imprégné les musiques et danses africaines-américaines : le blues, le jazz, le soul, le gospel — et les formes de danse qui leur correspondent. Les *ring shouts* du XIXe siècle, les danses de juke-joint, le Charleston des années 1920 — tous permettent au bassin d'être acteur.

**Katherine Dunham** (1909–2006) est la chercheuse et chorégraphe qui a théorisé et enseigné cet héritage. Elle a voyagé dans les Caraïbes, en Haïti et en Afrique pour étudier ces traditions, puis les a intégrées dans sa technique : la *Dunham Technique*, qui met le bassin au centre du travail corporel et a influencé tous les styles de jazz, de moderne et de comédie musicale américains.`,
      },
      {
        titre: "Le bassin dans quatre disciplines",
        contenuMarkdown: `Voilà comment cet héritage se décline concrètement dans les quatre disciplines de ce parcours.

**Moderne** : la *technique Horton* (développée par Lester Horton, maître d'Alvin Ailey) fait du travail du bassin un élément central — les *lateral T positions*, les *hinge-backs*, les *flat backs* sont tous liés à la mobilité et à la stabilité du bassin. Le *polycentrisme* de la tradition Dunham est explicitement intégré dans la Modern Jazz Dance.

**Jazz** : le *travail de bassin* en jazz se manifeste dans le groove. Un corps qui n'engage pas ses hanches ne groovera pas — la légère oscillation des hanches sur le temps (dans la marche jazz, dans le jazz walk) est ce qui donne la qualité « balancée » caractéristique. Le hip roll est l'isolation du bassin poussée à son maximum expressif.

**Burlesque** : le *bump* (coup de hanche) et le *grind* (rotation continue du bassin) sont les outils de base du vocabulaire burlesque. Hérités des danses de club des années 1920-1940 et des *bump-and-grind* shows qui ont précédé le striptease moderne, ils ont une charge théâtrale et sensuelle explicite.

**Heels** : le bassin est peut-être l'élément le plus expressif de la danse sur talons. Le *hip roll* en heels est différent mécaniquement d'un hip roll pieds à plat — le talon projette le poids vers l'avant, ce qui modifie la position de la colonne lombaire et change l'amplitude de la rotation. La maîtrise de cette différence est ce qui fait la qualité du hip roll en heels.`,
      },
    ],
  },

  // ─── PARCOURS : TOURS ET ROTATIONS ───────────────────────────────────────

  {
    id: 'transversal-mecanique-rotation',
    titre: "Comprendre la rotation",
    resume: "Que ce soit une pirouette en classique, un molinete en tango ou un spin sur la barre, la rotation obéit aux mêmes lois physiques : axe vertical, élan initial, conservation du moment angulaire. La physique ne change pas d'une discipline à l'autre — seuls le style et la préparation diffèrent.",
    disciplines: ['classique', 'jazz', 'tango-argentin', 'pole-dance', 'heels'],
    termesAbordes: ['pirouette', 'fouette', 'chaines', 'pirouette-jazz', 'pivot-tango', 'spin-pole', 'heel-turn'],
    sections: [
      {
        titre: "La physique du tour",
        contenuMarkdown: `J'ai eu une révélation lors d'un cours de physique appliquée à la danse : tous les tours, dans toutes les disciplines, obéissent aux mêmes lois. Comprendre ces lois, c'est comprendre pourquoi certaines choses marchent et d'autres pas.

**Le moment d'inertie** est la résistance d'un corps à la rotation. Quand tu ramènes tes bras vers le corps pendant une pirouette, tu réduis ton moment d'inertie — et selon la loi de conservation du moment angulaire, tu tournes plus vite. C'est la même physique qu'un patineur qui ramène ses bras sur une pirouette de glace.

**L'axe vertical** est fondamental. Pour qu'un tour soit contrôlé, l'axe de rotation doit être parfaitement vertical. Un axe incliné produit un tour qui « part » vers un côté — et tu te retrouves à courir après ton équilibre.

**L'élan initial** crée le moment angulaire que tu vas ensuite conserver ou modifier. En classique, il vient du *préparatif* (quatrième ou cinquième position en demi-plié, puis impulsion). En jazz, il vient souvent d'un pas de côté ou d'un préparatif de bras. En tango, le pivot vient du transfert de poids du partenaire qui initie la rotation.

**La friction** est ton alliée pour démarrer (le pied doit « accrocher » le sol pour créer l'élan), et ton ennemie pendant le tour si ta chaussure est trop rugueuse. C'est pourquoi les sols de danse sont en bois traité, et pourquoi les chaussures de danse ont des semelles spécifiques.`,
      },
      {
        titre: "Le spotting : la technique universelle du regard",
        contenuMarkdown: `Voilà une technique commune à presque tous les tours de toutes les disciplines — et souvent la première chose qu'on enseigne, parce qu'elle résout immédiatement deux problèmes : le vertige et la perte d'axe.

Le **spotting** consiste à fixer un point précis dans l'espace pendant le tour. Concrètement :
1. Au début du tour, tes yeux fixent un point devant toi (un point sur le mur, une fenêtre, le fond de scène).
2. Pendant que ton corps tourne, ta tête reste fixée sur ce point le plus longtemps possible.
3. Au dernier moment, ta tête « claque » rapidement dans le sens de la rotation pour rattraper le corps.
4. Tes yeux reviennent immédiatement sur le même point.

Ce mécanisme accomplit deux choses :
- Il **stabilise l'axe** en donnant au cerveau une référence fixe.
- Il **prévient le vertige** : les organes vestibulaires de l'oreille interne s'habituent à la rotation, mais le fait de fixer un point leur permet de se « recaler » entre chaque tour.

**En classique** : le spot est enseigné très tôt, dès les premières pirouettes. En professionnel, les grands fouettés du Lac des Cygnes (32 fouettés enchaînés) sont rendus possibles par un spotting millimétré.

**En jazz** : mêmes principes, mais le spot peut être fait sur le public ou sur un partenaire — il a parfois une valeur théâtrale (tu *regardes* quelqu'un pendant que tu tournes).

**En heels** : le spotting est plus difficile à cause du bassin projeté en avant qui modifie l'axe naturel du corps. Il faut un gainage abdominal plus actif pour compenser.

**En pole** : pour les spins, le spotting est souvent remplacé par une conscience du plafond ou du sol comme points de référence — la tête peut s'incliner pendant un spin en dehors de la verticale stricte.`,
      },
    ],
  },

  {
    id: 'transversal-tours-disciplines',
    titre: "Un tour, mille façons",
    resume: "La pirouette classique, le pivot turn jazz, le molinete du tango, le spin pole, le heel turn — même principe de rotation, cinq vocabulaires distincts. Ce cours compare concrètement la façon dont chaque discipline construit, exécute et stylise ses tours.",
    disciplines: ['classique', 'jazz', 'tango-argentin', 'pole-dance', 'heels'],
    termesAbordes: ['pirouette', 'fouette', 'chaines', 'pirouette-jazz', 'barrel-turn', 'pivot-turn', 'pivot-tango', 'molinete', 'ocho', 'spin-pole', 'heel-turn'],
    sections: [
      {
        titre: "La pirouette et ses cousins : tours sur place",
        contenuMarkdown: `La pirouette est la forme canonique du tour en danse — mais chaque discipline a sa propre version de ce geste.

**Pirouette classique** : sur une jambe, l'autre en retiré (pied à hauteur du genou). L'axe est strictement vertical. La préparation se fait en quatrième ou cinquième position en demi-plié, l'impulsion vient des deux jambes et des bras qui « ferment ». La pirouette classique est en dehors (*en dehors* : la jambe tourne dans la même direction que le genou libre) ou en dedans. Les professionnels en font 3, 5, 8 — mais une belle pirouette simple vaut toujours mieux qu'une série instable.

**Pirouette jazz** : l'idée est la même mais le style change tout. La jambe libre peut être en retiré, en attitude, en passé — et les bras sont plus libres, plus expressifs. La pirouette jazz peut partir d'une préparation très différente de celle du classique : d'un pas chassé, d'un ball-change, d'une pose basse.

**Fouetté** : techniquement, le fouetté rond de jambe en tournant est une pirouette relancée à chaque tour par le fouet de la jambe libre en demi-cercle. Les 32 fouettés enchaînés du Lac des Cygnes sont l'une des démonstrations de virtuosité les plus spectaculaires du répertoire classique.

**Heel turn** : tour en heels sur deux pieds (ou un), souvent en avançant — le talon pivote sur le sol pendant que le corps tourne. La mécanique est très différente d'une pirouette : pas de retiré, pas d'impulsion vers le haut, mais un glissement contrôlé sur le talon.`,
      },
      {
        titre: "Tours en déplacement : voyager en tournant",
        contenuMarkdown: `Les tours en déplacement sont, à mon avis, encore plus intéressants que les tours sur place — parce qu'ils traversent l'espace et créent un mouvement visuel d'une autre nature.

**Chaînes** (classique) : série de demi-tours enchaînés qui voyagent en ligne droite ou en diagonale. Chaque tour est un demi-tour sur la demi-pointe — pied droit, pied gauche, alternativement. Les chaînes peuvent aller très vite et donnent une impression de tourbillon qui traverse la scène.

**Pivot turn jazz** : tour de 180° ou 360° en déplacement, sur un ou deux appuis. Contrairement à la chaîne qui tourne sur la demi-pointe, le pivot turn peut s'exécuter pied à plat, ce qui lui donne un ancrage au sol plus marqué. Il est souvent utilisé pour changer de face ou créer de l'élan vers une figure suivante.

**Molinete** (tango argentin) : le suiveur effectue un pas croisé en arrière, un pas latéral, un pas croisé en avant — en décrivant un cercle autour du guideur. Ce n'est pas un tour du corps sur lui-même, mais un *tour autour du partenaire*. La rotation du torse du suiveur lui permet de toujours rester face au guideur pendant le déplacement. C'est une des figures les plus élégantes du tango.

**Spin pole** : la rotation sur la barre peut être librement tournante (*spinning pole*) ou fixe. Sur une barre en rotation libre, le corps commence avec de l'élan et tourne avec la barre. Sur une barre fixe, c'est le corps qui crée la rotation par son positionnement et son élan — et la gravité fait le reste. La maîtrise du spin pole demande de comprendre comment son centre de gravité affecte la vitesse de rotation.`,
      },
    ],
  },

  // ─── PARCOURS : PRÉSENCE ET IDENTITÉ SCÉNIQUE ─────────────────────────────

  {
    id: 'transversal-identite-scene',
    titre: "Qui es-tu sur scène ?",
    resume: "Le cabaret a ses meneuses. Le burlesque a ses alter-ego et noms de scène. Le jazz Broadway a ses archétypes dramatiques. Les heels ont leurs icônes. Chaque discipline de spectacle t'invite à construire une identité scénique — et cette construction est une vraie technique, pas une improvisation.",
    disciplines: ['jazz', 'cabaret', 'burlesque', 'heels'],
    termesAbordes: ['character-burlesque', 'nom-scene-burlesque', 'pose-burlesque', 'timing-burlesque', 'meneuse-revue', 'sous-style-broadway', 'arm-styling', 'frame-heels', 'sass'],
    sections: [
      {
        titre: "Le personnage comme technique",
        contenuMarkdown: `J'ai mis du temps à comprendre que construire un personnage scénique n'est pas une question de talent inné ou de « naturel » — c'est une technique qui s'apprend, s'affine et se travaille exactement comme une pirouette.

**En burlesque**, cette technique est très codifiée. Chaque performer a un *nom de scène* (nom-scene-burlesque) — un alter ego qui n'est pas la personne dans la vie quotidienne, mais un *personnage* avec ses propres caractéristiques physiques, psychologiques et stylistiques. Ce personnage a des poses signatures (pose-burlesque), un rapport au public spécifique, un style de costume et de maquillage. Gypsy Rose Lee n'était pas Lee Ann Hovick, son vrai nom — elle était une invention artistique.

**En cabaret**, la meneuse de revue (meneuse-revue) est un archétype très précis : autorité naturelle, sourire inaltérable, énergie débordante, capacité à diriger une ligne de danseuses tout en paraissant légère. Ce sont des qualités qu'on développe — pas qu'on possède d'emblée.

**En jazz Broadway**, le personnage vient du *subtext* dramatique — de qui est ce personnage dans l'histoire ? Bob Fosse travaillait intensément avec ses interprètes sur la psychologie des personnages avant même d'aborder la technique.

**En heels**, le concept de *frame* (la façon dont tu te présentes toi-même dans l'espace) et de *sass* (cette attitude souveraine, légèrement insolente) sont des qualités scéniques qu'on construit délibérément — par le regard, la posture, la façon de marcher.`,
      },
      {
        titre: "Construire son identité scénique",
        contenuMarkdown: `Comment construire concrètement une identité scénique, quel que soit ton style ?

**1. Observer et analyser.** Regarde des performers que tu admires — pas pour les copier, mais pour *décortiquer* ce qui crée leur présence. Est-ce leur regard ? La qualité de leurs bras ? Leur façon d'occuper l'espace avant même de bouger ? Leur rapport à l'humour ou au drame ?

**2. Trouver ton registre.** Chaque discipline a des registres différents. En burlesque : glamour, comédie, dark burlesque, vintage, néo. En heels : fierce, sensuel, lyrical, commercial. En jazz Broadway : comédie, drame, romance, satire. Ton registre naturel est celui qui coûte le moins d'efforts à tenir dans la durée.

**3. Construire des détails.** L'identité scénique n'est pas une déclaration générale — c'est une collection de détails précis. En burlesque, ce sont les poses, le timing d'un regard, la façon de tenir un accessoire. En heels, c'est la qualité exacte de ta marche, l'angle de tes bras, la façon dont tu occupes le silence. En cabaret, c'est le moment où tu croises le regard d'un spectateur dans la salle.

**4. La répétition forge le personnage.** Tu ne trouveras pas ton identité scénique en cherchant — tu la trouveras en la *pratiquant*. Joue le personnage en cours, en répétition, dans des contextes différents. Il s'affine avec le temps.

La différence entre un performer débutant et un performer accompli, ce n'est souvent pas la technique — c'est la certitude tranquille avec laquelle il *habite* son personnage.`,
      },
    ],
  },

  {
    id: 'transversal-habiter-scene',
    titre: "Habiter la scène",
    resume: "Le regard, le timing, le silence, l'espace — ce sont les outils de la présence scénique dans toutes les disciplines de spectacle. Ce cours explore ce qui se passe entre les mouvements, dans les pauses, dans les regards : l'art d'être là, vraiment, sur scène.",
    disciplines: ['jazz', 'cabaret', 'burlesque', 'heels'],
    termesAbordes: ['presentation-scenique', 'rapport-public', 'timing-burlesque', 'freeze-jazz', 'etat-de-disponibilite', 'intention-artistique', 'frame-heels', 'sass'],
    sections: [
      {
        titre: "Le regard : ton premier outil de connexion",
        contenuMarkdown: `Le regard est peut-être l'outil de présence scénique le plus puissant — et le plus négligé en cours technique, où on se concentre sur les jambes, les bras, les sauts. J'ai passé des années à ne pas savoir quoi faire de mes yeux.

**La règle fondamentale** : le regard ne suit pas le corps — il le précède ou l'accompagne avec intention. Regarde où tu vas *avant* d'y aller. Fixe le public *pendant* (pas après) ta pose. Ton regard dit au spectateur ce qu'il doit regarder.

**En burlesque**, le regard est un outil de jeu dramatique. Le *tease* commence par un regard — vers l'accessoire, vers le spectateur, vers sa propre main. Ce regard *signale* l'intention sans la révéler encore. La maîtrise du regard, c'est la maîtrise du suspense.

**En jazz Broadway**, le regard crée le *subtext* — ce qui se passe à l'intérieur du personnage que le corps exprime. Dans *Chicago* ou *Cabaret*, les yeux des performers racontent une histoire parallèle à la chorégraphie.

**En heels**, le *frame* commence par le regard. Avant de bouger, tu regardes — avec intention, avec direction. Ce pré-regard « installe » ta présence dans l'espace.

**En cabaret**, la meneuse de revue doit avoir un regard qui *embrasse* la salle entière — ni trop haut, ni trop bas, ni fixé sur un seul point. C'est un regard qui inclut tout le public simultanément.

Exercice pratique : refais une séquence que tu connais bien, en te concentrant uniquement sur ton regard. Où est-il à chaque temps ? Ce travail seul peut transformer complètement la lisibilité d'une chorégraphie.`,
      },
      {
        titre: "Le timing et le silence : l'art de la pause",
        contenuMarkdown: `Les musiciens de jazz ont un proverbe : *"Ce n'est pas les notes que tu joues qui comptent, c'est celles que tu ne joues pas."* En danse, c'est identique. La pause, le silence, l'arrêt sont des moments de présence intense — pas des vides.

**Le freeze jazz** est l'exemple le plus clair : l'arrêt net sur un accent musical fort. Le corps s'immobilise instantanément — mais reste *vivant*, habité, tendu. Un bon freeze parle autant qu'un grand saut. Ce qui rend un freeze médiocre : le corps qui se relâche, le regard qui se perd, la position qui n'est pas pensée.

**Le timing burlesque** est l'art de *savoir quand*. Quand retirer le gant. Quand regarder le public. Quand ne pas bouger. Les grandes burlesqueurs — Dita Von Teese, Dirty Martini, Immodesty Blaize — sont des maîtresses du timing. Un *reveal* trop tôt casse le tease. Un *reveal* au bon moment fait lever la salle.

**La pause cabaret** : entre deux numéros, entre deux séquences, la meneuse de revue tient le plateau dans le silence. Comment ? Par sa posture, son regard, la légèreté apparente de sa présence. C'est la différence entre une présence scénique et une absence avec costume.

**L'état de disponibilité** (improvisation) est la forme la plus développée de ce rapport au silence — être là, entier, sans anticipation, sans préoccupation parasite. Prêt à réagir à tout. C'est ce que Pina Bausch demandait à ses interprètes, ce que les maîtres de tango demandent à leurs suiveurs : être là, maintenant, complètement.`,
      },
    ],
  },
]
