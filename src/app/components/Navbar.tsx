import Image from 'next/image';
import {Logo} from '../Assets/Main'; // Assuming Logo is the default export
import { AiOutlineShoppingCart  } from 'react-icons/ai';


export default function Navbar() {
  return (
    <>
      <nav className="px-[100px] bg-[#fff] fixed z-[1000] w-[100%] shadow-[0_0_10px_rgba(0,0,0,.15)]">
        <div className="container mx-auto flex items-center justify-between py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 w-[60px] ">
            <img src={Logo.src} alt="Logo" className="h-[100%] w-[100%]" />
  
          </div>

          {/* Navigation Links */}
          <div className="hidden  md:flex space-x-8 w-[40%]">
            <ul className="flex justify-around space-x-8 w-[100%]">
              <li className="hover:text-blue-500 cursor-pointer text-[#000] text-[15px]">Home</li>
              <li className="hover:text-blue-500 cursor-pointer  text-[#000] text-[15px]">Products</li>
              <li className="hover:text-blue-500 cursor-pointer  text-[#000] text-[15px]">Child Safety</li>
              <li className="hover:text-blue-500 cursor-pointer  text-[#000] text-[15px]">Schools</li>
              <li className="hover:text-blue-500 cursor-pointer  text-[#000] text-[15px]">Contact Us</li>
            </ul>
          </div>

          {/* Action Buttons */}
           <div className="hidden md:flex space-x-4">
           <button className='mr-[10px]'>
            <AiOutlineShoppingCart  className='text-[#000] text-[30px]'/>
              </button>

            <button className="bg-[#26848e] text-white w-[100px] h-[35px] px-4 py-2 rounded hover: transition duration-300 flex justify-center items-center">
              Login
            </button>
      
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-between px-4 py-2">
          <button className="bg-[#26848e] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
