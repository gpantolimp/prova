import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
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
          path: "/pages/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/pages/tracking",
          element: <Tracking />,
        },
        {
          path: "/pages/tables",
          element: <Tables />,
        },
        {
          path: "/pages/docs",
          element: <Docs />,
        },
      ]
    },          
  ]);
    
  return (
    <div className="min-h-screen flex flex-col from-zinc-50 to-zinc-100 bg-edg-simbolo bg-no-repeat bg-center">
      <RouterProvider router={router} />
    </div>
  )
}


