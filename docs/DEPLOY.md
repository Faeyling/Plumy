# Déploiement — Plumy

## Build de production

```bash
npm run build
```

Génère `dist/` avec :
- Bundle JS code-splitted (lazy loading par page)
- CSS Tailwind purgé
- Service worker Workbox pour le cache offline
- `manifest.webmanifest` pour l'installation PWA
- Assets hachés pour le cache long

## Déploiement Vercel (recommandé)

### Depuis la CLI Vercel

```bash
npm i -g vercel
vercel --prod
```

### Depuis l'interface Vercel

1. Importer le dépôt GitHub
2. Framework preset : **Vite**
3. Build command : `npm run build`
4. Output directory : `dist`
5. Aucune variable d'environnement requise

### Configuration requise : redirection SPA

Vercel détecte automatiquement les SPA Vite. Si besoin, créer `vercel.json` :

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Autres hébergeurs statiques

L'app est un bundle statique pur — compatible avec tout hébergeur statique (Netlify, GitHub Pages, Cloudflare Pages...).

**Condition** : configurer la redirection de toutes les routes vers `index.html` (comportement SPA).

### Netlify

Créer `public/_redirects` :
```
/*  /index.html  200
```

### GitHub Pages

Requiert un workaround pour le routing (hash router ou 404.html). Vercel est préférable.

## Variables d'environnement

Aucune. L'application n'a pas de backend, pas de clés API, pas de secrets.

## Vérifications post-déploiement

- [ ] L'app se charge sur mobile
- [ ] L'app peut être installée (icône "Ajouter à l'écran d'accueil")
- [ ] Navigation entre les pages fonctionne (pas de 404 sur `/glossaire`)
- [ ] Le glossaire affiche des termes
- [ ] L'export JSON fonctionne
- [ ] L'import JSON fonctionne
- [ ] Le quiz fonctionne sur au moins une unité
- [ ] Mode hors-ligne après premier chargement (tester en DevTools > Network > Offline)

## Performances cibles (Lighthouse)

| Métrique | Cible |
|----------|-------|
| Performance | ≥ 90 |
| Accessibilité | ≥ 90 |
| Meilleures pratiques | ≥ 90 |
| SEO | ≥ 90 |
| PWA | Installable + offline |
