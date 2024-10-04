'use client'
import { useState, useEffect } from 'react';
import Product from './Product';
import { wireless, wired } from '../Assets/Main';
import { FaCar, FaMotorcycle, FaSuitcase } from 'react-icons/fa';
import { GiBabyFace } from 'react-icons/gi';
import Image from 'next/image';
function Shop() {
  // State to hold wireless and wired products
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [wiredProducts, setWiredProducts] = useState([]);
  const [loadingWireless, setLoadingWireless] = useState(true);
  const [loadingWired, setLoadingWired] = useState(true);
  const [errorWireless, setErrorWireless] = useState('');
  const [errorWired, setErrorWired] = useState('');

  // Fetch wireless products from API
  useEffect(() => {
    const fetchWirelessProducts = async () => {
      try {
        const response = await fetch('https://gansgps.com/admin/api/products/category/category_id_24');
        const data = await response.json();
        console.log(data.products)
        setWirelessProducts(Object.values(data.products)); // Convert object to array
        setLoadingWireless(false);
      } catch (err) {
        setErrorWireless('Failed to fetch wireless products');
        setLoadingWireless(false);
      }
    };

    fetchWirelessProducts();
  }, []);

  // Fetch wired products from API
  useEffect(() => {
    const fetchWiredProducts = async () => {
      try {
        const response = await fetch('https://gansgps.com/admin/api/products/category/category_id_25');
        const data = await response.json();
        setWiredProducts(Object.values(data.products)); // Convert object to array
        setLoadingWired(false);
      } catch (err) {
        setErrorWired('Failed to fetch wired products');
        setLoadingWired(false);
      }
    };

    fetchWiredProducts();
  }, []);

  if (loadingWireless || loadingWired) {
    return <p>Loading...</p>;
  }

  if (errorWireless || errorWired) {
    return <p>{errorWireless || errorWired}</p>;
  }

  return (
    <div className='text-center mt-[80px] mx-[120px] relative ' >
      <h1 className='text-[#26848E] text-[1.8rem] font-[700] tracking-[.8px]'>Trusted GPS Tracking</h1>
      <p className='text-[.9rem] font-[700]'>Track Smarter with India’s Most Trusted GPS Solution</p>
      
      {/* Wireless GPS Tracker Section */}
      <div className='mt-[55px] text-left'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[1.3rem] flex justify-center items-center font-[700]'>
            <div className='p-[5px] rounded-[50%] bg-[#b0cbe44d] flex justify-center items-center mr-[10px]'>
              <img src={wireless.src} className='w-[25px] inline' alt="wireless gps tracker" />
            </div>
            Wireless GPS Tracker
          </h3>
          <div className="flex items-center space-x-4 text-[.8rem]">
            <span className="font-bold">Usable for:</span>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <GiBabyFace className="text-xl mr-2" />
              <span>KID</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaCar className="text-xl mr-2" />
              <span>CAR</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaMotorcycle className="text-xl mr-2" />
              <span>SCOOTER</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaSuitcase className="text-xl mr-2" />
              <span>LUGGAGE</span>
            </div>
          </div>
        </div>
        
        {/* Display wireless products */}
        <div className='flex gap-[20px] flex-wrap mt-[20px]'>
          {wirelessProducts.length > 0 ? (
            wirelessProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No wireless products found</p>
          )}
        </div>
      </div>

      {/* Wired GPS Tracker Section */}
      <div className='mt-[55px] text-left'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[1.3rem] flex justify-center items-center font-[700]'>
            <div className='p-[5px] rounded-[50%] bg-[#b0cbe44d] flex justify-center items-center mr-[10px]'>
              <img src={wired.src} className='w-[25px] inline' alt="wired gps tracker" />
            </div>
            Wired GPS Tracker
          </h3>
          <div className="flex items-center space-x-4 text-[.8rem]">
            <span className="font-bold">Usable for:</span>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <GiBabyFace className="text-xl mr-2" />
              <span>KID</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaCar className="text-xl mr-2" />
              <span>CAR</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaMotorcycle className="text-xl mr-2" />
              <span>SCOOTER</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaSuitcase className="text-xl mr-2" />
              <span>LUGGAGE</span>
            </div>
          </div>
        </div>
        
        {/* Display wired products */}
        <div className='flex gap-[10px] flex-wrap mt-[20px]'>
          {wiredProducts.length > 0 ? (
            wiredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No wired products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
