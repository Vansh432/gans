import React from "react";
import ProductCard from "./ProductCard";
import {ProductImage1} from '../../Assets/Main'; // Imported image

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "PRODUCT NAME 1",
      description: "Lorem ipsum dolor sit amet, ederereli consectetur adipis.",
      dealPrice: 3299,
      mrp: 10880,
      rating: 4.5,
      image: ProductImage1, // Using imported image
    },
    {
      id: 2,
      name: "PRODUCT NAME 2",
      description: "Lorem ipsum dolor sit amet, ederereli consectetur adipis.",
      dealPrice: 2999,
      mrp: 9999,
      rating: 4.2,
      image: ProductImage1, // Replace with actual path if not using imports
    },
    // Add more products here...
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;