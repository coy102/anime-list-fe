import { memo } from 'react'

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import EditIcon from '@mui/icons-material/Edit'
import { Button, IconButton, Typography } from '@mui/material'
import Box from '@mui/material/Box'

import AlertDialog from '~/components/AlertDialog'
import CoverItem from '~/components/CoverItem'

import ManageDialog from '../components/ManageDialog'

import useCustom from './hooks'

const CollectionList = () => {
  const { store } = useCustom()
  return (
    <>
      <Box px={3}>
        <Box display="flex" my={3}>
          <Typography flexGrow={1}>My Collections</Typography>
          <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => store.handleToggleManageDialog()}
          >
            New collection
          </Button>
        </Box>

        {store.collections.map((item) => (
          <CoverItem
            renderAction={
              <Box py={3}>
                <IconButton size="small" onClick={() => store.handleToggleManageDialog(item)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={store.handleToggleDeleteDialog(item.id)}>
                  <DeleteRoundedIcon color="error" fontSize="small" />
                </IconButton>
              </Box>
            }
            coverImage={item?.items[0]?.cover || ''}
            imageHeight={80}
            imageWidth={50}
            key={item.id}
            link={`/collection/${item.id}`}
            subTitle={`${item?.items?.length} collections`}
            title={item.name}
          />
        ))}

        <AlertDialog
          message="
          Are you sure you want to delete this collection? everything inside will be lost"
          handleClikOk={store.handleDeleteCollection}
          handleToggle={store.handleToggleDeleteDialog()}
          isOpen={store.deleteDialog.isOpen}
        />

        <ManageDialog />
      </Box>
    </>
  )
}

export default memo(CollectionList)
