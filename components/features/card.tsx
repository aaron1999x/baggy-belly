'use client'
import React from 'react'
import { usePretzelStore } from '../store';
import Image from 'next/image';
import seasalt from '@/public/images/sea-salt.png'
import meltedChoc from '@/public/images/melted-choc.png'
import sesameSugar from '@/public/images/sesame-sugar.png'

type FeatureCardProps ={
  gradient?:string;
  children:React.ReactNode
} & CardProps
type CardProps={
  id:string
}

export default function FeatureCard({gradient,children,id}:FeatureCardProps) {

  const inViewPretzel = usePretzelStore((state)=> state.inViewPretzel)

  return (
    <div className={`absolute inset-0 h-full w-full rounded-2xl flex items-center justify-center ${gradient} ${inViewPretzel === id ? 'opacity-100' :'opacity-0'}`}>
      {children}
    </div>
  )
}

export const SeaSalt = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id} >
      <Image src={seasalt} alt='sea-salt' />
    </FeatureCard>
  )
}

export const MeltedChoc = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id} >
      <Image src={meltedChoc} alt='meltedchoc' width={400} height={400} />
    </FeatureCard>
  )
}
export const CinnamonSugar = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id} >
      <Image src={sesameSugar} alt='sesameSugar' width={400} height={400} />
    </FeatureCard>
  )
}
export const PeanutButter = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id}>
      <span></span>
    </FeatureCard>
  )
}
export const SesameSugar = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id}>
      <Image src={sesameSugar} alt='sesameSugar' />
    </FeatureCard>
  )
}

export const ChocolateCookie = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id}>
      <span></span>
    </FeatureCard>
  )
}
export const PeanutCookie = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id}>
      <span></span>
    </FeatureCard>
  )
}
export const PeanutChoc = ({id}:CardProps) =>{
  return(
    <FeatureCard id={id}>
      <span></span>
    </FeatureCard>
  )
}