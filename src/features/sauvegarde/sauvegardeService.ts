import { db } from '@/data/db'
import type { EntreeHistoriqueQuiz } from '@/data/db'
import type { ProgressionTerme, StatsGlobales, TermePersonnel } from '@/content/schema'
import type { CoursProgression } from '@/lib/coursProgression'

export const SCHEMA_VERSION = '2'

type HistoriqueEntry = Omit<EntreeHistoriqueQuiz, 'id'>

export interface SauvegardeJSON {
  version: string
  exporteLe: string
  progression: ProgressionTerme[]
  stats: Partial<StatsGlobales>
  termesPersonnels: TermePersonnel[]
  historiqueQuiz?: HistoriqueEntry[]
  coursProgression?: Record<string, CoursProgression>
}

function mergeHistoriqueActivite(
  a: StatsGlobales['historiqueActivite'],
  b: StatsGlobales['historiqueActivite'],
): StatsGlobales['historiqueActivite'] {
  const map = new Map<string, { termesVus: number; quizReussis: number }>()
  for (const entry of [...(a ?? []), ...(b ?? [])]) {
    const cur = map.get(entry.date)
    map.set(entry.date, {
      termesVus: Math.max(cur?.termesVus ?? 0, entry.termesVus),
      quizReussis: Math.max(cur?.quizReussis ?? 0, entry.quizReussis),
    })
  }
  return Array.from(map.entries())
    .map(([date, v]) => ({ date, ...v }))
    .sort((a, b) => a.date.localeCompare(b.date))
}

function lireCoursProgressionLocale(): Record<string, CoursProgression> {
  const result: Record<string, CoursProgression> = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('plumy-cours-')) {
        const coursId = key.replace('plumy-cours-', '')
        const raw = localStorage.getItem(key)
        if (raw) result[coursId] = JSON.parse(raw) as CoursProgression
      }
    }
  } catch { /* ignore */ }
  return result
}

