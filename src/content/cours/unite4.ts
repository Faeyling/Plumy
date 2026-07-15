import type { Cours } from '../schema'

export const coursUnite4: Cours[] = [
  {
    id: 'intro-classique',
    titre: 'La classe de danse classique — structure et vocabulaire',
    resume: "Comprendre la logique d'un cours de danse classique de A à Z : barre, milieu, adage, allegro, pirouettes — pourquoi cet ordre, comment chaque exercice prépare le suivant. J'ai des pages et des pages là-dessus dans mon carnet.",
    disciplines: ['classique'],
    termesAbordes: [
      'barre-classique', 'milieu-classique', 'plie', 'tendu', 'degage',
      'rond-de-jambe', 'developpe', 'grand-battement', 'arabesque', 'attitude',
      'pirouette', 'allegro', 'jete', 'assemble', 'pas-de-bourree',
    ],
    sections: [
      {
        titre: 'Une discipline née à la cour du Roi-Soleil',
        contenuMarkdown: `J'ai une vraie passion pour l'histoire de la danse classique — parce que comprendre d'où vient cette technique, c'est comprendre pourquoi elle est ce qu'elle est aujourd'hui. Et cette histoire commence avec un roi qui dansait lui-même.

**Louis XIV — le fondateur**
Louis XIV (1638–1715) n'était pas juste le commanditaire du ballet — il était danseur. Il a tenu les rôles principaux dans des ballets de cour pendant des années, notamment le Roi-Soleil dans *Ballet de la Nuit* (1653). En 1661, il fonde l'**Académie royale de danse** — la première institution dédiée à la danse dans le monde occidental. Le vocabulaire français qu'on utilise encore aujourd'hui vient directement de là : plié, arabesque, jeté, pirouette — partout dans le monde, les professeurs de ballet enseignent en français. C'est le legs de Louis XIV.

**Le ballet romantique — Marie Taglioni et les pointes**
En 1832, **Marie Taglioni** crée *La Sylphide* à Paris — et pour la première fois, une danseuse se tient sur la pointe des pieds. Les **chaussons de pointe** naissent de cette innovation, et avec eux toute une esthétique de légèreté : sylphides, créatures aériennes, wilis. J'ai du mal à m'imaginer ce que ça a dû être de voir ça pour la première fois. Une révolution esthétique totale.

Le romantisme apporte aussi les grands tutus blancs, les décors de lune et de forêt, les thèmes de l'amour impossible entre le monde réel et l'au-delà. C'est l'époque de *Giselle* (1841) et des ballets "blancs".

**L'âge d'or — Petipa et le répertoire classique**
À la fin du XIXe siècle, **Marius Petipa** (1818–1910) à Saint-Pétersbourg codifie ce qu'on appelle maintenant le "grand ballet classique" : *Lac des cygnes*, *La Belle au bois dormant*, *Casse-Noisette* (avec Tchaïkovski). La structure en actes, les pas de deux, les variations solistes, les corps de ballet — tout ça sort de Petipa. Quand tu apprends la technique classique aujourd'hui, tu apprends ce que Petipa a codifié.

**Anna Pavlova — la danseuse qui a fait le tour du monde**
**Anna Pavlova** (1881–1931) est peut-être la danseuse qui a le plus contribué à populariser la danse classique au niveau mondial. Avec sa compagnie, elle a tourné dans des pays où le ballet n'existait pas encore — portant notamment *La mort du cygne* dans des salles qui n'avaient jamais vu un ballet. Une ambassadrice absolue.

**Les Ballets Russes — la révolution du XXe siècle**
En 1909, **Sergei Diaghilev** crée les **Ballets Russes** à Paris avec **Nijinsky**, **Fokine**, et des compositeurs comme Stravinsky. Ils cassent les codes esthétiques du XIXe siècle : *Le Sacre du printemps* (1913) déclenche un scandale au Théâtre des Champs-Élysées. Le ballet devient avant-garde.

**Rudolf Noureev — le passage à l'Ouest**
En 1961, **Rudolf Noureev** fait défection à Paris plutôt que de rentrer en URSS. Sa présence scénique, sa technique et sa collaboration avec Margot Fonteyn redéfinissent ce que peut être un danseur étoile. Plus tard, il prend la direction du Ballet de l'Opéra de Paris (1983–1989) et y renouvelle profondément le répertoire.

**Les grandes maisons aujourd'hui**
Les grandes compagnies de ballet sont souvent des institutions d'État :

| Compagnie | Ville | Fondation |
|-----------|-------|-----------|
| Ballet de l'Opéra de Paris | Paris | 1669 (sous Louis XIV) |
| Ballet du Bolchoï | Moscou | 1776 |
| Ballet du Mariinsky | Saint-Pétersbourg | 1783 |
| Royal Ballet | Londres | 1931 |
| American Ballet Theatre | New York | 1937 |

Le financement public est important : il permet à ces compagnies de maintenir un répertoire, de former des danseurs sur la durée, et de ne pas dépendre uniquement du marché.

> Ce que j'aime dans cette histoire, c'est qu'elle montre que la danse classique n'a jamais été figée — elle s'est transformée à chaque siècle, en absorbant les révolutions de son temps. Elle continue.`,
        pointsCles: [
          "Louis XIV (1661) fonde l'Académie royale de danse — d'où vient le vocabulaire français encore universel.",
          "Marie Taglioni (1832) invente les pointes dans La Sylphide — révolution esthétique totale.",
          "Petipa à Saint-Pétersbourg codifie le grand ballet classique avec Tchaïkovski.",
          "La danse classique s'est transformée à chaque siècle — elle n'a jamais été figée.",
        ],
      },
      {
        titre: 'Les trois écoles de ballet et la hiérarchie dans la compagnie',
        contenuMarkdown: `Un des aspects qui me fascine dans la danse classique, c'est qu'il n'existe pas une seule façon d'enseigner le même vocabulaire — il en existe plusieurs, chacune avec sa philosophie, son accent, ses exigences propres. Dans mon carnet, je les appelle "les trois ADN du ballet".

**L'école française — l'élégance et l'épaulement**
La plus ancienne — directement issue de Louis XIV et de l'Académie royale de danse. L'école française valorise :
- L'élégance et la discrétion des bras (port de bras doux, jamais forcé)
- L'**épaulement** raffiné : la rotation subtile des épaules par rapport aux hanches qui donne cette ligne si reconnaissable
- La légèreté, la grâce, la clarté des lignes
- Une certaine réserve dans l'expression, une noblesse dans le geste

C'est le style qui imprègne encore aujourd'hui le Ballet de l'Opéra de Paris. Quand tu regardes un danseur de l'Opéra, tu reconnais cette qualité-là.

**L'école italienne — la virtuosité**
Développée autour du travail d'**Enrico Cecchetti** (1850–1928), maître de ballet légendaire qui a formé des danseurs comme Nijinsky et Pavlova. La **Méthode Cecchetti** met l'accent sur :
- La **batterie** précise : entrechats, cabrioles, beaten steps
- L'attaque du mouvement et le dynamisme
- Une virtuosité technique clairement revendiquée

La Méthode Cecchetti est encore enseignée dans le monde entier, avec des examens officiels jusqu'au niveau professionnel.

**L'école russe (méthode Vaganova) — l'amplitude et l'expressivité**
La grande synthèse. **Agrippina Vaganova** (1879–1951), ancienne ballerine du Mariinsky, a codifié l'enseignement de l'école russe dans un traité publié en 1934 qui reste une référence mondiale. Elle combine l'élégance française et la virtuosité italienne, en y ajoutant :
- Une **amplitude** exceptionnelle (bras, dos, jambes)
- Un port de bras expressif et sculptural
- Une qualité dramatique et émotionnelle du mouvement
- La puissance et l'énergie propres à la tradition russe

C'est l'école du Bolchoï et du Mariinsky, et de nombreux danseurs considérés parmi les plus grands du XXe siècle.

**L'école américaine — Balanchine et la vitesse**
**George Balanchine** (1904–1983), lui-même formé à l'école russe, a développé aux États-Unis un style inimitable : vitesse, musicalité extrême, lignes allongées, et une façon de traiter le corps féminin comme un instrument précis. La **Méthode Balanchine** met en avant des chevilles très tendues, des lignes épurées, un rapport quasi-mathématique à la musique. C'est le style du New York City Ballet, qu'il a cofondé. Quand tu regardes du NYCB, tu comprends instantanément de quoi je parle.

**L'école danoise — le style Bournonville**
**August Bournonville** (1805–1879), danseur et chorégraphe danois formé à Paris par Auguste Vestris, a créé un style très personnel : ballon naturel (impression de légèreté et de suspension), petite batterie précise, pas enchantés et vivants. Son répertoire — *La Sylphide* (version danoise, 1836), *Napoli* — est encore interprété par le Royal Danish Ballet de la façon dont il l'a codifié. Une tradition ininterrompue depuis presque deux siècles.

**La Royal Academy of Dance (RAD) — la méthode internationale**
Créée en 1920 par un consortium de danseurs européens (anglais, français, italiens, russes, danois), la **méthode RAD** combine les grandes écoles pour former un standard international. Elle est aujourd'hui enseignée par **12 000 membres dans 70 pays** et propose des examens officiels de la base jusqu'au niveau professionnel. Si tu as grandi dans une école de danse en dehors des grandes traditions nationales, tu as probablement appris selon cette méthode.

**La hiérarchie dans une grande compagnie**
Dans les grandes compagnies à la française, les danseurs progressent selon une hiérarchie stricte — chaque échelon représente des années de travail. J'ai toujours trouvé ça fascinant : c'est une vie entière structurée par la progression artistique.

| Rang | Rôle principal |
|------|----------------|
| **Quadrille** | Corps de ballet — ensembles, formations |
| **Coryphée** | Mène des groupes, petits rôles solistes |
| **Sujet** | Rôles solistes de second plan |
| **Premier danseur / Première danseuse** | Grands rôles |
| **Étoile** | Niveau suprême, nommé(e) par le directeur |

À l'Opéra de Paris, le titre d'Étoile est décerné par le directeur — parfois en fin de représentation, devant le public. La danseuse ou le danseur apprend sa nomination en sortant de scène, sous les applaudissements. C'est un des moments les plus émouvants de la vie d'une compagnie.

**Le Grand pas de deux — la structure de la rencontre**
Dans le répertoire classique, le grand pas de deux suit une structure quasi-immuable :
1. **Entrée** : les deux partenaires arrivent ensemble
2. **Adage** : danse lente et intimiste, portés, équilibres — la relation se révèle
3. **Variation masculine** : solo technique
4. **Variation féminine** : solo technique
5. **Coda** : final virtuose à deux

Cette structure est celle du *Lac des cygnes*, de *La Belle au bois dormant*, de *Giselle*, de *Don Quichotte* — pratiquement tous les grands ballets du répertoire.

> Ce que j'aime dans les trois écoles, c'est qu'elles prouvent qu'il n'y a pas une seule façon d'être "classique" — qu'à l'intérieur du même vocabulaire codifié, des cultures et des philosophies différentes ont laissé leur empreinte. La technique classique est universelle dans ses fondements, diverse dans ses expressions.`,
        pointsCles: [
          "École française = élégance et épaulement ; italienne (Cecchetti) = virtuosité ; russe (Vaganova) = amplitude.",
          "Balanchine crée un style américain : vitesse, musicalité extrême, rapport quasi-mathématique à la musique.",
          "À l'Opéra de Paris, on progresse de Quadrille à Étoile — chaque échelon représente des années de travail.",
          "Le grand pas de deux suit une structure quasi-immuable : entrée, adage, variations, coda.",
        ],
      },
      {
        titre: 'La logique du cours classique',
        contenuMarkdown: `Ce que j'ai trouvé fascinant en découvrant le cours classique, c'est que rien n'est aléatoire. Chaque exercice prépare le suivant — c'est une architecture pensée sur des siècles de pratique pédagogique.

**La structure universelle :**
1. **Échauffement** (5–10 min) : mobilisation générale, souvent avant la barre
2. **La barre** (30–45 min) : exercices tenus à la barre, dans un ordre logique
3. **Le milieu** (20–30 min) : reprise des exercices sans appui + adage
4. **L'allegro** (15–20 min) : petit allegro puis grand allegro
5. **Pointes** (10–15 min, si applicable) : travail technique en chaussons de pointe
6. **Révérence** (2–3 min) : salut final, clôture du cours

**Pourquoi cet ordre ?**
Chaque section prépare la suivante :
- La barre chauffe et aligne le corps
- Le milieu transfère les acquis de la barre sans appui
- L'adage développe le contrôle et l'amplitude
- Le petit allegro réveille la vivacité
- Le grand allegro libère la puissance

> La barre n'est pas juste de l'échauffement. C'est là que se construisent les fondations de toute la technique — et les professionnels y passent toute leur vie. Ça m'a mis du temps à comprendre ça.`,
        pointsCles: [
          "L'ordre du cours n'est pas arbitraire : barre → milieu → adage → allegro → pointes → révérence.",
          "La barre chauffe et aligne ; le milieu transfère sans appui ; l'allegro libère la puissance.",
          "La barre n'est pas juste de l'échauffement — c'est là que se construisent les fondations.",
          "Les professionnels passent toute leur vie à la barre : comprendre ça change tout.",
        ],
      },
      {
        titre: 'La barre — exercices fondamentaux',
        contenuMarkdown: `Si tu retiens une chose sur la barre, c'est celle-ci : l'ordre des exercices n'est pas arbitraire. Chaque exercice prépare le suivant dans une logique irréprochable.

**La barre suit toujours le même ordre :**

| Ordre | Exercice | Tempo | Travail principal |
|-------|----------|-------|------------------|
| 1 | Pliés (demi et grands) | Lent | Échauffement, alignement |
| 2 | Battements tendus | Modéré | Articulation du pied |
| 3 | Battements dégagés | Rapide | Vitesse, articulation |
| 4 | Ronds de jambe par terre | Lent–Modéré | Rotation de hanche |
| 5 | Battements fondus | Modéré | Coordination, fluidité |
| 6 | Battements frappés | Vif | Vivacité, impact |
| 7 | Ronds de jambe en l'air | Modéré | Mobilité coxo-fémorale |
| 8 | Développés / Adage | Très lent | Amplitude, contrôle |
| 9 | Grands battements | Rapide | Puissance, amplitude max |

**Ta position à la barre :**
- Main intérieure posée légèrement (jamais agrippée — la barre est ton appui, pas ta béquille)
- Corps perpendiculaire ou légèrement de biais selon l'exercice
- Bras extérieur dans la position appropriée (2ème, 5ème...)
- Poids bien centré sur les deux pieds

**En retournant :**
La séquence se répète de l'autre côté. Ton côté faible mérite autant d'attention que ton côté fort — j'insiste là-dessus.`,
        pointsCles: [
          "L'ordre des exercices suit une logique irréprochable : pliés → tendus → dégagés → ... → grands battements.",
          "La main intérieure posée légèrement — la barre est ton appui, pas ta béquille.",
          "Les grands battements (dernier exercice) libèrent la puissance maximale après un échauffement complet.",
          "Ton côté faible mérite autant d'attention que ton côté fort — j'insiste là-dessus.",
        ],
      },
      {
        titre: 'Les cinq positions et le turn-out',
        contenuMarkdown: `Le turn-out est le fondement de toute la technique classique — et aussi l'une des choses les plus mal comprises que j'aie rencontrées dans la danse.

**Ce qu'il permet :**
- L'ouverture des jambes dans les 5 positions
- Le travail à la seconde (2ème position)
- La stabilité dans les équilibres
- L'esthétique de la ligne classique

**Les 5 positions des pieds :**
La 1ère et la 2ème sont les plus utilisées pour commencer. La 5ème est la position "naturelle" du mouvement avancé — et elle demande des années de travail pour être vraiment propre.

- **1ère :** Talons joints, pieds tournés vers l'extérieur. La position d'ancrage.
- **2ème :** Pieds écartés d'une largeur de pied, talons au sol, turn-out maintenu. Base des pliés et du travail en seconde.
- **3ème :** Le talon du pied avant se place au milieu du pied arrière. Position d'apprentissage — moins de turn-out requis que la 5ème, idéale pour travailler la coordination.
- **4ème :** Un pied devant l'autre avec un espace entre eux, talon avant posé au sol. Position de préparation des pirouettes — peut partir de la 1ère ou de la 5ème.
- **5ème :** Le talon du pied avant dépasse les orteils du pied arrière. La plus exigeante — turn-out profond requis, plusieurs années de pratique pour être vraiment propre.

**Les 5 positions des bras :**
Les bras ne sont pas un accessoire — ils font partie de l'architecture entière de la ligne classique. J'insiste là-dessus à chaque fois que j'en parle.

- **1ère :** Les deux bras forment un ovale arrondi devant le ventre, coudes légèrement relevés, paumes orientées vers soi. Point de départ naturel pour presque tout.
- **2ème :** Bras ouverts sur les côtés, légèrement en avant du plan du corps, coudes relevés, paumes vers le bas. "L'horizon" du corps.
- **3ème :** Un bras en 5ème (en haut), l'autre en 2ème (sur le côté). Position asymétrique, souvent de transition.
- **4ème :** Un bras en 1ère (devant), l'autre en 5ème (en haut). Utilisée fréquemment en préparation de pirouettes.
- **5ème :** Les deux bras en haut, formant un ovale au-dessus de la tête. Le critère que j'utilise : si tu vois clairement tes mains en regardant droit devant toi, tes bras sont trop ouverts — ils doivent être juste à la limite de ton champ de vision.

**⚠️ Point crucial que je ne peux pas assez répéter :** Le turn-out se fait depuis la hanche, jamais depuis le genou ou le pied. Forcer le turn-out depuis les extrémités peut causer :
- Syndrome fémoro-patellaire (genou)
- Tendinopathie de la cheville
- Douleurs lombaires (compensation du bassin)

**L'entraînement du turn-out :**
- Exercices de renforcement des rotateurs externes (pelvi-trochantériens)
- Étirements des fléchisseurs de hanche
- Conscience proprioceptive en position neutre avant d'exiger l'ouverture

> Le turn-out parfait vient du travail régulier, pas de la force brute. Prends les années qu'il faut — ton corps te remerciera.`,
        pointsCles: [
          "5 positions des pieds (1ère → 5ème) et 5 positions des bras — architecture entière de la ligne classique.",
          "La 5ème est la plus exigeante : turn-out profond, plusieurs années pour être vraiment propre.",
          "Le turn-out se fait DEPUIS LA HANCHE — jamais depuis le genou ou le pied. Forcer depuis l'extrémité blesse.",
          "Le turn-out parfait vient du travail régulier, pas de la force brute.",
        ],
      },
      {
        titre: "L'adage — lenteur, amplitude et expression",
        contenuMarkdown: `L'adage est ma section préférée du cours classique. C'est là que la technique devient quelque chose de plus — de la musique incarnée.

**Les éléments clés de l'adage :**

**1. Les développés**
La jambe s'ouvre lentement depuis le retiré jusqu'à 90° ou plus. Devant, côté, derrière — chaque direction développe une zone musculaire différente.

**2. L'arabesque**
La position la plus longue du répertoire classique. La ligne va de la pointe des doigts à la pointe du pied arrière — tout le corps contribue à allonger cette diagonale. Et cette ligne vient du dos, pas de la jambe.

**3. L'attitude**
Jambe arrière fléchie, genou à hauteur de hanche. Plus sculpturale que l'arabesque, plus expressive. Inspirée de la statue de Mercure de Giambologna — un détail que j'adore. Il existe deux variantes :
- **Attitude à la russe** : le talon de la jambe en l'air se trouve *plus haut* que le genou — ligne ascendante, grande amplitude
- **Attitude à la française** : le talon est *aligné* sur le genou — ligne plus horizontale, plus classique dans sa retenue

**4. Les équilibres**
Tenir une position sur demi-pointe ou pointe. La durée d'un équilibre dépend :
- Du gainage du centre (transverse, plancher pelvien)
- De la qualité de la demi-pointe
- De l'alignement de l'axe
- Et — je ne te cache pas — d'un peu de lâcher-prise mental

**5. Les promenades (en pas de deux)**
Tour lent autour d'un axe, tenu par le partenaire — le partenaire fait pivoter en arabesque ou attitude.

> L'adage n'est pas "lent et ennuyeux". C'est l'espace de la musicalité — là où chaque note peut se voir dans le corps. C'est là que le classique devient de l'art.`,
        pointsCles: [
          "L'adage (développés, arabesque, attitude, équilibres, promenades) est l'espace de la musicalité.",
          "L'arabesque : la ligne va des doigts à la pointe du pied — et elle vient du dos, pas de la jambe.",
          "Attitude à la russe (talon plus haut) vs française (talon aligné) — deux philosophies du même geste.",
          "L'adage n'est pas 'lent et ennuyeux' — c'est là que chaque note peut se voir dans le corps.",
        ],
      },
      {
        titre: "L'allegro — de la légèreté à la puissance",
        contenuMarkdown: `L'allegro divise le cours en deux temps forts — et j'avoue que le grand allegro me donne encore des étoiles dans les yeux quand il est bien exécuté.

**Le petit allegro**
Petits sauts vifs, souvent en séquences de 8 à 16 temps :
- **Changements de pied** : saut simple, les pieds alternent en 5ème
- **Échappés** : ouverture vers la 2ème et retour en 5ème
- **Assemblés** : jambe lancée, les deux jambes s'assemblent en l'air
- **Jetés** : transfert de poids d'une jambe à l'autre
- **Pas de bourrée** : liaison de trois petits pas sur demi-pointe

**Autres pas essentiels du petit allegro :**
- **Sissonne** : 2 pieds propulsent le saut, 1 seul pied reçoit à l'atterrissage. Un des rares sauts qui "ouvre" à la réception.
- **Entrechat** : soubresaut ou changement de pied *battu* — les jambes se croisent et se décroisent rapidement pendant la phase aérienne. L'entrechat-quatre est la référence : croisé → ouvert → croisé, tout en l'air.
- **Cabriole** : une jambe part en l'air, la deuxième la rejoint et la *frappe* avant de redescendre. C'est la batterie au niveau supérieur — il faut une vraie élévation pour que la frappe soit propre.

**La règle d'or du petit allegro :**
Atterrir toujours en demi-plié, talon–voûte–métatarses–orteils. Un atterrissage silencieux = bonne technique. Si tu entends "clac" à chaque atterrissage, ton plié ne fait pas son travail.

**Le grand allegro**
Combinaisons longues avec déplacement, souvent en diagonale :
- Glissade + grand jeté (le "manège de course")
- Chaînés en diagonal
- Pas de chat enchaîné
- Grand allegro conclusif avec tours et grands sauts

**La préparation au grand allegro :**
L'élan est fondamental. Des pas de couru, des glissades ou des chassés te donnent la vitesse avant les grands sauts. Ne jamais sauter "à sec" — prépare ton élan.`,
        pointsCles: [
          "Petit allegro : changements, échappés, assemblés, jetés, pas de bourrée — vivacité et articulation.",
          "La règle d'or : atterrir en demi-plié, talon–voûte–métatarses–orteils. Un atterrissage silencieux = bonne technique.",
          "Grand allegro : combinaisons longues avec déplacement en diagonale — glissade + grand jeté, chaînés.",
          "Ne jamais sauter 'à sec' — prépare ton élan avec des pas de couru, des glissades ou des chassés.",
        ],
      },
      {
        titre: 'Les tours — pirouette, fouetté, chaînés',
        contenuMarkdown: `Les tours sont souvent la partie la plus intimidante de la technique classique — et la plus satisfaisante à maîtriser. Dans mon carnet, j'ai des pages entières de notes dessus.

**En dehors / en dedans — la direction du tour**
Deux directions fondamentales, et la confusion entre les deux est très courante :
- **Tour en dehors** : on tourne du côté de la jambe de travail — la jambe qui travaille "chasse" vers l'extérieur, c'est la direction "naturelle" de la pirouette classique.
- **Tour en dedans** : on tourne *vers* la jambe de terre — plus inhabituel, part d'une grande quatrième, la jambe de devant pliée, on tourne toujours du côté du public.

**Déboulé :** enchaînement de tours rapides passant alternativement par la 1ère et la 5ème position sur demi-pointe. La vitesse vient de l'élan continu — c'est l'outil de déplacement le plus rapide en technique classique.

**La pyramide de l'apprentissage des tours :**

1. **Équilibre en retiré** (avant tout) : tenir en demi-pointe en retiré, 5+ secondes
2. **Demi-tour** : pirouette d'un demi-tour, trouver l'axe
3. **Tour complet** : pirouette simple, maîtriser le spotting
4. **Tours multiples** : 2, 3, puis plus — qualité avant quantité
5. **Tours en enchaînement** : pirouettes d'affilée, chaînés, fouettés

**Le spotting (fouetté de tête) :**
La technique fondamentale pour ne pas perdre l'orientation :
1. Fixer un point devant toi (à hauteur des yeux)
2. Laisser le corps tourner mais garder la tête fixée sur ce point
3. Quand la tête ne peut plus rester sans se retourner, la tourner 360° rapidement
4. Retrouver le point immédiatement

**L'axe de rotation :**
Le corps tourne autour d'un axe imaginaire vertical, de la couronne de la tête jusqu'au milieu du pied d'appui. Tout écart de cet axe (penchement, bassin décalé) fait "partir" la pirouette.

**La préparation :**
- En 4ème position (pied devant et pied derrière)
- Bras ouverts en 2ème (préparation)
- Demi-plié sur les deux jambes
- L'élan vient du plié, pas d'un effort brut

> Un bon tour ne se force pas — il se laisse aller. La tension est l'ennemi de la rotation. C'est une des choses les plus contre-intuitives du classique.`,
        pointsCles: [
          "Tour en dehors = côté de la jambe de travail ; tour en dedans = vers la jambe de terre.",
          "Le spotting (fouetté de tête) : fixer un point, laisser le corps tourner, la tête part en dernier.",
          "L'axe de rotation : de la couronne de la tête au pied d'appui — tout écart fait 'partir' la pirouette.",
          "Un bon tour ne se force pas — la tension est l'ennemi de la rotation.",
        ],
      },
      {
        titre: 'Danse classique — questions de santé et de longévité',
        contenuMarkdown: `Je ne peux pas te parler du classique sans aborder la santé — parce que cette discipline est exigeante, et que comprendre les risques, c'est pouvoir pratiquer intelligemment sur le long terme.

**Les blessures les plus fréquentes :**

| Zone | Blessure | Cause principale |
|------|---------|-----------------|
| Cheville | Entorse, tendinopathie | Demi-pointe forcée, réception de saut |
| Pied | Stress fracture, hallux valgus | Chaussons de pointe mal adaptés |
| Genou | Syndrome fémoro-patellaire | Turn-out forcé du genou |
| Hanche | Impingement, bursites | Développés en compensation |
| Dos | Lombalgies | Cambrure excessive en arabesque |

**Principes de prévention :**
1. **Progressivité** : ne jamais sauter les étapes de l'apprentissage
2. **Renforcement** : gainage, rotateurs de hanche, muscles intrinsèques du pied
3. **Récupération** : respect des jours de repos, sommeil, hydratation
4. **Écoute du corps** : distinguer la douleur de l'effort (normal) et la douleur de blessure (alarme)
5. **Chaussures adaptées** : chaussons de pointe choisis avec un professionnel

**La question des pointes :**
L'âge minimum recommandé est 10–12 ans, selon la maturité osseuse. Avant cet âge, les os des pieds ne sont pas soudés et les déformations peuvent être permanentes. Un bilan podologique est recommandé avant toute mise en pointe.

> La longévité en danse classique se construit dans la sagesse, pas dans la souffrance. Les danseurs qui durent sont ceux qui ont appris à prendre soin d'eux. C'est une leçon que j'aurais voulu apprendre plus tôt.`,
        pointsCles: [
          "Blessures les plus fréquentes : cheville, pied, genou, hanche, dos — souvent par compensation ou force brute.",
          "5 principes de prévention : progressivité, renforcement, récupération, écoute du corps, chaussures adaptées.",
          "L'âge minimum pour les pointes est 10–12 ans — avant, les os ne sont pas soudés et peuvent se déformer.",
          "La longévité en classique se construit dans la sagesse, pas dans la souffrance.",
        ],
      },
    ],
  },
]
