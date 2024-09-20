import React from 'react'

export default function Enjoy() {
  return (
    <>
    <div className='main flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap  justify-evenly items-center lg:py-20 md:py-20 py-10 px-5'>
        {/* left */}
        <div className="left mb-10 lg:mb-0 md:mb-0 sm:mb-0">
            <h2 className='text-white lg:text-5xl md:text-5xl font-bold mb-5 text-center text-3xl lg:text-start md:text-start sm:text-start'>Enjoy on your TV</h2>
            <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>Watch on smart TVs, PlayStation, Xbox, <br className='hidden lg:block md:block' /> Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        {/* right */}
        <div className="right">
            <video className='lg:w-[35em] md:w-[35em] w-[30em]' autoPlay={true} muted>
                <source src='/video/v1.mp4' type='video/mp4'/>
            </video>
        </div>
    </div>
    <div className="hr_line"></div>
    </>
  )
}
