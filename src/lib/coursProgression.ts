export interface CoursProgression {
  derniereSection: number
  sectionsVues: number[]
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
  if (!prog.sectionsVues.includes(section)) prog.sectionsVues.push(section)
  localStorage.setItem(clé(coursId), JSON.stringify(prog))
}
