import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t border-gray-200'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col my-10 md:flex-row gap-10 mb-28 justify-center'>
         <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
             <p className='font-semibold text-xl text-gray-600'>Our Store</p>
             <p className='text-gray-500'>54709 williams Station <br /> Suite 350, Washington, USA</p>
             <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
             <p className='font-semibold text-xl text-gray-600'>Careers at Forever </p>
             <p className='text-gray-500'>Learn more about our team and job openings</p>
             <button className='border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
         </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default Contact
