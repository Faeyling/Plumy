# Architecture — Plumy

## Vue d'ensemble

Plumy est une PWA React entièrement statique, sans backend. Toutes les données utilisateur vivent dans IndexedDB (via Dexie.js). Le contenu pédagogique est compilé statiquement dans le bundle.

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                          │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  React SPA  │  │  IndexedDB   │  │ Service Worker│  │
│  │  (Vite PWA) │  │  (Dexie.js)  │  │  (offline)    │  │
│  └──────┬──────┘  └──────┬───────┘  └───────────────┘  │
│         │                │                               │
│  ┌──────▼──────────────────────────────────┐            │
│  │           src/content/ (statique)        │            │
│  │  termes/*.ts  cours/*.ts  unites.ts      │            │
│  └─────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────┘
```

## Couches

### `src/content/` — Données statiques

Source de vérité du contenu pédagogique. Compilé dans le bundle JS à la build.

- `schema.ts` — Types TypeScript (`Terme`, `Cours`, `Unite`, `Reference`...)
- `termes/` — Un fichier `.ts` par unité (tableau de `Terme[]`)
- `cours/` — Cours rédigés (`Cours[]`)
- `unites.ts` — Métadonnées des 12 unités
- `references.ts` — 30 références scientifiques et culturelles
- `graphe-danses.ts` — Nœuds et liens pour le schéma d'origines

**Règle** : modifier le contenu = modifier uniquement `src/content/`. Aucun code applicatif à toucher.

### `src/data/` — Persistance utilisateur

Repositories Dexie (IndexedDB) pour toutes les données utilisateur :

- `db.ts` — Schéma Dexie, tables : `progressions`, `stats`, `termesPersonnels`
- `repositories/progressionRepository.ts` — CRUD sur `ProgressionTerme`
- `repositories/statsRepository.ts` — Stats globales (points, badges, streak)
- `repositories/termesPersoRepository.ts` — Termes personnels ajoutés par l'utilisateur

### `src/features/` — Fonctionnalités

Chaque feature est un dossier autonome avec ses composants React. Structure type :

```
src/features/glossaire/
├── GlossairePage.tsx    # Page principale
└── TermeCard.tsx        # Composant enfant
```

Features principales :
- `accueil/` — Page d'accueil avec résumé progression
- `glossaire/` — Liste + recherche + filtres
- `terme/` — Fiche détail d'un terme
- `quiz/` — Sessions QCM, Association, Texte-à-trous, Flashcards, Révision
- `carnets/` — Favoris + termes personnels
- `progres/` — Tableau de bord Recharts + badges
- `sources/` — Page références scientifiques
- `onboarding/` — Modal 3 écrans au premier lancement
- `sauvegarde/` — Export/import JSON + rappel
- `graphe-danses/` — Schéma interactif D3.js
- `revision/` — File de révision ciblée

### `src/app/` — Bootstrap

- `main.tsx` — Point d'entrée React
- `App.tsx` — Provider root + RouterProvider
- `Layout.tsx` — Shell partagé (nav, skip link, BoutonSauvegarde, RappelSauvegarde, OnboardingModal)
- `router.tsx` — Routes avec `React.lazy` + `Suspense` pour le code-splitting

### `src/lib/` — Utilitaires purs

- `recherche.ts` — `normaliser()` et `matchTerme()` (accent-insensitive)
- `gamification.ts` — Calcul de points et streak

### `src/i18n/fr.ts`

Tous les libellés de l'interface en français, dans la voix de Plumy. Ne jamais mettre de texte utilisateur directement dans les composants.

### `src/components/`

- `mascotte/` — Plumy SVG animé (`PluмyMascot` avec états : accueil, encouragement, reussite, echec, repos, retour)
- `ui/` — Composants génériques (boutons, modales, champs)

## Flux de données

```
content/*.ts ──► Feature component
                     │
                     ├──► progressionRepository (IndexedDB)
                     ├──► statsRepository (IndexedDB)
                     └──► termesPersoRepository (IndexedDB)
```

Les repositories sont appelés directement depuis les composants (pas de store global). Les données de contenu sont importées statiquement.

## Code-splitting

Toutes les pages sauf `AccueilPage` sont chargées en `React.lazy`. Le bundle initial contient uniquement le Layout, la page d'accueil et les utilitaires critiques. Les pages lourdes (Graphe, Sources, Progres) sont chargées à la demande.

## PWA / Offline

`vite-plugin-pwa` génère un service worker (Workbox) qui met en cache :
- Tous les assets statiques (JS, CSS, icônes)
- Le manifest

Les données utilisateur (IndexedDB) survivent hors-ligne nativement.
