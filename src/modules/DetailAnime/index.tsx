import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, Typography } from '@mui/material'

import CoverImage from '~/components/CoverImage'
import { fontSize } from '~/styles/theme'
import { formatTime } from '~/utils/date'
import { htmlClean } from '~/utils/html'
import { capitalize } from '~/utils/not-lodash'

import useCustom from './hooks'

const DetailAnime = () => {
  const { data } = useCustom()
  const { anime, loading } = data

  if (loading && !anime) return <span>loading...</span>

  return (
    <>
      <CoverImage
        color={anime?.coverImage?.color || ''}
        coverImage={anime?.bannerImage || ''}
        data-testid="banner-image"
        genres={anime?.genres || []}
        imageHeight={250}
        score={anime?.averageScore || 0}
        subTitleFontSize={fontSize[12]}
        subtitle={anime?.title?.english || ''}
        title={anime?.title?.romaji || ''}
        titleFontSize={fontSize[18]}
        totalGenre={10}
      />
      <Box p={2}>
        <Card sx={{ p: 2 }}>
          <Box alignItems="start" display="flex">
            <Typography flexGrow={1} fontWeight="bold">
              {capitalize(anime?.season)} {anime?.seasonYear}
            </Typography>

            <Button size="small" startIcon={<AddIcon />} sx={{ ml: 1 }} variant="outlined">
              Collection
            </Button>
          </Box>
        </Card>
      </Box>

      <Box p={2}>
        <Card sx={{ p: 2 }}>
          <Box alignItems="start" display="flex">
            <Typography flexGrow={1} fontSize={fontSize[12]}>
              {anime?.format} • {anime?.episodes} Ep • {formatTime(anime?.duration)}
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box p={2}>
        <Card sx={{ p: 2 }}>
          <Box display="flex" flexDirection="column">
            <Typography fontWeight="bold" py={2}>
              Synopsis
            </Typography>

            <Box fontSize={fontSize[14]} maxHeight={200} overflow="auto">
              {htmlClean(anime?.description)}
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default DetailAnime
