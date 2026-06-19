import type { Cours } from '../schema'

export const coursUnite3: Cours[] = [
  {
    id: 'intro-contemporain',
    titre: 'La danse contemporaine — corps, espace et liberté',
    resume: "Comprendre la danse contemporaine de l'intérieur : rapport à la gravité, techniques de release, travail au sol, contact improvisation, pratiques somatiques et composition. Tout ce qui différencie un corps contemporain d'un corps classique.",
    disciplines: ['contemporain'],
    termesAbordes: [
      'release-technique', 'poids-abandon', 'gravite-contemporain',
      'contraction-release', 'fall-recovery', 'suspension', 'rebond-swing',
      'fluidite-mouvement', 'spirale', 'floorwork', 'roulade', 'chute-controlee',
      'point-de-contact', 'partage-poids', 'score-improvisation', 'somatique',
    ],
    sections: [
      {
        titre: "Qu'est-ce que la danse contemporaine ?",
        contenuMarkdown: `La danse contemporaine est difficile à définir — et c'est volontaire. Elle s'est construite précisément contre les définitions fermées.

**Ce qu'elle n'est pas :**
- Un style esthétique unique (il n'existe pas de 'technique contemporaine' universelle comme la technique classique)
- Synonyme de 'danse moderne' (deux périodes et approches distinctes)
- De la danse classique sans les pointes

**Ce qu'elle est :**
- Un ensemble de pratiques artistiques qui questionnent en permanence ce qu'est la danse
- Un champ ouvert, pluriel, en constant renouvellement
- Un rapport différent au corps, à l'espace, au temps et au public

**Repères historiques :**
- **1960s** : Judson Dance Theater (New York) — rupture avec la technique moderne
- **1970s** : Contact improvisation, danse postmoderne
- **1980s** : Tanztheater (Bausch), explosion de la danse-théâtre
- **1990–2000s** : Dialogue avec les arts visuels, performance, numérique
- **Aujourd'hui** : Corps pluriels, identités, technologies, site-specific

**La danse contemporaine se reconnaît à :**
- La diversité des corps qui la pratiquent
- La pluralité des techniques utilisées (souvent hybrides)
- La dimension de questionnement (artistique, social, politique)
- L'importance accordée au processus autant qu'au résultat`,
      },
      {
        titre: 'Le corps contemporain — un rapport différent à la gravité',
        contenuMarkdown: `La différence fondamentale entre le corps classique et le corps contemporain tient à leur rapport à la **gravité**.

**Corps classique :**
- Lutte contre la gravité (élévation, légèreté, pointes)
- Axe vertical maintenu en permanence
- Le sol est un point de départ/arrivée
- Esthétique de la ligne tendue et contrôlée

**Corps contemporain :**
- Dialogue avec la gravité (abandon, poids, ancrage)
- L'axe vertical est une option parmi d'autres
- Le sol est un espace de danse à part entière
- Esthétique de la fluidité, de la rupture, de la diversité

**Les axes du corps contemporain :**

**1. Axe vertical** (partagé avec le classique)
Le danseur est debout, l'axe passe du sommet du crâne au milieu des pieds. Mais en contemporain, cet axe peut s'incliner, se courber, se tordre.

**2. Axe horizontal** (sol)
Le corps allongé, roulé, rampant — les niveaux proches du sol.

**3. Axe diagonal**
Le corps penché, en déséquilibre volontaire — entre verticale et horizontale.

> La richesse du corps contemporain vient de sa capacité à habiter tous ces axes, à passer de l'un à l'autre, à trouver du sens dans chacun.`,
      },
      {
        titre: 'La release technique et le travail de relâchement',
        contenuMarkdown: `La **release technique** est l'une des approches les plus répandues en danse contemporaine — et l'une des moins bien comprises.

**Ce n'est pas :**
- De la relaxation
- De l'absence de technique
- Un style esthétique

**C'est :**
- Une philosophie du mouvement basée sur l'**économie d'effort**
- Une méthode d'identification et de libération des **tensions parasites**
- Un outil pour **maximiser la fluidité** et l'**amplitude** sans forcer

**Le scan corporel (première pratique) :**
1. Allonger au sol (ou assis)
2. Porter l'attention successivement sur chaque partie du corps
3. Observer sans juger : est-ce que je tiens quelque chose ? Est-ce que ça peut se relâcher ?
4. Libérer les zones de tension non nécessaires

**Les tensions fréquentes chez les danseurs :**
- Mâchoire serrée
- Épaules soulevées
- Ventre contracté en permanence
- Orteils crispés dans les chaussures

**L'anatomie comme outil :**
La release technique s'appuie sur une connaissance anatomique — comprendre comment les os s'articulent permet de trouver des positions naturellement stables, sans effort musculaire excessif.`,
      },
      {
        titre: 'La contraction-release et le travail Graham',
        contenuMarkdown: `**Martha Graham** (1894–1991) crée une des techniques les plus complètes et les plus codifiées de la danse moderne. Son principe central : **la contraction et le release**.

**La contraction :**
- Creusement actif du bas-ventre et du bas du dos
- La colonne se courbe en C
- Inspiration → expiration
- Expression : intériorité, douleur, recueillement

**Le release :**
- Extension et ouverture du centre
- La colonne s'allonge, le sternum monte
- Expiration → inspiration
- Expression : liberté, aspiration, extériorité

**Exercices fondamentaux de la technique Graham :**

**Contraction assise (sitting contraction) :**
- En tailleur ou jambes tendues
- Contracte depuis le bas-ventre, la colonne s'arrondit
- Reviens en release (colonne redressée)
- Répète sur plusieurs respirations

**Contraction latérale :**
- Debout sur une jambe
- Contraction + inclinaison latérale
- Release et retour

**Le spiral Graham :**
- En contraction, la colonne se tord vers un côté
- Le dénouement de la spirale relance le mouvement

**Importance de la respiration :**
Dans toute la technique Graham, la respiration *génère* le mouvement — elle n'est pas superposée à un mouvement déjà décidé. C'est une révolution pédagogique.`,
      },
      {
        titre: 'Le travail au sol — floorwork, chutes et roulades',
        contenuMarkdown: `Le travail au sol est l'une des compétences les plus distinctives de la danse contemporaine. Il exige confiance, conscience corporelle et progression méthodique.

**La progression pédagogique recommandée :**

**Étape 1 — Apprivoiser le sol**
Explorations libres au sol : rouler, se retourner, trouver les positions confortables. Pas d'objectif de forme — juste explorer.

**Étape 2 — Les surfaces sûres**
Identifier les surfaces corporelles sur lesquelles on peut rouler en sécurité :
- ✓ Dos plat (abdominaux engagés pour protéger les vertèbres)
- ✓ Côté de la cuisse, côté du torse
- ✓ Ventre (sur les pectoraux et les abdominaux)
- ✗ Genoux, coudes, os saillants (sans préparation)

**Étape 3 — Les transitions debout/sol**
La difficulté n'est pas le sol — c'est la transition. Apprendre à :
- Descendre sans impact (plier les articulations en ordre)
- Monter sans effort brut (utiliser l'élan de la dynamique au sol)

**Étape 4 — Les chutes dirigées**
Back fall, side fall — toujours avec une direction, toujours avec un plan de sortie.

**Étape 5 — L'enchaînement floorwork**
Combiner roulades, transitions, chutes en des phrases fluides.

> Le sol est ton partenaire, pas ton ennemi. Plus tu lui fais confiance, plus il t'aide.`,
      },
      {
        titre: 'Le contact improvisation — écouter avec le corps',
        contenuMarkdown: `Le **contact improvisation** (Steve Paxton, 1972) est une pratique qui a révolutionné la danse contemporaine — et qui se pratique encore intensément aujourd'hui dans des jams du monde entier.

**Les principes fondamentaux :**

1. **Le point de contact** : une zone de toucher entre deux corps — mobile, changeante
2. **Le partage de poids** : donner réellement son poids à l'autre, et recevoir le sien
3. **L'écoute** : à travers le contact, communiquer intention, direction, résistance
4. **La réciprocité** : pas de rôle fixe porteur/porté — tout change en permanence

**Pourquoi le contact impro est révolutionnaire :**
- Il supprime la hiérarchie (homme porte, femme est portée)
- Il travaille avec des corps de toutes formes et toutes forces
- Il est improvisé — pas de chorégraphie mémorisée
- Il développe une intelligence corporelle rare

**Les jams de contact improvisation :**
Des sessions ouvertes, souvent hebdomadaires, dans la plupart des grandes villes. Accessibles aux débutants avec un minimum d'introduction.

**Commencer en douceur :**
1. Se tenir dos à dos avec quelqu'un
2. Sentir son poids, sa chaleur
3. Laisser le contact voyager légèrement
4. Introduire progressivement le partage de poids

**La sécurité en contact impro :**
- Commencer par peu de poids partagé
- Communiquer (verbalement si besoin)
- Avoir le droit de dire non (avec le corps)`,
      },
      {
        titre: "L'improvisation et la composition — créer en mouvement",
        contenuMarkdown: `La frontière entre improvisation et composition est l'un des terrains les plus fertiles de la danse contemporaine.

**Improvisation ≠ au hasard**
Une bonne improvisation en danse est informée par :
- La connaissance du corps et des qualités de mouvement
- La conscience de l'espace (où je suis, comment je me déplace)
- L'écoute musicale ou sonore
- Le rapport aux autres danseurs
- Une intention ou un score

**Le score comme outil de liberté organisée :**
Le score (partition d'improvisation) donne un cadre sans fixer le contenu. Exemples simples :
- 'Je me déplace toujours lentement'
- 'Quand je touche un mur, je change de direction'
- 'Je commence chaque phrase par une immobilité'

**La phrase de mouvement comme matériau :**
Même en improvisation, on peut utiliser des **phrases mémorisées** comme matériau — les modifier, les interrompre, les combiner avec du mouvement libre.

**Les pratiques somatiques comme préparation :**
Avant d'improviser, des pratiques comme le Feldenkrais ou le BMC permettent de se 'recentrer' dans son corps — de sortir des habitudes automatiques pour être vraiment disponible à l'instant présent.

> L'improvisation n'est pas l'absence de technique — c'est la technique à son plus haut degré d'intériorisation.`,
      },
    ],
  },
]
