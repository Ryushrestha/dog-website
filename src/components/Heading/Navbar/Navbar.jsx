import React from 'react'
import Search from './Search'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
 

  const activeLink = 'text-button underline flex flex-row gap-9 font-semibold text-base'
  return (
    <div className='h-24 px-20 flex flex-row items-center justify-between'>
      <div className='flex flex-row gap-6 items-center'>
        <span>
          <img className='h-11 w-auto' src='./logo.png'/>
        </span>
        <div className='flex flex-row gap-9 font-semibold text-base'>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Services</a>
              <a href='/'>Breed</a>
              <a href='/'>Shop</a>
              <a href='/'>Gallery</a>
        </div>
       

        </div>
        <div className='flex flex-row gap-6'>
         <Search/>
        <span className='border border-button rounded-md flex flex-row gap-2 items-center p-2'>
          <FaShoppingCart className='text-button'/>
          <p>2 Items</p>
        </span>
        </div>
    </div>
  )
}

export default Navbar