import Dexie, { type Table } from 'dexie'
import type { ProgressionTerme, StatsGlobales, TermePersonnel } from '@/content/schema'

export interface EntreeHistoriqueQuiz {
  id?: number
  date: string
  type: string
  uniteNumero?: number
  correct: number
  total: number
}

export class PlumyDatabase extends Dexie {
  progressions!: Table<ProgressionTerme>
  stats!: Table<StatsGlobales & { id: string }>
  termesPersonnels!: Table<TermePersonnel>
  historiqueQuiz!: Table<EntreeHistoriqueQuiz>

  constructor() {
    super('PlumyDB')
    this.version(1).stores({
      progressions: 'termeId, statut, favori, vuLe',
      stats: 'id',
      termesPersonnels: 'id, nom',
    })
    this.version(2).stores({
      progressions: 'termeId, statut, favori, vuLe',
      stats: 'id',
      termesPersonnels: 'id, nom',
      historiqueQuiz: '++id, date, type, uniteNumero',
    })
  }
}

export const db = new PlumyDatabase()
