import React, { useState } from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import image1 from "../../Assets/Camp Images/Compressed Images/Buloy Springs.jpg"
import image2 from "../../Assets/Camp Images/Compressed Images/Calaguas Island.jpg"
import image3 from "../../Assets/Camp Images/Compressed Images/Latik Riverside.jpg"
import image4 from "../../Assets/Camp Images/Compressed Images/Mount Ulap.jpg"
import image5 from "../../Assets/Camp Images/Compressed Images/Onay Beach.jpg"
import image6 from "../../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const cards = [
    {
        img: image1,
        name: 'Mount Ulap',
        paragraph: 'One of the most famous hikes in Benguet is Mt Ulap in Itogon',
        id: 1,
        price: 103.55,
    },
    {
        img: image2,
        name: 'Calaguas Islands',
        paragraph: 'A paradise of islands that can rival the white sand beauty of Boracay',
        id: 2,
        price: 89.45,
    },
    {
        img: image3,
        name: 'Onay Beach',
        paragraph: 'This is one of the best beach camping sites, beautiful and pristine',
        id: 3,
        price: 42.54,
    },
    {
        img: image4,
        name: 'Seven Sisters Waterfall',
        paragraph: 'The Seven Sisters is the 39th tallest waterfall in Norway',
        id: 4,
        price: 335.65,
    },
    {
        img: image5,
        name: 'Latik Riverside',
        paragraph: 'Phillipines is one of the most dazzling countries in all of Asia',
        id: 5,
        price: 35.57,
    },
    {
        img: image6,
        name: 'Buloy Springs',
        paragraph: 'This is one of the best beach camping sites, beautiful and pristine',
        id: 6,
        price: 42.36,
    }
]

function SearchPage() {

  return (
    <div className='bg-white h-full w-screen flex flex-col justify-start items-center'>
        {/* Nav */}
        <Nav />
        {/* Search Component */}
        <div className='flex flex-col justify-center items-center lg:w-full lg:px-32'>
            <Search />
        </div>
        {/* Cards */}
        <div className='my-4 flex flex-col justify-center items-center lg:flex-row lg:px-32 lg:justify-between lg:my-8 lg:flex-wrap'>
            {cards.map(obj => (
                <Card image={obj.img} name={obj.name} paragraph={obj.paragraph} id={obj.id} price={obj.price} />
            ))}
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default SearchPage