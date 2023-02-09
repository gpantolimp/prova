import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

function Navbar() {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-20 max-w-[1600px] mx-auto px-4 text-white'>

      <img src="https://tools.expressdeliverygroup.com/assets/img/logo-tracking-reverse.png" className="max-h-8" />

      <ul className='hidden md:flex'>
        <li className='my-nav-x'><Link to={'/'}>Home</Link></li>
        <li className='my-nav-x'><Link to={'dashboard'}>Dashboard</Link></li>
        <li className='my-nav-x'><Link to={'tracking'}>Tracking</Link></li>
        <li className='my-nav-x'><Link to={'tables'}>Tables</Link></li>
        <li className='my-nav-x'><Link to={'docs'}>Docs</Link></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[64%] h-full border-r border-r-gray-900 bg-stone-800 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img src="https://tools.expressdeliverygroup.com/assets/img/logo-tracking-reverse.png" className="max-h-10 mt-6 ml-2" />
        <ul className='pt-8 uppercase font-semibold text-white'>
          <li className='my-nav-y'><Link to={'/'}>Home</Link></li>
          <li className='my-nav-y'><Link to={'dashboard'}>Dashboard</Link></li>
          <li className='my-nav-y'><Link to={'tracking'}>Tracking</Link></li>
          <li className='my-nav-y'><Link to={'tables'}>Tables</Link></li>
          <li className='my-nav-y'><Link to={'docs'}>Docs</Link></li>          
        </ul>
      </div>
    </div>
  )
}

export default Navbar