import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row my-16 gap-16'>
       <img className='w-full md:max-w-[480px]' src={assets.about_img} alt="" />
       <div className='flex flex-col gap-6 md:w-2/4 text-gray-600 justify-center'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nihil possimus commodi sapiente debitis architecto fuga iusto numquam nisi at porro, nam repellat ipsam pariatur ut omnis, quia voluptatem. Officia voluptatibus ex id praesentium, vero excepturi commodi quaerat aliquid expedita.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio impedit tempora, expedita tempore adipisci iste molestiae sint tenetur accusamus debitis, voluptatum rem iure sequi laudantium perferendis temporibus nihil nostrum.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore corporis optio quibusdam sapiente veritatis, maxime temporibus deleniti dicta mollitia doloremque, rerum molestiae dolorem voluptatum modi quasi dolorum vel expedita.</p>
       </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border border-gray-200 px-10 py-8 md:px-16 md:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit dolorum assumenda! Numquam laboriosam amet repellat, qui odit asperiores provident consectetur libero doloremque aspernatur. Quisquam!</p>
         </div>
         <div className='border border-gray-200 px-10 py-8 md:px-16 md:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit dolorum assumenda! Numquam laboriosam amet repellat, qui odit asperiores provident consectetur libero doloremque aspernatur. Quisquam!</p>
         </div>
         <div className='border border-gray-200 px-10 py-8 md:px-16 md:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit dolorum assumenda! Numquam laboriosam amet repellat, qui odit asperiores provident consectetur libero doloremque aspernatur. Quisquam!</p>
         </div>
         
      </div>
      <Newsletter />
    </div>
  )
}

export default About
