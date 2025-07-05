import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import usegetSingleProduct from '../hook/usegetSingleProduct';
function ProductDetails() {
  const {id}=useParams()
  const singleProduct=usegetSingleProduct(id)

  if (singleProduct === null) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="w-full h-64 object-contain mb-4"
        />
        <h1 className="text-xl font-bold mb-2">{singleProduct.title}</h1>
        <p className="text-gray-600 mb-2">{singleProduct.category}</p>
        <p className="text-gray-800 mb-4">{singleProduct.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">${singleProduct.price}</span>
          <span className="text-sm text-yellow-500">⭐ {singleProduct.rating?.rate}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
