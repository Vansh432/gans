import Head from "next/head";
import React from "react";

const ShippingDelivery = () => {
  return (
    <>
    <div className="mx-[200px] relative top-[70px] mb-[100px]">
      <Head>
        <title>Shipping and Delivery | GANS</title>
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center my-6">Shipping and Delivery Policy</h1>
        <div className="prose max-w-full">
          <h2 className="text-2xl font-semibold mt-6">Shipping Methods</h2>
          <p className="text-sm">
            At GANS, we offer multiple shipping options to ensure your order reaches you in a timely and efficient manner.
          </p>
          <ul className="list-disc ml-6 text-sm">
            <li>Standard Delivery: 5-7 business days</li>
            <li>Express Delivery: 2-3 business days</li>
            <li>Same-Day Delivery (available in select cities)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Shipping Charges</h2>
          <p className="text-sm">
            Shipping charges may vary based on the shipping method you choose and your location. The exact cost will be calculated at checkout.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Order Processing</h2>
          <p className="text-sm">
            Orders are typically processed within 1-2 business days. You&apos;ll receive a confirmation email with your tracking number once your order has been shipped.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Razorpay Payment Integration</h2>
          <p className="text-sm">
            We accept payments through Razorpay, one of the most trusted payment gateways. You can pay using:
          </p>
          <ul className="list-disc ml-6 text-sm">
            <li>Credit Cards</li>
            <li>Debit Cards</li>
            <li>Net Banking</li>
            <li>UPI</li>
            <li>Wallets like Paytm and PhonePe</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Delivery Tracking</h2>
          <p className="text-sm">
            Once your order has been shipped, you can track its status using the tracking number provided in your confirmation email. You can also track your order by logging into your account.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Refund and Returns</h2>
          <p className="text-sm">
            If you have any issues with your order, such as damaged or incorrect items, please contact our support team within 7 days of receiving the product. We will arrange for a return and process a refund through Razorpay.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p className="text-sm">
            For any queries related to shipping or payments, please reach out to our support team at <a href="mailto:support@gans.in" className="text-blue-500">support@gans.in</a>.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ShippingDelivery;
