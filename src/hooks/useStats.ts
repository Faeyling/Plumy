import { useCallback, useEffect, useState } from 'react'
import { statsRepository } from '@/data/repositories/statsRepository'
import type { StatsGlobales } from '@/content/schema'

export function useStats() {
  const [stats, setStats] = useState<StatsGlobales | null>(null)

  const refresh = useCallback(() => {
    statsRepository.get().then(setStats)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { stats, refresh }
}
