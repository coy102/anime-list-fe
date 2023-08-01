import { Grid } from '@mui/material'
import LazyLoad from 'react-lazyload'
import { Waypoint } from 'react-waypoint'

import CoverCard from '~/components/CoverCard'
import CoverSkeleton from '~/components/CoverSkeleton'
import Loading from '~/components/Loading'

import useCustom from './hooks'

const BrowseAnime = () => {
  const {
    data: { anime, loading },
    methods,
  } = useCustom()

  return (
    <>
      <Grid container spacing={5}>
        {anime?.items?.map((item, i) => (
          <Grid item data-test-id={`anime-card-${i}`} key={`card-${i}`} xs={6}>
            <LazyLoad debounce={300} placeholder={<CoverSkeleton />}>
              <CoverCard
                color={item?.coverImage?.color || ''}
                coverImage={item?.coverImage?.large || ''}
                genres={item?.genres || []}
                index={i}
                title={item?.title?.romaji || ''}
              />
              {i === (anime?.items?.length || 0) - 1 && (
                <Waypoint bottomOffset={0} onEnter={methods.handeLoadMore} />
              )}
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
      <Loading loading={loading} />
    </>
  )
}

export default BrowseAnime
