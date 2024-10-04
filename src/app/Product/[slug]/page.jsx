// 'use client' is not needed here; this is a server-side function

import { Singlepageproduct } from '../../components/Main'

// Define dynamic params
export async function generateStaticParams() {
  const products = await fetchProducts(); // Assuming you have a function to fetch products data

  return products.map(product => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  // Access the dynamic part of the URL
  console.log(params);
  
  return (
    <>
      <div className='flex gap-[10px] flex-wrap relative top-[80px] mb-[80px] mx-[110px]'>
        <Singlepageproduct id={params.slug} />
      </div>
    </>
  );
}

// Dummy function for fetching product data. Replace with actual fetch logic.
async function fetchProducts() {
  return [
    { slug: 'product-1' },
    { slug: 'product-2' },
    { slug: 'product-3' },
  ];
}
