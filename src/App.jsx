import { useState } from 'react'
import './App.css'
import Cart from './assets/components/Cart/Cart'
import Courses from './assets/components/Courses/Courses'


function App() {

  const [cart, setCart] = useState([])

const handleCourseSelection = course => {
    const newCart = [...cart, course]
  setCart(newCart)
}


  return (
    <>
      <div className='lg:p-10 space-y-10'>
        <div className='items-center justify-center mx-auto lg:ml-96'>
          <h2 className='text-5xl text-primary font-bold '>Course Registration</h2>
        </div>

        <div className='grid grid-cols-12'>
          <div className='col-span-10'>
            <Courses handleCourseSelection ={ handleCourseSelection }></Courses>
          </div>
          <div className='col-span-2'>
            <Cart cart={cart}></Cart>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
