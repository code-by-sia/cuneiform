import React, { lazy } from 'react'
import NotFoundPage from './pages/error/404'

import HomePage from '@/pages/home'
const DashboardPage = lazy(() => import('@/pages/dashboard'))

const FilesPage = lazy(() => import('@/pages/files'))
const FilesMenuPage = lazy(() => import('@/pages/files/menu'))
const CreateNewFilePage = lazy(() => import('@/pages/files/new-file'))
const UploadFilePage = lazy(() => import('@/pages/files/upload-file'))
const FileEditorPage = lazy(() => import('@/pages/files/editor'))

const CalendarPage = lazy(() => import('@/pages/calendar'))

const ConfigurationPage = lazy(() => import('@/pages/configuration'))

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <DashboardPage /> },
      {
        path: '/files',
        element: <FilesPage />,
        children: [
          { path: '/files', element: <FilesMenuPage /> },
          { path: '/files/create', element: <CreateNewFilePage /> },
          { path: '/files/upload', element: <UploadFilePage /> },
          { path: '/files/:id', element: <FileEditorPage /> },
        ],
      },
      { path: '/calendar', element: <CalendarPage /> },
    ],
  },

  { path: '/configuration', element: <ConfigurationPage /> },
]
