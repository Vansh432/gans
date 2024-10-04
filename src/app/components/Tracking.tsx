// components/TrackingSection.js
import Image from 'next/image';
import {  playStore, AppStore,Tracking } from "../Assets/Main"; // Assuming Logo is the default export


const TrackingSection = () => {
  return (
    <section className="bg-teal-500 text-white flex flex-col items-center justify-center h-screen h-[400px] mt-[70px]" style={{height:"400px"}}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4 md:px-0">
        <div className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-[2.5rem] tracking-[1.5px]  max-md:text-5xl font-bold mb-4">
            Tracking your Vehicle is now at your fingertips
          </h1>
          <p className="text-lg mb-6">
            A user friendly interface that makes it a better choice for business as well as personal use
          </p>
          <div className="flex gap-4">
            <img
              src={playStore.src}
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="cursor-pointer"
            />
            <img
              src={AppStore.src}
              alt="Download on the App Store"
              width={160}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Tracking.src}
            alt="Tracking your vehicle"
            width={400}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
