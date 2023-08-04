import { memo } from 'react'

import { generateAutoColor } from '~/utils/colorUtil'

import { StyledTag } from './style'

interface Props {
  bgcolor?: string | undefined
  'data-testid': string
  label: string
}

const Tag = ({ bgcolor, 'data-testid': testid, label }: Props) => {
  const color = generateAutoColor(bgcolor, 80)

  return (
    <StyledTag bgcolor={bgcolor} color={color} data-testid={testid} role="listitem">
      {label}
    </StyledTag>
  )
}

export default memo(Tag)
