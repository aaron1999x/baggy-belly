import MarqueeElement from "./marquee-element";
import { UnderlineSvg } from "./svg-components";

export default function HomepageHero() {
  
  return (
    <section className=' min-h-[calc(80vh-80px)] mt-20 container'>
      {/* <div className='grid grid-cols-12 min-h-[calc(80vh-80px)] items-center '>
        <div className='col-span-12 md:col-span-8 lg:col-span-6 relative'>
          <div className='flex flex-col font-luckGuy text-baggyBlue'>
            <span className='text-6xl'>
              Freshly Baked to
            </span>
            <span className='text-[120px]'>Perfection</span>
          </div>
        </div>
        <div className='col-span-12 md:col-span-4 lg:col-span-6'>

        </div>
      </div> */}
      <div className="min-h-[calc(80vh-80px)] flex flex-col justify-center items-center font-luckGuy text-white text-center">
        <span className="text-7xl drop-shadow-blue" >Freshly</span>
        <span className="text-8xl drop-shadow-blue">Baked to</span>
        <div>
          <span className=" text-9xl drop-shadow-blue">Perfection</span>
          <span className="text-baggyYellow block -mt-3"><UnderlineSvg /></span>
        </div>
      </div>

    </section>
  )
}
