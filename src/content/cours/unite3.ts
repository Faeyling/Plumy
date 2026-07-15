import type { Cours } from '../schema'

export const coursUnite3: Cours[] = [
  {
    id: 'musique-appliquee',
    titre: "Formation musicale pour le danseur",
    resume: "Tout danseur est aussi musicien de son corps. Comprendre le tempo, la mesure, le phrasé, l'anacrouse et la syncope, c'est apprendre à dialoguer avec la musique plutôt que la suivre aveuglément — et crois-moi, ça change tout.",
    disciplines: ['commun'],
    termesAbordes: ['tempo', 'mesure-musicale', 'phrase-musicale', 'anacrouse', 'syncope'],
    sections: [
      {
        titre: "Le tempo et la mesure : le squelette rythmique",
        contenuMarkdown: `Je vais te dire un secret : j'ai longtemps cru que la musique, c'était juste là pour "donner l'ambiance" pendant qu'on dansait. Quelle erreur. Comprendre la structure musicale, c'est débloquer un niveau entier de la danse.

**Le tempo** est la vitesse de la pulsation, mesurée en BPM (battements par minute). L'intérioriser — au point de le sentir dans ton corps même quand la musique s'arrête — est une compétence fondamentale.

**La mesure** organise les temps en groupes réguliers. Les mesures les plus courantes en danse :

| Mesure | Caractère | Utilisations |
|--------|-----------|-------------|
| 4/4 | Universel, robuste | Jazz, pop, contemporain, hip-hop |
| 3/4 | Ternaire, tournoyant | Valse, cabaret, classique romantique |
| 2/4 | Binaire, énergique | French cancan, marche |
| 6/8 | Oscillant, balancé | Certains jazz, musiques folkloriques |

**Compter en danse :** on compte généralement en 8 (deux mesures de 4/4), en 6 (pour la valse), ou en combinaison. Si ton prof dit "5, 6, 7, 8", il te donne une anacrouse sur le dernier temps — patience, on y vient.`,
        pointsCles: [
          "Le tempo (BPM) est la pulsation — l'intérioriser jusqu'à le sentir sans musique est fondamental.",
          "La mesure organise les temps : 4/4 (universel), 3/4 (valse), 2/4 (cancan), 6/8 (balancé).",
          "En danse, on compte en 8 (deux mesures de 4/4) ou en 6 — le '5, 6, 7, 8' est une anacrouse.",
          "Comprendre la structure musicale, c'est débloquer un niveau entier de la danse.",
        ],
      },
      {
        titre: "Le phrasé musical : la grammaire du temps",
        contenuMarkdown: `Comme une phrase a un sujet, un verbe et une conclusion, la musique a des **phrases musicales** — généralement 4 ou 8 mesures — qui se terminent par une cadence (comme une ponctuation).

En tant que danseur, tu dois apprendre à entendre :
- **Le début de phrase** (downbeat) : souvent un point d'arrivée ou de départ fort
- **La montée** : développement de l'énergie, tension qui s'accumule
- **La cadence finale** : résolution, respiration, atterrissage

**Phrasé dansé vs phrasé musical :** un chorégraphe peut aligner ses phrases avec la musique (*avec-la-musique*) ou créer délibérément des décalages (*contre la musique*). Ce jeu de tension/résolution est l'un des outils les plus puissants de la composition.

> *Note de Plumy : J'adore les chorégraphes qui arrivent une mesure avant ou après la musique. Ça crée une surprise que même moi je n'arrive pas toujours à anticiper — et c'est cette imprévisibilité maîtrisée qui me coupe le souffle à chaque fois.*`,
        pointsCles: [
          "Une phrase musicale (4 ou 8 mesures) a un début, une montée et une cadence — comme une phrase écrite.",
          "Le chorégraphe peut aligner ses phrases avec la musique ou créer des décalages délibérés.",
          "Jouer contre la musique est un outil puissant — la surprise maîtrisée coupe le souffle.",
          "Entendre les phrases musicales permet de construire une chorégraphie qui 'respire'.",
        ],
      },
      {
        titre: "Anacrouse et syncope : le jeu sur le temps",
        contenuMarkdown: `Voilà deux notions qui vont transformer ta façon d'entrer dans la musique.

**L'anacrouse** est la note (ou le mouvement) qui précède le temps fort pour l'annoncer. C'est la préparation, le souffle avant la parole. En danse, c'est la différence entre un geste *projeté* dans la musique et un geste *arraché* à elle. Quand tu entends "5, 6, 7, 8" — ces quatre comptes sont une anacrouse. Ton corps se prépare, s'élance avant de démarrer.

**La syncope** déplace l'accent vers les temps faibles. C'est l'ADN du jazz et du funk — cette tension légèrement décalée qui crée le groove, ce balancement irrésistible.

**Repères pratiques :**
- Une valse qui passe sur le "3-et" avant le "1" utilise l'anacrouse
- Un jazz step qui tombe sur le "2 et 4" plutôt que "1 et 3" est syncopé
- Un danseur qui anticipe systématiquement le tempo "met en avance"

Expérimenter avec ces déplacements temporels, c'est apprendre à *parler* en musique, pas seulement à l'*écouter*. Et franchement, une fois qu'on entend la syncope dans les muscles — on ne peut plus s'en passer.`,
        pointsCles: [
          "L'anacrouse = la préparation qui précède le temps fort — le souffle avant la parole.",
          "La syncope déplace l'accent vers les temps faibles : c'est l'ADN du jazz et du funk, le groove.",
          "Un geste projeté dans la musique vs arraché à elle : l'anacrouse fait toute la différence.",
          "Une fois qu'on entend la syncope dans les muscles, on ne peut plus s'en passer.",
        ],
      },
    ],
  },

  {
    id: 'marquages-tempo',
    titre: "Les marquages de tempo italiens",
    resume: "En classe, en répétition, sur une partition — les termes italiens de tempo reviennent partout. Adagio, allegro, rubato : autant de mots qui décrivent non seulement une vitesse, mais toute une qualité d'interprétation. J'en ai fait un aide-mémoire dans mon carnet.",
    disciplines: ['commun'],
    termesAbordes: ['tempo', 'marquage-tempo', 'rubato'],
    sections: [
      {
        titre: "De Grave à Presto : la gamme complète",
        contenuMarkdown: `La tradition musicale classique (et la pédagogie de la danse dans son sillage) utilise des termes italiens pour indiquer le tempo. Ils ne désignent pas seulement une vitesse — ils évoquent un **caractère**, une humeur, une façon d'habiter le temps.

Voici la gamme des marquages, du plus lent au plus rapide :

| Marquage | BPM approximatifs | Caractère |
|----------|------------------|-----------|
| **Grave** | < 40 | Très lent, solennel, lourd |
| **Largo** | 40–60 | Large, ample, majestueux |
| **Adagio** | 44–68 | Lent, expressif, méditatif |
| **Andante** | 76–108 | "Allant" — rythme de marche naturelle |
| **Moderato** | 108–120 | Modéré, ni lent ni rapide |
| **Allegretto** | 112–120 | Légèrement vif, plus retenu qu'allegro |
| **Allegro** | 120–168 | Vif, joyeux, énergique |
| **Vivace** | 140–176 | Très animé, plein d'élan |
| **Presto** | 168–200 | Rapide, brillant |
| **Prestissimo** | > 200 | Extrêmement rapide |

En danse, tu entendras surtout **adagio**, **andante**, **allegro** et **presto** — ce sont les quatre bornes du vocabulaire quotidien d'un prof. "On fait l'adage en adagio" veut dire : lent, expressif, avec tout le temps pour développer chaque position.`,
        pointsCles: [
          "Les marquages italiens décrivent un caractère, pas juste une vitesse : Grave (solennel) → Prestissimo (fulgurant).",
          "En danse, adagio, andante, allegro et presto sont les quatre bornes du vocabulaire quotidien.",
          "Adagio ≈ 44–68 BPM (lent, expressif) ; Allegro ≈ 120–168 BPM (vif, joyeux).",
          "'L'adage en adagio' = lent, expressif, avec tout le temps pour développer chaque position.",
        ],
      },
      {
        titre: "Accelerando, ritardando : changer le tempo en cours de route",
        contenuMarkdown: `La musique n'est pas toujours à un tempo fixe — elle peut accélérer ou ralentir progressivement, et ces changements créent des effets dramatiques que le danseur doit anticiper.

**Accelerando** (abrégé *accel.*) : accélération progressive. La musique — et le corps — monte en énergie, en urgence. On le trouve souvent avant un climax ou une transition forte.

**Rallentando** et **Ritardando** (abrégés *rall.* et *rit.*) : ralentissement progressif. La musique perd de l'élan, s'étire vers une conclusion. Ce ralentissement doit être "habité" par le danseur — pas subi passivement.

**Accelerando vs Ritardando en danse :**
- L'accelerando crée naturellement une qualité de Flux Libre (on se laisse emporter) et de Temps Soudain
- Le ritardando invite le Flux Lié et le Temps Soutenu

**À-temps-sus** ou **Poco a poco** signifient "peu à peu" — la transition est graduelle, imperceptible au début. C'est l'art du changement sans rupture.

> *Ce qui m'a le plus surprise en apprenant ça : ce n'est pas la destination (le nouveau tempo) qui compte dans un accelerando, c'est le voyage. Comment le corps gère-t-il la montée d'énergie ? Où dans le corps ressens-tu l'accélération en premier ?*`,
        pointsCles: [
          "Accelerando = accélération progressive, montée en urgence — vers Flux Libre et Temps Soudain.",
          "Ritardando = ralentissement progressif — invite le Flux Lié et le Temps Soutenu.",
          "Ce n'est pas la destination qui compte dans un accelerando, c'est le voyage — comment le corps gère la montée.",
          "'Poco a poco' = peu à peu : le changement est graduel, imperceptible au début.",
        ],
      },
      {
        titre: "Le rubato : quand le temps se plie",
        contenuMarkdown: `Le **rubato** (de l'italien *rubare*, voler) est peut-être le marquage de tempo le plus poétique — et le plus difficile à maîtriser.

Il signifie littéralement "temps volé" : le musicien (ou le danseur) s'autorise à étirer certains moments et à compresser d'autres, créant une liberté expressive par rapport au tempo strict. Le temps est *emprunté* à certains moments pour être *rendu* à d'autres.

**Rubato en danse :**
- Un port de bras en rubato : l'arrivée peut être légèrement retardée pour laisser l'air "s'emplir"
- Une pirouette en rubato : le danseur peut s'attarder sur la préparation avant de lancer
- Une phrase lyrical en rubato : le corps respire avec la musique plutôt que de la suivre métronomiquement

**Ce qui distingue le rubato du hors-tempo :** la conscience. Un rubato maîtrisé revient toujours au tempo de base. Le hors-tempo est une dérive involontaire.

Le rubato est omniprésent dans le ballet romantique et le lyrical jazz. Il exige une écoute musicale fine et une grande maturité d'interprétation.

| Marquage | Ce qu'il dit au danseur |
|----------|------------------------|
| **Tempo giusto** | Tempo strict, pas de liberté |
| **Rubato** | Liberté expressive — mais reviens |
| **A piacere** | "À volonté" — liberté totale |
| **Senza misura** | Sans mesure — improvisation temporelle |`,
        pointsCles: [
          "Rubato = 'temps volé' : étirer certains moments, compresser d'autres pour l'expression.",
          "Le corps 'respire' avec la musique plutôt que de la suivre métronomiquement.",
          "Ce qui distingue le rubato du hors-tempo : la conscience — le rubato revient toujours au tempo de base.",
          "Omniprésent dans le ballet romantique et le lyrical jazz — exige une grande maturité d'interprétation.",
        ],
      },
    ],
  },

  {
    id: 'dynamiques-musicales',
    titre: "Dynamiques, articulation et expression",
    resume: "La dynamique, c'est le volume de la musique — de pianissimo (très doux) à fortissimo (très fort). L'articulation, c'est la façon dont les notes sont jouées : legato, staccato, avec accent... Ces paramètres se traduisent directement dans le corps du danseur.",
    disciplines: ['commun'],
    termesAbordes: ['dynamiques-musicales', 'legato', 'staccato', 'crescendo'],
    sections: [
      {
        titre: "Les nuances dynamiques : du pp au ff",
        contenuMarkdown: `Les **dynamiques** indiquent l'intensité sonore d'un passage musical. Pour le danseur, elles traduisent directement l'énergie à investir dans le geste.

| Symbole | Terme | Signification | Traduction dansée |
|---------|-------|--------------|-------------------|
| **ppp** | pianississimo | Extrêmement doux | Geste minimaliste, presque invisible |
| **pp** | pianissimo | Très doux | Légèreté extrême, effleur |
| **p** | piano | Doux | Retenu, intérieur |
| **mp** | mezzo-piano | Moyennement doux | Posé, sans excès |
| **mf** | mezzo-forte | Moyennement fort | Présent, affirmé |
| **f** | forte | Fort | Pleinement engagé |
| **ff** | fortissimo | Très fort | Puissant, maximal |
| **fff** | fortississimo | Extrêmement fort | Climax, fracassant |

Ces nuances ne sont pas absolues — elles sont relatives au contexte musical. Un *piano* dans un orchestre romantique peut être plus fort qu'un *forte* dans un duo de chambre.

Ce qui est fascinant pour le danseur : la même trajectoire de bras peut exprimer toute cette gamme dynamique. La dynamique, c'est **l'intention qui habille le geste**.`,
        pointsCles: [
          "Les dynamiques vont de ppp (presque invisible) à fff (climax fracassant) — elles sont relatives au contexte.",
          "La même trajectoire de bras peut exprimer toute la gamme dynamique : l'intention habille le geste.",
          "Piano = doux, intérieur ; pianissimo = effleur extrême — chaque nuance a sa qualité de mouvement.",
          "Les dynamiques ne sont pas absolues — elles dépendent toujours du contexte musical.",
        ],
      },
      {
        titre: "Crescendo et decrescendo : l'énergie en mouvement",
        contenuMarkdown: `Le **crescendo** et le **decrescendo** (ou diminuendo) sont des dynamiques *en transition* — la musique monte ou descend progressivement en intensité.

**Crescendo** (symbole *<*) : augmentation progressive du volume. En danse, le corps suit naturellement cette montée — l'espace s'ouvre, le geste s'amplifie, l'énergie s'accumule. Un crescendo bien dansé donne l'impression que le corps *grandit*.

**Decrescendo / Diminuendo** (symbole *>*) : diminution progressive. Le corps se concentre, l'espace se referme, l'énergie se retient. Un decrescendo dansé peut être aussi puissant qu'un climax — la retenue a sa propre force.

**Fortepiano** (*fp*) : on démarre fort, puis on passe immédiatement à doux. C'est un effet de choc expressif — très présent dans la musique de Beethoven et dans les mouvements dramatiques.

> *En improvisation, j'aime proposer cet exercice : commence un geste très petit (pp) et laisse-le grandir jusqu'à remplir toute ta kinesphère (ff). Puis fais-le rétrécirassez (decrescendo) jusqu'à disparaître presque. Observer comment l'espace interne change tout au long du crescendo — c'est une révélation.*`,
        pointsCles: [
          "Crescendo = le corps grandit : l'espace s'ouvre, le geste s'amplifie, l'énergie s'accumule.",
          "Decrescendo = le corps se concentre : retenue, l'espace se referme — la retenue a sa propre force.",
          "Fortepiano (fp) : départ fort, puis immédiatement doux — effet de choc expressif très dramatique.",
          "Commence pp et laisse grandir jusqu'au ff, puis réduis — l'espace interne révèle tout.",
        ],
      },
      {
        titre: "Legato, staccato : l'articulation dans le corps",
        contenuMarkdown: `Si les dynamiques parlent du *volume*, l'**articulation** parle de la *façon* dont les sons (ou les gestes) sont produits. Les deux marquages les plus importants pour le danseur sont le legato et le staccato.

**Legato** (*"lié"* en italien) : les notes sont jouées de façon connectée et fluide, sans coupure entre elles. En danse, c'est le mouvement qui coule d'une position à l'autre sans arrêt — les ports de bras classiques, les transitions en contemporary release, les ondulations en heels.

**Staccato** : les notes sont jouées brèves et détachées, séparées par de courtes silences. En danse, c'est le geste qui "claque" — les isolations jazz, les hits en hip-hop, les frappes en contemporain expressif. Le staccato est identifiable par un point au-dessus de la note sur la partition.

**Tenuto** : on tient la note pour toute sa valeur, avec légèrement plus d'appui. En danse, c'est un geste qui "pose" — ni legato fluide ni staccato bref, mais une présence affirmée.

**Accent** : une note particulièrement mise en évidence. En jazz, l'accent sur les temps 2 et 4 crée le groove. En contemporain, les accents imprévus créent la surprise.

| Articulation | En musique | En danse |
|-------------|-----------|----------|
| Legato | Notes connectées | Mouvement coulé, transitions fluides |
| Staccato | Notes brèves et séparées | Gestes piqués, isolations nettes |
| Tenuto | Notes tenues pleinement | Gestes posés, affirmés |
| Accent | Note marquée | Temps fort, hit, impact |`,
        pointsCles: [
          "Legato = mouvement coulé, transitions fluides — ports de bras classiques, release, ondulations heels.",
          "Staccato = gestes piqués, isolations nettes — les hits en hip-hop, les frappes en contemporain.",
          "Tenuto = geste posé, affirmé — ni fluide ni bref, mais une présence pleinement habitée.",
          "L'articulation, c'est la façon dont les gestes sont produits — aussi importante que leur trajectoire.",
        ],
      },
    ],
  },

  {
    id: 'formes-musicales',
    titre: "Formes musicales et structure des morceaux",
    resume: "Comprendre comment une chanson est construite, c'est ne plus être surpris par ce qui arrive — et pouvoir jouer avec la structure plutôt que la subir. Couplet, refrain, pont, ostinato, motif : le vocabulaire de l'architecture musicale au service du danseur.",
    disciplines: ['commun'],
    termesAbordes: ['forme-musicale', 'motif-musical', 'cadence-harmonique'],
    sections: [
      {
        titre: "Les grandes formes : AB, ABA, rondo",
        contenuMarkdown: `La musique, comme la danse, est organisée en **formes** — des structures qui déterminent l'ordre et la répétition des sections. Les connaître permet au danseur d'anticiper les changements et de construire une chorégraphie qui "respire" avec le morceau.

**Forme AB** (deux sections distinctes) :
- A : première idée musicale
- B : nouvelle idée musicale
- Exemple : beaucoup de morceaux pop courts, chansons de cabaret

**Forme ABA** (ternaire) :
- A : idée principale
- B : section contrastante (plus douce, plus sombre, plus rapide)
- A : retour à l'idée principale, souvent transformée
- Exemple : aria d'opéra, valse de Chopin, beaucoup de musiques classiques

**Rondo** (ABACADA…) :
- Un refrain (A) revient régulièrement, alternant avec des épisodes variés (B, C, D…)
- Exemple : le "Rondo alla turca" de Mozart — tu entends clairement le retour du thème principal

**Couplet-Refrain** (structure pop) :
- Couplet : développe l'histoire ou l'émotion
- Refrain : moment de "climax" expressif, souvent répété
- Pont : section de rupture avant le dernier refrain
- Exemple : quasiment toute la musique pop/rock/jazz contemporaine

> *Quand je travaille une chorégraphie, je commence toujours par écouter le morceau trois fois sans bouger — juste pour "cartographier" sa forme. Ça me donne une architecture où placer les moments forts.*`,
        pointsCles: [
          "Connaître la forme musicale permet d'anticiper les changements et de 'respirer' avec le morceau.",
          "AB (deux sections) ; ABA (ternaire) ; Rondo (refrain récurrent) ; Couplet-Refrain (structure pop).",
          "La forme ABA : idée principale, section contrastante, retour transformé — très présente en classique.",
          "Écouter trois fois sans bouger pour 'cartographier' la forme avant de chorégraphier — conseil d'or.",
        ],
      },
      {
        titre: "Motif, leitmotiv, ostinato : les briques de base",
        contenuMarkdown: `À l'intérieur des grandes formes, la musique se construit sur des **unités répétées** qui créent la cohérence et la reconnaissance.

**Le motif** est la plus petite idée musicale reconnaissable — quelques notes, un rythme caractéristique. C'est la cellule de base depuis laquelle une œuvre entière peut se développer. Les quatre premières notes de la Cinquième Symphonie de Beethoven (*ta-ta-ta-taaaam*) sont le motif le plus célèbre de l'histoire de la musique.

**Le leitmotiv** est un motif récurrent associé à un personnage, une émotion ou une idée tout au long d'une œuvre. Wagner l'a systématisé à l'opéra. Le thème de James Bond est un leitmotiv : dès les premières notes, tu sais que l'espion est là.

**L'ostinato** est un motif musical répété exactement, encore et encore, dans la même tonalité. Le Boléro de Ravel est construit sur un ostinato rythmique de 17 notes répété 18 fois. En danse, travailler sur un ostinato invite à explorer la variation dans la répétition.

**En pratique pour le danseur :**
- Repère le motif principal d'un morceau → c'est souvent là qu'un geste signature peut prendre racine
- Entends les leitmotivs → utilise-les comme balises chorégraphiques
- Danse sur un ostinato → explore ce que la répétition révèle dans ton corps`,
        pointsCles: [
          "Le motif = la plus petite idée musicale reconnaissable — la cellule depuis laquelle tout se développe.",
          "Le leitmotiv associe un motif récurrent à un personnage ou une émotion tout au long d'une œuvre.",
          "L'ostinato = motif répété exactement, encore et encore — le Boléro de Ravel en est l'exemple parfait.",
          "Repère le motif d'un morceau → c'est souvent là qu'un geste signature prend racine.",
        ],
      },
      {
        titre: "La cadence : comment la musique respire",
        contenuMarkdown: `La **cadence** est la résolution harmonique qui termine une phrase musicale — comme la ponctuation d'une phrase écrite. Elle crée un sentiment de conclusion, de pause ou d'ouverture.

**Les deux grandes cadences :**

**Cadence parfaite** (V → I) : passage de l'accord de dominante vers la tonique. C'est la résolution la plus "fermée", la plus conclusive — comme un point final. En danse, c'est le moment où tu peux poser un équilibre, marquer une pause, laisser le geste résonner.

**Cadence imparfaite** (I → V) : passage vers la dominante. La musique "s'ouvre", crée une attente — comme une virgule ou une question. En danse, c'est souvent là qu'une transition commence, une nouvelle direction s'amorce.

**Dissonance et résolution :**
La **dissonance** est la tension créée par des notes qui ne s'accordent pas encore — elles appellent une résolution. Le danseur peut physiquement "porter" cette tension dans le corps : une suspension, un déséquilibre, un geste inachevé. La **résolution** qui suit libère cette tension — et le corps peut l'habiter comme un soupir, un atterrissage, un relâchement.

| Élément harmonique | Sensation | Traduction dansée |
|-------------------|-----------|------------------|
| Dissonance | Tension, instabilité | Déséquilibre, suspension, retenue |
| Résolution | Soulagement, stabilité | Atterrissage, pose, relâchement |
| Cadence parfaite | Conclusion | Pause, fin de phrase, bilan |
| Cadence imparfaite | Ouverture | Transition, nouveau départ |

> *Moi, je pense à la dissonance/résolution musicale comme à une question et sa réponse. Et j'essaie de rendre cette question-réponse visible dans mon corps. Ça transforme n'importe quelle variation en dialogue.*`,
        pointsCles: [
          "La cadence est la résolution harmonique qui termine une phrase — comme la ponctuation d'une phrase écrite.",
          "Cadence parfaite (V→I) = conclusion fermée — le moment de poser un équilibre ou une pause.",
          "Cadence imparfaite (I→V) = ouverture, attente — c'est souvent là que naît une transition.",
          "Dissonance = tension dans le corps (suspension) ; résolution = soupir, atterrissage, relâchement.",
        ],
      },
    ],
  },
]
