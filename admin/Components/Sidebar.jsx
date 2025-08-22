import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../src/assets/assets'

const Sidebar = () => {
    
  
  return (
    <div className='w-[18%] border-r-2 min-h-screen border-gray-200'>
      <div className='flex flex-col gap-4 pl-[20%] text-[15px]'>

        <NavLink className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg border-r-0`} to={'/add'}>
         <img className='w-5 h-5' src={assets.add_icon} alt="" />
         <p className='hidden md:block'>Add Item</p>
        </NavLink>

         <NavLink className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg border-r-0 `} to={'/list'}>
         <img className='w-5 h-5' src={assets.order_icon} alt="" />
         <p className='hidden md:block'>List Item</p>
        </NavLink>

         <NavLink className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg border-r-0 `} to={'/orders'}>
         <img className='w-5 h-5' src={assets.order_icon} alt="" />
         <p className='hidden md:block'>Order</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
