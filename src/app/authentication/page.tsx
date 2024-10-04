'use client'
import React, { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For signup
  const [signupMobile, setSignupMobile] = useState(''); // For signup
  const [signupPassword, setSignupPassword] = useState(''); // For signup
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  // Add type annotation for the event parameter
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log("hello in signin");
      const response = await axios.post(
        'https://gansgps.com/admin/api/customer/login',
        {
          mobile_no: mobile,
          password: password,
        }
      );
      console.log(response);
      if (response) {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.data.customer.api_token);
        localStorage.setItem('customer_id', response.data.customer.id);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Add type annotation for the event parameter
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'https://gansgps.com/admin/api/customer/signup',
        {
          name: name,
          mobile_no: signupMobile,
          password: signupPassword,
        }
      );
      if (response) {
        console.log('Signup successful:', response);
        window.location.href = '/dashboard';
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[97vh]">
      <div
        className={`relative overflow-hidden bg-white w-[768px] shadow-[0_0_10px_rgba(0,0,0,0.21)] max-w-full min-h-[480px] left-[50%] top-[150px] transform -translate-x-1/2  rounded-lg shadow-lg ${
          rightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div
          className={`absolute top-0 h-full w-1/2 transition-transform duration-500 ${
            rightPanelActive ? " opacity-0" : " opacity-100"
          } form-container sign-up-container`}
        >
          <form
            onSubmit={handleSignUp}
            className="flex flex-col items-center justify-center p-12 h-full text-center"
          >
            <h1 className="font-bold text-4xl ">Create Account</h1>
            <div className="social-container my-4">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-200 border-none p-3 my-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Mobile no"
              className="bg-gray-200 border-none p-3 my-2 w-full"
              value={signupMobile}
              onChange={(e) => setSignupMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border-none p-3 my-2 w-full"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              className="rounded-full border border-[#26848e] bg-[#26848e] text-white font-bold py-3 px-10 mt-4"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 h-full w-1/2  right-0 transition-transform duration-500 ${
            rightPanelActive ? " opacity-100" : "opacity-0"
          } form-container sign-in-container`}
        >
          <form
            onSubmit={handleSignIn}
            className="flex flex-col items-center justify-center p-12 h-full text-center"
          >
            <h1 className="font-bold text-4xl ">Sign in</h1>
            <div className="social-container my-4">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="number"
              placeholder="Mobile no."
              className="bg-gray-200 border-none p-3 my-2 w-full"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border-none p-3 my-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-sm text-gray-600 my-3">
              Forgot your password?
            </a>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              className="rounded-full border border-[#26848e] bg-[#26848e] text-white font-bold py-3 px-10 mt-4"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 ${
            rightPanelActive ? "-translate-x-full" : "translate-x-0"
          } overlay-container`}
        >
          <div className="overlay bg-gradient-to-r from-pink-500 to-red-500 text-white relative h-full w-full transition-transform duration-500">
            <div
              className={`absolute flex flex-col items-center justify-center px-16 text-center top-0 h-full w-100 transition-transform duration-500 ${
                rightPanelActive ? "-translate-x-0" : "-translate-x-full"
              } overlay-panel overlay-left`}
            >
              <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost border border-white bg-transparent rounded-full px-10 py-3 mt-4"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>

            <div
              className={`absolute flex flex-col items-center justify-center px-16 text-center top-0 h-full w-100 transition-transform duration-500 ${
                rightPanelActive ? "-translate-x-full" : "translate-x-0"
              } overlay-panel overlay-right`}
            >
              <h2 className="text-3xl font-bold mb-3">
                Hello, Friend!
              </h2>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost border border-white bg-transparent rounded-full px-10 py-3 mt-4"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
