import React from 'react'
import { Outlet } from 'react-router-dom'
import './files.scss'

export default function FilesPage() {
  return (
    <div className="files-page">
      <Outlet />
    </div>
  )
}
