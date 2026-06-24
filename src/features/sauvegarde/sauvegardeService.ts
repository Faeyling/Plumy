import { db } from '@/data/db'
import type { ProgressionTerme, StatsGlobales, TermePersonnel } from '@/content/schema'

export const SCHEMA_VERSION = '1'

export interface SauvegardeJSON {
  version: string
  exporteLe: string
  progression: ProgressionTerme[]
  stats: Partial<StatsGlobales>
  termesPersonnels: TermePersonnel[]
}

export async function exporterDonnees(): Promise<void> {
  const [progression, statsArr, termesPersonnels] = await Promise.all([
    db.progressions.toArray(),
    db.stats.toArray(),
    db.termesPersonnels.toArray(),
  ])
  const raw = statsArr[0] as (StatsGlobales & { id?: string }) | undefined
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _id, ...stats } = raw ?? {}

  const data: SauvegardeJSON = {
    version: SCHEMA_VERSION,
    exporteLe: new Date().toISOString(),
    progression,
    stats,
    termesPersonnels,
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `plumy-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function importerDonnees(
  data: SauvegardeJSON,
  mode: 'fusionner' | 'remplacer',
): Promise<void> {
  if (mode === 'remplacer') {
    await db.transaction('rw', [db.progressions, db.stats, db.termesPersonnels], async () => {
      await db.progressions.clear()
      await db.stats.clear()
      await db.termesPersonnels.clear()
      if (data.progression?.length) await db.progressions.bulkPut(data.progression)
      if (data.stats) await db.stats.put({ ...(data.stats as StatsGlobales), id: 'global' })
      if (data.termesPersonnels?.length) await db.termesPersonnels.bulkPut(data.termesPersonnels)
    })
  } else {
    await db.transaction('rw', [db.progressions, db.termesPersonnels], async () => {
      for (const prog of data.progression ?? []) {
        const existing = await db.progressions.get(prog.termeId)
        if (!existing || (prog.vuLe ?? 0) > (existing.vuLe ?? 0)) {
          await db.progressions.put(prog)
        }
      }
      for (const terme of data.termesPersonnels ?? []) {
        const existing = await db.termesPersonnels.get(terme.id)
        if (!existing) await db.termesPersonnels.put(terme)
      }
    })
  }
}

export function validerSauvegarde(json: unknown): SauvegardeJSON {
  if (typeof json !== 'object' || json === null)
    throw new Error('Format invalide')
  const data = json as Record<string, unknown>
  if (!data.version || !data.exporteLe)
    throw new Error('Fichier de sauvegarde invalide — champs manquants.')
  if (!Array.isArray(data.progression))
    throw new Error('Fichier de sauvegarde invalide — progression manquante.')
  return data as unknown as SauvegardeJSON
}
