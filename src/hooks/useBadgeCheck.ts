import { useCallback } from 'react'
import { statsRepository } from '@/data/repositories/statsRepository'
import { progressionRepository } from '@/data/repositories/progressionRepository'

export function useBadgeCheck() {
  const checkBadges = useCallback(async (): Promise<string[]> => {
    const [stats, progressions] = await Promise.all([
      statsRepository.get(),
      progressionRepository.list(),
    ])

    const termesVus = progressions.filter(p => p.statut !== 'jamais-vu').length
    const termesMaitrises = progressions.filter(p => p.statut === 'maitrise').length
    const termesFavoris = progressions.filter(p => p.favori).length

    const candidats: string[] = []

    if (termesVus >= 1) candidats.push('premier-pas')
    if (termesVus >= 10) candidats.push('curieux')
    if (termesVus >= 50) candidats.push('studieux')
    if (termesVus >= 100) candidats.push('encyclopediste')

    if (stats.quizJoues >= 1) candidats.push('premier-quiz')
    if (stats.quizJoues >= 10) candidats.push('quiz-x10')
    if (stats.quizJoues >= 25) candidats.push('quiz-x25')

    if (stats.serieJours >= 3) candidats.push('serie-3')
    if (stats.serieJours >= 7) candidats.push('serie-7')
    if (stats.serieJours >= 30) candidats.push('serie-30')

    if (termesMaitrises >= 1) candidats.push('premier-maitrise')
    if (termesMaitrises >= 10) candidats.push('maitrise-x10')
    if (termesMaitrises >= 50) candidats.push('maitrise-x50')

    if (termesFavoris >= 10) candidats.push('collectionneur')

    const nouveaux = candidats.filter(id => !stats.badges.includes(id))
    for (const badgeId of nouveaux) {
      await statsRepository.debloquerBadge(badgeId)
    }

    return nouveaux
  }, [])

  return { checkBadges }
}
