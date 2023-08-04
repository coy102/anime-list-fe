import { memo } from 'react'

import Box from '@mui/material/Box'

import { colors, fontSize } from '~/styles/theme'

interface Props {
  'data-testid'?: string
  label: string
  value: string
}

const InfoText = ({ 'data-testid': testid, label, value }: Props) => (
  <>
    <Box data-testid={testid} display="flex" flexDirection="column">
      <Box color={colors.primary[100]} fontSize={fontSize[14]} fontWeight="bold">
        {label}
      </Box>
      <Box fontSize={fontSize[12]}>{value}</Box>
    </Box>
  </>
)

export default memo(InfoText)
