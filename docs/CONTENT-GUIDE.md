# Guide contenu — Plumy

Ce guide explique comment ajouter ou modifier du contenu pédagogique dans Plumy sans toucher au code applicatif.

---

## Règle d'or

**Modifier le contenu = modifier uniquement `src/content/`.**

Aucun autre fichier n'est à toucher pour ajouter un terme, un cours ou une unité.

---

## Ajouter un terme

Les termes sont dans `src/content/termes/`. Chaque fichier correspond à une unité et exporte un tableau `Terme[]`.

### Structure d'un terme

```typescript
import type { Terme } from '@/content/schema'

export const termes: Terme[] = [
  {
    id: 'arabesque',              // slug stable, jamais modifié après création
    nom: 'Arabesque',             // orthographe exacte avec accents
    disciplines: ['classique'],   // au moins une discipline
    categories: ['positions'],    // au moins une catégorie
    definition: "Position sur une jambe, l'autre étendue derrière.",
    description: "L'arabesque est exécutée en portant...",
    erreursCourantes: [           // REQUIS — tableau vide si aucun
      "Pencher le buste en avant pour compenser.",
    ],
    conseils: ["Engager le grand fessier pour stabiliser."],
    etymologie: "Du français arabesque, ornement à rinceaux.",
    equivalentAnglais: "arabesque",
    difficulteInterne: 2,         // 1-5, jamais affiché à l'utilisateur
    termesLies: ['attitude', 'developpé'],
  },
]
```

### Champs obligatoires

| Champ | Type | Notes |
|-------|------|-------|
| `id` | `string` | Slug stable, kebab-case |
| `nom` | `string` | Avec accents corrects |
| `disciplines` | `Discipline[]` | Au moins une |
| `categories` | `Categorie[]` | Au moins une |
| `definition` | `string` | Courte (1-2 phrases) |
| `description` | `string` | Exécution détaillée |
| `erreursCourantes` | `string[]` | Tableau vide autorisé |
| `difficulteInterne` | `1\|2\|3\|4\|5` | Interne, non affiché |

### Champs optionnels importants

- `alias` — Autres noms (ex. `['grand arabesque']`)
- `sousStyles` — Pour les sous-styles jazz ou pole
- `etymologie` — Recommandé pour les termes classiques
- `equivalentAnglais` — Améliore la recherche
- `termesLies` — IDs d'autres termes (navigation entre fiches)
- `securite` — Pour les termes à risque :
  ```typescript
  securite: {
    risques: ["Chute possible si..."],
    precautions: ["Toujours utiliser un crash mat."],
    referencesIds: ["lee2020"],
  }
  ```
- `videosExternes` — Liens YouTube/Vimeo :
  ```typescript
  videosExternes: [
    { titre: "Arabesque expliquée", url: "https://...", source: "YouTube" }
  ]
  ```

### Disciplines disponibles

`classique` · `contemporain` · `moderne` · `jazz` · `cabaret` · `pole-dance` · `burlesque` · `heels` · `commun`

### Catégories disponibles

`positions` · `pas` · `sauts` · `tours` · `ports-de-bras` · `deplacements` · `qualites-de-mouvement` · `batterie` · `equilibres` · `liaisons` · `concepts` · `culture-histoire` · `figures-aeriennes` · `montees-climbs` · `prises-grips` · `inversions` · `travail-au-sol` · `jeu-de-scene` · `accessoires` · `sante-prevention`

---

## Ajouter un cours

Les cours sont dans `src/content/cours/`. Chaque fichier exporte un tableau `Cours[]`.

```typescript
import type { Cours } from '@/content/schema'

export const cours: Cours[] = [
  {
    id: 'anatomie-placement',
    titre: "Placement et anatomie de base",
    resume: "Comprendre son corps pour mieux danser.",
    disciplines: ['commun'],
    sections: [
      {
        titre: "Le placement",
        contenuMarkdown: `
Le placement désigne la position neutre et efficace du corps...
        `,
      },
      {
        titre: "L'en-dehors",
        contenuMarkdown: `
L'en-dehors est une rotation externe de la hanche...
        `,
      },
    ],
    termesAbordes: ['placement', 'en-dehors', 'aplomb'],
  },
]
```

---

## Ajouter une référence

Les références scientifiques sont dans `src/content/references.ts`.

```typescript
{
  id: 'monref2024',
  theme: 'epidemiologie',
  auteurs: "Dupont M. et al.",
  annee: 2024,
  titre: "Injuries in contemporary dancers.",
  revue: "Journal of Dance Medicine",
  lien: "https://doi.org/...",
  disciplines: ['contemporain'],
  resume: "Étude sur 120 danseurs contemporains...",
}
```

Pour relier une référence à un terme, utiliser `securite.referencesIds` dans le terme.

---

## Voix de Plumy

Tout contenu visible par l'utilisateur doit respecter la charte de voix (voir CLAUDE.md §12) :

- Tutoiement systématique
- Première personne (`je`, `moi`, `dans mon carnet...`)
- Chaleureux, complice, jamais condescendant
- Précis et rigoureux malgré le ton informel

Les libellés d'interface sont centralisés dans `src/i18n/fr.ts`.

---

## Contenu interdit

- Copier-coller de définitions Wikipédia ou de manuels
- Forcer l'en-dehors dans les conseils
- Minimiser l'histoire de la pole dance ou du burlesque
- Ton genré pour le heels
- Informations médicales prescriptives (orienter vers un professionnel)
