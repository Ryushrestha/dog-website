import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'




const Carousel = () => {
    
    const properties = {
        prevArrow: <button className='bg-white text-xl text-button  rounded-full ms-3 hover:bg-button' ><GrFormPrevious className='text-button' /></button>,
        nextArrow: <button  className='bg-white text-xl  text-button rounded-full me-3 hover:bg-button'><GrFormNext/></button>
    }
  
    return (
        <Slide className='w-auto' {...properties}>
            <div className="each-slide-effect" >
                <div className='relative ' style={{height:'500px'}}>
                    <img className=''  src='./dog1.jpg'/>
                    
                    <span className='absolute top-6 mx-auto left-1/3 flex flex-col items-center'>
                        <p className='font-extrabold text-3xl'>We Provide the best care to our furry friends!</p>
                        <p className='font-semibold text-xl'>Top Quality Pet Product</p>
                        </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='relative items-center flex justify-center' style={{height:'500px'}}>
                <img src='./dog2.jpg'/>
                    <span className='absolute top-6 flex flex-col items-center'>
                    <p className='font-extrabold text-3xl'>We Provide the best care to our furry friends!</p>
                        <p className='font-semibold text-xl'>Top Quality Pet Product</p>
                    </span>
                </div>
            </div>
        </Slide>
    )
}

export default Carousel