import { memo } from 'react'

import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import { COVER_SIZE } from '~/config/constants'

const CoverSkeleton = () => (
  <Box display="flex" flexDirection="column">
    <Skeleton height={COVER_SIZE.HEIGHT} variant="rectangular" width="100%" />
    <Skeleton height={50} sx={{ my: 3 }} variant="rectangular" width="100%" />
    <Skeleton height={102} sx={{ my: 3 }} variant="rectangular" width="100%" />
    <Skeleton height={250} sx={{ my: 3 }} variant="rectangular" width="100%" />
  </Box>
)

export default memo(CoverSkeleton)
