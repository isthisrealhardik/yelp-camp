import React, { useState } from 'react'
import Logo from "../../Assets/Logo.svg"
import Menu from "../../Assets/Hamburger Menu.svg"
import Close from "../../Assets/Close.svg"
import Search from '../components/Search'
import Card from '../components/Card'
import image1 from "../../Assets/Camp Images/Compressed Images/Buloy Springs.jpg"
import image2 from "../../Assets/Camp Images/Compressed Images/Calaguas Island.jpg"
import image3 from "../../Assets/Camp Images/Compressed Images/Latik Riverside.jpg"
import image4 from "../../Assets/Camp Images/Compressed Images/Mount Ulap.jpg"
import image5 from "../../Assets/Camp Images/Compressed Images/Onay Beach.jpg"
import image6 from "../../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg"

const cards = [
    {
        img: image1,
        heading: 'Mount Ulap',
        paragraph: 'One of the most famous hikes in Benguet is Mt Ulap in Itogon',
    },
    {
        img: image2,
        heading: 'Calaguas Islands',
        paragraph: 'A paradise of islands that can rival the white sand beauty of Boracay',
    },
    {
        img: image3,
        heading: 'Onay Beach',
        paragraph: 'This is one of the best beach camping sites, beautiful and pristine',
    },
    {
        img: image4,
        heading: 'Seven Sisters Waterfall',
        paragraph: 'The Seven Sisters is the 39th tallest waterfall in Norway',
    },
    {
        img: image5,
        heading: 'Latik Riverside',
        paragraph: 'Phillipines is one of the most dazzling countries in all of Asia',
    },
    {
        img: image6,
        heading: 'Buloy Springs',
        paragraph: 'This is one of the best beach camping sites, beautiful and pristine',
    }
]

function SearchPage() {

    const handleClick = () => {
        // let menu = document.getElementById('menu')
        let dropdown = document.getElementById('dropdown');

        if (dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex')
        } else {
            dropdown.classList.remove('flex')
            dropdown.classList.add('hidden');
        }
    }

  return (
    <div className='bg-white h-full w-screen flex flex-col justify-start items-center'>
        {/* Nav */}
        <div className='flex justify-between items-center px-6 py-8 w-screen'>
            <img src={Logo} alt="Logo" />
            <div onClick={handleClick} id='menu' className='bg-primary h-8 w-8 flex justify-center items-center'>
                <img src={Menu} alt="Menu" />
            </div>
            <div id='dropdown' className='absolute hidden flex-col justify-center items-start px-4 py-4 bg-primary w-[50%] rounded rounded-tr-none shadow-sm top-16 left-[10.2rem]'>
                <img src={Close} alt="Close" className='relative left-60 w-4 hidden' />
                <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all' >Home</button>
                <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all' >Login</button>
                <button className='rounded-md my-2 text-primary bg-secondary h-12 text-xs hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all' >Create an account</button>
            </div>
        </div>
        {/* Search Component */}
        <div className='flex flex-col justify-center items-center'>
            <Search />
        </div>
        {/* Cards */}
        <div className='my-4 flex flex-col justify-center items-center'>
            {cards.map(obj => (
                <Card image={obj.img} heading={obj.heading} paragraph={obj.paragraph} />
            ))}
        </div>
        {/* Footer */}
        <div className='flex justify-start items-start w-full px-6 mt-2 mb-8'>
            <img src={Logo} alt="Logo" />
        </div>
    </div>
  )
}

export default SearchPage