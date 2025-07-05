import React from 'react';

function ProductCard(props) {
  const { title, image, category, rating } = props;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-sm transition hover:scale-105 hover:shadow-2xl duration-300">
      <img src={image} alt={title} className="w-full h-56 object-contain rounded-xl mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mb-1 capitalize">{category}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 font-semibold">{rating.rate}⭐</span>
        <span className="text-gray-500 text-sm ml-2">({rating.count} reviews)</span>
      </div>
    </div>
  );
}

export default ProductCard;

// HOF: Wraps ProductCard with "Best Seller" tag
export const HOF = (Component) => {
  return (props) => (
    <div>
      <div className='bg-black text-white p-2 mb-2 text-center rounded-md font-bold'>
        Best Seller
      </div>
      <Component {...props} />
    </div>
  );
};
