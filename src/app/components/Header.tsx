import React from 'react';

export default function Header() {
  return (
    <header className="relative bg-cover bg-center h-[75vh] flex items-center justify-center pt-[40px] bg-[url('https://www.shutterstock.com/image-vector/city-map-navigation-gps-navigator-600nw-1278969400.jpg')] bg-cover" >
       
       <div className='text-[#000] text-center'>
      <h1 className='text-[2.5rem] font-[700] '> <span>Never Lose Sight </span>of  <br/>
       What Matters</h1> 
      <p className='text-[.95rem] mb-[30px]'>Real-Time GPS Tracking for Complete Control and Assurance</p>
      <input type="text" className='w-[100%] h-[45px] pl-[10px] rounded-[20px] mb-[20px]' placeholder='Enter your mobile number'/><br/>
      <button className='w-[100%] h-[45px] pl-[10px] rounded-[20] bg-[#26848E] text-[#fff] rounded-[10px]'>Talk to expert</button>
       </div>
    </header>
  );
}
