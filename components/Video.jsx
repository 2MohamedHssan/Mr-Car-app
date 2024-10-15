import React from 'react'
import video from '../../public/hom.mp4'
import { NavLink } from 'react-router-dom'
function Video() {
  return (
    <div>
      <video className=' w-full h-[100vh] object-cover' src={video} autoPlay loop muted></video>
      <div className='absolute top-1/2 -translate-x-1/2 w-full text-white text-center left-1/2 -translate-y-50'>
        <h1 className=' uppercase font-bold text-5xl min-w-[400px] lg:text-6xl text-balance'>find your car</h1>
        <p className='lg:text-xl my-4 capitalize font-bold'>dicover new places with cairo, adventure awaits</p>
        <button className='bg-[#ffa500] border border-[#ffa500] hover:text-[#ffa500] transition-all hover:bg-[#ffa6001a] px-5 py-2'>
          <NavLink to='/All-Car'>Discover More</NavLink></button>
        <div className='flex justify-center mt-14'>
          <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-[#0000009f]'>
            <p className='bg-[#ffa500] w-4 h-4 rounded-full'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video