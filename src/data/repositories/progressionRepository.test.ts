import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { ProgressionTerme } from '@/content/schema'

let store: Record<string, ProgressionTerme> = {}

vi.mock('@/data/db', () => ({
  db: {
    progressions: {
      get: async (key: string) => store[key],
      put: async (val: ProgressionTerme) => { store[val.termeId] = val },
      update: async (key: string, updates: Partial<ProgressionTerme>) => {
        if (store[key]) store[key] = { ...store[key], ...updates }
      },
      where: (field: string) => ({
        equals: (val: unknown) => ({
          toArray: async () =>
            Object.values(store).filter(
              (p) => (p as Record<string, unknown>)[field] === val,
            ),
        }),
      }),
      filter: (fn: (p: ProgressionTerme) => boolean) => ({
        toArray: async () => Object.values(store).filter(fn),
      }),
      toArray: async () => Object.values(store),
    },
    transaction: async (_mode: string, _tables: unknown[], fn: () => Promise<void>) => fn(),
  },
}))

import { progressionRepository } from './progressionRepository'

beforeEach(() => { store = {} })

describe('progressionRepository.marquerVu', () => {
  it("crée une entrée 'vu' si inexistante", async () => {
    await progressionRepository.marquerVu('plie')
    expect(store['plie']?.statut).toBe('vu')
    expect(store['plie']?.termeId).toBe('plie')
    expect(store['plie']?.reussitesQuiz).toBe(0)
  })

  it("met à jour le statut si entrée existante", async () => {
    store['arabesque'] = { termeId: 'arabesque', statut: 'jamais-vu', reussitesQuiz: 0, echecsQuiz: 0 }
    await progressionRepository.marquerVu('arabesque')
    expect(store['arabesque'].statut).toBe('vu')
  })

  it("conserve reussitesQuiz lors de la mise à jour", async () => {
    store['plie'] = { termeId: 'plie', statut: 'maitrise', reussitesQuiz: 5, echecsQuiz: 1 }
    await progressionRepository.marquerVu('plie')
    expect(store['plie'].reussitesQuiz).toBe(5)
  })
})

describe('progressionRepository.toggleFavori', () => {
  it("ajoute aux favoris si terme inexistant", async () => {
    const result = await progressionRepository.toggleFavori('plie')
    expect(result).toBe(true)
    expect(store['plie']?.favori).toBe(true)
    expect(store['plie']?.statut).toBe('jamais-vu')
  })

  it("active le favori si false", async () => {
    store['plie'] = { termeId: 'plie', statut: 'vu', favori: false, reussitesQuiz: 0, echecsQuiz: 0 }
    const result = await progressionRepository.toggleFavori('plie')
    expect(result).toBe(true)
    expect(store['plie'].favori).toBe(true)
  })

  it("désactive le favori si true", async () => {
    store['plie'] = { termeId: 'plie', statut: 'vu', favori: true, reussitesQuiz: 0, echecsQuiz: 0 }
    const result = await progressionRepository.toggleFavori('plie')
    expect(result).toBe(false)
    expect(store['plie'].favori).toBe(false)
  })
})

describe('progressionRepository.listFavoris', () => {
  beforeEach(() => {
    store['a'] = { termeId: 'a', statut: 'vu', favori: true, reussitesQuiz: 0, echecsQuiz: 0 }
    store['b'] = { termeId: 'b', statut: 'vu', favori: false, reussitesQuiz: 0, echecsQuiz: 0 }
    store['c'] = { termeId: 'c', statut: 'vu', reussitesQuiz: 0, echecsQuiz: 0 }
    store['d'] = { termeId: 'd', statut: 'jamais-vu', favori: true, reussitesQuiz: 0, echecsQuiz: 0 }
  })

  it("retourne uniquement les termes avec favori=true", async () => {
    const favoris = await progressionRepository.listFavoris()
    const ids = favoris.map((f) => f.termeId).sort()
    expect(ids).toEqual(['a', 'd'])
  })

  it("retourne [] si aucun favori", async () => {
    store = { b: { termeId: 'b', statut: 'vu', favori: false, reussitesQuiz: 0, echecsQuiz: 0 } }
    const favoris = await progressionRepository.listFavoris()
    expect(favoris).toHaveLength(0)
  })
})

describe('progressionRepository.enregistrerResultatQuiz', () => {
  it("crée maitrise+reussitesQuiz=1 si réussi et inexistant", async () => {
    await progressionRepository.enregistrerResultatQuiz('plie', true)
    expect(store['plie'].statut).toBe('maitrise')
    expect(store['plie'].reussitesQuiz).toBe(1)
    expect(store['plie'].echecsQuiz).toBe(0)
  })

  it("crée a-revoir+echecsQuiz=1 si échoué et inexistant", async () => {
    await progressionRepository.enregistrerResultatQuiz('arabesque', false)
    expect(store['arabesque'].statut).toBe('a-revoir')
    expect(store['arabesque'].echecsQuiz).toBe(1)
    expect(store['arabesque'].reussitesQuiz).toBe(0)
  })

  it("incrémente reussitesQuiz si entrée existante + réussi", async () => {
    store['plie'] = { termeId: 'plie', statut: 'vu', reussitesQuiz: 2, echecsQuiz: 1 }
    await progressionRepository.enregistrerResultatQuiz('plie', true)
    expect(store['plie'].reussitesQuiz).toBe(3)
    expect(store['plie'].echecsQuiz).toBe(1)
    expect(store['plie'].statut).toBe('maitrise')
  })

  it("incrémente echecsQuiz si entrée existante + échoué", async () => {
    store['plie'] = { termeId: 'plie', statut: 'maitrise', reussitesQuiz: 3, echecsQuiz: 0 }
    await progressionRepository.enregistrerResultatQuiz('plie', false)
    expect(store['plie'].echecsQuiz).toBe(1)
    expect(store['plie'].statut).toBe('a-revoir')
  })
})

describe('progressionRepository.mettreAJourStatutBatch', () => {
  it("met à jour plusieurs termes en une transaction", async () => {
    store['a'] = { termeId: 'a', statut: 'vu', reussitesQuiz: 0, echecsQuiz: 0 }
    await progressionRepository.mettreAJourStatutBatch([
      { termeId: 'a', statut: 'maitrise' },
      { termeId: 'b', statut: 'a-revoir' },
    ])
    expect(store['a'].statut).toBe('maitrise')
    expect(store['b'].statut).toBe('a-revoir')
  })
})
