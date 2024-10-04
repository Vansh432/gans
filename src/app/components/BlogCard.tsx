// Importing necessary packages
import React from 'react';

// Define the prop types for CardComponent
import Image from 'next/image';
interface CardComponentProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Page: React.FC = () => {
  return (
    <div className="container p-4">
      <h1 className="text-[1.8rem] text-center mb-[50px]">Blogs</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CardComponent
          imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
          title="Noteworthy technology acquisitions 2021"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far..."
          link="#"
        />
        <CardComponent
          imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
          title="Noteworthy technology acquisitions 2021"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far..."
          link="#"
        />
        <CardComponent
          imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
          title="Noteworthy technology acquisitions 2021"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far..."
          link="#"
        />
      </div>
    </div>
  );
};

const CardComponent: React.FC<CardComponentProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
        <a href={link}>
          <img className="rounded-t-lg" src={imageUrl} alt={title} />
        </a>
        <div className="p-3">
          <a href={link}>
            <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">{title}</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{description}</p>
          <a
            className="text-white bg-[#26848e] hover:bg-[#33757d] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href={link}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
