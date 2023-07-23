import React, { useEffect, useState } from 'react'
import { getDogCategories } from '../../../breeds/breeds.axios'

const Petcard = () => {
    const [breed,setBreed] = useState([])

    const getBreed = async () =>{
        const result = await getDogCategories()
        const limit = result.slice(0,8)
        setBreed(limit)
    }
    useEffect(()=>{
        getBreed()
    },[])
    console.log("breed", breed)

  return (
    <div className='flex flex-row flex-wrap gap-4 justify-between'>
        {
            breed && breed.map((breeds,index)=>{
                return(
                    <div key={index} className='flex flex-col w-1/5 h-80  border border-zinc-300 overflow-hidden rounded-lg shadow-md p-2 '>
                        <img className='h-4/5' src={breeds.img}/>
                        <span className='flex flex-col'>
                            <h3 className='text-heading font-bold'>{breeds.breed}</h3>
                            <span className='flex flex-row gap-2'>
                            <span className='flex flex-row gap-2 overflow-hidden'>
                                <p className='text-textgrey'>Coat:</p>
                                <p className='text-footerbg text-base font-semibold line-clamp-1'>{breeds.meta.coat}</p>
                                </span>
                                <p className='text-textgrey'>Origin:</p>
                                <p className='text-footerbg text-base font-semibold '>{breeds.origin}</p>
                                </span>
                               
                               
                            
                        </span>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Petcard