import { memo } from 'react'

import EditIcon from '@mui/icons-material/Edit'
import { Box, Grid, IconButton, Typography } from '@mui/material'

import AlertDialog from '~/components/AlertDialog'
import CoverCard from '~/components/CoverCard'

import ManageDialog from '../components/ManageDialog'

import useCustom from './hooks'

const CollectionDetail = () => {
  const { data, store } = useCustom()

  return (
    <>
      <Box px={3}>
        <Box display="flex" my={3}>
          <Typography flexGrow={1}>{data.collection?.name}</Typography>
          <IconButton size="small" onClick={() => store.handleToggleManageDialog(data.collection)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {data.collection?.items?.map((item, i) => (
          <Grid item data-test-id={`anime-card-${i}`} key={`card-${i}`} xs={6}>
            <CoverCard
              color={item?.color || ''}
              coverImage={item?.cover || ''}
              genres={item?.genres || []}
              handleClickRemoveButton={store.handleToggleDeleteAnimeDialog(item.id)}
              index={i}
              link={`/${item?.type?.toLowerCase()}/${item?.id}`}
              score={item?.score || 0}
              title={item?.title || ''}
            />
          </Grid>
        ))}
      </Grid>

      <AlertDialog
        message="
          Are you sure you want to delete this anime?"
        handleClikOk={store.handleDeleteCollectionItem(data.collection?.id || '')}
        handleToggle={store.handleToggleDeleteAnimeDialog(0)}
        isOpen={store.deleteAnimeDialog.isOpen}
      />

      <ManageDialog />
    </>
  )
}

export default memo(CollectionDetail)
