import { memo } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
  handleClikOk: () => void
  handleToggle: () => void
  isOpen: boolean
  message: string
}

const AlertDialog = ({ handleClikOk, handleToggle, isOpen, message }: Props) => {
  return (
    <>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        open={isOpen}
        onClose={handleToggle}
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleToggle}>
            Cancel
          </Button>
          <Button color="error" variant="contained" onClick={handleClikOk}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default memo(AlertDialog)
