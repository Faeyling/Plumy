import { termesUnite0 } from './unite0'
import { termesUnite1 } from './unite1'
import { termesUnite2 } from './unite2'
import { termesUnite3 } from './unite3'
import { termesUnite4 } from './unite4'
import { termesUnite5 } from './unite5'
import { termesUnite6 } from './unite6'
import { termesUnite7 } from './unite7'
import { termesUnite8 } from './unite8'
import { termesUnite9 } from './unite9'
import { termesUnite10 } from './unite10'
import type { Terme } from '../schema'

export const tousLesTermes: Terme[] = [
  ...termesUnite0,
  ...termesUnite1,
  ...termesUnite2,
  ...termesUnite3,
  ...termesUnite4,
  ...termesUnite5,
  ...termesUnite6,
  ...termesUnite7,
  ...termesUnite8,
  ...termesUnite9,
  ...termesUnite10,
]

export function getTerme(id: string): Terme | undefined {
  return tousLesTermes.find((t) => t.id === id)
}

export function getTermesParUnite(numero: number): Terme[] {
  const ids = termesParUnite[numero] ?? []
  return ids.map((id) => tousLesTermes.find((t) => t.id === id)).filter((t): t is Terme => t !== undefined)
}

export const termesParUnite: Record<number, string[]> = {
  0: termesUnite0.map((t) => t.id),
  1: termesUnite1.map((t) => t.id),
  2: termesUnite2.map((t) => t.id),
  3: termesUnite3.map((t) => t.id),
  4: termesUnite4.map((t) => t.id),
  5: termesUnite5.map((t) => t.id),
  6: termesUnite6.map((t) => t.id),
  7: termesUnite7.map((t) => t.id),
  8: termesUnite8.map((t) => t.id),
  9: termesUnite9.map((t) => t.id),
  10: termesUnite10.map((t) => t.id),
}
