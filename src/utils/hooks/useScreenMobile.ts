import { useMediaQuery } from '@mui/material'

import theme from '~/styles/theme'

const useScreenMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return isMobile
}

export default useScreenMobile
