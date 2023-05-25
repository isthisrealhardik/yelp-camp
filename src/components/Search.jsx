import React from 'react'

function Search() {
  return (
    <div className='w-[90%] bg-primary text-secondary p-6 mb-4 lg:w-full lg:pr-[600px] lg:py-12 lg:pl-14'>
        <h1 className='font-bold text-4xl'>Welcome to YelpCamp!</h1>
        <p className='text-base my-2 opacity-90'>View our hand-picked campgrounds from all over the world, or add your own</p>
        <div className='w-full flex flex-col lg:flex-row justify-start items-start space-y-3 my-4 lg:space-x-3 lg:space-y-0 lg:justify-start lg:items-center'>
            <input type="text" placeholder='Search for camps' className='h-14 rounded w-full lg:w-[50%] bg-white border border-secondary border-opacity-30 px-4' />
            <button className='rounded-md my-2 text-primary bg-secondary h-14 w-full lg:w-[25%] text-base hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all'>Search</button>
            <p className='text-secondary opacity-70 hover:opacity-100 underline lg:hidden'>Or add your own campground</p>
        </div>
        <p className='text-secondary opacity-70 hover:opacity-100 underline hidden lg:block'>Or add your own campground</p>
    </div>
  )
}

export default Search