import { memo } from 'react'

import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AnimeInfo = ({ coverImage, score }) => {
  return (
    <>
      <Box display="flex">
        <LazyLoadImage
          alt=""
          data-test-id={`anime-cover-image`}
          effect="blur"
          height={200}
          src={coverImage || ''}
          width={140}
        />
        <Box mx={4}>
          <Box display="inline">
            Score <Box>{score}</Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default memo(AnimeInfo)
