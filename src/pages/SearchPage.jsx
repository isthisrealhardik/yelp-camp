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
                <Card image={obj.img} heading={obj.heading} paragraph={obj.paragraph} />
            ))}
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default SearchPage