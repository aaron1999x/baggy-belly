import { marketingConfig } from '@/config/marketing';
import { MobileNavDropdown } from '@/types';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { TikTokSvg } from './svg-components';


export default function MobileNavDropdown({onClick}:MobileNavDropdown) {
  const menuVars={
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLink= {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const containerVars= {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  
  return (
    <motion.div 
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className='fixed left-0 top-0 w-full h-screen bg-baggyRed text-white p-10 origin-top'>
        
      <div className='flex h-full flex-col'>
        <div className='flex justify-between'>
          <Link href='/'>
            <span className='font-bold'>Baggy Belly</span>
          </Link>
          <div className='md:hidden text-white'
            onClick={()=>onClick()}
          >
            Close
          </div>
        </div>
        <motion.div 
          variants={containerVars} 
          initial="initial"
          animate="open"
          exit="initial"
          className='flex flex-col h-full justify-center items-center relative -mt-5'>

          {marketingConfig.mainNav?.map((item,index)=>(
            <div key={index} className='overflow-hidden'>
              <motion.div  variants={mobileLink}>
                <Link
                  href={item.href}
                  className='flex items-center text-5xl font-bold text-white font-luckGuy'
                >
                  {item.title}
                </Link>
              </motion.div>
            </div>

          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeOut", duration: 1, delay:0.8 }}
            className='flex gap-3 items-center mt-12'>
            <Instagram />
            <Facebook />
            <TikTokSvg />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
