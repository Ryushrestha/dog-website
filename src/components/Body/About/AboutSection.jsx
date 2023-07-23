import React from 'react'
import Left from './Left'
import Right from './Right'

const AboutSection = () => {
  return (
    <div className='px-20 flex flex-row gap-4 mt-3 items-center'>
      <div className='w-1/2'>
        <Left/>
        </div>
        <div className='w-1/2'>
        <Right/>
        </div>
    </div>
  )
}

export default AboutSection