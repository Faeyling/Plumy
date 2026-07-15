import type { Cours } from '../schema'

export const coursUnite8: Cours[] = [
  {
    id: 'intro-heels',
    titre: 'La danse heels — technique, présence et héritage',
    resume: "Tout ce qu'il faut savoir pour danser en talons hauts : la biomécanique et la posture adaptée, les marches fondamentales (walk, strut, cat walk), le body roll et le hair toss, le floorwork en sécurité, la notion de frame et de sass, et la dette artistique envers la culture vogue et ballroom. Je suis tombé amoureux de cette discipline, et dans mes carnets, elle a sa propre section — avec ses propres taches d'encre.",
    disciplines: ['heels'],
    termesAbordes: [
      'posture-heels', 'walk-heels', 'strut', 'body-roll-heels', 'hair-toss',
      'floorwork-heels', 'frame-heels', 'sass', 'cat-walk-heels', 'vogue-ballroom-heels', 'heel-turn',
    ],
    sections: [
      {
        titre: "Qu'est-ce que la danse heels ?",
        contenuMarkdown: `La danse heels est une discipline à part entière — pas du jazz en talons, pas du cabaret avec des escarpins. Ça me tient à cœur de commencer par là, parce que la confusion est fréquente et qu'elle fait un vrai tort à cette discipline. J'ai consacré une page entière à ce sujet dans mon carnet — alors installe-toi.

**Ce qu'est la danse heels :**
- Un langage chorégraphique né à l'intersection de plusieurs traditions culturelles
- Une technique qui utilise le talon haut comme outil expressif (pas comme contrainte)
- Une forme d'exploration de la présence, de l'attitude et du sass
- Une discipline inclusive — pour tous les genres, tous les corps

**Ses origines culturelles — et il faut les connaître :**
La danse heels ne sort pas de nulle part. Elle porte plusieurs héritages que j'ai cartographiés avec soin dans mes carnets.

**La culture vogue et ballroom (Harlem, 1980s) :**
Les compétitions de la scène ballroom incluaient des catégories de défilé en talons, de runway, de femme queen — codifiant la marche en talons comme performance artistique. Ce sont les communautés LGBTQ+ afro-américaines et latinx qui ont créé ce vocabulaire.

**La culture drag :**
Les drag queens ont développé des techniques de walk, de pose et d'attitude en talons qui ont profondément nourri la danse heels.

**La showgirl dance et le cabaret :**
C'est le premier style de danse technique à se pratiquer en talons hauts — les danseuses de revue, les chorus girls, les stars de Broadway. La showgirl dance est littéralement l'ancêtre direct du heels dance. Ce que j'aime dans cette filiation, c'est qu'elle est directe, traçable, et souvent oubliée. Je la mets en premier dans mes carnets pour ça.

**La danse orientale et les isolations :**
Autre filiation souvent méconnue : la danse heels emprunte à la danse orientale ses isolations de torse — la capacité à mobiliser la cage thoracique indépendamment du bassin, et réciproquement. C'est ce qui donne à certaines danseuses heels cette fluidité de haut de corps si caractéristique.

**Le hip-hop et le R&B des années 1990–2000 :**
Les clips vidéo de Janet Jackson, Beyoncé, Ciara — chorégraphiés en talons avec une qualité jazz/urban — ont popularisé le heels dance contemporain.

**L'ère des clips (années 1990–2000) :**
Beyoncé, Janet Jackson, Madonna, Britney Spears — des danseuses en talons, ultra puissantes, ultra présentes. Les chorégraphies deviennent iconiques : marches lentes, poses fortes, regards caméra. Les studios de danse commencent à créer des cours "en talons" inspirés des clips.

**La naissance de la heels dance structurée :**
C'est dans les studios de Los Angeles, à partir des années 2000-2010, que la heels dance prend sa forme actuelle. Des chorégraphes comme **Yanis Marshall**, **JoJo Gomez** et **Brian Friedman** posent les codes : technique structurée, bases pédagogiques claires, mélange de jazz, commercial, attitude et storytelling. La discipline voyage aujourd'hui dans le monde entier — Paris, Londres, Tokyo, Berlin — avec des compétitions (World of Dance, etc.) et un corpus pédagogique croissant.

**Une distinction essentielle :**
Danser en talons ne veut pas dire faire de la heels dance. Porter des talons pendant une chorégraphie ne suffit pas. En heels dance, *tout part du talon* — la posture, la marche, les transferts de poids, l'équilibre, l'axe du corps. Ce que j'explique à tous mes élèves dès le premier cours : ce n'est pas "je danse et j'ai des talons", c'est **"je danse parce que j'ai des talons"**.

**Heels dance vs heels cabaret :**
La heels dance regroupe plusieurs styles. Le heels cabaret met l'accent sur le théâtre, l'élégance, le jeu scénique — mouvements plus lents, plus posés, plus narratifs. La heels dance "classique" est plus proche des clips, du jazz ou du commercial. Beaucoup de studios mélangent les deux, et c'est tout à fait cohérent.

Une formule que j'adore et qui résume tout : la heels dance est "résolument la forme la plus moderne des danses Cabaret." Elle porte des siècles d'héritage dans chaque pas — et elle les renouvelle entièrement.

> Porter des talons, c'est choisir une contrainte et en faire une qualité. La danse heels transforme la limitation en langage. Moi, je trouve ça magnifique — et j'espère que toi aussi tu vas l'apprécier.`,
        pointsCles: [
          "La heels dance n'est pas 'du jazz en talons' — c'est une discipline à part entière avec son propre langage.",
          "Ses origines : vogue/ballroom (Harlem, 1980s), drag queens, showgirl dance, danse orientale, clips R&B.",
          "La showgirl dance est l'ancêtre direct de la heels dance — une filiation directe et souvent oubliée.",
          "'Je danse parce que j'ai des talons' — tout part du talon : la posture, la marche, l'équilibre.",
          "Discipline inclusive : tous les genres, tous les corps — l'expression, pas le genre.",
        ],
      },
      {
        titre: "Biomécanique et posture — danser en sécurité",
        contenuMarkdown: `Avant de danser en talons hauts, il faut comprendre ce qu'ils font au corps. Je ne veux pas te faire peur — juste te donner les outils pour danser intelligemment. Parce que j'ai vu trop de danseurs se précipiter, et c'est leur corps qui a payé le prix.

**La colonne vertébrale — ta fondation :**
La colonne vertébrale est le pivot autour duquel s'articulent tous les mouvements. Elle possède trois courbures naturelles qu'il faut maintenir, jamais exagérer ni aplatir :
- **Lordose cervicale** (nuque, concave vers l'arrière)
- **Cyphose thoracique** (dos, convexe vers l'arrière)
- **Lordose lombaire** (bas du dos, concave vers l'arrière — c'est celle que le talon haut met sous pression)

Les **muscles posturaux profonds** — multifides et transverse de l'abdomen — sont ceux qui maintiennent cet alignement. Souvent oubliés dans les entraînements, ils sont au cœur de la stabilité du core. Un gainage abdominal léger mais continu, c'est eux en action. La **proprioception** — la conscience du corps dans l'espace — est ce qui te permet d'ajuster ta posture en temps réel sans t'arrêter de danser. Ça se développe, et la danse heels est une des meilleures écoles pour ça.

**Ce que le talon haut modifie :**

| Zone | Effet du talon |
|---|---|
| Pied | Avant-pied surchargé, talon allégé |
| Cheville | Mobilité réduite (angle bloqué) |
| Genoux | Tendance à l'hyperextension |
| Bassin | Bascule en antéversion (creux lombaire) |
| Centre de gravité | Déplacé vers l'avant |

**La posture de référence — ce que j'appelle la "posture de commandement" :**
- Pieds : talons au sol, poids réparti sur l'avant-pied
- Genoux : légèrement souples (jamais verrouillés)
- Bassin : gainage abdominal léger pour contrer l'antéversion
- Cage thoracique : haute, ouverte
- Épaules : basses et ouvertes
- Tête : portée haute, regard vers l'horizon

**Choisir ses talons selon son niveau :**
- **Débutant :** 5–7 cm, talon large, plateforme
- **Intermédiaire :** 8–10 cm, talon stiletto ou chunky
- **Avancé :** 12–20 cm, plateforme (exotic), stiletto

**Conditioning hors cours — je ne saurais trop insister là-dessus :**
Renforcer les chevilles (exercices de résistance, équilibre unipodal) est aussi important que les cours eux-mêmes. Les talons ne pardonnent pas la faiblesse des chevilles. Ton carnet de santé, c'est aussi ça.

**La progression de sécurité :**
1. Maîtriser la marche et la posture avant d'ajouter des mouvements
2. Maîtriser les mouvements debout avant le floorwork
3. Augmenter la hauteur du talon progressivement

> Il n'y a pas de raccourci : le corps a besoin de temps pour s'adapter aux talons. Et ce temps est bien investi — tu me remercieras plus tard, promis.`,
        pointsCles: [
          "Le talon haut modifie tout : avant-pied surchargé, bassin en antéversion, centre de gravité vers l'avant.",
          "La 'posture de commandement' : genoux souples, gainage léger, cage thoracique haute, regard à l'horizon.",
          "Progression : 5–7 cm (débutant), 8–10 cm (intermédiaire), 12–20 cm (avancé).",
          "Renforcer les chevilles hors cours est aussi important que les cours eux-mêmes.",
          "Toujours maîtriser la posture et la marche avant d'ajouter des mouvements.",
        ],
      },
      {
        titre: "Walks fondamentales — marcher avant de danser",
        contenuMarkdown: `La marche est la compétence première du heels. Tout le reste en découle — et ça m'a pris un moment de vraiment l'accepter, parce qu'on a envie d'aller directement aux mouvements spectaculaires. Je t'invite à résister à cette tentation. La walk, c'est la base, et quand elle est impeccable, tout le reste devient possible.

**Les qualités de walk à développer :**

**1. Le walk de base :**
Talon qui se pose, poids qui se transfère vers l'avant, autre pied. Simple et contrôlé. C'est la fondation de tout.

**2. Le walk pointe-talon :**
L'avant du pied pose en premier — plus silencieux, plus élégant. Caractéristique du walk editorial et sexy.

**3. Le cross-walk :**
Les pieds posent légèrement sur une ligne (croisement léger) — crée le balancement naturel des hanches.

**4. Le strut :**
Walk avec attitude exacerbée : chest out, chin up, regard de propriétaire. Pour les moments d'autorité totale.

**5. Le catwalk :**
Walk sur une ligne imaginaire, précis, inspiré du défilé de mode. Souvent utilisé en entrée et en sortie.

**Les composantes d'un bon walk :**
- **Le regard** : toujours vers l'horizon ou vers quelqu'un — jamais vers le sol
- **Les épaules** : basses et ouvertes, une légère alternance naturelle
- **Les bras** : avec styling (jamais qui battent mécaniquement)
- **Le rythme** : en connexion avec la musique — le walk est musical, toujours

**La progression que j'utilise :**
1. Walk aller-retour sans musique (focus placement)
2. Walk sur une musique lente
3. Walk avec styling des bras
4. Walk avec intention (une émotion, un personnage)
5. Walk avec transitions (arrêt, pose, pivot)`,
        pointsCles: [
          "Le walk est la compétence première du heels — tout le reste en découle, sans exception.",
          "5 types : walk de base, pointe-talon (editorial), cross-walk (hanches), strut (autorité), catwalk (ligne).",
          "Composantes du bon walk : regard à l'horizon, épaules basses, bras avec styling, rythme musical.",
          "Progression : sans musique (placement) → musique lente → styling bras → intention → transitions.",
          "La walk impeccable libère tout le reste — investir du temps là-dessus, ça paie toujours.",
        ],
      },
      {
        titre: "Body roll, hair toss et éléments de style",
        contenuMarkdown: `Les éléments de style qui transforment un walk en véritable danse heels. C'est là que ça devient vraiment fun — et c'est la section que mes élèves attendent toujours avec le plus d'impatience. Je les comprends.

**Le body roll en heels :**
L'ondulation qui parcourt le corps verticalement — adaptée à la contrainte du talon.

**Comment l'exécuter en heels (différent du contemporain) :**
- Commence depuis les genoux (les pieds et chevilles sont contraints)
- Genoux → bassin → bas du dos → cage thoracique → épaules → tête
- Chaque segment répond au précédent avec un léger délai
- La tête *termine* le voyage — elle ne précède pas

**Le hair toss :**
Mouvement de tête vif qui projette les cheveux — et l'énergie — dans une direction.

**Types :**
- Back toss : tête vers l'arrière, cheveux vers l'avant
- Side toss : tête vers le côté
- Circle flip : la tête effectue un arc complet

**Placement musical :**
Le hair toss arrive *sur* un accent — la tête atterrit sur le beat.

**Sans longs cheveux :**
Le mouvement de tête crée l'effet même avec des cheveux courts — c'est la qualité du mouvement qui compte, pas la longueur des cheveux. Je t'assure, j'ai vu des hair tosses dévastateurs sur des crânes rasés.

**Les isolations :**
Les isolations en heels sont moins percussives qu'en jazz mais très présentes :
- Épaule : vers l'avant ou le haut sur un accent
- Cage thoracique : body roll partiel
- Bassin : mouvements de hanche en coordination avec le walk

**Le frame :**
Même dans le mouvement, le corps maintient une organisation spatiale lisible — les lignes du corps "forment" une image à chaque moment. C'est ce qui donne cette qualité de présence permanente dans la danse heels. Tu vas voir, quand tu commences à y penser, tu ne peux plus t'en passer.`,
        pointsCles: [
          "Le body roll en heels commence depuis les genoux (les chevilles sont contraintes) et monte jusqu'à la tête.",
          "Le hair toss arrive sur un accent musical — la tête atterrit sur le beat, même sans cheveux longs.",
          "Isolations en heels : épaule, cage thoracique, bassin — moins percussives qu'en jazz, très présentes.",
          "Le frame : l'organisation spatiale permanente du corps qui crée la qualité de présence constante.",
        ],
      },
      {
        titre: "Floorwork, sass et héritage culturel",
        contenuMarkdown: `Les compétences qui élèvent la danse heels au-delà de la technique — et pourquoi l'héritage culturel n'est pas une option, c'est une responsabilité. C'est peut-être la section la plus importante de mon carnet sur cette discipline.

**Le floorwork en heels :**
Travail au sol avec talons hauts — l'une des compétences les plus spectaculaires. Et l'une des plus importantes à aborder avec méthode.

**Progression de sécurité que je recommande :**
1. Apprendre le floorwork pieds nus
2. Talons bas (5 cm)
3. Talons progressivement plus hauts
4. Toujours : surface non-glissante, genouillères en apprentissage

**Descente :**
Depuis un lunge → genou au sol → côté de la cuisse → hanche. Jamais d'effondrement direct sur les genoux. Jamais.

**Remontée :**
Utiliser l'élan et l'avant-pied (jamais le talon). Lunge avant pour faciliter.

---

**Le sass :**
Qualité d'expression qui dépasse la technique — la confiance, l'impudence, la présence qui dit "je suis là".

Le sass ne s'enseigne pas directement — mais il se cultive, et j'ai mes techniques que je partage avec toi :
- Danser seul(e) sans regard à satisfaire
- Exagérer l'attitude jusqu'au ridicule, puis calibrer
- Trouver l'émotion juste et la laisser traverser le mouvement

---

**L'héritage à honorer — et c'est important, je t'en supplie de ne pas passer ça en diagonale :**

La danse heels porte l'héritage du **vogue et de la culture ballroom** — né à Harlem dans les années 1950–1980 par et pour la communauté LGBTQ+ afro-américaine et latinx.

Les catégories ballroom comme *Runway*, *Face*, *Femme Queen Realness* ont codifié un art du déplacement en talons qui est au cœur de ce qu'on pratique aujourd'hui.

Honorer cet héritage, c'est :
- Connaître son histoire
- Reconnaître les artistes ballroom et voguing
- Ne pas pratiquer sans comprendre d'où ça vient

> Porte tes talons avec intention. Chaque pas a une histoire. Et cette histoire mérite d'être connue — moi, je l'ai écrite dans mon carnet pour qu'elle ne soit jamais oubliée.`,
        pointsCles: [
          "Floorwork : pieds nus d'abord, puis talons bas — jamais d'effondrement direct sur les genoux.",
          "Descente : lunge → genou au sol → cuisse → hanche. Remontée par l'avant-pied.",
          "Le sass se cultive : danser sans regard à satisfaire, exagérer jusqu'au ridicule puis calibrer.",
          "La heels dance porte l'héritage du vogue et de la culture ballroom, née à Harlem par les communautés LGBTQ+.",
          "Honorer cet héritage : connaître son histoire et reconnaître les artistes ballroom et voguing.",
        ],
      },
    ],
  },
]
