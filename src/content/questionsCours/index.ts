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
import { questionsUnite9 } from './unite9'
import { questionsUnite10 } from './unite10'
import { questionsUnite11 } from './unite11'
import { questionsUnite12 } from './unite12'
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
  ...questionsUnite9,
  ...questionsUnite10,
  ...questionsUnite11,
  ...questionsUnite12,
]

export function getQuestionsCoursPourUnite(uniteNumero: number): QuestionQCMCours[] {
  const unite = unites.find(u => u.numero === uniteNumero)
  if (!unite) return []
  const coursIds = new Set(unite.coursIds)
  return toutesLesQuestionsCours.filter(q => coursIds.has(q.coursId))
}
