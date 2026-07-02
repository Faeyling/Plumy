import type { Terme } from '../schema'

export const termesUnite12: Terme[] = [

  // ─── L'abrazo et les fondamentaux ─────────────────────────────────────────

  {
    id: 'abrazo',
    nom: 'Abrazo',
    alias: ['abrazo', 'embrace tango', 'tenue tango', 'prise tango'],
    disciplines: ['tango-argentin'],
    categories: ['positions', 'concepts'],
    definition: "Enlacement qui constitue la connexion physique entre les deux partenaires dans le tango argentin — bien plus qu'une simple prise, c'est le canal de la communication entre meneur et suiveur, à travers lequel toute l'information chorégraphique est transmise.",
    description: "L'abrazo est le cœur du tango. J'ai mis des mois à comprendre ça vraiment — qu'un tango sans abrazo habité, c'est du tango vide.\n\n**L'abrazo : deux styles principaux**\n\n**L'abrazo ouvert (abierto) :**\nLes deux partenaires conservent un espace entre eux — les torses ne se touchent pas. Le bras droit du meneur est dans le dos du suiveur, la main gauche tient la main droite du suiveur, à hauteur de poitrine. Plus de liberté de mouvement individuel.\n\n**L'abrazo fermé (cerrado / milonguero) :**\nLes torses se touchent sur toute la hauteur — le point de contact est le sternum. C'est dans cet abrazo que le meneur peut guider le suiveur par le souffle et le poids du corps, sans même bouger les bras. C'est ce style qu'on voit dans les milongas de Buenos Aires traditionnelles.\n\n**La communication à travers l'abrazo :**\n- Le meneur initie par un transfert de poids, une inclinaison du buste\n- Le suiveur reçoit cette information et répond — avant que les pieds bougent\n- L'abrazo est un dialogue, pas un commandement\n\n**La qualité de l'abrazo :**\nUn bon abrazo est à la fois ferme et détendu — pas crispé, pas flottant. Comme tenir quelque chose de précieux sans l'écraser.",
    erreursCourantes: [
      "Abrazo trop rigide (bloquer la communication entre les partenaires).",
      "Abrazo trop lâche (perdre la connexion — le suiveur ne peut plus sentir les intentions du meneur).",
      "Bras du meneur qui pousse ou tire au lieu de guider par le corps.",
    ],
    conseils: [
      "Exerce-toi seul(e) à tenir un ballon imaginaire contre ta poitrine avec ton bras droit. Le tonus que tu mets dans ce bras — ni trop fort ni trop faible — c'est le tonus de l'abrazo.",
    ],
    etymologie: "De l'espagnol 'abrazo' (embrassement, accolade) — de 'abrazar' (embrasser, étreindre). Racine latine 'bracchium' (bras). Dans le tango, l'abrazo est à la fois le geste et sa signification.",
    difficulteInterne: 2,
    termesLies: ['eje', 'cabeceo', 'improvisacion-tango'],
  },

  {
    id: 'eje',
    nom: 'Eje',
    alias: ['axe du danseur', 'axis tango', 'eje tango', 'équilibre tango'],
    disciplines: ['tango-argentin'],
    categories: ['equilibres', 'concepts'],
    definition: "Axe vertical imaginaire qui traverse le corps du danseur de tango de la tête aux pieds — l'équilibre individuel propre à chaque partenaire, condition fondamentale pour danser ensemble sans s'appuyer mutuellement.",
    description: "L'eje, c'est le secret du tango que les débutants mettent du temps à comprendre. Dans les autres danses de couple, on peut parfois compenser un mauvais équilibre par la prise avec le partenaire. Dans le tango, ça ne marche pas — et ça s'entend immédiatement.\n\n**Pourquoi l'eje individuel est indispensable :**\nSi tu t'appuies sur ton partenaire pour trouver ton équilibre, tu lui voles de l'eje. Vous devenez codépendants — et vous ne pouvez plus danser. Deux eje stables créent l'espace pour danser ensemble.\n\n**Les caractéristiques d'un bon eje :**\n- Le poids est sur un pied à la fois (rarement les deux simultanément)\n- La ligne de la hanche, de l'épaule et de la tête est verticale\n- Les genoux sont légèrement fléchis (pas verrouillés)\n- Le plancher pelvien et le centre sont engagés sans tension visible\n\n**L'eje dans le mouvement :**\nTransférer de l'eje à l'eje — c'est la caminada. Chaque pas est un transfert complet de poids d'un axe à l'autre.\n\n**L'eje et le sol :**\nUne image que j'aime : ton eje commence dans le sol et monte à travers toi. Tu n'es pas debout sur le sol — tu pousses dans le sol pour t'élever.",
    erreursCourantes: [
      "S'appuyer sur le partenaire pour compenser un manque d'équilibre.",
      "Poids entre les deux pieds (indécision du poids) — toujours être sur un pied ou en transit vers l'autre.",
    ],
    conseils: [
      "Exercice fondamental : ferme les yeux, pose-toi sur un pied. Tu tiens 10 secondes sans bouger ? Maintenant ferme les yeux et tiens encore. Si tu oscilles, travaille ton eje avant d'aller en milonga.",
    ],
    etymologie: "De l'espagnol 'eje' (axe, essieu, pivot). En physique comme en tango, l'eje est le centre autour duquel tout tourne et depuis lequel tout s'organise.",
    difficulteInterne: 2,
    termesLies: ['abrazo', 'caminada', 'volcada'],
  },

  // ─── La marche et les déplacements ───────────────────────────────────────

  {
    id: 'caminada',
    nom: 'Caminada',
    alias: ['marche tango', 'caminata', 'la marche', 'walking tango'],
    disciplines: ['tango-argentin'],
    categories: ['deplacements', 'pas'],
    definition: "La marche dans le tango argentin — déplacement fondamental qui constitue l'ossature de toute improvisation. La caminada n'est pas une simple marche : c'est un transfert de poids complet, précis et musical, qui doit rester connecté à l'abrazo et au partenaire.",
    description: "On dit souvent que le tango, c'est une marche habillée. J'adoré cette formule depuis que je l'ai lue — et plus j'apprends, plus je la trouve vraie.\n\n**La caminada vers l'avant et vers l'arrière :**\nLe meneur avance généralement dans la ligne de danse, le suiveur recule. Mais ces rôles s'inversent constamment selon la figure. La caminada vers l'arrière est souvent plus difficile — on ne voit pas où on va.\n\n**Les caractéristiques de la caminada tango :**\n- Le pied arrive au sol par le talon (marche en avant) ou par l'avant du pied (marche en arrière)\n- Le transfert de poids est complet avant le prochain pas\n- Les genoux restent proches l'un de l'autre au passage\n- Le buste reste stable — les épaules ne bougent pas avec les hanches\n\n**La caminada comme conversation :**\nUne marche bien exécutée *parle*. Elle dit où va la danse, quel en est le tempo, quelle en est l'intention. Deux personnes qui marchent bien ensemble en tango font déjà quelque chose de beau — même sans aucune figure.\n\n**La ligne de danse :**\nSur une milonga, les couples circulent dans le sens inverse des aiguilles d'une montre autour de la piste. La caminada suit cette ligne collective — c'est une responsabilité commune.",
    erreursCourantes: [
      "Poids jamais complètement transféré (traîner le pied libre).",
      "Genoux qui s'écartent à chaque pas (perdre la propreté de la ligne).",
      "Se dépêcher — le tango n'a pas de tempo imposé, c'est toi qui choisis.",
    ],
    conseils: [
      "Marche seul(e) pendant 5 minutes en musique tango. Pas de figure — juste marcher, en avant, en arrière, en côté. Si ta marche est belle, tu peux aller en milonga. Si elle ne l'est pas, c'est là que tout commence.",
    ],
    etymologie: "De l'espagnol 'caminada' (marche, trajet à pied) — de 'caminar' (marcher, cheminer). En tango, la caminata/caminada est élevée au rang d'élément technique à part entière.",
    difficulteInterne: 1,
    termesLies: ['eje', 'abrazo', 'ocho'],
  },

  {
    id: 'ocho',
    nom: 'Ocho',
    alias: ['ocho adelante', 'ocho atrás', 'huit tango', 'figure en huit'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'deplacements'],
    definition: "Figure de tango argentin dans laquelle le suiveur trace un tracé en forme de huit sur le sol, en pivotant et marchant alternativement à gauche et à droite du meneur — l'ocho existe en version avant (adelante) et arrière (atrás), et est l'une des figures les plus fondamentales et les plus belles du tango.",
    description: "L'ocho m'a demandé des semaines. Pas parce qu'il est techniquement difficile — mais parce qu'il demande une dissociation entre le bas et le haut du corps que les danseurs classiques n'ont pas l'habitude de faire.\n\n**L'ocho atrás (arrière) :**\nLe suiveur marche en arrière à gauche du meneur, pivote sur la jambe de support (pivot), marche en arrière à droite du meneur, pivote à nouveau. Le tracé au sol forme un 8.\n\n**L'ocho adelante (avant) :**\nMême principe en marchant vers l'avant — le suiveur passe devant le meneur. Plus rare mais très élégant.\n\n**La dissociation :**\nClé technique de l'ocho : le bassin pivote tandis que le buste reste face au partenaire (ou légèrement en retard sur le pivot). Cette dissociation entre haut et bas du corps crée la fluidité et l'élégance.\n\n**La qualité du pivot :**\nLe pivot se fait sur la pointe du pied (ou l'avant du pied) — pas sur le talon. Le genou de la jambe de support est légèrement fléchi.\n\n**L'ocho cortado :**\nVersion coupée de l'ocho — le meneur interrompt l'élan de l'ocho pour changer de direction. Très utilisé dans la milonga (rythme).",
    erreursCourantes: [
      "Pivot trop tôt (avant d'avoir transféré le poids sur le pied) — perdre l'équilibre.",
      "Pas de dissociation (tout le corps pivote ensemble — l'ocho perd son élégance).",
      "Regarder le sol pendant l'ocho au lieu de maintenir le contact visuel/physique avec le partenaire.",
    ],
    conseils: [
      "Travaille l'ocho seul(e) d'abord : marche en arrière à gauche, pivote, marche en arrière à droite, pivote. Quand tu peux le faire les yeux fermés sans chercher ton équilibre, tu es prêt(e) pour l'ocho avec un partenaire.",
    ],
    etymologie: "De l'espagnol 'ocho' (huit) — en référence au tracé en forme de 8 que les pieds du suiveur dessinent sur le sol pendant la figure.",
    difficulteInterne: 2,
    termesLies: ['caminada', 'enrosque', 'molinete'],
  },

  {
    id: 'cruce',
    nom: 'Cruce',
    alias: ['croisé tango', 'cruce tango', 'la croisée', 'crossing'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'positions'],
    definition: "Moment dans le tango argentin où le suiveur croise une jambe devant l'autre — généralement la jambe gauche devant la droite — position emblématique qui marque une résolution temporaire de la tension dans la marche, souvent utilisée après un accompagnement latéral.",
    description: "Le cruce est l'un des moments les plus reconnaissables du tango — et l'un de ceux que les débutants font trop vite ou au mauvais moment. J'en ai fait la note dans mes carnets : le cruce ne se commande pas, il s'invite.\n\n**Le cruce dans la structure basique :**\nLe cruce arrive typiquement au cinquième pas de la structure de base (el básico), après que le meneur a guidé le suiveur à travers un pas latéral : le poids du suiveur s'installe sur le pied droit, et la jambe gauche se croise naturellement devant.\n\n**Comment le cruce est guidé :**\nLe meneur guide le cruce par une légère résistance dans l'abrazo — un 'stop' doux qui invite le suiveur à fermer ses jambes. Ce n'est pas une instruction directe : c'est une suggestion que le bon suiveur ressent.\n\n**La qualité du cruce :**\nLa jambe croisée est tendue, le pied pointé, le genou légèrement en avant. Le poids reste sur la jambe de support.\n\n**Le cruce comme pause :**\nLe cruce crée un moment de suspension dans la danse — une respiration, un point de ponctuation musicale. Beaucoup de danseurs marquent une petite pause sur le cruce pour jouer avec la musique.",
    erreursCourantes: [
      "Croiser sans attendre la guidance du meneur (anticiper le cruce avant d'en recevoir l'invitation).",
      "Genou du côté croisé qui s'effondre vers l'intérieur au lieu de pointer légèrement en avant.",
    ],
    conseils: [
      "Écoute l'abrazo. Le cruce arrive quand le meneur résiste légèrement — ne le fais pas par automatisme. Si tu danses avec quelqu'un qui ne guide pas le cruce, tu n'en fais pas.",
    ],
    etymologie: "De l'espagnol 'cruce' (croisement, intersection) — de 'cruzar' (croiser, passer d'un côté à l'autre). Le cruce tango est littéralement un croisement des jambes.",
    difficulteInterne: 1,
    termesLies: ['caminada', 'ocho', 'abrazo'],
  },

  // ─── Figures et ornements ─────────────────────────────────────────────────

  {
    id: 'parada',
    nom: 'Parada',
    alias: ['arrêt tango', 'parada tango', 'interception', 'stop tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'concepts'],
    definition: "Figure de tango argentin dans laquelle le meneur place son pied contre ou à côté du pied du suiveur pour interrompre son mouvement — la parada crée un moment de suspension et de dialogue entre les partenaires, souvent suivi d'un passage (pasada) ou d'un changement de direction.",
    description: "La parada est un moment de dialogue pur dans le tango. J'aime la décrire comme une question posée avec le pied — et la pasada (le passage) est la réponse.\n\n**Comment s'exécute la parada :**\nLe suiveur est en train d'avancer ou de reculer. Le meneur place son pied (talon ou avant du pied) contre le pied ou la cheville du suiveur, bloquant doucement le mouvement. Ce n'est pas un blocage physique brutal — c'est une invitation à s'arrêter.\n\n**La parada et la pasada :**\nCe qui suit la parada est souvent la pasada — le suiveur 'passe' au-dessus du pied du meneur en enjambant délicatement. Ce moment est d'une grande elegance.\n\n**La qualité de la parada :**\nContact doux — pas de force, pas de choc. La parada est une suggestion, pas une contrainte. Si le suiveur ne la sent pas, le meneur vérifie son abrazo.\n\n**Variations :**\n- Parada par derrière\n- Parada latérale\n- Double parada (les deux pieds du suiveur sont encadrés par les deux pieds du meneur)",
    erreursCourantes: [
      "Parada avec trop de force (choc des pieds — le tango n'est jamais brusque).",
      "Suiveur qui ne s'arrête pas (toujours écouter l'abrazo et les jambes du partenaire).",
    ],
    conseils: [
      "Pratique la parada avec ton partenaire sans musique d'abord. L'un avance, l'autre pose doucement son pied. Observez ensemble comment vous ressentez le contact — doux, précis, clair. Puis mettez la musique.",
    ],
    etymologie: "De l'espagnol 'parada' (arrêt, halte) — de 'parar' (arrêter, stopper). En tango, la parada est l'arrêt chorégraphique du mouvement du partenaire.",
    difficulteInterne: 2,
    termesLies: ['caminada', 'gancho', 'abrazo'],
  },

  {
    id: 'gancho',
    nom: 'Gancho',
    alias: ['crochet tango', 'hook tango', 'gancho tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'liaisons'],
    definition: "Figure de tango argentin dans laquelle un danseur envoie sa jambe en crochet (flex rapide du genou) entre les jambes du partenaire — figure expressive et spectaculaire qui exige une confiance absolue entre les deux partenaires et une invitation claire du meneur.",
    description: "Le gancho fait partie de ces figures qui impressionnent les spectateurs — et qui font peur aux danseurs la première fois. Mais bien fait, c'est une des figures les plus naturelles et les plus fluides du tango.\n\n**Comment le gancho se produit :**\nLe meneur crée un espace entre ses jambes en ouvrant sa posture. Le suiveur, par la dynamique de la marche et la guidance de l'abrazo, envoie sa jambe librement dans cet espace. La jambe qui gancho fait un coup de fouet rapide — genou fléchi, puis extension rapide et retour.\n\n**Le gancho du meneur / le gancho du suiveur :**\nLe gancho peut être exécuté par le suiveur (plus courant) ou par le meneur. Il peut aller entre les jambes du partenaire ou autour d'une jambe.\n\n**Conditions de sécurité :**\nLe gancho n'est jamais forcé — le pied qui gancho ne va jamais plus loin que l'espace que le partenaire a ouvert. La flexion du genou absorbe le mouvement. Ne jamais tendre complètement la jambe à l'intérieur des jambes du partenaire.\n\n**La qualité du gancho :**\nRapide et précis — comme un claquement. Suivi immédiatement d'un retour au sol et d'un eje retrouvé.",
    erreursCourantes: [
      "Gancho sans invitation du meneur (anticiper la figure sans qu'elle soit guidée).",
      "Jambe trop tendue pendant le gancho (risque de contact brusque avec le partenaire).",
      "Perte d'équilibre sur le pied de support pendant le gancho.",
    ],
    conseils: [
      "Pour apprendre le gancho en sécurité : exerce-toi seul(e) à faire la flexion du genou rapide et le retour, sans partenaire. Quand le mouvement est automatique et détendu, tu peux l'intégrer dans la danse.",
    ],
    etymologie: "De l'espagnol 'gancho' (crochet, hameçon) — image parfaite du mouvement de la jambe qui fait un crochet dans l'espace ouvert par le partenaire.",
    difficulteInterne: 3,
    termesLies: ['boleo', 'parada', 'abrazo'],
  },

  {
    id: 'boleo',
    nom: 'Boleo',
    alias: ['boleo tango', 'fouetté tango', 'volée tango', 'voleo'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'qualites-de-mouvement'],
    definition: "Ornement de tango argentin dans lequel la jambe libre exécute un mouvement de volée ou de fouetté rapide — généralement provoqué par un changement de direction soudain du meneur, qui crée une énergie centrifuge dans la jambe libre du suiveur.",
    description: "Le boleo est l'un des ornements les plus sensuels et les plus visuellement frappants du tango. Ce qui m'a le plus surpris quand j'ai appris ça : le boleo ne se décide pas vraiment — il *arrive* quand le mouvement est bien fait.\n\n**Le boleo bas (à ras du sol) :**\nLa jambe libre rase le sol dans un arc. Discret, utilisable en milonga même quand la piste est très peuplée. Plus respectueux des autres couples.\n\n**Le boleo haut (aérien) :**\nLa jambe libre monte — parfois jusqu'à la hauteur des hanches ou plus. Spectaculaire, mais réservé aux scènes dégagées. À utiliser avec conscience de l'espace autour de soi en milonga.\n\n**Comment le boleo se produit :**\nLe meneur initie un mouvement dans une direction, puis change de direction brusquement. L'énergie qui était en train de s'accumuler dans la jambe libre du suiveur est 'libérée' par ce changement — et produit le boleo naturellement.\n\n**Le boleo intentionnel :**\nLe suiveur peut amplifier ou diminuer le boleo selon son niveau d'improvisation et l'espace disponible. C'est là que commence l'adornement personnel.",
    erreursCourantes: [
      "Boleo qui part trop haut en milonga (risque de heurter un autre couple).",
      "Forcer le boleo au lieu de le laisser naître du mouvement — ça se voit et ça se sent.",
    ],
    conseils: [
      "Travaille les changements de direction rapides seul(e), jambe libre détendue. Observe ce qui se passe naturellement dans ta jambe quand tu changes de sens. C'est cette énergie naturelle que le boleo amplifie.",
    ],
    etymologie: "De l'espagnol 'boleo' ou 'voleo' — du verbe 'bolear' (faire voler, lancer). En tango, le boleo est la jambe qui vole dans un arc.",
    difficulteInterne: 3,
    termesLies: ['gancho', 'ocho', 'improvisacion-tango'],
  },

  {
    id: 'barrida',
    nom: 'Barrida',
    alias: ['barrida tango', 'balayage tango', 'sweep tango', 'arrastre'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'liaisons'],
    definition: "Figure de tango argentin dans laquelle un pied 'balaye' (barre) le pied du partenaire pour l'entraîner dans une nouvelle direction — le contact entre les deux pieds est maintenu tout au long du mouvement, créant un lien physique et visuel entre les deux danseurs.",
    description: "La barrida est une figure qui raconte quelque chose : deux corps assez proches pour que leurs pieds se parlent. J'ai une tendresse particulière pour elle — c'est discrete, elle ne saute pas aux yeux, mais elle transforme instantanément la qualité de la danse.\n\n**Comment s'exécute la barrida :**\nL'un des partenaires (souvent le meneur) glisse son pied contre le pied du partenaire et l'accompagne — sans soulever le pied, en maintenant un contact glissé sur le sol. Le pied 'accompagné' va là où le pied 'accompagnateur' l'emmène.\n\n**La qualité du contact :**\nLa barrida n'est pas un coup de pied — c'est un contact doux et maintenu. Les deux pieds restent en contact pendant tout le déplacement.\n\n**Variations :**\n- Le meneur balaie le pied du suiveur vers l'avant\n- Le meneur balaie le pied du suiveur de côté\n- Le suiveur balaie le pied du meneur (barrida 'inverse')\n\n**La barrida et la musicalité :**\nLa barrida prend du temps — elle se joue sur les phrases musicales longues, pas sur les accents rapides. C'est une figure de legato, pas de staccato.",
    erreursCourantes: [
      "Perdre le contact entre les pieds pendant le glissement.",
      "Trop de force — pousser le pied du partenaire au lieu de l'accompagner.",
    ],
    conseils: [
      "Commence par pratiquer la barrida avec ton propre pied sur le sol sans partenaire : glisse un pied contre l'autre, maintiens le contact, emmène-le. La sensation de ce contact glissé — c'est ce que tu cherches avec le partenaire.",
    ],
    etymologie: "De l'espagnol 'barrida' (balayage) — de 'barrer' (balayer, nettoyer). L'image du balai qui emporte quelque chose devant lui est exacte.",
    difficulteInterne: 3,
    termesLies: ['parada', 'sacada', 'abrazo'],
  },

  {
    id: 'sacada',
    nom: 'Sacada',
    alias: ['sacada tango', 'déplacement tango', 'displacement tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'deplacements'],
    definition: "Figure de tango argentin dans laquelle un danseur 'déplace' la jambe du partenaire en entrant dans l'espace que cette jambe venait d'occuper — une figure d'intrusion élégante qui crée des spirales et des géométries complexes dans la danse.",
    description: "La sacada est une figure que j'ai longtemps trouvé mystérieuse — jusqu'au jour où quelqu'un me l'a décrite comme 'voler la place que le pied vient de quitter'. Et là, tout est devenu clair.\n\n**Le principe de la sacada :**\nQuand le suiveur déplace une jambe d'un point A à un point B, il y a un bref instant où le point A est libre. La sacada, c'est le meneur qui entre dans ce point A juste à ce moment — déplaçant ainsi la jambe du suiveur par son propre mouvement.\n\n**La sacada n'est pas un choc :**\nBien exécutée, la sacada n'est pas perçue comme une poussée. Le suiveur *sent* l'entrer du partenaire et sa jambe est naturellement déplacée — comme si c'était son propre mouvement amplifié.\n\n**Sacadas de face et de côté :**\nLa sacada peut être exécutée face à la jambe du partenaire (sacada de frente) ou de côté. Elle peut viser la cuisse, le genou ou le mollet.\n\n**La sacada et la géométrie :**\nLes sacadas créent des spirales dans la danse — elles changent l'orientation des deux corps. Enchaînées, elles peuvent faire tournoyer les deux partenaires dans des mouvements complexes.",
    erreursCourantes: [
      "Entrer dans la sacada trop tôt (avant que le pied du partenaire soit parti).",
      "Forcer le déplacement de la jambe du partenaire (perdre le côté fluide de la figure).",
    ],
    conseils: [
      "Pour comprendre le timing de la sacada, observe les jambes de ton partenaire sans la musique. Vois le moment exact où le pied quitte le sol. C'est ce moment que tu cherches — ni avant, ni après.",
    ],
    etymologie: "De l'espagnol 'sacada' — du verbe 'sacar' (sortir, extraire, retirer). La sacada 'extrait' la jambe du partenaire de sa position en entrant dans l'espace qu'elle occupait.",
    difficulteInterne: 4,
    termesLies: ['barrida', 'molinete', 'ocho'],
  },

  {
    id: 'enrosque',
    nom: 'Enrosque',
    alias: ['enrosque tango', 'spirale tango', 'pivot enroulé', 'corkscrew tango'],
    disciplines: ['tango-argentin'],
    categories: ['tours', 'pas'],
    definition: "Ornement du meneur dans le tango argentin — pendant qu'il guide un molinete, le meneur pivote sur un pied tout en enroulant sa jambe libre autour de la jambe de support, créant une figure de tire-bouchon élégante et complexe.",
    description: "L'enrosque est l'ornement signature du meneur dans le molinete — et c'est une de celles que les suiveurs voient et admirent en milonga sans forcément savoir comment ça s'appelle. J'aime bien ça.\n\n**Quand l'enrosque se produit :**\nPendant que le suiveur tourne en molinete autour du meneur, celui-ci peut utiliser ce temps pour orner son pivot. L'enrosque se fait pendant que le meneur tourne sur place.\n\n**La technique :**\n1. Le meneur pivote sur un pied (l'eje est essentiel)\n2. La jambe libre s'enroule autour de la jambe de support — le pied peut passer devant ou derrière\n3. Le pivot continue, la jambe libre se déroule\n4. Le meneur retrouve une position neutre\n\n**La qualité de l'enrosque :**\nL'enrosque ne doit pas interférer avec le guidage du suiveur — le meneur continue à communiquer à travers son buste et ses bras même pendant l'ornement. C'est un défi de coordination.\n\n**L'enrosque comme improvisation :**\nLe meneur peut choisir de faire ou non un enrosque selon la musique, l'humeur, le niveau de concentration requis. Ce n'est jamais obligatoire.",
    erreursCourantes: [
      "Perdre le guidage du suiveur pendant l'enrosque (se concentrer sur son propre ornement au détriment de la connexion).",
      "Enrosque sans équilibre stable sur la jambe de support.",
    ],
    conseils: [
      "Apprends l'enrosque seul(e) jusqu'à ce qu'il soit automatique, avant de l'intégrer dans la danse avec un partenaire. L'ornement qui demande encore de l'attention consciente ne doit pas encore être dansé.",
    ],
    etymologie: "De l'espagnol 'enrosque' (enroulement, spirale) — de 'enroscar' (enrouler en spirale, visser). L'image du tire-bouchon (corkscrew en anglais) est souvent utilisée.",
    difficulteInterne: 4,
    termesLies: ['molinete', 'eje', 'improvisacion-tango'],
  },

  {
    id: 'molinete',
    nom: 'Molinete',
    alias: ['grapevine tango', 'moulin tango', 'molinete tango', 'girada'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'deplacements'],
    definition: "Figure de tango argentin dans laquelle le suiveur tourne autour du meneur en exécutant une séquence de pas répétée — pas croisé devant, pas latéral, pas croisé derrière, pas latéral — pendant que le meneur pivote ou reste stationnaire, guidant la rotation par l'abrazo.",
    description: "Le molinete est une figure pivotale du tango — au sens propre. C'est aussi une de celles qui révèlent le niveau de connexion entre deux danseurs. Un molinete bien dansé, c'est presque comme regarder une planète tourner autour de son étoile.\n\n**La séquence du molinete :**\nLe suiveur exécute cette séquence en tournant autour du meneur :\n1. Pas croisé avant (la jambe passe devant)\n2. Pas ouvert latéral\n3. Pas croisé arrière (la jambe passe derrière)\n4. Pas ouvert latéral\n... et on répète.\n\n**Le rôle du meneur :**\nLe meneur guide la vitesse et la direction du molinete par l'abrazo et son propre pivot. Il peut accélérer, ralentir, inverser. Il peut aussi orner avec un enrosque pendant que le suiveur tourne.\n\n**La qualité du molinete :**\nLes pas du molinete doivent être réguliers et de la même taille. Le suiveur maintient son eje tout au long de la rotation — pas question de s'appuyer sur le meneur pendant le tour.\n\n**Le molinete et la musique :**\nUn molinete peut durer 4 pas ou 40 selon l'inspiration du meneur. Sa durée est toujours musicale.",
    erreursCourantes: [
      "Pas inégaux (le molinete perd son harmonie visuelle).",
      "S'appuyer sur le meneur pendant la rotation au lieu de maintenir son propre eje.",
      "Ne pas dissocier entre le bas (qui tourne) et le haut (qui reste face au meneur).",
    ],
    conseils: [
      "Trace un cercle sur le sol. Entraîne-toi à faire la séquence du molinete autour de ce cercle : avant, côté, arrière, côté, avant... jusqu'à ce que ce soit fluide. Ensuite seulement, avec un partenaire.",
    ],
    etymologie: "De l'espagnol 'molinete' (petite roue, moulin à main) — référence à la rotation circulaire du suiveur autour du meneur, comme les pales d'un moulin.",
    difficulteInterne: 3,
    termesLies: ['enrosque', 'ocho', 'sacada'],
  },

  {
    id: 'volcada',
    nom: 'Volcada',
    alias: ['volcada tango', 'inclinaison avant', 'off-axis tango', 'tilt tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'liaisons'],
    definition: "Figure avancée de tango argentin dans laquelle le meneur crée une inclinaison en avant du suiveur — l'axe du suiveur quitte la verticale et se penche vers le meneur, qui supporte une partie du poids par l'abrazo, créant une figure de déséquilibre contrôlé.",
    description: "La volcada est l'une des figures les plus avancées et les plus délicates du tango. C'est une question de confiance absolue — tu demandes à quelqu'un de te laisser sortir de ton axe, et tu lui fais confiance pour te soutenir.\n\n**Le principe de la volcada :**\nNormalement, dans le tango, chaque danseur maintient son eje indépendant. Dans la volcada, le meneur 'invite' le suiveur à pencher son axe vers l'avant, vers lui. L'abrazo supporte cette inclinaison.\n\n**La nécessité de la confiance :**\nLe suiveur doit faire confiance au meneur pour le soutenir — et le meneur doit être capable de le faire. La volcada ne se tente pas sans un bon abrazo et une connexion établie.\n\n**La qualité de la volcada :**\nL'inclinaison est controlée et progressive — pas un effondrement soudain. Les deux partenaires gèrent ensemble l'équilibre partagé.\n\n**La sortie de la volcada :**\nLe meneur guide le retour du suiveur à la verticale avec la même précision qu'il a guidé l'entrée. La sortie est aussi importante que l'entrée.",
    erreursCourantes: [
      "Volcada sans préparation suffisante du partenaire (entrer trop vite dans l'inclinaison).",
      "Suiveur qui ne lâche pas vraiment son axe (retenir l'inclinaison par peur — ça crée une figure à moitié).",
    ],
    conseils: [
      "Avant de danser la volcada, parle-en avec ton partenaire hors musique. Testons ensemble le poids, le soutien, la confiance. La volcada est une figure qui se négocie avant d'être dansée.",
    ],
    etymologie: "De l'espagnol 'volcada' — de 'volcar' (renverser, pencher, basculer). La volcada est littéralement une bascule contrôlée du corps du suiveur.",
    difficulteInterne: 5,
    termesLies: ['eje', 'abrazo', 'sacada'],
  },

  // ─── Culture et contexte de la milonga ───────────────────────────────────

  {
    id: 'milonga',
    nom: 'Milonga',
    alias: ['milonga lieu', 'milonga musique', 'bal tango', 'soirée tango'],
    disciplines: ['tango-argentin'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Double signification dans le monde du tango argentin : 1) La milonga désigne la soirée de danse sociale où les tangos sont dansés — l'équivalent du bal pour le tango. 2) La milonga désigne aussi un style musical en 2/4, plus rapide que le tango, qui coexiste avec lui dans les soirées.",
    description: "La milonga est le cœur battant du monde du tango — et comprendre ce mot dans ses deux sens, c'est comprendre quelque chose d'essentiel sur cette culture.\n\n**La milonga comme lieu et événement :**\nUne milonga est une soirée de tango social, organisée dans une salle, souvent le soir ou la nuit. On y danse en couples, en suivant les conventions tacites du tango social (codigos). C'est à la milonga que le tango s'apprend vraiment — pas dans les cours.\n\n**L'atmosphère d'une milonga :**\nLa milonga est souvent un espace dim, avec une piste entourée de tables où s'assoient les danseurs entre les tandas. L'atmosphère est à la fois festive et recueillie — le tango est une danse sérieuse pour ceux qui le pratiquent.\n\n**La milonga comme musique et danse :**\nLe style musical 'milonga' est plus rapide que le tango standard, avec un rythme en 2/4 marqué. Les pas sont plus courts, le jeu de pieds plus rapide. C'est comme si le tango mettait un peu plus d'entrain — et beaucoup de danseurs adorent ça.\n\n**Les origines de la milonga :**\nAvant le tango, il y avait la milonga — un style musical des faubourgs de Buenos Aires à la fin du XIXe siècle. Le tango en est sorti, mais la milonga a survécu et coexiste avec lui.",
    erreursCourantes: [],
    conseils: [
      "Ta première milonga : arrive tôt, observe les codigos, danse les premiers temas avec quelqu'un que tu connais. Après quelques milongas, tu trouveras ton aise.",
    ],
    etymologie: "L'étymologie de 'milonga' est débattue — probablement d'origine bantoue, via le mot 'mulonga' qui aurait voyagé avec la traite atlantique au Río de la Plata. Certains la rattachent à l'argot lunfardo de Buenos Aires.",
    difficulteInterne: 1,
    termesLies: ['cabeceo', 'tanda', 'musicalidad-tango'],
  },

  {
    id: 'cabeceo',
    nom: 'Cabeceo',
    alias: ['invitation tango', 'invitation par le regard', 'nod tango', 'mirada'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Système d'invitation non-verbale traditionnel dans la milonga de Buenos Aires — le danseur qui veut inviter fait un léger signe de tête (cabeceo) vers le partenaire potentiel, qui répond par un hochement affirmatif (ou détourne le regard pour refuser). Ce rituel évite les refus embarrassants.",
    description: "Le cabeceo est une de ces choses que j'ai trouvées fascinantes dès que je les ai découvertes. C'est un système de politesse élaboré — une façon d'inviter qui protège la dignité de tout le monde.\n\n**Comment fonctionne le cabeceo :**\n1. Le danseur (meneur ou suiveur) croise le regard de la personne qu'il veut inviter\n2. Si le contact visuel s'établit, il incline légèrement la tête — le cabeceo\n3. Si l'autre accepte, il répond par un petit hochement de tête\n4. Les deux se retrouvent sur la piste\n5. Si l'autre détourne le regard, le refus est fait sans humiliation pour personne\n\n**La mirada :**\nAvant le cabeceo, il y a la mirada — le regard qu'on envoie pour signaler sa disponibilité et son intérêt. On ne cabeceo pas quelqu'un qui ne regarde pas.\n\n**Pourquoi ce système est élégant :**\nUne invitation verbale publique met le refus en scène — c'est gênant pour tout le monde. Le cabeceo permet de refuser sans que personne ne le sache. La dignité est préservée des deux côtés.\n\n**Dans les milongas modernes :**\nCertaines milongas contemporaines (surtout hors d'Argentine) acceptent les invitations verbales. Mais connaître le cabeceo reste une marque de respect envers la tradition.",
    erreursCourantes: [],
    conseils: [
      "En milonga, ne t'approche jamais physiquement de quelqu'un pour inviter avant d'avoir eu le cabeceo. Dans les milongas traditionnelles, ça passe très mal — et à raison.",
    ],
    etymologie: "De l'espagnol 'cabeceo' — de 'cabecear' (faire un signe de tête, hocher la tête) — de 'cabeza' (tête).",
    difficulteInterne: 1,
    termesLies: ['milonga', 'tanda', 'abrazo'],
  },

  {
    id: 'tanda',
    nom: 'Tanda',
    alias: ['tanda tango', 'série de tangos', 'set musical tango'],
    disciplines: ['tango-argentin'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Série de 3 à 4 morceaux du même orchestre et du même style jouée lors d'une milonga — la tanda est l'unité de base de la soirée. Entre les tandas, une courte pièce musicale neutre (la cortina) marque la fin de la tanda et invite à changer de partenaire.",
    description: "La tanda est une convention qui peut sembler arbitraire au départ — mais une fois qu'on la comprend, on réalise à quel point elle structure élégamment la soirée de tango.\n\n**La structure d'une milonga :**\nUne milonga est composée d'une succession de tandas séparées par des cortinas :\n- Tanda de tango (3–4 morceaux du même orchestre)\n- Cortina (30 secondes de musique non-tanguera)\n- Tanda de vals (valse tango — 3 morceaux)\n- Cortina\n- Tanda de milonga (rythme milonga — 3–4 morceaux)\n- etc.\n\n**L'engagement de la tanda :**\nAccepter d'inviter ou d'être invité(e) pour une tanda, c'est s'engager à danser toute la tanda ensemble — généralement 3–4 morceaux. On ne quitte pas son partenaire au milieu d'une tanda (sauf urgence).\n\n**La cortina :**\nLa cortina (rideau) est une courte musique non-tango entre les tandas. C'est le signal de changer de partenaire, de retourner à sa table, de se reposer. Les bons danseurs reconnaissent la cortina et ne cabeceo pas pendant elle.\n\n**Pourquoi les orchestre changent à chaque tanda :**\nDanser plusieurs morceaux avec le même orchestre permet aux partenaires de trouver une connexion musicale commune — chaque orchestre a un son distinct.",
    erreursCourantes: [],
    conseils: [
      "En milonga, écoute la cortina — tu la reconnaîtras parce que la musique change radicalement (souvent pop, jazz, ou musique neutre). C'est ton signal pour remercier ton partenaire, sourire, et retourner à ta place.",
    ],
    etymologie: "De l'espagnol 'tanda' (série, tour, ensemble) — le mot désigne en espagnol tout groupe homogène de choses qui vont ensemble. La cortina ('rideau') séparant les tandas vient du théâtre.",
    difficulteInterne: 1,
    termesLies: ['milonga', 'cabeceo', 'musicalidad-tango'],
  },

  // ─── Musicalité et improvisation ─────────────────────────────────────────

  {
    id: 'musicalidad-tango',
    nom: 'Musicalidad',
    alias: ['musicalité tango', 'musicalidad', 'interprétation musicale tango'],
    disciplines: ['tango-argentin'],
    categories: ['qualites-de-mouvement', 'concepts'],
    definition: "Capacité du danseur de tango à écouter, interpréter et incarner la musique — bien plus que suivre le rythme, la musicalidad implique de comprendre la structure, la phrase, l'émotion et les subtilités de chaque orchestration, et de les exprimer dans la danse.",
    description: "La musicalidad est peut-être la qualité la plus difficile à développer dans le tango — et la plus belle à observer. C'est ce qui distingue un bon danseur d'un danseur exceptionnel.\n\n**Ce que la musicalidad n'est pas :**\nCe n'est pas juste 'être dans le tempo'. Tout le monde peut suivre le tempo. La musicalidad, c'est avoir une conversation avec la musique.\n\n**Les couches de la musique tango :**\n- Le **tempo** (les batidas — les battements réguliers)\n- Le **rythme** (la structure en mesures)\n- La **mélodie** (ce que joue le violon ou l'accordéon)\n- La **structure de la phrase musicale** (8, 16 mesures)\n- Le **silence** (les moments où la musique s'arrête)\n- L **'orquestación** (la couleur particulière de chaque orchestre)\n\n**Les grandes orchestres et leurs personnalités :**\n- **D'Arienzo** : 'el rey del compás' — rythme fort, marqué, 'sec'\n- **Di Sarli** : élégance mélodique, legato, lyrisme\n- **Troilo** : émotion, sentiment, profondeur\n- **Pugliese** : complexité, syncopations, intensity dramatique\n\n**Développer sa musicalidad :**\nÉcouter beaucoup — hors de la danse. Écouter les enregistrements des orchestres, reconnaître leurs styles, sentir les phrases. La musicalidad se développe autant dans les oreilles que dans les jambes.",
    erreursCourantes: [
      "Ne marquer que le tempo de base sans entendre la mélodie et la phrase musicale.",
      "Ignorer les silences de la musique (les silences sont des invitations à ne pas bouger — ou à bouger très peu).",
    ],
    conseils: [
      "Choisis un enregistrement de Di Sarli et un de D'Arienzo. Écoute-les l'un après l'autre. Tu devrais sentir que ton corps veut bouger différemment sur chacun. C'est le début de la musicalidad.",
    ],
    difficulteInterne: 4,
    termesLies: ['tanda', 'milonga', 'improvisacion-tango'],
  },

  // ─── Niveau 0 — Fondations absolues ──────────────────────────────────────

  {
    id: 'postura-tango',
    nom: 'Posture du tango',
    alias: ['posture tango', 'port du corps tango', 'posicion tango', 'postura'],
    disciplines: ['tango-argentin'],
    categories: ['positions', 'concepts'],
    definition: "Organisation spécifique du corps dans le tango argentin — colonne allongée, bassin neutre, poids légèrement sur l'avant du pied, buste ouvert — qui permet à la fois le maintien de l'eje, la mobilité dans toutes les directions et la transmission claire des intentions dans l'abrazo.",
    description: `**Le terme — qu'est-ce que la posture du tango ?**

La posture n'est pas une rigidité — c'est une organisation. Dans le tango, le corps doit être disponible : capable de bouger dans n'importe quelle direction en réponse à une intention, à tout moment. Cette disponibilité ne s'improvise pas : elle vient d'une posture de base précise.

La posture du tango est différente de la posture de la vie quotidienne (avachie) et différente aussi de la posture militaire (rigide). Elle est entre les deux : tonique sans être crispée.

---

**Le mouvement — comment la construire ?**

**1. Les pieds :**
Parallèles, légèrement tournés vers l'extérieur (pas de "canard" prononcé). Le poids est sur l'avant du pied — talons légers sur le sol, mais sans se mettre sur les pointes. Imagine que tu es prêt(e) à partir dans n'importe quelle direction.

**2. Les genoux :**
Légèrement fléchis — jamais verrouillés. Des genoux verrouillés bloquent toute fluidité dans le transfert de poids.

**3. Le bassin :**
Neutre — ni antéversé (fesses vers l'arrière) ni rétroversé (bassin trop rentré). La colonne lombaire conserve sa courbure naturelle.

**4. La colonne et la poitrine :**
Allongée et ouverte. Imagine qu'un fil tire le sommet de ta tête vers le plafond. Les épaules descendent et s'ouvrent — pas en arrière de façon forcée, juste relâchées.

**5. La tête :**
Portée sur la colonne, regard à l'horizontale. Ni baissée (regard vers le sol) ni relevée de façon artificielle.

**Le test de la posture :**
Ferme les yeux. Bascule légèrement en avant, en arrière, de côté — reviens au centre. Là où tu n'as aucune tension musculaire pour rester debout ? C'est ton axe. C'est là que commence la posture du tango.`,
    erreursCourantes: [
      "Genoux verrouillés (empêche tout transfert de poids fluide).",
      "Épaules relevées ou crispées (tension qui remonte dans l'abrazo).",
      "Poids sur les talons (réaction lente — le tango se danse sur l'avant du pied).",
      "Colonne cambrée excessivement (faux port du corps qui fatigue le dos).",
    ],
    conseils: [
      "Exerce-toi à trouver ta posture sans musique, sans partenaire : debout, pied parallèles, genoux légèrement fléchis, buste ouvert. Tiens 30 secondes. Si tu te fatigues, c'est que tu forces quelque chose. La bonne posture tango ne demande presque aucun effort.",
    ],
    difficulteInterne: 1,
    termesLies: ['eje', 'abrazo', 'caminada'],
  },

  {
    id: 'compas-tango',
    nom: 'Compás',
    alias: ['compás', 'compas tango', 'pulsation tango', 'temps tango', 'le beat'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'culture-histoire'],
    definition: "La pulsation rythmique fondamentale de la musique de tango — le tempo régulier qui structure la danse. Danser 'en compás' signifie être en accord avec cette pulsation, soit en marquant chaque temps, soit en jouant avec elle par des syncopations et des contre-temps.",
    description: `**Le terme — qu'est-ce que le compás ?**

Le compás (prononcer "compasse") est le battement de cœur du tango. Avant de danser une seule figure, avant même de penser à l'abrazo ou à la caminada, il faut entendre le compás. C'est la première chose que j'explique à quelqu'un qui commence le tango : écoute le sol de la musique.

La musique de tango est généralement en 4/4 — quatre temps par mesure, avec des accents sur les temps 1 et 3. Mais ce qui caractérise le tango, c'est la façon dont chaque orchestre interprète ce tempo : D'Arienzo le marque fort et sec, Di Sarli le laisse couler en legato, Pugliese le brise et le recompose.

**La relation compás / danse :**
- Marquer *sur* le compás : chaque pas coïncide avec un temps fort — c'est la base
- Marquer *entre* les temps (syncopation, doble tiempo) : plus complexe, pour danseurs expérimentés
- La *pausa* : ne pas marquer le compás volontairement — s'arrêter sur un silence ou entre deux temps

---

**Le mouvement — comment l'entendre et le danser ?**

**1. Trouver le compás :**
Écoute une musique de tango. Ferme les yeux. Claque dans tes mains sur chaque battement fort. Tu as le compás.

**2. Marcher sur le compás :**
Fais un pas par temps fort. Gauche — droite — gauche — droite. Chaque transfert de poids complet sur un temps.

**3. Le doble tiempo (double temps) :**
Quand la musique permet des ornements rapides, le danseur expérimenté peut faire deux pas par temps (le pied libre passe avant de s'arrêter). Plus rapide, plus complexe.

**4. La sincopa (syncope) :**
Tomber sur les temps faibles de façon intentionnelle — créer une tension rythmique par rapport au compás. Réservé aux danseurs qui maîtrisent déjà le compás simple.

| Niveau | Rapport au compás |
|--------|------------------|
| Débutant | 1 pas = 1 temps fort |
| Intermédiaire | Pauses et doble tiempo |
| Avancé | Syncopations, contre-temps |`,
    erreursCourantes: [
      "Danser sans écouter le compás (bouger à son propre rythme intérieur).",
      "Perdre le compás quand une figure est complexe (la figure prend le dessus sur la musique).",
      "Accélérer ou ralentir au fil de la tanda (laisser dériver son propre tempo).",
    ],
    conseils: [
      "Exerce-toi à écouter du tango assis, sans danser, pendant 10 minutes par jour. Tape le compás sur ta cuisse. Quand tu l'entends naturellement sans effort — quand il est là avant même que tu décides de l'écouter — tu es prêt(e) à le danser.",
    ],
    etymologie: "De l'espagnol 'compás' (mesure musicale, battement) — du latin 'compassus' (fait avec le pas, mesuré). En musique comme en tango, le compás est littéralement la mesure qui organise tout.",
    difficulteInterne: 1,
    termesLies: ['musicalidad-tango', 'pausa-tango', 'caminada'],
  },

  {
    id: 'transfert-de-poids',
    nom: 'Transfert de poids',
    alias: ['transfert de poids tango', 'cambio de peso', 'weight transfer', 'transferencia de peso'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'pas'],
    definition: "Mécanisme fondamental par lequel le poids du corps passe d'une jambe à l'autre dans le tango argentin — condition première de tout déplacement, de toute figure et de toute communication dans l'abrazo. Un transfert incomplet est la source de la plupart des erreurs de débutants.",
    description: `**Le terme — qu'est-ce que le transfert de poids ?**

Tout dans le tango commence par un transfert de poids. Avant de faire un pas, avant de faire un ocho, avant de faire une parada — il y a un transfert de poids. C'est si fondamental qu'on finit par ne plus y penser, comme on ne pense plus à respirer. Mais au début, c'est là que tout se joue.

Dans le tango, à tout moment, ton poids doit être *quelque part précis* : sur le pied droit, ou sur le pied gauche, ou en transit entre les deux. Jamais suspendu dans le vague. Cette précision est ce qui rend la communication dans l'abrazo possible : le meneur sent exactement sur quelle jambe repose le suiveur, et sait quelle jambe est libre pour le prochain mouvement.

---

**Le mouvement — comment réaliser un transfert correct ?**

**Le transfert complet :**
Quand tu transfères le poids sur le pied gauche, 100% du poids est sur le pied gauche. Le pied droit est libre — il peut se soulever complètement sans que l'équilibre soit affecté.

**Tester ton transfert :**
Pose-toi sur le pied gauche. Soulève le pied droit du sol — 5 cm. Tu dois tenir sans bouger pendant 5 secondes. Si tu oscilles, ton transfert n'est pas complet.

**Le transfert dans la caminada :**
1. Poids sur pied gauche — pied droit libre
2. Pied droit avance
3. Pied droit arrive au sol (talon en avant)
4. Le poids bascule sur le pied droit — progressivement, pas en choc
5. Pied gauche libre — prêt pour le prochain pas

**Le transfert sur place (cambio de peso) :**
Les deux pieds sont au sol. Le poids glisse de l'un à l'autre sans qu'aucun pied ne bouge. C'est utilisé pour répondre à l'intention du meneur avant un déplacement, ou comme ornement sur le compás.

**Ce que le meneur communique par le transfert :**
Le meneur initie toujours un mouvement par son propre transfert de poids. Ce transfert se transmet dans l'abrazo — le suiveur le reçoit et répond. C'est tout le langage du tango en deux mots : transfert / réponse.`,
    erreursCourantes: [
      "Transfert incomplet (poids entre les deux pieds — le pied libre n'est pas vraiment libre, la figure suivante sera déséquilibrée).",
      "Transfert trop brusque (choc sur le pied d'arrivée au lieu d'un glissement progressif).",
      "Soulever la jambe libre avant d'avoir complété le transfert (déséquilibre).",
    ],
    conseils: [
      "Exercice quotidien de 2 minutes : debout, passe le poids de gauche à droite sur le compás d'une musique tango. Vérifie à chaque transfert que tu peux soulever le pied libre 5 cm. Quand c'est automatique, tout le reste devient plus simple.",
    ],
    difficulteInterne: 1,
    termesLies: ['eje', 'caminada', 'compas-tango'],
  },

  {
    id: 'roles-tango',
    nom: 'Roles dans le tango',
    alias: ['meneur suiveur tango', 'lead follow tango', 'rôles tango', 'conductor seguidor'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'culture-histoire'],
    definition: "Distinction fondamentale entre le meneur (qui propose les directions et figures) et le suiveur (qui répond, interprète et enrichit la proposition) dans la danse en couple du tango argentin — des rôles complémentaires et non hiérarchiques, de plus en plus dissociés du genre dans le tango contemporain.",
    description: `**Le terme — qu'est-ce que les rôles dans le tango ?**

Le tango est une danse à deux rôles distincts — mais pas à deux rôles inégaux. C'est une nuance qui me tient à cœur, et que je crois essentielle pour comprendre cette danse.

**Le meneur (conductor / líder) :**
Propose les directions, les figures, le tempo de la danse. Guide par l'abrazo, le transfert de poids, l'inclinaison du buste. N'impose pas — invite.

**Le suiveur (seguidor) :**
Reçoit les propositions du meneur, les interprète, les enrichit de ses adornements et de sa propre musicalité. Ce n'est pas un rôle passif — un bon suiveur *répond*, il ne subit pas.

**La direction et la réponse :**
Une bonne métaphore : le meneur pose une question, le suiveur donne une réponse. La réponse peut être précisément ce qui était attendu, ou légèrement différente — et le meneur intègre cette différence dans la question suivante. C'est un dialogue.

**Rôles et genre dans le tango contemporain :**
Traditionnellement, l'homme menait et la femme suivait. Le tango contemporain a largement dépassé cette convention. Beaucoup de danseurs apprennent les deux rôles — ce qui enrichit profondément la compréhension de l'un et de l'autre.

---

**Le mouvement — comment habiter chaque rôle ?**

**Habiter le rôle de meneur :**
- Initier par le propre corps (transfert de poids, inclinaison) — pas par les bras
- Proposer avec clarté, sans forcer
- Écouter la réponse du suiveur dans l'abrazo
- Adapter la proposition à ce que reçoit le suiveur

**Habiter le rôle de suiveur :**
- Maintenir son propre eje (ne pas anticiper)
- Rester dans l'instant — répondre à ce qui est proposé, pas à ce qu'on imagine
- Ajouter des adornements dans les espaces libres
- Envoyer du feedback au meneur par la qualité de la réponse`,
    erreursCourantes: [
      "Meneur qui guide par les bras au lieu du corps (manque de clarté et inconfort pour le suiveur).",
      "Suiveur qui anticipe les figures au lieu d'attendre la proposition (perd la connexion).",
      "Croire que le suiveur est passif — le suiveur est co-créateur de la danse.",
    ],
    conseils: [
      "Apprends les deux rôles, même si tu en préfères un. Après avoir passé une heure à suivre, tu meneras différemment. Et vice versa. Les meilleurs danseurs de tango que j'aie vus connaissent les deux rôles intimement.",
    ],
    etymologie: "Termes espagnols : 'conductor' ou 'líder' (celui qui conduit/mène) et 'seguidor' (celui qui suit). En tango traditionnel : 'hombre' et 'mujer' — une convention de genre aujourd'hui largement dépassée.",
    difficulteInterne: 1,
    termesLies: ['abrazo', 'improvisacion-tango', 'adorno-tango'],
  },

  {
    id: 'connexion-tango',
    nom: 'Connexion',
    alias: ['connexion tango', 'conexion', 'être à l\'écoute', 'présence tango'],
    disciplines: ['tango-argentin'],
    categories: ['concepts'],
    definition: "Qualité d'attention et de réceptivité mutuelle entre les deux partenaires dans le tango argentin — la connexion n'est pas un état qu'on crée une fois pour toutes, c'est une présence active, instant après instant, à travers l'abrazo, le poids et la musique.",
    description: `**Le terme — qu'est-ce que la connexion dans le tango ?**

La connexion est le mot que tout le monde utilise dans le tango, et que personne ne peut vraiment définir. J'ai essayé des dizaines de fois dans mes carnets — et voilà ce que j'ai retenu : la connexion, c'est quand tu sais exactement où est ton partenaire sans regarder.

Ce n'est pas de la magie. C'est de la physique — la transmission d'informations à travers l'abrazo, le sol partagé, le souffle commun. Mais quand elle fonctionne, ça ressemble à de la magie.

**La connexion a plusieurs canaux :**

**1. Le canal physique (l'abrazo) :**
Le contact entre les deux corps transmet les intentions du meneur et les réponses du suiveur. Un abrazo trop rigide ou trop lâche coupe ce canal.

**2. Le canal du poids (l'eje et le transfert) :**
La position du poids de chaque partenaire informe l'autre sur ce qui est possible. Le meneur sent si le suiveur est sur la jambe droite ou gauche — et choisit ses propositions en fonction.

**3. Le canal musical :**
Les deux partenaires entendent la même musique — et cette écoute commune crée une connexion au-delà du contact physique. Un couple qui écoute la même chose ensemble danse différemment d'un couple qui danse 'sur' la musique.

---

**Le mouvement — comment développer la connexion ?**

**Exercice 1 — la marche les yeux fermés :**
Les deux partenaires dans l'abrazo, yeux fermés. Le meneur commence à marcher. Le suiveur suit uniquement par le ressenti dans l'abrazo — sans voir. C'est l'exercice de connexion le plus basique et le plus révélateur.

**Exercice 2 — le dialogue de poids :**
Les deux partenaires face à face, mains posées l'une dans l'autre. L'un transfère légèrement son poids vers l'autre. L'autre sent et répond. Pas de danse — juste du poids qui voyage.

**Exercice 3 — la pausa partagée :**
En dansant, s'arrêter en même temps. Sentir si les deux corps s'arrêtent simultanément ou si l'un est toujours en mouvement quand l'autre est déjà immobile. La pausa partagée révèle la qualité de la connexion.

**Ce qui tue la connexion :**
- Penser aux figures à venir (sortir du présent)
- Regarder ses pieds (couper le contact visuel avec le partenaire)
- Tension dans l'abrazo (le signal se perd dans le bruit musculaire)`,
    erreursCourantes: [
      "Anticiper les figures (sortir du présent — la connexion n'existe que dans l'instant).",
      "Regarder ses pieds pendant la danse (couper la connexion visuelle et corporelle).",
      "Trop penser à la technique (quand la tête est dans les figures, le corps n'écoute plus).",
    ],
    conseils: [
      "Danse une tanda entière en te donnant comme seul objectif de ne jamais anticiper. Réponds uniquement à ce que tu reçois, jamais à ce que tu attends. Tu verras que c'est bien plus difficile qu'exécuter des figures — et infiniment plus beau.",
    ],
    difficulteInterne: 2,
    termesLies: ['abrazo', 'transfert-de-poids', 'improvisacion-tango'],
  },

  {
    id: 'codigos-milonga',
    nom: 'Códigos',
    alias: ['codigos', 'codes de la milonga', 'étiquette tango', 'códigos de la milonga'],
    disciplines: ['tango-argentin'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Ensemble des conventions non écrites qui régissent le comportement dans une milonga de tango argentin — codes de circulation sur la piste, d'invitation (cabeceo), de durée de danse (tanda), d'habillement, de remerciement et de respect mutuel entre danseurs.",
    description: `**Le terme — que sont les códigos ?**

Les códigos (codes) sont les règles implicites de la milonga. Personne ne te les donne par écrit quand tu entres. Tu les apprends en observant, en commettant quelques impairs, et en demandant à des danseurs expérimentés.

Ce n'est pas de la rigidité — c'est de la considération. Les códigos existent pour que tout le monde danse bien, en sécurité, dans le respect mutuel. Une milonga sans códigos ressemble à une route sans code de la route.

---

**Les códigos fondamentaux — ce qu'il faut savoir avant d'y aller**

**1. La circulation sur la piste :**
On circule dans le sens inverse des aiguilles d'une montre (antihoraire). Les couples suivent cette ligne de danse (ronda). On ne coupe pas à travers la piste. Les couples avancent progressivement — on ne s'arrête pas longtemps au même endroit sans raison.

**2. L'invitation par cabeceo :**
Dans les milongas traditionnelles, on invite par le regard (cabeceo), pas en s'approchant physiquement. C'est le código le plus important et souvent le premier à apprendre.

**3. La tanda — on danse toute la série :**
Accepter d'être invité(e) pour une tanda, c'est s'engager pour toute la tanda (3–4 morceaux). On ne quitte pas son partenaire au milieu d'une tanda sauf urgence absolue.

**4. La cortina — on change de partenaire :**
À la cortina (musique neutre entre deux tandas), on remercie son partenaire et on retourne s'asseoir. On ne reste pas sur la piste pendant la cortina.

**5. La conversation sur la piste :**
On ne parle pas beaucoup sur la piste. La danse est la conversation. Si on a quelque chose à dire, on attend la fin de la tanda.

**6. La sécurité des autres couples :**
On fait attention aux couples autour de soi — les figures qui prennent beaucoup d'espace (boleos hauts, ganchos) ne se font pas en milonga bondée.

**7. Remercier son partenaire :**
À la fin de la tanda, on se remercie mutuellement. C'est simple, sincère, toujours nécessaire.

| Niveau de milonga | Códigos habituellement respectés |
|-------------------|----------------------------------|
| Milonga traditionnelle (Buenos Aires) | Tous, très strictement |
| Milonga intermédiaire | La plupart, avec souplesse |
| Milonga débutants / practica | Codes simplifiés, ambiance plus détendue |`,
    erreursCourantes: [],
    conseils: [
      "Avant ta première milonga, observe 30 minutes sans danser. Regarde comment les gens s'invitent, comment ils circulent, comment ils se remercient. Tu apprendras plus en observant une demi-heure qu'en lisant toutes les listes de códigos du monde.",
    ],
    etymologie: "De l'espagnol 'códigos' (codes, lois non écrites) — pluriel de 'código'. Dans le tango rioplatense, les códigos sont la tradition orale de savoir-vivre en milonga.",
    difficulteInterne: 1,
    termesLies: ['cabeceo', 'tanda', 'milonga'],
  },

  {
    id: 'vals-tango',
    nom: 'Vals cruzado',
    alias: ['vals tango', 'valse tango', 'vals cruzado', 'tango waltz'],
    disciplines: ['tango-argentin'],
    categories: ['culture-histoire', 'concepts'],
    definition: "Style musical et chorégraphique joué dans les milongas de tango — une valse en 3/4 interprétée avec les techniques et la connexion du tango argentin, plus légère et aérienne que le tango standard, caractérisée par une fluidité continue et une musicalité valsée.",
    description: `**Le terme — qu'est-ce que le vals dans le monde du tango ?**

Dans une milonga, on joue trois types de musique : le tango (en 4/4), le vals (valse en 3/4) et la milonga (en 2/4 rapide). Chacun a son atmosphère, sa façon de se danser, son énergie. Le vals, c'est souvent ma préférée à écouter — il y a quelque chose de plus aérien, de plus doux.

Le vals du tango n'est pas une valse classique. On ne tourne pas en rond comme en valse viennoise. On utilise les mêmes techniques que le tango — l'abrazo, l'eje, la caminada, les ochos — mais dans un flux en 3/4 qui change tout.

**L'histoire du vals dans le tango :**
La valse est arrivée en Argentine avec les immigrés européens au XIXe siècle. Les Argentins l'ont intégrée dans leur culture tango — en gardant la connexion de l'abrazo et l'improvisation, mais en adoptant le rythme valsé. Les grands orchestres de tango (D'Arienzo, Di Sarli, Troilo) ont tous enregistré des vals.

---

**Le mouvement — comment danser sur le vals ?**

**Le rythme en 3/4 :**
Le vals a trois temps par mesure (1-2-3, 1-2-3) avec un accent fort sur le 1. Le mouvement est continu — pas de pauses aussi longues qu'en tango standard.

**La caminada en vals :**
Les pas sont légèrement plus glissés, plus fluides. On suit le flux de 3 temps — deux fois plus fluide que le tango en 4/4.

**Les ochos en vals :**
Les ochos s'enchaînent naturellement dans le rythme à 3 temps — le pivot et le pas se distribuent naturellement sur les 3 temps.

**Le molinete en vals :**
Le molinete est particulièrement beau en vals — la rotation continue épouse parfaitement la continuité du 3/4.

**La légèreté du vals :**
Le vals appelle une légèreté dans le corps que le tango standard n'exige pas toujours. Les pas sont un peu plus légers, le genou un peu plus souple, la continuité du mouvement jamais interrompue.

| Musique | Temps | Énergie | Spécificités |
|---------|-------|---------|--------------|
| Tango | 4/4 | Dramatique, contrasté | Pauses, accents forts |
| Vals | 3/4 | Fluide, aérien | Continuité, légèreté |
| Milonga | 2/4 | Vif, rythmique | Rapidité, habanera |`,
    erreursCourantes: [
      "Danser le vals comme du tango standard (s'arrêter au mauvais moment, perdre le flux de 3 temps).",
      "Trop marquer le 1 et négliger les 2 et 3 (perdre la fluidité valsée).",
    ],
    conseils: [
      "Écoute du vals de tango en fermant les yeux et en balançant légèrement le corps. Sens le 1-2-3. Quand tu l'entends naturellement, danse. La fluidité vient de l'oreille avant de venir des pieds.",
    ],
    etymologie: "De l'espagnol 'vals' (valse) — de l'allemand 'Walzer'. Le 'cruzado' (croisé) fait référence aux pas croisés caractéristiques de certains styles de vals tango.",
    difficulteInterne: 2,
    termesLies: ['compas-tango', 'milonga', 'musicalidad-tango'],
  },

  // ─── Niveau 1 — Premiers pas en milonga ───────────────────────────────────

  {
    id: 'salida-tango',
    nom: 'Salida',
    alias: ['salida tango', 'ouverture tango', 'séquence de base', 'la sortie'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'deplacements'],
    definition: "La 'sortie' dans le tango argentin — séquence d'ouverture qui permet au couple de commencer à se déplacer depuis l'abrazo stationnaire. La salida n'est pas un enchaînement figé : c'est un point de départ, une façon de 'sortir' de l'immobilité pour entrer dans la danse.",
    description: `**Le terme — qu'est-ce que la salida ?**

La salida (littéralement : la sortie) est le premier mouvement collectif du couple dans le tango. C'est l'instant où deux personnes qui se tiennent dans un abrazo décident, ensemble, de commencer à danser.

Dans les cours de tango, la salida est souvent enseignée comme une séquence précise de 8 temps (la 'salida básica') — un outil pédagogique pour que les débutants aient une structure à partir de laquelle explorer. En milonga, les danseurs expérimentés ne pensent plus à la salida comme une séquence — c'est simplement le début de leur conversation.

**La salida básica (structure pédagogique) :**
La séquence de 8 temps enseignée dans les cours :

| Temps | Meneur | Suiveur |
|-------|--------|---------|
| 1 | Pas gauche en arrière | Pas droit en avant |
| 2 | Pas droit latéral | Pas gauche latéral |
| 3 | Pas gauche croisé (avant croisé du suiveur — le cruce) | Cruce |
| 4 | Pas droit en avant | Pas gauche en arrière |
| 5 | Pas gauche en avant | Pas droit en arrière |
| 6 | Pas droit latéral | Pas gauche latéral |
| 7 | Rapprocher le pied gauche (résolution) | Résolution |
| 8 | Fermeture — retour au parallèle | Fermeture |

---

**Le mouvement — comment initier une salida ?**

**La préparation (la preparación) :**
Avant de bouger, le meneur signal sa présence dans l'abrazo — un léger approfondissement de la connexion. Le suiveur sent ce signal et se prépare. Cette préparation peut prendre 1 à 3 secondes.

**L'invitation :**
Le meneur fait un léger transfert de poids vers l'arrière — son poids bascule sur le pied droit. Dans l'abrazo, le suiveur sent cet appel vers l'avant. Le premier pas est né.

**La qualité de la salida :**
La salida doit être musicale — elle naît sur le compás, pas entre les temps. Écouter la musique avant de bouger.`,
    erreursCourantes: [
      "Partir sans préparation (commencer à bouger sans signal préalable dans l'abrazo).",
      "Traiter la salida comme une séquence mécanique à exécuter — elle doit naître du dialogue dans l'abrazo.",
      "Ne pas attendre le bon moment musical pour initier.",
    ],
    conseils: [
      "La salida la plus belle que j'aie vue dansée durait 30 secondes juste en préparation — le couple qui attendait le bon moment de la musique. Quand ils ont enfin bougé, la salle a retenu son souffle. Prends ton temps.",
    ],
    etymologie: "De l'espagnol 'salida' (sortie) — de 'salir' (sortir). En tango, la salida est la sortie de l'immobilité vers la danse.",
    difficulteInterne: 1,
    termesLies: ['caminada', 'cruce', 'transfert-de-poids'],
  },

  {
    id: 'pausa-tango',
    nom: 'Pausa',
    alias: ['pause tango', 'pausa', 'el silencio', 'la tenue'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Moment d'immobilité intentionnelle dans le tango — les deux partenaires s'arrêtent de bouger tout en restant dans l'abrazo. La pausa n'est pas un oubli ou une hésitation : c'est une décision musicale, un espace de dialogue qui peut durer une fraction de seconde ou plusieurs mesures.",
    description: `**Le terme — qu'est-ce que la pausa ?**

La pausa est l'un des outils les plus puissants — et les plus mal compris — du tango. Un débutant pense que s'arrêter dans la danse est une faute, une perte de tempo, un trou. Un danseur expérimenté sait que c'est parfois le moment le plus fort de toute la tanda.

Dans le tango, le silence de la musique invite la pausa. Le crescendo d'une phrase musicale peut appeler une pausa au sommet, avant la résolution. Un changement harmonique soudain peut figer les deux corps pour laisser la musique parler seule.

La pausa, c'est la respiration du tango. Et comme la respiration, elle est toujours là — même quand on ne la voit pas.

---

**Le mouvement — comment danser une pausa ?**

**Entrer en pausa :**
Le meneur ralentit progressivement ou s'arrête sur un temps fort. Dans l'abrazo, le suiveur reçoit ce signal — une absence d'invitation à bouger — et s'arrête aussi. La pausa n'est jamais brusque.

**Être en pausa :**
Les deux partenaires sont immobiles, dans l'abrazo. Mais l'énergie ne s'effondre pas. L'eje est maintenu. La connexion est vivante. Les yeux sont ouverts — sur la musique, sur le partenaire, sur la salle.

**Sortir de la pausa :**
Le meneur reprend le fil musical. Un léger transfert de poids, une légère inclinaison du buste — et la danse recommence. La pausa se termine comme elle a commencé : avec clarté.

**La durée de la pausa :**
Elle peut durer un temps, une mesure, quatre mesures. Il n'y a pas de règle — il y a l'oreille du meneur et la musique.

**La pausa et les adornements :**
La pausa est souvent l'espace où le suiveur ajoute des adornements (petits ornements des pieds) — pendant que les deux corps sont immobiles, les pieds du suiveur peuvent danser en miniature.`,
    erreursCourantes: [
      "Pausa qui 'dégonfle' — l'énergie disparaît et la connexion avec le partenaire se coupe.",
      "Rompre la pausa avant que la musique l'invite (trop impatient de bouger).",
      "Confondre pausa choisie et hésitation non voulue — l'une est une décision, l'autre un problème.",
    ],
    conseils: [
      "La prochaine fois que tu danses, essaie de faire une pausa de 4 temps sur la phrase musicale la plus forte de la tanda. Tiens l'abrazo vivant, l'eje stable. Vois ce que ça fait dans ton corps — et dans celui de ton partenaire.",
    ],
    etymologie: "De l'espagnol 'pausa' (pause, arrêt momentané) — du latin 'pausa', lui-même du grec 'pausis' (cessation). Dans la musique classique et le tango, la pause est un élément rythmique à part entière.",
    difficulteInterne: 2,
    termesLies: ['compas-tango', 'musicalidad-tango', 'adorno-tango'],
  },

  {
    id: 'apilado',
    nom: 'Apilado',
    alias: ['apilado', 'style milonguero', 'abrazo collé', 'contact chest'],
    disciplines: ['tango-argentin'],
    categories: ['positions', 'concepts'],
    definition: "Style d'abrazo caractéristique des milongas traditionnelles de Buenos Aires — le couple s'appuie légèrement l'un vers l'autre en partageant un point de contact thoracique, créant un contre-appui mutuel qui permet une communication extrêmement fine sans aucun signal des bras.",
    description: `**Le terme — qu'est-ce que l'apilado ?**

L'apilado (de 'apilar' : empiler, appuyer) est plus qu'un style de tenue — c'est une philosophie du tango. C'est le style des vieux milongueros de Buenos Aires, né dans les espaces exigus des milongas bondées où il n'y avait pas la place pour les bras levés.

Dans l'apilado, les deux partenaires s'inclinent légèrement l'un vers l'autre — créant un contre-appui entre leurs thorax. Ce n'est pas un appui de tout le poids — c'est une connexion, un point de contact partagé. Et c'est à travers ce point de contact que toute la communication passe.

L'apilado est souvent opposé au style 'salon' (abrazo ouvert, plus de distance entre les torses). Les deux sont valides — ce sont des choix esthétiques et musicaux.

---

**Le mouvement — comment trouver l'apilado ?**

**L'inclinaison partagée :**
Le meneur s'incline légèrement vers l'avant (environ 5°) — pas en avançant le bassin, mais en portant tout le corps légèrement en avant. Le suiveur fait de même, créant un contre-appui au niveau du sternum.

**Le point de contact :**
Le contact se fait sternum contre sternum (ou sternum du suiveur contre le haut de l'épaule du meneur selon les tailles). Ce contact doit être doux et constant — ni trop fort (pousser), ni trop léger (perdre la connexion).

**Maintenir l'eje dans l'apilado :**
C'est le défi : même dans l'apilado, chaque partenaire maintient son propre eje. L'inclinaison est partagée — pas unilatérale. Si le meneur s'incline et que le suiveur reste vertical, il n'y a pas d'apilado, juste une chute en avant du meneur.

**La marche en apilado :**
L'apilado change la caminada : les pas sont plus courts, plus proches du sol, plus intimes. Le couple se déplace presque comme une seule entité.

**Sur les pistes bondées :**
L'apilado est parfait pour les milongas où l'espace est réduit — les bras sont bas, le couple est compact, on peut naviguer entre les autres couples avec précision.`,
    erreursCourantes: [
      "S'appuyer de tout son poids sur le partenaire (perdre son propre eje).",
      "Inclinaison unilatérale (l'un s'incline, l'autre reste vertical — déséquilibre).",
      "Raideur dans le contact thoracique (bloquer la communication qui passe par ce point).",
    ],
    conseils: [
      "Pour trouver l'apilado, mets-toi face à un mur. Incline-toi légèrement jusqu'à sentir le mur. Maintiens cet angle — c'est ton eje en apilado. Maintenant imagine le mur qui respire, qui bouge. C'est ton partenaire.",
    ],
    etymologie: "De l'espagnol 'apilado' (empilé, appuyé) — de 'apilar' (empiler, mettre l'un contre l'autre). L'image est celle de deux corps légèrement appuyés l'un sur l'autre.",
    difficulteInterne: 2,
    termesLies: ['abrazo', 'eje', 'postura-tango'],
  },

  {
    id: 'paso-lateral',
    nom: 'Paso lateral',
    alias: ['pas latéral tango', 'paso lateral', 'pas de côté tango', 'side step tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'deplacements'],
    definition: "Pas de côté dans le tango argentin — déplacement horizontal sur la ligne de danse ou en perpendiculaire à elle, fondamental dans la structure de base et dans de nombreuses figures. Le pas latéral est souvent le premier pas vers une figure, ou la résolution après une phrase.",
    description: `**Le terme — qu'est-ce que le paso lateral ?**

Le paso lateral est l'un des trois pas fondamentaux du tango avec le pas en avant et le pas en arrière. Dans la salida básica, le deuxième pas du meneur est un pas latéral — c'est souvent le premier mouvement clairement guidable qu'un débutant apprend à recevoir.

Mais le paso lateral n'est pas qu'un pas 'de transition' — c'est un outil chorégraphique à part entière. On peut jouer des balancés latéraux, créer des oscillations d'une jambe à l'autre, improviser des changements de poids latéraux sur le compás.

---

**Le mouvement — comment réaliser un paso lateral correct ?**

**Pour le meneur :**
1. Poids sur pied gauche, pied droit libre
2. Le pied droit s'ouvre latéralement — sans croiser, à une largeur d'épaule
3. Le poids transfère progressivement sur le pied droit
4. Le pied gauche suit si une résolution est souhaitée, ou reste libre pour le pas suivant

**Pour le suiveur :**
Le suiveur reçoit l'invitation au pas latéral par une légère ouverture de l'abrazo — le meneur 'ouvre' légèrement le côté droit du cadre. La direction est claire : côté.

**La qualité du paso lateral :**
- Le pied qui s'ouvre glisse sur le sol — il ne saute pas
- Les genoux restent légèrement fléchis pendant le glissement
- Le corps reste vertical — on ne s'incline pas de côté
- Le transfert de poids est complet sur le pied d'arrivée

**Le balancé latéral (rebote) :**
Le meneur guide un pas latéral puis immédiatement l'inverse — un mouvement oscillant d'un pied à l'autre sur le compás. C'est un des premiers jeux rythmiques qu'on peut faire dès le niveau débutant.

**Le paso lateral et la piste :**
Le pas latéral peut se faire dans la ligne de danse (vers la gauche pour circuler) ou en perpendiculaire (vers le centre ou le mur). Le meneur choisit la direction selon l'espace disponible sur la piste.`,
    erreursCourantes: [
      "Pas trop large (perte d'équilibre, surtout avec un partenaire).",
      "Pied qui saute plutôt que glisse (manque de fluidité).",
      "Transfert incomplet (poids entre les deux pieds après le pas).",
    ],
    conseils: [
      "Exerce-toi au paso lateral seul(e) en suivant une ligne sur le sol. Glisse, transfère, glisse, transfère. Le pied d'envoi doit être complètement vide avant que le pied d'arrivée soit complètement plein. Aucun temps entre les deux.",
    ],
    difficulteInterne: 1,
    termesLies: ['caminada', 'transfert-de-poids', 'salida-tango'],
  },

  {
    id: 'cambio-de-peso-en-place',
    nom: 'Cambio de peso',
    alias: ['cambio de peso', 'changement de poids', 'weight change tango', 'transfert sur place'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'concepts'],
    definition: "Transfert de poids d'une jambe à l'autre sans déplacement des pieds dans le tango argentin — les deux pieds restent au sol pendant que le poids glisse de l'un à l'autre. Figure minimale et fondamentale, utilisée pour répondre au partenaire, marquer le compás ou préparer une direction.",
    description: `**Le terme — qu'est-ce que le cambio de peso en place ?**

Le cambio de peso (changement de poids) est la figure la plus petite du tango — et peut-être la plus importante. C'est ce qui se passe quand le meneur propose un changement de poids au suiveur sans bouger de sa place.

Dans les cours, on l'apprend souvent tardivement parce qu'il n'est pas spectaculaire. Pourtant, c'est l'outil qui permet de commencer à jouer avec le compás sans bouger dans l'espace, d'ajuster la position dans l'abrazo, de préparer une figure dans une direction imprévue.

Un bon danseur de tango utilise le cambio de peso constamment — sans que le spectateur le voie. C'est de l'invisible qui sert à tout.

---

**Le mouvement — comment exécuter un cambio de peso correct ?**

**La position de départ :**
Les deux pieds sont au sol, écartés d'une largeur naturelle (pas trop larges). Le poids est entièrement sur un seul pied — disons le gauche.

**Le transfert :**
1. Le poids glisse progressivement vers le pied droit
2. Les pieds ne bougent pas
3. Le genou gauche se relâche légèrement (pied gauche libre)
4. Le genou droit absorbe le poids (poids sur pied droit)

**La qualité du transfert :**
Le cambio de peso ne doit pas être visible de loin — c'est un mouvement interne. Si les épaules basculent d'un côté à l'autre, c'est trop visible.

**Le cambio de peso sur le compás :**
Le meneur peut guider des changements de poids successifs sur chaque temps du compás — l'équivalent de 'taper du pied' avec tout le corps, intérieurement. C'est une façon de marquer la musique sans bouger dans l'espace.

**Le cambio de peso comme signal de départ :**
Avant de commencer une figure, le meneur fait souvent un cambio de peso sur le côté 'opposé' à la direction souhaitée. Ça crée une préparation claire dans l'abrazo.

**Exercice de base :**
Musique tango. Reste debout, les deux pieds au sol. Transfère le poids d'un pied à l'autre sur chaque temps fort. Gauche → droite → gauche → droite. Tu viens de marquer le compás avec ton poids sans bouger de place.`,
    erreursCourantes: [
      "Trop visible (les épaules basculent — le transfert doit être interne, pas extérieur).",
      "Pieds qui glissent ou se soulèvent (les pieds restent au sol pendant tout le transfert).",
      "Transfert incomplet (rester entre les deux pieds — le poids doit arriver entièrement).",
    ],
    conseils: [
      "Le test du cambio de peso : après le transfert, soulève le pied qui vient de se vider — 5 cm, sans effort. Si tu peux le faire sans déséquilibre, le transfert est complet.",
    ],
    difficulteInterne: 1,
    termesLies: ['transfert-de-poids', 'compas-tango', 'salida-tango'],
  },

  {
    id: 'resolucion-tango',
    nom: 'Resolución',
    alias: ['résolution tango', 'resolución', 'fermeture tango', 'close tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'concepts'],
    definition: "Phrase de clôture dans le tango argentin — séquence de 2 à 3 pas qui referme la danse après une figure, ramenant les deux partenaires dans une position stable et parallèle. La resolución marque la ponctuation d'une phrase chorégraphique et crée un moment de repos avant la phrase suivante.",
    description: `**Le terme — qu'est-ce que la resolución ?**

Si la salida est le début d'une phrase tango, la resolución en est la fin. C'est le retour au repos, la virgule ou le point entre deux idées chorégraphiques.

La resolución est souvent enseignée dans le cadre de la salida básica — c'est les derniers pas de la séquence (temps 6, 7, 8). Mais dans la danse improvisée, elle peut arriver à n'importe quel moment — après un ocho, après un molinete, après une parada — quand le meneur sent que c'est le bon moment de conclure une phrase.

Comprendre la resolución, c'est commencer à penser en *phrases* dans le tango. Pas en pas isolés. Pas en figures. En phrases musicales avec un début, un développement et une conclusion.

---

**Le mouvement — comment exécuter une resolución ?**

**La resolución standard :**

| Temps | Meneur | Suiveur |
|-------|--------|---------|
| 1 | Pas droit latéral (ouverture) | Pas gauche latéral (côté opposé) |
| 2 | Pied gauche rejoint le pied droit (fermeture) | Pied droit se ferme sans croiser |
| 3 | Transfert final — les pieds sont parallèles | Parallèle, poids stabilisé |

**L'intention de la resolución :**
La resolución doit être guidée avec clarté. Le meneur 'ferme' légèrement son cadre gauche pour signaler la fermeture au suiveur. Le suiveur sent ce signal et se prépare à fermer.

**La resolución et la musique :**
La resolución arrive idéalement sur une résolution musicale — la fin d'une phrase de 8 temps, le dernier temps avant un accent. Elle cadence avec la musique.

**Resolución frente / resolución cruzada :**
La resolución peut se terminer avec les pieds parallèles (frente) ou légèrement en croix (cruzada, moins courante). La version parallèle est la base.

**Après la resolución :**
La resolución crée un moment de stabilité — les deux eje sont au même endroit, l'abrazo est au repos. C'est le moment idéal pour :
- Écouter la musique ensemble
- Faire une pausa
- Initier une nouvelle phrase (nouvelle salida ou figure)`,
    erreursCourantes: [
      "Resolución trop rapide (couper la phrase avant qu'elle soit terminée musicalement).",
      "Résolution sans fermeture claire dans l'abrazo (le suiveur ne sait pas que c'est la fin de la phrase).",
      "Pieds qui ne se ferment pas complètement — rester en position semi-ouverte.",
    ],
    conseils: [
      "Écoute une musique tango et compte les phrases : tu entendras des 'respirations' toutes les 8 ou 16 mesures. C'est là que vont les resoluciones. Quand tu peux anticiper ces moments d'oreille, tu sauras exactement quand résoudre.",
    ],
    etymologie: "De l'espagnol 'resolución' (résolution, conclusion, dénouement) — de 'resolver' (résoudre, conclure). En musique comme en tango, la résolution est la conclusion naturelle d'une phrase en tension.",
    difficulteInterne: 1,
    termesLies: ['salida-tango', 'compas-tango', 'pausa-tango'],
  },

  // ─── Niveau 2 — Construction du vocabulaire ───────────────────────────────

  {
    id: 'adorno-tango',
    nom: 'Adorno',
    alias: ['adorno tango', 'ornement tango', 'adornement', 'decoration tango'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Ornement improvisé ajouté par l'un ou l'autre partenaire dans les espaces libres de la danse — petits gestes expressifs des pieds, des jambes ou du corps qui enrichissent la danse sans interférer avec la structure de base guidée. L'adorno est toujours facultatif et personnel.",
    description: `**Le terme — qu'est-ce qu'un adorno ?**

L'adorno est la signature personnelle du danseur dans le tango. Alors que la structure de la danse est co-créée avec le partenaire, l'adorno est un espace de liberté individuelle — un moment où le corps dit quelque chose pour lui-même, pas pour l'autre.

Les adornements existent des deux côtés :
- **Adornements du suiveur** : petits ornements ajoutés pendant que le meneur tient une pause, pendant un molinete, pendant un ocho
- **Adornements du meneur** : l'enrosque pendant le molinete, le lápiz, les petits tapotements du pied

L'adorno bien placé enrichit la danse. Mal placé (trop souvent, au mauvais moment, au mauvais endroit), il perturbe la connexion.

---

**Le mouvement — les adornements de base**

**Le robado (volé) — pour le suiveur :**
Pendant une pausa, le pied libre du suiveur fait un petit cercle ou un glissement sur le sol — rapide et discret. Le meneur ne bouge pas, le suiveur 'vole' un moment de danse pour lui-même.

**Le rulo (boucle) :**
Le pied libre dessine une petite boucle dans l'air — souvent au moment où il se ferme vers l'autre pied. Visible, élégant.

**Le golpe / tap :**
Un petit tapotement du pied au sol sur le compás — une façon de marquer le rythme avec l'ornementation.

**La passada — au niveau du sol :**
Le pied libre passe derrière ou devant l'autre sans transfert de poids — un geste de transition ornemental.

**L'enrosque (meneur) :**
Pendant le molinete, la jambe libre du meneur s'enroule autour de la jambe de support. L'adorno le plus reconnaissable du rôle de meneur.

**La règle des adornements :**
L'adorno se fait dans les espaces libres — quand le partenaire ne propose pas de mouvement. On n'ornemente pas en plein milieu d'une figure guidée, et on ne fait jamais d'adorno qui interfère physiquement avec le partenaire.`,
    erreursCourantes: [
      "Adornements trop grands (écraser l'espace du partenaire, risquer de le toucher).",
      "Adornements pendant une figure guidée (interférer avec la communication).",
      "Adornements trop fréquents (perdre l'effet de ponctuation qu'ils devraient avoir).",
    ],
    conseils: [
      "Commence par un seul adorno : le robado pendant les pausas. Juste ça. Maîtrise-le parfaitement — petit, propre, musical. Une fois que tu n'y penses plus, ajoutes-en un deuxième. Les adornements qui font impression sont toujours simples et précis.",
    ],
    etymologie: "De l'espagnol 'adorno' (ornement, décoration) — de 'adornar' (décorer, embellir). Dans le tango, l'adorno est l'embellissement personnel d'une danse co-construite.",
    difficulteInterne: 3,
    termesLies: ['pausa-tango', 'enrosque', 'boleo'],
  },

  {
    id: 'amague',
    nom: 'Amague',
    alias: ['amague tango', 'feinte tango', 'fausse piste tango', 'fake tango'],
    disciplines: ['tango-argentin'],
    categories: ['concepts', 'qualites-de-mouvement'],
    definition: "Fausse piste dans le tango argentin — mouvement qui suggère une direction ou une figure sans la compléter, utilisé comme outil de dialogue entre les partenaires, comme ornement ou comme moment de jeu avec l'anticipation.",
    description: `**Le terme — qu'est-ce qu'un amague ?**

L'amague (de 'amagar' : feindre, menacer sans frapper) est l'art de promettre sans tenir dans le tango. C'est une fausse piste intentionnelle — un mouvement qui suggère qu'une chose va se passer, puis ne se passe pas, ou se transforme en autre chose.

L'amague existe à deux niveaux :
1. **Comme outil de communication** : le meneur 'commence' une figure pour préparer le suiveur, puis change d'avis — et le suiveur ressent ce changement dans l'abrazo
2. **Comme ornement** : un partenaire initie un geste (lever la jambe, amorcer un boleo) sans le compléter — une suggestion de mouvement

Il y a quelque chose de très joueur dans l'amague. C'est une des manifestations de l'humour dans le tango — et le tango, oui, peut être drôle.

---

**Le mouvement — comment exécuter un amague ?**

**L'amague comme feinte du meneur :**
1. Le meneur initie un transfert de poids vers l'avant (comme pour un pas avant)
2. Au lieu de compléter le transfert, il le stoppe et revient au centre
3. Le suiveur a commencé à répondre — et reçoit maintenant la correction
4. Ce moment de suspension et de réajustement devient lui-même un ornement

**L'amague du suiveur (ornement) :**
Pendant une pause ou un moment ouvert, le suiveur lève légèrement le pied libre, amorce un boleo ou une passada — et ne le complète pas. Une suggestion de mouvement qui reste en suspension.

**L'amague et le compás :**
Un bon amague est toujours musical. Il arrive sur un temps fort, crée une suspension, et se résout (ou non) dans les temps suivants.

**La règle de l'amague :**
L'amague est efficace quand il est clair et décidé — une vraie fausse piste, pas une hésitation. Si le partenaire ne comprend pas que c'était intentionnel, c'est une erreur déguisée en amague.`,
    erreursCourantes: [
      "Amague qui ressemble à une hésitation plutôt qu'à une feinte intentionnelle.",
      "Amague trop long (la tension se dissipe — il perd son effet).",
      "Confondre un amague et une erreur de guidage.",
    ],
    conseils: [
      "Pratique l'amague seul(e) : initie un pas vers l'avant, stoppe, reviens. L'intention doit être claire à chaque phase — avancer, stopper, revenir. Quand les trois phases sont nettes, tu as un amague.",
    ],
    etymologie: "De l'espagnol 'amague' — du verbe 'amagar' (faire mine de, feindre, menacer sans aller jusqu'au bout). Utilisé aussi dans d'autres sports de contact (boxe, football) pour décrire une fausse attaque.",
    difficulteInterne: 3,
    termesLies: ['adorno-tango', 'pausa-tango', 'improvisacion-tango'],
  },

  {
    id: 'lapiz',
    nom: 'Lápiz',
    alias: ['lapiz tango', 'lápiz', 'crayon tango', 'pencil tango', 'círculo'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'qualites-de-mouvement'],
    definition: "Ornement du meneur dans le tango argentin — la jambe libre dessine un cercle ou un arc sur le sol comme avec un crayon (lápiz), pendant que le meneur pivote ou guide une figure. Un des adornements de meneur les plus reconnaissables et les plus élégants.",
    description: `**Le terme — qu'est-ce que le lápiz ?**

Le lápiz (crayon en espagnol) tire son nom de l'image du pied qui dessine sur le sol — comme un crayon sur une feuille. C'est un des adornements les plus característiques du rôle de meneur, et l'un des premiers qu'on apprend après avoir maîtrisé les bases.

Le lápiz peut être petit et discret (un arc de 20 cm) ou grand et spectaculaire (un cercle complet). Il peut se faire pendant une pausa, pendant que le suiveur fait un ocho, pendant un molinete. C'est toujours un ornement — jamais une figure guidée.

---

**Le mouvement — comment exécuter un lápiz ?**

**La position de départ :**
Le meneur est sur son pied gauche (eje stable). Le pied droit est libre, légèrement soulevé.

**Le dessin :**
Le pied libre se pose sur l'avant (pas le talon — l'avant du pied) et trace un arc sur le sol. La jambe est tendue ou légèrement fléchie selon l'amplitude souhaitée.

**La direction du cercle :**
Le lápiz peut partir vers l'avant, décrire un arc de côté, puis revenir en arrière — ou faire un cercle complet autour du pied de support.

**La qualité du lápiz :**
- Le pied glisse sur le sol — pas de choc, pas de soulèvement
- Le genou reste légèrement fléchi (pas verrouillé)
- Le buste ne bouge pas (l'eje reste stable)
- L'abrazo n'est pas perturbé (le suiveur ne doit pas sentir le lápiz)

**Lápiz et musique :**
Le lápiz se fait sur les phrases musicales longues — un arc sur 2 temps, un cercle sur 4 temps. Il doit s'inscrire dans le compás.

**Lápiz à plusieurs cercles :**
Le danseur avancé peut enchaîner plusieurs arcs sur une longue phrase musicale — créant un dessin complexe sur le sol.`,
    erreursCourantes: [
      "Lápiz trop grand (le pied quitte l'espace disponible, risque d'accrocher un autre couple).",
      "Buste qui se penche vers la jambe du lápiz (perdre l'eje).",
      "Lápiz qui interfère avec la connexion dans l'abrazo (le suiveur sent quelque chose changer).",
    ],
    conseils: [
      "Exerce-toi sur du papier — littéralement. Pose ton pied sur une feuille et essaie de dessiner un cercle régulier. L'uniformité du trait te dira où tu perds le contact. Ensuite, sans papier, sur le parquet.",
    ],
    etymologie: "De l'espagnol 'lápiz' (crayon) — image du pied qui trace sur le sol comme un crayon sur une feuille. Parfois aussi appelé 'círculo' (cercle).",
    difficulteInterne: 3,
    termesLies: ['adorno-tango', 'enrosque', 'pausa-tango'],
  },

  // ─── Niveau 3 — Technique avancée ────────────────────────────────────────

  {
    id: 'colgada',
    nom: 'Colgada',
    alias: ['colgada tango', 'suspension tango', 'off-axis outward', 'pendaison tango'],
    disciplines: ['tango-argentin'],
    categories: ['pas', 'liaisons'],
    definition: "Figure avancée de tango argentin dans laquelle les deux partenaires s'éloignent l'un de l'autre en partageant un contre-appui — leurs axes quittent la verticale vers l'extérieur, créant une figure de pendaison symétrique qui requiert une confiance et une connexion parfaites.",
    description: `**Le terme — qu'est-ce que la colgada ?**

La colgada est la figure miroir de la volcada. Dans la volcada, le suiveur tombe vers l'intérieur (vers le meneur). Dans la colgada, les deux partenaires tombent vers l'extérieur — chacun s'éloigne de l'autre en maintenant la connexion par les bras.

'Colgada' signifie littéralement 'suspendue' ou 'pendante' — l'image est celle de deux corps qui se pendent dans des directions opposées, maintenus ensemble par l'abrazo.

C'est une figure spectaculaire et exigeante. On la voit souvent dans les performances de tango show — mais elle existe aussi dans le tango social, dans sa version plus modeste.

**Pourquoi c'est avancé :**
La colgada demande :
- Un eje individuel parfait (pour ne pas s'effondrer)
- Une connexion dans l'abrazo extrêmement précise
- Une confiance absolue dans le partenaire
- Une coordination du moment d'entrée et de sortie

---

**Le mouvement — comment exécuter une colgada ?**

**La préparation :**
Les deux partenaires sont dans l'abrazo. La connexion doit être très établie avant d'entrer en colgada.

**L'entrée :**
1. Les deux partenaires s'écartent légèrement l'un de l'autre — le meneur étend son bras gauche, le suiveur étend son bras droit
2. Simultanément, les deux corps s'inclinent vers l'extérieur — chacun sort de sa verticale
3. La tension dans les bras (le contre-appui) maintient la figure

**La figure stable :**
Dans une colgada réussie, chaque partenaire est en équilibre précaire — seul le contre-appui des bras maintenus ensemble les garde debout. Les deux eje forment une symétrie en V.

**La rotation :**
Souvent, la colgada s'exécute en tournant — le couple tourne ensemble pendant que leurs axes restent inclinés vers l'extérieur. C'est là que ça devient spectaculaire.

**La sortie :**
La sortie doit être aussi contrôlée que l'entrée. Les deux partenaires reviennent à la verticale simultanément — guidés par la tension dans les bras.

**Les variations :**
- Colgada statique (sans rotation)
- Colgada en rotation (le plus courant et le plus spectaculaire)
- Colgada asymétrique (l'un plus incliné que l'autre)`,
    erreursCourantes: [
      "Entrer en colgada sans une connexion préalable bien établie (risque de perte d'équilibre des deux partenaires).",
      "Tirer sur les bras du partenaire au lieu de partager un contre-appui (blessure potentielle).",
      "Sortir de la colgada trop brusquement.",
    ],
    conseils: [
      "Avant de danser la colgada en danse, pratiquez-la statiquement, sans musique. Les deux partenaires dos à dos, mains liées au-dessus, s'inclinent légèrement en sens opposés. Sentez le contre-appui — c'est exactement cette tension-là. Puis face à face dans l'abrazo.",
    ],
    etymologie: "De l'espagnol 'colgada' (suspendue, pendue) — du verbe 'colgar' (pendre, suspendre, accrocher). L'image est exacte : dans la colgada, les deux danseurs sont comme suspendus l'un à l'autre.",
    difficulteInterne: 5,
    termesLies: ['volcada', 'eje', 'abrazo'],
  },

  {
    id: 'improvisacion-tango',
    nom: 'Improvisation dans le tango',
    alias: ['improvisacion tango', 'improvisation tango', 'dialogue improvisé'],
    disciplines: ['tango-argentin'],
    categories: ['concepts'],
    definition: "Nature fondamentalement improvisée du tango argentin — contrairement à de nombreuses danses chorégraphiées, le tango argentin se crée à chaque instant dans la conversation entre les deux partenaires, guidée par la musique, l'abrazo et le contexte de la milonga.",
    description: "L'improvisation est l'essence même du tango argentin. Ce n'est pas une option ou une technique avancée — c'est ce qu'est le tango. Et c'est cette caractéristique qui le rend unique parmi toutes les danses que j'ai dans mes carnets.\n\n**Pourquoi le tango s'improvise :**\nLe tango est né dans les conventillos (logements collectifs) de Buenos Aires à la fin du XIXe siècle — une musique et une danse de gens ordinaires qui dansaient sans chorégraphe. L'improvisation est dans son ADN.\n\n**Comment l'improvisation fonctionne dans le tango :**\nLe meneur propose, le suiveur répond. Le suiveur peut aussi proposer — adornements, résistances légères, variations — et le meneur peut choisir d'intégrer ou non. C'est un dialogue.\n\n**La différence avec d'autres danses :**\nDans le ballet ou la danse de salon compétitive, les figures sont chorégraphiées et répétées. Dans le tango, deux partenaires qui ne se sont jamais rencontrés peuvent danser ensemble, créant quelque chose de beau, sans répétition préalable.\n\n**L'improvisation et le niveau :**\nUn débutant improvise avec un vocabulaire de 5 mots. Un danseur avancé improvise avec un vocabulaire de 500 mots — mais dans les deux cas, c'est de l'improvisation. Il n'y a pas de 'bonne figure' obligatoire.\n\n**Le tango de scène :**\nIl existe aussi un tango de scène (tango escenario) qui est chorégraphié — c'est ce qu'on voit dans les shows. Mais les danseurs sérieux distinguent clairement le tango de scène du tango social.",
    erreursCourantes: [
      "Vouloir exécuter des figures précises au lieu d'écouter la musique et le partenaire.",
      "Mémoriser des enchaînements au lieu de travailler la connexion — les enchaînements mémorisés s'effondrent dès que le partenaire ne fait pas ce qu'on attend.",
    ],
    conseils: [
      "Pour te libérer de l'improvisation par peur : danse uniquement la caminada pendant toute une tanda. Juste marcher — avant, arrière, côté. Tu verras que ça suffit amplement quand la connexion est là. C'est ça, l'improvisation.",
    ],
    etymologie: "De l'espagnol 'improvisación' — du latin 'improvisus' (imprévu, non préparé). En tango, le terme est utilisé consciemment par opposition au tango 'escenario' (chorégraphié).",
    difficulteInterne: 3,
    termesLies: ['abrazo', 'musicalidad-tango', 'milonga'],
  },
]
