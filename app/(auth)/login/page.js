// app/(auth)/login/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd call your API here
    // Then redirect to the verification page
    router.push('/verify');
  };
  
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in</h2>
      
      {/* Google Sign-in */}
      <button className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center mb-6 hover:bg-gray-50 transition-colors cursor-pointer">
        <Image src="/images/google-logo.svg" alt="Google" width={20} height={20} className="mr-3" />
        <span className="text-red-500 font-medium">Sign up with Google</span>
      </button>
      
      {/* Divider */}
      <div className="text-center text-gray-400 mb-6">Or sign up with</div>
      
      {/* Phone Input */}
      <form onSubmit={handlePhoneSubmit}>
        <div className="relative mb-6">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-white px-3 py-3 flex items-center border-r border-gray-300">
              <Image src="/images/indian-flag.svg" alt="India" width={24} height={16} className="mr-2" />
              <span className="text-gray-700">+91</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 py-3 px-4 outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        
        {/* Send OTP Button */}
        <button 
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg mb-4 transition-colors"
        >
          Send one otp
        </button>
      </form>
      
      {/* Login with Email Button */}
      <button 
            type="button"
            onClick={() => router.push('/email-login')}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg mb-6 transition-colors"
            >
            Login with email
        </button>
      
      {/* Terms Text */}
      <p className="text-center text-gray-500 text-sm mb-6">
        By continuing, you agree to our{' '}
        <Link href="/terms" className="text-indigo-500 hover:underline">Terms & Conditions</Link>
        {' '}and{' '}
        <Link href="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>
      </p>
      
      {/* Create Account Link */}
      <div className="text-center mb-4">
        <Link href="/signup" className="text-indigo-500 font-medium hover:underline">
          Create an Account
        </Link>
      </div>
      
      {/* Teacher Link */}
      <div className="text-center">
        <Link href="/teacher" className="text-indigo-500 font-medium hover:underline">
          I am a Teacher
        </Link>
      </div>
    </>
  );
}