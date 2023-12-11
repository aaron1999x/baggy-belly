import React from 'react'

export default function MarqueeElement() {
  
  return (
    <div className="marquee marquee--hover-pause text-6xl md:text-9xl uppercase font-anton relative pt-7">
      <ul className="marquee__content ">
        <li><span>Caution:</span> Hot & Addictively Delicious!</li>
        <li><span>Caution:</span> Taste Sensation Ahead! Handle with Yum</li>
        <li><span>Caution:</span> Dangerously Tasty Pretzels Ahead</li>
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        <li><span>Caution:</span> Hot & Addictively Delicious!</li>
        <li><span>Caution:</span> Taste Sensation Ahead! Handle with Yum</li>
        <li><span>Caution:</span> Dangerously Tasty Pretzels Ahead</li>
      </ul>
      <div className='absolute right-2 top-0 text-base text-black flex gap-1 items-center'>
        <div className='h-3 w-3 rounded-full bg-red-600 animate-pulse'>
        </div>
        <span>
          oven in use
        </span>
      </div>
    </div>
  )
}
