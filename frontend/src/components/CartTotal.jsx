import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const CartTotal = () => {
    const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
           <p>Subtotal</p>
           <p>{currency}{getCartAmount()}.00</p>
        </div>
       <hr className='text-gray-200' />
        <div className='flex justify-between'>
           <p>Delivery fee</p>
           <p>{getCartAmount() === 0 ? currency + 0 : (currency + delivery_fee)}.00</p>
        </div>
        <hr className='text-gray-200'/>
        <div className='flex justify-between'>
           <b>Total</b>
           <b>{getCartAmount() === 0 ? currency + 0 : currency + (getCartAmount() + delivery_fee)}.00</b>
        </div>

      </div>
    </div>
  )
}

export default CartTotal
