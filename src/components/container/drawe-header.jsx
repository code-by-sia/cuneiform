import Icon from '@/components/icon'
import './drawer-header.scss'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '@/services/setting'

export default function DrawerHeader({ children }) {
  const dispatch = useDispatch()
  const toggleSideBar = useCallback(
    (_) => dispatch(toggleSidebar()),
    [dispatch, toggleSidebar]
  )

  return (
    <div className="drawer-header">
      <Icon name="ViewColumns" onClick={toggleSideBar} />
      {children}
    </div>
  )
}
