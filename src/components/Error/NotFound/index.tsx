import { memo } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

import { Wrapper } from './style'

const NotFound = () => {
  return (
    <Wrapper data-testid="wrapper-404">
      <h1 data-testid="header-404">404 Page not found!</h1>
      <Button component={Link} to="/">
        Back to home
      </Button>
    </Wrapper>
  )
}

export default memo(NotFound)
