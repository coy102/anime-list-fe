import { Suspense, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import publicRoute from '~/routes/publicRoute'

import BottomNav from '../BottomNav'

import { MobileContainer } from './style'

const PublicLayout = () => {
  return (
    <>
      <MobileContainer>
        <Suspense>
          <Routes>
            {publicRoute.map(({ id, path, component: Component }) => (
              <Route element={Component} key={id} path={path} />
            ))}
            <Route element={<Navigate to="/404" />} path="*" />
          </Routes>
        </Suspense>
        <BottomNav />
      </MobileContainer>
    </>
  )
}

export default memo(PublicLayout)
