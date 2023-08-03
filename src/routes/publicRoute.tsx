import { lazy } from 'react'

const AnimePage = lazy(() => import('~/pages/Anime'))
const AnimeDetailPage = lazy(() => import('~/pages/Anime/Detail'))
const CollectionsPage = lazy(() => import('~/pages/Collections'))
const NotFoundPage = lazy(() => import('~/components/Error/NotFound'))

export default [
  {
    component: <AnimePage />,
    id: 'anime-page',
    path: '/',
  },
  {
    component: <AnimeDetailPage />,
    id: 'anime-page',
    path: '/:type/:id',
  },
  {
    component: <CollectionsPage />,
    id: 'collection',
    path: '/collections',
  },
  {
    component: <NotFoundPage />,
    id: 'notfound',
    path: '/404',
  },
]
