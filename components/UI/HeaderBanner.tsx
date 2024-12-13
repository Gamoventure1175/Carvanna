import React from 'react'
import Image from 'next/image'
import Porsche from '@/public/porsche.png'

const HeaderBanner = () => {
  return (
    <section className='w-full flex-1 text-text-default flex flex-col justify-end p-4 pt-0 sm:p-6 md:p-8 sm:pt-0 md:pt-0 gap relative overflow-hidden '>
        <h1 className='text-xl sm:text-3xl font-semibold z-20'>Get Your Car Today</h1>
        <p className='text-base sm:text-lg z-20'>Discover a wide variety of cars from different brands</p>
        <Image alt='car' src={Porsche} width={1600} height={310}  className='m-0 z-10 w-full max-w-[500px] sm:max-w-[700px] md:max-w-[1100px] lg:max-w-[1500px]
        absolute bottom-1/2 right-0 translate-y-1/2 translate-x-1/4
        ' />
    </section>
  )
}

export default HeaderBanner