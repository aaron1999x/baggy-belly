'use client'

import { marketingConfig } from '@/config/marketing'
import Link from 'next/link'
import React, { useState } from 'react'



export default function MainNav() {

  const [open, setOpen] = useState(false)
  const toggleMenu = () =>{
    setOpen((prevOpen)=> !prevOpen)
  }
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
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
                  className='flex items-center text-lg font-medium '
                >
                  {item.title}
                </Link>

              ))}
            </nav>
          ):null}
        </div>
        <div className='p-2 rounded-lg bg-baggyBlue text-white md:flex hidden'>
          Contact Us
        </div>
        <div className='md:hidden text-white'
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      {/* https://www.youtube.com/watch?v=yoMf7BOujLA */}
      {open && (
        <div className='fixed left-0 top-0 w-full h-screen bg-baggyRed text-white p-10'>
          <div className='flex h-full flex-col'>
            <div className='flex justify-between'>
              <Link href='/'>
                <span className='font-bold'>Baggy Belly</span>
              </Link>
              <div className='md:hidden text-white'
                onClick={toggleMenu}
              >
                Close
              </div>
            </div>
            <div className='flex flex-col h-full justify-center items-center '>
              {marketingConfig.mainNav?.map((item,index)=>(
                <Link
                  key={index}
                  href={item.href}
                  className='flex items-center text-2xl font-bold text-white '
                >
                  {item.title}
                </Link>

              ))}
            </div>
          </div>
        </div>
      )}
    </header>
    
  )
}
