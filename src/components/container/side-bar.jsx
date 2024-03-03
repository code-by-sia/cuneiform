import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import List from '@/components/list'
import DrawerHeader from '@/components/container/drawe-header'

import './side-bar-list.scss'
import Header from '@/components/header'

export function SideBarListPage({
  title,
  className,
  items,
  view,
  children,
  ...rest
}) {
  return (
    <>
      <div className={classNames(className, 'side-bar-list-page')}>
        <Header title={title}></Header>
        <List
          className="side-bar-list"
          items={items}
          view={view}
          title={<DrawerHeader>{children}</DrawerHeader>}
          {...rest}
        />
      </div>
      <Outlet />
    </>
  )
}
