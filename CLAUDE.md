# Cahier des charges — Application Plumy

> **Référence permanente.** Ce fichier est le cahier des charges complet de l'application. S'y référer à chaque prompt pour toute décision d'architecture, de contenu ou de design.
>
> **Contrainte absolue : demander confirmation avant tout `git push`.**

---

## Identité

- **Nom** : Plumy (nom de l'app = nom de la mascotte)
- **Mascotte** : paon bleu, présenté de profil tourné vers la droite, sur fond rose dans le logo
- **Concept narratif central** : toute l'app est présentée comme les **carnets de cours de Plumy**, un paon devenu professeur malgré lui. Plumy tutoie l'utilisateur et lui parle comme à un ami.

---

## §1 — Vision et objectif

Application web complète, finalisée et déployable (pas un prototype) pour apprendre le vocabulaire de la danse à travers **huit disciplines traitées à égalité** :

**classique · contemporain · moderne · jazz · cabaret · pole dance · effeuillage burlesque · heels**

Les huit disciplines sont sur un **strict pied d'égalité** : même structure, même soin, même place dans l'interface, la navigation, le glossaire, les quiz et la gamification. La pole dance, le burlesque et le heels ne sont pas des annexes — ce sont des disciplines pleines avec leur histoire, leur vocabulaire et leurs enjeux de santé propres.

Le jazz est traité comme une famille riche avec ses sous-styles explicitement différenciés (voir §5 Unité 5).

**Finalité pédagogique** : permettre à un danseur de progresser de débutant à avancé en maîtrisant le vocabulaire technique.

**Posture du livrable** :
- Version finale, complète et déployable — pas un prototype
- Construction par étapes validées (voir §11), sans tout générer d'un coup
- Code de chaque étape terminé et fonctionnel — pas de zones « à finir plus tard »
- Séparation stricte contenu/code

---

## §1bis — Concept narratif : « Les carnets de Plumy »

Tout le contenu est présenté comme les carnets personnels de Plumy. Les unités, cours, fiches, sources ne sont pas des « pages d'app » neutres — ce sont les pages des carnets de cours de Plumy que l'utilisateur consulte par-dessus son épaule.

**Pitch** : Plumy, paon passionné de danse, a passé sa vie à remplir des carnets — vocabulaire, croquis, conseils, mises en garde, anecdotes, notes de prévention. Sans vraiment l'avoir cherché, Plumy devient notre professeur malgré lui.

**Implications de conception (à appliquer partout)** :
- **Voix permanente de Plumy** : tutoiement, première personne, chaleureux, complice, vivant (voir §12 charte de voix)
- **Habillage « carnet »** : UI évoquant des carnets/cahiers (intercalaires, pages, ruban marque-page, écriture manuscrite ponctuelle, croquis SVG, post-it pour astuces) — tout en restant lisible, moderne, pop candy et accessible
- **Vocabulaire cohérent** : « carnets » (disciplines), « pages/fiches » (termes), « carnet de notes » (termes personnels), « carnet de santé » (unité prévention)
- **Personnification maximale** : Plumy a une personnalité, des goûts, des petites manies, des réactions émotionnelles. Le contenu factuel reste rigoureux — la personnification touche le ton, jamais l'exactitude

---

## §2 — Contraintes techniques fermes

| Sujet | Décision |
|-------|----------|
| Type d'app | PWA installable (manifest + service worker), mobile-first |
| Hors-ligne | Fonctionnement intégral hors-ligne : assets + données + progression en cache |
| Déploiement | Optimisé Vercel, build statique, sans backend |
| Stockage | 100 % local via IndexedDB — aucune base distante, aucun compte, aucune auth |
| Langue | Français uniquement |
| Médias visuels | Tout en code : SVG animé / CSS / Canvas — aucun fichier image embarqué |
| Vidéos | Liens externes uniquement (YouTube etc.), iframe ou nouvel onglet |
| Audio | Non requis, architecture prête (champs `prononciation` et `audioUrl` présents, inactifs) |
| Répétition espacée | Aucun algorithme Anki/SM-2 |
| Paliers | Aucun affichage débutant/intermédiaire/avancé — progression fluide |

**Stack** :
- React + Vite + TypeScript strict
- Tailwind CSS (design system « pop candy »)
- Dexie.js (surcouche IndexedDB)
- Framer Motion (`prefers-reduced-motion` respecté)
- Recharts pour les graphiques
- `vite-plugin-pwa` pour le service worker et le manifest
- Aucune dépendance nécessitant un serveur ou des secrets

---

## §3 — Architecture de fichiers

```
/
├── public/               # manifest, icônes PWA
├── src/
│   ├── app/              # bootstrap, routing, providers, layout global
│   ├── components/
│   │   ├── mascotte/     # mascotte SVG animée + états/réactions
│   │   ├── flashcards/
│   │   ├── quiz/
│   │   ├── charts/
│   │   └── ui/           # boutons, modales, champs, focus ring
│   ├── features/
│   │   ├── glossaire/
│   │   ├── unites/
│   │   ├── cours/
│   │   ├── revision/
│   │   ├── progression/
│   │   ├── termes-perso/
│   │   ├── sources/      # page Sources + composant renvoi-références
│   │   ├── graphe-danses/ # schéma interactif origines/interactions (§5ter)
│   │   ├── onboarding/
│   │   ├── sauvegarde/   # export/import JSON + rappel + bouton permanent
│   │   └── a-propos/
│   ├── content/          # CONTENU PÉDAGOGIQUE = données pures
│   │   ├── termes/       # un fichier par unité
│   │   ├── cours/
│   │   ├── unites.ts
│   │   ├── references.ts
│   │   ├── graphe-danses.ts
│   │   └── schema.ts     # types TypeScript (source de vérité)
│   ├── data/             # couche IndexedDB (Dexie), repositories
│   ├── animations/       # composants SVG d'animation
│   ├── lib/              # utilitaires (recherche, scoring, gamification)
│   ├── styles/           # design tokens pop candy
│   └── i18n/             # libellés FR centralisés
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTENT-GUIDE.md
│   └── DEPLOY.md
└── README.md
```

**Règle d'or** : ajouter un terme, un cours ou une unité doit se faire uniquement en éditant `src/content/` sans toucher au code applicatif.

---

## §4 — Modèle de données (source de vérité)

```typescript
// src/content/schema.ts

export type Discipline =
  | 'classique' | 'contemporain' | 'moderne' | 'jazz' | 'cabaret'
  | 'pole-dance' | 'burlesque' | 'heels' | 'commun';

export type SousStyle =
  | 'jazz-classique' | 'broadway-jazz' | 'fosse' | 'modern-jazz'
  | 'lyrical-jazz' | 'street-jazz' | 'afro-jazz'
  | 'pole-sport' | 'pole-art' | 'exotic' | 'pole-theatre';

export type Categorie =
  | 'positions' | 'pas' | 'sauts' | 'tours' | 'ports-de-bras'
  | 'deplacements' | 'qualites-de-mouvement' | 'batterie' | 'equilibres'
  | 'liaisons' | 'concepts' | 'culture-histoire'
  | 'figures-aeriennes' | 'montees-climbs' | 'prises-grips' | 'inversions'
  | 'travail-au-sol' | 'jeu-de-scene' | 'accessoires' | 'sante-prevention';

export interface Terme {
  id: string;                    // slug stable
  nom: string;                   // orthographe + accents exacts
  alias?: string[];
  disciplines: Discipline[];
  sousStyles?: SousStyle[];
  categories: Categorie[];
  definition: string;            // dans nos propres mots, jamais copiée
  description: string;           // exécution détaillée
  erreursCourantes: string[];    // REQUIS (tableau vide si aucun)
  conseils?: string[];
  prononciation?: string;
  equivalentAnglais?: string;
  audioUrl?: string;             // réservé, laisser undefined
  animationId?: string;
  videosExternes?: { titre: string; url: string; source: string }[];
  termesLies?: string[];
  difficulteInterne: 1 | 2 | 3 | 4 | 5;  // NON affichée
  etymologie?: string;
  securite?: {
    risques: string[];
    precautions: string[];
    referencesIds?: string[];
  };
}

export interface Cours {
  id: string;
  titre: string;
  resume: string;
  sections: { titre: string; contenuMarkdown: string; schemaId?: string }[];
  disciplines: Discipline[];
  termesAbordes?: string[];
  videosExternes?: { titre: string; url: string; source: string }[];
}

export interface Unite {
  numero: number;
  titre: string;
  description: string;
  coursIds: string[];
  termeIds: string[];
  quizDisponibles: QuizType[];
  iconeSvgId: string;
}

export type QuizType =
  | 'qcm' | 'association' | 'reconnaissance-visuelle' | 'texte-a-trous' | 'flashcards';

export interface ProgressionTerme {
  termeId: string;
  statut: 'jamais-vu' | 'vu' | 'a-revoir' | 'maitrise';
  favori?: boolean;
  vuLe?: number;
  reussitesQuiz: number;
  echecsQuiz: number;
}

export interface StatsGlobales {
  points: number;
  badges: string[];
  serieJours: number;
  derniereVisite: number;
  quizJoues: number;
  historiqueActivite: { date: string; termesVus: number; quizReussis: number }[];
  dernierExport?: number;
  joursUsageDepuisExport?: number;
  dernierJourUsage?: string;
  rappelSauvegardeActif?: boolean;
  onboardingVu?: boolean;
}

export interface TermePersonnel extends Partial<Terme> {
  id: string;
  estPersonnel: true;
  noteLibre?: string;
}

export interface Reference {
  id: string;
  theme: 'epidemiologie' | 'psychologie' | 'hanche-turnout-flexibilite'
    | 'renforcement-neuromusculaire' | 'pole-dance' | 'talons-heels'
    | 'francophone' | 'physiologie' | 'culture-histoire';
  auteurs: string;
  annee: number;
  titre: string;
  revue?: string;
  lien?: string;
  disciplines?: Discipline[];
  resume?: string;
}
```

---

## §5 — Unités et cours

Navigation libre (ordre suggéré non contraignant). Unités numérotées de 0 à N.

**Unité 0 — Comprendre le corps qui danse** (fondamentaux communs)
- Facteurs Laban (Poids, Temps, Espace, Flux), kinésphère, plans, niveaux, 8 actions d'effort
- Anatomie/physiologie appliquées : placement, en-dehors, gestion du poids
- Formation musicale : pulsation, tempo, mesure, phrasé, comptes
- Repères scéniques : jardin/cour, face/lointain, diagonales

**Unité 1 — Histoire et évolution des arts chorégraphiques**
- Ballet de cour → classique → moderne (Duncan, Graham, Horton, Limón) → contemporain
- Histoire du cabaret, du jazz et ses ramifications
- Histoire de la pole dance (née dans les strip-clubs, créée par des travailleuses du sexe majoritairement noires/racisées et LGBTQ+)
- Histoire du burlesque (music-hall, néo-burlesque)
- Histoire du heels (héritage cabaret/showgirl, communautés noires et LGBTQ+)
- Frise chronologique SVG couvrant les 8 disciplines + schéma origines/interactions (§5ter)

**Unité 2 — Vocabulaire classique**
- Positions des pieds et des bras, barre vs milieu
- Adage : développé, fondu, arabesque, attitude
- Allegro : assemblé, jeté, sissonne, changement de pieds, ballotté, ballonné
- Tours : pirouette, déboulés, fouetté
- Batterie : entrechats, brisés
- Déplacements : chassé, glissade, pas de bourrée, balancé, pas de basque
- Ronds de jambe, plié, relevé, dégagé, piqué

**Unité 3 — Vocabulaire contemporain**
- Travail au sol, release, poids et abandon, spirales
- Contact improvisation, chutes et récupérations, suspension
- Application facteurs Laban, improvisation guidée

**Unité 4 — Vocabulaire moderne**
- Contraction/release, fall and recovery, isolations
- Travail du buste et du bassin, qualités d'appui
- Héritage générique (sans terminologie d'école protégée)

**Unité 5 — Vocabulaire jazz et sous-styles**
Tronc commun : isolations, kick-ball-change, jazz walk, jazz square, pivot/paddle turn, groove, syncope, attitude scénique.

Sous-styles explicitement différenciés :
- **Jazz classique/théâtral** : racines jazz de scène, lignes nettes, comédie musicale
- **Broadway/musical theatre jazz** : jazz narratif, jazz hands, storytelling, grands finals
- **Technique Fosse** : isolations précises, épaules voûtées, mains articulées, chapeaux/gants, hanche décalée, staccato
- **Modern jazz** : fusion jazz + danse moderne, travail au sol, amplitude
- **Lyrical jazz** : interprétation émotionnelle, fluidité, suspensions
- **Street jazz/jazz funk** : influences hip-hop, attitude, grooves, sharp moves
- **Afro-jazz** : ancrage, polyrythmie, bassin et torse, énergie africaine

**Unité 6 — Vocabulaire heels** (discipline à part entière)
- Fondamentaux : posture, walks/struts, appuis (talon, demi-pointe, bords), équilibre
- Mouvements signature : body rolls, hip pops, dips, hairography, floorwork, turns en talons
- Esprit : présence, attitude, empowerment
- Filiations : cabaret, burlesque, jazz, ballroom, hip-hop, danses latines, vogue/go-go
- Discipline transversale (jazz en heels, hip-hop en heels, commercial/stiletto)
- Ton inclusif et non genré

**Unité 7 — Vocabulaire cabaret**
- French cancan : battements, grand écart sauté, port de jupon, ligne de chorus
- Revue et music-hall, port du costume et des accessoires (éventail, boa, plumes)
- Adresse au public, glamour, précision de ligne

**Unité 8 — Vocabulaire pole dance** (discipline à part entière)
- Styles : pole sport (IPSF), pole art, exotic/exotic flow, pole theatre
- Prises (grips) : familles génériques sans marque déposée
- Montées, descentes contrôlées, figures statiques, spins, inversions, floorwork
- Notions matérielles : barre statique vs tournante, diamètre, grip, tenue, crash mat
- **Volet culturel obligatoire et développé** (voir ci-dessous)

**Volet culturel pole dance — exigences précises** :
- La pole moderne est née dans les strip-clubs, créée par des travailleuses du sexe, majoritairement des femmes noires/racisées et LGBTQ+ — ce sont elles qui ont bâti le vocabulaire actuel
- Mallakhamb et mât chinois = pratiques distinctes à mentionner sans les utiliser pour blanchir l'histoire
- Expliquer clairement le whitewashing, la whorephobie et la misogynoir
- Terme « exotic » : histoire raciste à nommer, débat communautaire à mentionner
- Honorer les pionnières, soutenir les droits des travailleuses du sexe
- Ton factuel, nuancé, respectueux, dans la voix de Plumy
- Relier au heels, au vogue et aux danses commerciales dans le schéma §5ter

**Unité 9 — Vocabulaire effeuillage burlesque** (discipline à part entière)
- Le tease : tempo, suspense, bumps and grinds, shimmy
- Accessoires : éventails de plumes, boa, gants longs, gaine/bas, chaise, ballons
- Personnage et présence : persona, autodérision, glamour, héritage music-hall/vaudeville, néo-burlesque
- Jeu de scène : adresse, timing comique, poses, finale
- Distinguer effeuillage artistique/scénique et travail érotique — contenu respectueux et factuel

**Unité 10 — Danser sans se blesser** (cours transversal, voir §5bis)
Voir §5bis pour le contenu scientifique détaillé.

**Unité 11 — L'art de l'improvisation et la composition**
- Improvisation comme outil de création, consignes/contraintes, écoute corporelle
- Composition chorégraphique (espace, temps, énergie, relation)
- Fiche « Écrire la danse » : Labanotation, notation Benesh (curiosité, pas module d'apprentissage)

---

## §5bis — Unité Santé : contenu scientifique

Messages-clés à transmettre fidèlement (dans nos propres mots, jamais copiés) :

1. **Ampleur** : prévalence vie entière ~40–84 % chez les danseurs de ballet pro ; membres inférieurs + dos ; surmenage et tissus mous
2. **Cause dominante = surmenage** : récupération insuffisante face à charge élevée → gestion de charge, repos, progressivité
3. **Facteurs de risque** : antécédent de blessure, IMC élevé, stress élevé, faible soutien social, fatigue (LCA, récidive entorse)
4. **En-dehors forcé** : facteur de risque majeur — ne jamais forcer les pieds, travailler la rotation depuis la hanche
5. **Assouplissement raisonné** : souplesse équilibrée, pas maximale (abducteurs, bandelette ilio-tibiale) ; un stage intensif peut réduire temporairement la souplesse passive
6. **Renforcement neuromusculaire** : levier préventif le mieux étayé, −30 à −50 % de risque (sport) ; programmes spécifiques danse (11+ Dance adapté FIFA 11+)
7. **Approches complémentaires** : éducation, surveillance, gestion charge, soutien psychosocial
8. **Spécificité pole** : épaule (54,5 %), poignet (34,2 %), dos ; lésions aiguës (chutes, inversions) ; insister sur crash mat, parade, progressivité inversions, engagement scapulaire
9. **Spécificité cabaret/heels/burlesque** : hanches, ischio-jambiers, dos (cancan) ; cheville, avant-pied, Achille, gainage (talons hauts) ; genoux/poignets (travail au sol)
10. **Constat francophone** : danseurs rarement traités en athlètes, suivi santé insuffisant ; prévention dès le début

**Ton** : informatif et bienveillant, jamais anxiogène. Afficher un avertissement clair : ne remplace pas un avis médical.

**Termes de glossaire** (catégorie `sante-prevention`) : surmenage, charge d'entraînement, contrôle neuromusculaire, proprioception, gainage, en-dehors compensé, hypermobilité, échauffement, récupération, RICE/POLICE, engagement scapulaire, etc.

---

## §5ter — Schéma interactif « Origines et interactions des danses »

Graphe orienté SVG (D3.js ou Framer Motion), lecture chronologique gauche→droite, responsive, navigable au clavier, alternative textuelle complète.

**Relations à représenter** :
- Ballet de cour → danse classique
- Traditions africaines et afro-américaines → jazz
- Strip-clubs / travailleuses du sexe (noires, racisées, LGBTQ+) = cœur de la pole moderne ; mallakhamb et mât chinois = branches distinctes
- Music-hall / vaudeville / burlesque américain → cabaret, burlesque, (en partie) heels
- Danse classique → moderne, contemporain, jazz théâtral, heels (lignes)
- Danse moderne → contemporaine → modern jazz
- Jazz → sous-styles (nœuds enfants) : jazz classique, Broadway, Fosse, modern jazz, lyrical, street jazz, afro-jazz
- Cabaret ↔ burlesque ; tous deux → heels (showgirl, plumes, attitude)
- Burlesque → néo-burlesque
- Pole → pole sport, pole art, exotic, pole theatre ; exotic ↔ heels + burlesque
- **Heels = carrefour** : jazz/Fosse/Broadway + cabaret/burlesque + ballroom + hip-hop/commercial + danses latines + vogue/go-go
- Danses urbaines/commerciales → street jazz, heels, exotic pole
- Marquer visuellement l'héritage des communautés noires/LGBTQ+ sur pole, heels et vogue

Données dans `src/content/graphe-danses.ts` (nœuds + liens) — schéma éditable sans toucher au code de rendu.

---

## §6 — Volume minimal de contenu

- **Cours** (Unités 0, 1, 10, 11) : entièrement rédigés, plusieurs sections chacun
- **Schéma origines/interactions** : fonctionnel, peuplé, alternative textuelle
- **Termes** : ~130–170 termes réels ; au moins ~12–15 termes propres par discipline + termes mutualisés ; chacun avec définition, description, `erreursCourantes`, étymologie si pertinent, au moins un terme lié
- **Animations** : au minimum positions de base + ~12 pas/figures emblématiques en SVG (plusieurs disciplines)
- **Quiz** : générés automatiquement dans les 4 formats (+ flashcards), toutes disciplines
- Tout le contenu : original (jamais copié) et fidèle

---

## §7 — Fonctionnalités détaillées

### Navigation
- **Onboarding** : 2-3 écrans Plumy (navigation libre, favoris, export), passable, rejouable
- **Accueil** : Plumy accueille, résume la progression, propose une reprise
- **Double accès** : parcours guidé + navigation libre
- Barre de recherche globale + filtres (discipline, catégorie)
- Bouton « Sauvegarder mes données » visible en permanence

### Glossaire
- Liste complète, recherche instantanée (nom, alias, EN, étymologie), filtres multicritères, tri alphabétique

### Fiches / Flashcards
- Recto : nom + animation/schéma
- Verso : définition, description, EN, erreurs, conseils, étymologie, termes liés, sources, vidéo externe
- Bouton favori (indépendant du statut)
- Mode flashcards par unité, filtre ou favoris : retournement, marquage connu/à revoir

### Quiz (aucun obligatoire)
- QCM (définition → terme et terme → définition)
- Association terme/définition
- Reconnaissance visuelle (animation SVG → terme)
- Texte à trous
- Score, correction immédiate, réactions Plumy, mise à jour progression

### Termes personnels
- Ajouter / éditer / supprimer (stockage local), intégrés au glossaire et flashcards, visuellement distincts

### Sauvegarde locale (accès prioritaire)
- Bouton permanent « Sauvegarder mes données »
- Export en un geste : JSON daté `plumy-sauvegarde-AAAA-MM-JJ.json` (progression + favoris + stats + termes perso + réglages + version de schéma)
- Import : validation, choix fusionner/remplacer, prévisualisation, 100 % local
- **Rappel après 5 jours d'usage sans export** : popup Plumy non bloquante (« Exporter maintenant » / « Plus tard »), désactivable dans les réglages

### Vidéos externes
- Liens externes uniquement, lecteur intégré (iframe) ou nouvel onglet
- Comportement robuste si lien mort, liens non vérifiés signalés

### Page Sources
- Références groupées par thème, avec auteurs/année/revue/lien DOI
- Renvois depuis termes (`securite.referencesIds`) et cours
- Filtre par thème et discipline
- Avertissement médical en tête de page

### Mode révision ciblé
- File centrée sur les termes marqués « à revoir » et ceux échoués en quiz

### Gamification + Plumy
- Points (consultation de termes, quiz), badges (jalons thématiques), streak de jours
- Ton toujours positif, jamais culpabilisant

### Progression et statistiques
- Tableau de bord Recharts : termes vus/maîtrisés/à revoir, activité dans le temps, taux de réussite, badges

### Exclusions explicites
- Pas de mode professeur / groupes / devoirs
- Pas de notifications ni de rappels
- Pas de comptes ni de synchronisation

---

## §8 — Design « pop candy »

- **Palette** : roses bonbon, lavande, menthe, jaune pastel, corail — fonds clairs lumineux
- **Thème** : clair uniquement
- **Univers** : courbes fluides, rubans, mouvement, rythme, coins arrondis, ombres douces, micro-animations
- **Typographie** : un titrage rond/affirmé + un corps très lisible, tailles confortables
- Responsive irréprochable, mobile-first, PWA installable
- Design system cohérent (tokens couleur, espacement, rayon, animation)

---

## §8bis — Plumy — mascotte paon bleu

Plumy = paon bleu, entièrement en SVG animé (CSS / Framer Motion), aucune image externe.

**Logo / identité visuelle** : paon de profil tourné vers la droite, tons bleus (corps turquoise/cyan, aigrette, nuances vertes possibles, ocelles stylisés), fond rose (signature logo + icône PWA).

**Favicon 32 px** : version simplifiée — formes épurées, contraste renforcé, sans détails fins.

**États / réactions** (composant à états) :
- `accueil` — bienvenue
- `encouragement` — t'encourage, corps incliné
- `reussite` — roue déployée en célébration
- `echec` — bienveillant, jamais moqueur, roue qui retombe doucement
- `repos` — queue repliée
- `retour` — content de revoir l'utilisateur

Chaque état : animation courte + alternative textuelle (`aria-label`).

**`prefers-reduced-motion`** : versions statiques élégantes de chaque état.

Centralisé dans `src/components/mascotte/`.

---

## §9 — Accessibilité (exigence forte)

- Contrastes WCAG AA minimum, AAA visé pour le texte courant (attention palette pastel)
- Navigation clavier complète, ordre de tabulation logique, focus nets
- ARIA correct (rôles, états, labels), structure sémantique (landmarks, titres hiérarchisés)
- Lecteurs d'écran : alternatives textuelles pour toutes les animations et schémas SVG
- Fonctionnement sans audio
- `prefers-reduced-motion` : animations réduites sans perte d'information
- Tailles de police lisibles, zoom 200 % sans casse, cibles tactiles ≥ 44 px

---

## §10 — Qualité, tests et documentation

- TypeScript strict
- Tests unitaires : logique quiz, gamification, repositories, recherche, export/import
- README complet : présentation, lancement local, structure
- `docs/ARCHITECTURE.md`, `docs/CONTENT-GUIDE.md`, `docs/DEPLOY.md`, `docs/EXPORT-FORMAT.md`, checklist a11y
- Performance : build léger, lazy-loading, Lighthouse PWA/Perf/A11y au vert
- Robustesse offline vérifiée

---

## §11 — Feuille de route par étapes

| Étape | Contenu |
|-------|---------|
| 0 | Cadrage : architecture, modèle de données, conventions, voix Plumy |
| 1 | Socle technique : Vite/React/TS, Tailwind, PWA, Dexie, Plumy v1 |
| 2 | Première discipline complète (classique) — gabarit validé |
| 3 | Cours fondamentaux et culturels (Unités 0 et 1) |
| 4 | Schéma « Origines et interactions » (§5ter) |
| 5 | Disciplines restantes (par lots de 2-3) |
| 6 | Santé + Sources (§5bis + `references.ts` + page Sources + renvois) |
| 7 | Jeu complet : 4 types de quiz + flashcards, badges/points/streak, stats, révision |
| 8 | Données utilisateur, onboarding, export/import, termes perso |
| 9 | Accessibilité, tests, perf, doc |
| 10 | Finalisation, build production, déploiement Vercel |

**Méthode** : s'arrêter à chaque jalon ⏸️ pour montrer le résultat et attendre validation. **Demander confirmation avant tout `git push`.**

---

## §12 — Charte de voix — Plumy dans ses carnets

**Principes** :
- Tutoiement systématique (« tu », « toi »)
- Première personne (« je », « moi », « dans mon carnet je note que… »)
- Ton d'une conversation entre amis : chaleur, complicité, enthousiasme, humour léger
- Encourageant, jamais condescendant ni culpabilisant
- Personnalité assumée : Plumy a des goûts, des manies, paonne quand il est content
- Rigueur préservée : la chaleur ne touche jamais l'exactitude
- Concision : ami passionné, pas bavard

**À éviter** : vouvoiement, ton encyclopédique impersonnel, jargon non expliqué, blagues lourdes, mièvrerie excessive.

**Exemples de transformation** :

| Neutre | Voix de Plumy |
|--------|---------------|
| « Le plié est une flexion des genoux. » | « Le plié ? C'est tout simplement quand tu plies les genoux — mais crois-moi, c'est la base de presque tout ce qu'on fait. Je te montre. » |
| « Mauvaise réponse. » | « Aïe, pas tout à fait ! T'inquiète, moi aussi j'ai mis du temps. Regarde encore avec moi… » |
| « Bravo, 10/10. » | « Dix sur dix ! Je déploie ma roue rien que pour toi. Tu assures vraiment. » |
| « Ne pas forcer l'en-dehors. » | « Petit truc que j'ai appris à mes dépens : ne force jamais ton en-dehors depuis les pieds. Ça vient de la hanche. Ton corps te remerciera. » |
| « Aucun favori. » | « Ton carnet de favoris est encore tout vide. Dès qu'un terme te plaît, mets-lui une étoile : je le rangerai ici pour toi. » |
| « Pensez à exporter vos données. » | « Ça fait quelques jours qu'on bosse ensemble ! On sauvegarde tes progrès ? Comme ça, on ne perd rien, toi et moi. » |

**Application** : centraliser les textes d'interface dans `i18n/` (toujours dans cette voix). Varier les formulations des encouragements pour éviter la répétition.

---

## §13 — Bibliographie santé & culture (références pour `references.ts`)

### 1. Épidémiologie

| id | Référence |
|----|-----------|
| `hincapie2008` | Hincapié C.A. et al. (2008). Musculoskeletal Injuries and Pain in Dancers. Arch. Phys. Med. Rehabil. PMID 18760170 |
| `jacobs2012` | Jacobs C.L. et al. (2012). Musculoskeletal injuries and pain in dancers: a systematic review update. PMID 22687721 |
| `modern_contemp_meta2024` | Frontiers in Public Health (2024). Prevalence and risk factors… modern and contemporary dancers. PMC10932947 |
| `evidence_review2025` | Current Phys. Med. Rehabil. Reports (2025). Dance-Related Injuries: An Evidence-Based Review. DOI 10.1007/s40141-025-00523-4 |
| `screening_meta2018` | Kenny S.J. et al. (2018). Screening Tools as a Predictor of Injury in Dance. PMC6051954 |

### 2. Facteurs psychologiques

| id | Référence |
|----|-----------|
| `mainwaring2017` | Mainwaring L.M., Finney C. (2017). Psychological risk factors and outcomes of dance injury. J. Dance Med. Sci. PMID (à vérifier) |

### 3. Hanche, en-dehors, flexibilité

| id | Référence |
|----|-----------|
| `prevention_hip_knee` | Prevention of hip and knee injuries in ballet dancers. Sports Medicine (1988). PMID 3064238 |
| `iadms_turnout` | IADMS. Turnout for Dancers: Hip Anatomy / Supplemental Training |
| `hip_pathology2022` | Understanding hip pathology in ballet dancers (2022). PMC9464154 |
| `yin2019` | Yin A.X. et al. (2019). Strength, Flexibility… in the Adolescent Ballet Dancer. PM&R. DOI 10.1002/pmrj.12011 |

### 4. Renforcement neuromusculaire

| id | Référence |
|----|-----------|
| `cofre2023` | Cofré-Fernández V. et al. (2023). Effects of a specific injury prevention neuromuscular training program. Research in Sports Medicine. PMID 34182833 |
| `nmt_ballroom2021` | 10-Week Neuromuscular Training… Ballroom Dancers. PMC8027106 |
| `11plus_dance_feasibility2022` | Kolokythas N. et al. (2022). Neuromuscular Training in Pre-Professional Ballet Dancers. PMID 35697491 |
| `11plus_dance_physio2025` | Kolokythas N. et al. (2025). The Effects of 11+ Dance. DOI 10.1177/1089313X241300567 |
| `strength_meta2024` | Frontiers (2024/2025). A meta-analysis of the effects of strength training on physical fitness in dancers. PMC11903753 |

### 5. Pole dance

| id | Référence |
|----|-----------|
| `lee2020` | Lee J.Y., Lin L., Tan A. (2020). Prevalence of pole dance injuries. J. Sports Med. Phys. Fitness. PMID 31663312 |
| `naczk_goluchowska2022` | Gołuchowska/Naczk et al. (2022). Factors associated with injury in female pole dancers. Sci. Reports. PMC8742019 |
| `naczk2020` | Naczk A. et al. (2020). The risk of injuries and physiological benefits of pole dancing. PMID 32162500 |
| `mitrousias2017` | Mitrousias V. et al. (2017). Epidemiology of injuries in pole sports. BJSM |

### 6. Talons hauts

| id | Référence |
|----|-----------|
| `heels_biomech` | Biomécanique port de talons — recherche « high-heeled gait biomechanics » (PubMed/PMC) |

### 7. Sources francophones

| id | Référence |
|----|-----------|
| `paris_nanterre_danse_sante` | Danse et Santé. HAL Univ. Paris Nanterre, hal-01467683 |
| `cairn_jeune_danseur2012` | L'accompagnement de la santé du jeune danseur. Repères, cahier de danse (2012/1), Cairn |
| `cairn_au_dela_douleur2006` | Danser au-delà de la douleur. Actes de la recherche en sciences sociales (2006/3), Cairn |
| `pied_cheville_niveau2020` | Incidence du niveau de pratique sur les pathologies de la cheville et du pied. Revue du podologue (2020) |

### 8. Physiologie générale

| id | Référence |
|----|-----------|
| `koutedakis2004` | Koutedakis Y., Jamurtas A. (2004). The dancer as a performing athlete. Sports Medicine, 34(10) |
| `angioi2009` | Angioi M. et al. (2009). Fitness in contemporary dance: a systematic review. Int. J. Sports Med. |

### 9. Histoire et culture — pole dance

> ⚠️ Sources = témoignages militants et histoire culturelle, pas articles évalués par les pairs. À présenter comme tels.

| id | Référence |
|----|-----------|
| `theroot2021` | Not-So-Empowering: This Hollywood Pole-Dance Studio… The Root (2021) |
| `bloggeronpole2021` | A history of modern pole dance. Blogger On Pole (2021) |
| `hausofpole2024` | Stripping through History. Haus of Pole (2024) |
| `poleinthewall_history` | Pole History. Pole in the Wall |
| `glorioussport2024` | Pole Dancing's Heritage Deserves To Be Respected, Not Sanitised. Glorious Sport (2024) |

**Notes de rigueur** :
- Beaucoup d'études = questionnaires rétrospectifs auto-déclarés et petits échantillons → chiffres = ordres de grandeur
- Efficacité préventive surtout extrapolée du sport ; ECR spécifiques danse peu nombreux
- Définition de « blessure » non standardisée → prudence dans les comparaisons
- Toujours rappeler : l'information ne remplace pas un avis médical individualisé

---

## État actuel du projet (branch `claude/document-prompt-review-k09efb`)

### Étapes complètes
- ✅ Étape 1 : Socle technique (React/Vite/TS, Tailwind, PWA, Dexie, Plumy mascotte)
- ✅ Étape 2–5 : 12 unités, ~220 termes, cours, glossaire, TermePage, CoursPage
- ✅ Étape 6 : `references.ts` (30 refs), SourcesPage, `securite.referencesIds` sur termes à risque
- ✅ Étape 7 — Briques 1-6 :
  - Brique 1 : Moteur quiz (`quiz.utils.ts` — QCM, Association, Texte-à-trous)
  - Brique 2 : `QCMSession`, `AssociationSession`, `TexteATrousSession`, `FlashcardSession`
  - Brique 3 : `badges.ts` (14 badges), `useBadgeCheck`
  - Brique 4 : `ProgresPage` avec Recharts, vraies stats, grille badges
  - Brique 5 : `CarnetsPage` avec tabs Favoris / Mes termes
  - Brique 6 : `RevisionPage` (`/revision`), lien dans AccueilPage

### En attente
- ⬜ Étape 8 : Export/import JSON, onboarding, rappel sauvegarde
- ⬜ Étape 9 : Accessibilité, tests, Lighthouse
- ⬜ Étape 10 : Finalisation, déploiement Vercel

### Notes techniques
- `animationId` absent sur tous les termes → quiz `reconnaissance-visuelle` désactivé (voir `ANIMATIONS_TODO.md`)
- Les apostrophes françaises dans les strings TS doivent utiliser des guillemets doubles
- Le champ `erreursCourantes` est **requis** (non optionnel) dans `Terme`
- `difficulteInterne` n'est jamais affiché à l'utilisateur
- Branch de développement : `claude/document-prompt-review-k09efb`
- **Toujours demander confirmation avant `git push`**
