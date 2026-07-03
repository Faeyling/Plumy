import type { QuestionQCMCours } from '@/content/schema'
import { questionsUnite0 } from './unite0'
import { questionsUnite1 } from './unite1'
import { questionsUnite2 } from './unite2'
import { questionsUnite3 } from './unite3'
import { questionsUnite4 } from './unite4'
import { questionsUnite5 } from './unite5'
import { questionsUnite6 } from './unite6'
import { questionsUnite7 } from './unite7'
import { questionsUnite8 } from './unite8'
import { unites } from '@/content/unites'

export const toutesLesQuestionsCours: QuestionQCMCours[] = [
  ...questionsUnite0,
  ...questionsUnite1,
  ...questionsUnite2,
  ...questionsUnite3,
  ...questionsUnite4,
  ...questionsUnite5,
  ...questionsUnite6,
  ...questionsUnite7,
  ...questionsUnite8,
]

export function getQuestionsCoursPourUnite(uniteNumero: number): QuestionQCMCours[] {
  const unite = unites.find(u => u.numero === uniteNumero)
  if (!unite) return []
  const coursIds = new Set(unite.coursIds)
  return toutesLesQuestionsCours.filter(q => coursIds.has(q.coursId))
}
