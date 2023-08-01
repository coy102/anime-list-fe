import { memo } from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import { useRegisterSW } from 'virtual:pwa-register/react'

const ReloadPrompt = () => {
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__'

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error: any) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error)
    },
    onRegisteredSW(swUrl: any, r: any) {
      // eslint-disable-next-line no-console
      console.log(`Service Worker at: ${swUrl}`)
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            r.update()
          }, 20000 /* 20s for testing purposes */)
      } else {
        // eslint-disable-next-line prefer-template,no-console
        console.log('SW Registered: ' + r)
      }
    },
  })

  const close = () => {
    setNeedRefresh(false)
  }

  return (
    <>
      <Dialog
        disableEscapeKeyDown
        aria-describedby="update-app-dialog-description"
        aria-labelledby="update-app-dialog-title"
        open={needRefresh}
      >
        <DialogTitle>Update Application</DialogTitle>
        <DialogContent>
          <DialogContentText id="update-app-dialog-description">
            There is a new version available. Do you want to reload page to update?
            <br />
            If you choose Update Later, the application will automatically update if you close the
            window.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close()}>Update Later</Button>
          <Button color="primary" variant="contained" onClick={() => updateServiceWorker(true)}>
            Update Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default memo(ReloadPrompt)
