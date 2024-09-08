import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#182B3C] text-white p-0 rounded-[20px] w-3/12 shadow-lg m-5 relative">
      <div className="bg-[#16A085] text-white px-3 py-1 rounded-b-lg absolute top-0 right-5 font-bold">
        <span className="text-xl">&#9733;</span> {product.rating}
      </div>
      <div className="text-center mb-0 p-3 pb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-t-lg"
        />
      </div>
      <div className="bg-[#1F3A4C] shadow-lg rounded-[20px] mb-4 p-4">
        <div className="flex justify-between">
          <div className="w-full pr-4">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-sm mb-4">
              {product.description}
            </p>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center text-[#00BCD4] text-[15px]">
                <span className=" font-bold text-white">Deal Price: </span>
                <span className=" font-bold ml-2 text-white">₹{product.dealPrice}</span>
              </div>
              <div className="flex items-center text-gray-400 text-[13px]">
                <span className=" font-bold">M.R.P: </span>
                <span className=" font-bold ml-2 line-through">₹{product.mrp}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-[#26848e] w-full text-white py-2 px-6 rounded-lg font-bold hover:bg-[#182B3C] transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
