import React from 'react';

export default function Header() {
  return (
    <header className="relative bg-cover bg-center h-[99.5vh] flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(45deg,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url("https://media.istockphoto.com/id/1468534025/vector/city-map-navigation-location-tracks-dashboard-city-street-road-city-streets-and-blocks-route.jpg?s=2048x2048&w=is&k=20&c=5FGSgXozeEiKeQlGFEFKHc_NF2IqcC0hWm0g88zjSI0=")' }}>
   
{/* 
      <div className="relative z-10 text-center p-6 max-w-xl mx-auto ">
        <h1 className="text-4xl font-bold text-[#fff]">
          Stay Connected <br /> To What Matters Most
        </h1>
        <p className="text-gray-600 my-4">
          Empowering you with Realtime GPS tracking for peace of mind
        </p>

        <div className="flex items-center justify-center mt-6">
          <input
            type="text"
            placeholder="Enter your details"
            className="w-full md:w-2/3 p-4 rounded-l-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-500 text-white p-4 rounded-r-full hover:bg-green-600 transition duration-300">
            Talk to expert
          </button>
        </div>
      </div> */}

      {/* Icons positioned on the background
      <div className="absolute top-20 left-1/4 z-10">
        <img src="/path-to-person-icon.png" alt="Person Icon" className="h-16 w-16" />
      </div>
      <div className="absolute top-32 right-1/4 z-10">
        <img src="/path-to-suitcase-icon.png" alt="Suitcase Icon" className="h-16 w-16" />
      </div>
      <div className="absolute top-16 right-1/3 z-10">
        <img src="/path-to-car-icon.png" alt="Car Icon" className="h-16 w-16" />
      </div> */}
    </header>
  );
}
