import { db, type EntreeHistoriqueQuiz } from '../db'

export const historiqueRepository = {
  /** Enregistre un quiz terminé, daté du jour */
  async ajouter(entree: Omit<EntreeHistoriqueQuiz, 'id' | 'date'>): Promise<void> {
    await db.historiqueQuiz.add({ ...entree, date: new Date().toISOString().slice(0, 10) })
  },

  /** Derniers quiz joués, du plus récent au plus ancien */
  async recents(limite = 20): Promise<EntreeHistoriqueQuiz[]> {
    return db.historiqueQuiz.orderBy('id').reverse().limit(limite).toArray()
  },
}
