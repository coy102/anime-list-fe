import { styled } from '@mui/material/styles'

import { fontSize } from '~/styles/theme'

interface Props {
  bgcolor?: string
  color: string
}

export const StyledTag = styled('div')<Props>(({ bgcolor, color }) => ({
  backgroundColor: bgcolor,
  borderRadius: 4,
  color,
  fontSize: fontSize[10],
  padding: '1px 5px',
}))
