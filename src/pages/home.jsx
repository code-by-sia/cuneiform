import Button from '@/components/button'
import LoadingView from '@/components/loading-view'
import { TreeNav } from '@/components/nav'
import SideBar from '@/components/side-bar'
import Spacer from '@/components/spacer'
import useMainMenu from '@/pages/menu'
import moment from 'moment'
import 'moment/locale/de'
import React, { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import './home.scss'

moment.locale('de')

function MainSideBarFooter() {
  return (
    <footer className="main-sidebar-footer">
      <Link to="/configuration">
        <Button className="icon" label="Sync Preferences" icon="Cog8Tooth" />
      </Link>
    </footer>
  )
}

export default function HomePage() {
  const { pathname } = useLocation()
  const mainMenu = useMainMenu()

  return (
    <div className="page home">
      <SideBar>
        <TreeNav
          title="Menu"
          value={pathname}
          items={mainMenu}
          openByDefault={true}
        />
        <Spacer />
        <MainSideBarFooter />
      </SideBar>
      <div className="outlet">
        <Suspense fallback={<LoadingView />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
