import React from 'react'

function Search() {
  return (
    <div className='w-[90%] bg-primary text-secondary p-6 mb-4'>
        <h1 className='font-bold text-4xl'>Welcome to YelpCamp!</h1>
        <p className='text-base my-2 opacity-90'>View our hand-picked campgrounds from all over the world, or add your own</p>
        <div className='w-full flex flex-col justify-start items-start space-y-3 my-4'>
            <input type="text" placeholder='Search for camps' className='h-14 rounded w-full bg-white border border-secondary border-opacity-30 px-4' />
            <button className='rounded-md my-2 text-primary bg-secondary h-14 w-full text-base hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all'>Search</button>
            <p className='text-secondary opacity-70 hover:opacity-100 underline'>Or add your own campground</p>
        </div>
    </div>
  )
}

export default Search