# Plumy — Les carnets de cours d'un paon passionné de danse

Application web PWA pour apprendre le vocabulaire de la danse à travers huit disciplines traitées à égalité :
**classique · contemporain · moderne · jazz · cabaret · pole dance · effeuillage burlesque · heels**

---

## Lancement local

```bash
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

### Autres commandes

| Commande | Description |
|----------|-------------|
| `npm run build` | Build de production (TypeScript + Vite) |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Lint ESLint |
| `npm test` | Tests unitaires (Vitest) |
| `npm run test:watch` | Tests en mode watch |

---

## Stack technique

- **React 19** + **Vite 8** + **TypeScript strict**
- **Tailwind CSS v4** — design system « pop candy »
- **Dexie.js** — surcouche IndexedDB pour le stockage 100 % local
- **Framer Motion** — animations (`prefers-reduced-motion` respecté)
- **Recharts** — graphiques de progression
- **vite-plugin-pwa** — service worker + manifest PWA installable
- **Vitest** + **jsdom** — tests unitaires

---

## Structure des dossiers

```
src/
├── app/          # Bootstrap, routing, layout global
├── components/   # Mascotte SVG, UI (boutons, modales...)
├── content/      # CONTENU PÉDAGOGIQUE — termes, cours, unités
│   ├── schema.ts # Types TypeScript (source de vérité)
│   ├── termes/   # Un fichier par unité
│   └── cours/    # Cours rédigés
├── data/         # Repositories Dexie (IndexedDB)
├── features/     # Fonctionnalités : glossaire, quiz, carnets...
├── lib/          # Utilitaires (recherche, gamification)
├── styles/       # Tokens CSS (couleurs, animations)
└── i18n/         # Libellés français centralisés
```

Ajouter un terme ou un cours : éditez uniquement `src/content/` — aucun code applicatif à modifier.

---

## Fonctionnalités

- **Glossaire** (~220 termes) avec recherche instantanée et filtres
- **Quiz** : QCM, association, texte à trous, flashcards
- **Carnets** : termes personnels + favoris
- **Progression** : stats, badges, streak de jours (Recharts)
- **Sources** : 30 références scientifiques et culturelles
- **Sauvegarde** : export/import JSON local, rappel après 5 jours sans export
- **Onboarding** Plumy en 3 écrans, rejouable depuis l'accueil
- **Schéma origines et interactions** des danses (D3.js)
- 100 % hors-ligne, aucun compte, aucune donnée envoyée

---

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Guide contenu](docs/CONTENT-GUIDE.md)
- [Déploiement](docs/DEPLOY.md)
- [Format d'export](docs/EXPORT-FORMAT.md)
