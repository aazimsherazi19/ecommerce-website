import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base'>
      <div>
        <img src={assets.logo} className='w-32 mb-5' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis tempora odio asperiores neque eos corporis, ipsum dolores ad. Eum voluptas iste blanditiis ullam necessitatibus!</p>
      </div>

      <div>
        <p className='font-medium text-xl mb-5'>COMPANY</p>
        <ul className='flex-flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
        <ul className='flex-flex-col gap-1 text-gray-600'>
            <li>+92-323-2643-515</li>
            <li>contact@forever.com</li>
        </ul>
      </div>
    </div>

    <div>
     <hr className='border-gray-300'/>
     <p className='text-sm text-center py-5'>Copyright 2025@forever.com - All rights reserved</p>
    </div>
     </div>
  )
}

export default Footer
