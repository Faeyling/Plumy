import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { AccueilPage } from '@/features/accueil/AccueilPage'
import { GlossairePage } from '@/features/glossaire/GlossairePage'
import { QuizPage } from '@/features/quiz/QuizPage'
import { ProgresPage } from '@/features/progres/ProgresPage'
import { CarnetsPage } from '@/features/carnets/CarnetsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <AccueilPage /> },
      { path: 'glossaire', element: <GlossairePage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'progres', element: <ProgresPage /> },
      { path: 'carnets', element: <CarnetsPage /> },
    ],
  },
])
