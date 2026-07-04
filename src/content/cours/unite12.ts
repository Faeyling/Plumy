import type { Cours } from '../schema'

export const coursUnite12: Cours[] = [
  {
    id: 'intro-tango-argentin',
    titre: "Le tango argentin — l'abrazo, la milonga et l'improvisation",
    resume: "Le tango argentin, j'en suis tombée amoureuse la première fois que j'ai vu deux personnes danser silencieusement, collées l'une à l'autre, sans que rien ne soit chorégraphié. C'est une danse de dialogue pur — abrazo, eje, caminada, figures improvisées — née dans les faubourgs de Buenos Aires et reconnue au patrimoine de l'UNESCO. Je t'emmène dans ses origines, sa technique, ses codes sociaux (milonga, cabeceo, tanda) et sa philosophie de l'instant présent.",
    disciplines: ['tango-argentin'],
    termesAbordes: [
      'abrazo', 'eje', 'caminada', 'ocho', 'cruce', 'parada',
      'gancho', 'boleo', 'barrida', 'sacada', 'enrosque', 'molinete',
      'volcada', 'milonga', 'cabeceo', 'tanda', 'musicalidad-tango', 'improvisacion-tango',
    ],
    sections: [
      {
        titre: "Histoire du tango — des conventillos de Buenos Aires à l'UNESCO",
        contenuMarkdown: `Le tango est né dans un quartier pauvre. C'est peut-être la chose la plus importante à savoir sur lui — parce que ça explique tout : son caractère improvisé, son intensité émotionnelle, sa façon d'exister entre deux corps sans avoir besoin d'une scène ni d'un public.

**Les origines (fin du XIXe siècle) :**
Buenos Aires, années 1880–1890. La ville est traversée par des vagues d'immigration — Italiens, Espagnols, Africains, indigènes déracinés. Dans les conventillos (logements collectifs des quartiers populaires), dans les cafés du port, dans les rues du barrio chino et de la Boca, une musique naît du mélange.

Le tango mêle plusieurs influences que j'adore retracer :
- La **milonga** (musique populaire afro-rioplatense)
- La **habanera** cubaine (via les marins)
- Le **candombe** (héritage africain)
- La **mazurka** et la **polka** européennes

Ce n'est pas une musique de salon. C'est une musique de faubourg, dansée corps contre corps dans des espaces exigus. À ses débuts, les hommes dansaient souvent entre eux pour perfectionner leurs pas avant d'inviter une partenaire — ce qui a forgé l'intensité et la précision des mouvements caractéristiques du tango.

**Le tango et la réprobation sociale :**
Dès ses origines, le tango choque les classes bourgeoises argentines — à cause de l'abrazo fermé (les corps qui se touchent), jugé indécent. Paradoxalement, c'est d'abord à Paris (années 1910) que le tango est adopté par les classes aisées... avant de revenir triomphant en Argentine avec une légitimité nouvelle.

**Le tango à Paris — le rôle inattendu des Apaches :**
Ce que j'ai trouvé dans mes carnets sur cette période m'a vraiment surpris. Ce sont les **Apaches** — les gangsters parisiens du début du XXe siècle — qui ont joué un rôle crucial dans l'introduction du tango à Paris. Fascinés par cette danse exotique, ils l'ont adoptée et adaptée à leur propre style, créant une variante parisienne qui a rapidement gagné les quartiers populaires. Les **bals musette** ont commencé à intégrer le tango à leur répertoire, le diffusant auprès d'un public large — bien au-delà des cercles d'artistes et d'intellectuels.

**La « tangomania » (1912–1914) :**
La fièvre du tango ne s'est pas limitée à Paris. À **Londres**, les **tea dances** deviennent le terrain de prédilection pour la pratique du tango, attirant une clientèle chic. À **Berlin**, les cabarets adoptent cette danse exotique, l'intègrent à leurs spectacles et contribuent à sa popularisation. La tangomania atteint son apogée entre 1912 et 1914 — transformant le paysage culturel de toutes ces métropoles européennes.

Le cinéma muet argentin joue aussi un rôle déterminant : des films comme **"Tango Argentino" (1913)** font découvrir la gestuelle et l'émotion du tango bien au-delà des frontières de l'Argentine.

**Carlos Gardel — l'ambassadeur :**
**Carlos Gardel** (surnommé "El Zorzal Criollo", le merle créole) est sans conteste la figure la plus emblématique du tango argentin. Sa voix unique et son charisme conquièrent l'Europe dès les années 1920 — ses tournées sont de véritables triomphes. Il incarne cette mélancolie élégante que résume la célèbre formule — souvent attribuée à Enrique Santos Discépolo mais portée par Gardel dans toute l'Europe :

> *"Le tango, c'est une pensée triste qui se danse."*

Il meurt en 1935. Mais son influence reste mondiale.

**L'âge d'or du tango (années 1930–1950) :**
L'ère des grandes orchestres — D'Arienzo, Di Sarli, Troilo, Pugliese. Le tango se professionnalise, s'enrichit musicalement, envahit les salles de bal. **Juan D'Arienzo** ("El Rey del Compás") dynamisise le tango avec son style énergique et dansant. **Aníbal Troilo** et son bandonéon magistral apportent une profondeur émotionnelle inégalée. Leurs enregistrements, largement diffusés sur le continent, maintiennent l'intérêt pour le tango même pendant les périodes où les voyages internationaux sont limités.

**Astor Piazzolla — le Nuevo Tango :**
**Astor Piazzolla** réinvente le tango au XXe siècle avec son **Nuevo Tango** — fusion audacieuse de tango traditionnel, de jazz et de musique classique. D'abord controversé en Argentine, il trouve un accueil enthousiaste en Europe. Ses compositions comme **"Libertango"** ou **"Adiós Nonino"** deviennent des classiques interprétés dans les salles de concert les plus prestigieuses — élevant le statut du tango au rang d'art majeur. Dans mes carnets, Piazzolla a sa propre page, avec trois étoiles dans la marge.

**Le déclin et la renaissance :**
Les années 1960–1970 voient le déclin du tango sous les dictatures militaires (les rassemblements de plus de trois personnes sont interdits — il ne pouvait pas y avoir de milongas). Dans les années 1980, le spectacle *Tango Argentino* à Broadway et Paris relance l'intérêt mondial.

**Le tango à l'UNESCO (2009) :**
Le tango argentin et uruguayen est inscrit au patrimoine culturel immatériel de l'UNESCO — reconnu comme expression culturelle vivante des deux rives du Río de la Plata.`,
      },
      {
        titre: "L'abrazo et l'eje — la connexion entre deux corps",
        contenuMarkdown: `Si tu ne devais retenir qu'une chose de tout ce que j'ai dans mes carnets sur le tango, ce serait ça : le tango, c'est deux eje qui se retrouvent dans un abrazo. Tout le reste découle de là.

**L'eje — l'axe de chaque danseur :**
L'eje est l'axe vertical imaginaire qui traverse chaque danseur de la tête aux pieds. Dans le tango, chaque partenaire maintient son propre équilibre — on ne s'appuie pas sur l'autre.

Ce principe est contre-intuitif au début. On imagine que danser ensemble, c'est se soutenir. Dans le tango, c'est l'inverse : deux eje stables permettent de se rejoindre librement.

**Comment trouver son eje :**
- Poids sur un pied à la fois (rarement les deux simultanément)
- Ligne de la hanche, de l'épaule et de la tête verticale
- Genoux légèrement fléchis, jamais verrouillés
- Centre engagé — pas de tension visible, mais du tonus

**L'abrazo — l'enlacement :**
L'abrazo est la connexion physique entre les deux partenaires. Il en existe deux styles principaux :

**Abrazo ouvert (abierto) :**
Un espace entre les torses. La main droite du meneur dans le dos du suiveur, la main gauche tenant la main droite du suiveur. Plus de liberté individuelle.

**Abrazo fermé (cerrado / milonguero) :**
Les torses se touchent. C'est dans cet abrazo que le meneur peut guider par le souffle et le poids — sans même bouger les bras. C'est le style des milongas de Buenos Aires traditionnelles — et je le trouve d'une beauté absolue.

**La qualité de l'abrazo :**
Un bon abrazo est ferme et détendu à la fois. Pas crispé — pas flottant. Comme tenir quelque chose de précieux sans l'écraser. La connexion doit permettre à chaque information du meneur de passer au suiveur — et à chaque réponse du suiveur de revenir au meneur.

**L'abrazo comme dialogue :**
C'est peut-être la métaphore la plus juste. L'abrazo n'est pas un commandement — c'est une proposition. Et le bon suiveur répond avant même que les pieds aient bougé.`,
      },
      {
        titre: "La caminada et les figures fondamentales",
        contenuMarkdown: `Le tango commence dans la marche. On dit souvent : 'Le tango, c'est une marche habillée.' J'ai adoré cette formule dès que je l'ai lue — et plus j'apprends, plus je la trouve vraie.

---

## La caminada — la marche

La caminada n'est pas une marche ordinaire. C'est un transfert de poids complet, précis, musical, maintenu dans l'abrazo.

**Les caractéristiques :**
- Le pied arrive au sol par le talon (marche avant) ou l'avant du pied (marche arrière)
- Le transfert de poids est complet avant le prochain pas
- Les genoux restent proches au passage
- Le buste est stable — les épaules ne bougent pas avec les hanches

**La ligne de danse :**
En milonga, les couples circulent dans le sens inverse des aiguilles d'une montre. Respecter cette ligne, c'est respecter les autres couples.

---

## L'ocho — la figure en huit

Le suiveur trace un 8 sur le sol en pivotant alternativement à gauche et à droite du meneur.

**La clé technique : la dissociation**
Le bassin pivote — le buste reste face au partenaire. Cette dissociation entre haut et bas du corps crée l'élégance de l'ocho.

**Ocho atrás** : marche en arrière + pivot
**Ocho adelante** : marche en avant + pivot (moins courant, très élégant)

---

## Le cruce — la croisée

Au cinquième pas de la séquence de base, après un pas latéral, la jambe gauche du suiveur se croise naturellement devant la droite. Le meneur guide ce cruce par une légère résistance dans l'abrazo — pas un commandement, une invitation.

---

## La parada — l'arrêt

Le meneur place son pied contre celui du suiveur pour interrompre doucement son mouvement. Ce qui suit est souvent la **pasada** — le suiveur enjambe délicatement le pied du meneur. Un moment de dialogue pur.

---

## Le molinete — le tour autour

Le suiveur tourne autour du meneur en exécutant : pas croisé avant → pas latéral → pas croisé arrière → pas latéral. Pendant ce temps, le meneur peut orner son pivot avec un **enrosque** — sa jambe libre s'enroule autour de sa jambe de support.`,
      },
      {
        titre: "Figures avancées — ganchos, boleos, barridas et sacadas",
        contenuMarkdown: `Ces figures, c'est ce que les spectateurs voient et qui les fait dire 'wahou'. Mais pour les danseurs, ce ne sont que des phrases dans une conversation — et une conversation sans les mots simples (caminada, abrazo, eje) ne tient pas.

---

## Le gancho — le crochet

Le meneur ouvre un espace entre ses jambes. Le suiveur, par la dynamique du mouvement, envoie sa jambe librement dans cet espace — genou fléchi, puis extension rapide et retour.

**Conditions :**
Le gancho ne se force jamais. Le pied ne va jamais plus loin que l'espace ouvert. La flexion du genou absorbe le mouvement.

---

## Le boleo — la volée

Un changement de direction soudain du meneur crée une énergie centrifuge dans la jambe libre du suiveur — qui part en volée. Le boleo **naît du mouvement** — il ne se décide pas consciemment quand c'est bien fait.

**Boleo bas** : rase le sol, discret, adapté aux pistes bondées.
**Boleo haut** : spectaculaire, réservé aux espaces dégagés.

---

## La barrida — le balayage

Un pied glisse contre le pied du partenaire et l'accompagne dans sa direction. Le contact est maintenu pendant tout le déplacement — doux, continu. Pas un coup de pied — un dialogue entre deux pieds sur le sol.

---

## La sacada — le déplacement

Quand le suiveur déplace une jambe d'un point A à un point B, le meneur entre dans le point A juste à ce moment — déplaçant la jambe par son propre mouvement. Bien fait, le suiveur ne perçoit pas de poussée — juste son propre mouvement amplifié.

---

## La volcada — l'inclinaison

La figure la plus avancée : le meneur invite le suiveur à pencher son axe vers l'avant. L'abrazo soutient cette inclinaison. C'est une question de confiance absolue — et un moment d'une beauté rare quand c'est bien exécuté.

> Ces figures ne s'apprennent pas dans l'ordre d'une liste — elles arrivent dans la conversation de la danse, quand la connexion est assez solide pour les accueillir.`,
      },
      {
        titre: "Milonga, cabeceo et musicalidad — vivre le tango social",
        contenuMarkdown: `Le tango n'est pas seulement une technique — c'est une culture. Et cette culture, elle se vit en milonga. Je te livre ce que j'ai noté dans mes carnets sur ce monde à part.

**La milonga — le bal du tango**

La milonga est la soirée de tango social. On y danse en couples, on suit les conventions tacites (codigos), on écoute de la musique jouée en tandas séparées par des cortinas.

L'atmosphère est particulière : festive et recueillie à la fois. Les gens sont là pour danser, pas pour regarder. Et les meilleurs danseurs sont souvent ceux qu'on ne remarque pas de loin — parce qu'ils ne cherchent pas à être remarqués.

**La tanda — la série de morceaux**

Une milonga est organisée en tandas (séries de 3–4 morceaux du même orchestre) séparées par des cortinas (30 secondes de musique neutre — signal de changer de partenaire).

Accepter de danser une tanda, c'est s'engager pour toute la tanda — 3–4 morceaux. On ne quitte pas son partenaire au milieu d'une tanda.

**Le cabeceo — l'invitation par le regard**

Dans les milongas de Buenos Aires traditionnelles, on n'invite pas verbalement. On invite par le regard :

1. Croiser le regard de la personne voulue
2. Incliner légèrement la tête — le cabeceo
3. Si l'autre répond par un hochement : on se rejoint sur la piste
4. Si l'autre détourne le regard : refus discret, aucune humiliation

C'est un système d'une élégance remarquable — la dignité de tout le monde est préservée.

**La musicalidad — danser la musique**

Écouter le tempo, c'est le minimum. La musicalidad, c'est entendre la mélodie, la phrase musicale, les silences, l'émotion particulière de chaque orchestre.

**Les grands orchestres à connaître :**

| Orchestre / Artiste | Personnalité |
|-----------|-------------|
| D'Arienzo | "El rey del compás" — rythme fort, sec, marqué |
| Di Sarli | Élégance, legato, lyrisme mélodique |
| Troilo | Émotion, profondeur, bandonéon magistral |
| Pugliese | Complexité, dramatisme, syncopations |
| Piazzolla | Nuevo Tango — fusion jazz + classique, "Libertango" |

**L'improvisation comme philosophie**

Le tango argentin ne se chorégraphie pas. Le meneur propose, le suiveur répond. Les deux créent quelque chose qui n'existera qu'une fois, dans cet instant, avec cette musique, dans cette milonga.

C'est peut-être la plus belle définition que j'ai trouvée du tango : une danse qui vit dans l'instant présent, et nulle part ailleurs.

> Ce qui m'a le plus frappée dans le tango, c'est qu'on peut danser toute une tanda avec quelqu'un sans prononcer un seul mot — et en dire plus que dans n'importe quelle conversation. Je ne connais pas d'autre danse qui fasse ça.`,
      },
    ],
  },
]
