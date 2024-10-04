import React from 'react';
import Image from 'next/image';
interface ReviewItemProps {
  rating: number;
  title: string;
  content: string;
  author: string;
  verified: boolean;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ rating, title, content, author, verified }) => {
  return (
    <div className="review-item border-b pb-4 mb-4">
      <div className="flex items-center mb-2">
        <span className="text-green-600 font-bold mr-2">{rating}★</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2">{content}</p>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span className="font-semibold">{author}</span>
        {verified && (
          <span className="ml-2 text-green-500 flex items-center">
            <img src="/verified-icon.png" alt="Verified Purchase" className="w-4 h-4 mr-1" />
            Verified Purchase
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
