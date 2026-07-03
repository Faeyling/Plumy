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
    return db.progressions.filter(p => p.favori === true).toArray()
  },

  async listARevoir(): Promise<ProgressionTerme[]> {
    const now = Date.now()
    return db.progressions
      .where('statut').equals('a-revoir')
      .filter(p => !p.prochainRevision || p.prochainRevision <= now)
      .toArray()
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

  async mettreAJourStatutBatch(mises: { termeId: string; statut: ProgressionTerme['statut'] }[]): Promise<void> {
    await db.transaction('rw', db.progressions, async () => {
      for (const { termeId, statut } of mises) {
        const existing = await db.progressions.get(termeId)
        if (existing) {
          await db.progressions.update(termeId, { statut })
        } else {
          await db.progressions.put({ termeId, statut, reussitesQuiz: 0, echecsQuiz: 0 })
        }
      }
    })
  },

  async enregistrerResultatQuiz(termeId: string, reussi: boolean): Promise<void> {
    const existing = await db.progressions.get(termeId)
    const reussitesPrecedentes = existing?.reussitesQuiz ?? 0
    const now = Date.now()
    const JOUR_MS = 86_400_000

    if (reussi) {
      const nouvellesReussites = reussitesPrecedentes + 1
      const statut: ProgressionTerme['statut'] = nouvellesReussites >= 3 ? 'maitrise' : 'vu'
      // Leitner boxes: 1 correct → +1j, 2 corrects → +3j, 3+ corrects → +7j
      const delaiJours = nouvellesReussites >= 3 ? 7 : nouvellesReussites === 2 ? 3 : 1
      const updates: Partial<ProgressionTerme> = {
        reussitesQuiz: nouvellesReussites,
        statut,
        prochainRevision: now + delaiJours * JOUR_MS,
      }
      if (existing) {
        await db.progressions.update(termeId, updates)
      } else {
        await db.progressions.put({ termeId, echecsQuiz: 0, ...updates })
      }
    } else {
      const updates: Partial<ProgressionTerme> = {
        echecsQuiz: (existing?.echecsQuiz ?? 0) + 1,
        statut: 'a-revoir',
        reussitesQuiz: 0,
        prochainRevision: now + JOUR_MS,
      }
      if (existing) {
        await db.progressions.update(termeId, updates)
      } else {
        await db.progressions.put({ termeId, ...updates })
      }
    }
  },
}
