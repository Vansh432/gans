// components/StepCarousel.js
'use client'
import Image from 'next/image';
import {step2,step4,installHardware} from '../Assets/Main'
import { useState, useEffect } from 'react';

const steps = [
  {
    title: 'Step 1',
    heading:"You will Need a Hardware",
    description: 'A Hardware is needed to transmit the real time location of the vehicle to Onelap cloud server',
    image: '/images/step1.png',
    color:'#f2680c'
  },
  {
    title: 'Step 2',
    heading:"you will Need a Sim Card",
    description: 'You will need a Sim Card. The hardware needs internet connectivity to send the data over GSM network.',
    image: step2.src,
    color:'#9D87F2'
  },
  {
    title: 'Step 3',
    heading:"Install the hardware",
    description: 'Get the hardware installed with a help of any local technician near you',
    image: installHardware.src,
    color:'#2ddb02'
  },
  {
    title: 'Step 4',
    heading:"Activate the hardware",
    description: 'Download Onelap Telematics App from playstore and signup and call our customer support team',
    image: step4.src,
    color:'#000'
  },
];

const StepCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    // Cleanup interval on component unmount
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
  };
 
  return (
    <div className="relative mx-auto max-w-4xl text-center mt-[70px] p-[50px]">
      <h2 className="text-[1.8rem]  font-bold">Getting Started in 4 Steps</h2>

      <div className="relative overflow-hidden h-fit">
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {steps.map((step, index) => (
            <div key={index} className={`min-w-full flex flex-col justify-center   h-[400px] mt-[50px] rounded-[10px] shadow-lg`} style={{background:`${step.color}`}}>
              <div

                className="text-[#fff] flex justify-between w-[100%]  h-[100%]"
              >
                <div className='w-[50%]  pt-[45px] text-left pl-[30px]'>
                <h1 className="text-4xl text-[#26848E] font-semibold mb-4">{step.title}</h1>
                <h2 className={`text-[1.7rem]  text-[#fff] font-bold mb-[20px]`}>{step.heading}</h2>             
                <p className="text-[#fff] text-[1.2rem] mb-[40px]">{step.description}</p>
                <a href="#" className={`p-[10px_30px] bg-[#fff] rounded-[5px] text-[${step.color}]`}style={{color:`${step.color}`}}>Select Your Plan</a>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
               
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-[100]"
                />
                </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-[#26848E] text-white p-2 w-[40px] h-[40px] flex justify-center items-center rounded-full"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 bg-[#26848E] text-white p-2 w-[40px] h-[40px] flex justify-center items-center   rounded-full"
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Dots for navigation */}
      <div className="mt-6 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StepCarousel;
