import { memo } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import InfoText from '~/components/InfoText'
import { FuzzyDate } from '~/gqlcodegen/types'
import { formatFriendlyDate } from '~/utils/date'
import { capitalize } from '~/utils/not-lodash'

interface Props {
  coverImage: string
  endDate: FuzzyDate
  source: string
  startDate: FuzzyDate
  studios: any
}

const DetailInfo = ({ coverImage, endDate, startDate, source, studios }: Props) => {
  const formatStartDate = `${startDate?.year}-${startDate?.month}-${startDate?.day}`
  const formatEndDate = `${endDate?.year}-${endDate?.month}-${endDate?.day}`
  const studio = studios?.edges?.find((f) => f?.isMain)?.node?.name || ''

  return (
    <Box p={2}>
      <Card data-testid="media-info-wrapper">
        <Box display="flex" p={2}>
          <Box pr={5}>
            <LazyLoadImage
              alt=""
              data-testid="media-info-src"
              effect="blur"
              height={120}
              src={coverImage || ''}
              width={80}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InfoText
                data-testid="media-info-start-date"
                label="Start Date"
                value={formatFriendlyDate(formatStartDate)}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoText
                data-testid="media-info-end-date"
                label="End Date"
                value={endDate?.year ? formatFriendlyDate(formatEndDate) : '-'}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoText
                data-testid="media-info-studio"
                label="Studio"
                value={capitalize(studio) || '-'}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoText data-testid="media-info-source" label="Source" value={capitalize(source)} />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  )
}

export default memo(DetailInfo)
