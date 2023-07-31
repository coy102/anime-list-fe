import { lazy } from 'react'

const HomePage = lazy(() => import('~/pages/Home'))

export default [
  {
    component: <HomePage />,
    id: 'home-page',
    path: '/',
  },
]
