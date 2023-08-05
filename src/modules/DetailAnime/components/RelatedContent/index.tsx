import { memo } from 'react'

import Box from '@mui/material/Box'

import CoverItem from '~/components/CoverItem'

import { ScrollContainerStyled } from './style'

interface Props {
  relations: any
}

const RelatedContent = ({ relations }: Props) => (
  <Box data-testid="related-media-wrapper" px={1}>
    <Box fontWeight="bold" mt={2} px={2}>
      Related
    </Box>
    <ScrollContainerStyled className="responsive-scroll">
      <Box display="flex" p={2}>
        {relations?.map((r, i) => (
          <CoverItem
            contentWidth={200}
            coverImage={r.node.coverImage.medium || ''}
            index={i}
            key={`cover-item-${i}`}
            link={`/${r.node.type.toLowerCase()}/${r.node.id}`}
            subTitle={r.node.title?.romaji || ''}
            title={r.relationType || ''}
          />
        ))}
      </Box>
    </ScrollContainerStyled>
  </Box>
)

export default memo(RelatedContent)
