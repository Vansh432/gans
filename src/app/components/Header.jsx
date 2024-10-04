'use client'
import React, { useEffect, useState } from 'react';
import {Digital,MainSlider1, MainSlider2, MainSlider3, MainSlider4,childrenSafety,MainSlider5,buschildsafety, slidermain6} from '../Assets/Main'
// import { babelIncludeRegexes } from 'next/dist/build/webpack-config';
import Image from 'next/image';
export default function Header() {
  const [slide, setSlides] = useState(1);

  // Optional: Auto-slider functionality
  useEffect(() => {
    const changeSlider = setInterval(() => {
      setSlides((prevSlide) => (prevSlide % 4) + 1); // loop through slides 1-4
    }, 5000); // change slide every 5 seconds
    return () => { clearInterval(changeSlider); };
  }, []);



  
  const styles = {
    Slider_1: {
      backgroundImage: `url('${MainSlider1.src}')`,
    },
    Slider_2: {
      backgroundImage: `url('${MainSlider2.src}')`,
    },
    Slider_3: {
      backgroundImage: `url('${MainSlider3.src}')`,
    },
    Slider_4: {
      backgroundImage: `url('${MainSlider4.src}')`,
    },
    Slider_5:{
      backgroundImage: `url('${MainSlider5.src}')`,
    }
  };

  const handleDotClick = (index) => {
    setSlides(index);
  };

  return (
    <>
      {slide === 1 && (
        <header
          className="relative bg-cover bg-center h-[100vh] flex items-center justify-evenly pt-[40px] "
          style={styles.Slider_1}
        >
          <div className='text-[#000] text-center w-[25%]'>
            <h1 className='text-[2.5rem] font-[500] text-[#fff]'>
              <span>Never Lose Sight </span> of What Matters
            </h1>
            <p className='text-[.95rem] mb-[30px] text-[1.1rem] text-[#fff]'>
              Real-Time GPS Tracking for Complete Control and Assurance
            </p>
            <input
              type="text"
              className='w-[100%] h-[45px] pl-[10px] rounded-[5px] mb-[20px]'
              placeholder='Enter your mobile number'
            />
            <br />
            <button className='w-[100%] h-[45px] pl-[10px] bg-[#26848E] text-[#fff] rounded-[10px]'>
              Talk to expert
            </button>
          </div>
          <img
            src={'https://www.uffizio.com/wp-content/themes/uffizio/slider/banner01.svg'}
            alt=""
            className='w-[45%] object-cover'
          />
        </header>
      )}
      {slide === 2 && (
        <header
          className="relative bg-cover bg-center h-[100vh] flex items-center justify-center pt-[40px]"
          style={styles.Slider_2}
        >
           <div className='text-[#000] text-center w-[25%]'>
            <h1 className='text-[2.5rem] font-[500] text-[#fff]'>
              <span>Never Lose Sight </span> of What Matters
            </h1>
            <p className='text-[.95rem] mb-[30px] text-[1.1rem] text-[#fff]'>
              Real-Time GPS Tracking for Complete Control and Assurance
            </p>
            <input
              type="text"
              className='w-[100%] h-[45px] pl-[10px] rounded-[5px] mb-[20px]'
              placeholder='Enter your mobile number'
            />
            <br />
            <button className='w-[100%] h-[45px] pl-[10px] bg-[#26848E] text-[#fff] rounded-[10px]'>
              Talk to expert
            </button>
          </div>
          <img
            src={slidermain6.src}
            alt=""
            className='w-[60%] object-cover'
          />
        </header>
      )}
      {slide === 3 && (
        <header
          className="relative bg-cover bg-center h-[100vh] flex items-center justify-center pt-[40px]"
          style={styles.Slider_4}
        >
         <div className='text-[#000] text-center w-[35%] mr-[30px]'>
            <h1 className='text-[2.2rem] font-[800] text-left  text-[#fff]'>
            Always Know Your Child&apos;s Location with Our GPS Tracker
            </h1>
            <p className='text-[1rem] mb-[30px]  text-left text-[#d9cdcd]'>
            Real-Time Location Updates for Complete Peace of Mind – Keeping Your Loved Ones Safe, Anytime, Anywhere.
            </p>
           <div className='flex justify-between'>
            <button className='w-[100%] h-[45px] pl-[10px] bg-[#fff] text-[#000]  rounded-[5px] shadow-lg font-[700] tracking-[1px]   w-[48%]'>
               Explore
            </button>
            {/* <button className='w-[100%] h-[45px] pl-[10px] bg-[#26848E] text-[#fff] rounded-[10px]  w-[48%]'>
              Talk to expert
            </button> */}
            </div>
          </div>
          <img
            src={childrenSafety.src}
            alt=""
            className='w-[36%] object-cover'
          />
        </header>
      )}
      {slide === 4 && (
        <header
          className="relative bg-cover bg-center h-[100vh] flex items-center justify-center pt-[40px]"
          style={styles.Slider_5}
        >
           <div className='text-[#000] text-center w-[35%] mr-[30px]'>
            <h1 className='text-[2.2rem] font-[800] text-left  text-[#fff]'>
            Track Your Student’s Safety with Our GPS Solution
            </h1>
            <p className='text-[1rem] mb-[30px]  text-left text-[#d9cdcd]'>
            Ensure School Attendance and Safe Travel with Real-Time GPS Monitoring for Students.
            </p>
           <div className='flex justify-between'>
            <button className='w-[100%] h-[45px] pl-[10px] bg-[#fff] text-[#000]  rounded-[5px] shadow-lg font-[700] tracking-[1px]   w-[48%]'>
               Explore
            </button>
            {/* <button className='w-[100%] h-[45px] pl-[10px] bg-[#26848E] text-[#fff] rounded-[10px]  w-[48%]'>
              Talk to expert
            </button> */}
            </div>
          </div>
          <img
            src={buschildsafety.src}
            alt=""
            className='w-[30%] object-cover rounded-[5px] shadow-lg'
          />
        </header>
      )}

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${slide === index ? 'bg-[#fff]' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </>
  );
}