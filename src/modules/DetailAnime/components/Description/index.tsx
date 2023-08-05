import { memo } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import DOMPurify from 'dompurify'

import { fontSize } from '~/styles/theme'

interface Props {
  description: string
}

const Description = ({ description }: Props) => {
  return (
    <Box p={2}>
      <Card data-testid="media-desc-wrapper" sx={{ p: 2 }}>
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="bold" py={2}>
            Synopsis
          </Typography>

          <Box
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
            className="responsive-scroll"
            data-testid="media-desc-text"
            fontSize={fontSize[14]}
            maxHeight={200}
            overflow="auto"
          />
        </Box>
      </Card>
    </Box>
  )
}

export default memo(Description)
