"use client";

import React from "react";
import { Logo, playStore, AppStore, Gpay, Visa, upi, MasterCard, AE, Paytm, Rupay, Shiprocket, Delhivery } from "../Assets/Main"; // Assuming Logo is the default export
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutubeSquare  } from "react-icons/fa";
import Link from 'next/link'
import Image from "next/image";
import { AppleIcon } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-8 md:p-12">
        <img src={Logo.src} alt="onelap" className="w-32" />{" "}
        {/* Replace with actual image */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Left Section - Logo and Description */}
          <div className="md:w-1/3 space-y-4">
            <p className="text-sm leading-relaxed">
            GANS GPS is India’s most popular GPS brand for assets and
              personal safety. We help people control their assets from anywhere
              in the world, resulting in lesser theft, more control, and staying
              connected to their loved ones.
            </p>
            <p className="text-xs">
              &copy; 2023 GANS Telematics all rights reserved
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" aria-label="Facebook">
              <FaFacebook />
              </a>
              <a href="#" aria-label="YouTube">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaYoutubeSquare />
              </a>
            </div>
            {/* Store Buttons */}
            <div className="flex space-x-4">
              <a href="#" className="w-24">
                <img src={playStore.src} alt="Google Play" className="w-full" />{" "}
                {/* Replace with actual image */}
              </a>
              <a href="#" className="w-24">
                <img src={AppStore.src} alt="App Store" className="w-full" />{" "}
                {/* Replace with actual image */}
              </a>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="md:w-1/4 flex flex-col space-y-2">
            <Link href="#" className="text-sm hover:underline">
              Blogs
            </Link>
            <a href="#" className="text-sm hover:underline">
              News
            </a>
            <Link href="/privacy_policy" className="text-sm hover:underline">
              Privacy  Policy
            </Link>
            <Link href="/term_and_conditions" className="text-sm hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/refund_policy" className="text-sm hover:underline">
            Cancellation and Refund
            </Link>
            <Link href="/shipping" className="text-sm hover:underline">
            Shipping and Delivery
            </Link>
            <Link href="/contactus" className="text-sm hover:underline">
              Contact Us
            </Link>
          </div>

          {/* Right Section - Contact Info */}
          <div className="md:w-1/3 space-y-4">
            <p className="text-sm">
              Connect on WhatsApp:{" "}
              <a href="tel:+919311713707" className="underline">
                +91 9311713707
              </a>
            </p>
            <p className="text-sm">Working hours: 11:00 am - 6:00 pm</p>
            <p className="text-sm">
              Email us at:{" "}
              <a href="mailto:support@gansgps.com" className="underline">
                support@gansgps.com
              </a>
            </p>
            <p className="text-sm">
              Address: 9A,9B Gopala Tower, 25, Rajendra Place, New Delhi 110008
            </p>
          </div>
          {/* Payment and Logistic Partners Section */}
        </div>
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="mx-auto">
              {/* Payment Partners */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg">Payment Partners</h3>
                <div className="flex space-x-4 mt-2">
                  <img src={Gpay.src} alt="Gpay" className="h-5" />
                  <img src={Visa.src} alt="Visa" className="h-5" />
                  <img
                    src={MasterCard.src}
                    alt="MasterCard"
                    className="h-6"
                  />
                  <img
                    src={AE.src}
                    alt="American Express"
                    className="h-5"
                  />
                  <img src={Paytm.src} alt="Paytm" className="h-5" />
                  <img src={Rupay.src} alt="Rupay" className="h-5" />
                  <img src={upi.src} alt="UPI" className="h-8" />
                </div>
              </div>

              {/* Logistic Partners */}
              <div className="mb-8">
                <h3 className="font-semibold text-md">Logistic Partners</h3>
                <div className="flex items-end space-x-4 mt-2">
                  <img
                    src={Delhivery.src}
                    alt="Delhivery"
                    className="h-5"
                  />
                  <img
                    src={Shiprocket.src}
                    alt="Shiprocket Fulfillment"
                    className="h-9"
                  />
                </div>
              </div>

              {/* E-waste Disclaimer */}
              <p className="text-sm">
                Please dispose of e-waste and plastic waste responsibly. For
                more information or e-waste pickup, please click{" "}
                <a href="#" className="underline">
                  here
                </a>{" "}
                for more details.
              </p>
            </div>
          </div>
      </footer>
    </>
  );
}
