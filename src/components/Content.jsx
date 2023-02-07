import React from 'react'
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <div className=''>
        <div className='max-w-[1600px] mx-auto py-2 px-4'>
          <Outlet />
        </div>
    </div>
  )
}

export default Content