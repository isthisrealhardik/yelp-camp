import React from 'react'
import { Link } from 'react-router-dom'

function Card({ image, name, paragraph, id, price }) {
  return (
    <div className='w-[90%] lg:w-[30%] lg:my-4 bg-white border border-secondary border-opacity-30 shadow-sm rounded my-2 text-secondary flex flex-col justify-center items-center p-4'>
        <img src={image} alt="Image" className='w-full rounded object-cover' />
        <div className='flex flex-col justify-start items-start mt-4'>
            <h1 className='font-bold text-lg'>{name}</h1>
            <p className='opacity-80 text-base'>{paragraph}</p>
            <button className='rounded-md my-2 text-secondary bg-transparent border border-secondary border-opacity-50 h-14 w-full text-base font-bold hover:bg-secondary hover:text-primary transition-all mt-4'>
              <Link to={`/campground/${id}/${encodeURIComponent(name)}/${encodeURIComponent(price)}?image=${encodeURIComponent(image)}`} className='text-secondary hover:text-primary' >View Campground</Link>
            </button>
        </div>
    </div>
  )
}

export default Card