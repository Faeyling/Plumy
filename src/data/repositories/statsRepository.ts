import { db } from '../db'
import type { StatsGlobales } from '@/content/schema'

const STATS_ID = 'global'

const defaultStats: StatsGlobales & { id: string } = {
  id: STATS_ID,
  points: 0,
  badges: [],
  serieJours: 0,
  derniereVisite: Date.now(),
  quizJoues: 0,
  historiqueActivite: [],
  rappelSauvegardeActif: true,
  onboardingVu: false,
}

export const statsRepository = {
  async get(): Promise<StatsGlobales> {
    const stats = await db.stats.get(STATS_ID)
    return stats ?? defaultStats
  },

  async update(updates: Partial<StatsGlobales>): Promise<void> {
    const existing = await db.stats.get(STATS_ID)
    const base = existing ?? defaultStats
    await db.stats.put({ ...base, ...updates })
  },

  async enregistrerVisite(): Promise<void> {
    const today = new Date().toISOString().slice(0, 10)
    const stats = await this.get()
    const isNewDay = stats.dernierJourUsage !== today

    if (!isNewDay) return

    const joursDepuisExport = (stats.joursUsageDepuisExport ?? 0) + 1
    const hierISO = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    const streakContinue = stats.dernierJourUsage === hierISO
    const nouvelleActivite = { date: today, termesVus: 0, quizReussis: 0 }

    await this.update({
      derniereVisite: Date.now(),
      dernierJourUsage: today,
      joursUsageDepuisExport: joursDepuisExport,
      serieJours: streakContinue ? stats.serieJours + 1 : 1,
      historiqueActivite: [...stats.historiqueActivite.slice(-89), nouvelleActivite],
    })
  },

  async ajouterPoints(n: number): Promise<void> {
    const stats = await this.get()
    await this.update({ points: stats.points + n })
  },

  async debloquerBadge(badgeId: string): Promise<void> {
    const stats = await this.get()
    if (!stats.badges.includes(badgeId)) {
      await this.update({ badges: [...stats.badges, badgeId] })
    }
  },

  async enregistrerExport(): Promise<void> {
    await this.update({
      dernierExport: Date.now(),
      joursUsageDepuisExport: 0,
    })
  },
}
