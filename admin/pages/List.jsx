import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../src/App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({token}) => {
   const [list, setList] = useState([]);

   const fetchList = async ()=>{
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if(response.data.success){
        setList(response.data.products);
        console.log(list);
      } else {
        toast.error(response.data.message);
      }
      
    } catch (error) {
      toast.error(error.message);
    }
   }

   const removeProduct = async (id)=>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}});
    if(response.data.success){
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message)
    }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
   }

   useEffect(()=>{
     fetchList();
   },[])
  
  return (
    <>
      <h1 className='mb-2'>Product List</h1>
      <div className='flex flex-col gap-2'>
        {/* {product list table} */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-3 border border-gray-200 bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* {product list items} */}
        {
          list.map((item, index)=>(
            <div key={index} className='grid grid-cols-[1fr 3fr 1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-3 border border-gray-200 bg-white text-sm'>
              <img className='w-12' src={item.images[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=> removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
