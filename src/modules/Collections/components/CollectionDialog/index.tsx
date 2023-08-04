import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Close } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import { Box, Button, Dialog, IconButton, Typography } from '@mui/material'

import CoverItem from '~/components/CoverItem'
import { fontSize } from '~/styles/theme'

import ManageDialog from '../ManageDialog'

import useCustom from './hooks'
import { DialogContentStyled, DialogTitleStyled } from './styled'

const CollectionDialog = () => {
  const { store, methods } = useCustom()
  return (
    <>
      <Dialog
        fullWidth
        data-testid="collection-dialog"
        maxWidth="xs"
        open={store.selectionDialog.isOpen}
      >
        <DialogTitleStyled>
          <Box flexGrow={1}>
            <Typography data-testid="collection-dialog-title" fontSize={fontSize[16]}>
              {store.selectionDialog.anime?.title}
            </Typography>
          </Box>
          <Box>
            <IconButton
              data-testid="collection-dialog-close-button"
              size="small"
              onClick={() => store.handleToggleSelectionDialog(null)}
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>
        </DialogTitleStyled>
        <DialogContentStyled>
          <Box alignItems="center" display="flex" mb={2}>
            <Typography flexGrow={1} fontSize={fontSize[14]}>
              Add to Collection
            </Typography>
            <Button
              color="secondary"
              data-testid="collection-dialog-new-button"
              size="small"
              variant="contained"
              onClick={() => store.handleToggleManageDialog()}
            >
              New collection
            </Button>
          </Box>

          <Box
            className="responsive-scroll"
            data-testid="collection-list-wrapper"
            height={300}
            overflow="auto"
          >
            {store.collections.map((item) => (
              <CoverItem
                renderAction={
                  <Box>
                    {!store.validateItemUniqueName(item.id) ? (
                      <DoneIcon color="success" />
                    ) : (
                      <IconButton
                        size="small"
                        onClick={methods.handleClickAddToCollection(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    )}
                  </Box>
                }
                coverImage={item?.items[0]?.cover || ''}
                imageHeight={50}
                imageWidth={50}
                key={item.id}
                link={`/collections/${item.id}`}
                subTitle={`${item?.items?.length} collections`}
                title={item.name}
              />
            ))}
          </Box>
          <Box textAlign="center">
            <Link className="link" to="/collections">
              View collections...
            </Link>
          </Box>
        </DialogContentStyled>
      </Dialog>
      <ManageDialog />
    </>
  )
}

export default memo(CollectionDialog)
