import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto my-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product Image */}
        <div className="h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Nike Air Max"
          />
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Nike Air Max</h2>
          <p className="text-gray-600 text-sm mb-4">
            Experience ultimate comfort and style with these iconic Nike Air Max sneakers.
          </p>
          
          {/* Price Row */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-red-600">$149.99</span>
            <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-red-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
