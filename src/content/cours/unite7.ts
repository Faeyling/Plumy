import type { Cours } from '../schema'

export const coursUnite7: Cours[] = [
  {
    id: 'intro-cabaret',
    titre: 'Le cabaret — revue, cancan et art du spectacle',
    resume: "L'univers du cabaret dans toute sa richesse : le french cancan et ses techniques (high kick, fan kick), la chorus line et l'art de la synchronisation, le port du costume et des accessoires (canne, chapeau, boa), la présentation scénique et le rapport au public.",
    disciplines: ['cabaret'],
    termesAbordes: [
      'french-cancan', 'high-kick', 'fan-kick', 'chorus-line', 'synchronisation-chorus',
      'port-costume', 'canne-chapeau-cabaret', 'boa-eventail',
      'meneuse-revue', 'presentation-scenique', 'rapport-public',
    ],
    sections: [
      {
        titre: "Histoire du cabaret — du Moulin Rouge à aujourd'hui",
        contenuMarkdown: `Le cabaret est né à Paris dans la deuxième moitié du XIXe siècle — et il n'a pas cessé de se réinventer.

**Les origines :**
- **1881** : Le Chat Noir (Montmartre) — premier cabaret au sens moderne. Artistes, intellectuels, bohème parisienne.
- **1889** : Ouverture du Moulin Rouge — La Goulue, Valentin-le-Désossé, et l'invention du cancan spectaculaire.
- **1886** : Les Folies Bergère — revue à grand spectacle, tableaux et girls.

**L'âge d'or de la revue (1900–1940) :**
- **Mistinguett** : la meneuse par excellence
- **Joséphine Baker** : révolutionnaire artistique et politique
- **Les Ziegfeld Follies** (New York) : la revue américaine
- **Le Kabarett allemand** : Ernst von Wolzogen, et sa version politique et satirique

**Le cabaret au cinéma :**
- *Cabaret* (1972, Bob Fosse) — le Kabarett berlinois des années 1930 comme métaphore politique
- *Moulin Rouge!* (2001, Baz Luhrmann) — hommage pop-art à l'ère du cancan
- *Chicago* (2002, Rob Marshall) — la revue américaine

**Le cabaret contemporain :**
Les grandes maisons parisiennes continuent : Moulin Rouge, Lido, Folies Bergère. Mais le 'néo-cabaret' existe aussi — plus intimiste, plus diversifié, plus expérimental.

**Ce qui unit toutes ces formes :**
- Le spectacle : l'art d'éblouir
- Le public au centre : la scène existe pour eux
- Le costume, le décor, la lumière : tout est dans l'image`,
      },
      {
        titre: "Le french cancan — technique et histoire",
        contenuMarkdown: `Le french cancan est la danse la plus iconique au monde — et l'une des plus exigeantes physiquement.

**Histoire du cancan :**

Le 'chahut' naît dans les bals populaires parisiens des années 1820. À l'origine, danse mixte et improvisée. En 1858, Offenbach compose *Orphée aux Enfers* — sa galop infernal devient la musique définitive du cancan.

Au Moulin Rouge (ouvert en 1889), La Goulue et Valentin-le-Désossé codifient et spectacularisent le cancan devant un public international.

**Les éléments techniques :**

**Le grand battement (high kick) :**
- Jambe tendue qui monte à la verticale ou au-delà
- Pied pointé, dos droit, maintien de l'équilibre
- Séquences alternées : jambe droite, jambe gauche

**Le fan kick :**
- La jambe décrit un arc (avant → côté) en restant haute
- Plus complexe que le high kick : mobilité de hanche dans plusieurs plans

**Le porte-jupon :**
- Soulèvement du jupon avec les deux mains
- Agitation rythmée

**Le port de la jambe (arabesque cancan) :**
- Jambe en arrière, corps penché

**L'accroche-pied :**
- Saut sur une jambe, l'autre jambe accrochée (genou plié)

**Le grand écart final :**
- Descent en split au sol — signature emblématique

**En ligne de chorus :**
Tout le vocabulaire du cancan se danse en formation — la synchronisation est centrale.`,
      },
      {
        titre: "La chorus line — art de la synchronisation",
        contenuMarkdown: `La chorus line est l'image définitive de la revue. Une ligne de danseuses synchronisées est un spectacle à part entière.

**Histoire de la chorus line :**
- **1866** : *The Black Crook* (New York) — premières chorus girls
- **1907** : Les Ziegfeld Follies — la chorus girl américaine standardisée
- **1974** : *A Chorus Line* (Broadway) — l'œuvre qui rend hommage et questionne l'institution
- **Moulin Rouge, Lido, Folies Bergère** : les grandes maisons de chorus européens

**Les Bluebell Girls :**
Fondées par Margaret Kelly ('Bluebell') en 1932, les Bluebell Girls du Lido de Paris sont l'une des troupes les plus célèbres au monde — standards de sélection stricts, formation intensive.

**Principes de la synchronisation :**

**L'écoute musicale :**
La synchronisation commence dans les oreilles, pas dans les yeux. Écouter le pulse ensemble — ne pas regarder les voisines pour se caler (ça crée un délai).

**La vision périphérique :**
En ligne, on voit ses voisines sans tourner la tête.

**L'amplitude commune :**
Si l'amplitude diffère, l'image est déséquilibrée. On s'accorde souvent sur la moins flexible du groupe.

**La qualité homogène :**
Pas seulement la forme — l'énergie, le regard, le sourire doivent être unifiés.

**La répétition comme construction :**
La synchronisation se construit en répétant ensemble — un seul cours ne suffit pas. C'est un travail de groupe dans la durée.`,
      },
      {
        titre: "Le port du costume et des accessoires",
        contenuMarkdown: `En cabaret, le costume n'est pas un ajout à la danse. Il *est* la danse.

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
- Tip (effleurer le bord — geste d'élégance)

---

**Le boa et l'éventail :**

Le boa a une physique propre — il suit le corps avec un délai qu'il faut anticiper et utiliser.

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

**Règle d'or :**
Répéter en costume complet dès que possible. Le costume modifie la danse — il faut s'y habituer physiquement.`,
      },
      {
        titre: "Présentation scénique et rapport au public",
        contenuMarkdown: `La technique est nécessaire. La présentation scénique est ce qui fait le spectacle.

**La présentation scénique — les éléments clés :**

**Le regard :**
En cabaret, le regard est actif et dirigé. Vers le public, vers un partenaire imaginaire, vers les coulisses avec mystère — mais jamais 'perdu'.

**Le sourire :**
Un sourire habité (qui vient d'une joie réelle de performer) vs un sourire figé (qui vient de la peur). Le public voit la différence.

**La projection :**
L'énergie qui sort du corps vers la salle. Un danseur peut techniquement être parfait et ne rien projeter — alors le public ne 'reçoit' rien.

**La conscience de l'espace :**
Savoir où on est sur scène, qui est devant soi, comment on s'inscrit dans la formation.

---

**Le rapport au public :**

En cabaret, le public n'est pas passif — il est participant. La relation est directe et vivante.

**Techniques de rapport au public :**
- Regard direct (pas au-dessus des têtes)
- Wink et jeux complices
- Timing : laisser le public réagir (rire, surprise) avant de continuer
- Révérence communicante (pas une formalité)

---

**La meneuse :**
Dans une revue, la meneuse est celle qui 'mène' — pas seulement physiquement, mais en énergie et en présence. La troupe se cale sur elle, pas l'inverse.

> Le public vient voir un spectacle. Donnez-leur un spectacle. Votre technique est l'outil — votre présence est le cadeau.`,
      },
    ],
  },
]
