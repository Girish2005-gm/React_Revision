import React from 'react';
import ProductCard from './ProductCard';
import { itemData } from '../utills/data';
import { useState, useEffect } from 'react';
import Loading from './Loading';
function Product() {
  // const [listofProduct, setlistofProduct] = useState(itemData)
  // function TopProduct(){
  //    const result=listofProduct.filter((product)=>product.rating.rate>=4);
  //    setlistofProduct(result);
  // }
  const [listofProduct, setlistofProduct] = useState([])
  const [filterProduct,setfilterProduct]=useState([])
  const [searchText, setsearchText] = useState("")
  const fatchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const Response = await data.json();
    console.log(Response);
    setlistofProduct(Response)
    setfilterProduct(Response)
  }
  useEffect(() => {
    fatchData();
  }, [])
  //conditional rendering
  // if(listofProduct.length<1){
  //   return <Loading/>
  // }

  function TopProduct() {
    const result = listofProduct.filter((product) => product.rating.rate >= 4);
    setlistofProduct(result);
  }
  return listofProduct.length < 1 ? <Loading /> : (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <input type="text" onChange={(e) => setsearchText(e.target.value)} value={searchText} />
      <button onClick={() => {
        const filterData = listofProduct.filter((product) => {
          const datafilter = product.title.toLowerCase().includes(searchText.toLowerCase());
          return datafilter;
        })
        setfilterProduct(filterData)
      }}>Search</button>

      <button className='p-4 bg-green-300 rounded-full' onClick={TopProduct}>Top Rated Product</button>
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {filterProduct.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
