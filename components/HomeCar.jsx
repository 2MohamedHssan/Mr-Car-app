import React, { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners';
import Card from './Card'
import { NavLink } from 'react-router-dom';
function HomeCar({isHome}) {
  const [cars, setCars] = useState([])
  const [loding, setLoding] = useState(true)
  useEffect(() => {
    const carfetching = async () => {
      const api = isHome ? 'http://localhost:9000/Cars?_limit=4' : 'http://localhost:9000/Cars'
      try {
        const res = await fetch(api)
        const data = await res.json()
        setCars(data)
      } catch (error) {
        console.log('error')
      }
      finally {
        setLoding(null)
      }
    }
    carfetching()
  }, [])

  return (
    <div className='mx-3 md:mx-5 lg:mx-20'>
      <div className='text-center p-10 text-2xl lg:text-4xl font-bold'>CHOOSE YOUR DREAM CARS</div>
      {loding ? <CircleLoader cssOverride={{ display: 'block', margin: 'auto' }} size={150} /> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4'>
          {cars.map((car) => (
            <Card key={car.id} car={car} />
          )
      )}
        </div>
      }
      <div className='my-12'>
        {isHome && <NavLink to='/All-Car' className='bg-orange-500 block text-white px-8 md:w-1/3 m-auto text-center font-bold text-xl  rounded-md py-2'> View All</NavLink>}
      </div>
    </div>
  )
}

export default HomeCar