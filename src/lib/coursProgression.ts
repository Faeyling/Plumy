export interface CoursProgression {
  derniereSection: number
  sectionsVues: number[]
  derniereLecture?: string  // ISO timestamp de la dernière section lue
}

const clé = (id: string) => `plumy-cours-${id}`

export function getCoursProgression(coursId: string): CoursProgression {
  try {
    const raw = localStorage.getItem(clé(coursId))
    if (raw) return JSON.parse(raw) as CoursProgression
  } catch { /* */ }
  return { derniereSection: 0, sectionsVues: [] }
}

export function marquerSectionVue(coursId: string, section: number): void {
  const prog = getCoursProgression(coursId)
  prog.derniereSection = section
  prog.derniereLecture = new Date().toISOString()
  if (!prog.sectionsVues.includes(section)) prog.sectionsVues.push(section)
  localStorage.setItem(clé(coursId), JSON.stringify(prog))
}

export function aLuRecemment(coursId: string, heures = 24): boolean {
  const { derniereLecture } = getCoursProgression(coursId)
  if (!derniereLecture) return false
  return Date.now() - new Date(derniereLecture).getTime() < heures * 3_600_000
}

export function uniteALuRecemment(coursIds: string[], heures = 24): boolean {
  return coursIds.some((id) => aLuRecemment(id, heures))
}

export function getTotalSectionsLues(coursIds: string[]): number {
  return coursIds.reduce((sum, id) => sum + getCoursProgression(id).sectionsVues.length, 0)
}
