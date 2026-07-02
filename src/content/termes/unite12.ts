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
