import type { Cours } from '../schema'

export const coursUnite1: Cours[] = [
  {
    id: 'laban-introduction',
    titre: "Rudolf Laban : l'homme qui a tout changé",
    resume: "Dans mes carnets, j'ai une double-page entière sur Laban — avec des croquis, des citations et même un petit icosaèdre dessiné à la main. Il a inventé un langage pour décrire le mouvement humain que l'on utilise encore aujourd'hui dans la danse, la thérapie, le théâtre et même les ressources humaines. Autant commencer par lui.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'kinesphere', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qui est Rudolf Laban ?",
        contenuMarkdown: `J'ai une double-page consacrée à Laban dans mon carnet — avec des petits croquis tout autour — parce qu'il m'a vraiment bouleversé quand je l'ai découvert. Rudolf Laban (1879–1958) est un danseur, chorégraphe et théoricien né à Bratislava, à l'époque sous l'Empire austro-hongrois. Il a révolutionné la façon dont on pense, enseigne et note le mouvement humain.

Formé à l'architecture et aux arts à Munich et Paris, il est aussi profondément marqué par la géométrie sacrée, l'anthroposophie de Rudolf Steiner et les expériences de la communauté utopique du **Monte Verità** (Ascona, Suisse, 1913), foyer de danseurs expressionnistes qui rêvaient de libérer le corps de toutes les conventions. Laban y développe ses premières idées sur le mouvement libre.

En 1920, il publie *Die Welt des Tänzers* (Le Monde du Danseur) — son premier grand texte théorique — et pose les bases de ce qui deviendra l'**Analyse du Mouvement Laban (AML)**. Il écrit plus tard une phrase que j'ai recopiée trois fois dans mon carnet :

> *"Personne n'a jamais observé le mouvement en tant que tel."*

C'est exactement ça, son génie : avoir fait du mouvement un objet d'étude à part entière, avec son propre vocabulaire, ses propres lois, sa propre poésie. Il fuit l'Allemagne nazie en 1938, s'installe en Angleterre, et y poursuit ses travaux jusqu'à sa mort. Son influence atteint Martha Graham, Mary Wigman, Pina Bausch — et des milliers d'enseignants et thérapeutes dans le monde entier.`,
      },
      {
        titre: "Choreutique et Eukinétique : les deux piliers",
        contenuMarkdown: `Ce qui m'a frappé chez Laban, c'est qu'il a séparé l'étude du mouvement en deux grandes branches complémentaires — et cette distinction m'aide encore aujourd'hui à analyser ce que je vois et ce que je ressens.

**La Choreutique** (du grec *khoros*, danse en chœur) est l'étude de l'**espace** : comment le corps se situe et se déplace dans l'espace, quelles formes il trace, quelles trajectoires il emprunte. C'est la géométrie du mouvement.

- La **kinesphère** : ta bulle personnelle, l'espace que tu peux atteindre sans déplacer tes appuis. Laban la visualisait comme un **icosaèdre** (solide à 20 faces) avec 26 directions possibles depuis le centre. Si tu aimes la géométrie, c'est ton moment. Sinon, retiens juste l'idée de ta bulle.
- La **dynamosphère** : l'espace d'action, ce que ton mouvement *fait* dans l'espace ambiant — les lignes de force que ton geste trace dans l'air autour de toi.

**L'Eukinétique** est l'étude de la **qualité dynamique** du mouvement : l'*Effort*, c'est-à-dire comment tu te déplaces — avec quelle énergie, quelle intention, quel rapport intérieur au geste. C'est la psychologie du mouvement.

Ces deux branches forment le cœur de l'**Analyse du Mouvement Laban (AML)** — un outil que tu vas apprendre à utiliser dans les cours suivants, facteur par facteur.`,
      },
      {
        titre: "La notation du mouvement : Cinétographie et Labanotation",
        contenuMarkdown: `En 1928, Laban publie *Schrifttanz* (L'Écriture de la Danse) : un système de notation qui permet d'écrire n'importe quel mouvement humain sur une portée verticale — une véritable partition pour le corps.

Ce système s'appelle **Cinétographie Laban** en Europe (et notamment en France), et **Labanotation** aux États-Unis — deux noms pour le même système de base, mais avec des écoles et des conventions qui ont légèrement divergé au fil des décennies.

La portée est lue **de bas en haut** (comme le temps qui s'écoule vers le haut), avec des colonnes pour chaque partie du corps. Tu peux noter :
- La partie du corps qui bouge
- La direction et le niveau du mouvement
- La durée et la dynamique
- Les contacts, les transferts de poids, les relations entre partenaires

En France, le **Conservatoire National Supérieur de Musique et de Danse de Paris (CNSMD)** a intégré la Cinétographie dans ses cursus professionnels à partir des années 1990. L'**Association Française des Cinétographes et Méthodes Dérivées (AFCMD)** perpétue et développe cette tradition, notamment sous l'impulsion de chercheurs comme **Hubert Godard** et **Odile Rouquet**.

> *Dans mon carnet, j'ai une petite portée de Cinétographie — juste pour montrer que ça existe. Je ne suis pas cinétographe, mais savoir que le mouvement peut s'écrire, ça me fascine autant qu'une partition musicale.*`,
      },
    ],
  },

  {
    id: 'laban-effort-poids',
    titre: "Le facteur Poids : force et légèreté",
    resume: "Le Poids, c'est mon facteur préféré de Laban — parce qu'il touche directement à l'intention, pas à l'apparence. Un mouvement Fort ne veut pas dire lourd, et un mouvement Léger ne veut pas dire faible. Tout est dans le rapport à la gravité.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qu'est-ce que le facteur Poids ?",
        contenuMarkdown: `Le **facteur Poids** est l'un des quatre facteurs d'Effort de Laban. Il décrit le rapport du danseur à la **gravité** — non pas combien tu pèses en kilos, mais avec quelle intention tu t'appuies sur le monde ou tu t'en détaches.

Ses deux polarités :

| Polarité | Terme anglais | Mot-clé | Ce qu'on ressent |
|----------|--------------|---------|-----------------|
| **Fort** | Strong | "résister, lutter, peser" | Engagement musculaire actif, ancrage, gravité utilisée |
| **Léger** | Light | "s'abandonner, effleurer" | Légèreté intentionnelle, anti-gravité, délicatesse |

Ce qui m'a marqué quand j'ai étudié ça : il ne s'agit **pas** de la force physique réelle. Un danseur peut être musclé et produire un mouvement Léger ; un enfant peut produire un mouvement Fort. C'est une **qualité d'intention**.

Laban décrivait le pôle Fort comme "lutter contre la gravité" et le pôle Léger comme "se soumettre à la gravité avec grâce". Les deux sont actifs — la légèreté est un choix, pas une absence de mouvement.`,
      },
      {
        titre: "Le Poids dans chaque discipline",
        contenuMarkdown: `Ce que j'adore avec les facteurs d'Effort, c'est qu'on les retrouve partout — une fois qu'on les connaît, on ne peut plus regarder danser sans les entendre.

**En classique :**
Un grand battement est Fort — engagement total du membre inférieur, propulsion contre la gravité. Un port de bras pianissimo est Léger — les bras semblent flotter sans effort apparent. Les deux coexistent dans une même variation.

**En contemporain :**
La chute contrôlée joue avec le pôle Fort (abandon du poids vers le sol). Le floorwork fluide peut alterner Fort (poids qui s'écrase) et Léger (élévation douce). La suspension — ce moment figé avant la chute — joue sur la limite entre les deux pôles.

**En jazz :**
Le style Fosse, avec ses isolations piquées et ses accents, est souvent Fort. Le lyrical jazz tend vers la Légèreté. Le contraste entre les deux dans une même phrase crée le *swing*.

**En pole dance :**
Les prises de grip et les montées demandent une activation Fort pour tenir le corps. Les transitions lentes et les poses aériennes peuvent jouer la carte Légère, même si le travail physique sous-jacent est intense.

> *Exercice de Plumy : pose ta main sur une table avec une qualité Forte — comme si tu voulais laisser une empreinte. Puis recommence avec une qualité Légère — comme si tu effleurais de la soie. Tu n'as pas changé la trajectoire. Tu as changé l'Effort. C'est tout Laban.*`,
      },
      {
        titre: "Travailler le Poids : pistes pratiques",
        contenuMarkdown: `Le facteur Poids s'enseigne souvent en premier parce qu'il est le plus **somatique** — on le ressent dans le corps avant de le comprendre dans la tête.

**Pour explorer la polarité Fort :**
- Imagine que tu marches dans du sable mouillé ou que tu portes un sac lourd
- Ancre chaque pas comme si tu voulais laisser une trace dans le sol
- Frappe le sol du plat de la main (pas le coup lui-même — l'*intention* dans l'approche)

**Pour explorer la polarité Léger :**
- Imagine que tu te déplaces dans l'eau ou que tu es suspendu à un fil invisible depuis le sommet du crâne
- Laisse tes bras être portés par un courant d'air
- Marche en essayant de ne faire aucun bruit avec tes pieds

**Exercice de contraste :** traverse la salle en Fort, puis reviens en Léger. Puis alterne : Fort sur 4 comptes, Léger sur 4 comptes. Observe où dans ton corps la qualité change en premier.

Le Poids, c'est aussi ce qui donne de l'**intelligibilité** à un geste. Un geste sans intention de Poids est souvent un geste "vide" — techniquement correct, mais qu'on ne ressent pas. Et crois-moi, le public, lui, le ressent.`,
      },
    ],
  },

  {
    id: 'laban-effort-espace',
    titre: "Le facteur Espace : focus et diffusion",
    resume: "Le facteur Espace chez Laban n'a rien à voir avec où tu vas — c'est comment ton attention se dirige dans l'espace. Direct ou Indirect, focalisé ou diffus : une subtilité qui change radicalement la lecture d'un geste.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'niveaux-espace', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qu'est-ce que le facteur Espace ?",
        contenuMarkdown: `Attention, piège classique quand on découvre ce facteur pour la première fois : le **facteur Espace** de Laban ne décrit pas *où* tu te déplaces dans l'espace (ça, c'est le domaine de la Choreutique). Il décrit l'**attention** que ton mouvement porte à l'espace — comment ton geste s'adresse à l'espace qui l'entoure.

Ses deux polarités :

| Polarité | Terme anglais | Mot-clé | Ce qu'on ressent |
|----------|--------------|---------|-----------------|
| **Direct** | Direct | "focalisé, canalisé, précis" | Un seul point visé, trajectoire linéaire, intention tranchante |
| **Indirect** | Indirect (ou Flexible) | "diffus, multi-focalisé, sinueux" | Attention dispersée, trajectoire courbe, mouvement qui enveloppe l'espace |

Laban décrivait le Direct comme "une attention à un seul point" et l'Indirect comme "une attention à plusieurs points en même temps". Ce n'est pas que l'un est meilleur que l'autre — ce sont deux façons d'être présent à l'espace.

**Une image que j'utilise souvent :** un coup de laser vs un projecteur à large faisceau. Les deux éclairent, mais ils ne font pas pareil sur le public — ni sur ton corps.`,
      },
      {
        titre: "Le facteur Espace dans les disciplines",
        contenuMarkdown: `Le facteur Espace est peut-être le plus visible depuis les coulisses ou la salle — il change immédiatement l'*impression* que donne un mouvement.

**En classique :**
Les lignes classiques sont résolument Directes — le regard fixe un point (le fameux "regard" en pirouette), les membres s'allongent vers une destination précise. L'étoile pointée, l'arabesque portée, le développé qui arrive "quelque part" — tout ça, c'est du Direct.

**En contemporain :**
Le contemporain exploite abondamment l'Indirect. Les mouvements qui enveloppent l'espace, les bras qui dessinent des sphères, la tête qui suit une courbe plutôt qu'une ligne — la danse de Pina Bausch est riche en Indirect expressif.

**En heels :**
Intéressant de voir coexister les deux dans une même chorégraphie. Un cat-walk vers le public : Direct, regard fixé droit devant. Un body roll avec les bras qui se déploient : Indirect, l'espace tout entier est enveloppé.

**En jazz :**
Les isolations jazz sont souvent Directes (précision chirurgicale). Les arm stylings fluides sont Indirects. Ce contraste — direct sur le temps fort, indirect sur la liaison — crée la signature du jazz.

> *Note de Plumy : quand j'observe une classe débutante, c'est souvent là que ça coince. Les mouvements sont techniquement corrects mais "sans direction" — ni vraiment Direct ni vraiment Indirect. Choisir, c'est déjà danser.*`,
      },
      {
        titre: "Travailler le facteur Espace",
        contenuMarkdown: `Le facteur Espace est particulièrement utile pour travailler l'**interprétation** et la **présence scénique** — car il agit directement sur ce que le public perçoit de ton intention.

**Pour explorer la polarité Directe :**
- Fixe un point précis dans l'espace avant de commencer le geste
- Imagine que ton index (ou ta main, ou ton pied) relie deux points avec un fil tendu
- Pratique des gestes de pointage ou de frappe — non pas violents, mais précis

**Pour explorer la polarité Indirecte :**
- Laisse ta main tracer une spirale dans l'air en remontant
- Marche en sentant que tu "enveloppes" l'espace autour de toi, comme si l'air résistait légèrement
- Change de direction sans angle net — toujours par des courbes

**Exercice de contraste :** prends un simple geste de bras (lever le bras droit vers le plafond). Fais-le Direct : doigt pointé vers un point précis du plafond, trajectoire linéaire. Puis fais-le Indirect : la main dessine une grande spirale pour arriver au même endroit. Le résultat final est identique — le trajet et l'intention sont radicalement différents.

C'est ça, la magie du facteur Espace : le "quoi" ne change pas, mais le "comment" change tout.`,
      },
    ],
  },

  {
    id: 'laban-effort-temps',
    titre: "Le facteur Temps : urgence et durée",
    resume: "Le Temps chez Laban n'est pas le tempo musical — c'est le rapport intérieur à la durée. Soudain ou Soutenu : est-ce que ton geste arrive comme un éclair ou se déploie comme une vague ? Ce facteur transforme la même trajectoire en deux récits complètement différents.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qu'est-ce que le facteur Temps ?",
        contenuMarkdown: `Deuxième mise en garde importante : le **facteur Temps** de Laban n'est pas identique au tempo musical. Le tempo décrit la vitesse externe — les BPM d'une piste. Le facteur Temps décrit l'**attitude intérieure** du mouvement par rapport à la durée.

Ses deux polarités :

| Polarité | Terme anglais | Mot-clé | Ce qu'on ressent |
|----------|--------------|---------|-----------------|
| **Soudain** | Sudden (ou Quick) | "urgent, décisif, immédiat" | La décision est prise maintenant, le geste arrive sans prévenir |
| **Soutenu** | Sustained | "étiré, prolongé, intemporel" | Le geste s'étale dans le temps, prend tout le temps qu'il lui faut |

Laban décrivait le Soudain comme "lutter contre le temps" — agir avant qu'il soit trop tard. Le Soutenu, c'est "s'abandonner au temps" — laisser le geste habiter pleinement la durée.

**Une image utile :** Soudain, c'est comme attraper un objet qui tombe. Soutenu, c'est comme regarder un coucher de soleil — on voudrait que ça ne finisse jamais.

Et un mouvement peut être Soudain et Lent, ou Soutenu et Rapide — le tempo ne détermine pas l'Effort. Un geste lent d'une fraction de seconde peut être Soudain dans son intention. Un geste rapide peut être Soutenu dans sa qualité.`,
      },
      {
        titre: "Le Temps dans chaque style",
        contenuMarkdown: `Le facteur Temps est l'un des plus immédiatement *lisibles* depuis la salle. Il conditionne directement l'impression de musicalité et d'interprétation.

**En classique :**
L'allegro est structurellement Soudain — les pas sont décidés, piqués, résolus. L'adage joue la carte du Soutenu — chaque position s'installe, les transitions respirent. Un grand danseur classique maîtrise les deux pôles et sait les alterner au fil d'une variation.

**En contemporain :**
Le release joue souvent sur le Soutenu — le mouvement se déploie sans début ni fin nets. La danse de Steve Paxton et du contact improvisation valorise les transitions Soutenues. À l'inverse, certains chorégraphes comme William Forsythe jouent sur la Soudaineté pour créer un sentiment d'urgence et de risque.

**En burlesque :**
Le timing du burlesque est une science du Soudain. Le tease crée de l'attente (Soutenu), puis une révélation (Soudain). La punchline d'un geste burlesque arrive toujours à l'improviste — même quand tout le monde l'attend.

**En jazz :**
La syncope, c'est du Soudain sur un temps faible. Le legato jazz, c'est du Soutenu entre les accents. Le swing naît de l'alternance des deux.

> *Mon astuce pour les élèves : je leur demande de penser à une décision importante — "maintenant ou jamais" — pour trouver le Soudain. Et de penser à regarder la mer à l'horizon pour trouver le Soutenu.*`,
      },
      {
        titre: "Travailler le facteur Temps",
        contenuMarkdown: `Le facteur Temps est souvent le premier à "s'effacer" quand on est concentré sur la technique. On fait les bons gestes aux bons endroits, mais tous avec la même qualité temporelle — et le résultat est plat.

**Pour explorer la polarité Soudaine :**
- Imagine que quelqu'un vient de t'appeler par surprise — ta tête qui se tourne, c'est du Soudain
- Pratique des gestuelles de décision : pointer, saisir, frapper (avec contrôle) — le moment de l'arrivée est Soudain
- Écoute un morceau de musique jazz et frappe chaque accent comme si tu le "décidais" plutôt que de le "suivre"

**Pour explorer la polarité Soutenue :**
- Imagine que tu dessines dans de l'air épais, ou que tu déplaces de l'eau avec les bras
- Prends le même geste et demande-toi : peut-il durer deux fois plus longtemps ? Quatre fois ?
- Pratique une traversée de salle entière sur une seule inspiration lente — laisse le Soutenu habiter tout ton corps

**Exercice de dialogue :** en duo, l'un fait un geste Soudain, l'autre répond en Soutenu. Puis inversez. Observez comment ces deux qualités créent un dialogue, presque une conversation.

Le Temps, c'est peut-être le facteur le plus lié à la **présence** — un geste qui "habite son temps" capte l'œil, même sans virtuosité technique.`,
      },
    ],
  },

  {
    id: 'laban-effort-flux',
    titre: "Le facteur Flux : libre ou lié",
    resume: "Le Flux est le facteur d'Effort le plus psychologique — et le plus difficile à enseigner. Est-ce que ton mouvement pourrait s'arrêter à tout moment (Lié) ou est-ce qu'il est lancé, irrépressible (Libre) ? Laban appelait ça 'fluctuelle' — un mot qu'il a inventé pour quelque chose qu'on ressent avant de le comprendre.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qu'est-ce que le facteur Flux ?",
        contenuMarkdown: `Le **facteur Flux** est souvent le dernier enseigné dans l'AML — pas parce qu'il est plus compliqué, mais parce qu'il est le plus **intérieur**, le plus difficile à objectiver. C'est le rapport au contrôle, à la retenue, à l'abandon.

Ses deux polarités :

| Polarité | Terme anglais | Mot-clé | Ce qu'on ressent |
|----------|--------------|---------|-----------------|
| **Lié** | Bound | "contrôlé, retenu, stoppable" | Le mouvement pourrait s'arrêter à tout instant |
| **Libre** | Free | "fluide, irrépressible, lancé" | Le mouvement ne peut plus s'arrêter — il va jusqu'au bout |

Laban a inventé le mot **"fluctuelle"** pour désigner cette qualité — une neologisme qui dit bien que c'est quelque chose de mouvant, d'ondulant, qui résiste aux définitions figées.

**La question à te poser** quand tu danses : si quelqu'un te disait "stop" maintenant, est-ce que tu pourrais t'arrêter instantanément (Flux Lié) ? Ou est-ce que ton mouvement a été lancé et doit aller jusqu'à sa résolution (Flux Libre) ?

Un geste en équilibre sur la pointe d'un pied est Lié — un micro-ajustement permanent. Un fouetté lancé en pirouette multiple est Libre — une fois parti, on ne peut pas le retenir.`,
      },
      {
        titre: "Flux Libre, Flux Lié : les émotions du mouvement",
        contenuMarkdown: `Ce qui me passionne dans le facteur Flux, c'est son lien direct avec la **dimension émotionnelle** du mouvement. Laban lui-même y voyait la manifestation la plus intime de l'intériorité du danseur.

**Le Flux Lié** est souvent associé à :
- La précision, la maîtrise, la vigilance
- La tension, la retenue, l'inhibition
- La concentration (fermer les yeux, serrer les muscles)
- Les mouvements de protection ou d'autocontrôle

**Le Flux Libre** est souvent associé à :
- L'abandon, la confiance, la générosité
- La joie, la légèreté, l'exubérance
- Les gestes d'ouverture, de lâcher-prise, d'envol
- L'improvisation profonde, le flow du danseur

**En danse-thérapie**, ce facteur est fondamental : un individu qui produit exclusivement du Flux Lié révèle souvent une tension psychique ou une difficulté à lâcher le contrôle. L'exploration du Flux Libre peut être un outil de libération. Les Laban Movement Analysts travaillant avec des personnes en difficulté psychologique s'appuient beaucoup sur ce facteur.

> *Note personnelle : c'est le facteur qui m'a le plus appris sur moi-même. En situation de stress, je deviens entièrement Lié — je retiens tout. Travailler le Flux Libre en improvisation a été une des expériences les plus libératrices de ma pratique.*`,
      },
      {
        titre: "Le Flux dans les disciplines et comment le travailler",
        contenuMarkdown: `Le Flux est présent partout, mais son dosage varie selon les esthétiques et les contextes.

**En classique :**
La technique académique demande un niveau élevé de Flux Lié — chaque position doit pouvoir être "tenue", chaque arabesque est contrôlée au millimètre. Paradoxalement, les plus grands interprètes savent injecter du Flux Libre dans les liaisons et les ports de bras pour que la danse "respire" et ne semble pas mécanique.

**En contemporain :**
Le release, le floorwork fluide, le contact improvisation — autant de pratiques qui cultivent le Flux Libre. La chute dans l'abandon est du Flux Libre pur.

**En pole dance :**
Les figures statiques demandent un Flux Lié intense (tenir, ne pas glisser, contrôler). Les spins et les transitions fluides jouent le Flux Libre. Ce contraste est une des esthétiques propres au pole art.

**En heels :**
Le body roll fluide est du Flux Libre. Le strut piqué et maîtrisé est du Flux Lié. Les meilleurs interprètes en heels savent alterner les deux en quelques secondes.

**Pour travailler le Flux Libre :** improvise en laissant chaque geste aller jusqu'à sa "résolution naturelle" — ne retiens pas. Lance un bras et laisse-le emmener ton épaule, ton buste, tes jambes si nécessaire.

**Pour travailler le Flux Lié :** pratique des freezes progressifs — commence un geste et stoppe-le à différents moments de sa trajectoire. Sens la retenue dans le corps.`,
      },
    ],
  },

  {
    id: 'laban-synthese',
    titre: "Synthèse Laban : les 8 actions et les combinaisons",
    resume: "Maintenant qu'on a les quatre facteurs, on peut les combiner — et là, la magie opère vraiment. Les 8 Actions d'Effort, les 6 États et les 4 Drives forment un système complet pour décrire et composer le mouvement. J'ai mis des années à intégrer tout ça. Tu vas aller plus vite.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Les 8 Actions d'Effort",
        contenuMarkdown: `En combinant les deux polarités des facteurs **Poids** (Fort/Léger), **Temps** (Soudain/Soutenu) et **Espace** (Direct/Indirect), on obtient 2³ = **8 combinaisons** — ce que Laban appelait les **8 Actions d'Effort fondamentales**. Ce sont les "couleurs primaires" du mouvement expressif.

| Action | Poids | Temps | Espace | Sensation |
|--------|-------|-------|--------|-----------|
| **Frapper** *(Punch/Thrust)* | Fort | Soudain | Direct | Coup sec et précis |
| **Presser** *(Press)* | Fort | Soutenu | Direct | Poussée lente et continue |
| **Trancher** *(Slash)* | Fort | Soudain | Indirect | Lame qui balaie l'espace |
| **Tordre** *(Wring)* | Fort | Soutenu | Indirect | Essorage lent et puissant |
| **Tapoter** *(Dab)* | Léger | Soudain | Direct | Toucher léger et précis |
| **Glisser** *(Glide)* | Léger | Soutenu | Direct | Surface lisse et continue |
| **Secouer** *(Flick)* | Léger | Soudain | Indirect | Élan bref et diffus |
| **Flotter** *(Float)* | Léger | Soutenu | Indirect | Légèreté ample et prolongée |

Ces 8 actions ne sont pas des figures chorégraphiques — ce sont des **qualités d'intention** qui peuvent colorer n'importe quel geste. Un port de bras peut être un Glisser ou un Presser selon l'Effort qu'on y met. C'est en ça que le système de Laban est universel.`,
      },
      {
        titre: "Les États et les Drives",
        contenuMarkdown: `Au-delà des 8 Actions (qui combinent 3 facteurs), Laban a aussi théorisé des combinaisons à **2 facteurs** (les **États**) et à **3 facteurs avec le Flux** (les **Drives**).

### Les 6 États (2 facteurs combinés)

Quand deux facteurs seulement sont actifs, le mouvement prend une couleur particulière — un "état intérieur" :

| État | Facteurs combinés | Caractère |
|------|------------------|-----------|
| **Rêve** | Poids + Flux | Intuitif, somatique, non-orienté |
| **Rythme** | Poids + Temps | Percussif, ancré, musculaire |
| **Éveillé** | Espace + Temps | Alerte, précis, réactif |
| **Lointain** | Espace + Flux | Méditatif, onirique, sans urgence |
| **Mobile** | Temps + Flux | Spontané, vif, changeant |
| **Stable** | Poids + Espace | Solide, majestueux, posé |

### Les 4 Drives (3 facteurs dont le Flux)

Un **Drive** combine trois facteurs — l'un des quatre est toujours absent, ce qui donne sa couleur spécifique :

| Drive | Facteurs présents | Facteur absent | Caractère |
|-------|------------------|----------------|-----------|
| **Action Drive** | Poids + Espace + Temps | Flux | Efficace, fonctionnel, pragmatique |
| **Passion Drive** | Poids + Temps + Flux | Espace | Émotionnel, viscéral, intérieur |
| **Vision Drive** | Poids + Espace + Flux | Temps | Plastique, sculptural, atemporel |
| **Spell Drive** | Espace + Temps + Flux | Poids | Hypnotique, magique, incorporel |

> *Ce que j'aime avec les Drives, c'est qu'ils correspondent à des états d'être reconnaissables. Le Spell Drive — sans Poids — c'est ce sentiment d'être "hors du temps" dans une improvisation profonde. Le Passion Drive — sans Espace — c'est la danse qui vient des tripes, sans souci de la "belle forme".*`,
      },
      {
        titre: "L'AML comme outil vivant",
        contenuMarkdown: `Voilà. Tu as maintenant la carte complète du système de Laban — du moins ses fondements. Mais ce qui compte, c'est ce que tu en fais.

**L'Analyse du Mouvement Laban n'est pas un système de jugement** — elle ne dit pas qu'un Frapper est "mieux" qu'un Flotter, ni que le Flux Libre est "plus libre" que le Flux Lié. C'est un **vocabulaire d'observation et de description** qui te permet de :

1. **Observer** un mouvement avec précision : "ce geste est Fort, Soutenu, Indirect — c'est un Tordre"
2. **Analyser** ton propre mouvement : "je suis systématiquement dans le Flux Lié — qu'est-ce que ça dit de moi aujourd'hui ?"
3. **Composer** avec intention : "cette section va alterner Frapper et Flotter pour créer une tension maximale"
4. **Enseigner** avec précision : "plus de Poids dans l'arrivée, moins de Direct dans la transition"

**Le vrai apport de Laban**, c'est d'avoir montré que le mouvement a une **grammaire** — pas seulement des positions et des trajectoires, mais des qualités intérieures qui font toute la différence entre un geste exécuté et un geste *habité*.

Dans mon carnet, j'ai une dernière citation de Laban que je relis souvent :

> *"Ce n'est pas le mouvement en lui-même qui importe, mais la vie qui se révèle à travers lui."*

Et ça, aucun prof, aucun diplôme, aucun manuel ne peut te l'apprendre à ta place — seulement la pratique, et un peu de curiosité.`,
      },
    ],
  },

  {
    id: 'anatomie-danseur',
    titre: "Anatomie appliquée au danseur",
    resume: "Comprendre son corps de l'intérieur pour danser plus intelligemment — et plus longtemps sans se blesser. Alignement, turn-out, centre de gravité, tonicité et proprioception : les piliers que j'aurais voulu connaître bien plus tôt.",
    disciplines: ['commun'],
    termesAbordes: ['alignement', 'turn-out', 'centre-de-gravite', 'tonicite', 'proprioception'],
    sections: [
      {
        titre: "L'alignement : la colonne comme boussole",
        contenuMarkdown: `Dans mes carnets, j'ai griffonné des dizaines de schémas de colonnes vertébrales. Parce que l'alignement, c'est la chose que tous les professeurs mentionnent et que très peu d'entre nous comprennent vraiment au départ.

La colonne vertébrale n'est pas droite — elle présente trois courbures naturelles (lordose cervicale, cyphose thoracique, lordose lombaire). L'alignement dansé respecte ces courbures tout en les optimisant. L'idée n'est pas de t'aplatir comme une planche, mais de trouver ta verticalité vivante.

**Tes repères d'alignement debout :**
1. Tête : regard horizontal, occiput dans le prolongement de la colonne
2. Épaules : basses, éloignées des oreilles
3. Cage thoracique : ouverte, pas projetée en avant
4. Bassin : neutre (ni basculé en avant, ni rétroversé)
5. Genoux : dans l'axe des pieds, légèrement déverrouillés
6. Pieds : plante entière en contact avec le sol

L'alignement est dynamique — il s'adapte à chaque mouvement sans jamais être figé. Pense à lui comme une conversation entre les différentes parties de ton corps, pas comme une statue.`,
      },
      {
        titre: "Le turn-out : anatomie et limites",
        contenuMarkdown: `J'ai appris ça à mes dépens, et je préfère te le dire franchement : le turn-out, on ne peut pas le forcer. Voici pourquoi — et c'est fascinant, je te jure.

**Ce qui détermine ton turn-out :**
- La forme de la tête du fémur (rotonde → plus de mobilité)
- L'orientation de l'acétabule (cavité de la hanche)
- L'angle d'antéversion du col fémoral (moins d'antéversion → plus de turn-out naturel)
- La longueur des ligaments de la capsule articulaire

Tout ça, c'est génétique. Tu ne peux pas y changer grand-chose structurellement.

**Ce que tu peux améliorer :**
- Le renforcement des rotateurs externes (obturateur, pyramidal, sous-fessiers)
- La souplesse des rotateurs internes (adducteurs, fléchisseurs de hanche)
- La proprioception du turn-out (tenir ton turn-out *en mouvement*, pas seulement debout immobile)

**Ce qu'on ne peut pas changer :** la structure osseuse. Forcer au-delà blesse — les hanches, les genoux, les chevilles paient pour les pieds forcés. Ton turn-out vient de ta hanche, pas de tes pieds. C'est une des premières choses que j'ai notée en gros caractères.`,
      },
      {
        titre: "Centre de gravité, tonicité et proprioception",
        contenuMarkdown: `Trois concepts qui font la différence entre danser et vraiment *habiter* le mouvement.

**Centre de gravité (CDG)** : situé environ à deux travers de doigt sous le nombril. En mouvement, ton CDG décrit une trajectoire — la régularité de cette trajectoire définit l'économie de ton geste. Un danseur efficace ne se bat pas contre la gravité ; il joue avec.

**Tonicité** : tu dois cultiver un tonus *sélectif* — engager les muscles nécessaires au geste, relâcher les autres. Crisper tout le corps consomme de l'énergie pour rien, et ça se voit. Les débutants ont souvent tendance à "tout tenir" par peur de tomber — c'est naturel, mais ça freine la progression.

**Proprioception** : le sens du corps dans l'espace. C'est ce qui te permet de corriger ta posture sans miroir, de mémoriser un mouvement dans la mémoire musculaire, de protéger instinctivement une articulation fragile.

> *Exercice de Plumy : Ferme les yeux, lève un bras dans une direction précise, puis essaie de sentir exactement où il est avant de vérifier. C'est la proprioception au travail — et on peut l'entraîner. Plus tu danses, plus elle s'affine.*`,
      },
    ],
  },

  {
    id: 'espace-scenique',
    titre: "Repères d'espace scénique",
    resume: "Côté cour, côté jardin, face, lointain, diagonale — le vocabulaire de l'espace scénique est le langage commun de tous les danseurs. Apprends-le une fois, et tu le gardes toute ta vie.",
    disciplines: ['commun'],
    termesAbordes: ['cote-cour', 'cote-jardin', 'face-lointain', 'diagonale', 'en-croix'],
    sections: [
      {
        titre: "La carte de la scène",
        contenuMarkdown: `Le premier cours où un professeur m'a dit "côté cour !", je suis allé du mauvais côté. Donc je vais te sauver cette gêne — voilà la carte complète.

L'espace scénique est organisé par convention depuis le XVIIe siècle français. Tous les professionnels utilisent ce vocabulaire — dans les studios, sur les scènes, dans les répétitions.

**Axe latéral (gauche-droite depuis toi, qui danses) :**
- **Côté Cour** : à ta gauche quand tu fais face au public (à droite du public)
- **Côté Jardin** : à ta droite quand tu fais face au public (à gauche du public)

**Axe frontal (avant-arrière) :**
- **Face / Avant-scène** : côté public
- **Lointain / Fond de scène** : côté mur du fond

**Les neuf zones classiques** (grille 3×3) :
\`\`\`
Cour-Lointain  |  Centre-Lointain  |  Jardin-Lointain
Cour-Milieu    |     CENTRE        |  Jardin-Milieu
Cour-Face      |  Centre-Face      |  Jardin-Face
               [    PUBLIC    ]
\`\`\`

> *Mémo de Plumy : "Cour" = Court = le mot le plus court → côté gauche. "Jardin" = le mot plus fleuri, plus long → côté droit. Ça m'a sauvé la mise des dizaines de fois.*`,
        schemaId: 'espace-scenique-grille',
      },
      {
        titre: "Trajectoires et directions",
        contenuMarkdown: `Une fois que tu as la carte dans la tête, les trajectoires deviennent un vrai terrain de jeu.

**La diagonale** est la trajectoire la plus longue sur scène — elle traverse de coin à coin. Les deux grandes :
- Jardin-Lointain → Cour-Face (la plus classique, celle qu'on utilise pour les grands manèges)
- Cour-Lointain → Jardin-Face (l'autre sens)

**En croix** désigne un exercice exécuté dans 4 directions successives : devant, côté, derrière, côté. Ce principe revient à la barre classique, dans les isolations jazz, dans l'exploration contemporaine. Dès que tu entends "en croix", tu sais que tu vas travailler les quatre orientations.

**Le manège** est une trajectoire circulaire le long des bords de la scène — très utilisé en classique pour les grandes combinaisons de tours et de sauts. Voir un manège de pirouettes bien lancé, c'est l'une des choses les plus belles de la danse classique. Dans mon carnet, j'ai une petite flèche circulaire pour le rappeler.

**Les coulisses** sont les zones cachées de chaque côté (cour et jardin), depuis lesquelles tu attends ton entrée. C'est là aussi que se passent les chuchotements, les derniers encouragements, les sourires nerveux avant d'entrer en scène.`,
      },
      {
        titre: "Orientation du corps sur scène",
        contenuMarkdown: `Au-delà de ta position sur scène, l'orientation de ton corps a aussi son propre vocabulaire — notamment en classique et en contemporain.

| Terme | Sens |
|-------|------|
| **En face** | Face au public, de face |
| **De profil** | Présentant le côté au public |
| **De dos** | Dos au public |
| **Épaulé** | Corps légèrement tourné (3/4 face) |
| **Croisé** | Pied croisé sur l'autre axe |
| **Ouvert** | Pied du même côté que le corps |

Ces orientations se combinent avec les zones de scène pour créer des positions précises — du genre "arabesque croisée côté jardin, face au lointain". Ça peut sembler compliqué dit comme ça, mais une fois que tu as le vocabulaire, c'est d'une clarté absolue.

> *Le savoir scénique, c'est comme avoir un GPS dans le corps. Une fois intégré, tu ne te perds plus jamais sur scène — et tu peux recevoir n'importe quelle indication chorégraphique au millimètre, même en pleine répétition à la volée.*`,
      },
    ],
  },
]
