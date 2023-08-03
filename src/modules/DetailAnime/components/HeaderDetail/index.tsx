import { memo } from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, Typography, capitalize } from '@mui/material'

import { fontSize } from '~/styles/theme'
import { formatTime } from '~/utils/date'

interface Props {
  duration: number
  episodes: number
  format: string
  season: string
  seasonYear: number
}

const HeaderDetail = ({ season, seasonYear, format, episodes, duration }: Props) => {
  return (
    <>
      <Box p={2}>
        <Card sx={{ p: 2 }}>
          <Box alignItems="center" display="flex">
            <Box display="flex" flexDirection="column" flexGrow={1}>
              <Typography fontWeight="bold">
                {capitalize(season)} {seasonYear}
              </Typography>
              <Typography flexGrow={1} fontSize={fontSize[12]}>
                {format} • {episodes} Ep • {formatTime(duration)}
              </Typography>
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
