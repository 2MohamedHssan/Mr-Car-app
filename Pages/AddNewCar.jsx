import React, { useState } from 'react'
import { useLoaderData, useNavigate, NavLink } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import LodImge from '../components/LodImge'

function AddNewCar({ AddCar }) {
   const [selectfile, setSelectfile] = useState(null)
  const [imageUrl, setimageUrl] = useState('')
  const fileSelcethandler = e => {
    const file = e.target.files[0]
    setSelectfile(file)
    setimageUrl(URL.createObjectURL(file))
  }
  const imgesrc = selectfile ? selectfile.name : ''
  const naviget = useNavigate()
  const [name, setName] = useState("")
  const [userName, setUsername] = useState('')
  const [model, setModel] = useState('')
  const [src,setSrc] =useState('')
  const [price,setPrice] =useState('')
  const [oldprice,setOldprice] =useState('')
  const [mail,setMail] =useState('')
  const [phone,setPhone] =useState('')
  const [year,setYear] =useState('')
  const [location,setLocation] =useState('')
  const [descreption, setDescreption] = useState('')

  const updateCar = (e) => {
    e.preventDefault()
    const newCar = {
      name,
      src:imgesrc,
      price,
      model,
      oldprice,
      userName,
      mail,
      phone,
      year,
      location,
      descreption
    }
    AddCar(newCar)
    naviget(`/All-Car`)
  }
  const arryear = []
  for(let i = 1990; i <= 2024; i++) {arryear.push(i)}
  return (
    <div>
       <section>
        <div className="lg:px-20 px-6 py-4">
          <NavLink
          to='/'
          className="text-[#ffa500] hover:text-[#a56c00ec] flex items-center"
          >
          <FaArrowLeft className="mr-2"/> Back to Job Listings
          </NavLink>
        </div>
      </section>  
        <div className="lg:px-20 px-2 py-4">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border border-[#ffa500] m-4 md:m-0">
            <form onSubmit={updateCar}>
              <h2 className="text-3xl text-center font-semibold mb-6">Add Your Car</h2>
              <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='location'> Car View</label>
              <div className='border rounded w-full py-2 px-3 mb-2'>
                <LodImge src={src} fileSelcethandler={fileSelcethandler} imageUrl={imageUrl} />
              </div>
            </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> Car Name</label>
              <select
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={name}
                  onChange={(e)=> setName(e.target.value)}>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                  <option value="Ford">Ford</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Volvo">Volvo</option>
                  <option value="Toyota">Toyota</option>
                  <option value="kia">kia</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Honda">Honda</option>
                  <option value="Rang Rover">Rang Rover</option>
                  <option value="Land Rover">Land Rover</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="marke" className="block text-gray-700 font-bold mb-2"> Car Marke</label>
                <select
                  id="marke"
                  name="marke"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={name}
                  onChange={(e)=> setName(e.target.value)}>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Crossover">Crossover</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Wagon">Wagon</option>
                  <option value="Minivan">Minivan</option>
                  <option value="Luxury Car">Luxury Car</option>
                </select>
              </div>
    
              <div className="mb-4">
                <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
                <select
                  id="year"
                  name="Year"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={year}
                  onChange={(e)=> setYear(e.target.value)}
              >
                {arryear.map((e, index) => <option key={index}>{e}</option>)}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor='model'>Car Model </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={model}
                  onChange={(e)=> setModel(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"> Car Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                rows="4"
                required
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={descreption}
                  onChange={(e)=> setDescreption(e.target.value)}
                ></textarea>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2' htmlFor='location'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Car Location'
                  required       
                  value={location}
                  onChange={(e)=> setLocation(e.target.value)}  
                />
            </div>
                  <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor='model'>Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Type Price"
                  required
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                />
            </div>

              <h3 className="text-2xl mb-5">User Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                  >User Name</label>
                <input
                  type="text"
                id="company"
                required
                  name="Username"
                  className="border rounded w-full py-2 px-3"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                  >Contact Email</label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={mail}
                  onChange={(e)=> setMail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                  >Contact Phone</label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="bg-[#ffa500] hover:bg-[#ffb500] text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Car
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default AddNewCar