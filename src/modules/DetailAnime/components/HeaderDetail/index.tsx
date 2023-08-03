import { memo } from 'react'

import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { fontSize } from '~/styles/theme'
import { formatTime } from '~/utils/date'
import { capitalize } from '~/utils/not-lodash'

interface Props {
  chapters: number
  duration: number
  episodes: number
  format: string
  season: string
  seasonYear: number
  volumes: number
}

const HeaderDetail = ({
  chapters,
  duration,
  episodes,
  format,
  season,
  seasonYear,
  volumes,
}: Props) => {
  return (
    <>
      <Box p={2}>
        <Card sx={{ p: 2 }}>
          <Box alignItems="center" display="flex">
            <Box display="flex" flexDirection="column" flexGrow={1}>
              {season && (
                <Typography fontWeight="bold">
                  {capitalize(season)} {seasonYear}
                </Typography>
              )}

              {format === 'ANIME' && (
                <Typography flexGrow={1} fontSize={fontSize[12]}>
                  {capitalize(format)} • {episodes} Ep • {formatTime(duration)}
                </Typography>
              )}

              {format === 'MANGA' && (
                <Typography flexGrow={1} fontSize={fontSize[12]}>
                  {capitalize(format)} • {chapters} Ch • {volumes} Vol.
                </Typography>
              )}
            </Box>

            <Button size="small" startIcon={<AddIcon />} sx={{ ml: 1 }} variant="outlined">
              Collection
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default memo(HeaderDetail)
