import { memo } from 'react'

import Box from '@mui/material/Box'

import CoverItem from '~/components/CoverItem'

import { ScrollContainerStyled } from './style'

interface Props {
  characters: any
}

const RelatedContent = ({ characters }: Props) => (
  <Box data-testid="character-media-wrapper" px={1}>
    <Box fontWeight="bold" mt={2} px={2}>
      Characters Preview
    </Box>
    <ScrollContainerStyled className="responsive-scroll">
      <Box display="flex" p={2}>
        {characters?.map((c, i) => (
          <CoverItem
            contentWidth={150}
            coverImage={c?.node?.image?.medium || ''}
            imageHeight={60}
            imageWidth={40}
            index={i}
            key={`cover-item-${i}`}
            subTitle={c?.node?.name?.userPreferred || ''}
            title={c?.role || ''}
          />
        ))}
      </Box>
    </ScrollContainerStyled>
  </Box>
)

export default memo(RelatedContent)
