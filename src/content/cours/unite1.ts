import type { Cours } from '../schema'

export const coursUnite1: Cours[] = [
  {
    id: 'laban-mouvement',
    titre: "Le mouvement selon Laban",
    resume: "Rudolf Laban a créé un langage universel pour analyser et noter le mouvement humain. Ses quatre facteurs d'Effort — Poids, Espace, Temps et Flux — sont des outils que j'utilise encore aujourd'hui pour décrire ce que je vois et ce que je ressens en dansant.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'kinesphere', 'niveaux-espace', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qui est Rudolf Laban ?",
        contenuMarkdown: `J'ai une page entière consacrée à Laban dans mon carnet — avec des petits croquis tout autour, parce qu'il m'a vraiment bouleversé quand je l'ai découvert. Rudolf Laban (1879–1958) est un danseur et théoricien hongrois qui a révolutionné la manière dont on pense, enseigne et note le mouvement.

Né à Bratislava, il développe son système entre les deux guerres mondiales, influencé par l'expressionnisme allemand, l'architecture et la géométrie. Son travail donne naissance à deux grandes disciplines :

- **La Labanotation** : un système de notation chorégraphique qui permet d'écrire n'importe quel mouvement humain sur une portée verticale — utilisé encore aujourd'hui pour archiver le répertoire.
- **L'Analyse du Mouvement Laban (AML)** : un cadre d'observation et de description du mouvement, utilisé dans la danse, la thérapie, le théâtre et même le management.

Son influence est immense : Martha Graham, Mary Wigman et Pina Bausch ont tous été marqués par ses idées. Ce n'est pas pour rien que son nom revient dans presque chaque conversation sérieuse sur la danse.`,
      },
      {
        titre: "Les quatre facteurs d'Effort",
        contenuMarkdown: `Ce qui m'a frappé quand j'ai découvert les facteurs d'Effort de Laban, c'est leur simplicité apparente — et leur profondeur réelle. Ils décrivent *comment* le corps se déplace, pas *où* ni *quoi* :

| Facteur | Polarité 1 | Polarité 2 |
|---------|-----------|-----------|
| **Poids** | Fort / Puissant | Léger / Délicat |
| **Espace** | Direct / Focalisé | Indirect / Diffus |
| **Temps** | Soudain / Urgent | Soutenu / Étalé |
| **Flux** | Lié / Contrôlé | Libre / Fluide |

Ces facteurs ne sont pas des opposés binaires mais des **continuums** — il existe une infinité de nuances entre les deux extrêmes. Et c'est ça qui les rend précieux : ils te donnent un vocabulaire pour décrire des choses qu'on ressent mais qu'on ne sait pas toujours nommer.

**Exemple pratique :** Un applaudissement est fort, direct, soudain et lié. Une caresse est légère, indirecte, soutenue et libre. Essaie de penser à tes propres gestes de la journée avec cette grille — tu ne regarderas plus tes mains pareil.`,
      },
      {
        titre: "La kinesphère et les niveaux",
        contenuMarkdown: `Laban a aussi développé une cartographie de l'espace autour de toi — et j'adore cette idée parce qu'elle te donne le sentiment que ton corps est le centre d'un univers personnel.

**La kinesphère** est ta bulle personnelle : l'espace que tu peux atteindre sans déplacer tes pieds. Elle se divise en :
- Portée proche (gestes serrés, intimes)
- Portée médiane (bras à mi-chemin)
- Portée éloignée (extension maximale)

**Les trois niveaux** organisent l'espace verticalement :
- **Bas** : au sol, accroupi
- **Moyen** : debout naturel
- **Haut** : relevé, sauté, suspendu

Et dans mon carnet, j'ai noté ça : Laban visualisait la kinesphère comme un **icosaèdre** — un solide à 20 faces — avec 26 directions de mouvement possibles depuis le centre. Si tu adores la géométrie, c'est ton moment de gloire. Si tu n'aimes pas les maths, retiens juste la bulle et les trois niveaux — ça suffit pour que tout s'éclaire.`,
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
      },
      {
        titre: "Anacrouse et syncope : le jeu sur le temps",
        contenuMarkdown: `Voilà deux notions qui vont transformer ta façon d'entrer dans la musique.

**L'anacrouse** est la note (ou le mouvement) qui précède le temps fort pour l'annoncer. C'est la préparation, le souffle avant la parole. En danse, c'est la différence entre un geste *projeté* dans la musique et un geste *arraché* à elle. Quand tu entends "5, 6, 7, 8" — ces quatre comptes sont une anacrouse. Ton corps se prépare, s'élan avant de démarrer.

**La syncope** déplace l'accent vers les temps faibles. C'est l'ADN du jazz et du funk — cette tension légèrement décalée qui crée le groove, ce balancement irrésistible.

**Repères pratiques :**
- Une valse qui passe sur le "3-et" avant le "1" utilise l'anacrouse
- Un jazz step qui tombe sur le "2 et 4" plutôt que "1 et 3" est syncopé
- Un danseur qui anticipe systématiquement le tempo "met en avance"

Expérimenter avec ces déplacements temporels, c'est apprendre à *parler* en musique, pas seulement à l'*écouter*. Et franchement, une fois qu'on entend la syncope dans les muscles — on ne peut plus s'en passer.`,
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