export async function exporterDonnees(): Promise<void> {
  const [progression, statsArr, termesPersonnels, historiqueRaw] = await Promise.all([
    db.progressions.toArray(),
    db.stats.toArray(),
    db.termesPersonnels.toArray(),
    db.historiqueQuiz.toArray(),
  ])
  const raw = statsArr[0] as (StatsGlobales & { id?: string }) | undefined
  const { id: _id, ...stats } = raw ?? {}

  // Strip auto-increment id so import can assign fresh IDs
  const historiqueQuiz: HistoriqueEntry[] = historiqueRaw.map(({ id: _hid, ...rest }) => rest)

  const coursProgression = lireCoursProgressionLocale()

  const data: SauvegardeJSON = {
    version: SCHEMA_VERSION,
    exporteLe: new Date().toISOString(),
    progression,
    stats,
    termesPersonnels,
    historiqueQuiz,
    ...(Object.keys(coursProgression).length > 0 && { coursProgression }),
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
    await db.transaction('rw', [db.progressions, db.stats, db.termesPersonnels, db.historiqueQuiz], async () => {
      await db.progressions.clear()
      await db.stats.clear()
      await db.termesPersonnels.clear()
      await db.historiqueQuiz.clear()
      if (data.progression?.length) await db.progressions.bulkPut(data.progression)
      if (data.stats) await db.stats.put({ ...(data.stats as StatsGlobales), id: 'global' })
      if (data.termesPersonnels?.length) await db.termesPersonnels.bulkPut(data.termesPersonnels)
      if (data.historiqueQuiz?.length) await db.historiqueQuiz.bulkAdd(data.historiqueQuiz)
    })
    // Clear all existing course progress, then restore from backup
    try {
      const toRemove: string[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key?.startsWith('plumy-cours-')) toRemove.push(key)
      }
      for (const key of toRemove) localStorage.removeItem(key)
    } catch { /* ignore */ }
    if (data.coursProgression) {
      for (const [coursId, prog] of Object.entries(data.coursProgression)) {
        localStorage.setItem(`plumy-cours-${coursId}`, JSON.stringify(prog))
      }
    }
  } else {
    await db.transaction('rw', [db.progressions, db.stats, db.termesPersonnels, db.historiqueQuiz], async () => {
      for (const prog of data.progression ?? []) {
        const existing = await db.progressions.get(prog.termeId)
        if (!existing) {
          await db.progressions.put(prog)
        } else {
          // Prefer the record with more quiz successes (Leitner state) ; fall back to vuLe for ties
          const fileIsMoreAdvanced =
            (prog.reussitesQuiz ?? 0) > (existing.reussitesQuiz ?? 0) ||
            ((prog.reussitesQuiz ?? 0) === (existing.reussitesQuiz ?? 0) &&
              (prog.vuLe ?? 0) > (existing.vuLe ?? 0))
          if (fileIsMoreAdvanced) {
            await db.progressions.put(prog)
          } else if (prog.favori && !existing.favori) {
            // Always preserve a favori flag even when existing record wins
            await db.progressions.update(prog.termeId, { favori: true })
          }
        }
      }
      for (const terme of data.termesPersonnels ?? []) {
        // Always write — import is intentional; overwriting handles edits from other devices
        await db.termesPersonnels.put(terme)
      }
      if (data.stats) {
        const existing = await db.stats.get('global')
        const base = existing ?? {
          id: 'global',
          points: 0,
          badges: [],
          serieJours: 0,
          derniereVisite: Date.now(),
          quizJoues: 0,
          historiqueActivite: [],
        }
        const merged = {
          ...base,
          points: Math.max(base.points ?? 0, data.stats.points ?? 0),
          quizJoues: Math.max(base.quizJoues ?? 0, data.stats.quizJoues ?? 0),
          serieJours: Math.max(base.serieJours ?? 0, data.stats.serieJours ?? 0),
          badges: Array.from(new Set([...(base.badges ?? []), ...(data.stats.badges ?? [])])),
          historiqueActivite: mergeHistoriqueActivite(
            base.historiqueActivite ?? [],
            data.stats.historiqueActivite ?? [],
          ),
        }
        await db.stats.put(merged)
      }
      // Merge quiz history: skip entries already present for same day+type combination
      if (data.historiqueQuiz?.length) {
        const existingEntries = await db.historiqueQuiz.toArray()
        const existingKeys = new Set(
          existingEntries.map(e => `${e.date}|${e.type}|${e.uniteNumero ?? ''}`)
        )
        const toAdd = data.historiqueQuiz.filter(
          e => !existingKeys.has(`${e.date}|${e.type}|${e.uniteNumero ?? ''}`)
        )
        if (toAdd.length) await db.historiqueQuiz.bulkAdd(toAdd)
      }
    })
    // Merge localStorage course progress: union of sections seen
    if (data.coursProgression) {
      for (const [coursId, prog] of Object.entries(data.coursProgression)) {
        const key = `plumy-cours-${coursId}`
        try {
          const raw = localStorage.getItem(key)
          if (!raw) {
            localStorage.setItem(key, JSON.stringify(prog))
          } else {
            const local = JSON.parse(raw) as CoursProgression
            const merged: CoursProgression = {
              derniereSection: Math.max(local.derniereSection, prog.derniereSection),
              sectionsVues: Array.from(new Set([...local.sectionsVues, ...prog.sectionsVues])),
              derniereLecture:
                local.derniereLecture && prog.derniereLecture
                  ? local.derniereLecture > prog.derniereLecture
                    ? local.derniereLecture
                    : prog.derniereLecture
                  : (local.derniereLecture ?? prog.derniereLecture),
            }
            localStorage.setItem(key, JSON.stringify(merged))
          }
        } catch { /* ignore localStorage errors */ }
      }
    }
  }
}

export function validerSauvegarde(json: unknown): SauvegardeJSON {
  if (typeof json !== 'object' || json === null)
    throw new Error('Format invalide')
  const data = json as Record<string, unknown>
  if (!data.version || !data.exporteLe)
    throw new Error('Fichier de sauvegarde invalide — champs manquants.')
  if (
    typeof data.version === 'string' &&
    !isNaN(parseInt(data.version)) &&
    parseInt(data.version) > parseInt(SCHEMA_VERSION)
  )
    throw new Error(
      `Version de sauvegarde (v${data.version}) non supportée. Mets Plumy à jour pour restaurer ce fichier.`
    )
  if (!Array.isArray(data.progression))
    throw new Error('Fichier de sauvegarde invalide — progression manquante.')
  return data as unknown as SauvegardeJSON
}
