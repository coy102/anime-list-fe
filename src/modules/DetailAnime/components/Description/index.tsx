import { memo } from 'react'

import { Box, Card, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'
import { htmlClean } from '~/utils/html'

interface Props {
  description: string
}

const Description = ({ description }: Props) => {
  return (
    <Box p={2}>
      <Card sx={{ p: 2 }}>
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="bold" py={2}>
            Synopsis
          </Typography>

          <Box fontSize={fontSize[14]} maxHeight={200} overflow="auto">
            {htmlClean(description)}
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default memo(Description)
