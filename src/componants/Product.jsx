import React from 'react';
import ProductCard from './ProductCard';
import { itemData } from '../utills/data';

function Product() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {itemData.map((item) => (
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
