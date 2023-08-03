import { memo } from 'react'

import { Close } from '@mui/icons-material'
import {
  Box,
  Dialog,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { colors, fontSize } from '~/styles/theme'
import { isEmpty } from '~/utils/not-lodash'

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
        <Box display="flex">
          <Typography flexGrow={1} fontSize={fontSize[14]}>
            Add to Collection
          </Typography>
        </Box>

        <Box>
          <List>
            {store.collections.map((item) => (
              <ListItemButton key={item.id} onClick={methods.handleClickAddToCollection(item.id)}>
                <ListItemIcon>
                  {!isEmpty(item?.items[0]?.cover) && (
                    <LazyLoadImage
                      alt=""
                      effect="blur"
                      height={30}
                      src={item.items[0].cover}
                      width={30}
                    />
                  )}

                  {isEmpty(item.items[0]?.cover) && (
                    <Box bgcolor={colors.primary[100]} height={30} width={30} />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </DialogContentStyled>
    </Dialog>
  )
}

export default memo(CollectionDialog)
