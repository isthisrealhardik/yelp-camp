import React from 'react'
import MapImage from "../../Assets/Map.png"

function Map() {
  return (
    <div className='bg-white border p-8 border-secondary text-secondary mb-4 border-opacity-20 w-[80%] lg:w-[80%] lg:flex-row space-x-6 rounded flex flex-col justify-center items-center'>
        <img src={MapImage} alt="Image" className='object-cover w-full rounded' />
    </div>
  )
}

export default Map