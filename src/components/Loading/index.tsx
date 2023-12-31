import React, { memo } from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

interface Props {
  children?: React.ReactNode
  height?: string | number
  loading: boolean
}

const Loading = ({ children, height = '', loading }: Props) => {
  if (loading) {
    return (
      <Box
        alignItems="center"
        data-testid="loading"
        display="flex"
        height={height}
        justifyContent="center"
        mt={4}
      >
        <CircularProgress color="secondary" data-testid="cilcular-progress-loading" size={20} />
      </Box>
    )
  }

  return <>{children}</>
}

export default memo(Loading)
