'use client'

import { marketingConfig } from '@/config/marketing'
import Link from 'next/link'
import React, { useState } from 'react'
import MobileNavDropdown from './mobile-nav-dropdown'


export default function MainNav() {

  const [open, setOpen] = useState(false)
  const toggleMenu = () =>{
    setOpen((prevOpen)=> !prevOpen)
  }

  
  return (
    <header className=" z-40 bg-background bg-baggyBlue fixed w-full">
      <div className="flex h-20 items-center justify-between py-6 container">
        <div className='flex gap-6 md:gap-10'>
          <Link href='/'>
            <span className='font-bold'>Baggy Belly</span>
          </Link>
          {marketingConfig.mainNav?.length? (
            <nav className='hidden md:flex gap-6'>
              {marketingConfig.mainNav?.map((item,index)=>(
                <Link
                  key={index}
                  href={item.href}
                  className='flex items-center text-lg font-medium text-white font-luckGuy '
                >
                  {item.title}
                </Link>

              ))}
            </nav>
          ):null}
        </div>
        <div className='p-2 rounded-lg bg-baggyRed text-white md:flex hidden'>
          Contact Us
        </div>
        <div className='md:hidden text-white'
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      
      {open && (
        <MobileNavDropdown onClick={toggleMenu} />
      )}
    </header>
    
  )
}
