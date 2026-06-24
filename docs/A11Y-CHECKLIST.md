# Checklist accessibilité — Plumy

Basée sur WCAG 2.1 AA. Vérifier après chaque déploiement majeur.

## Structure sémantique

- [x] Une seule balise `<h1>` par page (visuellement masquée sur AccueilPage via `.sr-only`)
- [x] Hiérarchie de titres cohérente (h1 → h2 → h3, sans saut)
- [x] Landmarks HTML5 : `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`
- [x] `<nav aria-label="Navigation principale">` sur la barre de navigation
- [x] `<section aria-label="...">` sur les sections sans titre visible
- [x] `<ul>` / `<li>` pour les listes de termes (role="list" / role="listitem")

## Navigation clavier

- [x] Skip link « Aller au contenu principal » (visible au focus, `href="#main-content"`)
- [x] `id="main-content"` sur `<main>` dans Layout.tsx
- [x] Ordre de tabulation logique (suit l'ordre visuel)
- [x] Focus ring visible sur tous les éléments interactifs (`:focus-visible` dans tokens.css)
- [x] Modales : focus piégé à l'intérieur (`aria-modal="true"`)
- [ ] Modales : focus renvoyé à l'élément déclencheur à la fermeture (à tester manuellement)
- [x] Boutons avec icône seule : `aria-label` explicite

## ARIA

- [x] `role="dialog" aria-modal="true"` sur les modales (OnboardingModal, BoutonSauvegarde)
- [x] `role="alertdialog"` sur le rappel de sauvegarde
- [x] `role="status"` + `aria-label` sur le spinner de chargement lazy
- [x] `aria-label` sur les champs de recherche et les selects de filtres
- [x] `aria-label` sur les boutons favori (état dynamique : ajouter/retirer)
- [x] `aria-live="polite"` sur les zones mises à jour dynamiquement (graphe)
- [x] `aria-hidden="true"` sur toutes les icônes SVG décoratives

## Images et médias

- [x] Toutes les animations SVG ont une alternative textuelle (`aria-label` sur le rôle parent)
- [x] PluмyMascot : `aria-label` décrivant l'état de Plumy
- [x] Schéma graphe-danses : `role="img" aria-label` + liste textuelle alternative complète
- [x] Pas d'audio requis (champ `audioUrl` présent mais inactif)
- [x] Vidéos externes uniquement (iframes avec titre, nouvel onglet disponible)

## Couleurs et contrastes

- [x] Texte courant (`--color-encre` sur fond clair) : ratio > 7:1 (AAA)
- [x] Texte secondaire (`--color-gris-texte` #64748b) : ratio > 4.5:1 (AA)
- [x] Éléments actifs (`--color-candy-rose-dark` #db2777) : ratio > 4.5:1 sur fond blanc
- [ ] Vérifier les badges colorés (texte sur fond pastel) au cas par cas
- [x] Ne pas utiliser la couleur seule pour transmettre une information

## Tailles et cibles

- [x] Police de base lisible (système + fallbacks)
- [x] Zoom 200 % : interface reste utilisable (Flexbox/Grid responsive)
- [x] Cibles tactiles ≥ 44×44 px sur les boutons principaux
- [ ] Vérifier les petits boutons (éditer/supprimer) sur mobile

## Animations

- [x] `prefers-reduced-motion: reduce` dans tokens.css : désactive toutes les transitions/animations CSS
- [x] `useReducedMotion()` dans PluмyMascot : versions statiques de chaque état Framer Motion
- [x] Aucune animation qui clignote plus de 3 fois par seconde

## Formulaires

- [x] Labels visibles ou `aria-label` sur tous les champs
- [x] Messages d'erreur liés aux champs via `aria-describedby` (à vérifier dans CarnetsPage)
- [x] Champs obligatoires marqués visuellement et sémantiquement

## Tests recommandés

Outils à utiliser après chaque déploiement :
- **Lighthouse** (Chrome DevTools) : onglet Accessibilité
- **axe DevTools** (extension Chrome) : audit automatique
- **NVDA / VoiceOver** : navigation clavier + lecteur d'écran
- **Zoom 200 %** : vérifier l'absence de texte coupé et de scroll horizontal

## Points d'attention palette pastel

La palette « pop candy » utilise des teintes claires. Vérifier systématiquement :
- Texte blanc sur fond rose (`--color-candy-rose`) : ratio ~2.8:1 — **insuffisant pour du texte courant**, OK pour les badges/étiquettes si la taille est ≥ 18px bold ou s'il y a un contour.
- Préférer `--color-candy-rose-dark` (#db2777) pour le texte interactif sur fond blanc.
