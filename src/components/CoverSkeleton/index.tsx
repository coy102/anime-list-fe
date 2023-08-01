import { memo } from 'react'

import { Skeleton as MuiSkeleton } from '@mui/material'

import { COVER_SIZE } from '~/config/constants'

const CoverSkeleton = () => (
  <MuiSkeleton height={COVER_SIZE.HEIGHT} variant="rectangular" width="100%" />
)

export default memo(CoverSkeleton)
