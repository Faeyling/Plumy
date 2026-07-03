import type { QuestionQCMCours } from '@/content/schema'

export const questionsUnite1: QuestionQCMCours[] = [
  // ─── histoire-ballet · section 0 (Le ballet de cour) ─────────────────────
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 0,
    question: "Quel spectacle est considéré comme le premier ballet au sens moderne ?",
    bonneReponse: "Le Ballet Comique de la Reine (1581)",
    choix: [
      "Le Ballet Royal de la Nuit (1653)",
      "Le Ballet Comique de la Reine (1581)",
      "La Sylphide (1832)",
      "Le Lac des cygnes (1895)",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 0,
    question: "Qui a codifié les cinq positions des pieds encore enseignées aujourd'hui ?",
    bonneReponse: "Pierre Beauchamp, maître à danser de Louis XIV",
    choix: [
      "Jean-Georges Noverre",
      "Pierre Beauchamp, maître à danser de Louis XIV",
      "Marius Petipa",
      "Jean-Baptiste Lully",
    ],
  },

  // ─── histoire-ballet · section 1 (Le ballet d'action) ────────────────────
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 1,
    question: "Qu'est-ce que le 'ballet d'action', tel que défendu par Jean-Georges Noverre ?",
    bonneReponse: "Un ballet qui raconte une histoire par le geste expressif",
    choix: [
      "Un ballet où les danseurs sont en mouvement perpétuel",
      "Un ballet sans musique, centré sur le rythme du corps",
      "Un ballet qui raconte une histoire par le geste expressif",
      "Un ballet dansé exclusivement par des hommes",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 1,
    question: "Quelle danseuse du XVIIIe siècle a raccourci sa jupe pour montrer ses pieds et ses battements ?",
    bonneReponse: "Marie Camargo",
    choix: [
      "Marie Salle",
      "Marie Camargo",
      "Marie Taglioni",
      "Isadora Duncan",
    ],
  },

  // ─── histoire-ballet · section 2 (L'âge romantique) ──────────────────────
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 2,
    question: "Quel ballet (1832) est considéré comme le premier à utiliser les pointes de façon artistique ?",
    bonneReponse: "La Sylphide",
    choix: [
      "Giselle",
      "La Sylphide",
      "Le Lac des cygnes",
      "Casse-Noisette",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 2,
    question: "Comment se distingue le tutu romantique du tutu classique ?",
    bonneReponse: "Il est long et vaporeux, en mousseline blanche",
    choix: [
      "Il est court et rigide, en tulle empesé",
      "Il est toujours de couleur bleue ou verte",
      "Il est long et vaporeux, en mousseline blanche",
      "Il est en velours noir, symbole du tragique romantique",
    ],
  },

  // ─── histoire-ballet · section 3 (Petipa et la Russie) ───────────────────
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 3,
    question: "Dans quel théâtre Marius Petipa a-t-il créé l'essentiel du répertoire canonique du ballet classique ?",
    bonneReponse: "Le Théâtre Impérial Mariinsky à Saint-Pétersbourg",
    choix: [
      "L'Opéra de Paris",
      "Le Royal Ballet de Londres",
      "Le Théâtre Impérial Mariinsky à Saint-Pétersbourg",
      "Le Bolchoï de Moscou",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 3,
    question: "Lequel de ces ballets a été composé par Tchaïkovski pour Marius Petipa ?",
    bonneReponse: "La Belle au bois dormant",
    choix: [
      "Don Quichotte",
      "La Belle au bois dormant",
      "La Bayadère",
      "Le Corsaire",
    ],
  },

  // ─── histoire-ballet · section 4 (Révolutions du XXe siècle) ─────────────
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 4,
    question: "Quel compositeur a créé Le Sacre du printemps pour les Ballets Russes de Diaghilev ?",
    bonneReponse: "Igor Stravinski",
    choix: [
      "Igor Stravinski",
      "Sergueï Prokofiev",
      "Claude Debussy",
      "Sergueï Rachmaninov",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-ballet',
    sectionIndex: 4,
    question: "George Balanchine est associé à quel style chorégraphique ?",
    bonneReponse: "Le néoclassicisme : ballet sans histoire ni décors surchargés, centré sur la musique et le mouvement pur",
    choix: [
      "Le Tanztheater : danse-théâtre où les interprètes parlent et expriment des émotions brutes",
      "Le ballet romantique : sylphides et atmosphères fantastiques",
      "Le néoclassicisme : ballet sans histoire ni décors surchargés, centré sur la musique et le mouvement pur",
      "L'Ausdruckstanz : danse sombre et politique",
    ],
  },

  // ─── histoire-moderne-contemporain · section 0 (Naissance moderne) ────────
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 0,
    question: "Selon quel principe Isadora Duncan dit-elle que le mouvement naît ?",
    bonneReponse: "Du plexus solaire, le siège de l'émotion",
    choix: [
      "Des extrémités vers le centre du corps",
      "Du plexus solaire, le siège de l'émotion",
      "Du rythme musical, strictement respecté",
      "Du contact avec le sol, qui remonte vers la tête",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 0,
    question: "Quelle école a formé des artistes comme Martha Graham, Doris Humphrey et Charles Weidman ?",
    bonneReponse: "La Denishawn School",
    choix: [
      "L'Académie Royale de Danse de Paris",
      "Le Conservatoire de New York",
      "La Denishawn School",
      "Le Joffrey Ballet School",
    ],
  },

  // ─── histoire-moderne-contemporain · section 1 (Ausdruckstanz) ───────────
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 1,
    question: "Mary Wigman, figure centrale de l'Ausdruckstanz, est l'élève de…",
    bonneReponse: "Rudolf Laban",
    choix: [
      "Isadora Duncan",
      "Rudolf Laban",
      "Jean-Georges Noverre",
      "Merce Cunningham",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 1,
    question: "Qu'est-ce que 'La Table Verte' (1932) de Kurt Jooss ?",
    bonneReponse: "Un ballet anti-guerre où la Mort conduit une danse macabre pendant que des diplomates négocient",
    choix: [
      "Un ballet anti-guerre où la Mort conduit une danse macabre pendant que des diplomates négocient",
      "Une pièce d'Ausdruckstanz sur le quotidien d'une famille berlinoise",
      "Un ballet sur la naissance du mouvement syndical ouvrier en Allemagne",
      "Un hommage à la révolution russe dansé autour d'une table ronde",
    ],
  },

  // ─── histoire-moderne-contemporain · section 2 (Âge d'or américain) ───────
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 2,
    question: "Sur quoi la technique de Martha Graham est-elle fondée ?",
    bonneReponse: "La contraction et le release",
    choix: [
      "La contraction et le release",
      "La chute et la récupération",
      "Le contact improvisation",
      "La suspension et le rebond",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 2,
    question: "Quel concept Doris Humphrey a-t-elle développé comme principe de sa technique ?",
    bonneReponse: "La chute et la récupération (fall and recovery)",
    choix: [
      "La contraction et le release",
      "La chute et la récupération (fall and recovery)",
      "Le contact improvisation",
      "La suspension et le rebond",
    ],
  },

  // ─── histoire-moderne-contemporain · section 3 (Judson Church) ────────────
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 3,
    question: "Quel artiste a développé le contact improvisation en 1972 ?",
    bonneReponse: "Steve Paxton",
    choix: [
      "Yvonne Rainer",
      "Steve Paxton",
      "Trisha Brown",
      "Simone Forti",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 3,
    question: "Qu'affirme le 'No Manifesto' d'Yvonne Rainer (1965) ?",
    bonneReponse: "Non à la virtuosité, non au spectaculaire — le mouvement quotidien est de la danse",
    choix: [
      "La danse ne doit exister que sans musique",
      "Non à la virtuosité, non au spectaculaire — le mouvement quotidien est de la danse",
      "La technique académique est la seule base valide pour la danse contemporaine",
      "Le corps dansant ne doit jamais toucher le sol",
    ],
  },

  // ─── histoire-moderne-contemporain · section 4 (Contemporain mondial) ─────
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 4,
    question: "Pina Bausch est la fondatrice de quel mouvement chorégraphique ?",
    bonneReponse: "Le Tanztheater (danse-théâtre)",
    choix: [
      "Le ballet néoclassique",
      "La danse postmoderne américaine",
      "Le Tanztheater (danse-théâtre)",
      "L'Ausdruckstanz",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-moderne-contemporain',
    sectionIndex: 4,
    question: "Quel dispositif politique français a soutenu la danse contemporaine dans les années 1980–1990 ?",
    bonneReponse: "La décentralisation culturelle, avec un réseau de Centres Chorégraphiques Nationaux",
    choix: [
      "La nationalisation des compagnies de danse",
      "L'obligation d'enseignement de la danse dans les lycées",
      "La décentralisation culturelle, avec un réseau de Centres Chorégraphiques Nationaux",
      "La création d'un Ministère de la Danse distinct du Ministère de la Culture",
    ],
  },

  // ─── histoire-jazz · section 0 (Racines africaines) ─────────────────────
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 0,
    question: "Quel lieu à La Nouvelle-Orléans était connu comme un espace de rassemblement et de danse pour les esclaves le dimanche ?",
    bonneReponse: "Congo Square",
    choix: [
      "Bourbon Street",
      "Congo Square",
      "Jackson Square",
      "Storyville",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 0,
    question: "Qu'est-ce que le polycentrisme dans la tradition de danse africaine et afro-américaine ?",
    bonneReponse: "Plusieurs centres du corps bougent indépendamment les uns des autres",
    choix: [
      "Un seul centre d'énergie dans le plexus solaire gouverne tous les gestes",
      "Plusieurs centres du corps bougent indépendamment les uns des autres",
      "La danse tourne autour d'un axe central vertical immobile",
      "Tous les mouvements partent du bassin comme unique centre",
    ],
  },

  // ─── histoire-jazz · section 1 (Le Ragtime) ──────────────────────────────
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 1,
    question: "Vernon et Irene Castle ont joué quel rôle dans l'histoire des danses ragtime ?",
    bonneReponse: "Ils ont popularisé les danses syncopées dans les salons en les 'civilisant' pour un public bourgeois blanc",
    choix: [
      "Ils ont créé le Cake Walk dans les plantations du Sud",
      "Ils ont fondé le Savoy Ballroom à Harlem",
      "Ils ont popularisé les danses syncopées dans les salons en les 'civilisant' pour un public bourgeois blanc",
      "Ils ont été les premiers musiciens à enregistrer du ragtime sur disque",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 1,
    question: "Le Cake Walk est à l'origine…",
    bonneReponse: "Une parodie ironique par des esclaves qui imitaient les danses formelles de leurs maîtres",
    choix: [
      "Une parodie ironique par des esclaves qui imitaient les danses formelles de leurs maîtres",
      "Une danse de compétition née dans les foires itinérantes américaines",
      "Une danse de salon introduite par des immigrants irlandais",
      "Un rituel de célébration lié aux récoltes dans les communautés noires",
    ],
  },

  // ─── histoire-jazz · section 2 (Harlem et le swing) ─────────────────────
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 2,
    question: "Qui a inventé le Lindy Hop ?",
    bonneReponse: "Frankie Manning et Shorty George Snowden",
    choix: [
      "Vernon et Irene Castle",
      "Frankie Manning et Shorty George Snowden",
      "Jack Cole et Bob Fosse",
      "Louis Armstrong et Duke Ellington",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 2,
    question: "À quelle référence le nom 'Lindy Hop' fait-il allusion ?",
    bonneReponse: "Charles Lindbergh (Lindy) et sa traversée de l'Atlantique",
    choix: [
      "Charles Lindbergh (Lindy) et sa traversée de l'Atlantique",
      "Un personnage de fiction des romans populaires des années 1920",
      "Le nom du Savoy Ballroom",
      "Un terme argotique de Harlem signifiant 'sauter vers l'avant'",
    ],
  },

  // ─── histoire-jazz · section 3 (Broadway) ────────────────────────────────
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 3,
    question: "Qui est considéré comme le père fondateur du jazz theatrical ?",
    bonneReponse: "Jack Cole",
    choix: [
      "Bob Fosse",
      "Jack Cole",
      "Jerome Robbins",
      "Gus Giordano",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 3,
    question: "Quels éléments sont caractéristiques du style de Bob Fosse ?",
    bonneReponse: "Chapeaux melon, gants blancs, corps obliques et mouvements sexuels mais stylisés",
    choix: [
      "Chapeaux melon, gants blancs, corps obliques et mouvements sexuels mais stylisés",
      "Tutus courts, pointes et formations géométriques symétriques",
      "Turbans, voiles et références orientalistes",
      "Tenues de sport, énergie de rue et ruptures de rythme",
    ],
  },

  // ─── histoire-jazz · section 4 (Jazz today) ──────────────────────────────
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 4,
    question: "Parmi ces sous-styles du jazz dance, lequel est caractérisé par un retour aux sources africaines et le groove ?",
    bonneReponse: "L'afro-jazz",
    choix: [
      "Le lyrical jazz",
      "Le street jazz",
      "L'afro-jazz",
      "Le Fosse",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-jazz',
    sectionIndex: 4,
    question: "Quelle est la place du jazz dance en France en termes d'enseignement ?",
    bonneReponse: "La discipline la plus enseignée après le classique et le contemporain",
    choix: [
      "La discipline la moins populaire, souvent confondue avec le hip-hop",
      "Elle est enseignée exclusivement dans les conservatoires nationaux",
      "La discipline la plus enseignée après le classique et le contemporain",
      "Elle est en fort déclin depuis les années 2000",
    ],
  },

  // ─── histoire-cabaret-burlesque-heels · section 0 (Café-concert) ──────────
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 0,
    question: "Où le french cancan était-il notamment présenté dès 1889 ?",
    bonneReponse: "Au Moulin Rouge",
    choix: [
      "À l'Opéra Garnier",
      "Au Moulin Rouge",
      "Au Théâtre du Châtelet",
      "Aux Folies Bergère",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 0,
    question: "Qu'est-ce qu'une 'revue' dans le contexte du music-hall de la Belle Époque ?",
    bonneReponse: "Un spectacle total avec des numéros variés, des décors somptueux et des girls en costume élaboré",
    choix: [
      "Une critique littéraire d'un spectacle de danse",
      "Un ballet narratif en trois actes",
      "Un spectacle total avec des numéros variés, des décors somptueux et des girls en costume élaboré",
      "Un type de cabaret politique et satirique",
    ],
  },

  // ─── histoire-cabaret-burlesque-heels · section 1 (Kabarett) ─────────────
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 1,
    question: "Qui a créé l'Opéra de quat'sous (1928), œuvre emblématique du Kabarett berlinois ?",
    bonneReponse: "Kurt Weill et Bertolt Brecht",
    choix: [
      "Kurt Weill et Bertolt Brecht",
      "Marlene Dietrich et Friedrich Hollander",
      "Joséphine Baker et Cole Porter",
      "Fritz Lang et Friedrich Wilhelm Murnau",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 1,
    question: "À partir de quelle année Joséphine Baker s'est-elle produite aux Folies Bergère ?",
    bonneReponse: "1925",
    choix: [
      "1910",
      "1925",
      "1900",
      "1940",
    ],
  },

  // ─── histoire-cabaret-burlesque-heels · section 2 (Burlesque américain) ───
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 2,
    question: "Qu'est-ce qui caractérisait le style de Gypsy Rose Lee dans le burlesque ?",
    bonneReponse: "L'effeuillage comme art intellectuel et ironique — elle récitait de la poésie en se déshabillant",
    choix: [
      "L'effeuillage comme art intellectuel et ironique — elle récitait de la poésie en se déshabillant",
      "Le burlesque acrobatique avec des figures aériennes spectaculaires",
      "La danse au fan (éventail de plumes d'autruche)",
      "Un style ultra-glamour directement inspiré du cinéma hollywoodien",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 2,
    question: "La première époque du burlesque américain (1860–1900) était surtout connue pour…",
    bonneReponse: "Des troupes de femmes qui parodiaient les codes masculins et jouaient Shakespeare de façon comique",
    choix: [
      "Des troupes de femmes qui parodiaient les codes masculins et jouaient Shakespeare de façon comique",
      "Le striptease progressif dans des salles réservées aux adultes",
      "Des spectacles de magie et d'acrobatie sans connotation sexuelle",
      "Des revues importées d'Europe avec des danseuses cancan",
    ],
  },

  // ─── histoire-cabaret-burlesque-heels · section 3 (Néo-burlesque & heels) ─
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 3,
    question: "D'où vient l'origine de la heels dance en tant que discipline ?",
    bonneReponse: "La culture vogue et ballroom afro-américaine et latino-américaine de New York (Harlem, années 1970–1980)",
    choix: [
      "Les revues de Las Vegas des années 1950",
      "Le cabaret berlinois des années 1920",
      "La culture vogue et ballroom afro-américaine et latino-américaine de New York (Harlem, années 1970–1980)",
      "Les cours de danse fitness apparus dans les années 1990",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-cabaret-burlesque-heels',
    sectionIndex: 3,
    question: "Quel film (1990) a documenté la scène vogue et ballroom de New York ?",
    bonneReponse: "Paris Is Burning",
    choix: [
      "Dirty Dancing",
      "Paris Is Burning",
      "Flashdance",
      "Saturday Night Fever",
    ],
  },

  // ─── histoire-pole-dance · section 0 (Origines) ──────────────────────────
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 0,
    question: "Qu'est-ce que le Mallakhamb ?",
    bonneReponse: "Une discipline de lutte traditionnelle indienne du XIIe siècle pratiquée sur un poteau de bois ou une corde",
    choix: [
      "Un style de danse tribale africaine sur des piliers de bois",
      "Une forme de cirque chinois vieille de plusieurs siècles",
      "Une discipline de lutte traditionnelle indienne du XIIe siècle pratiquée sur un poteau de bois ou une corde",
      "Un type de yoga acrobatique pratiqué sur des poteaux",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 0,
    question: "Pourquoi le mat chinois et le Mallakhamb sont-ils mentionnés dans le cours sur le pole dance ?",
    bonneReponse: "Pour montrer que l'exercice sur poteau existe dans différentes cultures — sans être des ancêtres directs du pole dance moderne",
    choix: [
      "Pour montrer que l'exercice sur poteau existe dans différentes cultures — sans être des ancêtres directs du pole dance moderne",
      "Parce qu'ils sont les origines directes du pole dance tel qu'on le pratique aujourd'hui",
      "Pour montrer que le pole dance est une pratique universelle datant de l'Antiquité",
      "Parce qu'ils influencent directement les compétitions de pole sport actuelles",
    ],
  },

  // ─── histoire-pole-dance · section 1 (La scène américaine) ──────────────
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 1,
    question: "Qui sont décrites comme les créatrices du vocabulaire technique et artistique du pole dance moderne ?",
    bonneReponse: "Les travailleuses du sexe dans les clubs américains, majoritairement des femmes noires, racisées et LGBTQ+",
    choix: [
      "Des gymnastes professionnelles reconverties dans le pole sport",
      "Les travailleuses du sexe dans les clubs américains, majoritairement des femmes noires, racisées et LGBTQ+",
      "Des danseuses classiques cherchant une nouvelle discipline",
      "Des acrobates de cirque ayant adapté le mat chinois",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 1,
    question: "Quel est le rôle de Fawnia Mondey dans l'histoire du pole dance ?",
    bonneReponse: "La première à enseigner le pole en dehors des clubs, dès les années 1990, et à créer des vidéos pédagogiques",
    choix: [
      "La fondatrice de la Fédération Internationale de Pole Sports",
      "La gagnante du premier championnat mondial de pole dance (2005)",
      "La première à enseigner le pole en dehors des clubs, dès les années 1990, et à créer des vidéos pédagogiques",
      "La première à introduire le pole dans un cirque professionnel",
    ],
  },

  // ─── histoire-pole-dance · section 2 (La révolution sportive) ────────────
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 2,
    question: "En quelle année la Fédération Internationale de Pole Sports (IPSF) a-t-elle obtenu la reconnaissance de l'Association Mondiale des Sports (GAISF) ?",
    bonneReponse: "2017",
    choix: [
      "2005",
      "2010",
      "2017",
      "2022",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 2,
    question: "Quelle est la différence principale entre le pole sport et le pole art ?",
    bonneReponse: "Le pole sport juge la difficulté technique, la force et la souplesse ; le pole art valorise l'expression artistique et la narration",
    choix: [
      "Le pole sport juge la difficulté technique, la force et la souplesse ; le pole art valorise l'expression artistique et la narration",
      "Le pole sport se pratique en compétition, le pole art uniquement en spectacle privé",
      "Le pole sport interdit les contacts avec le sol, le pole art les encourage",
      "Le pole sport se pratique sans musique, le pole art intègre toujours une bande-son",
    ],
  },

  // ─── histoire-pole-dance · section 3 (France et le débat) ───────────────
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 3,
    question: "Qu'est-ce que la 'misogynoir' mentionnée dans le cours ?",
    bonneReponse: "Le racisme et le sexisme combinés visant les femmes noires",
    choix: [
      "Une technique d'inversion spécifique au pole contemporain",
      "Un mouvement féministe né dans la scène burlesque néo-américaine",
      "Le racisme et le sexisme combinés visant les femmes noires",
      "La peur irrationnelle du pole dance dans les espaces publics",
    ],
  },
  {
    type: 'cours',
    coursId: 'histoire-pole-dance',
    sectionIndex: 3,
    question: "Selon le cours, à qui appartient d'abord la question du regard sur le pole dance ?",
    bonneReponse: "À chaque pratiquante, pas à ceux qui regardent de l'extérieur",
    choix: [
      "Aux fédérations sportives qui définissent les cadres de pratique",
      "À chaque pratiquante, pas à ceux qui regardent de l'extérieur",
      "Au grand public, qui décide de la légitimité culturelle",
      "Aux médias, qui ont le pouvoir de changer les représentations",
    ],
  },
]
