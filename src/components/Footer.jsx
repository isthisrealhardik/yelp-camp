import React from 'react'
import Logo from "../../Assets/Logo.svg"

function Footer() {
  return (
    <div className='flex justify-start items-start w-full px-6 lg:px-32 mt-2 pb-8'>
        <img src={Logo} alt="Logo" />
    </div>
  )
}

export default Footer