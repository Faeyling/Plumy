import type { Cours } from '../schema'

export const coursUnite4: Cours[] = [
  {
    id: 'intro-contemporain',
    titre: 'La danse contemporaine — corps, espace et liberté',
    resume: "Comprendre la danse contemporaine de l'intérieur : rapport à la gravité, techniques de release, travail au sol, contact improvisation, pratiques somatiques et composition. Tout ce qui différencie un corps contemporain d'un corps classique — et j'ai beaucoup à te dire là-dessus. Dans mes carnets, j'ai des pages entières sur chacun de ces territoires.",
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
        contenuMarkdown: `Ce que j'adore dans la danse contemporaine, c'est qu'elle résiste à la définition — et c'est volontaire. Elle s'est construite précisément contre les cases fermées. Chaque fois que tu penses l'avoir cernée, elle glisse ailleurs. C'est toute sa beauté.

**Ce qu'elle n'est pas :**
- Un style esthétique unique (il n'existe pas de "technique contemporaine" universelle comme la technique classique)
- Synonyme de "danse moderne" (deux périodes et approches distinctes — je t'explique ça en Unité 4)
- De la danse classique sans les pointes

**Ce qu'elle est :**
- Un ensemble de pratiques artistiques qui questionnent en permanence ce qu'est la danse
- Un champ ouvert, pluriel, en constant renouvellement
- Un rapport différent au corps, à l'espace, au temps et au public

**Repères historiques que j'ai gribouillés dans mon carnet :**
- **1960s** : Judson Dance Theater (New York) — rupture radicale avec la technique moderne
- **1970s** : Contact improvisation, danse postmoderne
- **1980s** : Tanztheater (Bausch), explosion de la danse-théâtre
- **1990–2000s** : Dialogue avec les arts visuels, performance, numérique
- **Aujourd'hui** : Corps pluriels, identités, technologies, site-specific

**La danse contemporaine se reconnaît à :**
- La diversité des corps qui la pratiquent
- La pluralité des techniques utilisées (souvent hybrides)
- La dimension de questionnement (artistique, social, politique)
- L'importance accordée au processus autant qu'au résultat

> Ce qui m'a touché dans le contemporain, c'est ça : on te demande de penser, pas juste d'exécuter. Ça change tout — promis.`,
      },
      {
        titre: 'Le corps contemporain — un rapport différent à la gravité',
        contenuMarkdown: `La différence fondamentale entre le corps classique et le corps contemporain tient à leur rapport à la **gravité** — et quand j'ai compris ça, tout le contemporain s'est mis à faire sens. Tu vas voir, c'est une de ces clés qui déverrouillent des pans entiers.

**Corps classique :**
- Lutte contre la gravité (élévation, légèreté, pointes)
- Axe vertical maintenu en permanence
- Le sol est un point de départ / arrivée
- Esthétique de la ligne tendue et contrôlée

**Corps contemporain :**
- Dialogue avec la gravité (abandon, poids, ancrage)
- L'axe vertical est une option parmi d'autres
- Le sol est un espace de danse à part entière
- Esthétique de la fluidité, de la rupture, de la diversité

**Les trois axes que j'utilise pour m'orienter — je les ai redessinés une dizaine de fois dans mes carnets avant de les avoir vraiment en tête :**

**1. Axe vertical** (partagé avec le classique)
Tu es debout, l'axe passe du sommet du crâne au milieu des pieds. Mais en contemporain, cet axe peut s'incliner, se courber, se tordre — et c'est là que ça devient intéressant.

**2. Axe horizontal** (sol)
Le corps allongé, roulé, rampant — les niveaux proches du sol. Un espace que le classique n'habite presque jamais.

**3. Axe diagonal**
Le corps penché, en déséquilibre volontaire — entre verticale et horizontale. C'est là que vivent les chutes contrôlées.

> La richesse du corps contemporain vient de sa capacité à habiter tous ces axes, à passer de l'un à l'autre, à trouver du sens dans chacun. Ne choisis pas : explore-les tous.`,
      },
      {
        titre: 'La release technique — moins tu forces, plus tu bouges',
        contenuMarkdown: `La **release technique** est l'une des approches les plus répandues en danse contemporaine — et aussi l'une des moins bien comprises. Je vais mettre les choses au clair, parce que j'ai longtemps eu des idées floues là-dessus, et je ne veux pas que tu perdes le temps que j'ai perdu.

**Ce que ce n'est pas :**
- De la relaxation (tu restes pleinement actif·ve)
- De l'absence de technique (c'est une technique très précise)
- Un style esthétique

**Ce que c'est :**
- Une philosophie du mouvement basée sur l'**économie d'effort**
- Une méthode d'identification et de libération des **tensions parasites**
- Un outil pour **maximiser la fluidité** et l'**amplitude** sans forcer

**Le scan corporel — ma pratique préférée pour démarrer :**
1. Allonge-toi au sol (ou assieds-toi)
2. Porte ton attention successivement sur chaque partie du corps
3. Observe sans juger : est-ce que tu tiens quelque chose ? Est-ce que ça peut se relâcher ?
4. Libère les zones de tension non nécessaires — juste elles

**Les tensions que je retrouve chez presque tout le monde — et que j'ai moi-même dû apprendre à lâcher :**
- Mâchoire serrée (classique)
- Épaules soulevées (encore plus classique)
- Ventre contracté en permanence
- Orteils crispés dans les chaussures

**L'anatomie comme outil :**
La release technique s'appuie sur une connaissance anatomique — comprendre comment les os s'articulent te permet de trouver des positions naturellement stables, sans effort musculaire excessif.

> Moins tu forces, plus tu bouges. C'est contre-intuitif, mais c'est vrai. Fais-moi confiance là-dessus.`,
      },
      {
        titre: 'La contraction-release — le souffle qui danse',
        contenuMarkdown: `**Martha Graham** (1894–1991) — si tu ne connais qu'un nom dans l'histoire de la danse moderne, que ce soit le sien. Elle a créé une des techniques les plus complètes et les plus codifiées qui soit. Son principe central : **la contraction et le release**.

J'ai une page entière dans mon carnet rien que pour ça, parce que ce principe va bien au-delà de la technique Graham — il est partout, dans presque tout ce qu'on danse.

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
- Contracte depuis le bas-ventre, laisse la colonne s'arrondir
- Reviens en release (colonne redressée)
- Répète sur plusieurs respirations — laisse la respiration guider, pas l'inverse

**Contraction latérale :**
- Debout sur une jambe
- Contraction + inclinaison latérale
- Release et retour

**Le spiral Graham :**
- En contraction, la colonne se tord vers un côté
- Le dénouement de la spirale relance le mouvement — tu ne l'arrêtes pas, tu le diriges

**Ce qui m'a le plus frappé dans la technique Graham :**
La respiration *génère* le mouvement — elle n'est pas superposée à un mouvement déjà décidé. C'est une révolution pédagogique. Avant Graham, on respirait malgré la danse. Avec Graham, on danse parce qu'on respire.`,
      },
      {
        titre: 'Le travail au sol — floorwork, chutes et roulades',
        contenuMarkdown: `Le travail au sol est l'une des compétences les plus distinctives de la danse contemporaine — et franchement, une des plus libératrices. Quand tu apprivoises le sol, tu gagnes un espace entier que beaucoup de danseurs ignorent. Moi, ça m'a pris du temps, et puis un jour j'ai arrêté de le craindre. Tu vas voir, ça vient.

Voici la progression que j'ai dans mes carnets, et qui fonctionne vraiment bien :

**Étape 1 — Apprivoiser le sol**
Explorations libres : roule, retourne-toi, trouve les positions confortables. Pas d'objectif de forme — juste explorer. Le sol ne mord pas.

**Étape 2 — Les surfaces sûres**
Identifie les surfaces corporelles sur lesquelles tu peux rouler sans te faire mal :
- ✓ Dos plat (abdominaux engagés pour protéger les vertèbres)
- ✓ Côté de la cuisse, côté du torse
- ✓ Ventre (sur les pectoraux et les abdominaux)
- ✗ Genoux, coudes, os saillants (sans préparation spécifique)

**Étape 3 — Les transitions debout/sol**
La difficulté n'est pas le sol — c'est la transition. Apprends à :
- Descendre sans impact (plie les articulations dans l'ordre, de la plus haute à la plus basse)
- Monter sans effort brut (utilise l'élan de la dynamique au sol)

**Étape 4 — Les chutes dirigées**
Back fall, side fall — toujours avec une direction, toujours avec un plan de sortie. Une chute incontrôlée n'est pas de la danse, c'est un accident.

**Étape 5 — L'enchaînement floorwork**
Combine roulades, transitions, chutes en des phrases fluides. C'est là que le sol devient vraiment ton partenaire de danse.

> Le sol est ton allié, pas ton ennemi. Plus tu lui fais confiance, plus il t'aide. Et je dis "confiance" au sens littéral — ça commence dans ta tête.`,
      },
      {
        titre: 'Le contact improvisation — écouter avec le corps',
        contenuMarkdown: `Le **contact improvisation** — Steve Paxton, 1972 — est une des pratiques qui m'a le plus ouvert les yeux sur ce que peut être la danse. Elle a révolutionné le contemporain, et elle se pratique encore intensément aujourd'hui dans des jams du monde entier. J'en ai fait, et je peux te dire que rien ne prépare vraiment à la première fois — mais que tu vas adorer.

**Les principes fondamentaux :**

1. **Le point de contact** : une zone de toucher entre deux corps — mobile, changeante, jamais fixée
2. **Le partage de poids** : donner réellement ton poids à l'autre, et recevoir le sien — pas "faire semblant"
3. **L'écoute** : à travers le contact, communiquer intention, direction, résistance — sans parler
4. **La réciprocité** : pas de rôle fixe porteur/porté — tout change en permanence

**Pourquoi c'est révolutionnaire :**
- Il supprime la hiérarchie (l'idée que "l'homme porte, la femme est portée")
- Il fonctionne avec des corps de toutes formes et toutes forces
- Il est improvisé — pas de chorégraphie mémorisée
- Il développe une intelligence corporelle qu'on ne trouve nulle part ailleurs

**Les jams de contact improvisation :**
Des sessions ouvertes, souvent hebdomadaires, dans la plupart des grandes villes. Accessibles aux débutants avec un minimum d'introduction — cherche près de chez toi, je parie qu'il y en a une.

**Commencer en douceur :**
1. Tiens-toi dos à dos avec quelqu'un
2. Sens son poids, sa chaleur
3. Laisse le contact voyager légèrement
4. Introduis progressivement le partage de poids

**La sécurité en contact impro :**
- Commence par peu de poids partagé
- Communique (verbalement si besoin — aucune honte)
- Tu as le droit de dire non avec le corps, à tout moment

> Ce que j'ai appris avec le contact impro, c'est que l'écoute est une compétence physique, pas juste mentale. Ton corps peut écouter. Donne-lui la chance de le faire.`,
      },
      {
        titre: "L'improvisation et la composition — créer en mouvement",
        contenuMarkdown: `La frontière entre improvisation et composition est l'un des terrains les plus fertiles de la danse contemporaine — et aussi l'un des plus mal compris. Laisse-moi clarifier ça, parce que j'ai entendu trop de gens se bloquer sur cette fausse opposition.

**Improvisation ≠ faire n'importe quoi**
Une bonne improvisation en danse est informée par :
- La connaissance du corps et des qualités de mouvement
- La conscience de l'espace (où tu es, comment tu te déplaces)
- L'écoute musicale ou sonore
- Le rapport aux autres danseurs
- Une intention ou un score

**Le score comme outil de liberté organisée :**
Le score (partition d'improvisation) donne un cadre sans fixer le contenu. Voici des exemples simples que j'utilise pour démarrer :
- "Je me déplace toujours lentement"
- "Quand je touche un mur, je change de direction"
- "Je commence chaque phrase par une immobilité"

Ces contraintes semblent limitantes — elles sont en réalité libératrices. Moins tu as de choix, plus ton mouvement est précis. Je l'ai vérifié des dizaines de fois.

**La phrase de mouvement comme matériau :**
Même en improvisation, tu peux utiliser des **phrases mémorisées** comme matériau — les modifier, les interrompre, les combiner avec du mouvement libre. C'est de la composition en temps réel.

**Les pratiques somatiques comme préparation :**
Avant d'improviser, des pratiques comme le Feldenkrais ou le BMC te permettent de te "recentrer" dans ton corps — de sortir des habitudes automatiques pour être vraiment disponible à l'instant présent.

> L'improvisation n'est pas l'absence de technique — c'est la technique à son plus haut degré d'intériorisation. Tu ne l'appliques plus, tu l'habites. Et ça, ça prend du temps, et c'est magnifique.`,
      },
    ],
  },
]
