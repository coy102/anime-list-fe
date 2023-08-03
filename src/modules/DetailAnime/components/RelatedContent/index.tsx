import { memo } from 'react'

import Box from '@mui/material/Box'

import CoverItem from '~/components/CoverItem'

import { ScrollContainerStyled } from './style'

interface Props {
  relations: any
}

const RelatedContent = ({ relations }: Props) => (
  <>
    <Box fontWeight="bold" mt={2} px={2}>
      Related
    </Box>
    <ScrollContainerStyled className="responsive-scroll">
      <Box display="flex" p={2}>
        {relations?.map((r, i) => (
          <CoverItem
            coverImage={r?.node?.coverImage?.medium || ''}
            key={`cover-item-${i}`}
            link={`/anime/${r?.id}`}
            relationType={r?.relationType || ''}
            title={r?.node?.title?.romaji || ''}
          />
        ))}
      </Box>
    </ScrollContainerStyled>
  </>
)

export default memo(RelatedContent)
