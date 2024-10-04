import React from 'react';

interface RatingSummaryProps {
  averageRating: number;
  totalRatings: number;
  totalReviews: string;
}

const RatingSummary: React.FC<RatingSummaryProps> = ({ averageRating, totalRatings, totalReviews }) => {
  return (
    <div className="rating-summary p-6 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-4xl font-bold text-green-500 mr-2">{averageRating}</span>
        <span className="text-green-500 font-semibold">★</span>
        <div className="ml-4">
          <span className="block font-semibold">{totalRatings} ratings</span>
          <span className="block text-sm text-gray-500">{totalReviews} reviews</span>
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Rate Product</button>
    </div>
  );
};

export default RatingSummary;
