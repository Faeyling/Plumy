import type { Terme } from '../schema'

export const termesUnite10: Terme[] = [

  // ─── Concepts fondamentaux ────────────────────────────────────────────────

  {
    id: 'blessure-surmenage',
    nom: 'Blessure de surmenage',
    alias: ['overuse injury', 'blessure chronique', 'blessure de répétition', 'blessure de surentraînement'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Lésion qui se développe progressivement par accumulation de micro-traumatismes répétés — contrairement à la blessure traumatique (accident aigu) — résultant d'un déséquilibre entre la charge d'entraînement et la capacité de récupération du corps.",
    description: "80% des blessures en danse sont des blessures de surmenage — pas des accidents, mais le résultat progressif d'une surcharge.\n\n**Pourquoi les danseurs sont particulièrement exposés :**\n- Volume d'entraînement élevé (cours quotidiens, répétitions, spectacles)\n- Pression à 'pousser à travers la douleur' culturellement normalisée\n- Périodes de repos insuffisantes\n- Progression trop rapide\n\n**Le continuum de la douleur :**\nLa blessure de surmenage ne naît pas du jour au lendemain — elle passe par des stades :\n\n1. **Stade 1** : Douleur après l'activité (disparaît au repos)\n2. **Stade 2** : Douleur pendant l'activité (mais danseur peut continuer)\n3. **Stade 3** : Douleur qui modifie la technique\n4. **Stade 4** : Douleur au repos, activité impossible\n\n**La règle d'or :** Consulter dès le stade 2, pas attendre le stade 4.\n\n**Exemples en danse :**\n- Tendinopathie du tendon d'Achille (surcharge des relevés)\n- Syndrome fémoro-patellaire (genoux)\n- Stress fractures (pieds, tibias)\n- Périostite tibiale (shin splints)\n- Tendinopathie du tibial postérieur\n\n**Le paradoxe du danseur blessé :**\nBeaucoup de danseurs continuent de travailler blessés par peur de perdre leur place, leur forme ou leur contrat. Cette décision transforme des blessures de stade 2 en blessures de stade 4.",
    erreursCourantes: [
      "Attendre que la blessure 'passe d'elle-même' au stade 3-4 (elle ne passe pas, elle empire).",
      "Confondre la douleur musculaire normale (courbatures) et la douleur de blessure (localisation précise, persistante).",
    ],
    conseils: [
      "Règle simple : si la douleur a une localisation précise (un point du corps défini), qu'elle persiste plus de 72h ou qu'elle modifie ta technique, consulte un professionnel de santé spécialisé en danse.",
    ],
    difficulteInterne: 2,
    termesLies: ['facteurs-risque', 'tendinopathie', 'repos-recuperation'],
  },

  {
    id: 'blessure-traumatique',
    nom: 'Blessure traumatique',
    alias: ['traumatisme aigu', 'accident de danse', 'entorse', 'fracture', 'claquage'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention'],
    definition: "Lésion survenant de façon soudaine suite à un événement précis — chute, réception de saut, mouvement forcé — s'opposant aux blessures de surmenage qui se développent progressivement.",
    description: "La blessure traumatique est moins fréquente que la blessure de surmenage en danse, mais souvent plus spectaculaire et mieux reconnue.\n\n**Exemples de blessures traumatiques en danse :**\n- Entorse de cheville (réception de saut)\n- Déchirure musculaire (claquage des ischio-jambiers)\n- Fracture (chute au sol)\n- Luxation (épaule en pole dance)\n- Lésion ligamentaire du genou\n\n**Les contextes à risque :**\n- Réception de sauts (surtout sur sol glissant ou mal préparé)\n- Travail de partenariat et portés\n- Premiere avec fatigue accumulée\n- Reprise après absence (corps non préparé)\n- Sol inadapté (trop dur, trop glissant, non-marley)\n\n**La réponse immédiate (protocole RICE) :**\n- **R**est : arrêter immédiatement\n- **I**ce : glace 15-20 min (pas en contact direct avec la peau)\n- **C**ompression : bandage modéré\n- **E**levation : membre surélevé au-dessus du cœur\n\n**Quand consulter en urgence :**\n- Déformation visible\n- Douleur insupportable\n- Incapacité totale à appuyer sur le membre\n- Craquement entendu au moment du traumatisme\n- Gonflement rapide et important",
    erreursCourantes: [
      "Retourner danser trop vite après une blessure traumatique non consolidée — risque de rechute grave.",
    ],
    conseils: [
      "Après toute blessure traumatique, la reprise de la danse doit être progressive et idéalement guidée par un kiné spécialisé en danse. Une reprise trop rapide est la première cause de rechute.",
    ],
    difficulteInterne: 1,
    termesLies: ['entorse-cheville', 'blessure-surmenage', 'repos-recuperation'],
  },

  {
    id: 'facteurs-risque',
    nom: 'Facteurs de risque de blessure',
    alias: ['facteurs de risque', 'prédisposition à la blessure', 'vulnérabilité'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Ensemble des conditions intrinsèques (propres au danseur) et extrinsèques (liées à l'environnement et à l'entraînement) qui augmentent la probabilité de blessure.",
    description: "Comprendre les facteurs de risque, c'est pouvoir les modifier — et réduire son risque de blessure.\n\n**Facteurs intrinsèques (propres au danseur) :**\n\n**Morphologie et anatomie :**\n- Hypermobilité généralisée (instabilité articulaire)\n- Turn-out insuffisant compensé (rotation de hanche faible, compensation genou/cheville)\n- Pieds creux ou plats excessifs\n- Inégalité de longueur des membres inférieurs\n\n**Condition physique :**\n- Force musculaire insuffisante (surtout stabilisateurs)\n- Manque de proprioception\n- Souplesse excessive sans force (hypermobilité non contrôlée)\n\n**Facteurs psychologiques :**\n- Perfectionnisme excessif\n- Peur de décevoir ou d'être remplacé\n- Négation de la douleur\n\n**Facteurs extrinsèques (environnement) :**\n\n**Entraînement :**\n- Augmentation trop rapide du volume ou de l'intensité\n- Manque de périodisation (pas de semaines légères)\n- Retour trop rapide après absence ou blessure\n\n**Environnement :**\n- Sol inadapté (béton, sol glissant)\n- Chaussures inadaptées ou usées\n- Température froide (corps non échauffé)\n- Éclairage insuffisant\n\n**Récupération :**\n- Sommeil insuffisant\n- Nutrition inadaptée (notamment déficit calorique)\n- Stress psychologique chronique",
    erreursCourantes: [
      "Voir les facteurs de risque comme une fatalité — la plupart des facteurs extrinsèques sont modifiables.",
    ],
    conseils: [
      "Fais une liste honnête de tes facteurs de risque personnels. Identifie ceux que tu peux modifier (chaussures, sol, volume d'entraînement) et ceux qui nécessitent un travail long terme (force, proprioception). Agir sur deux ou trois facteurs réduit significativement le risque global.",
    ],
    difficulteInterne: 2,
    termesLies: ['blessure-surmenage', 'gainage-fonctionnel', 'hygiene-vie'],
  },

  // ─── Prévention active ────────────────────────────────────────────────────

  {
    id: 'echauffement-danse',
    nom: 'Échauffement',
    alias: ['warm-up', 'échauffement danseur', 'préparation physique avant cours'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Phase préparatoire avant toute activité dansée — visant à augmenter la température corporelle, améliorer la vascularisation musculaire, activer le système nerveux et préparer mentalement le danseur à l'effort.",
    description: "L'échauffement n'est pas une option — c'est la première compétence d'un danseur responsable.\n\n**Ce que l'échauffement accomplit physiologiquement :**\n- Élévation de la température musculaire (+1-2°C → muscle plus élastique)\n- Augmentation du débit sanguin dans les muscles actifs\n- Activation du système nerveux (réflexes plus rapides)\n- Lubrification des articulations (production de liquide synovial)\n- Préparation psychologique (focus, intention)\n\n**Structure d'un échauffement efficace :**\n\n**Phase 1 — Activation générale (5-10 min) :**\nElever la fréquence cardiaque progressivement : marche rapide, trottinement, mouvements des bras. L'objectif est de 'transpirer légèrement' en fin de phase.\n\n**Phase 2 — Mobilité articulaire (5-10 min) :**\nTravailler chaque articulation dans son amplitude : chevilles, genoux, hanches, colonne, épaules. Mouvements circulaires, dynamiques (pas d'étirements statiques ici).\n\n**Phase 3 — Activation musculaire spécifique (5-10 min) :**\nActiver les muscles qui vont travailler : squats pour les jambes, planks pour le gainage, élévations latérales pour les épaules. Intensité progressive.\n\n**Phase 4 — Spécifique à la discipline :**\nExercices proches de l'activité (battements lents pour le classique, kicks modérés pour le cabaret, prise de grip pour le pole).\n\n**Durée totale recommandée :** 15-30 minutes selon l'intensité du cours qui suit.",
    erreursCourantes: [
      "Étirements statiques profonds en début d'échauffement — contre-productif (diminue la force et augmente le risque de blessure).",
      "Échauffement trop court (5 minutes) avant une activité intensive.",
    ],
    conseils: [
      "Règle simple : tu dois légèrement transpirer à la fin de l'échauffement. Si tu es encore 'froid', continue. Si tu es épuisé, c'était trop intense.",
    ],
    difficulteInterne: 1,
    termesLies: ['retour-au-calme', 'renforcement-neuromusculaire', 'facteurs-risque'],
  },

  {
    id: 'retour-au-calme',
    nom: 'Retour au calme',
    alias: ['cool-down', 'récupération active', 'stretching post-cours', 'fin de cours'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Phase post-activité visant à ramener progressivement le corps à son état de repos — en abaissant la fréquence cardiaque, en éliminant les déchets métaboliques et en commençant le processus de récupération musculaire.",
    description: "Le retour au calme est souvent sacrifié par manque de temps ou d'attention — et c'est une erreur aux conséquences réelles.\n\n**Ce que le retour au calme accomplit :**\n- Retour progressif de la fréquence cardiaque à la normale\n- Élimination du lactate musculaire (déchets métaboliques)\n- Réduction des courbatures via la circulation active\n- Début du processus de récupération\n- Transition psychologique (sortir du mode performance)\n\n**Structure d'un retour au calme :**\n\n**Phase 1 — Récupération active (3-5 min) :**\nMarche lente, mouvements légers, respiration profonde. Ne pas s'arrêter brutalement après un effort intense.\n\n**Phase 2 — Étirements statiques (10-15 min) :**\nC'est *maintenant* que les étirements statiques ont leur place — le muscle est chaud, irrigué, et peut s'étirer en sécurité.\nZones prioritaires : ischio-jambiers, quadriceps, fléchisseurs de hanche, mollets, adducteurs.\n\n**Phase 3 — Respiration et récupération mentale (2-3 min) :**\nQuelques respirations profondes, un moment de conscience du corps, une transition vers le repos.\n\n**Étirements statiques — la bonne technique :**\n- Maintenir la position 20-30 secondes\n- Jamais de douleur vive (inconfort tolérable seulement)\n- Respirer tout au long (ne pas retenir le souffle)\n- Progressif : entrer doucement dans l'étirement",
    erreursCourantes: [
      "Sauter le retour au calme (douche directe après le cours) — favorise les courbatures et retarde la récupération.",
    ],
    conseils: [
      "Si tu n'as que 10 minutes : 2 minutes de marche, puis 8 minutes d'étirements des ischio-jambiers, quadriceps et mollets. Ces trois groupes sont les plus sollicités et les plus importants à étirer.",
    ],
    difficulteInterne: 1,
    termesLies: ['echauffement-danse', 'repos-recuperation', 'souplesse-mobilite'],
  },

  {
    id: 'renforcement-neuromusculaire',
    nom: 'Renforcement neuromusculaire',
    alias: ['proprioceptif', 'renforcement stabilisateur', 'travail de gainage', 'neuromuscular training'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention'],
    definition: "Travail de renforcement qui entraîne à la fois les muscles et le système nerveux à contrôler les articulations dans des situations de déséquilibre et d'instabilité — fondement de la prévention des blessures articulaires (cheville, genou, hanche).",
    description: "La majorité des entorses de cheville ne sont pas dues à une faiblesse musculaire brute — mais à une défaillance du contrôle neuromusculaire (le message nerveux n'est pas assez rapide pour stabiliser l'articulation).\n\n**Qu'est-ce que le contrôle neuromusculaire ?**\nLa capacité du système nerveux à déclencher la bonne contraction musculaire, au bon moment, avec la bonne intensité — surtout en situation de déséquilibre ou d'imprévision.\n\n**Exercices fondamentaux :**\n\n**Équilibre unipodal :**\nSe tenir sur une jambe, yeux ouverts puis yeux fermés. Progressions : surface instable (coussin), mouvement des bras, fermer les yeux.\n\n**Squat unipodal (pistol progressif) :**\nFaire une demi-flexion sur une jambe. Le genou doit rester aligné sur le 2e orteil — pas de valgus.\n\n**Calf raises excentrique :**\nMonter sur deux jambes, descendre sur une. Renforce le tendon d'Achille et les stabilisateurs de la cheville.\n\n**Hamstring curl excentrique :**\nRenforcement de la phase excentrique des ischio-jambiers (phase de freinage) — prévention des claquages.\n\n**Plank et variations :**\nGainage abdominal et stabilisateurs du tronc — base de tout contrôle du corps en mouvement.\n\n**Fréquence recommandée :**\n3 fois par semaine, 15-20 minutes — peut s'intégrer dans l'échauffement ou le retour au calme.",
    erreursCourantes: [
      "Confondre souplesse et stabilité — un danseur très souple mais avec peu de contrôle neuromusculaire est en réalité très vulnérable.",
    ],
    conseils: [
      "Test de base : reste sur une jambe, yeux fermés. Si tu ne peux pas tenir 10 secondes sans te stabiliser avec les bras, ton contrôle neuromusculaire est un facteur de risque à travailler.",
    ],
    difficulteInterne: 2,
    termesLies: ['proprioception', 'gainage-fonctionnel', 'entorse-cheville'],
  },

  {
    id: 'gainage-fonctionnel',
    nom: 'Gainage fonctionnel',
    alias: ['core stability', 'gainage', 'stabilisation du tronc', 'core work'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention', 'concepts'],
    definition: "Renforcement des muscles profonds du tronc (transverse de l'abdomen, multifides, plancher pelvien, diaphragme) qui assurent la stabilité de la colonne et du bassin pendant le mouvement — distinct du gainage esthétique des abdominaux superficiels.",
    description: "Le 'gainage' dont parlent les profs de danse et le gainage fonctionnel de prévention ne sont pas exactement la même chose — mais ils se complètent.\n\n**Les couches du gainage :**\n\n**Muscles profonds (stabilisateurs) :**\n- **Transverse** : le 'corset' naturel du corps, s'active avant tout mouvement\n- **Multifides** : stabilisateurs vertébraux\n- **Plancher pelvien** : soutien des organes, connexion avec le transverse\n- **Diaphragme** : fermeture supérieure du cylindre de stabilité\n\n**Muscles superficiels (mobilisateurs) :**\n- Grand droit de l'abdomen, obliques — muscles du mouvement, pas de la stabilisation\n\n**L'activation correcte :**\nLe gainage fonctionnel ne consiste pas à 'aspirer le ventre' (qui bloque le diaphragme) mais à créer une légère pression intra-abdominale — comme avant de soulever quelque chose.\n\n**Exercices fondamentaux :**\n\n**Hollow body :** Allongé, dos plat au sol, jambes et bras tendus légèrement décollés. Le bas du dos reste collé.\n\n**Deadbug :** Allongé, jambes et bras opposés s'abaissent alternativement, dos plat.\n\n**Plank :** Position de gainage frontal (corps rigide en planche).\n\n**Bird dog :** À quatre pattes, bras et jambe opposés s'étendent.\n\n**Application en danse :**\nLe gainage fonctionnel actif permet de protéger la colonne pendant les grands battements, les sauts, les portés et les inversions.",
    erreursCourantes: [
      "Respiration bloquée pendant le gainage — les muscles profonds peuvent travailler *pendant* la respiration.",
      "Confondre gainage et contraction maximale permanente (crée des tensions parasites).",
    ],
    conseils: [
      "Essaie ceci : inspire, puis en expirant, crée une légère résistance dans le ventre (comme si tu allais tousser, mais en douceur). Ce léger engagement du transverse, maintenu dans ton mouvement, c'est le gainage fonctionnel.",
    ],
    difficulteInterne: 2,
    termesLies: ['renforcement-neuromusculaire', 'conditioning-pole', 'equilibre-musculaire'],
  },

  {
    id: 'souplesse-mobilite',
    nom: 'Souplesse et mobilité',
    alias: ['flexibilité', 'amplitude articulaire', 'mobilité active', 'souplesse passive'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention', 'concepts'],
    definition: "Distinction essentielle entre la souplesse passive (amplitude articulaire obtenue avec aide externe) et la mobilité active (amplitude articulaire contrôlée par les propres muscles du danseur) — la mobilité active est la seule qui protège réellement des blessures.",
    description: "La souplesse sans force est un facteur de risque — pas une qualité.\n\n**Souplesse passive :**\nL'amplitude qu'on peut atteindre avec l'aide de quelqu'un d'autre ou du poids de son propre corps. Ex : split poussé par le professeur.\n\n**Mobilité active :**\nL'amplitude qu'on peut atteindre et contrôler avec ses propres muscles. Ex : lever la jambe à 90° et la tenir sans aide.\n\n**Pourquoi la différence est cruciale :**\nSi ton split passif est à 180° mais ta jambe active monte seulement à 70°, tu as une zone de vulnérabilité de 110° — une articulation qui va au-delà de ce que tes muscles peuvent contrôler. C'est dans cette zone que les blessures se produisent.\n\n**Le déficit de mobilité active :**\nL'écart entre souplesse passive et mobilité active. Plus cet écart est grand, plus le risque est élevé.\n\n**Comment développer la mobilité active :**\n\n**PAILs et RAILs (technique FRC) :**\n- En fin de position d'étirement, contracter le muscle étiré 10-20 secondes (PAILs)\n- Puis contracter le muscle opposé 10-20 secondes (RAILs)\n- Développe la force dans les positions d'amplitude extrême\n\n**Leg raises actifs :**\nLever la jambe seul, sans aide, et tenir la position.\n\n**Contrôle de l'amplitude :**\nPratique le mouvement dans toute l'amplitude avec résistance (bande élastique, poids légers).",
    erreursCourantes: [
      "Travailler uniquement la souplesse passive (étirements) sans jamais travailler la mobilité active (force dans l'amplitude).",
    ],
    conseils: [
      "Test : lève ta jambe seul à la hauteur maximale que tu peux contrôler. Maintenant regarde dans un miroir à quelle hauteur tu arrives passivement. L'écart entre les deux, c'est ton 'déficit' — et c'est là que tu dois travailler.",
    ],
    difficulteInterne: 2,
    termesLies: ['renforcement-neuromusculaire', 'equilibre-musculaire', 'facteurs-risque'],
  },

  {
    id: 'repos-recuperation',
    nom: 'Repos et récupération',
    alias: ['récupération', 'jours de repos', 'surcompensation', 'déload'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Phase passive ou active permettant au corps de s'adapter aux charges d'entraînement — c'est pendant le repos que la progression se consolide et que les tissus se réparent, pas pendant l'effort lui-même.",
    description: "Le repos fait partie de l'entraînement. Sans repos suffisant, l'entraînement produit l'effet inverse de celui cherché.\n\n**La surcompensation :**\nAprès un effort, le corps est temporairement affaibli. Pendant le repos, il se reconstruit *au-delà* de son niveau initial — c'est la surcompensation. C'est le mécanisme de toute progression.\n\nSi le prochain entraînement survient trop tôt (avant la surcompensation), on accumule de la fatigue sans progresser. Si on attend trop longtemps, on perd les gains. La fenêtre de surcompensation doit être identifiée pour chaque danseur.\n\n**Types de récupération :**\n\n**Récupération passive :** Sommeil, repos complet\n\n**Récupération active :** Activité légère (marche, natation douce, yoga) qui favorise la circulation sans charger les tissus\n\n**Récupération guidée :** Massage, cryothérapie, compression pneumatique\n\n**Le sommeil comme outil de récupération :**\n- 7-9 heures pour les adultes actifs\n- La croissance musculaire et la réparation tissulaire se font principalement pendant le sommeil profond\n- Manque chronique de sommeil → augmentation du risque de blessure de 1,7x\n\n**Les semaines de déload :**\nToutes les 4-6 semaines, réduire le volume d'entraînement de 40-50% pendant une semaine. Contre-intuitif mais scientifiquement solide.",
    erreursCourantes: [
      "Culpabiliser de se reposer — le repos *est* l'entraînement. Un danseur qui ne se repose pas ne progresse pas.",
    ],
    conseils: [
      "Planifie tes jours de repos à l'avance comme tu planifie tes cours. Ce ne sont pas des jours 'perdus' — ce sont des jours où le travail de la semaine se consolide.",
    ],
    difficulteInterne: 1,
    termesLies: ['hygiene-vie', 'blessure-surmenage', 'facteurs-risque'],
  },

  // ─── Blessures fréquentes ─────────────────────────────────────────────────

  {
    id: 'entorse-cheville',
    nom: 'Entorse de cheville',
    alias: ['entorse', 'torsion de cheville', 'ankle sprain', 'foulure'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels'],
    categories: ['sante-prevention'],
    definition: "Lésion ligamentaire de la cheville résultant d'une inversion forcée (le pied se retourne en dedans) — blessure la plus fréquente en danse, représentant jusqu'à 30% de toutes les blessures selon les études épidémiologiques.",
    description: "L'entorse de cheville est la reine des blessures en danse — et aussi l'une des plus mal gérées.\n\n**Anatomie de l'entorse :**\nLe mécanisme le plus fréquent est l'inversion (le pied s'enroule vers l'intérieur) qui étire ou déchire les ligaments latéraux — principalement le ligament talo-fibulaire antérieur (LTFA).\n\n**Grades d'entorse :**\n- **Grade 1** : élongation, sans déchirure. Douleur légère, gonflement minimal. Reprise 1-2 semaines.\n- **Grade 2** : déchirure partielle. Douleur modérée à sévère, gonflement, instabilité légère. Reprise 3-6 semaines.\n- **Grade 3** : déchirure complète. Instabilité sévère, gonflement important. Reprise 3-6 mois.\n\n**La première réponse :**\nProtocole RICE immédiatement : Repos, Ice, Compression, Elevation.\n\n**L'erreur la plus commune :**\nReprendre trop tôt. Une entorse 'guérie' dont on ne ressent plus la douleur n'est pas une entorse réhabilitée — les ligaments sont réparés mais le contrôle neuromusculaire est encore défaillant. Sans rééducation, le risque de récidive est de 70%.\n\n**La rééducation complète comprend :**\n1. Réduction de l'inflammation\n2. Récupération de la mobilité\n3. Renforcement musculaire\n4. Renforcement proprioceptif / neuromusculaire\n5. Reprise progressive de la danse\n\n**Prévention :**\n- Exercices proprioceptifs réguliers\n- Chaussures adaptées à la discipline\n- Sol adapté (éviter les sols irréguliers ou trop glissants)",
    erreursCourantes: [
      "Reprendre la danse dès que la douleur a disparu, sans rééducation — 70% de risque de récidive.",
    ],
    conseils: [
      "Après une entorse (même légère), consulte un kiné avant de reprendre la danse. La rééducation d'une entorse de grade 1 prend 2-3 séances — c'est peu comparé au risque de récidive chronique.",
    ],
    difficulteInterne: 2,
    termesLies: ['renforcement-neuromusculaire', 'blessure-traumatique', 'facteurs-risque'],
  },

  {
    id: 'tendinopathie',
    nom: 'Tendinopathie',
    alias: ['tendinite', 'tendinose', 'tendon blessé', 'tendon douloureux'],
    disciplines: ['classique', 'contemporain', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention'],
    definition: "Lésion dégénérative du tendon résultant d'une surcharge chronique — souvent improprement appelée 'tendinite' (qui implique une inflammation), la tendinopathie est en fait une dégénérescence structurelle du collagène tendineux.",
    description: "Le mot 'tendinite' est très utilisé mais souvent inexact. Comprendre la vraie nature de la blessure change la façon de la soigner.\n\n**Tendinite vs tendinopathie :**\n- **Tendinite** : inflammation aiguë du tendon (rare, court terme)\n- **Tendinopathie** : dégénérescence chronique du tendon (fréquente en danse)\n\nLa distinction est importante car le traitement diffère — et les anti-inflammatoires (ibuprofène) sont peu efficaces sur une tendinopathie chronique.\n\n**Les tendons les plus touchés en danse :**\n- **Tendon d'Achille** : relevés répétés, classique, jazz\n- **Tendon rotulien** (genou) : sauts, pliés profonds\n- **Tibial postérieur** : pronation, travail sur tableau interne\n- **Long péronier** : travail sur tableau externe\n- **Bicipital** (épaule) : pole dance, portés\n\n**Le traitement de référence — charge excentrique :**\nLe renforcement excentrique (la phase de descente/allongement du muscle) est le traitement le mieux documenté des tendinopathies.\nExemple pour le tendon d'Achille : Monter sur deux jambes, descendre *lentement* sur une jambe. 3 × 15 répétitions, 2 fois par jour.\n\n**Ce qui ne fonctionne pas :**\n- Le repos total (le tendon a besoin de charge pour se restructurer)\n- Les anti-inflammatoires seuls\n- La poursuite de l'activité sans modification",
    erreursCourantes: [
      "Prendre des anti-inflammatoires et continuer l'activité à l'identique — masque la douleur sans traiter la cause.",
    ],
    conseils: [
      "La douleur de tendinopathie est souvent 'raide le matin, mieux après l'échauffement, douloureuse après'. Ce pattern est caractéristique. Si tu le reconnais, consulte et commence le travail excentrique sous supervision.",
    ],
    difficulteInterne: 2,
    termesLies: ['blessure-surmenage', 'renforcement-neuromusculaire', 'syndrome-rotulien'],
  },

  {
    id: 'syndrome-rotulien',
    nom: 'Syndrome fémoro-patellaire',
    alias: ['douleur au genou', 'syndrome rotulien', 'genou du sauteur', 'PFPS'],
    disciplines: ['classique', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention'],
    definition: "Douleur antérieure du genou résultant d'un mauvais tracking (glissement) de la rotule dans sa gorge — fréquente chez les danseurs en raison des contraintes répétées en flexion, des déséquilibres musculaires et des compensations techniques.",
    description: "La douleur au genou est le deuxième motif de consultation le plus fréquent chez les danseurs (après la cheville).\n\n**Mécanismes courants en danse :**\n\n**Turn-out compensé :**\nSi le turn-out vient du genou ou de la cheville (au lieu de la hanche), la rotule est soumise à des forces de cisaillement anormales lors des pliés.\n\n**Faiblesse du vaste interne :**\nLe vaste médial oblique (VMO) stabilise la rotule en médial. Sa faiblesse relative entraîne un tracking latéral de la rotule — douloureux.\n\n**Valgus dynamique :**\nLe genou qui rentre vers l'intérieur lors du pli ou de la réception de saut — surcharge le compartiment médial et la rotule.\n\n**Facteurs de risque spécifiques à la danse :**\n- Travail en level bas prolongé sans force de quadriceps suffisante\n- Pliés profonds sur sol dur\n- Sauts répétitifs sans renforcement excentrique\n- Technique de turn-out compensée\n\n**Traitement :**\n- Modification de la charge (réduire les pliés et sauts douloureux)\n- Renforcement VMO (demi-squat terminal, leg extension)\n- Renforcement des fessiers (stabilisation de la hanche)\n- Correction technique (vérifier le turn-out, l'alignement du genou)\n\n**Prévention :**\nL'alignement genou-2e orteil pendant tous les pliés et réceptions est la règle de base — si le genou rentre, le travail de renforcement des fessiers et du VMO est prioritaire.",
    erreursCourantes: [
      "Continuer à danser avec douleur en espérant que 'ça passe' — le syndrome fémoro-patellaire devient chronique sans traitement.",
    ],
    conseils: [
      "Debout, fais un demi-squat en regardant ton genou dans un miroir. Va-t-il vers l'intérieur ? Si oui, c'est une compensation à corriger avec du renforcement des fessiers — et la source probable de tes douleurs.",
    ],
    difficulteInterne: 2,
    termesLies: ['entorse-cheville', 'renforcement-neuromusculaire', 'facteurs-risque'],
  },

  // ─── Santé globale ────────────────────────────────────────────────────────

  {
    id: 'equilibre-musculaire',
    nom: 'Équilibre musculaire',
    alias: ['déséquilibre musculaire', 'agoniste-antagoniste', 'muscles dominants'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'pole-dance'],
    categories: ['sante-prevention'],
    definition: "Rapport de force entre les muscles agonistes (qui réalisent un mouvement) et antagonistes (qui le freinent ou s'y opposent) — un déséquilibre chronique entre ces groupes est un facteur de risque de blessure important.",
    description: "La danse crée des déséquilibres musculaires caractéristiques — et les ignorer augmente significativement le risque de blessure.\n\n**Déséquilibres typiques du danseur classique :**\n- Mollets dominants / tibial antérieur faible\n- Ischio-jambiers raides / quadriceps forts (ou l'inverse)\n- Fléchisseurs de hanche raccourcis / fessiers inhibés\n- Adducteurs dominants / abducteurs faibles\n\n**Déséquilibres typiques du danseur de pole :**\n- Muscles du tirage (dos, biceps) surchargés / muscles du poussé sous-développés\n- Épaules en rotation interne (pectoraux courts, rotateurs externes faibles)\n\n**Déséquilibres typiques du danseur de heels :**\n- Mollets et ischio-jambiers raccourcis\n- Tibial antérieur et long extenseur des orteils sous-développés\n\n**Comment identifier ses déséquilibres :**\n- Test fonctionnel : squat unipodal, push-up, plank — observer les compensations\n- Bilan chez un kiné du sport ou du mouvement\n- Observation des douleurs récurrentes (elles pointent souvent vers des déséquilibres)\n\n**Correction :**\nRenforcer les muscles faibles *et* assouplir les muscles trop raides. Traiter les deux côtés du déséquilibre.",
    erreursCourantes: [
      "Renforcer uniquement les muscles déjà forts (ceux qu'on sent travailler facilement) — aggrave le déséquilibre.",
    ],
    conseils: [
      "Identifie le muscle que tu ressens le moins travailler dans tes exercices habituels. C'est probablement un muscle sous-développé. Consacre 10 minutes de chaque séance à l'activer spécifiquement.",
    ],
    difficulteInterne: 2,
    termesLies: ['renforcement-neuromusculaire', 'gainage-fonctionnel', 'souplesse-mobilite'],
  },

  {
    id: 'hygiene-vie',
    nom: "Hygiène de vie du danseur",
    alias: ['nutrition danseur', 'sommeil danseur', 'récupération globale', 'lifestyle athlète'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Ensemble des habitudes de vie (nutrition, sommeil, hydratation, gestion du stress) qui influencent la capacité d'entraînement, la récupération et le risque de blessure — le danseur est un athlète et doit se traiter comme tel.",
    description: "La santé du danseur ne se joue pas seulement en studio. Ce qui se passe hors du cours influence directement la qualité dans le cours.\n\n**La nutrition :**\n\n**Le déficit énergétique relatif du sport (RED-S) :**\nAnciennement 'triade de la femme athlète', le RED-S concerne tous les genres. Il décrit les conséquences d'un apport calorique insuffisant par rapport à la dépense — même non intentionnel.\n\nConséquences : fragilité osseuse (fractures de stress), troubles hormonaux, baisse des performances, immunité affaiblie, risque de blessure accru.\n\n**Signes d'alerte :** Fatigue chronique, blessures à répétition, humeur instable, difficultés de concentration, aménorrhée (absence de règles chez la femme).\n\n**Principes nutritionnels de base :**\n- Manger suffisamment (ne pas restreindre pour 'le poids')\n- Timing : manger dans les 30-60 minutes après l'effort\n- Protéines : 1,6-2,0 g/kg de poids pour la récupération musculaire\n- Hydratation : avant, pendant, après\n\n**Le sommeil :**\n- 7-9 heures pour les adultes actifs\n- Qualité : chambre sombre et fraîche, horaires réguliers\n- Impact : un sommeil insuffisant augmente le risque de blessure de 1,7x\n\n**La gestion du stress :**\nLe stress psychologique chronique augmente la perception de la douleur et ralentit la récupération. Des pratiques de gestion (méditation, sophrologie, journaling) ont une valeur réelle pour les danseurs.",
    erreursCourantes: [
      "Restreindre les calories pour contrôler le poids — surtout dangereux pour les danseurs qui dépensent beaucoup.",
    ],
    conseils: [
      "Si tu termines chaque cours épuisé(e) au point de ne pas pouvoir faire autre chose, si tu te blesses souvent, si ton humeur est instable — évalue ta nutrition et ton sommeil avant d'augmenter l'entraînement. La solution est peut-être là.",
    ],
    difficulteInterne: 2,
    termesLies: ['repos-recuperation', 'facteurs-risque', 'sante-mentale-danse'],
  },

  {
    id: 'sante-mentale-danse',
    nom: 'Santé mentale et danse',
    alias: ['bien-être psychologique', 'pression danse', 'burn-out danseur', 'perfectionnisme'],
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz', 'heels', 'cabaret', 'pole-dance', 'burlesque'],
    categories: ['sante-prevention'],
    definition: "Dimension psychologique de la santé du danseur — pression de la performance, perfectionnisme, image corporelle, identité liée à la danse, burn-out — et ressources pour maintenir un rapport sain à la pratique.",
    description: "La santé physique et mentale du danseur sont inséparables. La culture de la danse comporte des facteurs de risque psychologiques spécifiques.\n\n**Les pressions spécifiques à la danse :**\n\n**L'identité liée à la danse :**\nBeaucoup de danseurs définissent leur identité *à travers* leur pratique. Une blessure ou une période d'arrêt devient une crise identitaire — pas seulement une contrainte physique.\n\n**Le perfectionnisme :**\nLa culture de la danse valorise souvent le perfectionnisme. À haute dose, il devient contre-productif et source de souffrance.\n\n**L'image corporelle :**\nLa danse implique souvent un rapport intense et visible au corps. Certaines disciplines (notamment classique) ont longtemps valorisé des standards corporels étroits — avec des conséquences documentées sur la santé mentale.\n\n**La pression du regard :**\nDanser, c'est souvent être vu et évalué en permanence — par le professeur, les autres élèves, le public.\n\n**Signes d'alerte psychologiques :**\n- Culpabilité excessive lors des jours de repos\n- Dépendance à la validation externe\n- Anxiété avant les cours\n- Rapport à l'alimentation perturbé\n- Isolement social lié à la danse\n\n**Ressources et bonnes pratiques :**\n- Diversifier ses sources d'identité (ne pas *être* seulement un danseur)\n- Accepter l'imperfection comme partie du processus\n- Chercher un soutien psychologique si nécessaire (un thérapeute familier des milieux artistiques est un atout)\n- Maintenir des relations et des activités hors de la danse",
    erreursCourantes: [
      "Normaliser la souffrance psychologique comme 'normale en danse' — elle est fréquente, pas normale.",
    ],
    conseils: [
      "Demande-toi régulièrement : 'Est-ce que je danse parce que ça me fait du bien, ou parce que je ne sais pas ne pas danser ?' La réponse change selon les périodes — et elle mérite d'être honnête.",
    ],
    difficulteInterne: 2,
    termesLies: ['hygiene-vie', 'repos-recuperation', 'facteurs-risque'],
  },
]
