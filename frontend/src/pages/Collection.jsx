import {React, use, useEffect, useState} from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

   const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = ()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-to-high":
        setFilterProducts(fpCopy.sort((a, b)=> a.price - b.price));
        break;
      case "high-to-low":
        setFilterProducts(fpCopy.sort((a, b)=> b.price - a.price));
        break;
      default:
        applyFilter();
    }
  }

   
  useEffect(()=>{
   applyFilter();
  },[category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200'>
      {/* // {filter options} */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* {Category Filter} */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col text-sm font-light gap-2 text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"}  onChange={toggleCategory} /> Men
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* {subcategory filter} */}
         <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col text-sm font-light gap-2 text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>

      </div>
      {/* {right side} */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS"/>
          <select onChange={(e)=> setSortType(e.target.value)} className='border-2 border-gray-300 px-2 text-sm '>
            <option value="relevant">Most Relevant</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
           {/* {map products} */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10'>
       {
        filterProducts.map((item, index)=>(
          <ProductItem key={index} name={item.name} price={item.price} image={item.image} id={item._id}/>
        ))
       }
      </div>
      </div>
   
    </div>
  )
}

export default Collection
