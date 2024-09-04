import Image from 'next/image';
import {Logo} from '../Assets/Main'; // Assuming Logo is the default export

export default function Navbar() {
  return (
    <>
      <nav className="px-[50px] fixed z-[1000] w-[100%]">
        <div className="container mx-auto flex items-center justify-between py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 w-[100px]">
            <img src={Logo.src} alt="Logo" className="h-[100%] w-[100%]" />
  
          </div>

          {/* Navigation Links */}
          <div className="hidden  md:flex space-x-8 w-[40%]">
            <ul className="flex justify-around space-x-8 w-[100%]">
              <li className="hover:text-blue-500 cursor-pointer text-[14px]">Home</li>
              <li className="hover:text-blue-500 cursor-pointer text-[14px]">Products</li>
              <li className="hover:text-blue-500 cursor-pointer text-[14px]">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer text-[14px]">Contact Us</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-[#26848e] text-white w-[100px] h-[40px] px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Login
            </button>
            {/* <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              Sign Up
            </button> */}
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
