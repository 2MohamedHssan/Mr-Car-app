import React from 'react'
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function Card({ car }) {
  const modelcut = car.model.slice(0,30) + '...'
  return (
    <div>
      <div className='relative shadow-lg shadow-slate-300 h-[310px] rounded-md overflow-hidden border p-2 border-[#ffa500]'>
        <div className='h-[50%]'>
        <img src={car.src} alt="" className='w-full h-full' />
        </div>
        <div className=' py-4'>
          <div className='flex justify-center gap-4 '>
            <FaStar id='star' color='gold' size={20}/>
            <FaStar id='star' color='gold' size={20}/>
            <FaStar id='star' color={car.fsc3} size={20}/>
            <FaStar id='star' color={car.fsc4} size={20}/>
            <FaStar id='star' color={car.fsc5} size={20}/>
          </div>
          <div className='text-[#666] mt-2 text-md min-w-[250px]'>{modelcut}</div>
          <div className='flex items-center my-2 gap-3'>
            <p className='text-sm'>{car.price}</p>
            <p className=' line-through text-sm opacity-75'>{car.oldprice}</p>
          </div>
            <NavLink to={`/car/${car.id}`}>
          <button className='bg-[#ffa500] absolute bottom-3 border text-white rounded-sm border-[#ffa500] hover:text-[#ffa500] transition-all hover:bg-[#ffa60048] px-4 py-1'>
            More</button>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card