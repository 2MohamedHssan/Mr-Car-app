import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import BuyCar,{CarLoder} from './Pages/BuyCar'
import Mainlyout from './layout/Mainlyout'
import NotFound from './Pages/Notfound'
import EditeCAr from './Pages/EditeCAr'
import AddNewCar from './Pages/AddNewCar'
import AllCarView from './Pages/AllCarView'
export const App = () => {  

  const updateCar = async(car) => {
    const res = await fetch(`http://localhost:9000/Cars/${car.id}`, {
      method: 'PUT',
      headers: {
         'Content-Type' : 'application/json',
      },
      body:JSON.stringify(car)
    })
    return
  }

  const AddCar = async (a) => {
    const res = await fetch('http://localhost:9000/Cars', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(a)
    })
    return
  }
  const deleting = async (id) => {
    const res = await fetch(`http://localhost:9000/Cars/${id}`, {
      method: 'DELETE',
    })
    return
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlyout />}>
        <Route index element={<Home />} />
        <Route path='/Car/:id' element={<BuyCar deleting={deleting} />} loader={CarLoder} />
        <Route path='/Car-edit/:id' element={<EditeCAr updateing={updateCar} />} loader={CarLoder} />
        <Route path='/add-car' element={< AddNewCar AddCar={AddCar} />} />
        <Route path='/All-Car' element={<AllCarView />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
)
  return <RouterProvider router={router}/>
}

