'use client'
import { inView, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { usePretzelStore } from '../store';

type Props={
  children:React.ReactNode;
  id:string;
}
export default function FeatureTitle({children,id}:Props) {
  const ref =useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref,{margin:"-50% 0px -50% 0px"});
  const setInViewPretzel = usePretzelStore(state => state.setInViewPretzel)
  const inViewPretzel = usePretzelStore((state)=> state.inViewPretzel)

  useEffect(()=>{

    if(isInView) setInViewPretzel(id);
    if(!isInView && inViewPretzel===id) setInViewPretzel(null)
  },[isInView,id,setInViewPretzel,inViewPretzel])


  return (
    <p ref={ref} className={` ${isInView ? ' text-white drop-shadow-red' : ' text-blue-400 drop-shadow-red' } text-8xl py-16 font-luckGuy transition-colors`}>
      {children}
    </p>
  )
}
