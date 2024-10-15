import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [clas, setClas] = useState(false)
  const openmeune = () => {
    setClas(!clas)
  }
  
  const thecalss = clas ? 'munue' : 'munueclas'
  return (
    <div className='flex justify-between z-50 items-center sticky top-0  px-2 lg:px-20 py-4 bg-black text-white '>
      <a href="/" className='text-3xl font-bold'>MRCAR<span className='text-[#ffa500]'>.</span></a >
      <div className='sm:flex justify-between hidden w-52'>
        <NavLink className='py-2 px-2' to='/'>Home</NavLink>
        <NavLink className='py-2 px-2' to='/All-Car'>All Car</NavLink>
        <NavLink className='py-2 px-2' to='/add-car'>Add Car</NavLink>
      </div>
      <div className={`cursor-pointer sm:hidden ${thecalss}`} onClick={openmeune}>
        <span className='w-10 h-1 bg-white rounded-md block'></span>
        <span className='w-10 h-1 bg-white rounded-md block my-[5px]'></span>
        <span className='w-10 h-1 bg-white rounded-md block'></span>
      </div>
      {clas && <ul className='sm:hidden'>
        <li>
          <Link onClick={()=>setClas(false)} className='w-full block p-2 hover:text-[#ffa500]' to='/'>Home</Link>
        </li>
        <li>
          <Link onClick={()=>setClas(false)} className='w-full block p-2 hover:text-[#ffa500]' to='/add-car'>Add Car</Link>
        </li>
        <li>
          <Link onClick={()=>setClas(false)} className='w-full block p-2 hover:text-[#ffa500]' to='/All-Car'>All Car</Link>
        </li>
        </ul>}
    </div>
  )
}

export default Navbar