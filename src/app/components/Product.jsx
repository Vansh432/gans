'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Checkout from './Checkout';
import Image from 'next/image';
const ProductCard = (props) => {
  const router = useRouter();
  const { id, name, old_price, new_price, feature_image, description } = props.product;
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  // Close the modal
  const closeModal = () => setCheckoutPopup(false);

  async function handleBuy(e) {
    e.stopPropagation(); // Stop the card click event

    const token = localStorage.getItem('token');
    const customer_id = localStorage.getItem('customer_id');
    


    if (!token || !customer_id) {
      console.log('Authentication required');
       router.push('/authentication')
      return;
    } else {
      
      setCheckoutPopup(true); // Open modal for checkout
    }
  }

  return (
    <>
     {/* Modal for Checkout */}
     {checkoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[500px] p-6 relative">
           
            <Checkout closemodel={closeModal} product_id={id} amount={new_price} product_name={name}/>
          </div>
        </div>
      )}
      <div className="w-[22rem] my-8 relative z-1">
        <div 
          className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl"
          onClick={() => router.push(`/Product/${id}`)} // Redirect to product page
          style={{ zIndex: 1 }}
        >
          {/* Product Image */}
          <div className="w-[85%] h-[200px] m-auto overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={`https://gansgps.com/admin/storage/app/public/${feature_image}`}
              alt={name}
            />
          </div>

          {/* Product Info */}
          <div className="p-5 relative bg-[#94c4d529]">
            <span className="flex justify-center items-center absolute top-[-40px] right-[15px] text-[#fff] bg-[#26848e] p-[5px_10px] text-[.8rem] rounded-[5px] text-[#feff00]">
              <FaStar className="mr-[3px]" />4.7
            </span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {name}
              <br />
              Deal Price:<span className="text-[#04aa32] mr-[5px]"> ₹{new_price}</span>
              <del className="text-[#e307d5]">
                <span className="text-lg font-semibold">₹{old_price}</span>
              </del>
            </h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            {/* Price Row */}
            <div className="flex justify-between items-center">
              <button className="bg-[#ffaa00] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#e39800] transition-colors duration-[1s]">
                Add to Cart
              </button>
              <button 
                onClick={(e) => handleBuy(e)} // Open modal for checkout
                className="bg-[#26848e] relative text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#174347] transition-colors duration-400 z-100"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ProductCard;
