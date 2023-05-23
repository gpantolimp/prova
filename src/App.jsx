import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tracking from './pages/Tracking'
import Tables from './pages/Tables'
import Docs from './pages/Docs'
import Root from './pages/Root'


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "main_page",
          element: <Dashboard />,
        },
        {
          path: "tracking",
          element: <Tracking />,
        },
        {
          path: "tables",
          element: <Tables />,
        },
        {
          path: "docs",
          element: <Docs />,
        },
      ]
    },          
  ]);
    
  return (
    <div className="min-h-screen flex flex-col from-zinc-50 to-zinc-100 nuova-classe-da-main">
      <RouterProvider router={router} />
    </div>
  )
}


