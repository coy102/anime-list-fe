import { memo } from 'react'

import { Box, Card, Grid, capitalize } from '@mui/material'

import InfoText from '~/components/InfoText'
import { FuzzyDate } from '~/gqlcodegen/types'
import { formatFriendlyDate } from '~/utils/date'

interface Props {
  endDate: FuzzyDate
  source: string
  startDate: FuzzyDate
  studios: any
}

const DetailInfo = ({ endDate, startDate, source, studios }: Props) => {
  const formatStartDate = `${startDate?.year}-${startDate?.month}-${startDate?.day}`
  const formatEndDate = `${endDate?.year}-${endDate?.month}-${endDate?.day}`
  const studio = studios?.edges?.find((f) => f?.isMain)?.node?.name || ''

  return (
    <Box p={2}>
      <Card sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InfoText label="Start Date" value={formatFriendlyDate(formatStartDate)} />
          </Grid>
          <Grid item xs={6}>
            <InfoText label="End Date" value={formatFriendlyDate(formatEndDate)} />
          </Grid>
          <Grid item xs={6}>
            <InfoText label="Studio" value={studio} />
          </Grid>
          <Grid item xs={6}>
            <InfoText label="Source" value={capitalize(source)} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default memo(DetailInfo)
