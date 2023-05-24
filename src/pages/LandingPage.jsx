import React from 'react'
import Logo from "../../Assets/Logo.svg"
import HeroImageResponsive from "../../Assets/HeroImage2.jpg"
import Checkmark from "../../Assets/Checkmark.svg"
import airbnb from "../../Assets/Airbnb.svg"
import booking from "../../Assets/Booking.svg"
import plumGuide from "../../Assets/Plum Guide.svg"
import HeroImage from "../../Assets/Hero Image.jpg"

const checkmarks = [
    'Add your own camp suggestions',
    'Leave reviews and experiences',
    'See locations for all camps',
]

const logos = [
    airbnb,
    booking,
    plumGuide
]

const LandingPage = () => {
    return(
        <div className='bg-primary h-full w-screen font-archivo text-secondary'>
            {/* MOBILE */}
            <div className='lg:hidden'>
                {/* Nav */}
                <div className='px-6 py-6'>
                    <img src={Logo} alt="Logo" />
                </div>
                {/* Hero Image */}
                <div className='h-80'>
                    <img src={HeroImageResponsive} alt="Hero" className='h-80 w-96 object-cover' />
                </div>
                {/* Hero Text and Buttons */}
                <div className='flex flex-col justify-start items-start px-6 py-8'>
                    <h1 className='font-bold text-4xl'>Explore the best camps on Earth.</h1>
                    <p className='font-bold text-base opacity-60 mt-3'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews</p>
                    <div className='my-5 flex flex-col justify-center items-start space-y-2'>
                        {checkmarks.map(text => (
                            <div className='flex justify-center items-center space-x-2'>
                                <img src={Checkmark} alt="Checkmark" />
                                <p className='opacity-50 font-bold'>{text}</p>
                            </div>
                        ))}
                    </div>
                    <button className='rounded-md my-2 text-primary bg-secondary h-14 text-base hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all'>View Campgrounds</button>
                    <h1 className='mt-4 mb-2 opacity-60 text-base font-bold'>Partnered with</h1>
                    <div className='flex justify-around items-center'>
                        {logos.map(image => (
                            <img className='w-32' src={image} alt='Image' />
                        ))}
                    </div>
                </div>
            </div>
            {/* DESKTOP */}
            <div className='hidden lg:flex justify-center items-center'>
                {/* left */}
                <div className='bg-primary h-screen w-[55%] px-16 pt-3 flex flex-col justify-center'>
                    {/* Nav */}
                    <div className='px-6 py-6'>
                        <img src={Logo} alt="Logo" className='w-24' />
                    </div>
                    {/* Hero Text and Buttons */}
                    <div className='flex flex-col justify-start items-start px-6 py-4'>
                        <h1 className='font-bold text-5xl'>Explore the best camps on Earth.</h1>
                        <p className='font-bold text-base opacity-60 mt-3'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews</p>
                        <div className='my-5 flex flex-col justify-center items-start space-y-2'>
                            {checkmarks.map(text => (
                                <div className='flex justify-center items-center space-x-2'>
                                    <img src={Checkmark} alt="Checkmark" />
                                    <p className='opacity-50 font-bold'>{text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='rounded-md my-2 text-primary bg-secondary h-12 text-sm hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all'>View Campgrounds</button>
                        <h1 className='mt-4 mb-2 opacity-60 text-base font-bold'>Partnered with</h1>
                        <div className='flex justify-around items-center space-x-4'>
                            {logos.map(image => (
                                <img className='w-28' src={image} alt='Image' />
                            ))}
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='h-screen w-[45%]'>
                    <img src={HeroImage} alt="Hero-Image-Desktop" className='h-screen w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default LandingPage