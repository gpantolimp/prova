import React from 'react'

function Footer() {
  return (
    <div className="sticky top-[100vh] bg-stone-800 border-t">
        <div className='max-w-[1600px] mx-auto py-1 px-4 text-gray-300'>
          <div class="grid grid-cols-2 gap-4 ">
            <div>
              <h1 className='w-full text-1xl font-bold text-cyan-600'>Express Delivery srl</h1>
              <p className='text-sm'>All rights reserved.</p>
            </div>
            <div className=' text-end pt-2'>
              <p className='py-0 text-yellow-500 text-sm'>Edg Tracking version 1.0.0.1</p>
              <p className='py-0 text-xs uppercase'>Last update February 2023</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer