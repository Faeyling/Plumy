import type { Cours } from '../schema'

export const coursUnite4: Cours[] = [
  {
    id: 'intro-moderne',
    titre: 'La danse moderne — héritage, techniques et langage',
    resume: "La danse moderne n'est pas un style unique mais une révolution : comprendre le travail du buste (flat back, hinge, ondulation), les isolations et la segmentation corporelle, les trois grandes techniques pédagogiques (Horton, Cunningham, Limón) et les outils de composition que sont le canon et l'unisson.",
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
        contenuMarkdown: `La danse moderne est née au début du XXe siècle comme une **rupture** avec la danse académique — pas une évolution, une révolution.

**Ce qui a déclenché la rupture :**
- Le rejet des pointes et du turn-out obligatoire
- Le rejet du livret narratif comme fondement de tout spectacle
- L'exploration du corps comme instrument expressif direct
- La recherche d'un mouvement naturel, humain, ancré dans la réalité

**Les pionnières (qui ont tout changé) :**
- **Isadora Duncan** (1877–1927) : liberté du corps, pieds nus, inspiration grecque
- **Loïe Fuller** (1862–1928) : corps-instrument, jeux de lumière, abstraction
- **Ruth St. Denis** (1879–1968) : influences orientales, spiritualité

**La génération fondatrice américaine :**
- **Martha Graham** (1894–1991) : contraction/release, technique codifiée, expressionnisme
- **Doris Humphrey** (1895–1958) : fall and recovery, poids et gravité
- **Lester Horton** (1906–1953) : anatomie fonctionnelle, inclusivité
- **José Limón** (1908–1972) : héritage Humphrey, poids, swing, dramaticité

**La rupture avec la danse moderne (Judson Church, années 1960) :**
Merce Cunningham, puis les artistes du Judson Dance Theater (Yvonne Rainer, Steve Paxton, Trisha Brown) remettent en question *la danse moderne elle-même* — et ouvrent la voie à la danse contemporaine.

**Danse moderne vs danse contemporaine :**
| | Moderne | Contemporaine |
|---|---|---|
| **Techniques** | Codifiées (Graham, Horton, Limón) | Plurielles, hybrides |
| **Expression** | Souvent narratif/émotionnel | Questionnement du mouvement lui-même |
| **Période** | 1900–1970 environ | 1960 à aujourd'hui |
| **Rapport au passé** | Rupture avec le ballet | Rupture aussi avec la moderne |

> La danse moderne *croit encore* qu'il y a quelque chose à exprimer. La contemporaine remet en question ce postulat.`,
      },
      {
        titre: 'Les isolations et la segmentation corporelle',
        contenuMarkdown: `L'une des contributions les plus distinctives de la danse moderne est la **segmentation consciente** du corps — la capacité à activer et contrôler chaque partie indépendamment.

**L'isolation corporelle :**
Mouvement d'une seule partie du corps pendant que le reste reste immobile. Ce n'est pas une invention de la danse moderne — c'est un héritage des **traditions africaines et afro-américaines** que la danse moderne a intégré et codifié.

**Les cinq zones d'isolation principales :**
1. **Tête** : droite/gauche, avant/arrière, rotations
2. **Épaules** : haut/bas, avant/arrière, rotations indépendantes
3. **Cage thoracique** : latérale, avant/arrière, rotation (la plus difficile à isoler)
4. **Bassin** : toutes directions — source de la mobilité pelvienne
5. **Genoux** : avant/arrière dans le plan sagittal

**Le polycentrisme :**
Plusieurs parties du corps actives *simultanément* avec des énergies et des rythmes différents. C'est la base du groove en jazz et une caractéristique fondamentale des danses africaines.

**La succession corporelle :**
L'impulsion voyage séquentiellement à travers les segments — comme une vague. S'oppose au mouvement en 'bloc' (toutes les parties bougent ensemble).

**Progression pédagogique recommandée :**
1. Isolations une par une (tête, puis épaules, puis cage, puis bassin)
2. Successions simples (bras : épaule → coude → poignet → doigts)
3. Body wave complète (de bas en haut)
4. Deux centres simultanés (cage et bassin dans des directions différentes)
5. Polycentrisme avec rythmes différents (bras un rythme, hanches un autre)

> La segmentation n'est pas une décomposition mécanique — c'est une intelligence du corps. Chaque partie qui parle est une partie qui *pense*.`,
      },
      {
        titre: 'Le travail du buste — flat back, hinge, ondulation',
        contenuMarkdown: `La danse moderne a développé un vocabulaire spécifique pour le travail du buste qui n'a pas d'équivalent dans la technique classique.

---

## Le flat back (dos plat)

Le torse s'incline depuis les **hanches** (pas depuis la taille) en maintenant la colonne parfaitement droite.

**Points clés :**
- La colonne reste droite et horizontale (pas de dos arrondi)
- La tête prolonge la ligne du dos
- L'inclinaison vient du pliage de hanche (fold at the hip)

**Variantes :** flat back debout, flat back latéral, table (flat back à 90°)

---

## Le hinge (charnière)

Inclinaison du corps entier en **arrière** depuis les genoux — le corps forme une ligne diagonale rigide.

**Points clés :**
- La source est dans les genoux, pas dans le dos
- Le corps ne se casse pas à la taille : tout le corps s'incline comme un seul bloc
- Exige quadriceps forts et gainage abdominal

**Origine :** Technique Horton (Lester Horton, Los Angeles, années 1950)

---

## L'ondulation (body wave)

Vague qui parcourt le corps verticalement — de bas en haut ou de haut en bas.

**Ondulation ascendante :**
1. Flexion des genoux → bassin en avant → bas du dos → cage thoracique → épaules → tête

**Ce qui crée la beauté :**
L'impression de continuité — chaque segment répond au précédent avec un légère retard.

---

**Comparaison des trois :**
| | Flat back | Hinge | Ondulation |
|---|---|---|---|
| **Direction** | En avant/latéral | En arrière | Verticale |
| **Colonne** | Droite | Droite | Séquentielle |
| **Source** | Hanches | Genoux | Pieds / tête |

---

> Le buste en danse moderne n'est pas un bloc rigide qui se déplace dans l'espace. Il *parle* — chaque inclinaison, chaque vague, chaque torsion est une phrase du corps.`,
      },
      {
        titre: 'Les trois grandes techniques modernes',
        contenuMarkdown: `Trois pédagogies ont structuré l'enseignement de la danse moderne et continuent d'être enseignées dans le monde entier.

---

## Technique Horton

**Lester Horton** (1906–1953), Los Angeles.

**Principes :**
- Anatomie d'abord — chaque exercice a une justification anatomique
- Corps complet — toutes les parties, toutes les directions
- Amplitude maximale
- **Inclusivité** : il acceptait des danseurs de toutes origines à l'époque de la ségrégation

**Vocabulaire signature :** Hinges, flat backs, T-positions, latéraux en extension

**Son élève le plus célèbre :** Alvin Ailey, qui a transmis la technique au monde entier via l'Alvin Ailey American Dance Theater.

---

## Technique Cunningham

**Merce Cunningham** (1919–2009).

**Principes radicaux :**
- **Dissociation** de la danse et de la musique (ils coexistent mais ne se synchronisent pas)
- **Dissociation** de la danse et du sens (pas besoin d'exprimer une émotion)
- Tous les points de l'espace ont la même valeur
- Le **hasard** comme outil de composition

**Caractéristiques techniques :**
- Colonne mobile dans toutes directions
- Jambes avec virtuosité quasi-classique
- Tête active et indépendante

**Avec John Cage :** Cunningham et le compositeur Cage forment un des partenariats artistiques les plus féconds du XXe siècle.

---

## Technique Limón

**José Limón** (1908–1972), dans l'héritage de Doris Humphrey.

**Principes :**
- **Poids** : le corps utilise réellement son poids, sans illusion de légèreté
- **Swing** : les membres oscillent en pendule — gravité + élan + suspension
- **Succession** : l'impulsion voyage corps entier
- **Chute et récupération** : le mouvement vit entre l'équilibre et la chute

**Dimension dramatique :**
Les œuvres de Limón traitent de la condition humaine, de la liberté, de la résistance. Son héritage mexicain-américain nourrit une vision profondément humaniste.

---

> Ces trois techniques ne sont pas des concurrentes — elles explorent trois visions du corps en mouvement. Un danseur moderne complet les connaît toutes les trois.`,
      },
      {
        titre: 'Canon et unisson — composer avec le temps',
        contenuMarkdown: `La danse moderne a apporté une réflexion nouvelle sur la **composition chorégraphique** — comment organiser les corps dans l'espace et le temps. Deux outils fondamentaux : le canon et l'unisson.

---

## L'unisson

Tous les danseurs réalisent exactement le même mouvement au même moment.

**Ce qui rend l'unisson difficile :**
- Chaque corps a son propre timing naturel
- Les amplitudes diffèrent selon les corps
- Il faut une **écoute musicale collective** — tous respirent ensemble

**Unisson vs uniformité :**
- L'uniformité vise la ressemblance mécanique des formes
- L'unisson aspire à une **respiration commune** — l'énergie circule au même instant dans tous les corps

**L'effet visuel :**
La puissance de plusieurs corps animés par la même impulsion simultanée.

---

## Le canon

Plusieurs danseurs réalisent la même phrase à des **moments différents** — avec un décalage précis.

**Types de canon :**
- **Canon strict** : décalage fixe (ex : tous les 8 temps)
- **Canon libre** : décalages variables
- **Canon en miroir** : la phrase est aussi retournée (droite/gauche)
- **Canon en augmentation** : la phrase est ralentie chez certains danseurs

**Effets visuels du canon :**
- Crée une impression de **vague** qui traverse le groupe
- Met en valeur la structure de la phrase (on la voit plusieurs fois)
- Permet de remplir l'espace avec peu de matériel
- Crée une **conversation** entre les danseurs

**Référence incontournable :**
*Fase* d'Anne Teresa De Keersmaeker et Steve Reich (1982) — un chef-d'œuvre de canon où deux danseuses exécutent la même phrase avec un léger décalage pendant toute la durée de la pièce.

---

## L'opposition des membres

En plus du canon et de l'unisson, l'opposition est un outil de composition *dans* un seul corps : deux parties qui s'étirent simultanément dans des directions opposées. Elle crée de l'espace, de la tension linéaire, et stabilise le mouvement.

---

> Canon et unisson sont les deux faces d'une même médaille : comment les corps communiquent à travers le temps — ensemble ou en décalé.`,
      },
    ],
  },
]
