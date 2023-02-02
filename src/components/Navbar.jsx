import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#EE0000]'>TRACKING</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-semibold'>Dashboard</li>
        <li className='p-4 font-semibold'>Tracking</li>
        <li className='p-4 font-semibold'>Tables</li>
        <li className='p-4 font-semibold'>Docs</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[64%] h-full border-r border-r-gray-900 bg-stone-800 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#EE0000] m-4 mt-8'>TRACKING</h1>
        <ul className='pt-8 uppercase font-semibold text-white'>
          <li className='p-4 ml-2 border-b border-gray-300'>Dashboard</li>
          <li className='p-4 ml-2 border-b border-gray-300'>Tracking</li>
          <li className='p-4 ml-2 border-b border-gray-300'>Tables</li>
          <li className='p-4 ml-2'>Docs</li>          
        </ul>
      </div>
    </div>
  )
}

export default Navbar