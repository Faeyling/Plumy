import { coursUnite0 } from './unite0'
import { coursUnite1 } from './unite1'
import { coursUnite2 } from './unite2'
import { coursUnite3 } from './unite3'
import type { Cours } from '../schema'

export const tousCesLeCours: Cours[] = [
  ...coursUnite0,
  ...coursUnite1,
  ...coursUnite2,
  ...coursUnite3,
]

export function getCours(id: string): Cours | undefined {
  return tousCesLeCours.find((c) => c.id === id)
}

export function getCoursParUnite(coursIds: string[]): Cours[] {
  return coursIds.map((id) => tousCesLeCours.find((c) => c.id === id)).filter((c): c is Cours => c !== undefined)
}
