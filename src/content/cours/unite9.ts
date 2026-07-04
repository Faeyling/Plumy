import type { Cours } from '../schema'

export const coursUnite9: Cours[] = [
  {
    id: 'intro-cabaret',
    titre: 'Le cabaret — revue, cancan et art du spectacle',
    resume: "Le french cancan et ses techniques (high kick, fan kick), la chorus line et l'art de la synchronisation, le port du costume et des accessoires (canne, chapeau, boa), la présentation scénique et le rapport au public. J'ai un faible pour le cancan depuis que j'ai compris à quel point c'est physique — dans mes carnets, j'ai des pages entières là-dessus.",
    disciplines: ['cabaret'],
    termesAbordes: [
      'french-cancan', 'high-kick', 'fan-kick', 'chorus-line', 'synchronisation-chorus',
      'port-costume', 'canne-chapeau-cabaret', 'boa-eventail',
      'meneuse-revue', 'presentation-scenique', 'rapport-public',
    ],
    sections: [
      {
        titre: "Histoire du cabaret — du Moulin Rouge à aujourd'hui",
        contenuMarkdown: `Je vais te dire quelque chose sur le cabaret : c'est l'une des formes de danse dont l'histoire me fascine le plus, parce qu'elle est indissociable de l'histoire sociale et politique de son époque. Chaque grande période a eu son cabaret, et chaque cabaret a dit quelque chose que les autres formes d'art ne pouvaient pas dire. Installe-toi — on remonte le temps.

**Les origines :**
- **1881** : Le Chat Noir (Montmartre) — premier cabaret au sens moderne. Artistes, intellectuels, bohème parisienne.
- **1889** : Ouverture du Moulin Rouge — La Goulue, Valentin-le-Désossé, et l'invention du cancan spectaculaire.
- **1886** : Les Folies Bergère — revue à grand spectacle, tableaux et girls.

**L'âge d'or de la revue (1900–1940) — des noms que tu dois connaître :**
- **Mistinguett** : la meneuse par excellence
- **Joséphine Baker** : révolutionnaire artistique et politique — une figure absolument majeure
- **Les Ziegfeld Follies** (New York) : la revue américaine
- **Le Kabarett allemand** : Ernst von Wolzogen, et sa version politique et satirique

**Le cabaret au cinéma — trois films que j'adore :**
- *Cabaret* (1972, Bob Fosse) — le Kabarett berlinois des années 1930 comme métaphore politique
- *Moulin Rouge!* (2001, Baz Luhrmann) — hommage pop-art à l'ère du cancan
- *Chicago* (2002, Rob Marshall) — la revue américaine

**Le cabaret contemporain :**
Les grandes maisons parisiennes continuent : Moulin Rouge, Lido, Folies Bergère. Mais le "néo-cabaret" existe aussi — plus intimiste, plus diversifié, plus expérimental. L'esprit du cabaret s'adapte à chaque époque. Ce qui m'émerveille, c'est que ça continue.

**Ce qui unit toutes ces formes à travers le temps :**
- Le spectacle : l'art d'éblouir
- Le public au centre : la scène existe pour lui
- Le costume, le décor, la lumière : tout est dans l'image`,
      },
      {
        titre: "Le french cancan — technique et histoire",
        contenuMarkdown: `Parlons du french cancan — et je vais commencer par casser une idée reçue. Derrière les sourires, les jupons et la musique d'Offenbach, il y a une des danses les plus exigeantes physiquement que je connaisse. Ne te laisse pas tromper par l'apparente légèreté. J'ai noté tout ça dans mes carnets parce que ça m'a surpris aussi.

**Histoire du cancan :**

Le "chahut" naît dans les bals populaires parisiens des années 1820. À l'origine, danse mixte et improvisée. En 1858, Offenbach compose *Orphée aux Enfers* — sa galop infernal devient la musique définitive du cancan.

Au Moulin Rouge (ouvert en 1889), La Goulue et Valentin-le-Désossé codifient et spectacularisent le cancan devant un public international. Ce n'est plus une danse de bal — c'est un spectacle.

**Les éléments techniques — dans mon carnet, j'ai un schéma pour chacun :**

**Le grand battement (high kick) :**
- Jambe tendue qui monte à la verticale ou au-delà
- Pied pointé, dos droit, maintien de l'équilibre
- Séquences alternées : jambe droite, jambe gauche

**Le fan kick :**
- La jambe décrit un arc (avant → côté) en restant haute
- Plus complexe que le high kick : mobilité de hanche dans plusieurs plans

**Le porte-jupon :**
- Soulèvement du jupon avec les deux mains
- Agitation rythmée — c'est une chorégraphie dans la chorégraphie

**Le port de la jambe (arabesque cancan) :**
- Jambe en arrière, corps penché

**L'accroche-pied :**
- Saut sur une jambe, l'autre jambe accrochée (genou plié)

**Le grand écart final :**
- Descente en split au sol — signature emblématique. Et oui, c'est autant de physique que ça en a l'air.

**En ligne de chorus :**
Tout le vocabulaire du cancan se danse en formation — la synchronisation est centrale. Ce qu'une seule danseuse fait est beau ; ce que douze font ensemble est époustouflant. Tu vas voir.`,
      },
      {
        titre: "La chorus line — art de la synchronisation",
        contenuMarkdown: `Voici quelque chose que j'ai mis du temps à comprendre sur la chorus line : une ligne de danseuses synchronisées, ce n'est pas de l'alignement géométrique. C'est une discipline à part entière — peut-être la plus sociale de toutes les disciplines de danse. Et j'adore l'enseigner parce qu'il faut changer d'état d'esprit pour y entrer.

**Histoire de la chorus line — des moments que j'aime raconter :**
- **1866** : *The Black Crook* (New York) — premières chorus girls
- **1907** : Les Ziegfeld Follies — la chorus girl américaine standardisée
- **1974** : *A Chorus Line* (Broadway) — l'œuvre qui rend hommage et questionne l'institution
- **Moulin Rouge, Lido, Folies Bergère** : les grandes maisons de chorus européens

**Les Bluebell Girls :**
Fondées par Margaret Kelly ("Bluebell") en 1932, les Bluebell Girls du Lido de Paris sont l'une des troupes les plus célèbres au monde — standards de sélection stricts, formation intensive. Si tu ne les as jamais vues, je te dis une chose : regarde ça.

**Principes de la synchronisation — ce que j'ai noté dans mes carnets :**

**L'écoute musicale :**
La synchronisation commence dans les oreilles, pas dans les yeux. Écouter le pulse ensemble — ne pas regarder les voisines pour se caler (ça crée un délai au lieu de le supprimer). C'est contre-intuitif, mais ça change tout.

**La vision périphérique :**
En ligne, on voit ses voisines sans tourner la tête. C'est un outil actif, pas un hasard.

**L'amplitude commune :**
Si l'amplitude diffère, l'image est déséquilibrée. On s'accorde souvent sur la moins flexible du groupe — parce que la ligne vaut plus que la performance individuelle.

**La qualité homogène :**
Pas seulement la forme — l'énergie, le regard, le sourire doivent être unifiés.

**La répétition comme construction :**
La synchronisation se construit en répétant ensemble — un seul cours ne suffit pas. C'est un travail de groupe dans la durée. Et c'est ça qui est beau — vraiment beau.`,
      },
      {
        titre: "Le port du costume et des accessoires",
        contenuMarkdown: `Une des choses qui m'a le plus étonné quand j'ai découvert le cabaret : les accessoires ont leur propre technique. En cabaret, le costume n'est pas un ajout à la danse. Il *est* la danse. Laisse-moi te montrer.

**La canne de cabaret :**

Élément signature du music-hall et du style Fosse.

**Positions de base :**
- En appui (comme une canne ordinaire) pour les poses
- Sur l'épaule, dans le coude
- Tenue par le bas (baguette de chef d'orchestre)

**Manipulation :**
- Pirouette avec canne (dans les doigts pendant un tour)
- Balancer (oscillation pendulaire)
- Tap (frapper le sol sur les temps)

**Le chapeau haut-de-forme :**
- En équilibre sur la tête pendant les kicks
- Roll sur le bras (de la main à l'épaule)
- Tip (effleurer le bord — geste d'élégance absolue)

---

**Le boa et l'éventail :**

Le boa a une physique propre — il suit le corps avec un délai qu'il faut anticiper et *utiliser*. Ce délai, c'est ta chance de créer quelque chose de beau. Je note ça dans mes carnets comme une des leçons les plus utiles du cabaret.

**Techniques :**
- Draper (autour du cou, des épaules)
- Faire tourner (moulin au-dessus de la tête)
- Whip (claquement vers le bas)

---

**Le jupon de cancan :**
- Porte-jupon : soulèvement à deux mains
- Agitation rythmée
- Le jupon révèle et cache — chorégraphie dans la chorégraphie

---

**Règle d'or — je te la donne gratuitement :**
Répéter en costume complet dès que possible. Le costume modifie la danse — il faut s'y habituer physiquement. Ce n'est vraiment pas anodin, crois-moi.`,
      },
      {
        titre: "Présentation scénique et rapport au public",
        contenuMarkdown: `J'y tiens profondément à cette distinction, et je veux que tu l'aies clairement dans la tête : la technique est nécessaire. La présentation scénique est ce qui fait le spectacle. On peut maîtriser tout le reste et rater ça — et alors le public ne "reçoit" rien.

**La présentation scénique — les éléments clés dans mon carnet :**

**Le regard :**
En cabaret, le regard est actif et dirigé. Vers le public, vers un partenaire imaginaire, vers les coulisses avec mystère — mais jamais "perdu". Un regard qui flotte tue la magie. Je l'ai vérifié trop de fois.

**Le sourire :**
Un sourire habité (qui vient d'une joie réelle de performer) vs un sourire figé (qui vient de la peur). Le public voit la différence — toujours. Tu vas apprendre à sentir la différence sur ton propre visage.

**La projection :**
L'énergie qui sort du corps vers la salle. Un danseur peut techniquement être parfait et ne rien projeter — alors le public ne "reçoit" rien. La technique sans projection, c'est de la mécanique.

**La conscience de l'espace :**
Savoir où tu es sur scène, qui est devant toi, comment tu t'inscris dans la formation.

---

**Le rapport au public :**

En cabaret, le public n'est pas passif — il est participant. La relation est directe et vivante. C'est l'essence même du genre.

**Techniques de rapport au public que j'adore :**
- Regard direct (pas au-dessus des têtes — *dans* les yeux)
- Wink et jeux complices
- Timing : laisser le public réagir (rire, surprise) avant de continuer — ne jamais écraser la réaction
- Révérence communicante (pas une formalité, une vraie transmission)

---

**La meneuse :**
Dans une revue, la meneuse est celle qui "mène" — pas seulement physiquement, mais en énergie et en présence. La troupe se cale sur elle, pas l'inverse. C'est un rôle de responsabilité totale.

> Le public vient voir un spectacle. Donne-lui un spectacle. Ta technique est l'outil — ta présence est le cadeau. C'est cette phrase que je me répète avant de monter sur scène.`,
      },
    ],
  },
]
