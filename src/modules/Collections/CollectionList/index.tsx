import { memo } from 'react'

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'

import AlertDialog from '~/components/AlertDialog'
import CoverItem from '~/components/CoverItem'

import useCustom from './hooks'

const CollectionList = () => {
  const { store } = useCustom()
  return (
    <>
      <Box px={3}>
        <h3>My Collections</h3>

        {store.collections.map((item) => (
          <CoverItem
            renderAction={
              <Box py={3}>
                <IconButton size="small" onClick={store.handleToggleDeleteDialog(item.id)}>
                  <DeleteRoundedIcon />
                </IconButton>
              </Box>
            }
            coverImage={item?.items[0]?.cover || ''}
            imageHeight={50}
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
      </Box>
    </>
  )
}

export default memo(CollectionList)
