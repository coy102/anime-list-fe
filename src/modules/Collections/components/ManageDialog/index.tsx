import { memo } from 'react'

import { Close } from '@mui/icons-material'
import { Alert, Box, Button, Dialog, IconButton, TextField, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'
import { isEmpty } from '~/utils/not-lodash'

import useCustom from './hooks'
import { DialogContentStyled, DialogTitleStyled } from './styled'

const ManageDialog = () => {
  const { data, store, methods } = useCustom()
  return (
    <Dialog
      fullWidth
      data-testid="manage-collection-dialog"
      maxWidth="xs"
      open={store.manageDialog.isOpen}
    >
      <DialogTitleStyled>
        <Box flexGrow={1}>
          <Typography data-testid="manage-collection-dialog-title" fontSize={fontSize[16]}>
            {store.manageDialog.collectionId ? 'Edit Collection' : 'Add Collection'}
          </Typography>
        </Box>
        <Box>
          <IconButton
            data-testid="manage-collection-dialog-close"
            size="small"
            onClick={methods.handleCloseAndReset}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitleStyled>
      <form onSubmit={methods.handleSave}>
        <DialogContentStyled>
          <TextField
            inputProps={{
              'data-testid': 'collection-input',
            }}
            sx={{
              my: 5,
            }}
            label="Collection Name"
            value={data.collectionName}
            variant="standard"
            onChange={methods.handleChangeInput}
          />

          {!isEmpty(data.error) && (
            <Alert data-testid="manage-collection-error-msg" severity="warning">
              {data.error}
            </Alert>
          )}

          <Button
            data-testid="manage-collection-dialog-save"
            sx={{ my: 5 }}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </DialogContentStyled>
      </form>
    </Dialog>
  )
}

export default memo(ManageDialog)
