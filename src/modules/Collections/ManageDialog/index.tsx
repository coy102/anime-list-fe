import { memo } from 'react'

import { Close } from '@mui/icons-material'
import { Alert, Box, Button, Dialog, IconButton, TextField, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'

import useCustom from './hooks'
import { DialogContentStyled, DialogTitleStyled } from './styled'

const ManageDialog = () => {
  const { data, store, methods } = useCustom()
  return (
    <Dialog fullWidth maxWidth="xs" open={store.manageDialog.isOpen}>
      <DialogTitleStyled>
        <Box flexGrow={1}>
          <Typography fontSize={fontSize[16]}>
            {store.manageDialog.collectionId ? 'Edit Collection' : 'Add Collection'}
          </Typography>
        </Box>
        <Box>
          <IconButton size="small" onClick={methods.handleCloseAndReset}>
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitleStyled>
      <form onSubmit={methods.handleSave}>
        <DialogContentStyled>
          <TextField
            sx={{
              my: 5,
            }}
            label="Collection Name"
            value={data.collectionName}
            variant="standard"
            onChange={methods.handleChangeInput}
          />

          {data.error && <Alert severity="warning">{data.error}</Alert>}

          <Button sx={{ my: 5 }} type="submit" variant="contained">
            Save
          </Button>
        </DialogContentStyled>
      </form>
    </Dialog>
  )
}

export default memo(ManageDialog)
