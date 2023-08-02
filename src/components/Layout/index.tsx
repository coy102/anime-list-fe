import { Suspense, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Loading from '~/components/Loading'
import publicRoute from '~/routes/publicRoute'

import Navbar from '../Navbar'

import { ContentWrapper, MobileContainer } from './style'

const PublicLayout = () => {
  return (
    <>
      <MobileContainer>
        <Navbar />

        <ContentWrapper>
          <Suspense fallback={<Loading loading />}>
            <Routes>
              {publicRoute.map(({ id, path, component: Component }) => (
                <Route element={Component} key={id} path={path} />
              ))}
              <Route element={<Navigate to="/404" />} path="*" />
            </Routes>
          </Suspense>
        </ContentWrapper>
      </MobileContainer>
    </>
  )
}

export default memo(PublicLayout)
