import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-black'>

      <img src="https://tools.expressdeliverygroup.com/assets/img/logo-tracking.png" className="max-h-10" />

      <ul className='hidden md:flex'>
        <li className='p-4 font-semibold'><a href='/'>Home</a></li>
        <li className='p-4 font-semibold'><a href='/pages/Dashboard'>Dashboard</a></li>
        <li className='p-4 font-semibold'><a href='/pages/Tracking'>Tracking</a></li>
        <li className='p-4 font-semibold'><a href='/pages/Tables'>Tables</a></li>
        <li className='p-4 font-semibold'><a href='/pages/Docs'>Docs</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[64%] h-full border-r border-r-gray-900 bg-stone-800 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img src="https://tools.expressdeliverygroup.com/assets/img/logo-tracking-reverse.png" className="max-h-10 mt-6 ml-2" />
        <ul className='pt-8 uppercase font-semibold text-white'>
          <li className='p-4 ml-2 border-b border-gray-300'><a href='/'>Home</a></li>
          <li className='p-4 ml-2 border-b border-gray-300'><a href='/pages/Dashboard'>Dashboard</a></li>
          <li className='p-4 ml-2 border-b border-gray-300'><a href='/pages/Tracking'>Tracking</a></li>
          <li className='p-4 ml-2 border-b border-gray-300'><a href='/pages/Tables'>Tables</a></li>
          <li className='p-4 ml-2'><a href='/pages/Docs'>Docs</a></li>          
        </ul>
      </div>
    </div>
  )
}

export default Navbar