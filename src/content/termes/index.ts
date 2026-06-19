import { termesUnite0 } from './unite0'
import { termesUnite1 } from './unite1'
import type { Terme } from '../schema'

export const tousLesTermes: Terme[] = [
  ...termesUnite0,
  ...termesUnite1,
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
}
