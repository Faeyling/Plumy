import { coursUnite1 } from './unite1'
import { coursUnite2 } from './unite2'
import { coursUnite3 } from './unite3'
import { coursUnite4 } from './unite4'
import { coursUnite5 } from './unite5'
import { coursUnite6 } from './unite6'
import { coursUnite7 } from './unite7'
import { coursUnite8 } from './unite8'
import { coursUnite9 } from './unite9'
import { coursUnite10 } from './unite10'
import { coursUnite11 } from './unite11'
import { coursUnite12 } from './unite12'
import { coursUnite13 } from './unite13'
import { coursUnite14 } from './unite14'
import type { Cours } from '../schema'

export const tousCesLeCours: Cours[] = [
  ...coursUnite1,
  ...coursUnite2,
  ...coursUnite3,
  ...coursUnite4,
  ...coursUnite5,
  ...coursUnite6,
  ...coursUnite7,
  ...coursUnite8,
  ...coursUnite9,
  ...coursUnite10,
  ...coursUnite11,
  ...coursUnite12,
  ...coursUnite13,
  ...coursUnite14,
]

export function getCours(id: string): Cours | undefined {
  return tousCesLeCours.find((c) => c.id === id)
}

export function getCoursParUnite(coursIds: string[]): Cours[] {
  return coursIds.map((id) => tousCesLeCours.find((c) => c.id === id)).filter((c): c is Cours => c !== undefined)
}
