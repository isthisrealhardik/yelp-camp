import React from 'react'

function Comment({ name, time, review }) {
  return (
    <div className='text-secondary'>
        <div className='flex justify-between items-center mt-4 mb-2 w-full'>
            <h1 className='text-lg font-bold'>{name}</h1>
            <h3 className='text-sm font-bold opacity-70'>{time}</h3>
        </div>
        <p className='text-sm opacity-70 leading-5'>{review}</p>
        <div className='w-full h-[1px] my-4 bg-secondary opacity-30' ></div>
    </div>
  )
}

export default Comment