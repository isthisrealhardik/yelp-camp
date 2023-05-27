import React from 'react'
import Logo from "../../Assets/Logo.svg";
import { Link } from 'react-router-dom';
import Testimonial from "../../Assets/User Testimonial.svg"

function SignUp() {
  return (
    <div className='flex flex-col justify-start items-start h-full w-screen text-secondary lg:flex-row lg:h-screen'>
        {/* above */}
        <div className='bg-white w-screen flex flex-col justify-center px-8 lg:px-28 pb-4 lg:h-screen lg:justify-start lg:w-[60%]'>
            {/* Nav */}
            <div className='flex justify-between items-center py-8'>
                <img src={Logo} alt="Logo" className='lg:w-24' />
                <Link to='/search' className='text-secondary opacity-90 text-sm'>Back to campgrounds</Link>
            </div>
            {/* Content */}
            <div className='lg:p-12'>
                <h1 className='font-bold text-3xl pr-12'>Start exploring camps from all around the world.</h1>

                <div className='flex flex-col justify-start items-start my-6 space-y-4'>
                    <label htmlFor="username" className='opacity-80 lg:text-sm'>Username</label>
                    <input type="text" name='username' placeholder='johndoe_91' className='bg-gray-200 rounded h-11 w-full px-4 lg:h-10 lg:placeholder:text-sm' />

                    <label htmlFor="password" className='opacity-80 lg:text-sm'>Password</label>
                    <input type="password" name="password" placeholder='Choose a password' className='bg-gray-200 rounded h-11 w-full px-4 lg:h-10 lg:placeholder:text-sm' />

                    <button className='text-primary bg-secondary w-full rounded text-center h-14 lg:h-10 lg:text-sm'>Create an account</button>
                    <div className='flex space-x-1'>
                        <p className='opacity-80 lg:text-sm'>Already a user?</p>
                        <Link to='/signin' className='text-blue-500 underline font-bold lg:text-sm'>Sign in</Link>
                    </div>
                </div>
            </div>

        </div>
        {/* below */}
        <div className='bg-primary h-full w-screen flex flex-col py-8 justify-start items-start px-8 lg:w-[40%] lg:justify-center lg:px-20'>
            <h1 className='font-bold text-xl leading-8'>"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added"</h1>
            <div className='py-8 flex space-x-3 lg:py-4'>
                <img src={Testimonial} alt="Testimonial" />
                <div className='flex flex-col justify-start items-start'>
                    <p className='font-bold text-sm'>May Andrews</p>
                    <p className='opacity-70'>Professional Hiker</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp