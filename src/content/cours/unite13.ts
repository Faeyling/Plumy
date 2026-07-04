import type { Cours } from '../schema'

export const coursUnite13: Cours[] = [
  {
    id: 'prevention-generale',
    titre: 'Danser sans se blesser — principes fondamentaux',
    resume: "J'ai consacré une unité entière à la prévention parce que ce sujet me tient vraiment à cœur — et parce que 80 % des blessures en danse sont évitables. Ce chiffre me met en colère à chaque fois que je le relis, parce qu'il signifie qu'on peut faire beaucoup mieux. Dans mes carnets de santé, j'ai compilé l'épidémiologie, les signaux d'alarme, l'échauffement, le renforcement neuromusculaire et tout ce qu'il faut savoir pour prendre soin de ton corps comme de l'outil précieux qu'il est.",
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    termesAbordes: [
      'blessure-surmenage', 'blessure-traumatique', 'facteurs-risque',
      'echauffement-danse', 'retour-au-calme', 'renforcement-neuromusculaire',
      'gainage-fonctionnel', 'souplesse-mobilite', 'repos-recuperation',
      'hygiene-vie', 'sante-mentale-danse',
    ],
    sections: [
      {
        titre: "Épidémiologie — ce que la science dit des blessures en danse",
        contenuMarkdown: `La danse est une activité physique intense. Ses blessures sont réelles — et largement prévisibles. C'est la raison pour laquelle j'ai consacré une unité entière à ça dans mes carnets. Avant de commencer, j'ai besoin que tu lises ceci attentivement.

**⚠️ Avertissement important :** Les informations de cette unité sont éducatives. Elles ne remplacent pas un avis médical individualisé. En cas de blessure, consulte un professionnel de santé. Je ne suis pas médecin — je suis un paon passionné qui a beaucoup lu, et il y a une différence.

**Les chiffres clés :**
- 80–90% des danseurs professionnels se blessent au moins une fois par an
- 80% des blessures sont des **blessures de surmenage** (accumulation de micro-traumatismes) — pas des accidents
- Les zones les plus touchées : chevilles et pieds (40%), genoux (20%), dos et hanches (15%)
- Le risque est plus élevé en période de production intensive (avant spectacle)

**Pourquoi les danseurs se blessent — les vraies raisons :**
1. **Volume élevé** : Cours quotidiens + répétitions + spectacles = charge cumulée
2. **Culture du "push through"** : La pression à ignorer la douleur est culturellement normalisée — et c'est un problème
3. **Spécialisation précoce** : Entraînement intensif dès l'enfance sans diversification
4. **Récupération insuffisante** : Pas assez de repos entre les sessions
5. **Technique insuffisante** : Mauvaise exécution sur des milliers de répétitions

**Distinguer douleur normale et signal d'alarme — une compétence essentielle :**

| Douleur normale | Signal d'alarme |
|---|---|
| Courbatures diffuses après effort | Douleur localisée (un point précis) |
| Disparaît en 48–72h | Persiste plus de 72h |
| Symétrique (les deux côtés) | Asymétrique (un seul côté) |
| Diminue à l'échauffement | Augmente pendant l'activité |
| Pas de gonflement | Gonflement, chaleur, ecchymose |

**La règle d'or que je te donne gratuitement :** Si la douleur a une localisation précise, persiste plus de 72h, ou modifie ta façon de danser — consulte un professionnel de santé spécialisé en danse. Ne fais pas le/la brave.`,
      },
      {
        titre: "Comprendre la douleur — ne pas la fuir, la décoder",
        contenuMarkdown: `La douleur est un signal, pas un ennemi. Savoir la lire est une compétence essentielle — et c'est une compétence que personne n'enseigne assez. Dans mes carnets, j'y reviens constamment, parce que c'est souvent là que se joue tout.

**Le continuum de la blessure de surmenage :**

Les blessures de surmenage ne naissent pas du jour au lendemain. Elles passent par des stades — et à chaque stade, l'action appropriée change :

- **Stade 1** : Douleur après l'activité, disparaît au repos → *Surveiller, réduire la charge*
- **Stade 2** : Douleur pendant l'activité mais tu peux continuer → *Consulte maintenant*
- **Stade 3** : Douleur qui modifie ta technique → *Arrêt nécessaire, consultation urgente*
- **Stade 4** : Douleur au repos, activité impossible → *Trop tard — traitement long*

La majorité des danseurs consultent au stade 3–4. Consulter au stade 2 réduit le temps de guérison de 60–80%. Je ne peux pas être plus clair : consulte tôt.

**Les professionnels de santé à connaître :**
- **Médecin du sport** : Diagnostic, imagerie, suivi médical global
- **Kinésithérapeute** : Rééducation, travail fonctionnel
- **Ostéopathe** : Mobilité, restrictions articulaires
- **Podologue** : Pied, appui, semelles orthopédiques

**Idéalement** : des professionnels qui connaissent la danse et ses exigences spécifiques. Ça change tout.

**La gestion de la douleur pendant la blessure :**

RICE en phase aiguë :
- **R**est — repos relatif (pas total pour les blessures de surmenage)
- **I**ce — glace 15–20 min, 3x/jour les 48 premières heures
- **C**ompression — contention pour limiter l'œdème
- **E**levation — surélever le membre blessé

**Anti-douleurs et danse — un point qui me tient à cœur :** Les AINS (ibuprofène, etc.) masquent la douleur sans traiter la cause. Danser sous anti-douleurs = risque d'aggraver la blessure sans s'en rendre compte. Ne fais pas ça.`,
      },
      {
        titre: "Échauffement et retour au calme — les deux rituels incontournables",
        contenuMarkdown: `Un bon échauffement réduit le risque de blessure de 50%. Un bon retour au calme optimise la récupération. Si je pouvais t'obliger à faire une seule chose différemment dès demain, ce serait ça. Promis, ça vaut le coup.

---

## L'échauffement — préparer le corps à l'effort

**Objectifs physiologiques :**
- Augmenter la température musculaire (muscles plus élastiques)
- Augmenter le débit sanguin vers les muscles
- Préparer le système nerveux (coordination, temps de réaction)
- Mobiliser les articulations dans leur amplitude

**Structure d'un échauffement efficace (20–30 minutes) :**

**Phase 1 — Général cardiovasculaire (5 min) :**
Marche rapide, trot léger, jumping jacks modérés — élever le rythme cardiaque progressivement.

**Phase 2 — Mobilisation articulaire (8–10 min) :**
Cercles des chevilles → genoux → hanches → colonne → épaules → cou. *Chaque articulation, dans les deux sens.*

**Phase 3 — Activation musculaire (8–10 min) :**
Exercices spécifiques à ta discipline — pliés progressifs en classique, relevés de fessiers pour le contemporain, isolations progressives en jazz.

**Phase 4 — Préparation spécifique (5 min) :**
Éléments techniques de la session à venir, à intensité réduite.

**Ce que l'échauffement n'est PAS — et j'insiste :**
- Des étirements statiques (contre-productif avant l'effort — réduit la force et augmente le risque de blessure)
- 5 minutes en courant pour rattraper le cours

---

## Le retour au calme — récupérer intelligemment

**Objectifs :**
- Ramener le rythme cardiaque progressivement
- Évacuer l'acide lactique des muscles
- Débuter la récupération tissulaire

**Structure (10–15 min) :**

**Phase 1 — Décélération (3–5 min) :**
Marche, mouvements lents, diminution progressive de l'intensité.

**Phase 2 — Étirements statiques (8–10 min) :**
*Ici* les étirements sont appropriés — tenir chaque position 30–60 secondes. Cible les zones travaillées.

**Phase 3 — Respiration (2 min) :**
Respiration profonde pour activer le système nerveux parasympathique (récupération).

**Les zones prioritaires à étirer après une session de danse :**
- Mollets et tibial postérieur (toujours sollicités)
- Fléchisseurs de hanche (souvent raccourcis)
- Ischio-jambiers
- Psoas
- Thoracique et épaules`,
      },
      {
        titre: "Renforcement neuromusculaire — construire un corps résilient",
        contenuMarkdown: `La flexibilité sans force est dangereuse. La force sans coordination est insuffisante. Le renforcement neuromusculaire combine les deux — et c'est le levier préventif le mieux étayé scientifiquement que je connaisse. Les études montrent une réduction de 30 à 50 % du risque de blessure dans le sport, avec des programmes spécifiques comme le 11+ Dance (adapté du FIFA 11+). Ça me donne envie de paonner.

**Qu'est-ce que le renforcement neuromusculaire ?**

Au-delà de la force musculaire pure, le renforcement neuromusculaire travaille la capacité du système nerveux à contrôler le mouvement — proprioception, équilibre, stabilité, réaction.

**Pourquoi c'est crucial en danse :**
Les danseurs ont souvent une hypermobilité développée — amplitude articulaire au-delà de la norme. L'hypermobilité sans force de stabilisation = risque élevé d'entorses, luxations, blessures. C'est un piège dans lequel je vois tomber beaucoup de danseurs.

**Les piliers du renforcement en danse :**

**1. Gainage fonctionnel :**
Stabilité du centre (core) sans rigidité. Pas des abdos statiques — des chaînes musculaires activées pendant le mouvement.

*Exercices fondamentaux :*
- Planche (progressive : genoux → pieds → pieds avec déséquilibre)
- Dead bug (coordination abdos + membres)
- Bird dog (stabilité lombaire)

**2. Travail excentrique :**
Contrôler la descente, pas seulement la montée. Le frein est plus important que l'accélération pour protéger les tendons.

*Exemple :* Relevé lent sur une jambe (3 temps haut, 5 temps descente)

**3. Proprioception et équilibre :**
Entraîner le système nerveux à corriger instinctivement. Sur une jambe, yeux fermés, surface instable (coussin proprioceptif).

**4. Renforcement des pieds et chevilles :**
Zone la plus blessée en danse — et la plus négligée dans l'entraînement. Ça me rend triste de le dire, mais c'est la réalité.

*Exercices :*
- Doming (voûte plantaire) — raccourcir le pied sans recroqueviller les orteils
- Résistance à l'élastique (éversion, inversion, flexion plantaire excentrique)
- Équilibre monopodal sur surface instable

**5. Chaîne postérieure :**
Fessiers, ischio-jambiers — souvent faibles chez les danseurs hypermobiles.
*Exercices :* Hip thrust, deadlift à une jambe, Nordic hamstring`,
      },
      {
        titre: "Hygiène de vie et santé mentale — le corps comme outil de travail",
        contenuMarkdown: `La prévention des blessures ne s'arrête pas au studio. L'hygiène de vie conditionne la récupération et la résilience — et j'aurais voulu apprendre ça beaucoup plus tôt dans ma vie de danseur. Tu vas voir, ça change tout.

---

## Sommeil — le médicament gratuit

**Pendant le sommeil, ton corps :**
- Synthétise les protéines musculaires (réparation tissulaire)
- Consolide les apprentissages moteurs (mémorisation des enchaînements)
- Régule les hormones (cortisol, hormone de croissance)

**Recommandations pour les danseurs :**
- 8–9h par nuit (plus que la moyenne — charge physique élevée)
- Régularité horaire > durée totale
- Pas d'écrans 1h avant le coucher (mélatonine)

---

## Nutrition — carburant et construction

Les danseurs ont souvent une relation complexe à la nourriture — pression esthétique, culture de la restriction. La science est claire, et j'ai besoin que tu l'entendes :

**Déficit énergétique relatif (RED-S) :**
Manger insuffisamment par rapport à la dépense énergétique = blessures de stress (fractures, tendinopathies), troubles hormonaux, immunité réduite, apprentissage moteur dégradé.

**Principes fondamentaux :**
- Glucides = carburant principal de la danse (ne pas les éliminer)
- Protéines = construction musculaire (1,6–2g/kg/jour pour un danseur actif)
- Hydratation : urines claires = bien hydraté
- Fer : déficience courante chez les danseuses (fatigue, blessures)

---

## Santé mentale — le lien corps-esprit

Le stress psychologique augmente le risque de blessure physique — c'est prouvé scientifiquement. Mécanismes :
- Tension musculaire excessive sous stress
- Attention réduite (distraction = risque de traumatisme)
- Récupération ralentie (cortisol élevé = inflammation)

**Enjeux spécifiques au milieu de la danse :**
- **Syndrome d'imposteur** : Normal dans une discipline aussi exposée
- **Perfectionnisme** : Facteur de risque de surmenage
- **Body image** : Pression esthétique intense dans certaines disciplines
- **Identité fusionnée** : "Je suis danseur·se" (pas "je fais de la danse") = effacement de soi hors de la danse

**Ressources :**
- Psychologue du sport spécialisé
- Sophrologie, pleine conscience
- Groupes de parole dans la communauté danse

---

> Ton corps n'est pas ton ennemi — c'est ton instrument. Comme tout instrument, il demande entretien, soin et respect pour produire son meilleur son. Prends-en soin, et il te le rendra. Je le crois profondément.`,
      },
    ],
  },
  {
    id: 'prevention-par-discipline',
    titre: 'Prévention spécifique par discipline',
    resume: "Chaque discipline a ses blessures signature, ses facteurs de risque propres et ses stratégies de prévention adaptées. J'ai compilé tout ça avec soin dans mes carnets de santé — classique, contemporain/moderne, jazz, heels, cabaret, pole dance et burlesque. Parce qu'une cheville de danseuse classique et une épaule de pôliste n'ont vraiment pas les mêmes besoins.",
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    termesAbordes: [
      'entorse-cheville', 'tendinopathie', 'syndrome-rotulien', 'equilibre-musculaire',
      'renforcement-neuromusculaire', 'souplesse-mobilite', 'conditioning-pole',
    ],
    sections: [
      {
        titre: "Classique — les risques du vocabulaire académique",
        contenuMarkdown: `La danse classique a l'un des taux de blessures les plus élevés de toutes les disciplines. L'exigence technique extrême sur des structures anatomiques parfois poussées à leurs limites explique cette réalité — et je te dis ça sans vouloir te faire peur, juste pour que tu dances en connaissance de cause. C'est important.

**Blessures caractéristiques du classique :**

**Pieds et chevilles (40% des blessures) :**
- Entorse de cheville (réception de sauts)
- Tendinopathie du tendon d'Achille (surcharge des relevés)
- Syndrome du carrefour postérieur (os trigone — en pointe)
- Hallux valgus (déformation de l'orteil liée aux chaussons de pointe)
- Douleurs métatarsales (surcharge des têtes métatarsiennes)

**Genoux (20%) :**
- Syndrome fémoro-patellaire (rotation forcée du genou)
- Tendinopathie rotulienne (sauts répétés)

**Dos et hanches (15%) :**
- Spondylolyse (lombaire — arabesque, cambrés)
- Syndrome d'accrochage de la hanche (snapping hip)
- Pincement labral

**Le problème du turn-out compensé — je reviens là-dessus :**
Le turn-out idéal vient de la rotation externe de hanche. Quand la mobilité articulaire est insuffisante, les danseurs compensent en tournant les genoux et les pieds vers l'extérieur — hyperpronation, torsion tibiale, syndrome rotulien.

**Stratégies de prévention spécifiques :**
1. **Évaluation du turn-out réel** vs compensé (test au sol)
2. **Renforcement des rotateurs externes** : Coquilles, résistance élastique
3. **Travail excentrique des mollets** avant de progresser en relevé et pointe
4. **Progression rigoureuse** : pas de pointe avant technique de relevé maîtrisée
5. **Proprioception chevilles** : indispensable avant les sauts

**Pour les danseuses sur pointes :**
Règle des 3 ans de classique minimum avant les pointes, technique de relevé solide, force des pieds et des chevilles validée par un professionnel.`,
      },
      {
        titre: "Contemporain et moderne — les risques du sol et des chutes",
        contenuMarkdown: `Le travail au sol, les chutes contrôlées et le contact improvisation sont des éléments fondamentaux du contemporain — avec des risques spécifiques que j'ai appris à connaître, et que j'ai notés avec soin dans mes carnets.

**Blessures caractéristiques du contemporain/moderne :**

**Poignets et mains :**
- Entorses, fractures (chutes non maîtrisées)
- Le poignet en contemporain travaille comme une articulation portante — inhabituel, et qui demande une préparation spécifique

**Genoux :**
- Bursites (travail au sol sur des surfaces dures)
- Ménisques (pivots au sol)

**Colonne (contemporain) :**
- Surmenage lombaire (oscillations, flexions extrêmes)
- Cervicales (roulades, travail de tête)

**Épaules (contact improvisation) :**
- Coiffe des rotateurs (portés, prises de poids imprévues)
- Instabilité gléno-humérale (hypermobilité + charge)

**Stratégies de prévention :**

**Pour le floorwork :**
- Apprentissage progressif des chutes (roulades avant maîtrise des chutes directes)
- Surface adaptée (pas de parquet brut pour l'apprentissage)
- Protection des genoux et coudes en phase d'apprentissage

**Pour le contact improvisation :**
- Communication claire entre partenaires
- Départ avec des portés simples avant les déséquilibres complexes
- Renforcement des épaules et de la coiffe des rotateurs

**Pour le travail spinal :**
- Gainage fonctionnel actif pendant les mouvements extrêmes
- Ne pas aller jusqu'à l'amplitude maximale de la colonne sans préparation

**La notion de release technique — et un malentendu à corriger :**
La release ne signifie pas "absence de tonus" — elle signifie tonus approprié, ni trop, ni pas assez. Un corps sans tonus est plus fragile qu'un corps engagé.`,
      },
      {
        titre: "Jazz, heels et cabaret — les risques de l'intensité et des talons",
        contenuMarkdown: `Jazz, heels et cabaret partagent des caractéristiques communes : rythme intense, répétitions nombreuses, parfois accessoires ou chaussures contraignantes. Voilà ce que j'ai noté dans mes carnets pour chacun — avec quelques choses que je n'aurais pas voulu apprendre à mes dépens.

---

## Jazz — les risques de l'intensité et des sauts

**Blessures caractéristiques :**
- Chevilles (sauts, atterrissages)
- Genoux (pirouettes, changements de direction)
- Dos lombaire (kicks, cambrés)
- Ischio-jambiers (grand battement, leaps)

**Points d'attention :**
- L'alignement en jazz est moins codifié qu'en classique — la liberté stylistique peut masquer de mauvaises compensations
- Les leaps et sauts jazz atterrissent souvent en avant du corps (mauvais) plutôt que sous le corps (bon)

**Prévention :**
- Technique d'atterrissage : cheville → genou → hanche en séquence, genou aligné sur le pied
- Renforcement des ischio-jambiers avant de travailler les kicks

---

## Heels — les risques spécifiques aux talons hauts

**La biomécanique des talons hauts :**
- Augmentation de la pression sur l'avant-pied (métatarses)
- Raccourcissement du mollet et du tendon d'Achille
- Instabilité cheville augmentée (risque d'entorse)
- Pression sur les genoux augmentée

**Blessures fréquentes :**
- Entorse de cheville (instabilité + sol)
- Douleurs métatarsales (névrome de Morton)
- Tendinopathie d'Achille (mollet raccourci)
- Fasciite plantaire

**Prévention — des gestes simples qui changent tout :**
- Jamais de session heels sans échauffement complet des pieds et des chevilles
- Étirements du mollet systématiques après la session
- Proprioception des chevilles — travailler pieds nus en parallèle
- Progression vers les talons (commencer bas, monter progressivement)
- Choisir des chaussures adaptées (semelles intérieures, maintien de la cheville)

---

## Cabaret — les risques des high kicks

- Ischio-jambiers et adducteurs (sollicitation extrême en high kick)
- Dos lombaire (extension extrême)

**Prévention :** Amplitude maximale toujours en douceur, jamais à froid. Renforcement des ischio-jambiers en excentrique avant de travailler les kicks à pleine amplitude.`,
      },
      {
        titre: "Pole dance — les risques du travail aérien",
        contenuMarkdown: `La pole dance combine force, agilité, inversions et travail aérien — avec des risques spécifiques aux prises, aux points de contact et aux chutes. Prendre ces risques au sérieux, c'est pratiquer intelligemment. Et moi, je te supplie de le faire.

**Blessures caractéristiques de la pole dance :**

Les données scientifiques montrent que l'épaule est la zone la plus touchée (environ 54,5 % des blessures), suivie du poignet (environ 34,2 %) et du dos — avec des blessures aiguës (chutes, inversions) en plus des blessures de surmenage.

**Épaules (zone la plus blessée) :**
- Coiffe des rotateurs (prises, portés, inversions)
- Syndrome d'accrochage sous-acromial
- Instabilité gléno-humérale

**Poignets et mains :**
- Tendinopathies des fléchisseurs (grip intense)
- Syndrome du canal carpien (pression répétée)

**Peau et ecchymoses (spécifiques à la pole) :**
- Les "pole kisses" (ecchymoses et marques de barre) sont normaux pendant l'apprentissage
- Blessures cutanées si la peau n'est pas conditionnée

**Genoux et tibias :**
- Points de contact lors des figures (skin grip)

**Inversions — risques spécifiques :**
- Cervicales et rachis si la technique est insuffisante
- Chute en inversion = risque de traumatisme grave

**Stratégies de prévention :**

**Pour les épaules (priorité absolue) :**
- Renforcement de la coiffe des rotateurs (trapèzes inférieurs, serratus anterior)
- Dépressions scapulaires actives dans toutes les figures
- Jamais de hang passif — toujours actif
- Progression : figure statique → spin → inversion → combinaisons

**Pour les inversions :**
1. Maîtrise complète du climber avant le premier renversement
2. Spotter systématique lors de l'apprentissage
3. Jamais de première inversion seule ou sans filet

**Pour la peau :**
- Conditionner progressivement (ne pas forcer les sessions longues)
- Hydratation cutanée entre les sessions
- Laisser les ecchymoses guérir avant de retravailler la même zone

**Conditioning pole :**
Exercices de force spécifiques à la barre (pull-ups, shoulder mounts à vide, tuck inversions sans barre) — obligatoires avant de progresser en figures avancées.

**La règle du pole que je répète à chaque élève :** Si tu ne peux pas sortir de la figure toi-même (en sécurité), tu n'es pas prêt·e à l'apprendre.`,
      },
      {
        titre: "Blessures les plus fréquentes — reconnaissance et premiers soins",
        contenuMarkdown: `Savoir reconnaître les blessures les plus fréquentes en danse permet d'agir vite et d'éviter l'aggravation. C'est la page la plus pratique de toute l'Unité 10 — et je voulais la finir sur quelque chose de concret et d'utile pour toi.

---

## Entorse de cheville

**Mécanisme :** Torsion du pied vers l'intérieur (inversion forcée) — lors d'une réception de saut ou d'un déséquilibre.

**Signes :** Douleur immédiate sur le bord externe de la cheville, gonflement, ecchymose possible, difficulté à appuyer.

**Premiers soins (RICE) :**
Repos → Glace (15–20 min toutes les 2h) → Compression → Élévation

**La règle d'Ottawa :** Radiographie si douleur à la palpation sur les malléoles ou incapacité à marcher 4 pas → consultation urgente.

**Retour à la danse :** Pas avant rééducation complète — reprendre trop tôt = récidive quasi-certaine. Je t'en supplie.

---

## Tendinopathie (tendon d'Achille, rotulien, tibial postérieur)

**Mécanisme :** Surcharge répétitive → micro-déchirures → dégénérescence du tendon.

**Signes :** Douleur localisée sur le tendon, raideur matinale, douleur augmentant à l'échauffement puis diminuant (stade 1–2).

**Traitement :** Travail excentrique progressif (le plus efficace scientifiquement prouvé), kinésithérapie, modification de la charge.

**Attention :** Éviter les injections de cortisone dans le tendon (affaiblit le tissu tendineux).

---

## Syndrome fémoro-patellaire (douleur au genou)

**Mécanisme :** Mauvais tracking de la rotule — souvent lié à faiblesse des fessiers ou mauvais alignement du membre inférieur.

**Signes :** Douleur diffuse autour ou sous la rotule, aggravée par les escaliers, les sauts, la position assise prolongée.

**Traitement :** Renforcement des fessiers (vaste médial, abducteurs), correction de l'alignement, kinésithérapie.

---

## Syndrome de la loge antérieure (shin splints)

**Mécanisme :** Surcharge des muscles de la jambe → inflammation du périoste tibial.

**Signes :** Douleur diffuse sur le bord interne du tibia, aggravée à l'effort, soulagée au repos.

**Facteurs de risque en danse :** Surface dure, chaussures inadaptées, volume d'entraînement augmenté brutalement.

**Traitement :** Repos relatif, glace, correction des facteurs de risque, kinésithérapie.

---

> La meilleure prévention est la connaissance. Un danseur qui comprend son corps prend de meilleures décisions — sur le moment, sous la pression du cours, et sur le long terme. Et toi, maintenant, tu as les outils. C'est pour ça que j'ai rempli ces carnets.`,
      },
    ],
  },
]
