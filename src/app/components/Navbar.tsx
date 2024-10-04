'use client';
import { useState, useEffect } from 'react';
import { Logo } from '../Assets/Main'; // Assuming Logo is the default export
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname()

  // State to track scroll and set background color
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    textColor: '#000',
    boxShadow: 'none',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarStyle({
          backgroundColor: '#fff',
          textColor: '#000',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        });
      } else {
        setNavbarStyle({
          backgroundColor: 'transparent',
          textColor: pathname=='/'?'#fff':'#000',
          boxShadow: 'none',
        });
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <nav
        className="px-[100px] fixed z-20 w-[100%] transition-all duration-300"
        style={{ backgroundColor: navbarStyle.backgroundColor, boxShadow: navbarStyle.boxShadow,top:0}}
      >
        <div className="container mx-auto flex items-center justify-between py-2">
        
          <div className="flex items-center space-x-2 w-[80px]">
            <img src={Logo.src} alt="Logo" className="h-[100%] w-[100%]" />
          </div>

     
          <div className="hidden md:flex space-x-8 w-[40%]">
            <ul className="flex justify-around space-x-8 w-[100%]">
              <Link href="/">
                <li
                  className="hover:text-blue-500 cursor-pointer text-[15px]"
                  style={{ color: navbarStyle.textColor }}
                >
                  Home
                </li>
              </Link>
              <Link href="/products">
                <li
                  className="hover:text-[#26848E] cursor-pointer text-[15px]"
                  style={{ color: navbarStyle.textColor }}
                >
                  Products
                </li>
              </Link>
              <Link href="/child_safety">
                <li
                  className="hover:text-blue-500 cursor-pointer text-[15px]"
                  style={{ color: navbarStyle.textColor }}
                >
                  Child Safety
                </li>
              </Link>
              <Link href="/schools">
                <li
                  className="hover:text-blue-500 cursor-pointer text-[15px]"
                  style={{ color: navbarStyle.textColor }}
                >
                  Schools
                </li>
              </Link>
              <Link href="/contactus">
                <li
                  className="hover:text-blue-500 cursor-pointer text-[15px]"
                  style={{ color: navbarStyle.textColor }}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>

          
          <div className="hidden md:flex space-x-4">
            <button
              className="mr-[10px]"
              onClick={() => {
                router.push('/cart_page');
              }}
            >
              <AiOutlineShoppingCart
                className="text-[30px]"
                style={{ color: navbarStyle.textColor }}
              />
            </button>

            <button
              onClick={() => {
                router.push('/authentication');
              }}
              className="bg-[#26848e] hover:bg-[#268489] text-white w-[100px] h-[35px] px-4 py-2 rounded transition duration-300 flex justify-center items-center"
              style={{ backgroundColor: navbarStyle.backgroundColor === 'transparent' ? '#26848e' : '#000', color: '#fff' }}
            >
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
