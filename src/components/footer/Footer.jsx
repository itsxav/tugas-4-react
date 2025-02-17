import React from 'react'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

const Footer = () => {
  return (
    <>
    <footer className='bg-gradient-to-b from-red-800 to-red-200 mt-10'>
        <div className='flex  text-[white] space-x-8 md:space-x-10 lg:space-x-36 py-5 md:py-7 lg:py-8'>
            <div className='ml-2 md:ml-20'>
                <div>
                    <h1 className='text-sm md:text-xl lg:text-2xl'>Social Media</h1>        
                </div>
            <div className='flex-col  space-y-2 md:space-y-4 lg:space-y-6 py-2 lg:py-5'>
                <div className='flex space-x-2'>
                    <img className='w-4 h-4  md:w-5 md:h-5 lg:w-6 lg:h-6' src={fb} alt="" />
                    <h1 className='text-[9px] md:text-xs lg:text-sm'>Japan C&F Offical</h1>
                </div>
                <div className='flex space-x-2'>
                <img className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' src={ig} alt="" />
                    <h1 className='text-[9px] md:text-xs lg:text-sm'>JapanC&F_OfficalID</h1>
                </div>
                <div className='flex space-x-2'>
                <img className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' src={twitter} alt="" />
                    <h1 className='text-[9px] md:text-xs lg:text-sm'>JapanC&FOffical</h1>
                </div>     
            </div>
        </div>
            <div className=' px-3 md:pl-20  ' >
                <div>
                    <h1 className='text-sm md:text-xl lg:text-2xl'>Punya Pertanyaan?</h1>        
                </div>
                <div className='flex-col space-y-2 md:space-y-4 lg:space-y-6 py-2 md:py-3 lg:py-5'>
                    <div className='flex space-x-2'>
                        <img className='w-4 h-4 lg:w-6 lg:h-6' src={location} alt="" />
                        <h1 className='text-[9px] md:text-xs  lg:text-sm'>RT.13/RW.12, Sunter Jaya, Tanjung Priok, North Jakarta City, Jakarta 14350</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <img className='w-4 h-4 lg:w-6 lg:h-6' src={phone} alt="" />
                        <h1 className='text-[9px] md:text-xs  lg:text-sm'>0823-4670-5288</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <img className='w-4 h-4 lg:w-6 lg:h-6' src={email} alt="" />
                        <h1 className='text-[9px] md:text-xs lg:text-sm'>japanculturefood@gmail.coml</h1>
                    </div>     
                </div>
            </div>
        </div>
        <div>
            <p className='text-[9px] md:text-base lg:text-lg text-center font-bold text-red-800'>Copyright © 2022 All rights reserved | PT. Jepang Indonesia</p>
        </div>
    </footer>
    </>
  )
}

export default Footer