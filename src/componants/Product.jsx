import React, { useState, useEffect } from 'react';
import ProductCard, { HOF } from './ProductCard';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Product() {
  const [listofProduct, setlistofProduct] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);
  const [searchText, setsearchText] = useState("");

  // Enhanced HOF Component
  const EnhancedCard = HOF(ProductCard);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    setlistofProduct(response);
    setfilterProduct(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const TopProduct = () => {
    const result = listofProduct.filter(product => product.rating.rate >= 4);
    setfilterProduct(result);
  };

  const handleSearch = () => {
    const result = listofProduct.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterProduct(result);
  };

  return listofProduct.length < 1 ? <Loading /> : (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Products..."
          className="px-4 py-2 border rounded"
          onChange={(e) => setsearchText(e.target.value)}
          value={searchText}
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
        <button className='p-2 bg-green-500 text-white rounded' onClick={TopProduct}>
          Top Rated Products
        </button>
        <button className='p-2 bg-gray-500 text-white rounded' onClick={() => setfilterProduct(listofProduct)}>
          Show All
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {filterProduct.map((item) => (
          <Link key={item.id} to={`/productdetails/${item.id}`}>
            {item.rating.rate >= 4 ? (
              <EnhancedCard
                title={item.title}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ) : (
              <ProductCard
                title={item.title}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
