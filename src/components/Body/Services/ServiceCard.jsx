import React from 'react'
import jsonData from './data.json'

const ServiceCard = () => {
    const serviceData = jsonData.services
  return (
    <div className='flex flex-row flex-wrap justify-between gap-6 '>
        {serviceData && serviceData.map((data,index)=>{
            return(
                <div key={index} className='flex flex-col w-1/4 h-96 rounded-md overflow-hidden border border-zinc-300 shadow-md gap-6 pb-10' >
                        <img className='w-full h-1/2 ' src={data.images}/>
                        <span className='flex flex-col px-3 gap-4'>
                            <h1 className='text-heading text-lg font-bold'>{data.service}</h1>
                            <h1 className='text-textgrey text-base '>{data.Description}</h1>
                        </span>
                        <span className='items-center mx-auto'>
                        <button className='bg-heading text-white font-semibold py-1 rounded-md px-2'>View More</button>
                        </span>
                 </div>   
            )
        })}
    </div>
  )
}

export default ServiceCard