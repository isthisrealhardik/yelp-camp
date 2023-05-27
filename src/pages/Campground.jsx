import React from 'react'
import Nav from '../components/Nav'
import Info from '../components/Info'
import Comment from '../components/Comment'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import Map from './Map'

const reviews = [
  {
    name: 'Adam Jones',
    time: '13h ago',
    review: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
  },
  {
    name: 'Issac Dylon',
    time: '1 day ago',
    review: 'Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that',
  },
  {
    name: 'Hudson Luca',
    time: '3 days ago',
    review: 'Definitely recommened going there, not too far and not a lot of people to run the experience'
  }
]

function Campground() {
  const { id, name, price } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const image = searchParams.get('image');

  return (
    <div className='h-full w-screen bg-white flex flex-col justify-center items-center'>
        {/* Nav */}
        <Nav />
        {/* Info */}
        <Info name={name} image={image} price={price} />
        {/* Comment */}
        <div className='bg-white border px-8 py-4 border-secondary text-secondary my-4 border-opacity-20 w-[80%] lg:w-[40%] rounded flex flex-col justify-center items-start'>
          <h1>{id}</h1>
          {reviews.map(obj => (
            <Comment name={obj.name} time={obj.time} review={obj.review} />
          ))}
            <button className='rounded-md my-2 text-primary bg-secondary h-12 text-sm hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all font-bold' >Leave a review</button>
        </div>
        {/* Map */}
        <Map />
        {/* Footer */}
          <Footer />
    </div>
  )
}

export default Campground