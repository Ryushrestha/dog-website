import React from 'react'

const Left = () => {
    return (
        <>
            <div className='relative justify-center items-center h-full w-full mt-2'>
                <img className='h-4/5 z-10' src='./background.png' />
                <div className='absolute top-10 overflow-hidden border-4 border-white bg-white border-spacing-2  rounded-md h-96 w-96 z-20'>
                    <img className='h-96 w-96   rounded-md' src='./yellow.jpg' />
                </div>
                <div className='overflow-hidden absolute h-48 w-48 border-4 z-30 border-white bg-white border-spacing-2 rounded-md top-72 left-60 ' >
                    <img className='h-48 w-48 rounded-md object-cover' src='./human1.jpg' />
                </div>
                <div className='overflow-hidden absolute h-36 w-36 border-4 z-40 border-white  bg-white rounded-md  top-52 left-80'>
                    <img className='h-36 w-36 rounded-md object-cover' src='./human2.jpg' />
                </div>
            </div>

        </>

    )
}

export default Left