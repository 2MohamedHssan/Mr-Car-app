import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-700 pt-8'>
      <h1 className='mx-20 text-center md:text-start text-4xl text-white font-bold'>MRCAR<span className='text-[#ffa500]'>.</span></h1>
      <footer className=' grid gap-10 grid-cols-1 lg:grid-cols-3 text-white px-4 lg:px-20 pt-10 pb-20'>
        <div>
          <h1 className='text-2xl font-bold mb-4'>About Us</h1>
          <p>We Are Creative Agency , Building Awosme Web Application ☺ More than 2 years of Expriance in web Front-End and More Than +10 project Created </p>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-bold  mb-4'>Branch Location </h1>
          <address> New Cairo, Cairo, Egypt</address>
          <address>Beni Mazar, Minya, Egypt</address>
          <address>You Can find Us online Any Time</address>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold mb-4'>Follow Us </h1>
          <div className='flex flex-col gap-3 font-bold'>
            <a className='hover:underline hover:text-blue-500'  href="https://www.facebook.com/mohamed" target='_blank'> Facebook</a>
            <a className='hover:underline hover:text-blue-400' href="linkedin.com/in/mohamed-hassan-9330a4234" target='_blank'> LinkedIn</a>
            <a className='hover:underline hover:text-[#000]' href="https://github.com/2MohamedHssan" target='_blank'> GitHub</a>
            <a className='hover:underline hover:text-green-400' href="https://www.upwork.com/freelancers/~01d179aa2d0841ae27?mp_source=share" target='_blank'> Upwork</a>
       </div>
        </div>
      </footer>
        <div className='bg-gray-800 text-white text-xl font-bold w-full text-center'>Copyright &copy; 2024</div>
    </div>
  )
}

export default Footer