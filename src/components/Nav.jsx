import React from 'react'
import Menu from "../../Assets/Hamburger Menu.svg"
import Close from "../../Assets/Close.svg"
import Logo from "../../Assets/Logo.svg"
import { Link } from 'react-router-dom'


function Nav() {
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
    <div className='flex justify-between items-center px-6 py-8 w-screen lg:px-32'>
        <div className='flex justify-center items-center space-x-3'>
            <img src={Logo} alt="Logo" className='lg:w-32'/>
            <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all hidden lg:block' >
                <Link to='/' className='text-secondary hover:text-secondary hover:opacity-70 hover:border-0'>Home</Link>
            </button>
        </div>
        <div onClick={handleClick} id='menu' className='lg:hidden bg-primary h-8 w-8 flex justify-center items-center'>
            <img src={Menu} alt="Menu" />
        </div>
        <div className='hidden lg:flex justify-center items-center space-x-3'>
            <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all' >Login</button>
            <button className='rounded-md my-2 text-primary bg-secondary h-12 text-sm hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all font-bold' >
                <Link to='/signup' className='text-primary hover:text-secondary hover:opacity-70 hover:border-0'>Create an account</Link>
            </button>
        </div>

        {/* dropdown */}
        <div id='dropdown' className='absolute hidden flex-col justify-center items-start px-4 py-4 bg-primary w-[50%] rounded rounded-tr-none shadow-sm top-16 left-[10.2rem]'>
            <img src={Close} alt="Close" className='relative left-60 w-4 hidden' />
            <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all' >Home</button>
            <button className=' text-secondary bg-transparent text-sm hover:opacity-50 transition-all' >Login</button>
            <button className='rounded-md my-2 text-primary bg-secondary h-12 text-xs hover:bg-transparent hover:text-secondary hover:border hover:border-secondary transition-all' >
                <Link to='/signup' className='text-secondary hover:text-primary hover:opacity-70 hover:border-0'>Create an account</Link>
            </button>
        </div>
    </div>
  )
}

export default Nav