import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { AccueilPage } from '@/features/accueil/AccueilPage'
import { GlossairePage } from '@/features/glossaire/GlossairePage'
import { QuizPage } from '@/features/quiz/QuizPage'
import { ProgresPage } from '@/features/progres/ProgresPage'
import { CarnetsPage } from '@/features/carnets/CarnetsPage'
import { SourcesPage } from '@/features/sources/SourcesPage'
import { FlashcardSession } from '@/features/quiz/FlashcardSession'
import { PersoFlashcardSession } from '@/features/quiz/PersoFlashcardSession'
import { QCMSession } from '@/features/quiz/QCMSession'
import { AssociationSession } from '@/features/quiz/AssociationSession'
import { TexteATrousSession } from '@/features/quiz/TexteATrousSession'
import { ReconnaissanceVisuelleSession } from '@/features/quiz/ReconnaissanceVisuelleSession'
import { RevisionPage } from '@/features/revision/RevisionPage'
import { GrapheDansesPage } from '@/features/graphe-danses/GrapheDansesPage'
import { UnitePage } from '@/features/unite/UnitePage'
import { TermePage } from '@/features/terme/TermePage'
import { CoursPage } from '@/features/cours/CoursPage'

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
      { path: 'sources', element: <SourcesPage /> },
      { path: 'flashcards/perso', element: <PersoFlashcardSession /> },
      { path: 'flashcards/:numero', element: <FlashcardSession /> },
      { path: 'quiz/qcm/:numero', element: <QCMSession /> },
      { path: 'quiz/association/:numero', element: <AssociationSession /> },
      { path: 'quiz/texte-a-trous/:numero', element: <TexteATrousSession /> },
      { path: 'quiz/reconnaissance-visuelle/:numero', element: <ReconnaissanceVisuelleSession /> },
      { path: 'revision', element: <RevisionPage /> },
      { path: 'graphe-danses', element: <GrapheDansesPage /> },
      { path: 'unite/:numero', element: <UnitePage /> },
      { path: 'terme/:id', element: <TermePage /> },
      { path: 'cours/:id', element: <CoursPage /> },
    ],
  },
])
