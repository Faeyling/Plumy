import type { Terme } from '../schema'

export const termesUnite2: Terme[] = [
  // ─── Ballet ───────────────────────────────────────────────────────────────

  {
    id: 'ballet-de-cour',
    nom: 'Ballet de cour',
    alias: ['ballet courtisan', 'court ballet'],
    disciplines: ['classique'],
    categories: ['culture-histoire'],
    definition: "Spectacle chorégraphique né à la cour italienne du XVIe siècle et développé en France sous Henri III et Louis XIV, mêlant danse, musique, chant et poésie pour célébrer le pouvoir royal.",
    description: "Le ballet de cour est l'ancêtre direct de toutes les formes de danse académique. Il naît en Italie avec les 'balletti' des fêtes de la Renaissance, avant d'être importé en France par Catherine de Médicis.\n\nLe **Ballet Comique de la Reine** (1581), commandé par Catherine de Médicis, est considéré comme le premier ballet de cour documenté. Cinq heures de spectacle, 10 000 spectateurs, un livret imprimé — c'est déjà un événement de prestige politique autant qu'artistique.\n\nSous **Louis XIV** (1638–1715), le ballet de cour atteint son apogée. Le Roi-Soleil lui-même danse dans les spectacles, jusqu'à l'âge de 33 ans. En 1661, il fonde la première **Académie Royale de Danse** — l'institution qui codifiera les bases techniques du ballet classique pendant trois siècles.\n\nLes cinq positions des pieds, la terminologie franco-italienne, l'orientation vers le public (la 'face') — tout cela vient du ballet de cour.",
    erreursCourantes: [
      "Croire que le ballet est né en France — il naît en Italie, s'épanouit en France.",
      "Oublier que Louis XIV était lui-même danseur, pas seulement mécène.",
      "Confondre ballet de cour (divertissement aristocratique) et ballet académique (spectacle pour public).",
    ],
    conseils: [
      "La prochaine fois que tu travailles tes 5 positions, pense à Louis XIV qui les pratiquait dans les Grandes Galeries de Versailles. C'est la même technique, 350 ans plus tard.",
    ],
    etymologie: "De l'italien 'balletto', diminutif de 'ballo' (bal, danse). Le 'de cour' indique le cadre aristocratique.",
    difficulteInterne: 2,
    termesLies: ['ballet-romantique', 'ballet-classique-academique'],
  },

  {
    id: 'ballet-romantique',
    nom: 'Ballet romantique',
    alias: ['ballet blanc', 'ballet romantique français'],
    disciplines: ['classique'],
    categories: ['culture-histoire'],
    definition: "Courant chorégraphique du XIXe siècle (1830–1870) caractérisé par la prédominance des danseuses, l'essor de la danse sur pointes, le tutu romantique long et les thèmes surnaturels.",
    description: "Le ballet romantique marque un basculement radical : la danseuse devient l'héroïne centrale du spectacle, et le danseur masculin est relégué au rôle de faire-valoir.\n\n**Les grandes œuvres :**\n- *La Sylphide* (1832, Filippo Taglioni pour sa fille Marie) — première utilisation narrative des pointes\n- *Giselle* (1841, Coralli et Perrot) — le chef-d'œuvre du genre\n- *La Péri* (1843)\n\n**Marie Taglioni** (1804–1884) est la figure emblématique de cette période. Sa légèreté surnaturelle, obtenue grâce aux pointes, redéfinit l'esthétique du ballet.\n\n**Le tutu romantique** — long, en tulle blanc, tombant sous le genou — symbolise l'immatérialité des créatures surnaturelles (sylphides, wilis, ondines) qui peuplent ces ballets.\n\nLe romantisme en danse correspond au romantisme littéraire : nature, surnaturel, amour impossible, idéalisation du féminin.",
    erreursCourantes: [
      "Confondre ballet romantique et ballet classique — ce sont deux époques et deux esthétiques distinctes.",
      "Croire que la danse sur pointes existait avant le romantisme — elle émerge précisément pour les besoins de ces rôles surnaturels.",
    ],
    etymologie: "Du mouvement artistique romantique (Romantisme), du latin 'romanus' via l'ancien français 'romant' (roman, récit imaginaire).",
    difficulteInterne: 2,
    termesLies: ['ballet-de-cour', 'ballet-classique-academique', 'sur-les-pointes'],
  },

  {
    id: 'ballet-classique-academique',
    nom: 'Ballet classique académique',
    alias: ['grand ballet classique', 'ballet impérial russe', 'ballet Petipa'],
    disciplines: ['classique'],
    categories: ['culture-histoire'],
    definition: "Forme canonique du ballet développée en Russie impériale par Marius Petipa (1818–1910), caractérisée par la rigueur technique, la hiérarchie des rôles et les grands ballets à actes.",
    description: "Après le déclin du ballet romantique en France, c'est en **Russie** que le ballet classique trouve son âge d'or. Le chorégraphe français **Marius Petipa**, installé à Saint-Pétersbourg, crée les chefs-d'œuvre du répertoire :\n\n- *Le Lac des cygnes* (1895, avec Ivanov)\n- *La Belle au bois dormant* (1890)\n- *Casse-Noisette* (1892, avec Ivanov)\n- *Raymonda* (1898)\n\nPetipa codifie un langage chorégraphique précis :\n- **Hiérarchie** : prima ballerina, danseuse étoile, corps de ballet\n- **Structure** : actes, tableaux, divertissements, pas de deux (Adage-Variations-Coda)\n- **Technique** : 32 fouettés, grands adages, manèges\n\nLe **tutu classique** court (en plateau) remplace le tutu romantique long — il dégage les jambes pour montrer la technique.\n\nLa **danse sur pointes** devient le langage obligatoire des danseuses.\n\nAu début du XXe siècle, les **Ballets Russes** de Diaghilev modernisent cette tradition en collaborant avec Nijinski, Fokine, Stravinski, Picasso.",
    erreursCourantes: [
      "Situer le ballet classique en France — son apogée est russe.",
      "Oublier que Petipa était français expatrié, pas russe.",
    ],
    difficulteInterne: 2,
    termesLies: ['ballet-romantique', 'sur-les-pointes', 'corps-de-ballet'],
  },

  {
    id: 'sur-les-pointes',
    nom: 'Sur les pointes',
    alias: ['pointe', 'danse en pointe', 'chausson de pointe'],
    disciplines: ['classique'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Technique de danse permettant à la danseuse de se tenir et de se déplacer sur l'extrémité des orteils grâce à des chaussons renforcés (chaussons de pointe).",
    description: "La danse sur pointes est née du ballet romantique pour donner corps aux créatures surnaturelles — sylphides, willis, ondines — qui semblent flotter au-dessus du sol.\n\n**Histoire :** La première utilisation notable est attribuée à **Marie Taglioni** dans *La Sylphide* (1832), bien que des danseuses aient expérimenté les pointes dès 1820.\n\n**L'évolution du chausson :** Les premiers chaussons de pointe étaient des pointes de satin rafistolées avec des darnings (coutures de renfort). Le chausson moderne possède une **boîte** rigide en papier mâché ou en colle dure, une **semelle** et un **comptoir** — une structure qui prend 8 à 12 heures d'utilisation pour se 'casser' au pied de chaque danseuse.\n\n**Physiologie :** Danser sur pointes concentre le poids corporel sur les deux premiers orteils et la boîte du chausson. Cela exige : un alignement parfait cheville-genou-hanche, des muscles intrinsèques du pied très forts, et une pratique progressive (jamais avant 10–12 ans selon les podologues).\n\nLa danse masculine sur pointes existe (traditions historiques, chorégraphies contemporaines) mais reste rare.",
    erreursCourantes: [
      "Laisser les enfants de moins de 10-11 ans travailler en pointes — risque de déformation osseuse grave.",
      "Confondre demi-pointe (relevé sur la plante du pied) et pointe (sur le bout des orteils).",
      "Utiliser des chaussons mal adaptés à la morphologie du pied (largeur, longueur, dureté de la boîte).",
    ],
    securite: {
      risques: ["Hallux valgus", "Ongles incarnés et mycoses", "Fractures de stress du 2e métatarse", "Syndrome du canal tarsien"],
      precautions: ["Bilan podologique avant le début des pointes", "Soins réguliers des pieds", "Progression graduelle du temps de travail en pointes"],
    },
    difficulteInterne: 2,
    termesLies: ['ballet-romantique', 'ballet-classique-academique'],
  },

  {
    id: 'corps-de-ballet',
    nom: 'Corps de ballet',
    alias: ['ballet corps', 'coryphées'],
    disciplines: ['classique'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Ensemble des danseurs et danseuses qui évoluent en groupe dans un ballet, formant des formations géométriques et des tableaux collectifs, par opposition aux solistes et aux étoiles.",
    description: "Le corps de ballet est à la fois un élément dramaturgique et une institution sociale.\n\n**Rôle artistique :** Il crée les tableaux de masse — les 24 wilis de *Giselle*, les 32 cygnes du *Lac des cygnes* — qui sont parmi les images les plus iconiques du ballet. La perfection de l'ensemble, l'alignement, la synchronisation font du corps de ballet un instrument chorégraphique à part entière.\n\n**Structure hiérarchique (ex : Opéra de Paris) :**\n1. Quadrilles (entrée)\n2. Coryphées\n3. Sujets\n4. Premiers danseurs\n5. Étoiles (nommées par le directeur, sans concours)\n\nCette hiérarchie stricte, héritée du système Petipa, régit les carrières. Un concours annuel interne permet de gravir les échelons.\n\n**Évolution :** Le ballet contemporain remet en question cette hiérarchie. Des compagnies comme la Batsheva (Israel) ou la compagnie de Pina Bausch organisent leurs danseurs différemment, sans cette verticalité.",
    erreursCourantes: [
      "Penser que 'corps de ballet' signifie 'le moins bon danseur' — c'est une fonction, pas une valeur.",
      "Ignorer que le corps de ballet exige une technique aussi aboutie que les solistes, avec l'exigence supplémentaire de la précision collective.",
    ],
    difficulteInterne: 1,
    termesLies: ['ballet-classique-academique'],
  },

  // ─── Moderne / Contemporain ───────────────────────────────────────────────

  {
    id: 'danse-moderne',
    nom: 'Danse moderne',
    alias: ['modern dance', 'danse d\'avant-garde américaine'],
    disciplines: ['moderne'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Mouvement chorégraphique né aux États-Unis au début du XXe siècle en rupture avec le ballet académique, fondé sur l'expression intérieure, la gravité et la psychologie du mouvement.",
    description: "La danse moderne est une révolution. Elle dit non aux pointes, aux tutus, aux conventions académiques — et cherche un mouvement qui vient de l'intérieur.\n\n**Les pionnières :**\n- **Isadora Duncan** (1877–1927) : pieds nus, tuniques grecques, inspiration de la nature. 'Je ne veux pas danser ce que je vois, je veux danser ce que je sens.'\n- **Loïe Fuller** (1862–1928) : costumes lumineux, précurseure de la performance totale\n- **Ruth St. Denis et Ted Shawn** (Denishawn School) : mélange d'orientalisme et d'expressivité\n\n**La deuxième génération — les grands systèmes techniques :**\n- **Martha Graham** : contraction et release, work at floor\n- **Doris Humphrey** : fall and recovery, arc entre équilibre et déséquilibre\n- **José Limón** : succession et momentum dans les membres\n- **Lester Horton** : flexibilité latérale et esthétique multiculturelle\n\nChaque chorégraphe développe sa propre technique, transmissible — ce qui distingue la danse moderne du ballet où il n'y a qu'une technique.",
    erreursCourantes: [
      "Confondre danse moderne et danse contemporaine — ce sont deux générations distinctes.",
      "Croire que la danse moderne est 'libre' et sans technique — elle a des techniques aussi précises et exigeantes que le ballet.",
    ],
    etymologie: "De l'anglais 'modern dance', terminologie imposée par les critiques américains des années 1920.",
    difficulteInterne: 2,
    termesLies: ['ausdruckstanz', 'danse-contemporaine', 'danse-postmoderne'],
  },

  {
    id: 'ausdruckstanz',
    nom: 'Ausdruckstanz',
    alias: ['danse expressionniste', 'expressionnisme en danse', 'danse d\'expression'],
    disciplines: ['moderne', 'contemporain'],
    categories: ['culture-histoire'],
    definition: "Mouvement de danse expressionniste né en Allemagne au début du XXe siècle, cherchant à extérioriser les états intérieurs — angoisse, joie, désir — par un mouvement total du corps.",
    description: "L'Ausdruckstanz ('danse d'expression' en allemand) est le pendant européen de la modern dance américaine. Il émerge dans l'Allemagne de la République de Weimar (1919–1933), nourri par l'Expressionnisme en peinture (Die Brücke, Der Blaue Reiter).\n\n**Figures clés :**\n- **Rudolf Laban** (1879–1958) : théoricien, fondateur du système d'analyse du mouvement\n- **Mary Wigman** (1886–1973) : figure emblématique, travaille la peur, la transe, le groupe\n- **Kurt Jooss** : crée *La Table Verte* (1932), chef-d'œuvre contre la guerre\n\nL'Ausdruckstanz refuse les conventions du ballet autant que les clichés de la beauté. Il explore :\n- La laideur comme outil expressif\n- Le rapport au groupe et à la masse\n- L'espace et l'architecture du mouvement\n\nCe courant sera interrompu par la montée du nazisme (1933). Laban et Wigman seront un temps récupérés par le régime, puis interdits. Jooss s'exile en Angleterre.\n\nL'Ausdruckstanz ressurgit dans les années 1960–70 avec **Pina Bausch** (élève de Jooss) et le **Tanztheater**.",
    erreursCourantes: [
      "Confondre Ausdruckstanz et ballet romantique parce que les deux parlent d'émotion — leurs approches sont radicalement opposées.",
    ],
    etymologie: "De l'allemand 'Ausdrucks' (expression) et 'Tanz' (danse).",
    difficulteInterne: 3,
    termesLies: ['danse-moderne', 'danse-contemporaine', 'effort-laban'],
  },

  {
    id: 'danse-contemporaine',
    nom: 'Danse contemporaine',
    alias: ['contemporary dance', 'danse actuelle'],
    disciplines: ['contemporain'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Courant chorégraphique issu de la danse moderne à partir des années 1950–60, caractérisé par la remise en question des formes spectaculaires, l'inclusion du quotidien et l'hybridation avec d'autres arts.",
    description: "La danse contemporaine n'est pas définie par un style, mais par une posture : elle remet toujours en question ce qu'est la danse.\n\n**Merce Cunningham** (1919–2009) est souvent considéré comme la charnière entre moderne et contemporain. Ses innovations :\n- Séparation de la danse et de la musique (ils sont créés indépendamment)\n- Rejet de la narration et de l'expression psychologique\n- Hasard comme procédure chorégraphique\n\n**Pina Bausch** (1940–2009) invente le **Tanztheater** : théâtre-danse qui interroge les rapports humains, la violence, le désir — avec une intensité émotionnelle unique.\n\n**William Forsythe** déconstruit le ballet académique avec une intelligence algorithmique et une physicalité explosive.\n\n**Steve Paxton** crée le **contact improvisation** (1972) — une forme d'improvisation duettiste fondée sur le poids partagé.\n\nEn France, des chorégraphes comme **Maguy Marin**, **Anne Teresa de Keersmaeker**, **Boris Charmatz** développent des approches conceptuelles, politiques et relationnelles de la danse.",
    erreursCourantes: [
      "Penser que 'contemporain' signifie 'fait aujourd'hui' — il désigne un mouvement artistique précis avec une histoire.",
      "Croire qu'on peut faire de la danse contemporaine sans formation technique — les maîtres du genre sont d'abord des techniciens.",
    ],
    difficulteInterne: 2,
    termesLies: ['danse-moderne', 'danse-postmoderne', 'contact-improvisation'],
  },

  {
    id: 'danse-postmoderne',
    nom: 'Danse postmoderne',
    alias: ['Judson Dance Theater', 'postmodern dance'],
    disciplines: ['contemporain'],
    categories: ['culture-histoire'],
    definition: "Mouvement radical né à New York dans les années 1960 (Judson Church Theater) qui déconstruit toutes les conventions du spectacle chorégraphique, jusqu'à mettre en question la définition même de la danse.",
    description: "En 1962, un groupe de danseurs, chorégraphes et artistes visuels commence à se réunir à la **Judson Memorial Church** de Greenwich Village (New York) pour des séances d'exploration radicale.\n\n**Leurs questions :**\n- Faut-il une technique pour danser ?\n- Le quotidien est-il de la danse ?\n- Qui peut danser ?\n- Où peut-on danser ?\n\n**Les réponses apportées :**\n- **Yvonne Rainer** : 'No manifesto' — non à la virtuosité, non à la transformation, non à la magie\n- **Steve Paxton** : travaille avec des non-danseurs, crée le contact improvisation\n- **Trisha Brown** : danse sur les façades d'immeubles, au plafond, sur des toits\n- **Meredith Monk** : intègre la voix et la narration fragmentée\n\nLa danse postmoderne ouvre la voie à la danse-performance, à la danse in situ, à l'improvisation structurée et aux arts pluridisciplinaires qui dominent aujourd'hui.",
    erreursCourantes: [
      "Confondre postmoderne en danse et postmodernisme philosophique — même si des liens existent, l'un précède l'autre.",
    ],
    difficulteInterne: 3,
    termesLies: ['danse-contemporaine', 'contact-improvisation'],
  },

  {
    id: 'contact-improvisation',
    nom: 'Contact improvisation',
    alias: ['CI', 'contact impro'],
    disciplines: ['contemporain'],
    categories: ['culture-histoire', 'qualites-de-mouvement'],
    definition: "Forme d'improvisation de danse créée par Steve Paxton en 1972, fondée sur le partage du poids, le point de contact physique entre deux ou plusieurs danseurs et la réponse kinesthésique mutuelle.",
    description: "Steve Paxton présente *Magnesium* en 1972 — une démonstration chorégraphique avec des hommes non-danseurs qui roulent, tombent, se soulèvent sans musique ni costume. C'est l'acte de naissance du contact improvisation.\n\n**Principes fondamentaux :**\n- **Le point de contact** : une zone de contact entre deux corps (épaule contre dos, main contre sternum) devient le 'point de référence' commun\n- **Le poids partagé** : donner et recevoir du poids en confiance\n- **L'écoute kinesthésique** : suivre les impulses du partenaire sans les anticiper ni les dominer\n- **La chute et le vol** : accepter la gravité comme moteur du mouvement\n\n**Ce n'est pas :** une technique de portés acrobatiques, une danse de séduction, un exercice thérapeutique (même si des usages thérapeutiques existent).\n\nLe CI est aujourd'hui pratiqué dans le monde entier sous forme de 'jams' ouvertes (séances libres où tout le monde peut danser avec tout le monde) et de festivals.",
    erreursCourantes: [
      "Confondre contact improvisation et danse-contact (terme générique) ou tango.",
      "Forcer le mouvement plutôt que de 'suivre' — le CI est une écoute, pas un dialogue de sourds.",
    ],
    difficulteInterne: 3,
    termesLies: ['danse-postmoderne', 'danse-contemporaine', 'effort-laban'],
  },

  // ─── Jazz ─────────────────────────────────────────────────────────────────

  {
    id: 'origines-jazz-dance',
    nom: 'Origines du jazz dance',
    alias: ['racines africaines du jazz', 'danse afro-américaine'],
    disciplines: ['jazz'],
    categories: ['culture-histoire'],
    definition: "Le jazz dance naît au tournant du XXe siècle dans les communautés afro-américaines du Sud américain, à la confluence des traditions de danse africaines, des spirituals et du ragtime.",
    description: "Le jazz dance est inséparable de la musique jazz — et les deux partagent les mêmes racines.\n\n**Les origines africaines :** Les danses d'Afrique de l'Ouest amenées par les esclaves conservent des éléments fondamentaux : polyrythmie, polycentrisme du corps (chaque partie bouge indépendamment), connexion à la terre, improvisation. La danse est collective, rituelle, improvisée — expression de la vie à chaque instant.\n\n**La diaspora créole :** À la **Place Congo** de La Nouvelle-Orléans, les esclaves libres conservent leurs pratiques de danse jusqu'aux années 1840. Ce carrefour culturel est l'un des berceaux du jazz.\n\n**Le minstrelsy et ses paradoxes :** Les spectacles de minstrelsy (1840–1920) diffusent des danses afro-américaines dans une forme dégradante et raciste (blackface). **William Henry Lane** (c. 1825–1852), dit *Master Juba*, est le premier artiste noir à intégrer une troupe de minstrels 'blancs' — virtuose des claquettes, reconnu même par la presse londonienne lors de sa tournée en Angleterre. Il est l'un des ancêtres de la tap dance.\n\n**Harlem Renaissance (1920s) :** La migration des Noirs américains vers le Nord, le Harlem de l'entre-deux-guerres, les grandes salles de danse (Savoy Ballroom, Cotton Club) — tout cela forge le jazz social : Charleston, Black Bottom, Lindy Hop.\n\n**Les années swing (1930–40s) :** Avec les grands orchestres de Duke Ellington, Cab Calloway et Count Basie, le jazz devient musique de masse. Le swing fait danser l'Amérique entière. Des claquettistes comme les Nicholas Brothers, Bill 'Bojangles' Robinson et les Berry Brothers atteignent une notoriété internationale.\n\nLe jazz dance n'existe pas sans cette histoire. En ignorer les racines, c'est en perdre le sens.",
    erreursCourantes: [
      "Présenter le jazz dance comme une invention blanche ou européenne — ses racines sont afro-américaines.",
      "Séparer le jazz dance de la musique jazz, comme s'ils étaient des disciplines indépendantes.",
      "Oublier Master Juba — le jazz dance a des précurseurs identifiés dès les années 1840.",
    ],
    difficulteInterne: 2,
    termesLies: ['lindy-hop', 'jazz-theatrical', 'cotton-club', 'nicholas-brothers', 'katherine-dunham'],
  },

  {
    id: 'lindy-hop',
    nom: 'Lindy Hop',
    alias: ['Lindy', 'jitterbug'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'pas'],
    definition: "Danse sociale afro-américaine née à Harlem en 1928, fondée sur le swing, le partenariat improvisé et les figures acrobatiques (breakaways), considérée comme la mère des danses swing.",
    description: "Le Lindy Hop naît au **Savoy Ballroom** de Harlem, la salle de bal légendaire qui ouvre en 1926 et où Noirs et Blancs dansaient ensemble — rare en cette période de ségrégation.\n\nSon nom vient d'un titre de journal célébrant l'exploit de Charles **Lindy**bergh (traversée de l'Atlantique, 1927) — la danseuse « Shorty » George Snowden aurait baptisé sa nouvelle danse ainsi lors d'un marathon.\n\n**Caractéristiques :**\n- Structure en 8 temps (pas de base Lindy) ou en 6 temps (swing out)\n- **Breakaway** : moment où les partenaires se séparent pour improviser librement avant de se retrouver\n- Polycentrisme du corps, basse énergie dans les pieds, rebond constant\n- Acrobaties (aérials) développées pour les concours\n\n**Diffusion mondiale :** Les films hollywoodiens des années 1940 (avec Frankie Manning et Norma Miller) propagent le Lindy dans le monde entier. Il devient le jitterbug en Europe.\n\nLe Lindy Hop connaît un revival mondial à partir des années 1980–90 et est aujourd'hui pratiqué dans des centaines de villes.",
    erreursCourantes: [
      "Penser que le Lindy est une danse européenne — il naît à Harlem.",
      "Confondre Lindy Hop (swing) et East Coast Swing (forme commercialisée et simplifiée des années 1950).",
    ],
    difficulteInterne: 2,
    termesLies: ['origines-jazz-dance', 'jazz-theatrical'],
  },

  {
    id: 'jazz-theatrical',
    nom: 'Jazz théâtral',
    alias: ['theatrical jazz', 'jazz de Broadway', 'Broadway jazz'],
    disciplines: ['jazz'],
    categories: ['culture-histoire'],
    definition: "Forme de jazz dance développée pour les scènes de Broadway et Hollywood à partir des années 1940, codifiée par des chorégraphes comme Jack Cole, Bob Fosse et Jerome Robbins.",
    description: "Le jazz théâtral opère la synthèse entre les racines afro-américaines du jazz et les exigences du spectacle musical commercial.\n\n**Jack Cole** (1911–1974) est souvent appelé le 'père du jazz théâtral'. Il intègre les isolations de kathak indien, le swing afro-américain et la précision de la danse de music-hall dans un style urbain, sophistiqué, à la fois technique et sexy.\n\n**Bob Fosse** (1927–1987) pousse le jazz théâtral vers son esthétique la plus reconnaissable : chapeau melon, gants blancs, genoux tournés vers l'intérieur, mains en éventail, mouvements du bassin. *Chicago*, *Cabaret*, *All That Jazz*.\n\n**Jerome Robbins** (1918–1998) apporte une dimension plus lyrique et narrative : *West Side Story* (1957) est un sommet de l'intégration entre danse, music et drama.\n\nLe jazz théâtral est aujourd'hui au programme de la plupart des écoles de danse en France, souvent sous le nom de 'jazz' tout court.",
    erreursCourantes: [
      "Penser que 'jazz' = 'jazz théâtral Broadway' — c'est une forme parmi d'autres du jazz dance.",
      "Oublier que Fosse a subi une influence majeure de la danseuse afro-américaine Gwen Verdon.",
    ],
    difficulteInterne: 2,
    termesLies: ['origines-jazz-dance', 'lindy-hop', 'katherine-dunham', 'alvin-ailey'],
  },

  {
    id: 'cotton-club',
    nom: 'Cotton Club',
    alias: ['Club de Harlem', 'Cotton Club de Harlem'],
    disciplines: ['jazz'],
    categories: ['culture-histoire'],
    definition: "Salle de spectacle mythique ouverte en 1923 au cœur de Harlem (142e rue, Lenox Avenue), qui a révélé au grand public américain les plus grands artistes noirs — Duke Ellington, Cab Calloway, Lena Horne — devant un public quasi exclusivement blanc.",
    description: "Le Cotton Club, c'est l'un des lieux les plus importants — et les plus ambigus — de l'histoire du jazz. Un endroit où les plus grands artistes noirs américains ont fait leurs armes, devant des salles qui leur refusaient par ailleurs tous les droits civiques.\n\n**Les faits :**\n- Ouvert en 1923 à Harlem, repris en 1927 par Owney Madden (gangster irlando-américain)\n- Résidence de **Duke Ellington** de 1927 à 1931 — c'est là que son orchestre devient légendaire\n- Puis de **Cab Calloway** (1931–1940), dont le style exubérant définit une époque\n- Retransmis à la radio nationale : des millions d'Américains découvrent le jazz et le swing depuis leur salon\n- **Claquettistes légendaires** : les Nicholas Brothers, Bill 'Bojangles' Robinson, les Berry Brothers\n\n**L'ambiguïté historique :**\nLes artistes étaient Noirs. Le public était entièrement blanc. Les musiciens et danseurs ne pouvaient pas s'asseoir dans la salle où ils se produisaient. Le Cotton Club est à la fois le berceau de la gloire du jazz et le symbole de la ségrégation de l'Amérique des années 1920-30.\n\n**La fermeture :**\nAprès des émeutes raciales à Harlem en 1935, le Cotton Club déménage à Midtown Manhattan. Il ferme définitivement en 1940.",
    erreursCourantes: [
      "Imaginer le Cotton Club comme un endroit inclusif — le public était entièrement blanc, les artistes noirs ne pouvaient pas y être clients.",
      "Croire que les artistes qui s'y produisaient n'avaient pas conscience de cette ambiguïté — beaucoup l'ont exprimée ouvertement.",
    ],
    difficulteInterne: 1,
    termesLies: ['origines-jazz-dance', 'lindy-hop', 'nicholas-brothers'],
  },

  {
    id: 'katherine-dunham',
    nom: 'Katherine Dunham',
    alias: ['Dunham', 'Dunham technique', 'technique Dunham'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Danseuse, chorégraphe et anthropologue américaine (1909–2006), considérée comme l'une des figures fondatrices du jazz dance moderne — elle a construit le premier pont documenté entre les danses afro-caribéennes et la scène américaine.",
    description: "Katherine Dunham, c'est quelqu'un qui me fascine profondément. Elle n'était pas juste danseuse : elle était chercheuse, militante, pédagogue. Et elle a changé la danse jazz pour toujours.\n\n**Biographie clé :**\n- Née le 22 juin 1909 dans l'Illinois (banlieue de Chicago)\n- Étudie l'anthropologie à l'Université de Chicago\n- Dans les années 1930, part aux Caraïbes et en Afrique en expédition anthropologique pour étudier les danses tribales — elle ne regarde pas, elle apprend et danse\n- Fonde sa propre compagnie de danse afro-américaine dans les années 1930\n- Décède le 21 mai 2006 à New York, à 96 ans\n\n**La Dunham Technique :**\nElle crée une technique codifiée qui intègre :\n- Les isolations du torse et du bassin issues des danses caribéennes\n- Le polycentrisme africain\n- Des éléments de ballet classique pour la rigueur technique\n- L'expression émotionnelle et le sens du rythme du jazz\n\n**Son influence :**\nAlvin Ailey, Arthur Mitchell (fondateur du Dance Theater of Harlem), Talley Beatty — tous reconnaissent sa dette envers Katherine Dunham. Elle est la mère invisible de plusieurs générations du jazz et de la danse afro-américaine.\n\n**Son militantisme :**\nEn 1944, elle refuse de se produire à Louisville (Kentucky) devant un public ségrégé. À 89 ans, elle entame une grève de la faim pour protester contre le traitement des réfugiés haïtiens aux États-Unis.",
    erreursCourantes: [
      "Réduire Katherine Dunham à une 'danseuse de jazz' — elle était avant tout anthropologue et activiste.",
      "Oublier qu'elle a codifié une technique complète, pas seulement un style.",
    ],
    conseils: [
      "Cherche des archives vidéo de la Dunham Company. Son travail des années 1940-50 est d'une modernité saisissante.",
    ],
    difficulteInterne: 2,
    termesLies: ['origines-jazz-dance', 'alvin-ailey', 'jazz-theatrical', 'sous-style-afro-jazz'],
  },

  {
    id: 'alvin-ailey',
    nom: 'Alvin Ailey',
    alias: ['Alvin Ailey American Dance Theater', 'AAADT', 'Revelations'],
    disciplines: ['jazz'],
    categories: ['culture-histoire'],
    definition: "Danseur et chorégraphe afro-américain (1931–1989), fondateur de l'Alvin Ailey American Dance Theater (1958) à New York — l'une des compagnies de danse les plus influentes du XXe siècle, et créateur de *Revelations*, l'œuvre chorégraphique la plus vue au monde.",
    description: "Alvin Ailey, c'est l'homme qui a mis la danse afro-américaine sur toutes les scènes du monde. Et *Revelations*, c'est probablement la pièce de danse la plus vue de l'histoire.\n\n**Biographie clé :**\n- Né le 5 janvier 1931 à Rogers, Texas, dans le Sud ségrégationniste\n- Découvre la danse à Los Angeles, étudié notamment auprès de Lester Horton\n- Se forme aussi auprès de Martha Graham, Charles Weidman, Hanya Holm — il absorbe tout\n- Influence décisive de **Katherine Dunham**, dont il est un élève et admirateur\n- Fonde l'**Alvin Ailey American Dance Theater** à New York en 1958\n- Crée *Revelations* en **1960** — sa masterpiece, jamais retirée du répertoire depuis 65 ans\n- Décède le 1er décembre 1989, à 58 ans, de complications liées au SIDA\n\n**Revelations (1960) :**\nSur des spirituals et du gospel afro-américain, Ailey met en scène la foi, la douleur, la résilience et la joie de la communauté noire américaine. La pièce a été jouée devant plus de 23 millions de personnes dans 71 pays sur 6 continents.\n\n**Son héritage :**\nLa compagnie qu'il fonde continue sous la direction de Judith Jamison (puis Robert Battle). L'école Ailey, basée à New York, forme des danseurs du monde entier.\n\n**Sa vision :**\n'La danse vient du cœur', disait-il, 'et quand elle est faite avec sentiment, elle peut toucher d'autres cœurs.'",
    erreursCourantes: [
      "Classer Ailey comme 'danse moderne' seulement — son œuvre intègre jazz, gospel, blues, africain et contemporain.",
      "Penser que *Revelations* est une pièce ancienne sans rapport avec aujourd'hui — elle est jouée intégralement à chaque saison depuis 1960.",
    ],
    conseils: [
      "Regarde *Revelations* en entier — les 29 minutes. La section finale 'Rocka My Soul' est l'une des plus jubilatoires de tout le répertoire.",
    ],
    difficulteInterne: 1,
    termesLies: ['katherine-dunham', 'jazz-theatrical', 'origines-jazz-dance'],
  },

  {
    id: 'nicholas-brothers',
    nom: 'Nicholas Brothers',
    alias: ['Fayard Nicholas', 'Harold Nicholas', 'les frères Nicholas'],
    disciplines: ['jazz'],
    categories: ['culture-histoire'],
    definition: "Duo de danseurs-acrobates afro-américains composé de Fayard (1914–2006) et Harold (1921–2000) Nicholas — considérés comme les plus grands claquettistes-acrobates de l'histoire, révélés au Cotton Club et immortalisés par le cinéma hollywoodien.",
    description: "Les Nicholas Brothers, c'est deux frères qui ont fait des choses sur une scène que personne avant eux n'avait faites — et que très peu ont pu égaler depuis. Fred Astaire lui-même les a désignés comme 'le plus grand numéro de danse du monde.'\n\n**Biographie clé :**\n- **Fayard Nicholas** (20 octobre 1914 – 24 janvier 2006) : l'aîné, plus lyrique\n- **Harold Nicholas** (27 mars 1921 – 3 juillet 2000) : le cadet, plus acrobatique\n- Nés à Philadelphie de parents musiciens\n- Révélés au **Cotton Club** de Harlem dès les années 1930\n- Retransmis à la radio nationale depuis le Cotton Club — leur popularité explose\n\n**Ce qui les rend uniques :**\nLeur style fusionne la claquette avec une acrobatie extraordinaire (splits complets, sauts, culbutes) tout en maintenant une élégance de costume et de posture digne du ballet. Jambes toujours tendues dans les sauts, atterrissages silencieux — une précision technique hors norme.\n\n**La séquence culte :**\nDans *Stormy Weather* (film de 1943), leur numéro final descend un escalier monumental en glissant en split d'une marche à l'autre — sans coupure de montage. Fred Astaire et Gene Kelly la citaient comme la plus grande séquence de danse jamais filmée.\n\n**Ségrégation :**\nMalgré leur célébrité mondiale, ils ne pouvaient pas loger dans les hôtels des villes où ils se produisaient. Harold a fini par s'installer à Paris pour échapper à la ségrégation américaine.",
    erreursCourantes: [
      "Les oublier dans l'histoire du jazz au profit des seuls danseurs blancs d'Hollywood.",
      "Confondre leur style avec de la simple acrobatie — c'est d'abord une technique de claquettes d'un niveau exceptionnel.",
    ],
    conseils: [
      "Cherche 'Nicholas Brothers Stormy Weather' sur YouTube. Ces 3 minutes ont changé l'histoire de la danse.",
    ],
    difficulteInterne: 1,
    termesLies: ['origines-jazz-dance', 'cotton-club', 'jazz-theatrical'],
  },

  {
    id: 'matt-mattox',
    nom: 'Matt Mattox',
    alias: ['Mattox', 'technique Mattox', 'jazz lyrique Mattox'],
    disciplines: ['jazz'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Danseur et pédagogue américain (1921–2013), élève de Jack Cole, qui a codifié une technique de jazz lyrique angulaire et a eu une influence décisive sur l'enseignement du jazz en France et en Europe.",
    description: "Matt Mattox, c'est un nom que tout élève de jazz en France devrait connaître — parce que la façon dont le jazz est enseigné dans les écoles françaises lui doit beaucoup.\n\n**Biographie clé :**\n- Né le 18 août 1921 à Tulsa, Oklahoma\n- Forme sa danse auprès de **Jack Cole** — son maître et modèle\n- Danseur à Broadway dans les années 1940-50 (notamment *Call Me Mister*, *Kiss Me Kate*)\n- Chorégraphe pour la télévision américaine : *The Ed Sullivan Show*, *The Bell Telephone Hour*\n- À partir des années 1970, s'installe en Europe — d'abord à Londres, puis en France\n- Donne des stages et masterclasses en France qui marquent profondément la pédagogie jazz française\n- Décède le 18 mars 2013 en France, à 91 ans\n\n**La technique Mattox :**\nElle se distingue par :\n- Une qualité **angulaire et précise** des bras et des mains\n- Un travail d'**isolations** très développé (héritage Cole)\n- Une dimension **lyrique** — la phrase musicale imprègne chaque mouvement\n- Un rapport particulier au **temps suspendu** entre les accents\n\n**Son impact en France :**\nSes cours au Studio Harmonic à Paris et ses tournées de stages ont formé des générations de profs de jazz français. Sa technique est encore largement enseignée aujourd'hui dans les cursus diplômants.",
    erreursCourantes: [
      "Le confondre avec Bob Fosse — leurs styles sont proches (tous deux élèves de Cole) mais distinctement différents.",
      "Croire que la technique Mattox est une méthode figée — Mattox lui-même la faisait évoluer en permanence.",
    ],
    conseils: [
      "Si tu as l'occasion de suivre un cours 'technique Mattox', saisis-le. C'est l'une des approches les plus formatives pour la musicalité en jazz.",
    ],
    difficulteInterne: 2,
    termesLies: ['jazz-theatrical', 'katherine-dunham', 'origines-jazz-dance'],
  },

  // ─── Cabaret ──────────────────────────────────────────────────────────────

  {
    id: 'cancan',
    nom: 'French cancan',
    alias: ['cancan', 'french can-can'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire', 'pas'],
    definition: "Danse de music-hall née à Paris vers 1830, caractérisée par des levées de jambes très hautes, des ports de jupes et des acrobaties au sol (grand écart), popularisée par le Moulin Rouge à partir de 1889.",
    description: "Le cancan commence comme une danse populaire des bals musettes parisiens — polka exubérante dansée par des couples. Vers 1830, des danseuses professionnelles en font un spectacle de divertissement de plus en plus virtuose.\n\n**Le Moulin Rouge** (ouvert en 1889 sur la butte Montmartre) le catapulte au rang de symbole de Paris. Henri de Toulouse-Lautrec l'immortalise dans ses affiches. La Goulue et Jane Avril deviennent des stars mondiales.\n\n**La technique :**\n- **Battement** : jambe lancée à la verticale, buste droit\n- **Grand écart** : à la réception ou en final\n- **Moulinet** : jambe décrivant un cercle vertical\n- **Port de jupes** : manipulation des volants pour créer du volume et du suspense\n- **Pont** : renversement arrière\n- **Lignes de chorus** : précision de l'ensemble, unisson des jambes\n\nLe cancan exige souplesse, force de jambes, endurance cardiovasculaire et présence scénique. Les interprètes (les quadrilles) sont des athlètes.",
    erreursCourantes: [
      "Croire que le cancan est vulgaire ou simple — c'est une technique exigeante.",
      "Confondre cancan et burlesque — ce sont deux disciplines distinctes avec des esthétiques différentes.",
    ],
    etymologie: "Origine incertaine — peut-être du latin 'quanquam' (dans tous les cas), ou argot signifiant 'scandale'.",
    difficulteInterne: 2,
    termesLies: ['neo-burlesque', 'jazz-theatrical'],
  },

  {
    id: 'kabarett',
    nom: 'Kabarett',
    alias: ['cabaret berlinois', 'cabaret allemand', 'Weimarer Kabarett'],
    disciplines: ['cabaret'],
    categories: ['culture-histoire'],
    definition: "Forme de spectacle artistique et satirique florissante dans l'Allemagne de la République de Weimar (1919–1933), mêlant chanson, danse, sketch, travestissement et critique sociale acerbe.",
    description: "Le Kabarett berlinois est l'une des formes de spectacle les plus riches et les plus courtes de l'histoire de la danse. Il dure exactement le temps de la République de Weimar (1919–1933).\n\n**Contexte :** L'Allemagne post-WWI vit dans la défaite, l'inflation, la liberté morale et l'angoisse politique. Le Kabarett est le miroir de cette époque.\n\n**Caractéristiques :**\n- Mélange de satire politique, de chansonniers, de travestis et de danse\n- Numéros courts et percutants (à l'opposé des grands opéras)\n- Artistes comme **Marlene Dietrich**, **Lotte Lenya**, les revues de l'Admiralspalast\n- Danse expressionniste, charleston, fox-trot — dans des costumes subversifs\n\n**La fin :** Quand les nazis arrivent au pouvoir en 1933, le Kabarett est interdit. Ses artistes fuient en France, en Angleterre, aux États-Unis.\n\nLe film *Cabaret* de Bob Fosse (1972) est l'hommage le plus connu à cette époque — avec Liza Minnelli dans le rôle de Sally Bowles.",
    erreursCourantes: [
      "Confondre Kabarett allemand et cabaret français — les deux existent simultanément mais avec des esthétiques très différentes.",
    ],
    difficulteInterne: 2,
    termesLies: ['cancan', 'neo-burlesque'],
  },

  // ─── Burlesque ────────────────────────────────────────────────────────────

  {
    id: 'burlesque-origines',
    nom: 'Burlesque (origines)',
    alias: ['burlesque victorien', 'burlesque américain'],
    disciplines: ['burlesque'],
    categories: ['culture-histoire'],
    definition: "Forme de spectacle populaire née en Grande-Bretagne au XIXe siècle, importée aux États-Unis, alliant parodie, travestissement, chansons comiques et progressivement effeuillage suggestif.",
    description: "Le burlesque (du latin *burla*, farce) commence comme un genre de parodie littéraire et théâtrale. Au XIXe siècle, les troupes de burlesque parodient les opéras et pièces sérieuses avec humour et exagération.\n\n**Étape américaine (1868–) :** La troupe britannique de Lydia Thompson arrive aux États-Unis en 1868 avec ses 'British Blondes' — des femmes jouant des rôles masculins en collants scandaleux. C'est une révolution.\n\n**L'effeuillage apparaît progressivement :** À mesure que la censure se relâche et que les impresarios cherchent à attirer plus de public, le déshabillé s'installe dans les numéros.\n\n**L'âge d'or (1920s–1940s) :**\n- Les grandes salles de burlesque prolifèrent\n- **Gypsy Rose Lee** (1911–1970) réinvente l'effeuillage en art : humour, distance ironique, présence scénique magistrale\n- **Sally Rand** popularise la danse aux éventails\n\n**Le déclin :** La télévision et les restrictions légales font fermer les salles dans les années 1950–60.",
    erreursCourantes: [
      "Croire que le burlesque a toujours été sexuellement explicite — les origines sont comiques et parodiques.",
      "Confondre burlesque et strip-tease commercial — le burlesque artistique maintient toujours une distance théâtrale.",
    ],
    etymologie: "De l'italien 'burlesco', du latin 'burla' (farce, moquerie).",
    difficulteInterne: 2,
    termesLies: ['neo-burlesque', 'cancan'],
  },

  // ─── Heels ────────────────────────────────────────────────────────────────

  {
    id: 'vogue-ballroom',
    nom: 'Vogue et culture ballroom',
    alias: ['voguing', 'ballroom culture', 'house culture'],
    disciplines: ['heels'],
    categories: ['culture-histoire'],
    definition: "Sous-culture LGBTQ+ afro-américaine et latina née à Harlem dans les années 1960–70, organisée autour de 'balls' (compétitions) où s'affrontent des 'houses' dans des catégories incluant la danse (vogue), la performance et le style.",
    description: "La culture ballroom est née dans les marges — des communautés noires et latinos LGBTQ+ qui se retrouvent à Harlem pour célébrer l'identité, la beauté et l'excellence dans un monde qui les rejette.\n\n**Structure :**\n- Les **houses** (maisons) sont des familles de choix : House of Ninja, House of Xtravaganza, House of LaBeija\n- Les **balls** sont des compétitions par catégories : sex siren, butch queen first time, realness, vogue femme, face, runway...\n- Les **mothers** et **fathers** de maison jouent le rôle de parents et mentors\n\n**Le vogue :** Le nom vient du magazine *Vogue* — une danse qui consiste à 'poser' des couvertures imaginaires. Il y a cinq éléments du vogue : hands performance, catwalk, duckwalk, floor performance et spin & dips.\n\n**La médiatisation :** Le documentaire *Paris is Burning* (Jennie Livingston, 1990) révèle la culture ballroom au grand public. Madonna intègre le vogue dans son clip *Vogue* (1990) — avec les polémiques d'appropriation culturelle qui s'ensuivent.\n\nLa série *Pose* (2018, FX) remet cette culture à l'honneur.\n\n**L'héritage dans le heels :** La danse heels hérite directement du catwalk, de la performance féminine et de l'énergie d'affirmation de soi de la culture ballroom.",
    erreursCourantes: [
      "Croire que Madonna a 'inventé' le vogue — elle l'a popularisé, la culture ballroom existait bien avant.",
      "Dissocier le heels dance de ses racines dans la culture queer et afro-américaine.",
    ],
    difficulteInterne: 2,
    termesLies: ['neo-burlesque', 'heels-dance'],
  },

  {
    id: 'heels-dance',
    nom: 'Heels dance',
    alias: ['danse sur talons', 'stiletto dance', 'feminine dance'],
    disciplines: ['heels'],
    categories: ['culture-histoire'],
    definition: "Discipline de danse sur talons hauts émergée comme style identifiable dans les années 2000–2010, héritière du vogue, des clips musicaux, du jazz et de la danse latine, centrée sur la féminité, la présence et la fluidité.",
    description: "Le heels dance n'a pas de date de naissance unique — il émerge progressivement de plusieurs sources.\n\n**Les origines :**\n- **Culture ballroom** : le catwalk, les poses, la performance de la féminité\n- **Clips musicaux des années 2000** : les chorégraphes de Beyoncé, Rihanna, J.Lo développent un style heels codifié\n- **La scène des studios de danse** : des profs comme **Yanis Marshall** (France) ou **Todrick Hall** popularisent le heels en tant que style à enseigner\n- **Le jazz et la danse latine** : la technique de jambes, la fluidité du bassin\n\n**Ce qui définit le heels :**\n- Travail de la posture sur talon (cambrure différente, placement du poids)\n- Walks et passes sophistiquées\n- Expression de la féminité comme outil dramatique\n- Intégration du sol (floorwork) et des portés\n\n**La dimension inclusive :** Le heels est pratiqué par toutes les identités de genre. Des danseurs cisgenres masculins comme Yanis Marshall ont contribué à briser les assignations genrées de cette pratique.",
    erreursCourantes: [
      "Réduire le heels à une danse 'pour femmes' — c'est une discipline ouverte à toutes les identités.",
      "Ignorer les exigences techniques : le travail de la posture sur talons est aussi technique que la danse sur pointes.",
    ],
    difficulteInterne: 2,
    termesLies: ['vogue-ballroom'],
  },

  // ─── Pole dance ───────────────────────────────────────────────────────────

  {
    id: 'mat-chinois',
    nom: 'Mât chinois',
    alias: ['Chinese pole'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire'],
    definition: "Discipline acrobatique et circassienne utilisant un mât vertical depuis des millénaires en Asie et en Afrique, considérée comme l'ancêtre technique du pole dance.",
    description: "Avant le pole dance contemporain, le mât existe sous de nombreuses formes dans les traditions du monde entier.\n\n**Le mât chinois (Chinese pole) :** Technique circassienne d'acrobatie sur mât de métal ou de bambou. Les acrobates montent, descendent, se suspendent et enchaînent des figures athlétiques. Présent dans le cirque chinois depuis plus de 2000 ans.\n\n**Le mallakhamb indien :** Mât de bois sur lequel des athlètes indiens (hommes) pratiquent des exercices de force et de souplesse depuis le XIIe siècle. Le nom signifie 'champion du poteau'.\n\n**Les autres traditions :**\n- **Mât de fête** dans les traditions européennes et amérindiennes\n- **Mât de cirque** dans le cirque occidental du XIXe siècle\n\n**La transition vers le pole dance moderne :** Les premiers clubs de 'pole dancing' apparaissent aux États-Unis dans les années 1980, avec une technique inspirée de l'acrobatie sur mât mais dans un contexte de divertissement adulte. La distinction entre pole acrobatique et pole dance érotique sera au cœur des débats sur la sportivisation de la discipline.",
    erreursCourantes: [
      "Croire que le pole dance est né dans les clubs de strip-tease — ses racines acrobatiques sont bien plus anciennes.",
    ],
    etymologie: "De l'anglais 'Chinese pole' (mât chinois) et du sanskrit 'malla' (lutteur) + 'khamb' (poteau).",
    difficulteInterne: 2,
    termesLies: ['pole-contemporain'],
  },

  {
    id: 'pole-contemporain',
    nom: 'Pole dance contemporain',
    alias: ['pole sport', 'pole art', 'pole fitness'],
    disciplines: ['pole-dance'],
    categories: ['culture-histoire'],
    definition: "Discipline acrobatique, artistique et sportive sur mât vertical, issue du pole dance des clubs des années 1980, qui s'est progressivement autonomisée comme sport et comme art chorégraphique.",
    description: "Le pole dance contemporain a parcouru un chemin remarquable : de pratique de club dans les années 1980 à discipline acrobatique enseignée dans des studios du monde entier.\n\n**La sportivisation :** À partir des années 2000, des fédérations nationales et internationales se créent. Des compétitions codifient des critères de technique, d'artistique et de difficulté. En 2016, le Comité Olympique International reconnaît la **IWPSF** (Fédération Internationale de Pole Sports).\n\n**Les sous-disciplines :**\n- **Pole sport** : orienté compétition, difficulté, force pure\n- **Pole art** : expression chorégraphique, émotions, narration\n- **Pole exotic** : travail au sol, sensualité, expression de la féminité — souvent en talons\n- **Pole theatre** : intégration d'un personnage, d'un costume, d'une histoire\n\n**Le débat autour du genre :** Le pole reste associé dans l'imaginaire collectif à l'effeuillage. Des athlètes et artistes travaillent à déconstruire cette stigmatisation, tout en refusant de renier l'histoire du pole dans les milieux du divertissement adulte.\n\nEn France, le pole dance connaît une croissance rapide depuis 2010. Des associations comme l'APF (Association Pole France) structurent la communauté.",
    erreursCourantes: [
      "Réduire le pole dance au strip-tease — c'est une discipline acrobatique qui demande une force musculaire considérable.",
      "Ignorer la diversité interne du pole : sport, art, exotic et theatre sont des pratiques aux intentions très différentes.",
    ],
    difficulteInterne: 1,
    termesLies: ['mat-chinois'],
  },
]
