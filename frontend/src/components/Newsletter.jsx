import React from 'react'

const Newsletter = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl text-gray-800 font-medium'>Subcribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, esse?</p>

      <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input required type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' />
        <button className='bg-black text-white text-xs px-10 py-4 '>SUBCRIBE</button>
      </form>
    </div>


  )
}

export default Newsletter
