'use client'
import React from 'react'
import FeatureTitle from './features/title'
import  { ChocolateCookie, CinnamonSugar, MeltedChoc, PeanutButter, PeanutChoc, PeanutCookie, SeaSalt, SesameSugar } from './features/card'
import Lottie from 'lottie-react'
import animation from '@/public/animation.json'
import { usePretzelStore } from './store'

const pretzels = [
  {
    title:"Sea Salt",
    id:'sea-salt',
    card:SeaSalt
  },
  {
    title:"Melted Chocolate",
    id:'melted-sugar',
    card:MeltedChoc
  },
  {
    title:"Cinnamon Sugar",
    id:'cinnamon-sugar',
    card:CinnamonSugar
  },
  {
    title:"Peanut Butter",
    id:'peanut-butter',
    card:PeanutButter
  },
  {
    title:"Sesame Sugar",
    id:'sesame-sugar',
    card:SesameSugar
  },
  {
    title:"Chocolate Cookie",
    id:'chocolate-cookie',
    card:ChocolateCookie
  },
  {
    title:"Peanut Chocolate",
    id:'peanut-chocolate',
    card:PeanutChoc
  },
  {
    title:"Peanut Cookie",
    id:'peanut-cookie',
    card:PeanutCookie
  },
]

export default function PretzelScroll() {
  const inViewPretzel = usePretzelStore((state)=> state.inViewPretzel)
  
  return (
    <section>
      <div className='container'>
        <div className='flex w-full gap-20 items-start'>
          <div className='w-full py-[50vh]'>
            <ul>
              {pretzels.map((pretzel)=>(
                <li key={pretzel.id}>
                  <FeatureTitle id={pretzel.id}>{pretzel.title}</FeatureTitle>
                </li>

              ))}
            </ul>
          </div>
          <div className='w-full sticky top-0 h-screen flex items-center'>
            <div className='relative w-full aspect-square bg-transparent rounded-2xl'>
              {pretzels.map((pretzel)=>(
                <pretzel.card id={pretzel.id} key={pretzel.id}  />
              ))}
              {inViewPretzel == null &&(
                <Lottie
                  animationData={animation}
                  loop={true}
                />
              )}
            </div>
          </div>
        </div>
        <div className='h-screen'>
          scroll
        </div>
      </div>
    </section>
  )
}
