import type { Cours } from '../schema'

export const coursUnite4: Cours[] = [
  {
    id: 'intro-classique',
    titre: 'La classe de danse classique — structure et vocabulaire',
    resume: "Comprendre la logique d'un cours de danse classique de A à Z : barre, milieu, adage, allegro, pirouettes — pourquoi cet ordre, comment chaque exercice prépare le suivant. J'ai des pages et des pages là-dessus dans mon carnet.",
    disciplines: ['classique'],
    termesAbordes: [
      'barre-classique', 'milieu-classique', 'plie', 'tendu', 'degage',
      'rond-de-jambe', 'developpe', 'grand-battement', 'arabesque', 'attitude',
      'pirouette', 'allegro', 'jete', 'assemble', 'pas-de-bourree',
    ],
    sections: [
      {
        titre: 'La logique du cours classique',
        contenuMarkdown: `Ce que j'ai trouvé fascinant en découvrant le cours classique, c'est que rien n'est aléatoire. Chaque exercice prépare le suivant — c'est une architecture pensée sur des siècles de pratique pédagogique.

**La structure universelle :**
1. **Échauffement** (5–10 min) : mobilisation générale, souvent avant la barre
2. **La barre** (30–45 min) : exercices tenus à la barre, dans un ordre logique
3. **Le milieu** (20–30 min) : reprise des exercices sans appui + adage
4. **L'allegro** (15–20 min) : petit allegro puis grand allegro
5. **Pointes** (10–15 min, si applicable) : travail technique en chaussons de pointe
6. **Révérence** (2–3 min) : salut final, clôture du cours

**Pourquoi cet ordre ?**
Chaque section prépare la suivante :
- La barre chauffe et aligne le corps
- Le milieu transfère les acquis de la barre sans appui
- L'adage développe le contrôle et l'amplitude
- Le petit allegro réveille la vivacité
- Le grand allegro libère la puissance

> La barre n'est pas juste de l'échauffement. C'est là que se construisent les fondations de toute la technique — et les professionnels y passent toute leur vie. Ça m'a mis du temps à comprendre ça.`,
      },
      {
        titre: 'La barre — exercices fondamentaux',
        contenuMarkdown: `Si tu retiens une chose sur la barre, c'est celle-ci : l'ordre des exercices n'est pas arbitraire. Chaque exercice prépare le suivant dans une logique irréprochable.

**La barre suit toujours le même ordre :**

| Ordre | Exercice | Tempo | Travail principal |
|-------|----------|-------|------------------|
| 1 | Pliés (demi et grands) | Lent | Échauffement, alignement |
| 2 | Battements tendus | Modéré | Articulation du pied |
| 3 | Battements dégagés | Rapide | Vitesse, articulation |
| 4 | Ronds de jambe par terre | Lent–Modéré | Rotation de hanche |
| 5 | Battements fondus | Modéré | Coordination, fluidité |
| 6 | Battements frappés | Vif | Vivacité, impact |
| 7 | Ronds de jambe en l'air | Modéré | Mobilité coxo-fémorale |
| 8 | Développés / Adage | Très lent | Amplitude, contrôle |
| 9 | Grands battements | Rapide | Puissance, amplitude max |

**Ta position à la barre :**
- Main intérieure posée légèrement (jamais agrippée — la barre est ton appui, pas ta béquille)
- Corps perpendiculaire ou légèrement de biais selon l'exercice
- Bras extérieur dans la position appropriée (2ème, 5ème...)
- Poids bien centré sur les deux pieds

**En retournant :**
La séquence se répète de l'autre côté. Ton côté faible mérite autant d'attention que ton côté fort — j'insiste là-dessus.`,
      },
      {
        titre: 'Les cinq positions et le turn-out',
        contenuMarkdown: `Le turn-out est le fondement de toute la technique classique — et aussi l'une des choses les plus mal comprises que j'aie rencontrées dans la danse.

**Ce qu'il permet :**
- L'ouverture des jambes dans les 5 positions
- Le travail à la seconde (2ème position)
- La stabilité dans les équilibres
- L'esthétique de la ligne classique

**Les 5 positions des pieds :**
La 1ère et la 2ème sont les plus utilisées pour commencer. La 5ème est la position "naturelle" du mouvement avancé — et elle demande des années de travail pour être vraiment propre.

**⚠️ Point crucial que je ne peux pas assez répéter :** Le turn-out se fait depuis la hanche, jamais depuis le genou ou le pied. Forcer le turn-out depuis les extrémités peut causer :
- Syndrome fémoro-patellaire (genou)
- Tendinopathie de la cheville
- Douleurs lombaires (compensation du bassin)

**L'entraînement du turn-out :**
- Exercices de renforcement des rotateurs externes (pelvi-trochantériens)
- Étirements des fléchisseurs de hanche
- Conscience proprioceptive en position neutre avant d'exiger l'ouverture

> Le turn-out parfait vient du travail régulier, pas de la force brute. Prends les années qu'il faut — ton corps te remerciera.`,
      },
      {
        titre: "L'adage — lenteur, amplitude et expression",
        contenuMarkdown: `L'adage est ma section préférée du cours classique. C'est là que la technique devient quelque chose de plus — de la musique incarnée.

**Les éléments clés de l'adage :**

**1. Les développés**
La jambe s'ouvre lentement depuis le retiré jusqu'à 90° ou plus. Devant, côté, derrière — chaque direction développe une zone musculaire différente.

**2. L'arabesque**
La position la plus longue du répertoire classique. La ligne va de la pointe des doigts à la pointe du pied arrière — tout le corps contribue à allonger cette diagonale. Et cette ligne vient du dos, pas de la jambe.

**3. L'attitude**
Jambe arrière fléchie, genou à hauteur de hanche. Plus sculpturale que l'arabesque, plus expressive. Inspirée de la statue de Mercure de Giambologna — un détail que j'adore.

**4. Les équilibres**
Tenir une position sur demi-pointe ou pointe. La durée d'un équilibre dépend :
- Du gainage du centre (transverse, plancher pelvien)
- De la qualité de la demi-pointe
- De l'alignement de l'axe
- Et — je ne te cache pas — d'un peu de lâcher-prise mental

**5. Les promenades (en pas de deux)**
Tour lent autour d'un axe, tenu par le partenaire — le partenaire fait pivoter en arabesque ou attitude.

> L'adage n'est pas "lent et ennuyeux". C'est l'espace de la musicalité — là où chaque note peut se voir dans le corps. C'est là que le classique devient de l'art.`,
      },
      {
        titre: "L'allegro — de la légèreté à la puissance",
        contenuMarkdown: `L'allegro divise le cours en deux temps forts — et j'avoue que le grand allegro me donne encore des étoiles dans les yeux quand il est bien exécuté.

**Le petit allegro**
Petits sauts vifs, souvent en séquences de 8 à 16 temps :
- **Changements de pied** : saut simple, les pieds alternent en 5ème
- **Échappés** : ouverture vers la 2ème et retour en 5ème
- **Assemblés** : jambe lancée, les deux jambes s'assemblent en l'air
- **Jetés** : transfert de poids d'une jambe à l'autre
- **Pas de bourrée** : liaison de trois petits pas sur demi-pointe

**La règle d'or du petit allegro :**
Atterrir toujours en demi-plié, talon–voûte–métatarses–orteils. Un atterrissage silencieux = bonne technique. Si tu entends "clac" à chaque atterrissage, ton plié ne fait pas son travail.

**Le grand allegro**
Combinaisons longues avec déplacement, souvent en diagonale :
- Glissade + grand jeté (le "manège de course")
- Chaînés en diagonal
- Pas de chat enchaîné
- Grand allegro conclusif avec tours et grands sauts

**La préparation au grand allegro :**
L'élan est fondamental. Des pas de couru, des glissades ou des chassés te donnent la vitesse avant les grands sauts. Ne jamais sauter "à sec" — prépare ton élan.`,
      },
      {
        titre: 'Les tours — pirouette, fouetté, chaînés',
        contenuMarkdown: `Les tours sont souvent la partie la plus intimidante de la technique classique — et la plus satisfaisante à maîtriser. Dans mon carnet, j'ai des pages entières de notes dessus.

**La pyramide de l'apprentissage des tours :**

1. **Équilibre en retiré** (avant tout) : tenir en demi-pointe en retiré, 5+ secondes
2. **Demi-tour** : pirouette d'un demi-tour, trouver l'axe
3. **Tour complet** : pirouette simple, maîtriser le spotting
4. **Tours multiples** : 2, 3, puis plus — qualité avant quantité
5. **Tours en enchaînement** : pirouettes d'affilée, chaînés, fouettés

**Le spotting (fouetté de tête) :**
La technique fondamentale pour ne pas perdre l'orientation :
1. Fixer un point devant toi (à hauteur des yeux)
2. Laisser le corps tourner mais garder la tête fixée sur ce point
3. Quand la tête ne peut plus rester sans se retourner, la tourner 360° rapidement
4. Retrouver le point immédiatement

**L'axe de rotation :**
Le corps tourne autour d'un axe imaginaire vertical, de la couronne de la tête jusqu'au milieu du pied d'appui. Tout écart de cet axe (penchement, bassin décalé) fait "partir" la pirouette.

**La préparation :**
- En 4ème position (pied devant et pied derrière)
- Bras ouverts en 2ème (préparation)
- Demi-plié sur les deux jambes
- L'élan vient du plié, pas d'un effort brut

> Un bon tour ne se force pas — il se laisse aller. La tension est l'ennemi de la rotation. C'est une des choses les plus contre-intuitives du classique.`,
      },
      {
        titre: 'Danse classique — questions de santé et de longévité',
        contenuMarkdown: `Je ne peux pas te parler du classique sans aborder la santé — parce que cette discipline est exigeante, et que comprendre les risques, c'est pouvoir pratiquer intelligemment sur le long terme.

**Les blessures les plus fréquentes :**

| Zone | Blessure | Cause principale |
|------|---------|-----------------|
| Cheville | Entorse, tendinopathie | Demi-pointe forcée, réception de saut |
| Pied | Stress fracture, hallux valgus | Chaussons de pointe mal adaptés |
| Genou | Syndrome fémoro-patellaire | Turn-out forcé du genou |
| Hanche | Impingement, bursites | Développés en compensation |
| Dos | Lombalgies | Cambrure excessive en arabesque |

**Principes de prévention :**
1. **Progressivité** : ne jamais sauter les étapes de l'apprentissage
2. **Renforcement** : gainage, rotateurs de hanche, muscles intrinsèques du pied
3. **Récupération** : respect des jours de repos, sommeil, hydratation
4. **Écoute du corps** : distinguer la douleur de l'effort (normal) et la douleur de blessure (alarme)
5. **Chaussures adaptées** : chaussons de pointe choisis avec un professionnel

**La question des pointes :**
L'âge minimum recommandé est 10–12 ans, selon la maturité osseuse. Avant cet âge, les os des pieds ne sont pas soudés et les déformations peuvent être permanentes. Un bilan podologique est recommandé avant toute mise en pointe.

> La longévité en danse classique se construit dans la sagesse, pas dans la souffrance. Les danseurs qui durent sont ceux qui ont appris à prendre soin d'eux. C'est une leçon que j'aurais voulu apprendre plus tôt.`,
      },
    ],
  },
]
