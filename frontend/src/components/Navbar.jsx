import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className='flex justify-between items-center py-5 font-medium'>
       <Link to={"/"}><img src={assets.logo} className='w-36' alt="" /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
            <NavLink to={"/"} className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={"/about"} className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
          <div className='group relative'>
            <Link to={'/login'}><img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' /></Link>
            <div className='group-hover:block hidden absolute right-0 pt-4 dropdown-menu'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
                    <p className='hover:text-black cursor-pointer'>My Profile</p>
                    <p className='hover:text-black cursor-pointer'>Orders</p>
                    <p className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div>
        <Link to={"/cart"} className='relative'>
          <img src={assets.cart_icon} alt="" className='w-5 min-w-5 cursor-pointer' />
          <p className='absolute right-[-5px] bottom-[-5px] leading-4 bg-black text-white text-center w-4 aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />
        </div>
        {/* {sidebar for small screen} */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
         <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-t border-gray-300" to={"/"}>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-t border-gray-300" to={"/collection"}>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-t border-gray-300" to={"/about"}>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-t border-b border-gray-300" to={"/contact"}>CONTACT</NavLink>
         </div>
        </div>
        
    </div>
  )
}

export default Navbar;

