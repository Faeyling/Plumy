import type { Cours } from '../schema'

export const coursUnite1: Cours[] = [
  {
    id: 'histoire-ballet',
    titre: 'Du ballet de cour au ballet académique',
    resume: "De Louis XIV danseur-roi aux pointes de l'Opéra de Paris, retrace six siècles d'histoire du ballet classique et ses grandes révolutions esthétiques.",
    disciplines: ['classique'],
    termesAbordes: ['ballet-de-cour', 'ballet-romantique', 'ballet-classique-academique', 'sur-les-pointes', 'corps-de-ballet'],
    sections: [
      {
        titre: 'Le ballet de cour (XVe–XVIIe siècle)',
        contenuMarkdown: `Le ballet naît en Italie à la Renaissance, dans les cours princières qui utilisent la danse, la musique et la poésie pour célébrer le pouvoir. Le **Ballet Comique de la Reine** (1581), créé à Paris pour Catherine de Médicis, est considéré comme le premier ballet au sens moderne : un spectacle total d'environ cinq heures, qui mêle danse, chant, déclamation et machines de théâtre.

**Louis XIV (1638–1715)** est la figure fondatrice du ballet français :
- Il danse lui-même à la cour, notamment dans le *Ballet Royal de la Nuit* (1653), où il incarne le Soleil Levant — d'où son surnom de "Roi-Soleil".
- En 1661, il crée l'**Académie Royale de Danse**, première institution chorégraphique au monde.
- Son maître à danser, **Pierre Beauchamp**, codifie les **cinq positions** des pieds, encore enseignées aujourd'hui.

À cette époque, les danseurs portent des costumes lourds, des perruques et des talons — la virtuosité est limitée, et les femmes ne participent pas encore au spectacle public.`,
      },
      {
        titre: "La naissance du ballet d'action (XVIIIe siècle)",
        contenuMarkdown: `Le XVIIIe siècle voit le ballet quitter les salons pour la scène de théâtre. Deux révolutions majeures :

**Jean-Georges Noverre (1727–1810)** publie en 1760 ses *Lettres sur la danse et les ballets*, véritable manifeste esthétique. Il défend le **ballet d'action** : la danse doit raconter une histoire par le geste expressif, pas seulement exhiber une technique. C'est l'ancêtre du ballet narratif moderne.

**Marie Camargo et Marie Salle** (vers 1720–1750) révolutionnent la place de la femme :
- Camargo raccourcit sa jupe pour montrer ses pieds et ses battements rapides.
- Salle abandonne le corset et les paniers pour danser en tunique légère dans son *Pygmalion* (1734) — scandale à l'époque.

La chaussure de danse évolue : le talon disparaît progressivement, permettant plus d'agilité.`,
      },
      {
        titre: "L'âge romantique (1820–1870)",
        contenuMarkdown: `Le ballet romantique est l'âge d'or des **sylphides et des willis** — femmes surnaturelles, légères, inaccessibles. Deux chefs-d'œuvre définissent l'époque :

- **La Sylphide** (1832, chorégraphie de Filippo Taglioni pour sa fille Marie) — premier ballet sur les pointes, premier tutu romantique long et vaporeux.
- **Giselle** (1841, Coralli/Perrot) — sommet du romantisme : folie, mort et rédemption par l'amour.

Les pointes apparaissent dans ce contexte : **Marie Taglioni** est la première à les utiliser de façon artistique (et non comme simple prouesse). Elles symbolisent l'évanescence, le désir de s'arracher à la terre.

> Le ballet romantique est un ballet de l'au-delà : l'homme désire une femme qui n'existe pas, et cette femme l'entraîne vers la mort.

Le tutu romantique (long, en mousseline blanche) est le costume emblématique. Les hommes reculent au second plan ; la ballerine devient la star absolue.`,
      },
      {
        titre: "L'âge classique : Petipa et la Russie impériale (1870–1910)",
        contenuMarkdown: `Quand le ballet décline en France, il s'épanouit à **Saint-Pétersbourg** sous l'égide du Tsar. Le **Théâtre Impérial Mariinsky** devient le temple du ballet académique.

**Marius Petipa (1818–1910)**, maître de ballet français au service de la Russie, crée l'œuvre canonique du répertoire :

| Œuvre | Compositeur | Date |
|-------|------------|------|
| Don Quichotte | Minkus | 1869 |
| La Bayadère | Minkus | 1877 |
| La Belle au bois dormant | Tchaïkovski | 1890 |
| Le Lac des cygnes (révision) | Tchaïkovski | 1895 |
| Casse-Noisette | Tchaïkovski | 1892 |

Petipa codifie la structure du **grand ballet classique** : pas de deux académique (adage, variations, coda), corps de ballet en formations géométriques, hiérarchie des rôles (étoile, premiers danseurs, corps de ballet).

Le tutu raccourcit : le **tutu classique** (en plateau rigide) apparaît, exhibant les jambes et les pointes. La virtuosité technique explose.`,
      },
      {
        titre: 'Révolutions du XXe siècle',
        contenuMarkdown: `**Les Ballets Russes de Diaghilev (1909–1929)** font exploser le ballet classique :
- **Nijinski** scandalise Paris avec *L'Après-midi d'un faune* (1912) : mouvement bidimensionnel, pied à plat, érotisme.
- **Stravinski** compose *Le Sacre du printemps* (1913), chorégraphié par Nijinski — émeute à la première.
- La collaboration avec des peintres (Picasso, Matisse) et des compositeurs d'avant-garde transforme le ballet en art total moderniste.

**George Balanchine (1904–1983)** invente le **néoclassicisme** : ballet sans histoire, sans décors surchargés, "plotless" — juste la musique et le mouvement pur. Il fonde le New York City Ballet (1948) et révolutionne le corps de la danseuse : longues jambes, petite tête, hyperextension.

**Rudolf Noureev (1938–1993)** réhabilite le danseur masculin : virtuosité, charisme, tours en l'air spectaculaires. Il redonne au ballet classique son prestige populaire dans les années 1970–1980.

Aujourd'hui, le ballet académique coexiste avec le ballet contemporain, le néoclassique et la danse-théâtre.`,
      },
    ],
  },
  {
    id: 'histoire-moderne-contemporain',
    titre: 'Danse moderne et contemporaine',
    resume: "D'Isadora Duncan aux chorégraphes de Judson Church, retrace la longue révolte contre le ballet et la construction d'un autre corps dansant — libéré, expressif, politique.",
    disciplines: ['moderne', 'contemporain'],
    termesAbordes: ['danse-moderne', 'ausdruckstanz', 'danse-contemporaine', 'danse-postmoderne', 'contact-improvisation'],
    sections: [
      {
        titre: 'La naissance de la danse moderne (1890–1920)',
        contenuMarkdown: `La danse moderne naît d'un refus : refus du corset, du tutu, des pointes, de la hiérarchie académique. Deux pionnières américaines en Europe :

**Loïe Fuller (1862–1928)** invente la danse lumineuse : voiles de soie manipulés par des baguettes, éclairages électriques colorés, scène plongée dans l'obscurité. Elle n'a pas de technique académique — elle invente la sienne. Les Symbolistes l'adorent.

**Isadora Duncan (1877–1927)** est la rebelle fondatrice :
- Elle danse pieds nus, en tunique grecque, inspirée des frises antiques et de la nature.
- Elle revendique la liberté du corps féminin contre le corset victorien.
- Son principe : le mouvement naît du plexus solaire, le siège de l'émotion.
- Elle ouvre des écoles en Europe (dont une à Moscou) et forme la première génération de danseuses "libres".

> "Je n'ai jamais pu comprendre pourquoi l'on devrait apprendre à danser à partir des orteils." — Isadora Duncan

**Ruth Saint Denis (1879–1968)** et **Ted Shawn (1891–1972)** fondent la **Denishawn School** à Los Angeles (1915) : mélange d'orientalisme, de mysticisme et de pragmatisme américain. Martha Graham, Doris Humphrey et Charles Weidman en sortent.`,
      },
      {
        titre: "L'Ausdruckstanz allemand (1910–1940)",
        contenuMarkdown: `En Allemagne, la danse expressionniste (Ausdruckstanz, "danse d'expression") prend une autre voie.

**Rudolf Laban (1879–1958)** développe son analyse du mouvement (voir Unité 0) et forme des dizaines de chorégraphes. Son élève **Mary Wigman (1886–1973)** est la figure centrale :
- Elle danse souvent seule, en masque, avec une percussion minimale ou en silence.
- Son langage est sombre, tellurique, habité par des forces archaïques.
- Elle ouvre des écoles dans toute l'Allemagne.

**Kurt Jooss (1901–1979)** crée *La Table Verte* (1932), chef-d'œuvre anti-guerre : la Mort conduit une danse macabre pendant que des diplomates négocient. C'est l'une des premières œuvres chorégraphiques à message politique explicite.

L'arrivée du nazisme disperse ces artistes — Wigman survit difficilement, Jooss s'exile en Angleterre.`,
      },
      {
        titre: "L'âge d'or américain (1930–1960)",
        contenuMarkdown: `**Martha Graham (1894–1991)** est la figure dominante du XXe siècle en danse :
- Elle développe une technique complète basée sur la **contraction et le release** — l'inspiration/expiration comme moteur du mouvement.
- Son travail est ancré dans la psychologie, la mythologie grecque, l'identité américaine.
- Œuvres majeures : *Lamentation* (1930), *Appalachian Spring* (1944), *Cave of the Heart* (1946, sur Médée).

**Doris Humphrey (1895–1958)** explore la **chute et la récupération** (fall and recovery) — la vie comme tension entre équilibre et déséquilibre.

**José Limón (1908–1972)**, élève de Humphrey, apporte une dimension dramatique et culturelle (identité mexicaine-américaine) dans des œuvres comme *There is a Time* et *Missa Brevis*.

Ces trois techniques — Graham, Humphrey-Limón, et plus tard Cunningham — forment le tronc commun de la **danse moderne** enseignée dans les conservatoires.`,
      },
      {
        titre: 'La révolution postmoderne : Judson Church (1960–1975)',
        contenuMarkdown: `En 1962, un groupe de danseurs, compositeurs et artistes visuels commence à se réunir à l'église **Judson Dance Theater** de New York. Leur question : **qu'est-ce que la danse ?**

Leurs réponses remettent tout en question :

- **Yvonne Rainer** rédige le *No Manifesto* (1965) : non à la virtuosité, non au spectaculaire, non à la transformation. Le mouvement quotidien est de la danse.
- **Steve Paxton** développe le **contact improvisation** (1972) : deux corps qui partagent leur poids, sans hiérarchie, en temps réel.
- **Trisha Brown** joue avec la gravité : danseurs sur les murs, dans la rue, dans des structures géométriques.
- **Simone Forti** introduit les *dance constructions* : des instructions simples données aux interprètes.

> Cette génération refuse le "beau" au sens conventionnel. Tout peut être danse : marcher, manger, parler.

L'héritage Judson est immense : il autorise la danse contemporaine à inclure le théâtre, l'installation, la performance, et à questionner en permanence ses propres limites.`,
      },
      {
        titre: "La danse contemporaine mondiale (1980 à aujourd'hui)",
        contenuMarkdown: `**Pina Bausch (1940–2009)** et sa compagnie de Wuppertal inventent le **Tanztheater** (danse-théâtre) : les interprètes parlent, pleurent, rient, répètent des gestes obsessionnels. Le corps est politique. *Café Müller* (1978) et *Kontakthof* (1978) sont des œuvres fondamentales.

**William Forsythe** déconstruit le ballet classique depuis les années 1980 : géométries tordues, improvisations structurées, rapport au public perturbé.

**Maguy Marin** (France), **Anne Teresa De Keersmaeker** (Belgique), **Sasha Waltz** (Allemagne) — la danse contemporaine européenne développe des langages pluriels.

En France, la politique de **décentralisation culturelle** (années 1980–1990) crée un réseau de Centres Chorégraphiques Nationaux qui permettent à des dizaines de compagnies de travailler sur le long terme.

Aujourd'hui, la danse contemporaine :
- Dialogue avec les arts visuels, la performance, la musique électronique, le numérique.
- Intègre la diversité des corps et des identités.
- Questionne les notions d'auteur, d'interprète et de spectateur.`,
      },
    ],
  },
  {
    id: 'histoire-jazz',
    titre: 'Jazz dance — des origines à Broadway',
    resume: "Née dans les communautés afro-américaines du Sud, la jazz dance a traversé le vaudeville, Harlem, Broadway et Hollywood pour devenir l'une des danses les plus pratiquées au monde.",
    disciplines: ['jazz'],
    termesAbordes: ['origines-jazz-dance', 'lindy-hop', 'jazz-theatrical'],
    sections: [
      {
        titre: 'Racines africaines et contexte américain',
        contenuMarkdown: `La jazz dance ne se comprend pas sans l'histoire de l'Amérique et de l'esclavage.

Les Africains déportés aux États-Unis ont apporté avec eux leurs traditions de danse : **polycentrisme** (plusieurs centres du corps bougent indépendamment), **polyrythmie** (corps qui répond à plusieurs rythmes simultanément), sens du **groove** et de l'improvisation, rapport au sol ancré.

Ces traditions survivent malgré l'oppression :
- Dans les **ring shouts** (chants et danses rituels des communautés noires du Sud)
- Au **Congo Square** de La Nouvelle-Orléans, où les esclaves avaient le droit de se rassembler le dimanche
- Dans les danses de plantation, parfois ridiculisées dans les **minstrel shows** — spectacles de Blancs maquillés en Noir, qui diffusent des stéréotypes racistes tout en popularisant les rythmes afro-américains

> La jazz dance est une création afro-américaine. Son histoire ne peut se raconter sans reconnaître à la fois sa source et l'appropriation culturelle qui l'a suivie.`,
      },
      {
        titre: 'Le Ragtime et les premières danses sociales (1890–1920)',
        contenuMarkdown: `À la fin du XIXe siècle, le **ragtime** — musique syncopée à base de piano — envahit les salles de danse américaines. De nouvelles dannes apparaissent :

**Le Cake Walk** (fin XIXe) : danse parodique née dans les plantations, où les esclaves imitaient les danses formelles de leurs maîtres avec ironie. Récupérée par le vaudeville et les minstrel shows, elle devient à la mode dans les salons blancs — sans que son origine ironique soit reconnue.

**Le Turkey Trot, le Grizzly Bear, le Bunny Hug** (années 1910) : danses de couple proches, corps collés, scandaleuses pour l'époque. **Vernon et Irene Castle** les popularisent dans les salons en les "civilisant" — corps légèrement séparés, gestes épurés — pour un public blanc bourgeois.

C'est dans ce contexte que naît le jazz : musique syncopée, improvisée, née à La Nouvelle-Orléans.`,
      },
      {
        titre: "Harlem et l'âge du swing (1920–1940)",
        contenuMarkdown: `**La Renaissance de Harlem** (années 1920–1930) est une explosion culturelle afro-américaine à New York : littérature, peinture, jazz, danse.

Le **Savoy Ballroom** (1926–1958) est la grande salle de danse de Harlem — l'une des premières salles de spectacle non ségréguées aux États-Unis. C'est là que naît le **Lindy Hop** :

- Inventé par **Frankie Manning** et **Shorty George Snowden** vers 1928
- Nommé en référence à Charles Lindbergh (Lindy) et sa traversée de l'Atlantique
- Caractérisé par ses **airsteps** (acrobaties aériennes), son swing continu, son improvisation

Le Lindy Hop est la première danse de couple où la femme est projetée, sautée, envoyée dans les airs — une révolution dans les rapports de genre dans la danse sociale.

**Louis Armstrong, Duke Ellington, Ella Fitzgerald** — la musique jazz accompagne ces danses et crée un dialogue permanent entre musiciens et danseurs.`,
      },
      {
        titre: "Broadway et l'âge d'or (1940–1970)",
        contenuMarkdown: `**Jack Cole (1911–1974)** est le père fondateur du **jazz theatrical** :
- Il synthétise la danse classique indienne (Bharatanatyam), les isolations afro-caribéennes et le jazz.
- Il développe un style qui deviendra la base du jazz de comédie musicale : technique exigeante, isolations précises, présence scénique forte.
- Il forme Bob Fosse, Gwen Verdon, Carol Haney.

**Bob Fosse (1927–1987)** crée un style immédiatement reconnaissable :
- Chapeaux melon, gants blancs, corps obliques, mains en avant
- Mouvements sexuels mais stylisés, ironie et voyeurisme
- Chefs-d'œuvre : *Chicago* (1975), *Pippin*, *All That Jazz* (film, 1979)

**Jerome Robbins (1918–1998)** apporte la légèreté et la précision :
- *West Side Story* (1957) — ballet de gang à New York
- Il utilise le jazz comme langue commune entre des corps aux formations classiques différentes

**Gus Giordano (1923–2008)** systématise la technique jazz dans l'enseignement américain.`,
      },
      {
        titre: "La jazz dance aujourd'hui",
        contenuMarkdown: `À partir des années 1980, la jazz dance éclate en **sous-styles** qui reflètent la diversité de la culture populaire :

| Sous-style | Caractéristiques |
|-----------|-----------------|
| **Jazz classique** | Héritage Giordano/Cole, technique pure |
| **Broadway jazz** | Storytelling, comédie musicale, expressivité |
| **Fosse** | Isolations, ironie, vêtements sombres |
| **Modern jazz** | Influence contemporaine, fluidité |
| **Lyrical jazz** | Connexion à la musique, emotion, fluidité |
| **Street jazz** | Hip-hop + jazz, énergie urbaine |
| **Afro-jazz** | Retour aux sources, polycentrisme, groove |

**Beyoncé, Janet Jackson, Michael Jackson** popularisent à l'échelle mondiale un vocabulaire issu du jazz theatrical et du hip-hop.

Aujourd'hui, la jazz dance est la discipline la plus enseignée en France après le classique et le contemporain. Elle est aussi l'une des plus pratiquées dans les concours (Prix de Lausanne, Danza en acción).`,
      },
    ],
  },
  {
    id: 'histoire-cabaret-burlesque-heels',
    titre: 'Cabaret, burlesque et heels',
    resume: "Trois disciplines nées dans les marges — café-concert parisien, scène américaine alternative, culture vogue et ballroom — qui partagent une revendication commune : le corps féminin comme espace de liberté et de pouvoir.",
    disciplines: ['cabaret', 'heels'],
    termesAbordes: ['cancan', 'kabarett', 'burlesque-origines', 'neo-burlesque', 'vogue-ballroom', 'heels-dance'],
    sections: [
      {
        titre: 'Le café-concert et la naissance du cabaret (1840–1900)',
        contenuMarkdown: `Le **café-concert** parisien naît dans les années 1840 : une salle où l'on consomme des boissons en écoutant de la musique et en regardant des numéros de variétés. Public populaire mélangé, ambiance festive, liberté de mœurs relative.

De là émerge le **french cancan** (vers 1840–1860) :
- Danse de troupe féminine, jupes et jupons relevés, battements de jambes hauts, grand écart, "pont"
- Spectacle au **Moulin Rouge** (ouvert en 1889) où des danseuses comme **La Goulue** et **Nini Patte-en-l'air** deviennent des stars populaires
- Toulouse-Lautrec immortalise cette scène dans ses affiches
- Le cancan est d'abord subversif : corps de femme du peuple exposé, excès et insolence, refus de la bienséance

**La Belle Époque** (1890–1914) voit l'explosion du music-hall et du cabaret artistique. Le **Moulin Rouge**, le **Folies Bergère** et les **Bataclan** créent le modèle de la **revue** : spectacle total avec des numéros variés, des décors somptueux et des **girls** en costume élaboré.`,
      },
      {
        titre: "Le Kabarett allemand et l'entre-deux-guerres (1900–1940)",
        contenuMarkdown: `En Allemagne, le **Kabarett** est une forme très différente : cabaret politique et satirique, né à Munich et Berlin autour de 1900. Petit théâtre, ambiance de cave, chansons à texte, sketches.

À **Berlin** dans les années 1920 (la "goldene Zwanziger"), le cabaret atteint son apogée :
- Liberté sexuelle affichée, mélange de genres, travestissement
- Artistes comme **Kurt Weill** et **Bertolt Brecht** créent l'**Opéra de quat'sous** (1928)
- **Marlene Dietrich** incarne l'ambiguïté de genre dans *L'Ange bleu* (1930)
- Le cabaret est un espace de résistance culturelle — ce que les nazis comprennent parfaitement en le faisant taire dès 1933

Ce modèle inspire directement la comédie musicale **Cabaret** de Kander et Ebb (Broadway, 1966), qui reconstruit cette époque avec le **Kit Kat Club** comme miroir de la montée du nazisme.

En France, la tradition du **music-hall** continue avec **Joséphine Baker** (1906–1975) : première grande star noire internationale, elle chante et danse aux Folies Bergère dès 1925, habillée de bananes — numéro exotisant qu'elle subvertit par son ironie et son charisme.`,
      },
      {
        titre: 'Le burlesque américain et son histoire (1860–1960)',
        contenuMarkdown: `Le mot **burlesque** vient du latin *burla* (moquerie, farce). Aux États-Unis, le burlesque est une forme de spectacle populaire née dans les années 1860 :

**Première époque (1860–1900)** : troupes de femmes qui parodient les codes masculins, s'habillent en hommes, jouent Shakespeare de façon comique. La grande star est **Lydia Thompson** avec ses "British Blondes".

**Deuxième époque (1900–1930)** : le burlesque devient synonyme de **striptease progressif**, dans des salles de plus en plus séparées du grand public. C'est l'**effeuillage** : le déshabillage progressif, avec tease et jeu avec le public.

Grandes personnalités :
- **Gypsy Rose Lee (1911–1970)** : l'effeuillage comme art intellectuel et ironique — elle récite de la poésie en se déshabillant
- **Sally Rand (1904–1979)** : fan dance avec des plumes d'autruche, image iconique du burlesque

**Troisième époque (1950–1960)** : déclin avec l'arrivée de la télévision et du cinéma. Le burlesque disparaît presque complètement.`,
      },
      {
        titre: "Le néo-burlesque et la culture heels (1990–aujourd'hui)",
        contenuMarkdown: `**Le néo-burlesque** naît à New York et San Francisco dans les années 1990, porté par des artistes féministes qui réinventent l'effeuillage :

- **Dita Von Teese** (née 1972) en est la figure emblématique internationale : glamour ultra-soigné, références vintage, maîtrise totale de l'image.
- Le néo-burlesque est explicitement féministe : le corps s'offre au regard selon ses propres termes, pas ceux du marché.
- Il inclut tous les genres, toutes les morphologies — refus des normes de beauté dominantes.
- Il se pratique dans des petits théâtres, des bars, des festivals alternatifs.

**La culture heels dance** a une autre origine : la culture **vogue et ballroom** afro-américaine et latino-américaine de New York (Harlem, années 1970–1980).

Dans les **balls**, les personnes LGBTQ+ marginalisées (souvent noires et latines) créent des catégories de compétition dont le **femme performance** : marcher sur des talons hauts avec grâce, power et féminité revendiquée. Figures fondatrices : **Willi Ninja, Paris Dupree**.

Le film **Paris Is Burning** (Jennie Livingston, 1990) documente cette scène. **Madonna** popularise le vogue en 1990 avec la chanson *Vogue* et la chorégraphie de Jose Gutierez Xtravaganza.

Aujourd'hui, le **heels dance** est une discipline à part entière, enseignée en studios, avec ses propres compétitions.`,
      },
    ],
  },
  {
    id: 'histoire-pole-dance',
    titre: 'Histoire du pole dance',
    resume: "Le pole dance vient du cirque chinois, des spectacles itinérants, des bars de strip clubs et de la lutte indienne — une histoire complexe qui mène à la reconnaissance sportive et artistique internationale.",
    disciplines: ['pole-dance'],
    termesAbordes: ['mat-chinois', 'pole-contemporain'],
    sections: [
      {
        titre: 'Origines circulaires : mat chinois et tradition indienne',
        contenuMarkdown: `Le pole dance a plusieurs ancêtres indépendants.

**Le mat chinois** (Chinese pole) est une discipline du cirque traditionnel chinois vieille de plusieurs siècles : deux ou plusieurs artistes grimpent, descendent et effectuent des figures acrobatiques sur des mâts de bambou ou de métal, couverts de caoutchouc pour l'adhérence. Cette discipline est encore enseignée dans les écoles de cirque du monde entier.

**Le Mallakhamb** est une discipline de lutte traditionnelle indienne datant du XIIe siècle, pratiquée sur un poteau de bois ou une corde. Le mot signifie "homme athlète" en marathi. Des compétitions Mallakhamb existent encore aujourd'hui en Inde.

Ces deux traditions montrent que les exercices de force et d'acrobatie sur un poteau vertical sont présents dans des cultures très différentes, sans lien direct entre elles.`,
      },
      {
        titre: 'La scène américaine des années 1920–1980',
        contenuMarkdown: `Aux États-Unis, la version moderne du pole dance émerge dans les spectacles itinérants des années 1920 :

**Les "hoochie coochie" shows** (foires itinérantes, cirques, carnavals) présentent des danseuses dans des tentes, parfois sur de petites scènes équipées d'un poteau central utilisé comme appui ou accessoire de danse.

Dans les années **1950–1980**, le pole s'installe dans les **gentlemen's clubs** (bars de strip clubs) aux États-Unis et au Canada. Les danseuses utilisent le poteau comme point d'ancrage pour leurs performances. L'association entre pole dance et strip-tease date de cette époque.

Cette association stigmatisante a longtemps freiné la reconnaissance du pole comme discipline à part entière — des femmes comme **Fawnia Mondey** (première à enseigner le pole en dehors des clubs, dès les années 1990) ont travaillé à changer cette image.`,
      },
      {
        titre: 'La révolution sportive et artistique (1990–2010)',
        contenuMarkdown: `**Fawnia Mondey** crée en 1994 la première vidéo pédagogique de pole dance destinée au grand public. Elle ouvre le premier studio de pole non lié à un club adulte et forme les premières enseignantes.

Dans les années **2000**, le mouvement s'accélère :
- Des studios de pole dance ouvrent dans le monde entier.
- **Kat Bjelland** et **Wendy Traskos** fondent des associations professionnelles.
- Les premières **compétitions internationales** de pole sport apparaissent (Miss Pole Dance World, 2005).
- La pratique se féminise massivement et devient un loisir sportif populaire.

En **2017**, la **Fédération Internationale de Pole Sports (IPSF)** obtient la reconnaissance de l'Association Mondiale des Sports (GAISF) — étape vers les Jeux Olympiques.

**La distinction pole sport / pole art** s'affirme :
- Le **pole sport** juge la difficulté technique, la force, la souplesse.
- Le **pole art** valorise l'expression artistique, la narration, l'esthétique.
- Le **pole contemporain** fusionne avec la danse contemporaine et le cirque.`,
      },
      {
        titre: "Le pole dance en France et aujourd'hui",
        contenuMarkdown: `En France, le pole dance se développe à partir des années **2000–2005** avec l'ouverture des premiers studios parisiens. La **Fédération Française de Pole Sports** est créée et organise des championnats nationaux.

La **question du regard** reste centrale dans le débat sur le pole :
- Pour certains, son origine dans le strip-club en fait une discipline perpétuant l'objectification des femmes.
- Pour les pratiquantes, le pole est une réappropriation du corps : force, discipline, confiance en soi.
- Le mouvement **body positive** et la diversité des pratiquant·e·s (toutes morphologies, tous genres) ont transformé l'image du pole.

**Les hommes et le pole** : longtemps marginalisés dans une pratique très féminisée, les pratiquants masculins et non-binaires sont de plus en plus présents dans les compétitions et les studios.

Aujourd'hui, le pole dance est enseigné :
- En studios indépendants (la majorité)
- Dans certains conservatoires de danse
- Dans des clubs de fitness
- En ligne (tutoriels, cours à distance)

Les grandes figures mondiales actuelles incluent des artistes comme **Anastasia Skukhtorova**, **Colby Justice** (États-Unis), et en France des compétiteurs régulièrement présents aux podiums européens et mondiaux.`,
      },
    ],
  },
]
