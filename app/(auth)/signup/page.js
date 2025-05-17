// app/(auth)/signup/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GoogleSignInPopup from '../../components/GoogleSignInPopup'; // Import the new component

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Female',
    email: '',
    phoneNumber: ''
  });
  const [showGooglePopup, setShowGooglePopup] = useState(false); // Add state for popup visibility
  const router = useRouter();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Google Sign-in - updated to show popup
  const handleGoogleSignIn = () => {
    setShowGooglePopup(true); // Show the Google Sign-in popup
    // router.push('/google-accounts'); // This is commented out as we're using the popup instead
  };

  // Handle callback from GoogleSignInPopup when an account is selected
  const handleGoogleAccountSelected = (account) => {
    // Handle the selected Google account data
    console.log("Google account selected:", account);
    setShowGooglePopup(false); // Hide the popup
    // You could use the account data and then redirect:
    router.push('/verify');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd call your API here
    // Then redirect to the verification page
    router.push('/verify');
  };
  
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
      
      {/* Google Sign-up - Updated to call our handler */}
      <button 
        className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center mb-6 hover:bg-gray-50 transition-colors"
        onClick={handleGoogleSignIn} // Add click handler
      >
        <Image src="/images/google-logo.svg" alt="Google" width={20} height={20} className="mr-3" />
        <span className="text-red-500 font-medium">Sign up with Google</span>
      </button>
      
      {/* Render the Google Sign-in Popup when showGooglePopup is true */}
      {showGooglePopup && (
        <GoogleSignInPopup 
          onClose={() => setShowGooglePopup(false)}
          onAccountSelect={handleGoogleAccountSelected}
        />
      )}
      
      {/* Divider */}
      <div className="text-center text-gray-400 mb-6">Or sign up with</div>
      
      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields - Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-1">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Lorem"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-1">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Lorem"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* Gender Field */}
        <div>
          <label htmlFor="gender" className="block text-gray-700 mb-1">Gender</label>
          <select
            id="gender"
            name="gender"
            className="w-full border border-gray-300 rounded-lg p-3 appearance-none bg-white"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700 mb-1">Phone number</label>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-white px-3 py-3 flex items-center border-r border-gray-300">
              <Image src="/images/indian-flag.svg" alt="India" width={24} height={16} className="mr-2" />
              <span className="text-gray-700">91+</span>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="1234567890"
              className="flex-1 py-3 px-4 outline-none"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* Sign Up Button */}
        <button 
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Sign Up
        </button>
      </form>
      
      {/* Terms Text */}
      <p className="text-center text-gray-500 text-sm mt-6 mb-6">
        By continuing, you agree to our{' '}
        <Link href="/terms" className="text-indigo-500 hover:underline">Terms & Conditions</Link>
        {' '}and{' '}
        <Link href="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>
      </p>
      
      {/* Login Link */}
      <div className="text-center">
        <span className="text-gray-500">Already have an account?</span>{' '}
        <Link href="/login" className="text-indigo-500 font-medium hover:underline">
          Log in
        </Link>
      </div>
    </>
  );
}