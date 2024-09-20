import React from 'react'
import HeroSection from '../components/HeroSection'
import Enjoy from '../components/Enjoy'
import Download from '../components/Download'
import Watch from '../components/Watch'
import CreateProfile from '../components/CreateProfile'
import { faqData } from '../data/faqData'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Enjoy />
      <Download />
      <Watch />
      <CreateProfile />
      <div className="">
        <h2 className='text-white lg:text-5xl md:text-5xl text-3xl font-bold text-center py-10 '>Frequently Asked<br className='lg:hidden md:hidden sm:hidden' /> Questions</h2>
        <div className="mb-20">
          {faqData.map((item, index) => {
            const { title, desc } = item
            return (
              <Faq
                key={index}
                title={title}
                desc={desc}
              />
            )
          })}
        </div>
        <div className="lg:mb-16 md:mb-16 mb-10">
          <p className='text-white text-center lg:text-xl md:text-xl text-lg mb-5 lg:px-0 md:px-0 px-5'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              className='bg-[#1d1e1e] text-white text-lg py-3 px-3 lg:w-[40rem] md:w-[30rem] w-[20rem] rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none mb-5 lg:mb-0 md:mb-0'
              placeholder='Email address'
            />
            <button type='button' className='bg-[#e50815] flex items-center px-5 py-3 rounded-lg gap-2'>
              <p className='text-white text-xl font-bold'>Get Started</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hr_line"></div>
      </div>
      <Footer/>
    </>
  )
}
