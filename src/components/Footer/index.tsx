import { memo } from 'react'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { fontSize } from '~/styles/theme'

const Footer = () => (
  <Card sx={{ mt: 10, mx: 2, px: 3, py: 2 }}>
    <Typography fontSize={fontSize[12]}>
      Created using <a href="https://anilist.gitbook.io/anilist-apiv2-docs/">Anilist graphql</a>
    </Typography>
  </Card>
)

export default memo(Footer)
