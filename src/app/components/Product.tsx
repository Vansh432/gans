import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="w-[22rem] mx-auto my-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product Image */}
        <div className="w-[85%] m-auto overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://5.imimg.com/data5/SELLER/Default/2024/5/417270131/ZK/MS/VF/31629557/gps-tracker-india-box-png-500x500.png"
            alt="Nike Air Max"
          />
        </div>

        {/* Product Info */}
        <div className="p-5 relative bg-[#94c4d529]">
          <span className='flex justify-center items-center absolute top-[-40px] right-[15px] text-[#fff] bg-[#26848e] p-[5px_10px]  text-[.8rem] rounded-[5px] text-[#feff00]'> <FaStar className='mr-[3px]' />4.7</span>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Onelap Go
          Deal Price:<span className='text-[#04aa32]'> ₹2090</span>  <del className='text-[#e307d5]'> <span className="text-lg font-semibold ">₹5549.99</span></del></h2>
          <p className="text-gray-600 text-sm mb-4">
            Experience ultimate comfort and style with these iconic Nike Air Max sneakers.
          </p>
          
          {/* Price Row */}
          <div className="flex justify-between items-center">
          
            <button className="bg-[#ffaa00] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#e39800] transition-colors duration-[1s]">
              Add to Cart
            </button>
            <button className="bg-[#26848e] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#174347] transition-colors duration-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
