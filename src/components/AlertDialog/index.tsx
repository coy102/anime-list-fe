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
      <Dialog fullWidth data-testid="alert-dialog" maxWidth="xs" open={isOpen}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText data-testid="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button data-testid="alert-cancel-btn" size="small" onClick={handleToggle}>
            Cancel
          </Button>
          <Button
            color="error"
            data-testid="alert-ok-btn"
            variant="contained"
            onClick={handleClikOk}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default memo(AlertDialog)
