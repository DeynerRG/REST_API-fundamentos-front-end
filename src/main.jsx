import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout'
import { ContextAppProvider } from './Context/ContextApp'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contacto',
        element: <Contacto />
      }
    ]


  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAppProvider>
      <RouterProvider router={ router } />
    </ContextAppProvider>
  </React.StrictMode>,
)
