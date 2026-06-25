import type { Cours } from '../schema'

export const coursUnite8: Cours[] = [
  {
    id: 'intro-pole-dance',
    titre: 'La pole dance — technique, styles et progression',
    resume: "Du grip et des prises aux figures statiques, spins et inversions : comprendre la technique fondamentale du pole, les quatre styles (pole sport, pole art, exotic, pole theatre), le conditioning indispensable à la sécurité, et le floorwork comme discipline à part entière. Il y a plus de technique là-dedans qu'on ne le pense.",
    disciplines: ['pole-dance'],
    termesAbordes: [
      'grip-pole', 'prise-basique', 'montee-pole', 'spin-pole', 'figure-statique',
      'inversion-pole', 'ayesha', 'floorwork-pole', 'conditioning-pole',
      'pole-sport', 'pole-art', 'exotic-pole',
    ],
    sections: [
      {
        titre: "La pole dance — une discipline plurielle",
        contenuMarkdown: `La pole dance est plusieurs disciplines en une — réunies par la barre, séparées par leur esthétique, leur technique et leurs valeurs. Et je tiens à commencer par ça : il n'y a pas un "vrai" pole dance.

**Les quatre grandes familles :**

| Style | Esthétique | Musique | Costumes |
|---|---|---|---|
| **Pole sport** | Technique et athlétique | Classique, neutre | Sportifs |
| **Pole art** | Artistique et expressif | Contemporaine variée | Libres |
| **Exotic** | Sensuel, floorwork | Trap, R&B | Talons hauts |
| **Pole theatre** | Narratif, costumé | Thématique | Costumes complets |

**Ce qui unit tous les styles — la colonne vertébrale :**
- La barre comme outil chorégraphique principal
- Le grip comme fondation technique
- Le conditioning comme exigence incontournable
- La progression comme seule voie sûre

**La barre statique vs rotative — une distinction importante :**
- **Statique** : la barre ne tourne pas. Les figures et spins utilisent uniquement l'élan du corps.
- **Rotative** : la barre tourne. Plus accessible pour certains spins en débutant, différente techniquement.

**Le matériel :**
- **Chrome** : standard, bon grip pour la plupart
- **Laiton** : meilleur grip naturel
- **Silicone** : pour les problèmes de grip (mais moins de technique possible)
- **Diamètre** : 40 mm (standard) ou 45 mm (plus accessible pour les grandes mains)

**La communauté pole :**
La communauté pole est connue pour être particulièrement bienveillante et inclusive — un espace où les corps de toutes formes et tous genres pratiquent ensemble. C'est quelque chose que j'ai vraiment apprécié en la découvrant.`,
      },
      {
        titre: "Grip et prises — la fondation technique",
        contenuMarkdown: `Le grip est la compétence la plus fondamentale du pole — et celle qui conditionne toute la sécurité. Je ne saurai jamais trop insister là-dessus : sans grip, il n'y a pas de pole.

**Comment fonctionne le grip :**
Le pole dance utilise la friction peau-acier. Pas de prises comme en escalade — juste la peau en contact direct avec la barre. C'est pourquoi la qualité de ta peau (et de la barre) change tout.

**Facteurs qui affectent le grip :**
- Transpiration (utiliser du magnésium si trop)
- Crème hydratante (NE PAS en mettre avant la barre — vraiment, ne fais pas ça)
- Température : barre froide = meilleur grip
- Type d'acier

**Les prises principales — j'ai un mémo dans mes carnets pour chacune :**

**Cup grip :** Pouce en bas, quatre doigts en haut. Prise de base universelle.

**Baseball grip :** La main enserre complètement la barre. Plus fort mais plus fatigant.

**Twisted grip :** Prise renversée (avancé). Controversée pour les débutants — risque épaule. Ne t'y aventure pas sans accompagnement.

**Bracket grip :** Deux mains en opposition. Stabilité maximale.

**Forearm grip :** L'avant-bras appuie sur la barre. Utilisé dans des figures spécifiques (flag).

**Les zones de grip du corps — ça m'a étonné quand j'ai découvert ça :**
- Mains (principal)
- Avant-bras
- Creux du coude
- Cuisses intérieures
- Dos des genoux (creux poplité)
- Pieds/chevilles (avancé)

**Les marques — info importante que personne ne t'a dite :**
Les premières semaines de pole laissent des marques et rougeurs — c'est normal. La peau s'habitue. Ne pas forcer à travers de la douleur *vive*, mais les marques normales ne sont pas dangereuses.`,
      },
      {
        titre: "Montées, spins et figures statiques",
        contenuMarkdown: `Les trois catégories techniques fondamentales du pole. Ce sont les premières choses que tu vas apprendre — dans cet ordre, et pas dans un autre.

---

## La montée (climb)

Technique d'ascension le long de la barre.

**Montée classique :**
1. Main dominante haute, main subdominante dessous
2. Élévation par les jambes + appui de tout le corps
3. Jambes qui enserrent la barre (cuisses + creux de genou)
4. Mains qui grimpent l'une après l'autre
5. Jambes reprennent appui plus haut
6. Répéter

**Toujours apprendre la descente avant la montée.** Je le mets en gras parce que c'est important. Vraiment.

---

## Les spins

Corps qui tourne autour de la barre avec un point de contact.

**Fireman spin :** Corps vertical, jambes parallèles à la barre. Premier spin appris — et déjà magnifique quand il est propre.

**Chair spin :** Corps en angle, jambes en forme de "chaise". Très courant en débutant.

**Attitude spin :** Une jambe tendue devant, une pliée derrière. Silhouette élégante.

**Principe physique :**
Jambes proches du corps = rotation plus rapide. Jambes éloignées = rotation plus lente. C'est de la physique pure.

---

## Les figures statiques

Corps tenu immobile dans une position précise.

**Progression de difficulté :**
- Pole hold (débutant)
- Flag (intermédiaire)
- Crucifix (intermédiaire)
- Brass monkey (avancé)
- Ayesha (très avancé — force pure, plusieurs années de conditioning)
- Iron X (expert)

**Ce qu'exige une bonne figure statique :**
- La forme est claire et précise
- Le corps est engagé (pas d'affaissement)
- Le regard est vivant
- La transition vers la figure est chorégraphiée`,
      },
      {
        titre: "Inversions — progresser en sécurité",
        contenuMarkdown: `Les inversions (corps à l'envers) sont les figures les plus impressionnantes du pole — et les plus techniques à apprendre. Je veux qu'on soit clairs sur ce que ça demande avant d'y aller.

**Pourquoi les inversions sont-elles différentes ?**
En inversion, la gravité inverse ses effets sur le corps :
- Les jambes deviennent le grip primaire (cuisses, creux de genou)
- Le gainage abdominal est non-négociable
- La déorientation (être à l'envers) s'apprivoise progressivement — et ça prend du temps

**La règle absolue — je ne la formule pas plus doucement :**
**Jamais d'inversion sans supervision pour les débutants.** Toujours avec tapis épais.

**Progression obligatoire — pas de raccourci ici :**
1. Gainage au sol (hollow body, plank, pike) — plusieurs mois
2. Inversions au sol sans barre (shoulder stand, etc.)
3. Inversions assistées par un professeur à basse hauteur
4. Inversions autonomes à basse hauteur avec tapis
5. Inversions à hauteur normale avec tapis

**Inversions de base (par ordre de difficulté) :**

**Tuck inversion (candy cane) :**
Jambes ramenées contre la barre, bassin qui monte, tête qui descend. Première inversion.

**Outside leg hang :**
Une jambe enroule la barre extérieurement. Corps à l'envers, dos vers la salle.

**Gemini :**
Inversion avec jambe tendue, corps face à la salle.

**Ayesha :**
Corps horizontal maintenu uniquement par la force des bras. Plusieurs années de conditioning nécessaires.

**Test de gainage minimal avant l'inversion :**
Tenir un hollow body (au sol) pendant 10 secondes sans que le bas du dos décolle. C'est le minimum. Vraiment le minimum.`,
      },
      {
        titre: "Conditioning, floorwork et les quatre styles",
        contenuMarkdown: `Les deux piliers qui font la durabilité de la pratique : le conditioning et la connaissance des styles. L'un sans l'autre, c'est incomplet.

**Le conditioning — pourquoi c'est non-négociable :**

Le pole dance exige une force importante. Sauter le conditioning augmente significativement le risque de blessure — notamment à l'épaule. Je t'en parle en connaissance de cause.

**Programme de base (avant chaque séance) :**
- Hollow body hold : 3 × 20 secondes
- Plank : 3 × 30 secondes
- Pike compression : 3 × 10
- Shoulder press : 3 × 8
- Grip strength : 3 × 30 secondes

**Zones prioritaires à renforcer :**
- Épaules (coiffe des rotateurs, stabilisateurs de l'omoplate)
- Gainage abdominal
- Adducteurs (grip cuisses)
- Avant-bras et mains

---

**Le floorwork :**

En pole sport : fonctionnel (transitions propres)
En pole art : chorégraphié et expressif
En exotic pole : c'est le cœur du style

**Transition barre → sol :** Toujours chorégraphiée, jamais accidentelle.
**Transition sol → barre :** Aussi expressive que le sol lui-même.

---

**Les quatre styles — comment t'orienter :**

- **Pole sport** : tu aimes la compétition, la technique pure, la progression mesurable
- **Pole art** : tu aimes la création, l'expression, le dialogue avec d'autres disciplines
- **Exotic** : tu aimes la sensualité, le floorwork, les talons hauts
- **Pole theatre** : tu aimes le théâtre, les personnages, la narration

> Il n'y a pas un "vrai" pole dance. Il y a ton pole dance. Et ça, c'est une liberté magnifique.`,
      },
    ],
  },

  {
    id: 'histoire-culturelle-pole',
    titre: "Histoire et culture du pole dance — celles qui ont tout créé",
    resume: "L'histoire plurielle et souvent effacée du pole dance : du mallakhamb indien à la barre chinoise de cirque, des bars canadiens des années 1980 à la révolution sportive et artistique contemporaine. Et les femmes — souvent anonymes — qui ont inventé les techniques que la communauté utilise aujourd'hui. C'est une des pages de mes carnets auxquelles je tiens le plus.",
    disciplines: ['pole-dance'],
    termesAbordes: ['origine-pole', 'pole-sport', 'pole-art', 'exotic-pole'],
    sections: [
      {
        titre: "Des origines multiples",
        contenuMarkdown: `Le pole dance n'a pas une seule origine — il en a plusieurs, géographiquement et culturellement distinctes. Et il faut les connaître toutes, parce qu'elles éclairent la pratique d'aujourd'hui d'une façon que rien d'autre ne peut faire.

**Le mallakhamb (Inde, XIIe siècle) :**
Le mot "malla" (athlète) + "khamb" (poteau). Discipline de lutteurs indiens — acrobaties, flexibilité et force sur un poteau de bois. Utilisé comme entraînement, pas comme performance érotique.

Aujourd'hui, le mallakhamb est un sport national en Inde, avec ses propres compétitions et fédérations. Il est totalement distinct du pole dance occidental dans son contexte — et il serait faux de les confondre.

**La barre chinoise (cirque) :**
Dans la tradition du cirque chinois et européen, les numéros sur barres verticales existent depuis des siècles — haute virtuosité, contexte familial.

**Les fêtes foraines américaines (fin XIXe siècle) :**
Les "hoochy koochy dancers" utilisaient des structures (dont des barres) dans des performances suggestives — premier lien documenté entre barre verticale et sensualité dans le contexte américain.

**La divergence des histoires — ce qui compte vraiment :**
Ces origines multiples montrent que l'acrobatie sur barre verticale a été inventée indépendamment dans plusieurs cultures — pour des raisons différentes (athlétisme, cirque, divertissement adulte).

Ce qui rend le pole dance moderne unique, c'est la synthèse de ces héritages dans une pratique accessible, codifiée et mondialisée. Mais cette synthèse n'efface pas les origines — elle les porte.`,
      },
      {
        titre: "L'Amérique du Nord — naissance du pole dance moderne",
        contenuMarkdown: `Le pole dance tel qu'on le connaît — avec barre verticale, studio, enseignement — est né en Amérique du Nord dans les années 1980. Et je veux que tu saches exactement comment, parce que cette histoire a souvent été racontée de manière incomplète ou inexacte.

**Les bars canadiens (années 1980) :**
Dans des bars pour adultes canadiens (notamment en Ontario), des danseuses commencent à utiliser une barre verticale fixée au sol et au plafond pour leurs performances. Ce contexte — souvent réduit à "strip-club" dans les récits — est plus complexe : c'est un espace de travail artistique et physique où des femmes ont développé des techniques. Ces femmes méritent d'être reconnues comme des innovatrices.

**Fawnia Mondey :**
Danseuse et instructrice canadienne, souvent citée comme pionnière de l'enseignement du pole dance hors du contexte adulte. Elle commence à enseigner dans les années 1990, puis crée des DVDs qui diffusent la pratique dans le monde entier.

**La révolution fitness (années 1990–2000) :**
Des instructrices en Australie (Bobbi Douglas), au Royaume-Uni commencent à proposer des cours de pole dans un cadre fitness — pour toutes, dans un contexte non-adulte.

Cette "respectabilisation" est un mouvement complexe : elle a rendu le pole accessible à des millions de personnes, mais elle a parfois effacé ou marginalisé les origines et les travailleuses qui avaient développé les techniques. C'est une tension que la communauté discute encore.

**Les pionnières souvent oubliées :**
De nombreuses danseuses — souvent sans nom dans l'histoire écrite — ont développé dans les années 1980–1990 des techniques de montée, de figure et de floorwork que la communauté utilise aujourd'hui. Les honorer, c'est écrire une histoire plus juste.`,
      },
      {
        titre: "La révolution sportive et artistique",
        contenuMarkdown: `Les années 2000–2020 voient le pole dance exploser en termes de reconnaissance, de diversité et de niveau technique. Quand je regarde les championnats actuels, je me demande parfois ce que les pionnières des années 1980 penseraient.

**La révolution sportive :**

**2006 :** Création de l'IPSF (International Pole Sports Federation) — premier pas vers la reconnaissance institutionnelle.

**2016 :** L'IPSF reçoit une reconnaissance de la GAISF (Global Association of International Sports Federations) — une étape vers les Jeux Olympiques.

**Les championnats du monde de pole sport** rassemblent aujourd'hui des athlètes de plus de 80 pays — des niveaux techniques qui rivalisent avec la gymnastique.

**La révolution artistique :**

Les artistes de pole art repoussent les frontières de ce que la barre peut exprimer :
- Dialogues avec la danse contemporaine
- Pole dans des compagnies de danse physique
- Installations artistiques avec barres
- Pole theatre (personnages, narration, costumes complets)

**La révolution exotic :**

Dans les années 2010, des danseuses — notamment russes — révolutionnent l'exotic pole avec un niveau de floorwork, de technicité de corps et de maîtrise de chaussures à plateau jamais vu. L'exotic devient une discipline avec ses propres compétitions mondiales.

**Le débat politique dans la communauté :**
La question "faut-il désexualiser le pole pour l'accepter socialement ?" divise la communauté depuis des années. Certains voient le mouvement sportif comme une légitimation nécessaire. D'autres critiquent l'effacement des origines et la stigmatisation de l'exotic. Je n'ai pas de réponse toute faite — mais la question mérite d'être posée.`,
      },
      {
        titre: "Celles qui ont créé — honorer les pionnières",
        contenuMarkdown: `Une histoire honnête du pole dance ne peut pas être racontée sans parler de celles qui l'ont inventé. C'est la page de mes carnets à laquelle je tiens le plus dans toute l'Unité 8.

**Le problème de l'effacement :**
Quand le pole dance a commencé à être "mainstream" (cours en studio, compétitions, YouTube), il s'est souvent présenté comme né de nulle part — ou comme une invention récente du fitness.

Cette narration efface les femmes — souvent travailleuses du sexe, souvent noires, racisées et/ou LGBTQ+, souvent marginalisées — qui ont développé pendant des décennies les techniques de grip, de figure et de floorwork que la communauté utilise aujourd'hui.

**Pourquoi c'est important :**
- Ces femmes méritent d'être reconnues dans l'histoire de leur discipline
- Comprendre les origines aide à pratiquer avec plus d'honnêteté et d'intégrité
- La dignification du pole passe par la dignification de celles qui l'ont créé

**Des femmes à connaître :**

**Fawnia Mondey :** Pionnière de l'enseignement du pole au-delà du contexte adulte.

**Bobbi Douglas (Australie) :** Une des premières à ouvrir un studio de pole dance "fitness".

**Anastasia Sokolova :** A révolutionné l'exotic pole contemporain — son influence est mondiale.

**Les travailleuses du sexe anonymes :** Des milliers de femmes qui, dans les années 1980–1990, ont développé les techniques fondamentales sans jamais être nommées dans les livres d'histoire.

**Le mouvement "Sex Worker Rights" dans la communauté pole :**
Un mouvement croissant dans la communauté pole milite pour que les travailleuses du sexe — passées et présentes — soient reconnues, respectées et soutenues dans leur travail. J'y suis sensible, et tu devrais l'être aussi.

> Chaque fois que tu montes sur une barre, tu te tiens sur les épaules de celles qui ont appris avant toi — souvent dans des conditions bien moins glamour que ton studio de pole. Connaître leur histoire, c'est pratiquer avec gratitude.`,
      },
    ],
  },
]
