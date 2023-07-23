import React from 'react'
import Blogcard from './Blogcard'

const Blogsection = () => {
  return (
    <div className='px-20 flex flex-col gap-6'>
        <h1 className='text-heading text-3xl font-bold'>Our Blogs</h1>

        <Blogcard/>
    </div>
  )
}

export default Blogsection