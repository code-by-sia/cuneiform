import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '@/services/setting'
import Button from '@/components/button'

export default function ToggleSidebarButton() {
  const dispatch = useDispatch()
  const toggleSideBar = useCallback(
    (_) => dispatch(toggleSidebar()),
    [dispatch, toggleSidebar]
  )

  return <Button className="icon" icon="ViewColumns" onClick={toggleSideBar} />
}
