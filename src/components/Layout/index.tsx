import { Suspense, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Loading from '~/components/Loading'
import publicRoute from '~/routes/publicRoute'

import Navbar from '../Navbar'

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box my={5}>
          <Suspense fallback={<Loading loading />}>
            <Routes>
              {publicRoute.map(({ id, path, component: Component }) => (
                <Route element={Component} key={id} path={path} />
              ))}
              <Route element={<Navigate to="/" />} path="*" />
            </Routes>
          </Suspense>
        </Box>
      </Container>
    </>
  )
}

export default memo(PublicLayout)
