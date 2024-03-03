import Logo from '@/components/logo'

import { useSelector } from 'react-redux'
import classNames from 'classnames'
import Icon from '@/components/icon'

import './side-bar.scss'

export default function SideBar({ children }) {
  const isSideBarOpen = useSelector((state) => state.setting.sidebar.open)

  return (
    <aside className={classNames('side-bar', { open: isSideBarOpen })}>
      <header className="header main">
        <Logo />
        <Icon name="MagnifyingGlass" />
      </header>
      {children}
    </aside>
  )
}
