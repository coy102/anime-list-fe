import { useCallback } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useSnackbar as useSnackbarIo, VariantType } from 'notistack'

import { AUTOHIDE_DURATION_SNACKBAR } from '~/config/constants'

const useNotistack = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbarIo()

  const openSnackbar = useCallback(
    (message: string, variant: VariantType = 'default', id = '') => {
      enqueueSnackbar(message, {
        action: (
          <IconButton size="small" onClick={() => closeSnackbar()}>
            <CloseIcon />
          </IconButton>
        ),
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        autoHideDuration: AUTOHIDE_DURATION_SNACKBAR,
        id,
        preventDuplicate: true,
        variant,
      })
    },
    [closeSnackbar, enqueueSnackbar],
  )

  return {
    openSnackbar,
  }
}

export default useNotistack
