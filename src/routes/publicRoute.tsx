import { lazy } from 'react'

const AnimePage = lazy(() => import('~/pages/Anime'))
const AnimeDetailPage = lazy(() => import('~/pages/Anime/Detail'))
const CollectionsPage = lazy(() => import('~/pages/Collections'))

export default [
  {
    component: <AnimePage />,
    id: 'anime-page',
    path: '/',
  },
  {
    component: <AnimeDetailPage />,
    id: 'anime-page',
    path: '/anime/:id',
  },
  {
    component: <CollectionsPage />,
    id: 'collection',
    path: '/collections',
  },
]
