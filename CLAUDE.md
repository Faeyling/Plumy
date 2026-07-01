# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Contrainte absolue

**Toujours demander confirmation à l'utilisateur avant tout `git push`, sans exception. Ne jamais pousser automatiquement après un commit, même si la tâche semble terminée.**

---

## Commandes

```bash
npm run dev        # Serveur de développement Vite
npm run build      # tsc -b && vite build
npm run lint       # ESLint
npm run test       # Vitest (run once)
npm run test:watch # Vitest (watch mode)
npx tsc --noEmit   # Vérification TypeScript sans build
```

Lancer un seul test : `npx vitest run src/data/repositories/statsRepository.test.ts`

---

## Architecture

### Vue d'ensemble

PWA React + Vite + TypeScript strict, 100 % offline. Tout le stockage est local via **Dexie.js** (IndexedDB), aucun backend, aucun compte.

### Séparation stricte contenu / code

`src/content/` contient exclusivement des données pures (termes, cours, unités, références). Ajouter un terme ou un cours ne nécessite jamais de modifier le code applicatif.

```
src/content/
  schema.ts          # Types TypeScript — source de vérité absolue
  unites.ts          # 12 unités (0–11)
  termes/            # unite0.ts … unite11.ts  — ~220 termes
  cours/             # unite0.ts … unite11.ts  — cours en Markdown
  references.ts      # 30+ références scientifiques
  graphe-danses.ts   # Nœuds + liens pour le schéma SVG D3
  illustrations.ts   # Map iconeSvgId → chemin PNG
  journal.ts         # Entrées quotidiennes de Plumy
  parcours.ts        # Parcours thématiques transversaux
  badges.ts          # 20 badges (hors contenu, dans src/data/)
```

### Couche données (`src/data/`)

- **`db.ts`** — Définit `PlumyDatabase extends Dexie` avec 4 tables : `progressions`, `stats`, `termesPersonnels`, `historiqueQuiz`. Ajouter une version avant toute migration de schéma.
- **`repositories/`** — `progressionRepository`, `statsRepository`, `termesPersoRepository`. Toute lecture/écriture IndexedDB passe par ces repositories, jamais directement par `db`.

### État global

Pas de store global (Redux/Zustand). L'état est local aux composants ou chargé depuis les repositories via `useEffect`. Le hook `useStats` est le seul accès mutualisé aux stats.

### Gamification

- **Points** : attribués à la fin de chaque quiz (`statsRepository.ajouterPoints`), jamais question par question.
- **Paliers** : définis dans `src/lib/paliers.ts` (7 niveaux, 0 → 6 000 pts).
- **Badges** : définis dans `src/data/badges.ts`, débloqués via `useBadgeCheck` (hook appelé en fin de quiz).
- **Quiz QCM** : l'état en cours est persisté dans `sessionStorage` (`plumy-qcm-{uniteNumero}`) pour survivre à une navigation vers une fiche terme et retour.

### Quiz

`src/features/quiz/quiz.utils.ts` contient les générateurs de questions (`genererQCM`, `genererAssociation`, `genererTexteATrous`). Les sessions correspondantes sont dans le même dossier. La reconnaissance visuelle est désactivée (`animationId` non renseigné sur les termes).

### TTS (Text-to-Speech)

`src/hooks/useSpeech.ts` — Web Speech API, voix française préférée, `onvoiceschanged` pour le chargement asynchrone. `src/components/ui/SpeakButton.tsx` est un composant autonome (intègre `useSpeech` lui-même). `src/lib/stripMarkdown.ts` nettoie le Markdown avant envoi au TTS.

### Routing

`src/app/router.tsx` — `createBrowserRouter` avec un `<Layout>` parent. Toutes les pages sauf `AccueilPage` sont lazy-loadées via `React.lazy`.

### UI / i18n

Tous les textes d'interface sont centralisés dans `src/i18n/fr.ts`. Ne jamais mettre de chaîne française en dur dans un composant.

Design system « pop candy » : tokens CSS dans `src/styles/`, Tailwind CSS v4.

---

## Règles de contenu

### Type `Terme` — points critiques

- `erreursCourantes: string[]` est **requis** (tableau vide si aucune erreur, jamais omis).
- `difficulteInterne` n'est jamais affiché à l'utilisateur.
- `animationId` non renseigné pour l'instant (toutes les animations SVG sont en attente).
- Les apostrophes dans les strings TypeScript utilisent des guillemets doubles (ex. `"Plumy d'or"`).
- `id` = slug stable en kebab-case, ne jamais le changer après création.

### Voix de Plumy

Tout contenu pédagogique et tout texte d'interface est écrit à la **première personne de Plumy**, avec **tutoiement systématique**. Ton : chaleur, complicité, humour léger. La rigueur factuelle n'est jamais sacrifiée au profit du ton. Exemples :

| Neutre | Voix Plumy |
|--------|------------|
| « Le plié est une flexion des genoux. » | « Le plié ? C'est tout simplement plier les genoux — mais crois-moi, c'est la base de presque tout. » |
| « Mauvaise réponse. » | « Aïe, pas tout à fait ! T'inquiète, moi aussi j'ai mis du temps. » |

### Les 8 disciplines sont à égalité stricte

`classique · contemporain · moderne · jazz · cabaret · pole-dance · burlesque · heels` — aucune n'est une annexe.
