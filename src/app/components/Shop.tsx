
import Product from './Product'
import {wireless,wired} from '../Assets/Main';
import { FaCar, FaMotorcycle, FaSuitcase } from 'react-icons/fa';
import { GiBabyFace } from 'react-icons/gi';

function Shop(){
    const arr=[1,2,3,4];
    return <>
    <div className='text-center'>
        <h1 className='text-[#26848E] text-[1.8rem] font-[700] tracking-[.8px]'>Trusted GPS Tracking</h1>
        <p className='text-[.9rem] font-[700]'>Track Smarter with India’s Most Trusted GPS Solution</p>
        <div className='mt-[55px] text-left'>
            <div className='flex justify-between items-center' >
            <h3 className='text-[1.3rem] flex justify-center items-center font-[700]'>
                <div className='p-[5px] rounded-[50%] bg-[#b0cbe44d]  flex justify-center items-center  mr-[10px]'>
               <img src={wireless.src} className='w-[25px] inline' alt="wireless gps tracker" />
               </div> Wireless GPS Tracker</h3>
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
            <div className='flex  gap-[10px] flex-wrap mt-[20px]'>
            {arr.map(function(index){
                return <Product key={index}/>
            })}
            
            </div>
        </div>
        <div className='mt-[55px] text-left'>
            <div className='flex justify-between items-center' >
            <h3 className='text-[1.3rem] flex justify-center items-center font-[700]'>
                <div className='p-[5px] rounded-[50%] bg-[#b0cbe44d]  flex justify-center items-center  mr-[10px]'>
               <img src={wired.src} className='w-[25px] inline' alt="wireless gps tracker" />
               </div> Wired GPS Tracker</h3>
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
            <div className='flex  gap-[10px] flex-wrap mt-[20px]'>
            {arr.map(function(index){
                return <Product key={index}/>
            })}
            
            </div>
        </div>
 
    </div>
    </>
}

export default Shop;