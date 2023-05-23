import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tracking from './pages/Tracking'
import Tables from './pages/Tables'
import Docs from './pages/Docs'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
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
		{
          path: "trackingnew",
          element: <Tracking />,
        },
      ]
    },          
  ]);
    
  return (
    <div className="min-h-screen flex flex-col from-zinc-50 to-zinc-100 classe-da-app">
      <RouterProvider router={router} />
    </div>
  )
}


