import { memo } from 'react'

import { Close } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import { Box, Dialog, IconButton, Typography } from '@mui/material'

import CoverItem from '~/components/CoverItem'
import { colors, fontSize } from '~/styles/theme'

import useCustom from './hooks'
import { DialogContentStyled, DialogTitleStyled } from './styled'

const CollectionDialog = () => {
  const { store, methods } = useCustom()
  return (
    <Dialog fullWidth maxWidth="xs" open={store.selectionDialog.isOpen}>
      <DialogTitleStyled>
        <Box flexGrow={1}>
          <Typography color={colors.primary[100]} fontSize={fontSize[16]}>
            {store.selectionDialog.anime?.title}
          </Typography>
        </Box>
        <Box>
          <IconButton size="small" onClick={() => store.handleToggleSelectionDialog(null)}>
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitleStyled>
      <DialogContentStyled>
        <Box display="flex" mb={2}>
          <Typography flexGrow={1} fontSize={fontSize[14]}>
            Add to Collection
          </Typography>
        </Box>

        <Box>
          {store.collections.map((item) => (
            <CoverItem
              renderAction={
                <Box>
                  {!store.validateItemUniqueName(item.id) ? (
                    <DoneIcon />
                  ) : (
                    <IconButton size="small" onClick={methods.handleClickAddToCollection(item.id)}>
                      <AddIcon />
                    </IconButton>
                  )}
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
        </Box>
      </DialogContentStyled>
    </Dialog>
  )
}

export default memo(CollectionDialog)
