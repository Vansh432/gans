'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SuccessPopUp from './Success';
export default function CheckoutPage(props) {
    const [step, setStep] = useState('address');  // Track current step ('address' or 'payment')
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [allAddress, setAllAddress] = useState([]);
    const [showAddressForm, setShowAddressForm] = useState(false);  // Track form visibility
    const [isVerified, setIsVerified] = useState(false); 
    const [newAddress, setNewAddress] = useState({
        full_name: '',
        mobile_number: '',
        pin_code: '',
        state: '',
        city: '',
        house_no_or_apartment: '',
        area: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('COD');  // Default to COD
    const { closemodel, product_id, amount,product_name } = props;  // Get product_id and final_amount from props

    useEffect(() => {
        async function getShippingAddress() {
            const token = localStorage.getItem('token');
            const customer_id = localStorage.getItem('customer_id');
            try {
                const headers = {
                    'Authorization': `Bearer ${token}`,
                };
                const response = await axios.get(`https://gansgps.com/admin/api/shipping-addresses/customer_id_${customer_id}`, { headers });
                console.log('Fetched addresses:', response.data);  // Check the fetched addresses
                setAllAddress(response.data);  // Set the state
            } catch (error) {
                console.error('Error fetching shipping addresses:', error);
            }
        }
        getShippingAddress();
    }, []);

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
    };

    const handleContinue = () => {
        if (selectedAddress) {
            setStep('payment');  // Move to payment step
        } else {
            alert("Please select an address!");
        }
    };

    const handleAddNewAddress = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const customer_id = localStorage.getItem('customer_id');
        
        try {
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.post(`https://gansgps.com/admin/api/add/shipping-address/customer_id_${customer_id}`, newAddress, { headers });
            console.log('Address added:', response.data);
            
            // Refresh the address list after adding new address
            const updatedAddresses = await axios.get(`https://gansgps.com/admin/api/shipping-addresses/customer_id_${customer_id}`, { headers });
            setAllAddress(updatedAddresses.data);
            
            // Close the form
            setShowAddressForm(false);
        } catch (error) {
            console.error('Error adding new address:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handlePlaceOrder = async () => {
        const token = localStorage.getItem('token');
        const customer_id = localStorage.getItem('customer_id');
        
        if (!selectedAddress) {
            alert("Please select a delivery address.");
            return;
        }

        const orderData = {
            product_id: product_id,  // From props
            user_id: customer_id,  // From localStorage
            quantity: 1,  // Default to 1
            final_amount: amount,  // Fixed amount from props or default value
            payment_method: paymentMethod.toLowerCase(),  // 'cod' or 'online'
            address_id: selectedAddress.id || null,  // Selected address ID
            coupon_id: null,  // Assuming no coupon
            subscription_id: 1  // Fixed subscription ID
        };

        try {
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            const response = await axios.post('https://gansgps.com/admin/api/place-order', orderData, { headers });
            console.log('Order placed:', response.data);
            
            // Handle successful order placement (e.g., show confirmation)
            alert("Order placed successfully!");
            closemodel();  // Close the modal after order is placed
        } catch (error) {
            console.error('Error placing order:', error);
            alert("There was an error placing your order. Please try again.");
        }
    };
    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };
   async function handleMakePayments(e){
        const token = localStorage.getItem('token');
        const customer_id = localStorage.getItem('customer_id');
        
        if (!selectedAddress) {
            alert("Please select a delivery address.");
            return;
        }

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
         );

         if (!res) {
            alert("Razropay failed to load!!");
            return;
        }

        const orderData = {
            product_id: product_id,  // From props
            user_id: customer_id,  // From localStorage
            quantity: 1,  // Default to 1
            final_amount: amount,  // Fixed amount from props or default value
            payment_method: paymentMethod.toLowerCase(),  // 'cod' or 'online'
            address_id: selectedAddress.id || null,  // Selected address ID
            coupon_id: null,  // Assuming no coupon
            subscription_id: 1  // Fixed subscription ID
        };

        try {
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

            // 
            const response3 = await axios.post('https://gansgps.com/admin/api/place-order', orderData, { headers });
            console.log('Order placed:', response3.data);
             let {order_id,final_amount}=response3.data.order_details;
            
            const response1 = await axios.post('https://gansgps.com/admin/api/razorpay/order',{
                'order_id':order_id,
                'amount':final_amount
            },{headers});
                 console.log(final_amount);
            console.log('Razorpay order:', response1.data);
            const {order_id:order}=response1.data
            var options = {
            "key": "rzp_test_S4BGv0GljGQGEK", // Enter the Key ID generated from the Dashboard
            "one_click_checkout": true,
            "name": "Acme Corp", // your business name
            "order_id":order, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "show_coupons": true, // default true; false if coupon widget should be hidden
            "handler": async function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                // {
                //     "razorpay_payment_id": "pay_HXXQbL4XAhjgYi",
                //     "razorpay_order_id": "order_P4dK9D2fwwvAOA",
                //     "razorpay_signature": "generated_signature_here"
                // }
                const data={
                    ...response
                }
                console.log(headers, response);
                const responseverify=await axios.post('https://gansgps.com/admin/api/razorpay/verify',data,{headers});
                console.log('Razorpay verification:', responseverify);
           
                setIsVerified(true);
            },
            "prefill": { // We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Gaurav Kumar", // your customer's name
                "email": "gaurav.kumar@example.com", 
                "contact": "9000090000"  // Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "ABC Office"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
       
        } catch (error) {
            console.error('Error placing order:', error);
            alert("There was an error placing your order. Please try again.");
        }
        
        console.log("make payment Online ")
    }
    return (
        <div className="p-8 w-[60%] flex fixed top-[50%] left-[50%] tra z-50 bg-[#fff] transform -translate-x-1/2 -translate-y-1/2 h-[70vh]" style={{ zIndex: 1000 }}>
            <div>
            {isVerified && <SuccessPopUp closemodel={closemodel} />}  
            {/* Rest of your checkout page content */}
        </div>
            <div>
                <button
                    onClick={() => {
                        closemodel();
                    }}
                    className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
                >
                    &times;
                </button>
            </div>
            <div className="w-2/3 pr-4 overscroll-y-auto overflow-hidden overflow-y-scroll">
             
                {step === 'address' && (
                    <>
                       <h2 className="text-xl mb-4 font-bold">Delivery Address</h2>
                        {!showAddressForm && (
                            <div className="mb-4">
                                <button
                                    className="border border-dashed border-gray-400 p-4 w-full text-left flex items-center justify-center text-blue-600"
                                    onClick={() => setShowAddressForm(true)}
                                >
                                    + Add New Address
                                </button>
                            </div>
                        )}

                        {showAddressForm ? (
                            <form onSubmit={handleAddNewAddress}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <input 
                                        type="text" 
                                        name="full_name"
                                        value={newAddress.full_name}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Phone</label>
                                    <input 
                                        type="tel" 
                                        name="mobile_number"
                                        value={newAddress.mobile_number}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Address Line 1</label>
                                    <input 
                                        type="text" 
                                        name="house_no_or_apartment"
                                        value={newAddress.house_no_or_apartment}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Area</label>
                                    <input 
                                        type="text" 
                                        name="area"
                                        value={newAddress.area}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">City</label>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={newAddress.city}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">State</label>
                                    <input 
                                        type="text" 
                                        name="state"
                                        value={newAddress.state}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Zip Code</label>
                                    <input 
                                        type="text" 
                                        name="pin_code"
                                        value={newAddress.pin_code}
                                        onChange={handleInputChange}
                                        className="w-full border p-2 rounded" 
                                        required 
                                    />
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Save Address
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddressForm(false)}
                                        className="text-blue-500 underline ml-4"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            allAddress.data != null ? allAddress.data.map((address) => (
                                <div
                                    key={address.id}
                                    onClick={() => handleAddressSelect(address)}
                                    className={`border p-4 mb-4 rounded-lg bg-white shadow-sm cursor-pointer ${selectedAddress?.id === address.id ? 'border-blue-500' : ''
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">{address.full_name} <span className="text-xs">(Home)</span></h3>
                                            <p>{address.mobile_number}</p>
                                            <p>{address.house_no_or_apartment}, {address.area}</p>
                                            <p>{address.city}, {address.state}, {address.pin_code}</p>
                                            <p>{address.country}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : `No addresses found`
                        )}

                        {!showAddressForm && (
                            <>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
                                onClick={handleContinue}
                            >
                                Continue
                            </button>
                            </>
                        )}
                    </>
                )}

                {step === 'payment' && (
                    <>
                        <h2 className="text-xl mb-4 font-bold">Payment</h2>
                        {/* Selected Address */}
                        <div className="border p-4 mb-4 rounded-lg bg-white shadow-sm">
                            <h3 className="font-bold">{selectedAddress?.full_name} <span className="text-xs">(Home)</span></h3>
                            <p>{selectedAddress?.mobile_number}</p>
                            <p>{selectedAddress?.house_no_or_apartment}, {selectedAddress?.area}</p>
                            <p>{selectedAddress?.city}, {selectedAddress?.state}, {selectedAddress?.pin_code}</p>
                            <p>{selectedAddress?.country}</p>
                        </div>
                        
                        {/* Payment Method Selection */}
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Select Payment Method</h3>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="cod"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={paymentMethod === 'COD'}
                                    onChange={() => handlePaymentMethodChange('COD')}
                                    className="mr-2"
                                />
                                <label htmlFor="cod">Cash on Delivery (COD)</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    type="radio"
                                    id="online"
                                    name="paymentMethod"
                                    value="online"
                                    checked={paymentMethod === 'Online'}
                                    onChange={() => handlePaymentMethodChange('Online')}
                                    className="mr-2"
                                />
                                <label htmlFor="online">Online Payment</label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                onClick={paymentMethod=='COD'?handlePlaceOrder:handleMakePayments}
                            >
                                {paymentMethod === 'COD' ? 'Place Order' : 'Make Payments'}
                            </button>
                        </div>

                        <button
                            className="text-blue-500 underline mt-4"
                            onClick={() => setStep('address')}  // Go back to Address step
                        >
                            Go Back to Address
                        </button>
                    </>
                )}
            </div>

            {/* Right Side: Order Summary Section */}
            <div className="w-[60%] pl-4">
                <h2 className="text-xl mb-4 font-bold">Order Summary</h2>
                <div className="border p-4 mb-4 rounded-lg bg-white shadow-sm">
                    <h3>{product_name}</h3>
                    <p>Qty: 1</p>
                    <p>Price: {amount}</p>
                    <p>Delivery Charges: Free</p>
                    <hr className="my-4" />
                    <h3 className="text-lg font-bold">Total Amount: {amount}</h3>
                </div>
            </div>
     
        </div>
    );
}
