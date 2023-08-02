import { styled } from '@mui/material/styles'

import { colors } from '~/styles/theme'

export const TitleWrapStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: colors.dark[300],
}))
