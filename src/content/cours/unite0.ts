import type { Cours } from '../schema'

export const coursUnite0: Cours[] = [
  {
    id: 'laban-mouvement',
    titre: "Le mouvement selon Laban",
    resume: "Rudolf Laban a créé un langage universel pour analyser et noter le mouvement humain. Ses quatre facteurs d'Effort — Poids, Espace, Temps et Flux — sont des outils indispensables pour tout danseur.",
    disciplines: ['commun'],
    termesAbordes: ['effort-laban', 'kinesphere', 'niveaux-espace', 'qualites-de-mouvement'],
    sections: [
      {
        titre: "Qui est Rudolf Laban ?",
        contenuMarkdown: `Rudolf Laban (1879–1958) est un danseur et théoricien hongrois qui a révolutionné la manière dont on pense, enseigne et note le mouvement.

Né à Bratislava, il a développé son système entre les deux guerres mondiales, influencé par l'expressionnisme allemand, l'architecture et la géométrie. Son travail a donné naissance à deux grandes disciplines :

- **La Labanotation** : un système de notation chorégraphique permettant d'écrire n'importe quel mouvement humain, utilisé encore aujourd'hui pour archiver le répertoire.
- **L'Analyse du Mouvement Laban (AML)** : un cadre d'observation et de description du mouvement, utilisé dans la danse, la thérapie, le théâtre et même le management.

Son influence est immense : Martha Graham, Mary Wigman et Pina Bausch ont tous été marqués par ses idées.`,
      },
      {
        titre: "Les quatre facteurs d'Effort",
        contenuMarkdown: `Le cœur du système Laban repose sur quatre facteurs qui décrivent *comment* le corps se déplace (et non *où* ni *quoi*) :

| Facteur | Polarité 1 | Polarité 2 |
|---------|-----------|-----------|
| **Poids** | Fort / Puissant | Léger / Délicat |
| **Espace** | Direct / Focalisé | Indirect / Diffus |
| **Temps** | Soudain / Urgent | Soutenu / Étalé |
| **Flux** | Lié / Contrôlé | Libre / Fluide |

Ces facteurs ne sont pas des opposés binaires mais des **continuums** — il existe une infinité de nuances entre les deux extrêmes.

**Exemple pratique :** Un applaudissement est fort, direct, soudain et lié. Une caresse est légère, indirecte, soutenue et libre.`,
      },
      {
        titre: "La kinesphère et les niveaux",
        contenuMarkdown: `Laban a également développé une cartographie de l'espace autour du corps.

**La kinesphère** est ta bulle personnelle — l'espace que tu peux atteindre sans bouger tes pieds. Elle est divisée en :
- Portée proche (gestes serrés)
- Portée médiane (bras à mi-chemin)
- Portée éloignée (extension maximale)

**Les trois niveaux** organisent l'espace verticalement :
- **Bas** : au sol, accroupi
- **Moyen** : debout naturel
- **Haut** : relevé, sauté, suspendu

Laban visualisait la kinesphère comme un **icosaèdre** (solide à 20 faces), avec 26 directions de mouvement possibles depuis le centre.`,
      },
    ],
  },

  {
    id: 'anatomie-danseur',
    titre: "Anatomie appliquée au danseur",
    resume: "Comprendre son corps de l'intérieur pour danser plus intelligemment : alignement, turn-out, centre de gravité, tonicité et proprioception sont les piliers de la technique corporelle.",
    disciplines: ['commun'],
    termesAbordes: ['alignement', 'turn-out', 'centre-de-gravite', 'tonicite', 'proprioception'],
    sections: [
      {
        titre: "L'alignement : la colonne comme boussole",
        contenuMarkdown: `La colonne vertébrale humaine n'est pas droite — elle présente trois courbures naturelles (lordose cervicale, cyphose thoracique, lordose lombaire). L'alignement dansé respecte ces courbures tout en les optimisant.

**Repères d'alignement debout :**
1. Tête : regard horizontal, occiput dans le prolongement de la colonne
2. Épaules : basses, éloignées des oreilles
3. Cage thoracique : ouverte, pas projetée en avant
4. Bassin : neutre (ni basculé en avant, ni rétroversé)
5. Genoux : dans l'axe des pieds, légèrement déverrouillés
6. Pieds : plante entière en contact avec le sol

L'alignement est dynamique — il s'adapte à chaque mouvement sans jamais être figé.`,
      },
      {
        titre: "Le turn-out : anatomie et limites",
        contenuMarkdown: `Le turn-out (rotation externe des hanches) est souvent idéalisé sans être compris. Voici la réalité anatomique :

**Ce qui détermine le turn-out :**
- La forme de la tête du fémur (rotonde → plus de mobilité)
- L'orientation de l'acétabule (cavité de la hanche)
- L'angle d'antéversion du col fémoral (moins d'antéversion → plus de turn-out naturel)
- La longueur des ligaments de la capsule articulaire

**Ce qu'on peut améliorer :**
- Le renforcement des rotateurs externes (obturateur, pyramidal, sous-fessiers)
- La souplesse des rotateurs internes (adducteurs, fléchisseurs de hanche)
- La proprioception du turn-out (tenir le turn-out en mouvement)

**Ce qu'on ne peut pas changer :** la structure osseuse. Forcer au-delà blesse.`,
      },
      {
        titre: "Centre de gravité, tonicité et proprioception",
        contenuMarkdown: `**Centre de gravité (CDG)** : situé environ à deux travers de doigt sous le nombril. En mouvement, le CDG décrit une trajectoire — la régularité de cette trajectoire définit l'économie du geste.

**Tonicité** : le danseur doit cultiver un tonus *sélectif* — engager les muscles nécessaires au geste, relâcher les autres. Crisper tout le corps consomme de l'énergie inutilement.

**Proprioception** : sens du corps dans l'espace, essentiel pour :
- La correction posturale automatique
- La mémorisation du mouvement (mémoire corporelle)
- La prévention des blessures (réflexe de protection)

> *Exercice de Plumy : Ferme les yeux, lève un bras dans une direction précise, puis vérifie sans ouvrir les yeux si tu sens exactement où il est. C'est la proprioception au travail.*`,
      },
    ],
  },

  {
    id: 'musique-appliquee',
    titre: "Formation musicale pour le danseur",
    resume: "Tout danseur est aussi musicien de son corps. Comprendre le tempo, la mesure, le phrasé, l'anacrouse et la syncope, c'est dialoguer avec la musique plutôt que simplement la suivre.",
    disciplines: ['commun'],
    termesAbordes: ['tempo', 'mesure-musicale', 'phrase-musicale', 'anacrouse', 'syncope'],
    sections: [
      {
        titre: "Le tempo et la mesure : le squelette rythmique",
        contenuMarkdown: `**Le tempo** est la vitesse de la pulsation, mesurée en BPM (battements par minute). Savoir l'écouter et l'intérioriser est une compétence fondamentale.

**La mesure** organise les temps en groupes réguliers. Les mesures les plus courantes en danse :

| Mesure | Caractère | Utilisations |
|--------|-----------|-------------|
| 4/4 | Universel, robuste | Jazz, pop, contemporain, hip-hop |
| 3/4 | Ternaire, volute | Valse, cabaret, classique romantique |
| 2/4 | Binaire, énergique | French cancan, marche |
| 6/8 | Oscillant, berceuse | Certains jazz, musiques folkloriques |

**Compter en danse :** on compte généralement en 8 (deux mesures de 4/4), en 6 (pour la valse), ou en combinaison.`,
      },
      {
        titre: "Le phrasé musical : la grammaire du temps",
        contenuMarkdown: `Comme une langue a des phrases, la musique a des **phrases musicales** — généralement 4 ou 8 mesures — qui se terminent par une cadence (comme une ponctuation).

Le danseur doit entendre :
- **Le début de phrase** (downbeat) : souvent un point d'arrivée ou de départ fort
- **La montée** : développement de l'énergie
- **La cadence finale** : résolution, respiration

**Phrasé dansé vs phrasé musical :** un chorégraphe peut choisir d'aligner ses phrases avec la musique (*avec-la-musique*) ou de créer délibérément des décalages (*contre la musique*). Ce jeu de tension/résolution est l'un des outils les plus puissants de la composition.

> *Note de Plumy : J'aime beaucoup les chorégraphes qui arrivent une mesure avant ou après la musique. Ça crée une surprise que même moi je n'arrive pas toujours à anticiper.*`,
      },
      {
        titre: "Anacrouse et syncope : le jeu sur le temps",
        contenuMarkdown: `**L'anacrouse** est la note (ou le mouvement) qui précède le temps fort pour l'annoncer. C'est la préparation, le souffle avant la parole. En danse, c'est la différence entre un geste *projeté* dans la musique et un geste *arraché*.

**La syncope** déplace l'accent vers les temps faibles. C'est l'ADN du jazz et du funk — cette tension légèrement décalée qui crée le groove.

**Repères pratiques :**
- Une valse qui passe sur le "3-et" avant le "1" utilise l'anacrouse
- Un jazz step qui tombe sur le "2 et 4" plutôt que "1 et 3" est syncopé
- Un danseur qui anticipe systématiquement le tempo "met en avance"

Expérimenter avec ces déplacements temporels, c'est apprendre à *parler* en musique, pas seulement à l'*écouter*.`,
      },
    ],
  },

  {
    id: 'espace-scenique',
    titre: "Repères d'espace scénique",
    resume: "Côté cour, côté jardin, face, lointain, diagonale — apprendre le vocabulaire de l'espace scénique est indispensable pour recevoir et donner des indications chorégraphiques.",
    disciplines: ['commun'],
    termesAbordes: ['cote-cour', 'cote-jardin', 'face-lointain', 'diagonale', 'en-croix'],
    sections: [
      {
        titre: "La carte de la scène",
        contenuMarkdown: `L'espace scénique est organisé par convention depuis le XVIIe siècle français. Tous les professionnels utilisent ce vocabulaire commun.

**Axe latéral (gauche-droite depuis le danseur) :**
- **Côté Cour** : à gauche du danseur face public (droite du public)
- **Côté Jardin** : à droite du danseur face public (gauche du public)

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

> *Mémo de Plumy : 'Cour' comme 'Court' = à gauche = le côté le plus court à dire. 'Jardin' = à droite = le côté plus fleuri... et plus long.*`,
        schemaId: 'espace-scenique-grille',
      },
      {
        titre: "Trajectoires et directions",
        contenuMarkdown: `**La diagonale** est la trajectoire la plus longue sur scène. Elle traverse de coin à coin :
- Jardin-Lointain → Cour-Face (la plus classique)
- Cour-Lointain → Jardin-Face (l'autre sens)

**En croix** désigne un exercice exécuté dans 4 directions successives : devant, côté, derrière, côté. On retrouve ce principe à la barre classique, dans les isolations jazz, dans l'exploration de l'espace en contemporain.

**Le manège** est une trajectoire circulaire le long des bords de la scène — très utilisé en classique pour les grandes combinaisons de tours et de sauts.

**Les coulisses** sont les zones cachées de chaque côté de la scène (en cour et en jardin), depuis lesquelles les danseurs attendent leur entrée.`,
      },
      {
        titre: "Orientation du corps sur scène",
        contenuMarkdown: `Au-delà de la position sur scène, l'orientation du corps a aussi son vocabulaire (notamment en classique et en contemporain) :

| Terme | Sens |
|-------|------|
| **En face** | Face au public, de face |
| **De profil** | Présentant le côté au public |
| **De dos** | Dos au public |
| **Épaulé** | Corps légèrement tourné (3/4 face) |
| **Croisé** | Pied croisé sur l'autre axe |
| **Ouvert** | Pied du même côté que le corps |

Ces orientations se combinent avec les zones de scène pour créer des positions précises dans l'espace.

> *Le savoir scénique, c'est comme avoir un GPS dans le corps. Une fois qu'on l'a, on ne se perd plus jamais sur scène — et on peut recevoir n'importe quelle indication chorégraphique au millimètre.*`,
      },
    ],
  },
]
