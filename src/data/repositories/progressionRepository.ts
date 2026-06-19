import { db } from '../db'
import type { ProgressionTerme } from '@/content/schema'

export const progressionRepository = {
  async get(termeId: string): Promise<ProgressionTerme | undefined> {
    return db.progressions.get(termeId)
  },

  async list(): Promise<ProgressionTerme[]> {
    return db.progressions.toArray()
  },

  async listFavoris(): Promise<ProgressionTerme[]> {
    return db.progressions.where('favori').equals(1).toArray()
  },

  async listARevoir(): Promise<ProgressionTerme[]> {
    return db.progressions.where('statut').equals('a-revoir').toArray()
  },

  async upsert(prog: ProgressionTerme): Promise<void> {
    await db.progressions.put(prog)
  },

  async marquerVu(termeId: string): Promise<void> {
    const existing = await db.progressions.get(termeId)
    if (existing) {
      await db.progressions.update(termeId, { statut: 'vu', vuLe: Date.now() })
    } else {
      await db.progressions.put({
        termeId,
        statut: 'vu',
        vuLe: Date.now(),
        reussitesQuiz: 0,
        echecsQuiz: 0,
      })
    }
  },

  async toggleFavori(termeId: string): Promise<boolean> {
    const existing = await db.progressions.get(termeId)
    const newFavori = !(existing?.favori ?? false)
    if (existing) {
      await db.progressions.update(termeId, { favori: newFavori })
    } else {
      await db.progressions.put({
        termeId,
        statut: 'jamais-vu',
        favori: newFavori,
        reussitesQuiz: 0,
        echecsQuiz: 0,
      })
    }
    return newFavori
  },

  async enregistrerResultatQuiz(termeId: string, reussi: boolean): Promise<void> {
    const existing = await db.progressions.get(termeId)
    if (existing) {
      const updates: Partial<ProgressionTerme> = reussi
        ? { reussitesQuiz: existing.reussitesQuiz + 1, statut: 'maitrise' }
        : { echecsQuiz: existing.echecsQuiz + 1, statut: 'a-revoir' }
      await db.progressions.update(termeId, updates)
    } else {
      await db.progressions.put({
        termeId,
        statut: reussi ? 'maitrise' : 'a-revoir',
        reussitesQuiz: reussi ? 1 : 0,
        echecsQuiz: reussi ? 0 : 1,
      })
    }
  },
}
