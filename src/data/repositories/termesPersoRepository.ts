import { db } from '../db'
import type { TermePersonnel } from '@/content/schema'

export const termesPersoRepository = {
  async list(): Promise<TermePersonnel[]> {
    return db.termesPersonnels.toArray()
  },

  async get(id: string): Promise<TermePersonnel | undefined> {
    return db.termesPersonnels.get(id)
  },

  async upsert(terme: TermePersonnel): Promise<void> {
    await db.termesPersonnels.put(terme)
  },

  async delete(id: string): Promise<void> {
    await db.termesPersonnels.delete(id)
  },
}
