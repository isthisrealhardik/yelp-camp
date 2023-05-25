import React from 'react'
import image1 from "../../Assets/Camp Images/Compressed Images/Mount Ulap.jpg"

function Info() {
  return (
    <div className='bg-white border p-8 border-secondary text-secondary mb-4 border-opacity-20 w-[80%] lg:w-[80%] lg:flex-row space-x-6 rounded flex flex-col justify-center items-center'>
        <img src={image1} alt="Image" className='object-cover w-full rounded' />
        <div className='flex flex-col justify-start items-start'>
            <div className='flex justify-between items-center mt-4 mb-2 w-full pr-10'>
                <h1 className='text-xl font-bold'>Mount Ulap</h1>
                <h3 className='text-sm font-bold'>$104.99/night</h3>
            </div>
            <p className='text-sm opacity-70 leading-6'>Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Phillipines that offers the chance to see wildlife and is rated as moderate. The trail is primary used for hiking.</p>
            <p className='italic mt-4 opacity-70'>Submitted by Andrew Mike</p>
        </div>
    </div>
  )
}

export default Info