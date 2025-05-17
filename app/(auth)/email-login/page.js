// app/(auth)/email-login/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function EmailLoginPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd call your API to check the email
    // and either send a verification code or ask for password
    router.push('/verify');
  };
  
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in</h2>
      
      {/* Google Sign-in */}
      <button 
        onClick={() => router.push('/google-accounts')}
        className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center mb-6 hover:bg-gray-50 transition-colors"
      >
        <Image src="/images/google-logo.svg" alt="Google" width={20} height={20} className="mr-3" />
        <span className="text-red-500 font-medium">Sign up with Google</span>
      </button>
      
      {/* Divider */}
      <div className="text-center text-gray-400 mb-6">Or sign up with</div>
      
      {/* Email Login Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Login Button */}
        <button 
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Login with email
        </button>
      </form>
      
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