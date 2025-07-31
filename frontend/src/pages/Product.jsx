import React, { use } from 'react'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState(null);
  
  const fetchProduct = async () => {
  const matchedProduct = products.find(item => item._id === productId);
  if (matchedProduct) {
    setProduct(matchedProduct);
    setImage(matchedProduct.image[0]);
  }
};
  useEffect(()=>{
  fetchProduct();
  },[productId]);

  return product ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
       {/* {Product Images} */}
       <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
         <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              product.image.map((item, index)=>(
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
         </div>
       <div className='w-full sm:w-[80%]'>
        <img src={image} className='w-full h-auto' alt="" />
       </div>
       </div>
       {/* {Product Info} */}
       <div className='flex-1'>
        <h2 className='text-2xl font-medium mt-2'>{product.name}</h2>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          <p className='pl-2'>(122)</p>
        </div>
        <p className='font-medium mt-5 text-3xl'>{currency}{product.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{product.description}</p>
        <div className='flex flex-col my-8 gap-4'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {
              product.sizes.map((item, index)=>(
                <button onClick={() => setSize(item)} className={`border px-4 py-2 bg-gray-100 ${item === size? "border-orange-500" : ""}`} key={index}>{item}</button>
              ))
            }
          </div>
        </div>
        <button onClick={()=> addToCart(product._id, size)} className='bg-black text-white px-8 py-3 active:bg-gray-700 text-sm'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5 text-gray-300' />
        <div className='mt-5 flex flex-col gap-1 text-sm text-gray-500'>
           <p>100% original product</p>
           <p>Cash on delivery available</p>
           <p>Easy return and exchange policy within 7 days</p>
        </div>
       </div>
      </div>
      {/* {description and reviews} */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-200 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='mt-5 text-sm text-gray-500 flex flex-col gap-4  border border-gray-200 px-6 py-6'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit officia assumenda dolor eveniet dolorum laborum excepturi nam tempora architecto, molestiae, saepe culpa vitae at, qui distinctio minus officiis odit. Perspiciatis ad eaque ea dolorum numquam est, nobis iure quam. Tempore maxime ipsa eligendi, a iusto labore nam voluptate nesciunt temporibus quibusdam cupiditate eius similique nisi! Ipsa totam dolorum ratione commodi sint est maiores, quos exercitationem fuga nostrum distinctio iste modi architecto explicabo obcaecati. Eveniet repellendus qui sit eligendi impedit?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, facilis sit adipisci ut explicabo illum temporibus a maxime error laboriosam voluptatem officiis autem nihil consequuntur praesentium enim mollitia itaque? Vel consequuntur magni suscipit ea! Exercitationem aliquam vitae id sequi quasi sapiente. Necessitatibus molestiae perferendis natus, vitae rerum inventore et sapiente, minima maxime commodi ullam doloremque eius quis fuga mollitia iure?</p>
        </div>
      </div>
      {/* {display related products} */}
      <RelatedProducts category={product.category} subCategory={product.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
