import { lazy } from 'react'

const HomePage = lazy(() => import('~/pages/Home'))
const CollectionsPage = lazy(() => import('~/pages/Collections'))

export default [
  {
    component: <HomePage />,
    id: 'home-page',
    path: '/',
  },
  {
    component: <CollectionsPage />,
    id: 'collection',
    path: '/collections',
  },
]
