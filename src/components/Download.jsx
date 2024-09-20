import React from 'react'

export default function Download() {
  return (
    <>
    <div className='main flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap  justify-evenly items-center lg:py-20 md:py-20 py-10 px-5'>
        {/* left */}
        <div className="left order-last lg:order-first md:order-first">
            <video className='lg:w-[20em] md:w-[20em] w-[20em]' autoPlay={true} muted>
                <source src='/video/v2.mp4' type='video/mp4'/>
            </video>
        </div>
        {/* right */}
        <div className="right mb-10 lg:mb-0 md:mb-0 sm:mb-0">
            <h2 className='text-white lg:text-5xl md:text-5xl font-bold mb-5 text-center text-3xl lg:text-start md:text-start sm:text-start'>Download your shows <br className='' /> to watch offline</h2>
            <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>Save your favourites easily and always have <br /> something to watch.</p>
        </div>
    </div>
    <div className="hr_line"></div>
    </>
  )
}
