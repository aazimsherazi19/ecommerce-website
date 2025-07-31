import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className='flex gap-3'>
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300 ' type="text" placeholder='First Name' />
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="text" placeholder='Lastname' />
        </div>
        <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="email" placeholder='Email Address' />
        <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="text" placeholder='Street' />
        <div className='flex gap-3'>
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300 ' type="text" placeholder='City' />
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300 ' type="number" placeholder='Zipcode' />
         <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="text" placeholder='Country' />
        </div>
        <input className='border w-full py-1.5 px-3.5 rounded border-gray-300' type="number" placeholder='Phone' />
      </div>
      {/* {right side} */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
           <CartTotal />
        </div>
       <div className='mt-12'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          <div className='flex flex-col lg:flex-row gap-3'>
            <div onClick={()=> setMethod('stripe')} className='border border-gray-300 rounded p-2 px-3 flex items-center gap-3 cursor-pointer'>
               <p className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
             <div onClick={()=> setMethod('razorpay')} className='border border-gray-300 rounded p-2 px-3 flex items-center gap-3 cursor-pointer'>
               <p className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
             <div onClick={()=> setMethod('cod')} className='border border-gray-300 rounded p-2 px-3 flex items-center gap-3 cursor-pointer'>
               <p className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
               <p className='mx-4 text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
       </div>
        
      </div>
    </div>
  )
}

export default PlaceOrder
