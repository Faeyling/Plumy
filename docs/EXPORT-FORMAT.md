# Format d'export — Plumy

## Structure du fichier JSON

Le fichier exporté s'appelle `plumy-sauvegarde-AAAA-MM-JJ.json`.

```json
{
  "version": 1,
  "exporteLe": "2026-06-24T14:30:00.000Z",
  "progression": [
    {
      "termeId": "arabesque",
      "statut": "maitrise",
      "favori": true,
      "vuLe": 1719230400000,
      "reussitesQuiz": 5,
      "echecsQuiz": 1
    }
  ],
  "stats": {
    "points": 420,
    "badges": ["premier-pas", "cinquante-termes"],
    "serieJours": 7,
    "derniereVisite": 1719230400000,
    "quizJoues": 12,
    "historiqueActivite": [
      { "date": "2026-06-24", "termesVus": 8, "quizReussis": 3 }
    ],
    "dernierExport": 1719230400000,
    "joursUsageDepuisExport": 0,
    "dernierJourUsage": "2026-06-24",
    "rappelSauvegardeActif": true,
    "onboardingVu": true
  },
  "termesPersonnels": [
    {
      "id": "uuid-généré",
      "estPersonnel": true,
      "nom": "Mon glissement",
      "definition": "Un déplacement que j'ai inventé.",
      "noteLibre": "À travailler avec Marie.",
      "disciplines": [],
      "categories": [],
      "erreursCourantes": [],
      "difficulteInterne": 1
    }
  ]
}
```

## Champs

### Racine

| Champ | Type | Description |
|-------|------|-------------|
| `version` | `number` | Version du schéma (actuellement `1`) |
| `exporteLe` | `string` | Date ISO 8601 de l'export |
| `progression` | `ProgressionTerme[]` | Statut de chaque terme consulté |
| `stats` | `StatsGlobales` | Points, badges, streak... |
| `termesPersonnels` | `TermePersonnel[]` | Termes créés par l'utilisateur |

### `ProgressionTerme`

| Champ | Type | Valeurs |
|-------|------|---------|
| `termeId` | `string` | ID du terme dans `src/content/` |
| `statut` | `string` | `jamais-vu` · `vu` · `a-revoir` · `maitrise` |
| `favori` | `boolean?` | `true` si marqué favori |
| `vuLe` | `number?` | Timestamp du premier aperçu |
| `reussitesQuiz` | `number` | Nb de bonnes réponses en quiz |
| `echecsQuiz` | `number` | Nb de mauvaises réponses en quiz |

### `TermePersonnel`

Mêmes champs que `Terme` (tous optionnels sauf `id` et `estPersonnel`), plus :

| Champ | Type | Description |
|-------|------|-------------|
| `id` | `string` | UUID généré à la création |
| `estPersonnel` | `true` | Discriminant (toujours `true`) |
| `noteLibre` | `string?` | Note libre de l'utilisateur |

## Import

L'import valide le JSON avant de l'appliquer (`validerSauvegarde()` dans `sauvegardeService.ts`).

Validations effectuées :
1. Le fichier est un objet (pas un tableau, pas null)
2. Les champs `version` et `exporteLe` sont présents
3. `progression` est un tableau

En cas d'erreur de validation, l'import est refusé avec un message d'erreur.

### Options d'import

- **Remplacer** : écrase toutes les données locales par le fichier importé
- **Fusionner** : fusionne en conservant le statut le plus avancé par terme, et additionne les termes personnels non dupliqués (par `id`)

## Compatibilité

Le champ `version` permet les migrations futures. Si la version du fichier importé est inférieure à la version actuelle, une migration automatique est appliquée. Si elle est supérieure, l'import est refusé avec un message explicatif.
