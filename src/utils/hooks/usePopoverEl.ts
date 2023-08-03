import { useState, useCallback, useMemo } from 'react'

const usePopoverEl = (ElementID) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClickOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClickClosePopover = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const openPopover = useMemo(() => Boolean(anchorEl), [anchorEl])
  const popoverId = useMemo(() => (openPopover ? ElementID : undefined), [ElementID, openPopover])

  return {
    anchorEl,
    handleClickClosePopover,
    handleClickOpenPopover,
    openPopover,
    popoverId: popoverId || undefined,
  }
}

export default usePopoverEl
