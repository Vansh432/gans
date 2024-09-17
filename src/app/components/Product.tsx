import React from 'react';

const ProductCard = () => {
  return (
    <div className="w-[15rem] mx-auto my-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product Image */}
        <div className="h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://5.imimg.com/data5/SELLER/Default/2024/5/417270131/ZK/MS/VF/31629557/gps-tracker-india-box-png-500x500.png"
            alt="Nike Air Max"
          />
        </div>

        {/* Product Info */}
        <div className="p-5 bg-[#94c4d529]">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Nike Air Max</h2>
          <p className="text-gray-600 text-sm mb-4">
            Experience ultimate comfort and style with these iconic Nike Air Max sneakers.
          </p>
          
          {/* Price Row */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-red-600">$149.99</span>
            <button className="bg-[#26848e] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#174347] transition-colors duration-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
