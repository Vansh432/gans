'use client';
import FAQItem from './FAQItem';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
const faqs = [
  {
    question: 'Can the same vehicle be tracked by two mobiles running the app?',
    answer: 'Yes, you can track your vehicles from any number of phones at the same time.',
    seller: 'Amazon India Seller',
  },
  {
    question: 'Can I install the product myself?',
    answer: 'Yes, anyone can easily install the product with simple tools like screwdrivers. Our customer support team will guide you through the process.',
    seller: 'Amazon India Seller',
  },
];

const initialReviews = [
  {
    rating: 5,
    title: 'Excellent',
    content: 'This is a very good quality product, the build quality is great and anyone can install it on their own. The tracking is very accurate and quick.',
    author: 'Shubham Sami',
    verified: true,
  },
  {
    rating: 5,
    title: 'Perfect tracker for your vehicle.',
    content: 'Product is awesome. Installation is easy if you have basic circuit knowledge.',
    author: 'Amazon Customer',
    verified: true,
  },
];

const averageRating = 4.7;
const totalRatings = 159;
const totalReviews = '12,000+';

export default function Singlepageproduct(props) {
  const [showMore, setShowMore] = useState(false);
  const [pincode, setPincode] = useState('');
  const [productData, setProductData] = useState({});
  const [subscriptionOptions, setSubscriptionOptions] = useState([]);
  const [featuresOptions, setFeaturesOptions] = useState([]);

  useEffect(() => {
    const { id } = props;
    console.log(id); // Log the slug value from the URL

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`https://gansgps.com/admin/api/product/product_id_${id}`);
        setProductData(response.data.product);
        setSubscriptionOptions(response.data.product.subscription || []);
        setFeaturesOptions(response.data.product.features)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [props]);

  const features = [featuresOptions];

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const checkPincode = () => {
    if (!pincode) {
      alert('Please enter your PIN Code');
    } else {
      alert('Delivery Available');
    }
  };

  return (
    <div className="container p-6">
      {/* Main wrapper for the product page */}
      <div className="flex justify-evenly">
        {/* Left: Image Section (Sticky container) */}
        <div className="sticky top-[100px] flex justify-center self-start w-[40%] mr-[20px]">
          <div className='mr-[10px]'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='w-[70px] h-[70px] mb-[10px]'>
                <img src="https://5.imImage.com/data5/SELLER/Default/2024/5/417270131/ZK/MS/VF/31629557/gps-tracker-india-box-png-500x500.png" alt='loading ..' className="rounded-lg bg-black w-[100%] h-[100%]" />
              </div>
            ))}
          </div>
          <div className='w-[90%]'>
            <img
              src="https://5.imImage.com/data5/SELLER/Default/2024/5/417270131/ZK/MS/VF/31629557/gps-tracker-india-box-png-500x500.png"
              alt="Product Image"
              className="rounded-lg bg-black w-[100%] h-[400px]"
            />
            <div className='mt-[10px]'>
              <button className="bg-yellow-500 w-[49%] text-white py-2 mr-[5px] rounded-[5px] mb-4">Buy Now</button>
              <button className="bg-orange-500 w-[49%] text-white py-2 rounded-[5px]">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Right: Product Details (Scrollable) */}
        <div className="overflow-y-auto h-fit w-[60%]">
          <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
          <p className="text-gray-600 mb-[15px]">{productData.description}</p>

          <div className="flex items-center mb-[15px]">
            <span className="flex justify-center items-center p-[5px] bg-[#26848E] rounded-[5px] text-[.75rem] text-[#fff] w-fit mr-[10px]">
              <FaStar className='mr-[3px]' /> 4.8
            </span>
            <span className='text-[#746e6e] text-[.9rem]'>{totalReviews} Reviews</span>
          </div>

          <span className="text-xl font-semibold text-green-600 mb-2 block">
            ₹{productData.old_price} <span className="line-through text-[16px] text-gray-500">₹{productData.new_price}</span> 76% Off
          </span>
          <span className='text-[.9rem] text-[#746e6e] '>Inclusive of all taxes</span>

          <div className='mt-4 mb-[30px]'>
            <h3 className='text-[1.1rem] font-bold mb-[10px]'>Choose Variant</h3>
            <div className='flex items-center flex-wrap gap-[10px]'>
              {subscriptionOptions.map((option, index) => (
                <div key={index} className='w-[200px] h-[100px] border-2 rounded-[10px] p-[10px] border-[2px] border-[#26848E] cursor-pointer'>
                  <h5 className='text-[1.1rem] font-bold mb-[5px]'>{option.old_price}</h5>
                  <p className='text-[.9rem] mb-[5px]'>{option.plan_name}</p>
                  <h5 className='text-[.9rem] font-bold'>{option.new_price} per year Test</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="my-6 font-sans mb-[30px]">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">Delivery :</span>
              <input
                type="text"
                placeholder="Enter Delivery Pincode"
                onChange={handlePincodeChange}
                className="w-[400px] py-2 border border-gray-300 rounded-[5px] flex-1 pl-[5px]"
                value={pincode}
              />
              <button className="px-[30px] py-2 bg-[#26848E] text-white rounded-[5px] hover:bg-teal-600" onClick={checkPincode}>
                Check
              </button>
            </div>

            <div className="flex justify-between mb-6 border-2 p-[10px] rounded-[5px]">
              <div className="w-1/2 pr-2">
                <h3 className="font-semibold mb-3 text-[1.3rem]">Highlights</h3>
                <ul className="list-disc list-inside text-[1rem] space-y-5">
                  <li>Battery backup varies depending on the use case of the customer. The backup reported by our customers ranges between 12-48 hours on an average basis.</li>
                  <li>In case of poor network signals, the battery might last a little longer as the GPS would not continuously be connecting to satellites.</li>
                </ul>
              </div>
              <div className="w-1/2 pl-4 border-l-2">
                <h3 className="font-semibold mb-3 text-[1.3rem]">Specifications</h3>
                <ul className="list-disc list-inside text-[1rem] space-y-5">
                  <li>Real-Time Tracking: Yes</li>
                  <li>Battery Type: Li-ion</li>
                  <li>Battery Capacity: 10,000 mAh</li>
                  <li>Operating Temperature: -20°C to 70°C</li>
                  <li>Material: ABS Plastic</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className='text-[1.3rem] font-semibold mb-3'>Product Features</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {features.map((feature, index) => (
              <li key={index} className='border p-4 rounded-lg flex items-start space-x-2'>
                <span className='text-2xl'>{feature.image}</span>
                <div>
                  <h4 className='font-bold'>{feature.heading}</h4>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className='text-[1.3rem] font-semibold mb-3'>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} seller={faq.seller} />
          ))}

          <div className='my-4'>
            <h2 className='text-[1.3rem] font-semibold mb-3'>Customer Reviews</h2>
            {initialReviews.map((review, index) => (
              <div key={index} className="border-b border-gray-300 py-4 mb-4">
                <div className="flex items-center mb-1">
                  <span className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                  <span className="text-gray-600 ml-2">{review.title}</span>
                </div>
                <p className="text-gray-700">{review.content}</p>
                <p className="text-sm text-gray-500">- {review.author} {review.verified && <span>(Verified)</span>}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
