"use client";
import React, { useState } from "react";
import { Rupay } from "../Assets/Main";
import Image from "next/image";

// Define the interface for cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // assuming Rupay is a string URL
}

const Cart: React.FC = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Vinova Ultra 256GB Original Snapdragon Android Phone",
      price: 120,
      quantity: 1,
      image: Rupay,
    },
    {
      id: 2,
      name: "Vinova Mobile Phone 512GB Original Black",
      price: 240,
      quantity: 2,
      image: Rupay,
    },
  ]);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 30; // Flat rate for simplicity
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Products List */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
            {/* Header Row */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h2 className="flex-1 text-lg font-semibold">Product</h2>
              <h2 className="w-1/4 text-lg font-semibold text-center">
                Quantity
              </h2>
              <h2 className="w-1/4 text-lg font-semibold text-right">Total</h2>
              <h2 className="w-1/12"></h2>{" "}
              {/* Placeholder for the delete button */}
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center w-auto bg-gray-200 rounded-lg px-2 py-1">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="text-gray-600 p-1 transition-transform duration-150 ease-in-out transform hover:scale-110 focus:scale-110"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="text-gray-600 p-1 transition-transform duration-150 ease-in-out transform hover:scale-110 focus:scale-110"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold w-1/4 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 w-1/12 ml-4"
                >
                  🗑️
                </button>
              </div>
            ))}
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border p-2 rounded-lg w-1/2"
              />
              <button className="bg-[#26848e] text-white p-2 rounded ml-2">
                Apply Coupon
              </button>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-lg mt-6 lg:mt-0 lg:ml-4">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between border-b pb-4 mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col border-b pb-4 mb-4">
              <span className="mb-4">Shipping</span>
              <div>
                <label className="block mb-2">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                    defaultChecked
                  />
                  Flat rate: $30.00
                </label>
                <label className="block mb-2">
                  <input type="radio" name="shipping" className="mr-2" />
                  Local pickup: $30.00
                </label>
                <p className="text-gray-500 mt-1">
                  Shipping options will be updated during checkout.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-b pb-4 mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#26848e] text-white p-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
