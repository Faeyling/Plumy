import type { Cours } from '../schema'

export const coursUnite7: Cours[] = [
  {
    id: 'intro-jazz',
    titre: 'La danse jazz — tronc commun et fondamentaux',
    resume: "Le jazz n'est pas un style, c'est un monde — et j'adore le dire parce que c'est littéralement vrai. Dans mes carnets : le groove, les accents et contretemps, les pas de base (ball change, jazz square, chassé), les isolations percussives, les niveaux, les sauts et les tours. J'ai des pages entières là-dessus, et j'ai hâte de te les montrer.",
    disciplines: ['jazz'],
    termesAbordes: [
      'groove', 'accent-jazz', 'eight-count', 'preparation-elan',
      'ball-change', 'jazz-square', 'chasse-jazz', 'jazz-walk',
      'arm-styling', 'niveau-bas', 'pirouette-jazz', 'leaps-jazz', 'isolations-jazz',
    ],
    sections: [
      {
        titre: "Qu'est-ce que la danse jazz ?",
        contenuMarkdown: `La danse jazz est née aux États-Unis à la fin du XIXe siècle — et elle n'a jamais cessé de se transformer. C'est exactement ce qui en fait l'une des disciplines les plus vivantes et les plus passionnantes que je connaisse. Chaque époque y a laissé son empreinte, et cette empreinte, tu peux encore la sentir dans le corps quand tu danses.

**Ses racines — et il faut les nommer clairement :**
- Danses africaines et afro-américaines apportées aux Amériques
- Musique jazz (blues, ragtime, swing)
- Vaudeville, minstrel shows (et leur histoire profondément problématique)
- Danses sociales afro-américaines (Lindy Hop, Charleston)

**Ce qui la définit, tous styles confondus :**
- **La musicalité** : le corps répond à la musique, pas seulement au compte
- **La syncopation** : l'énergie vit souvent entre les temps, pas dessus
- **Le polycentrisme** : plusieurs parties du corps actives indépendamment
- **L'individualité** : dans le jazz, chaque danseur *est* son propre style
- **Le groove** : s'installer dans le rythme, pas juste le suivre

**Le jazz en permanente évolution — mon tableau préféré de mes carnets :**
| Décennie | Style dominant |
|---|---|
| 1920s | Charleston, Lindy Hop |
| 1930–40s | Big band jazz, Jack Cole |
| 1950–60s | Broadway (Robbins, Fosse), Jazz moderne |
| 1970–80s | Jazz lyrique, influences soul |
| 1990s | Commercial jazz, clips vidéo |
| 2000s+ | Street jazz, afro-jazz, fusion |

**Pourquoi le jazz est difficile à classer :**
Contrairement à la danse classique (une technique) ou au contemporain (un champ), le jazz est un *continuum* — de l'héritage africain aux clips de pop d'aujourd'hui, en passant par Broadway et Fosse. Il n'existe pas de "technique jazz universelle". C'est une liberté, pas un défaut. Et perso, c'est cette liberté qui me fait l'aimer autant.

> Cette fluidité fait du jazz une danse vivante — elle change avec son époque. Moi, je trouve ça magnifique. Et toi, tu trouveras ta place à l'intérieur.`,
      },
      {
        titre: "De l'Afrique à Broadway — les racines historiques du jazz",
        contenuMarkdown: `Ce qui m'a le plus frappé quand j'ai vraiment creusé l'histoire du jazz, c'est à quel point elle est profonde — bien plus profonde que les années 1920 qu'on évoque souvent. Dans mes carnets, cette page est l'une des plus annotées, parce que comprendre d'où vient le jazz, c'est comprendre pourquoi il *résonne* comme il résonne.

**Les origines — 300 ans de brassage culturel**

Le terme "jazz" n'apparaît dans la presse qu'en 1917 pour désigner la musique syncopée issue de la culture afro-américaine. Mais les danses qui lui ont donné naissance viennent de bien plus loin : de trois siècles de brassage entre les cultures africaines, européennes et amérindiennes aux Amériques.

Ces danses afro-américaines vernaculaires — transmises de génération en génération, souvent hors de tout cadre institutionnel — portent en elles les traces d'une histoire violente et d'une résistance créatrice. Il faut le nommer clairement : **le jazz naît dans un contexte de ségrégation raciale**, et son énergie vitale vient en partie de là.

---

**Les Jazz Roots (1920–1940) — l'âge d'or des revues de Harlem**

C'est la période que j'appelle "l'explosion de l'expression" dans mes carnets. Les danses sociales afro-américaines envahissent les scènes et les salons :
- **Cake-walk** — d'abord une satire codée des manières des maîtres dans les plantations, puis devenu danse de salon
- **Shimmy** — vibration des épaules, sensualité et rythme
- **Charleston** — jambes en dedans, déhanchement, virtuosité ; symbole des années folles
- **Black bottom** — plus ancré dans le sol que le charleston, bascules du bassin très prononcées

Les **Revues noires de Harlem** (Cotton Club, Apollo Theater) propulsent des artistes extraordinaires :
- **Bill "Bojangles" Robinson** — maître du tap jazz, pédagogie et élégance hors du commun
- **Les Berry Brothers** — acrobatie et jazz, une précision technique stupéfiante
- Ces danses sont alors largement improvisées, solos, et portent la signature unique de chaque interprète

---

**Hollywood et Broadway (années 1930–1950) — le jazz entre dans la narration**

Quand le jazz rencontre Hollywood et Broadway, quelque chose de nouveau se passe : l'improvisation laisse la place à la composition chorégraphique, et le jazz acquiert une **fonction narrative** — il ne divertit plus seulement, il *raconte*. Les figures qui ont construit cette époque :

- **Fred Astaire (1899–1987)** — dès 1933, il devient la référence masculine du film-musical : il mêle la fluidité du ballet à la brusquerie du jazz, et est le premier à danser *chaque note de musique* pour que le motif rythmique se reflète exactement dans les pas. Trente films, une influence encore perceptible aujourd'hui
- **Jack Cole (1911–1974)** — le "père du theatrical jazz" : formé à la Denishawn School, il codifie les isolations, intègre les techniques afro-caribéennes et africaines, pose les bases d'un vocabulaire transmissible ; il travaille avec Rita Hayworth, Marilyn Monroe, Gene Kelly
- **Gene Kelly (1912–1996)** — athlétisme, narration complexe, qualités dramatiques : *Singin' in the Rain* (1952) reste une référence absolue pour l'alliance entre technique de danse et présence d'acteur
- **Jerome Robbins** — *West Side Story*, *On the Town* : précision dramatique sans jamais sacrifier le jazz
- **Bob Fosse** — ses racines sont dans cette période ; il prolongera l'héritage Cole tout en le transformant profondément

---

**Le jazz moderne et sa codification (années 1950–1960)**

Après la guerre, le jazz cherche à se systématiser — à devenir une discipline enseignable et transmissible :

- **Matt Mattox** ouvre ses studios à New York et pose les bases du modern jazz : énergie, rythmes syncopés, pauses, silences, dynamique, expression individuelle
- **Alvin Ailey** fonde son American Dance Theater en 1958, réunissant jazz afro-américain et techniques modernes Graham/Horton — *Revelations* (1960) reste une œuvre fondatrice
- La **Technique Luigi** ("Never Stop Moving") représente la première codification spécifique au modern jazz : souplesse, continuité, jamais d'arrêt du flux
- **Rick Odums (1931–2010)** — né à la Nouvelle-Orléans, il est l'un des pionniers de l'enseignement du jazz aux États-Unis ; il enseigne à l'Alvin Ailey American Dance Theater et à la Joffrey Ballet School, et chorégraphie pour Broadway et le cinéma

> Ce que je retiens de tout ça : le jazz a toujours su se réinventer tout en gardant le fil de ses origines. Et cette capacité de transformation, tu vas la retrouver dans ta propre pratique — c'est l'âme du jazz.`,
      },
      {
        titre: 'Le groove et la musicalité jazz',
        contenuMarkdown: `Le groove est ce qui sépare un danseur de jazz d'un danseur *qui fait du jazz*. Ce n'est pas une technique — c'est une relation à la musique. Et je peux te dire que la première fois que tu le ressens vraiment dans ton corps, tu ne l'oublies plus. J'ai noté ce moment dans mon carnet à l'époque, tellement c'était frappant.

**Le groove n'est pas :**
- Une question de vitesse ou de force
- Un style particulier de mouvement
- Réservé aux "naturellement musicaux" (cette idée m'énerve franchement — tout le monde peut y arriver)

**Le groove est :**
- La capacité à s'*installer* dans le rythme
- Sentir la pulsation *dans* le corps, pas juste l'entendre avec les oreilles
- Un léger rebond permanent — les genoux ne sont jamais complètement verrouillés

**Le "pocket" — un concept que j'adore :**
En musique jazz, le groove se joue dans le "pocket" — légèrement en arrière du temps, dans le creux. Les grands danseurs de jazz font la même chose : ils *tombent* dans le temps plutôt que de le frapper.

**Le comptage en 8 :**
Le jazz compte en 8 temps (deux mesures de 4). La préparation est souvent sur "5, 6, 7, 8" — et les contretemps ("et 1", "et 2") sont aussi importants que les temps eux-mêmes.

**Développer ton groove — la progression que j'utilise avec mes élèves :**

**Étape 1 — Écouter sans bouger**
Mets de la musique jazz. Ferme les yeux. Écoute seulement.

**Étape 2 — Laisser la tête bouger**
Ne décide pas. Laisse la réaction naturelle de ta tête à la musique se faire.

**Étape 3 — Ajouter les genoux**
Un léger rebond des genoux sur le temps. Pas trop — juste assez pour créer un ressort.

**Étape 4 — Ajouter un centre**
Laisse la cage thoracique ou les épaules rejoindre la conversation.

**Étape 5 — Ne plus penser**
Quand tu dois *réfléchir* pour groover, tu n'es pas encore dans le groove. C'est quand tu *oublies* que tu commences vraiment.

> Le groove ne s'enseigne pas — il se *découvre*. Mais on peut créer les conditions pour qu'il apparaisse. Et toi, tu peux y arriver, j'en suis certain.`,
      },
      {
        titre: 'Les pas de base — ball change, jazz square, chassé',
        contenuMarkdown: `Trois pas de base traversent tous les styles de jazz. Les maîtriser solidement, c'est avoir le vocabulaire minimal pour aborder n'importe quel cours. Passe autant de temps que nécessaire sur chacun — ça paiera, crois-moi.

---

## Ball change

Transfert de poids rapide sur deux temps : demi-pointe + plein pied.

**Exécution :**
1. Pied droit en demi-pointe (arrière ou côté)
2. Transfert sur le pied gauche plat
3. Sur 2 temps : "et 1"

**À quoi ça sert :**
- Repositionner le poids pour changer de pied
- Lien rythmique entre deux phrases
- Rebond avant un accent, un saut ou un tour

---

## Jazz square

Quatre pas qui dessinent un carré dans l'espace. Ça paraît simple ; ça ne l'est pas quand il faut y mettre du style — et c'est justement ce qui le rend si intéressant.

**Exécution :**
1. Pied droit croise devant
2. Pied gauche recule
3. Pied droit s'ouvre sur le côté
4. Pied gauche avance

**Qualités selon le style :**
- Broadway : net, projeté, bras fort
- Street jazz : low, grooved, attitude
- Fosse : intérieur, retenu, sophistiqué

---

## Chassé

Pas de déplacement en 3 temps : pas-joint-pas.

**Exécution (latéral) :**
1. Pas vers la droite (pied droit)
2. Pied gauche joint
3. Nouveau pas vers la droite

**Se compte :** 1 - et - 2

---

**Les combiner :**
Ces trois pas se combinent naturellement. Une phrase simple que j'utilise souvent pour démarrer :
- Jazz walk (4 pas) + jazz square + ball change + chassé = une phrase de 8 temps complète

**Clé pédagogique :**
Ces pas doivent devenir *automatiques* — ton corps les connaît sans que ton cerveau les commande. Alors ta tête peut penser à l'expression, à la musicalité, au style. C'est là que la vraie danse commence. Et tu vas voir, ça change tout.`,
      },
      {
        titre: 'Les isolations et le travail par niveaux',
        contenuMarkdown: `Les isolations et les niveaux sont les deux axes du travail technique spécifique au jazz. Deux choses que j'ai dû vraiment travailler pour les avoir dans le corps — pas juste dans la tête. Je te partage ce que j'ai appris.

**Les isolations jazz :**
Plus percussives et rythmiques qu'en danse moderne — le jazz utilise les isolations comme des accents sonores dans le corps. Chaque pop est une note de musique qui devient mouvement.

**Les pops :**
- **Chest pop** : cage thoracique vers l'avant sur un accent
- **Hip pop** : bassin à droite ou gauche sur un contretemps
- **Shoulder pop** : épaule vers l'avant ou vers le haut

**Sharp vs smooth :**
- Sharp : isolation nette avec début et fin précis (jazz, funk, street)
- Smooth : isolation fluide et continue (lyrical, modern jazz)

**La polyrythmie corporelle :**
Épaules sur un rythme, hanches sur un autre, pieds sur un troisième — c'est le polycentrisme appliqué au jazz. Base du groove funk. Difficile ? Oui. Impossible ? Non. Et tellement satisfaisant quand ça vient — vraiment l'une des sensations les plus jouissives en danse.

---

**Les niveaux :**

**Haut :** relevé, positions aérées
**Moyen :** debout, position standard
**Bas :** demi-plié, lunge, squats
**Sol :** slides, splits, floorwork jazz

**Le niveau bas en jazz :**
Beaucoup de styles jazz maintiennent les genoux légèrement fléchis en permanence — ce n'est pas de la fatigue, c'est une qualité esthétique. Les genoux fléchis créent un ressort constant, une disponibilité au mouvement.

**Alternance de niveaux comme dynamique :**
Passer rapidement d'un niveau haut à un niveau bas (ou vice versa) est l'un des outils les plus puissants du jazz pour créer du dynamisme et de l'impact. À voir, c'est spectaculaire quand c'est maîtrisé — et à ressentir dans le corps, c'est encore mieux.`,
      },
      {
        titre: "Tours et sauts — l'air en jazz",
        contenuMarkdown: `La technique des tours et des sauts en jazz mérite une attention particulière — elle diffère du classique dans sa qualité et son esprit, pas nécessairement dans ses principes fondamentaux. C'est quelque chose que j'ai mis du temps à vraiment saisir.

**Les tours en jazz :**

**Ce qui est partagé avec le classique :**
- Le spot (regard fixe qui tourne rapidement)
- L'appui en relevé sur le pied de support
- La préparation bras avant la rotation

**Ce qui est différent — et c'est là que le jazz devient le jazz :**
- Position souvent **parallèle** (pieds non en dehors)
- Qualité plus habitée, expressive, avec attitude
- Arm styling spécifique au style (Broadway ≠ Fosse ≠ Street)
- La fin du tour peut être un accent fort (pop) et non une position neutre

**Progresser dans les tours :**
1. Pirouette simple, bien spotée → 2 tours → tours multiples
2. Varier les positions de bras (un bras, deux bras, bras jazz)
3. Intégrer les tours dans des phrases (avant et après)

---

**Les sauts :**

**Split leap (grand jeté jazz) :**
- Saut d'une jambe sur l'autre, ouverture maximum en l'air
- Préparation visible et dynamique — l'élan fait partie de la phrase
- Arm styling expressif pendant le saut
- Atterrissage amorti (pointe → mi-pied → talon)

**Stag leap :**
- Jambe avant tendue, jambe arrière pliée
- Asymétrie et dynamisme — une signature visuelle très jazz

**Pour progresser sans se blesser :**
Le saut nécessite de la force et de la souplesse. Je ne peux pas assez insister là-dessus — ne jamais sacrifier la sécurité pour l'amplitude :
1. Renforcement des jambes (squats, relevés)
2. Souplesse des hanches (splits progressifs)
3. Saut bas avec bonne forme avant d'aller haut

> Un saut bien exécuté à faible hauteur vaut plus qu'un saut haut mal contrôlé. Toujours. Je te promets que les professeurs préfèrent le premier — et ton corps aussi.`,
      },
    ],
  },

  {
    id: 'sous-styles-jazz',
    titre: "Les sept sous-styles jazz — une carte pour s'orienter",
    resume: "Comment naviguer dans le monde du jazz : les sept sous-styles différenciés, leurs caractéristiques, leurs pédagogues, leurs œuvres de référence et ce qui les distingue les uns des autres. J'ai passé des heures à cartographier tout ça dans mes carnets, alors profites-en — c'est cadeau.",
    disciplines: ['jazz'],
    termesAbordes: [
      'sous-style-jazz-classique', 'sous-style-broadway', 'sous-style-fosse',
      'sous-style-modern-jazz', 'sous-style-lyrical', 'sous-style-street-jazz', 'sous-style-afro-jazz',
    ],
    sections: [
      {
        titre: 'Pourquoi parler de sous-styles ?',
        contenuMarkdown: `Le jazz est trop vaste pour être enseigné comme un bloc monolithique — et honnêtement, prétendre le contraire rendrait un mauvais service à tout le monde. Voilà pourquoi je tiens tant à ce chapitre dans mes carnets. C'est une des pages que j'ai le plus annotées, le plus raturées, le plus retravaillées.

Parler de sous-styles permet de :
- **Décrire précisément** ce qu'on danse ou ce qu'on cherche à apprendre
- **Orienter le travail technique** : chaque sous-style a ses priorités
- **Comprendre l'histoire** : les sous-styles reflètent des moments culturels différents
- **Communiquer avec les professeurs et les directeurs artistiques**

**Ce qui unit tous les sous-styles jazz :**
- Héritage africain et afro-américain (à honorer, pas à effacer)
- Musicalité et relation au rythme
- Syncopation
- Individualité dans l'expression

**Ce qui les différencie :**
- L'esthétique (élégant / brut / lyrique / sophistiqué)
- La musique (jazz live / Broadway / pop contemporaine)
- La technique prioritaire (isolations / fluidité / floorwork)
- Le contexte d'origine (théâtre / clips / académique / communautaire)

> Chaque sous-style est un monde cohérent — avec ses codes, ses maîtres, ses œuvres de référence. Et il n'y en a pas un meilleur que les autres. Aucun. Tu vas voir.`,
      },
      {
        titre: 'Jazz classique et Broadway',
        contenuMarkdown: `Ces deux sous-styles partagent une époque (1930–1970) mais des esthétiques bien distinctes. Ce sont les deux que j'ai découverts en premier, et je t'avoue que Broadway m'a conquis d'emblée — il y a quelque chose dans cette façon de projeter chaque mouvement jusqu'au fond de la salle qui m'a toujours fasciné.

---

## Jazz classique

**La période :** 1930–1960
**La musique :** Jazz live, big band, bebop

**Ce qui le définit :**
- Musicalité au centre — les pas *répondent* à la musique jazz
- Lignes élégantes, polycentrisme visible
- Syncopation claire et lisible
- Technique solide : turns, leaps, footwork

**Figures fondatrices à connaître :**
- **Jack Cole** : systématise les isolations, crée le langage du "theatrical jazz"
- **Katharine Dunham** : intègre les danses caribéennes et africaines dans la danse concert — une pionnière incontournable, et j'insiste là-dessus
- **Matt Mattox** : transmetteur de l'héritage Cole en Europe

---

## Broadway jazz

**La période :** 1940s à aujourd'hui
**La musique :** Comédies musicales, chansons de show

**Ce qui le définit :**
- **Projection extrême** : chaque mouvement doit être vu du fond de salle
- Bras en lignes nettes et fortes
- Sens du spectacle et du jeu théâtral
- Technique au service de la narration

**Chorégraphes emblématiques :**
- **Jerome Robbins** — West Side Story, Fiddler on the Roof : jazz narratif et précis
- **Michael Bennett** — A Chorus Line : humanité et structure (ce spectacle me touche à chaque fois, vraiment)
- **Gower Champion** — 42nd Street : tap meets Broadway jazz

---

**Différence clé que je retiens — et que tu peux noter dans ton propre carnet :**
- Jazz classique : la musique commande
- Broadway jazz : l'histoire (le livret) commande`,
      },
      {
        titre: 'Style Fosse et Modern jazz',
        contenuMarkdown: `Deux styles qui poussent le jazz vers plus d'intériorité et de sophistication — et Fosse en particulier est quelque chose qui m'a fasciné pendant des années. J'ai des carnets entiers sur lui. Tu vas comprendre pourquoi.

---

## Style Fosse

**La période :** 1950–1987 (et ses influences encore très présentes)
**La musique :** Broadway, jazz cool, cabaret

**Les signatures visuelles — immédiatement reconnaissables :**
- Coudes relevés, poignets cassés
- Dos légèrement voûté
- Regard en biais, regard oblique
- Chapeau et canne comme extensions du corps
- Séduction sophistiquée et ironique

**L'esprit Fosse — et c'est là que l'histoire devient fascinante :**
Bob Fosse cachait sa propre gêne physique (il était profondément auto-conscient de son corps) derrière un style qui sublimait ces traits en esthétique. Le résultat : une grammaire visuelle unique, immédiatement reconnaissable. C'est beau, comme idée — transformer ses complexes en langage artistique.

**Œuvres incontournables :**
- *Cabaret* (1972) — "Mein Herr", "Money Money"
- *Chicago* (2002) — "All That Jazz", "Cell Block Tango"
- *All That Jazz* (1979) — film autobiographique de Fosse

---

## Modern jazz

**La période :** 1960s–1980s (et toujours enseigné)
**La musique :** Jazz et musique contemporaine

**Ce qui le définit :**
- Technique moderne intégrée (Graham, Limón, Cunningham)
- Mouvement continu (*Never Stop Moving* — Luigi)
- Moins de showmanship, plus d'exploration
- Qualité du corps avant le spectacle

**Pédagogues :**
- **Luigi** : *Never Stop Moving*, souplesse et continuité — une approche qui a changé des générations de danseurs, et qui me touche beaucoup
- **Gus Giordano** : Chicago, Giordano Dance Company
- **Lynn Simonson** : technique centrée sur le corps sain

---

**Différence clé :**
- Fosse : le style *sur* le corps
- Modern jazz : la technique *dans* le corps`,
      },
      {
        titre: 'Lyrical, Street jazz et Afro-jazz',
        contenuMarkdown: `Les trois sous-styles les plus actuels et les plus pratiqués dans les cours d'aujourd'hui. Trois mondes très différents — et j'ai un attachement particulier pour l'afro-jazz, parce qu'il dit quelque chose d'essentiel sur l'origine de tout ça.

---

## Lyrical jazz

**Ce que c'est :**
Une fusion en trois couches : *technique jazz + expressivité du contemporain + lignes du ballet*. Le résultat, ce sont des mouvements fluides et continus qui portent les paroles d'une chanson dans le corps — j'adore cette idée de "danser les mots".

**Ce qui le définit :**
- Mouvements continus et fluides — les transitions elles-mêmes sont chorégraphiées
- Connexion directe avec les paroles ou la mélodie (et pas seulement le rythme)
- Expression émotionnelle authentique — on *ressent* avant d'exécuter
- Lignes longues héritées du ballet : pirouettes, développés, grands sauts

**La technique lyrical en pratique :**
- **Pirouettes** avec finition lyrique — sortie fluide, jamais plaquée
- **Sauts** (grand jeté lyrical) : l'air devient un moment suspendu d'expression
- **Développés** intégrés dans le flux — la jambe monte dans le mouvement continu
- Port de bras inspiré du ballet mais laissé libre par l'émotion

**Ce qui l'ancre dans le jazz (et non le contemporain) :**
- Base technique jazz (ball change, jazz square, groove)
- Souvent sur musique pop/R&B avec structure rythmique jazz
- L'individualité de l'expression est centrale — ce n'est pas un style "standardisé"

---

## Street jazz / Urban jazz

**Ce que c'est :**
Du jazz qui a fusionné avec les danses urbaines — hip-hop, dancehall, waacking, krump.

**Caractéristiques :**
- Niveau bas permanent (knees bent, grounded)
- Isolations sharps, chest pops, hip pops
- Arm styling urbain
- Attitude forte, confidence
- Musique : hip-hop, R&B, trap, afropop

**Ce qui le distingue du hip-hop pur :**
Il garde une structure de formation et une chorégraphie apprise — le hip-hop est plus libre et cypher.

---

## Modern'jazz

**Ce que c'est :**
Un style né en France qui mélange l'énergie du jazz avec les recherches du mouvement contemporain. L'apostrophe dans "modern'jazz" marque la différence avec l'american modern jazz des années 1950 — et j'aime ce signe typographique qui dit : on s'approprie, on transforme, on crée quelque chose de nouveau.

**Caractéristiques :**
- Grande **mobilité du haut du corps** — thorax, épaules, nuque sont au centre de l'expression
- **Dissociation haut/bas** : le bas du corps ancre, le haut s'exprime souvent de façon indépendante
- Hybride revendiqué : la rigueur et la continuité du contemporain + l'énergie et le rythme du jazz
- Registre large, entre technicité jazz et exploration du mouvement

---

## Afro-jazz

**Ce que c'est :**
Le jazz qui renoue explicitement avec ses origines africaines. Et ça me touche profondément, parce que ces origines ont trop longtemps été invisibilisées — dans l'histoire, dans les cours, dans les manuels.

**Caractéristiques :**
- Polycentrisme : plusieurs centres actifs simultanément
- Pieds ancrés dans le sol, percussions avec les pieds
- Relation intime avec les percussions
- Bras amples et expressifs
- Spirales, contractions, ondulations

**Sa dimension politique :**
L'afro-jazz nomme et célèbre ce qui a longtemps été effacé ou approprié — les origines africaines du jazz. C'est un acte culturel autant qu'artistique.

---

**Tableau de synthèse — ma page préférée de mes carnets, celle que je montre à tout le monde :**

| Sous-style | Musique | Énergie | Priorité |
|---|---|---|---|
| Jazz classique | Jazz live | Musicale | Footwork, synco |
| Broadway | Comédie musicale | Projetée | Spectacle, narration |
| Fosse | Cabaret, jazz cool | Intérieure | Style, sophistication |
| Modern jazz | Contemporaine | Fluide | Technique, continuité |
| Modern'jazz | Jazz + contemporain | Hybride | Dissociation, mobilité |
| Lyrical | Pop/R&B | Émotionnelle | Expression, fluidité |
| Street jazz | Hip-hop/trap | Brute | Attitude, isolation |
| Afro-jazz | Percussions | Ancrée | Polycentrisme, sol |`,
      },
      {
        titre: "Comment t'orienter dans ta pratique jazz",
        contenuMarkdown: `Avec sept sous-styles, la question se pose naturellement : par où commencer ? Comment s'orienter ? Voilà ce que je dis à mes élèves quand ils me posent la question — et je la note ici pour toi.

**Conseil 1 — Le tronc commun d'abord**
Avant de te spécialiser dans un sous-style, construis le tronc commun jazz :
- Groove et musicalité
- Ball change, jazz square, chassé
- Isolations de base
- Tours et sauts fondamentaux

**Conseil 2 — Suis tes goûts musicaux**
Quelle musique te fait bouger naturellement ?
- Hip-hop/trap → Street jazz
- Grandes comédies musicales → Broadway jazz
- Soul/R&B → Lyrical jazz
- Percussions africaines → Afro-jazz

**Conseil 3 — Explore plusieurs styles**
Même si tu te spécialises, explorer les autres sous-styles enrichit ta danse :
- Le lyrical apporte la fluidité au street jazz
- Le jazz classique apporte la précision au Broadway
- L'afro-jazz apporte le polycentrisme à tous

**Conseil 4 — Regarde les œuvres**
Chaque sous-style a ses œuvres de référence. Les regarder est aussi important que les pratiquer — je l'écris dans tous mes carnets, sans exception :
- *West Side Story* → Broadway jazz
- *Chicago* (film) → Fosse
- *So You Think You Can Dance* (saisons 1–5) → panorama des styles actuels
- Alvin Ailey American Dance Theater → Jazz classique
- Germaine Acogny → Afro-jazz

**Conseil 5 — Comprends l'histoire**
Chaque sous-style vient de quelque part. Comprendre son histoire, c'est l'honorer. Et c'est aussi se comprendre soi-même en tant que danseur.

> Il n'y a pas de hiérarchie entre les sous-styles de jazz. Chacun est une façon d'être au monde à travers la danse. Et toi, tu trouveras le tien — j'en suis sûr.`,
      },
    ],
  },
]
