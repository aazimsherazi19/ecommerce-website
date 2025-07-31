import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
     const bestProducts = products.filter((item)=> (item.bestseller));
        setBestSeller(bestProducts.slice(0, 5));
    },[])
  return (
    <div className='my-10'>
      <div className='py-8 text-center text-3xl'>
        <Title text1="BEST" text2="SELLER" />
        <p className='text-gray-600 text-xs sm:text-sm md:text-base w-3/4 m-auto'>Discover our best-selling products that customers love!</p>
      </div>
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-4'>
         {
        bestSeller.map((item, index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))
      }
     </div>
    </div>
  )
}

export default BestSeller
