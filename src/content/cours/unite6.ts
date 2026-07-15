import type { Cours } from '../schema'

export const coursUnite6: Cours[] = [
  {
    id: 'intro-moderne',
    titre: 'La danse moderne — héritage, techniques et langage',
    resume: "La danse moderne n'est pas un style unique mais une révolution — et j'ai mis du temps à comprendre ça. Le travail du buste (flat back, hinge, ondulation), les isolations et la segmentation corporelle, les trois grandes techniques pédagogiques (Horton, Cunningham, Limón), et les outils de composition que sont le canon et l'unisson : tout est dans mes carnets, annoté, raturé, complété au fil des années.",
    disciplines: ['moderne'],
    termesAbordes: [
      'isolation', 'succession-corporelle', 'opposition-corps',
      'flat-back', 'hinge', 'undulation', 'table-moderne', 'lunge-moderne',
      'travail-bassin', 'polycentrisme',
      'technique-horton', 'technique-cunningham', 'technique-limon',
      'canon', 'unisson', 'marche-moderne', 'elevation-moderne',
    ],
    sections: [
      {
        titre: "Qu'est-ce que la danse moderne ?",
        contenuMarkdown: `La danse moderne est née au début du XXe siècle comme une **rupture** avec la danse académique — pas une évolution, une révolution. Ce que j'aime dans cette histoire, c'est que ce sont essentiellement des femmes qui ont tout cassé et tout reconstruit. Ça méritait que je leur consacre un chapitre entier dans mes carnets.

**Ce qui a déclenché la rupture :**
- Le rejet des pointes et du turn-out obligatoire
- Le rejet du livret narratif comme fondement de tout spectacle
- L'exploration du corps comme instrument expressif direct
- La recherche d'un mouvement naturel, humain, ancré dans la réalité

**Les pionnières qui ont tout changé :**
- **Isadora Duncan** (1877–1927) : liberté du corps, pieds nus, inspiration grecque — elle a dansé comme si les corsets n'existaient pas
- **Loïe Fuller** (1862–1928) : corps-instrument, jeux de lumière, abstraction pure
- **Ruth St. Denis** (1879–1968) : influences orientales, spiritualité du mouvement

**La génération fondatrice américaine :**
- **Martha Graham** (1894–1991) : contraction/release, technique codifiée, expressionnisme
- **Doris Humphrey** (1895–1958) : fall and recovery, poids et gravité
- **Lester Horton** (1906–1953) : anatomie fonctionnelle, inclusivité
- **José Limón** (1908–1972) : héritage Humphrey, poids, swing, dramaticité

**La rupture avec la danse moderne (Judson Church, années 1960) :**
Merce Cunningham, puis les artistes du Judson Dance Theater (Yvonne Rainer, Steve Paxton, Trisha Brown) remettent en question *la danse moderne elle-même* — et ouvrent la voie à la danse contemporaine. L'histoire de la danse, c'est des révolutions qui font des révolutions.

**Danse moderne vs danse contemporaine — le tableau qui m'a aidé à y voir clair :**
| | Moderne | Contemporaine |
|---|---|---|
| **Techniques** | Codifiées (Graham, Horton, Limón) | Plurielles, hybrides |
| **Expression** | Souvent narratif/émotionnel | Questionnement du mouvement lui-même |
| **Période** | 1900–1970 environ | 1960 à aujourd'hui |
| **Rapport au passé** | Rupture avec le ballet | Rupture aussi avec la moderne |

> La danse moderne *croit encore* qu'il y a quelque chose à exprimer. La contemporaine remet en question ce postulat. C'est une nuance qui change tout.`,
        pointsCles: [
          "La danse moderne est une révolution (début XXe s.) — rejet des pointes, du turn-out, du narratif imposé.",
          "Pionnières : Duncan (liberté), Fuller (abstraction), St. Denis (spirituel), Graham, Humphrey, Horton, Limón.",
          "Judson Church (1960s) rompt avec la danse moderne elle-même et ouvre la voie au contemporain.",
          "La danse moderne croit encore qu'il y a quelque chose à exprimer — la contemporaine remet ça en question.",
        ],
      },
      {
        titre: 'Les grandes pionnières — celles qui ont tout inventé',
        contenuMarkdown: `C'est l'une des choses qui me fascine le plus dans cette histoire : à une époque où les femmes avaient si peu de libertés, ce sont elles qui ont tout cassé et tout reconstruit. Je leur ai consacré des pages entières dans mes carnets. Laisse-moi te présenter celles (et ceux) qui ont inventé la danse moderne au tournant du XXe siècle.

**Isadora Duncan (1877–1927) — la mère de la danse moderne**
Américaine installée en Europe, Duncan a rejeté tout ce que le ballet lui imposait : pointes, tutus, corset, narratif obligatoire. Elle dansait **pieds nus**, vêtue de tuniques légères inspirées de la Grèce antique, au son de Beethoven ou Brahms. Sa théorie : le mouvement devait émaner du **plexus solaire** — le centre physique et spirituel du corps. L'idée que la danse doit venir d'un centre expressif intérieur plutôt que d'une technique extérieure imposée, c'est l'une des idées les plus révolutionnaires de l'histoire de l'art. Elle a dit : *"La danse du futur sera un mouvement nouveau, un fruit de toute l'évolution que l'humanité a traversée."* Elle avait raison.

**Loïe Fuller (1862–1928) — la danse comme lumière**
Contemporaine de Duncan, Fuller prend un chemin radicalement différent — et tout aussi révolutionnaire. Là où Duncan cherche le naturel et l'expressif, Fuller cherche **l'abstraction et la technologie**. Sa célèbre *danse serpentine* utilise des mètres de tissu en soie manipulés avec des baguettes extensibles, transformés en formes sculpturales par des éclairages colorés de sa propre invention. Elle a breveté ses techniques d'éclairage — c'est une pionnière des arts de la scène au sens le plus large. Fuller dansait aux Folies Bergère à Paris et fascinait aussi bien les artistes que les scientifiques. Elle a préfiguré la scénographie moderne et les arts numériques de plus d'un siècle.

**La Denishawn School (1915) — l'école qui a tout formé**
À New York, **Ruth St. Denis** (1879–1968) et **Ted Shawn** (1891–1972) fondent en 1915 la **Denishawn School** — le premier grand conservatoire de danse moderne aux États-Unis. St. Denis intègre des influences des danses orientales (indiennes, égyptiennes, japonaises) et une vision spirituelle du mouvement. Shawn, lui, cherche à légitimer la danse masculine à une époque où la danse était perçue comme une activité exclusivement féminine. Ce qui me fascine avec cette école, c'est qui en sort :
- **Martha Graham**
- **Doris Humphrey**
- **Charles Weidman**, **Lester Horton**, **Jack Cole**...

La Denishawn, c'est le berceau de toute la danse moderne américaine — tous les grands noms de la génération suivante y ont étudié.

**Mary Wigman (1886–1973) — l'expressionnisme allemand**
Pendant que Duncan et Graham révolutionnent la danse aux États-Unis, Mary Wigman fait la même chose en Allemagne. Élève de Rudolf Laban, elle développe l'**Ausdruckstanz** (danse d'expression) : mouvements angulaires et dramatiques, thèmes sombres et existentiels, masques, costumes expressifs, musique percussive — ou silence total. Son œuvre la plus célèbre, *Hexentanz* (Danse de la sorcière, 1914), est un solo où elle incarne une figure primitive et mystique. Son école à Dresde devient un centre de référence pour la danse moderne européenne. L'influence de Wigman dépasse la danse : elle touche le théâtre expressionniste, le cinéma, les arts visuels allemands.

**Martha Graham (1894–1991) — la psychanalyse en mouvement**
Sa technique (contraction-release) est développée ailleurs dans ce cours — mais Graham, c'est aussi un univers chorégraphique total. Influencée par la psychanalyse (Freud, Jung), elle explore les profondeurs de la psyché humaine à travers des mythes grecs et des archétypes psychologiques. *Appalachian Spring* (1944, musique de Copland), *Night Journey* (1947 — Jocaste et Œdipe), *Clytemnestre* (1958) — des œuvres d'une intensité dramatique sans précédent dans l'histoire de la danse. La **Martha Graham Dance Company**, fondée en 1926, est encore active aujourd'hui. Si tu n'as vu aucune de ses pièces, commence par *Appalachian Spring* — c'est accessible et bouleversant.

**Doris Humphrey (1895–1958) — entre l'équilibre et la chute**
Sa phrase la plus connue : *"Toute danse existe sur un arc entre deux morts — l'immobilité parfaite et la chute totale."* La danse de Humphrey vit dans cet espace entre les deux. Son **fall and recovery** explore l'oscillation perpétuelle entre l'équilibre et le déséquilibre comme source de mouvement. *Water Study* (1928) — sans musique — et *The Shakers* (1931) sont deux chefs-d'œuvre qui tiennent encore debout. C'est elle qui a formé José Limón et dirigé sa compagnie jusqu'à sa mort. Son héritage court jusqu'à aujourd'hui dans toute la tradition Limón.

**José Limón (1908–1972) — le poids et la dignité**
Mexicain-américain né à Culiacán, Limón a étudié avec Humphrey et Weidman avant de créer sa propre compagnie. Il ajoute au fall and recovery une qualité de mouvement plus lyrique, une dimension dramatique profonde et une humanité qui lui est propre. *The Moor's Pavane* (1949) — une réécriture d'Othello en danse — est considérée comme l'un des chefs-d'œuvre de la danse moderne. Son héritage mexicain-américain nourrit une vision profondément humaniste de l'art : le corps porte l'histoire, la mémoire, la résistance.

> Ce qui me touche dans ces parcours, c'est que ces artistes ont dansé dans un monde qui ne leur faisait souvent pas de place — et ils ont fait de ce manque de place leur matière première. C'est toujours comme ça que les grandes choses arrivent.`,
        pointsCles: [
          "Duncan : pieds nus, tunique grecque, mouvement du plexus solaire — la révolution par la liberté du corps.",
          "Graham : contraction-release, psychanalyse en mouvement, mythes grecs comme matière chorégraphique.",
          "Humphrey : la danse vit entre deux morts — l'immobilité parfaite et la chute totale.",
          "Ces artistes ont dansé dans un monde qui ne leur faisait pas de place — et en ont fait leur matière première.",
        ],
      },
      {
        titre: 'Les isolations et la segmentation corporelle',
        contenuMarkdown: `L'une des contributions les plus distinctives de la danse moderne est la **segmentation consciente** du corps — la capacité à activer et contrôler chaque partie indépendamment. C'est aussi l'une des choses les plus difficiles à maîtriser, et des plus satisfaisantes quand ça vient. Je me souviens encore de la première fois où ma cage thoracique a bougé toute seule.

**L'isolation corporelle :**
Mouvement d'une seule partie du corps pendant que le reste reste immobile. Ce n'est pas une invention de la danse moderne — c'est un héritage des **traditions africaines et afro-américaines** que la danse moderne a intégré et codifié. Il faut le dire clairement.

**Les cinq zones d'isolation principales :**
1. **Tête** : droite/gauche, avant/arrière, rotations
2. **Épaules** : haut/bas, avant/arrière, rotations indépendantes
3. **Cage thoracique** : latérale, avant/arrière, rotation (la plus difficile à isoler — j'insiste, vraiment difficile)
4. **Bassin** : toutes directions — source de la mobilité pelvienne
5. **Genoux** : avant/arrière dans le plan sagittal

**Le polycentrisme :**
Plusieurs parties du corps actives *simultanément* avec des énergies et des rythmes différents. C'est la base du groove en jazz et une caractéristique fondamentale des danses africaines. Quand tu vois quelqu'un dont le corps entier semble penser à plusieurs choses en même temps — c'est ça.

**La succession corporelle :**
L'impulsion voyage séquentiellement à travers les segments — comme une vague. S'oppose au mouvement en "bloc" (toutes les parties bougent ensemble). La succession donne de la fluidité ; le bloc donne de la puissance.

**La progression que je recommande dans mes carnets :**
1. Isolations une par une (tête, puis épaules, puis cage, puis bassin)
2. Successions simples (bras : épaule → coude → poignet → doigts)
3. Body wave complète (de bas en haut)
4. Deux centres simultanés (cage et bassin dans des directions différentes)
5. Polycentrisme avec rythmes différents (bras sur un rythme, hanches sur un autre)

> La segmentation n'est pas une décomposition mécanique — c'est une intelligence du corps. Chaque partie qui parle est une partie qui *pense*. Et ça, ça s'apprend. Avec du temps, et avec de la patience.`,
        pointsCles: [
          "L'isolation = mouvement d'une seule partie du corps pendant que le reste reste immobile — héritage africain.",
          "5 zones : tête, épaules, cage thoracique (la plus difficile !), bassin, genoux.",
          "Polycentrisme = plusieurs centres actifs simultanément avec des énergies différentes — base du groove.",
          "Succession = l'impulsion voyage comme une vague. S'oppose au mouvement en 'bloc'.",
        ],
      },
      {
        titre: 'Le travail du buste — flat back, hinge, ondulation',
        contenuMarkdown: `La danse moderne a développé un vocabulaire spécifique pour le travail du buste qui n'a pas d'équivalent dans la technique classique. Ce sont trois des premières choses que j'ai notées soigneusement dans mon carnet quand j'ai découvert la technique Horton — et je les ai pratiquées des heures avant de les sentir vraiment.

---

## Le flat back (dos plat)

Le torse s'incline depuis les **hanches** (pas depuis la taille) en maintenant la colonne parfaitement droite.

**Points clés :**
- La colonne reste droite et horizontale — pas de dos arrondi, même sous l'effort
- La tête prolonge la ligne du dos (ne remonte pas !)
- L'inclinaison vient du pliage de hanche (fold at the hip)

**Variantes :** flat back debout, flat back latéral, table (flat back à 90° — là tu es vraiment horizontal)

---

## Le hinge (charnière)

Inclinaison du corps entier en **arrière** depuis les genoux — le corps forme une ligne diagonale rigide.

**Points clés :**
- La source est dans les genoux, pas dans le dos
- Le corps ne se casse pas à la taille : tout s'incline comme un seul bloc — c'est ça la difficulté
- Exige des quadriceps forts et un gainage abdominal solide

**Origine :** Technique Horton (Lester Horton, Los Angeles, années 1950)

---

## L'ondulation (body wave)

Une vague qui parcourt le corps verticalement — de bas en haut ou de haut en bas. C'est ce qui me donne le plus de plaisir à regarder quand c'est bien fait.

**Ondulation ascendante :**
1. Flexion des genoux → bassin en avant → bas du dos → cage thoracique → épaules → tête

**Ce qui crée la beauté :**
L'impression de continuité — chaque segment répond au précédent avec un léger retard. Si tu vois des "marches" au lieu d'une vague, c'est que les transitions entre segments sont trop nettes.

---

**Comparaison des trois — je la recopie ici parce que je la consulte souvent :**
| | Flat back | Hinge | Ondulation |
|---|---|---|---|
| **Direction** | En avant / latéral | En arrière | Verticale |
| **Colonne** | Droite | Droite | Séquentielle |
| **Source** | Hanches | Genoux | Pieds / tête |

---

> Le buste en danse moderne n'est pas un bloc rigide qui se déplace dans l'espace. Il *parle* — chaque inclinaison, chaque vague, chaque torsion est une phrase du corps. Apprends sa grammaire.`,
        pointsCles: [
          "Flat back : torse incliné depuis les hanches, colonne droite — pas depuis la taille, jamais le dos arrondi.",
          "Hinge : tout le corps s'incline en arrière depuis les genoux, comme un seul bloc rigide.",
          "Ondulation (body wave) : vague séquentielle de bas en haut — chaque segment répond au précédent avec un retard.",
          "Le buste en danse moderne n'est pas un bloc rigide — il parle. Apprends sa grammaire.",
        ],
      },
      {
        titre: 'Les trois grandes techniques modernes — mes trois bibles',
        contenuMarkdown: `Trois pédagogies ont structuré l'enseignement de la danse moderne et continuent d'être enseignées dans le monde entier. J'ai consacré un chapitre entier de mes carnets à chacune — voici ce que tu dois absolument retenir. Et si tu ne devais en étudier qu'une pour commencer, je te laisserais choisir : elles te diront chacune quelque chose de différent sur toi-même.

---

## Technique Horton

**Lester Horton** (1906–1953), Los Angeles.

**Principes :**
- Anatomie d'abord — chaque exercice a une justification anatomique claire
- Corps complet — toutes les parties, toutes les directions
- Amplitude maximale
- **Inclusivité** : Horton acceptait des danseurs de toutes origines à l'époque de la ségrégation. C'est un détail qui dit tout sur l'homme.

**Vocabulaire signature :** Hinges, flat backs, T-positions, latéraux en extension

**Son élève le plus célèbre :** Alvin Ailey, qui a transmis la technique au monde entier via l'Alvin Ailey American Dance Theater — si tu ne connais qu'une compagnie de danse moderne, que ce soit celle-là.

---

## Technique Cunningham

**Merce Cunningham** (1919–2009).

**Principes radicaux — et je dis "radicaux" au sens littéral :**
- **Dissociation** de la danse et de la musique (ils coexistent mais ne se synchronisent pas)
- **Dissociation** de la danse et du sens (pas besoin d'exprimer une émotion)
- Tous les points de l'espace ont la même valeur
- Le **hasard** comme outil de composition

**Caractéristiques techniques :**
- Colonne mobile dans toutes directions
- Jambes avec une virtuosité quasi-classique
- Tête active et indépendante

**Avec John Cage :** Cunningham et le compositeur Cage forment un des partenariats artistiques les plus féconds du XXe siècle. Leurs œuvres communes sont des œuvres d'art à part entière.

---

## Technique Limón

**José Limón** (1908–1972), dans l'héritage de Doris Humphrey.

**Principes :**
- **Poids** : le corps utilise réellement son poids, sans illusion de légèreté
- **Swing** : les membres oscillent en pendule — gravité + élan + suspension
- **Succession** : l'impulsion voyage dans tout le corps
- **Chute et récupération** : le mouvement vit entre l'équilibre et la chute

**Dimension dramatique :**
Les œuvres de Limón traitent de la condition humaine, de la liberté, de la résistance. Son héritage mexicain-américain nourrit une vision profondément humaniste — et ça s'entend dans chaque pas.

---

> Ces trois techniques ne sont pas des concurrentes — elles explorent trois visions du corps en mouvement. Un danseur moderne complet les connaît toutes les trois. Et honnêtement, chacune t'apprend quelque chose que les autres ne peuvent pas te donner.`,
        pointsCles: [
          "Horton : anatomie d'abord, inclusivité (à l'époque de la ségrégation), hinges et flat backs — le maître d'Alvin Ailey.",
          "Cunningham : dissociation danse/musique, dissociation danse/sens, le hasard comme outil de composition.",
          "Limón : poids réel, swing en pendule, succession, chute et récupération — humanisme profond.",
          "Ces trois techniques explorent trois visions du corps — un danseur complet les connaît toutes les trois.",
        ],
      },
      {
        titre: 'Canon et unisson — composer avec le temps',
        contenuMarkdown: `La danse moderne a apporté une réflexion nouvelle sur la **composition chorégraphique** — comment organiser les corps dans l'espace et le temps. J'ai deux outils fondamentaux à te présenter : le canon et l'unisson. Des outils simples en apparence, redoutablement complexes à maîtriser — et terriblement beaux quand ils sont bien utilisés.

---

## L'unisson

Tous les danseurs réalisent exactement le même mouvement au même moment.

**Ce qui rend l'unisson difficile :**
- Chaque corps a son propre timing naturel — il faut apprendre à l'ajuster
- Les amplitudes diffèrent selon les corps
- Il faut une **écoute musicale collective** — tous respirent ensemble, littéralement

**Unisson vs uniformité — une distinction que j'aime beaucoup :**
- L'uniformité vise la ressemblance mécanique des formes
- L'unisson aspire à une **respiration commune** — l'énergie circule au même instant dans tous les corps

**L'effet visuel :**
La puissance de plusieurs corps animés par la même impulsion simultanée. C'est l'un des effets les plus saisissants en danse de groupe.

---

## Le canon

Plusieurs danseurs réalisent la même phrase à des **moments différents** — avec un décalage précis.

**Types de canon :**
- **Canon strict** : décalage fixe (ex : tous les 8 temps)
- **Canon libre** : décalages variables
- **Canon en miroir** : la phrase est aussi retournée (droite/gauche)
- **Canon en augmentation** : la phrase est ralentie chez certains danseurs

**Ce que le canon crée visuellement :**
- Une impression de **vague** qui traverse le groupe
- La structure de la phrase mise en valeur (on la voit plusieurs fois, sous des angles différents)
- La possibilité de remplir l'espace avec peu de matériel
- Une **conversation** entre les danseurs

**Référence incontournable — je l'ai dans mes carnets avec trois étoiles :**
*Fase* d'Anne Teresa De Keersmaeker et Steve Reich (1982) — un chef-d'œuvre de canon où deux danseuses exécutent la même phrase avec un léger décalage pendant toute la durée de la pièce. Regarde-la. Tu ne pourras plus jamais voir un canon de la même façon.

---

## L'opposition des membres

En plus du canon et de l'unisson, l'opposition est un outil de composition *dans* un seul corps : deux parties qui s'étirent simultanément dans des directions opposées. Elle crée de l'espace, de la tension linéaire, et stabilise le mouvement.

---

> Canon et unisson sont les deux faces d'une même médaille : comment les corps communiquent à travers le temps — ensemble ou en décalé. Avec ces deux outils et une bonne phrase de mouvement, tu peux faire une pièce entière. C'est ça qui est beau dans la composition.`,
        pointsCles: [
          "Unisson ≠ uniformité : l'unisson aspire à une respiration commune, pas à une ressemblance mécanique.",
          "Canon = même phrase à des moments différents — il crée une impression de vague, une conversation entre corps.",
          "Fase de De Keersmaeker et Steve Reich (1982) — la référence absolue du canon en danse.",
          "Avec canon, unisson et une bonne phrase, tu peux faire une pièce entière — c'est ça qui est beau.",
        ],
      },
    ],
  },
]
