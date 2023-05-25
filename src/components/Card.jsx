import React from 'react'

function Card({ image, heading, paragraph }) {
  return (
    <div className='w-[90%] bg-white border border-secondary border-opacity-30 shadow-sm rounded my-2 text-secondary flex flex-col justify-center items-center p-4'>
        <img src={image} alt="Image" className='w-full rounded object-cover' />
        <div className='flex flex-col justify-start items-start'>
            <h1 className='font-bold text-lg'>{heading}</h1>
            <p className='opacity-80 text-base'>{paragraph}</p>
            <button className='rounded-md my-2 text-secondary bg-transparent border border-secondary border-opacity-50 h-14 w-full text-base font-bold hover:bg-secondary hover:text-white transition-all mt-4'>View Campground</button>
        </div>
    </div>
  )
}

export default Card