import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { StatsGlobales } from '@/content/schema'

let statsStore: (StatsGlobales & { id: string }) | undefined

vi.mock('@/data/db', () => ({
  db: {
    stats: {
      get: async () => statsStore,
      put: async (val: StatsGlobales & { id: string }) => { statsStore = val },
      toArray: async () => (statsStore ? [statsStore] : []),
      clear: async () => { statsStore = undefined },
    },
    transaction: async (_mode: string, _tables: unknown[], fn: () => Promise<void>) => fn(),
  },
}))

import { statsRepository } from './statsRepository'

beforeEach(() => { statsStore = undefined })

describe('statsRepository.ajouterPoints', () => {
  it("initialise à defaultStats puis ajoute les points", async () => {
    await statsRepository.ajouterPoints(10)
    expect(statsStore?.points).toBe(10)
  })

  it("accumule les points sur plusieurs appels", async () => {
    await statsRepository.ajouterPoints(5)
    await statsRepository.ajouterPoints(15)
    expect(statsStore?.points).toBe(20)
  })

  it("ne réinitialise pas les autres champs", async () => {
    statsStore = {
      id: 'global', points: 0, badges: ['premier-pas'], serieJours: 3,
      derniereVisite: Date.now(), quizJoues: 7, historiqueActivite: [],
    }
    await statsRepository.ajouterPoints(5)
    expect(statsStore?.badges).toContain('premier-pas')
    expect(statsStore?.serieJours).toBe(3)
    expect(statsStore?.quizJoues).toBe(7)
  })
})

describe('statsRepository.debloquerBadge', () => {
  it("ajoute un badge absent", async () => {
    await statsRepository.debloquerBadge('premier-pas')
    expect(statsStore?.badges).toContain('premier-pas')
  })

  it("ne duplique pas un badge déjà présent", async () => {
    statsStore = {
      id: 'global', points: 0, badges: ['premier-pas'], serieJours: 0,
      derniereVisite: Date.now(), quizJoues: 0, historiqueActivite: [],
    }
    await statsRepository.debloquerBadge('premier-pas')
    const count = (statsStore?.badges ?? []).filter((b) => b === 'premier-pas').length
    expect(count).toBe(1)
  })

  it("peut ajouter plusieurs badges distincts", async () => {
    await statsRepository.debloquerBadge('premier-pas')
    await statsRepository.debloquerBadge('curieux')
    expect(statsStore?.badges).toContain('premier-pas')
    expect(statsStore?.badges).toContain('curieux')
    expect(statsStore?.badges?.length).toBe(2)
  })
})

describe('statsRepository.enregistrerVisite', () => {
  it("crée une entrée avec aujourd'hui comme dernierJourUsage", async () => {
    await statsRepository.enregistrerVisite()
    const today = new Date().toISOString().slice(0, 10)
    expect(statsStore?.dernierJourUsage).toBe(today)
  })

  it("n'enregistre pas une deuxième visite le même jour", async () => {
    await statsRepository.enregistrerVisite()
    const joursApres1 = statsStore?.joursUsageDepuisExport
    await statsRepository.enregistrerVisite()
    expect(statsStore?.joursUsageDepuisExport).toBe(joursApres1)
  })

  it("incrémente serieJours si la dernière visite était hier (UTC)", async () => {
    const hierDate = new Date()
    hierDate.setUTCDate(hierDate.getUTCDate() - 1)
    const hier = hierDate.toISOString().slice(0, 10)

    statsStore = {
      id: 'global', points: 0, badges: [], serieJours: 4,
      derniereVisite: Date.now(), quizJoues: 0, historiqueActivite: [],
      dernierJourUsage: hier,
    }
    await statsRepository.enregistrerVisite()
    expect(statsStore?.serieJours).toBe(5)
  })

  it("remet serieJours à 1 si un jour a été manqué", async () => {
    const avantHier = new Date()
    avantHier.setUTCDate(avantHier.getUTCDate() - 2)

    statsStore = {
      id: 'global', points: 0, badges: [], serieJours: 10,
      derniereVisite: Date.now(), quizJoues: 0, historiqueActivite: [],
      dernierJourUsage: avantHier.toISOString().slice(0, 10),
    }
    await statsRepository.enregistrerVisite()
    expect(statsStore?.serieJours).toBe(1)
  })

  it("ajoute une entrée dans historiqueActivite", async () => {
    await statsRepository.enregistrerVisite()
    expect(statsStore?.historiqueActivite?.length).toBeGreaterThanOrEqual(1)
    const today = new Date().toISOString().slice(0, 10)
    const entry = statsStore?.historiqueActivite?.find((a) => a.date === today)
    expect(entry).toBeDefined()
  })
})

describe('statsRepository.ajouterTermeVuAujourdhui', () => {
  it("incrémente termesVus dans l'entrée du jour", async () => {
    const today = new Date().toISOString().slice(0, 10)
    statsStore = {
      id: 'global', points: 0, badges: [], serieJours: 0,
      derniereVisite: Date.now(), quizJoues: 0,
      historiqueActivite: [{ date: today, termesVus: 2, quizReussis: 0 }],
    }
    await statsRepository.ajouterTermeVuAujourdhui()
    const entry = statsStore?.historiqueActivite?.find((a) => a.date === today)
    expect(entry?.termesVus).toBe(3)
  })

  it("crée une entrée pour aujourd'hui si absente", async () => {
    statsStore = {
      id: 'global', points: 0, badges: [], serieJours: 0,
      derniereVisite: Date.now(), quizJoues: 0, historiqueActivite: [],
    }
    await statsRepository.ajouterTermeVuAujourdhui()
    const today = new Date().toISOString().slice(0, 10)
    const entry = statsStore?.historiqueActivite?.find((a) => a.date === today)
    expect(entry?.termesVus).toBe(1)
  })
})

describe('statsRepository.enregistrerExport', () => {
  it("remet joursUsageDepuisExport à 0", async () => {
    statsStore = {
      id: 'global', points: 42, badges: [], serieJours: 0,
      derniereVisite: Date.now(), quizJoues: 0, historiqueActivite: [],
      joursUsageDepuisExport: 7,
    }
    await statsRepository.enregistrerExport()
    expect(statsStore?.joursUsageDepuisExport).toBe(0)
    expect(statsStore?.points).toBe(42)
  })
})
