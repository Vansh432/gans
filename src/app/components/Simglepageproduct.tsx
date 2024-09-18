// pages/product.js
import Image from "next/image";

export default function Singlepageproduct() {
  return (
    <div className="container mx-auto p-6">
      {/* Main wrapper for the product page */}
      <div className="flex justify-evenly">
        {/* Left: Image Section (Sticky container) */}
        <div className="sticky top-0 self-start w-[35%]">
          <div>

          </div>
          <div>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/5/417270131/ZK/MS/VF/31629557/gps-tracker-india-box-png-500x500.png" // Replace with your image
            alt="Product Image"
            width={"90%"}
            height={"400px"}
            className="rounded-lg bg-black"
          />
          <div>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg mb-4">
            Buy Now
          </button>

          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
            Add to Cart
          </button>
          </div>
          </div>
        </div>

        {/* Right: Product Details (Scrollable) */}
        <div className="overflow-y-auto h-fit w-[50%]">
          <h1 className="text-3xl font-bold mb-4">Noise Colorfit Icon 2</h1>

          <p className="text-gray-600 mb-2">
            Display with Bluetooth Calling, AI Voice Assistant Smartwatch
          </p>

          <span className="text-xl font-semibold text-green-600 mb-2 block">
            ₹1,399 <span className="line-through text-gray-500">₹5,999</span> 76% Off
          </span>

         

          <h2 className="text-2xl font-semibold mt-6">Available Offers</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-4">
            <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
            <li>10% off up to ₹1,500 on HDFC Bank Credit Card Transactions</li>
            <li>10% off up to ₹1,750 on HDFC Bank Credit Card EMI Transactions</li>
            <li>Special Price: Get extra 35% off</li>
          </ul>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <p className="text-gray-600 mt-2">
              The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.
              The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.   The Noise Colorfit Icon 2 smartwatch brings you advanced features like AI voice assistant, Bluetooth calling, and a large 1.8'' display, making it a top choice for fitness and productivity enthusiasts.
            </p>
          </div>

          {/* Add more details or sections as needed */}
        </div>
      </div>
    </div>
  );
}
