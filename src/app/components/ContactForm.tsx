'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ProductImage1 } from '../Assets/Main';
import Image from "next/image";

// Defining the shape of the form data
interface FormData {
  name: string;
  mobile_no: string;
  message: string;
}

// Defining the shape of the form errors
interface FormErrors {
  name?: string;
  mobile_no?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile_no: '',
    message: '',
  });

  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear specific field error
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form data
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile_no.trim()) newErrors.mobile_no = 'Mobile number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        // Fetch the CSRF token from the meta tag or API endpoint
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const response = await axios.post(
          'https://gansgps.com/admin/api/contact',
          formData,
          {
            headers: {
              'X-CSRF-TOKEN': csrfToken || '', // Add CSRF token here
            },
          }
        );

        if (response.status === 200) {
          alert('Form submitted successfully!');
          // Reset form
          setFormData({
            name: '',
            mobile_no: '',
            message: ''
          });
        } else {
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 mx-[200px] relative top-[90px] mb-[150px]">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="mb-6 text-gray-600">
          We are here to help. Chat to our friendly team 24/7 and get set up and ready to go in just 5 minutes.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'focus:border-26848e'}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="tel"
            name="mobile_no"
            placeholder="Enter mobile number"
            className={`w-full p-3 border rounded ${errors.mobile_no ? 'border-red-500' : 'focus:border-26848e'}`}
            value={formData.mobile_no}
            onChange={handleChange}
          />
          {errors.mobile_no && <p className="text-red-500 text-sm">{errors.mobile_no}</p>}

          <textarea
            name="message"
            placeholder="Your message"
            className={`w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'focus:border-26848e'}`}
            rows={4}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Send message
          </button>
        </form>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={ProductImage1.src} // Ensure the image is correctly imported
          alt="Contact Us"
          className="object-cover w-full h-full"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
};

export default ContactForm;
