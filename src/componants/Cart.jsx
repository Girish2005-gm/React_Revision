import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  if (cartItems.length === 0) {
    return <h1 className="text-center mt-10 text-2xl">Cart is Empty 🛒</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">Cart Items-{cartItems.length}</h1>
      <div className="flex flex-col justify-center gap-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6  w-full flex"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-contain mb-4"
            />
            <div>
              <h1 className="text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-gray-600 mb-2">{item.category}</p>
              <p className="text-gray-800 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
