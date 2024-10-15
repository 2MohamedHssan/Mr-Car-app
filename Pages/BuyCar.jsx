import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'
import { useState } from "react";



const CarLoder = async ({params} ) => {
  const res = await fetch(`http://localhost:9000/Cars/${params.id}`)
  const data = await res.json()
  return data
}
function BuyCar({deleting}) {
  const { id } = useParams()
  const naviget = useNavigate()
  const [show, setshow] = useState(true)
  const cars = useLoaderData()
  const desc = show ? cars.descreption.slice(0, 50) + '...' : cars.descreption
  const onDeleate = (id) => {
    const message = window.confirm('Are You Sue To Delete This Car')
    if (!message) return
    deleting(id)
    naviget('/All-Car')
  }  
  return (
    <div>
      <section>
        <div className="container m-auto py-6 px-6">
          <NavLink
          to="/"
          className="text-[#ffa500] hover:text-[#a56c00ec] flex items-center"
          >
          <FaArrowLeft className="mr-2"/> Back to Job Listings
          </NavLink>
        </div>
      </section>  
      <section>
        <div className=" py-10 px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-4 rounded-lg shadow-md border border-[#ffa500] text-center md:text-left">
                <div className="text-gray-500 mb-4">
                  <img src={`../${cars.src}`} className="max-h-96 w-full" alt="Cant Get Image " />
                </div>
                <h1 className="text-3xl font-bold mb-4"> {cars.model} </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <FaMapMarker className="text-orange-700 mr-1 "/>
                  <p className="text-orange-700">{cars.location}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-[#ffa500]">
                <h3 className="text-[#ffa500] text-lg font-bold mb-6">
                  Car Description
                </h3>

                <p >{desc}</p>
                <button className="mb-2 text-red-500" onClick={()=>setshow(e=> !e)}>{ show ? 'More' : 'Less'}</button>

                <h3 className="text-[#ffa500] text-lg font-bold mb-2">Price</h3>

                <p className="mb-4">{cars.price}</p>
              </div>
            </main>
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffa500]">
                <h3 className="text-xl font-bold mb-6">
                <div className='flex gap-2 '>
                  <FaStar id='star' color='gold' size={20}/>
                  <FaStar id='star' color='gold' size={20}/>
                  <FaStar id='star' color={cars.fsc3} size={20}/>
                  <FaStar id='star' color={cars.fsc4} size={20}/>
                  <FaStar id='star' color={cars.fsc5} size={20}/>
              </div>
                </h3>

                <h2 className="text-2xl font-bold">{cars.name}</h2>

                  <p className="my-2">{cars.year}</p>

                <hr className="my-4" />

                <h3 className="text-xl">User Name:</h3>

                <p className="my-2 bg-orange-200 p-2 font-bold">{cars.userName}</p>
                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-orange-200 p-2 font-bold">{cars.mail}</p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-orange-200 p-2 font-bold">{cars.phone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Car</h3>
                <NavLink to={`/Car-edit/${cars.id}`}
                  className="bg-yellow-400 hover:opacity-85 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >Edit Car</NavLink>
                <button 
                  onClick={()=>onDeleate(cars.id)}
                  className="bg-red-500 hover:opacity-85 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Car
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export { BuyCar as default, CarLoder} 