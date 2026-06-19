import Dexie, { type Table } from 'dexie'
import type { ProgressionTerme, StatsGlobales, TermePersonnel } from '@/content/schema'

export class PlumyDatabase extends Dexie {
  progressions!: Table<ProgressionTerme>
  stats!: Table<StatsGlobales & { id: string }>
  termesPersonnels!: Table<TermePersonnel>

  constructor() {
    super('PlumyDB')
    this.version(1).stores({
      progressions: 'termeId, statut, favori, vuLe',
      stats: 'id',
      termesPersonnels: 'id, nom',
    })
  }
}

export const db = new PlumyDatabase()
