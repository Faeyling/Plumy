/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { AccueilPage } from '@/features/accueil/AccueilPage'

const GlossairePage = lazy(() => import('@/features/glossaire/GlossairePage').then(m => ({ default: m.GlossairePage })))
const QuizPage = lazy(() => import('@/features/quiz/QuizPage').then(m => ({ default: m.QuizPage })))
const ProgresPage = lazy(() => import('@/features/progres/ProgresPage').then(m => ({ default: m.ProgresPage })))
const CarnetsPage = lazy(() => import('@/features/carnets/CarnetsPage').then(m => ({ default: m.CarnetsPage })))
const SourcesPage = lazy(() => import('@/features/sources/SourcesPage').then(m => ({ default: m.SourcesPage })))
const FlashcardSession = lazy(() => import('@/features/quiz/FlashcardSession').then(m => ({ default: m.FlashcardSession })))
const PersoFlashcardSession = lazy(() => import('@/features/quiz/PersoFlashcardSession').then(m => ({ default: m.PersoFlashcardSession })))
const QCMSession = lazy(() => import('@/features/quiz/QCMSession').then(m => ({ default: m.QCMSession })))
const AssociationSession = lazy(() => import('@/features/quiz/AssociationSession').then(m => ({ default: m.AssociationSession })))
const TexteATrousSession = lazy(() => import('@/features/quiz/TexteATrousSession').then(m => ({ default: m.TexteATrousSession })))
const ReconnaissanceVisuelleSession = lazy(() => import('@/features/quiz/ReconnaissanceVisuelleSession').then(m => ({ default: m.ReconnaissanceVisuelleSession })))
const RevisionPage = lazy(() => import('@/features/revision/RevisionPage').then(m => ({ default: m.RevisionPage })))
const GrapheDansesPage = lazy(() => import('@/features/graphe-danses/GrapheDansesPage').then(m => ({ default: m.GrapheDansesPage })))
const UnitePage = lazy(() => import('@/features/unite/UnitePage').then(m => ({ default: m.UnitePage })))
const TermePage = lazy(() => import('@/features/terme/TermePage').then(m => ({ default: m.TermePage })))
const CoursPage = lazy(() => import('@/features/cours/CoursPage').then(m => ({ default: m.CoursPage })))
const ParametresPage = lazy(() => import('@/features/parametres/ParametresPage').then(m => ({ default: m.ParametresPage })))
const DefiQuotidienSession = lazy(() => import('@/features/quiz/DefiQuotidienSession').then(m => ({ default: m.DefiQuotidienSession })))
const RevisionRapidePage = lazy(() => import('@/features/revision/RevisionRapidePage').then(m => ({ default: m.RevisionRapidePage })))
const EnSceneSession = lazy(() => import('@/features/quiz/EnSceneSession').then(m => ({ default: m.EnSceneSession })))
const ParcourPage = lazy(() => import('@/features/parcours/ParcourPage').then(m => ({ default: m.ParcourPage })))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]" aria-label="Chargement en cours" role="status">
      <div className="w-8 h-8 rounded-full border-4 border-[var(--color-candy-rose)] border-t-transparent animate-spin" />
    </div>
  )
}

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <AccueilPage /> },
      { path: 'glossaire', element: withSuspense(<GlossairePage />) },
      { path: 'quiz', element: withSuspense(<QuizPage />) },
      { path: 'progres', element: withSuspense(<ProgresPage />) },
      { path: 'carnets', element: withSuspense(<CarnetsPage />) },
      { path: 'sources', element: withSuspense(<SourcesPage />) },
      { path: 'flashcards/perso', element: withSuspense(<PersoFlashcardSession />) },
      { path: 'flashcards/:numero', element: withSuspense(<FlashcardSession />) },
      { path: 'quiz/qcm/:numero', element: withSuspense(<QCMSession />) },
      { path: 'quiz/association/:numero', element: withSuspense(<AssociationSession />) },
      { path: 'quiz/texte-a-trous/:numero', element: withSuspense(<TexteATrousSession />) },
      { path: 'quiz/reconnaissance-visuelle/:numero', element: withSuspense(<ReconnaissanceVisuelleSession />) },
      { path: 'revision', element: withSuspense(<RevisionPage />) },
      { path: 'graphe-danses', element: withSuspense(<GrapheDansesPage />) },
      { path: 'unite/:numero', element: withSuspense(<UnitePage />) },
      { path: 'terme/:id', element: withSuspense(<TermePage />) },
      { path: 'cours/:id', element: withSuspense(<CoursPage />) },
      { path: 'parametres', element: withSuspense(<ParametresPage />) },
      { path: 'quiz/defi', element: withSuspense(<DefiQuotidienSession />) },
      { path: 'revision/rapide', element: withSuspense(<RevisionRapidePage />) },
      { path: 'quiz/scene', element: withSuspense(<EnSceneSession />) },
      { path: 'parcours/:id', element: withSuspense(<ParcourPage />) },
    ],
  },
])
