import HomepageHero from '@/components/home-hero'
import MarqueeElement from '@/components/marquee-element'
import PretzelScroll from '@/components/pretzel-scroll'
import React from 'react'

export const metadata = {
  title: "Home",
}

export default function IndexPage() {
  return (
    <div className='bg-baggyBlue'>
      <HomepageHero />
      <MarqueeElement />
      <PretzelScroll />
    </div>
  )
}
