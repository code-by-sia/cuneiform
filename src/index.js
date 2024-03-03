import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoadingView from '@/components/loading-view'
import { routes } from './routes'
import { store } from './store'

import './index.scss'

const router = createBrowserRouter(routes)
const root = document.getElementById('app')

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <Suspense fallback={<LoadingView />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
