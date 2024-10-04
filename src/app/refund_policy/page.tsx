import React from 'react';
import Head from 'next/head';

const ReturnPolicy = () => {
  return (
    <>
    <div className='relative top-[80px] mb-[100px]'>
      <Head>
        <title>Return Policy - GANS Telematics</title>
        <meta name="description" content="Return Policy for GANS Telematics" />
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Return Policy</h1>

        <p className="text-lg text-gray-700 mb-4">
          The items sold on GANS Telematics are eligible for free refund/replacement within 10 days of delivery, in the unlikely event of a damaged, defective, or different item delivered to you.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Please keep the item in its original condition, with the brand outer box, user manual, and original accessories in manufacturer packaging for a successful return. We may contact you to ascertain the damage or defect in the product prior to issuing a replacement.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms for Return</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>The return or replacement is only valid for items purchased directly from GANS Telematics.</li>
          <li>The product must be in its original packaging and in the same condition as delivered.</li>
          <li>Items damaged due to misuse or accidental damage are not covered under this return policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Process for Return</h2>
        <p className="text-lg text-gray-700 mb-4">
          To initiate a return, please contact our customer service with your order ID and the reason for return. Our team will guide you through the process and arrange for the return of the item.
        </p>

        <p className="text-lg text-gray-700">
          Once the returned product is received and inspected, a refund or replacement will be processed. Please allow up to 7 working days for refunds to reflect in your account.
        </p>
       </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
