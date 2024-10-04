import React from 'react';
import Image from 'next/image';
interface FAQItemProps {
  question: string;
  answer: string;
  seller: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, seller }) => {
  return (
    <div className="faq-item border-b pb-4 mb-4">
      <h3 className="font-bold">Q: {question}</h3>
      <p className="mt-2">
        <span className="font-semibold">A:</span> {answer}
      </p>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <img  src="" alt="Verified Seller" className="w-4 h-4 mr-1" />
        {seller}
      </div>
    </div>
  );
};

export default FAQItem;
