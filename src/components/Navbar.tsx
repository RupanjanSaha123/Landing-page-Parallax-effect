import React from 'react'
import logoImage from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container bg-black'>
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md">
            </div>
            <Image src={logoImage} alt="saas logo" className='h-12 w-12 relative'/>
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className="text-white" />
          </div>
          <nav className='hidden sm:flex gap-6 items-center'>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</Link>
            <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar