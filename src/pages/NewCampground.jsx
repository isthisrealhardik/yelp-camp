import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function NewCampground() {
  return (
    <div className='bg-white h-full lg:flex lg:flex-col lg:justify-center lg:items-center'> 
        <Nav />
        <div className='px-6 w-screen mb-8 lg:w-[500px]'>
          <h1 className='text-secondary font-bold text-3xl my-6'>Add New Campground</h1>
          <div className='space-y-4'>
            <div>
                <p className='text-secondary opacity-80 mb-3'>Campground Name</p>
                <input type='text' className='rounded bg-gray-50 w-full p-5' name="name" placeholder='Steven Sisters Waterfall' />
            </div>
            <div>
                <p className='text-secondary opacity-80 mb-3'>Price</p>
                <input type='text' className='rounded bg-gray-50 w-full p-5' name="price" placeholder="$149" />
            </div>
            <div>
                <p className='text-secondary opacity-80 mb-3'>Image</p>
                <input type="image" className='rounded bg-gray-50 w-full p-5' name='image' placeholder='image' />
            </div>
            <div>
                <p className='text-secondary opacity-80 mb-3'>Description</p>
                <textarea name="description" id="description" cols="30" rows="10" className='rounded bg-gray-50 w-full p-5' placeholder='This is description'></textarea>
            </div>
          </div>
          <button className='rounded-md my-2 text-primary w-full bg-secondary h-14 text-sm hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all font-bold'>
            <Link to='/search' className='text-base font-bold text-white hover:text-secondary'>Post Comment</Link>
          </button>
        </div>
        <Footer />
    </div>
  )
}

export default NewCampground;