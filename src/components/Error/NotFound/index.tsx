import { memo } from 'react'

import { Wrapper } from './style'

const NotFound = () => {
  return (
    <Wrapper data-testid="wrapper-404">
      <h1 data-testid="header-404">404 Page not found!</h1>
    </Wrapper>
  )
}

export default memo(NotFound)
