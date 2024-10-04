// SuccessPopUp.js
import React from 'react';

export default function SuccessPopUp({ closemodel }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m0 12a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-700 mb-8">Your payment has been successfully verified.</p>
                <button
                    onClick={closemodel}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                    OK
                </button>
            </div>
        </div>
    );
}
