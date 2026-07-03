import type { QuestionQCMCours } from '@/content/schema'
import { questionsUnite0 } from './unite0'
import { unites } from '@/content/unites'

export const toutesLesQuestionsCours: QuestionQCMCours[] = [
  ...questionsUnite0,
]

export function getQuestionsCoursPourUnite(uniteNumero: number): QuestionQCMCours[] {
  const unite = unites.find(u => u.numero === uniteNumero)
  if (!unite) return []
  const coursIds = new Set(unite.coursIds)
  return toutesLesQuestionsCours.filter(q => coursIds.has(q.coursId))
}
