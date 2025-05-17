// app/(auth)/verify/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [otpStatus, setOtpStatus] = useState('typing'); // 'typing', 'error', 'success'
  const router = useRouter();
  
  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);
  
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  // Handle input change for OTP fields
  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Reset status to typing when user changes input
    setOtpStatus('typing');
    setErrorMessage('');
    
    // Auto focus to next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };
  
  // Get border color based on status
  const getBorderColor = () => {
    switch (otpStatus) {
      case 'error':
        return 'border-[#DE3B40]';
      case 'success':
        return 'border-green-400';
      default:
        return 'border-[#9095A0]';
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    // Check if OTP is complete
    if (otp.some(digit => !digit)) {
      setErrorMessage('Please enter a valid code');
      setOtpStatus('error');
      setIsLoading(false);
      return;
    }
    
    // In a real app, you'd verify the OTP with your API
    // For demo, let's simulate verification with a specific code
    const enteredOtp = otp.join('');
    
    setTimeout(() => {
      setIsLoading(false);
      
      if (enteredOtp === '7777') { // Example correct OTP
        setOtpStatus('success');
        // After successful verification, redirect to dashboard or home
        setTimeout(() => router.push('/'), 1000);
      } else {
        setOtpStatus('error');
        setErrorMessage('Please enter a valid code');
      }
    }, 1500);
  };
  
  // Handle resend OTP
  const handleResend = () => {
    // Reset the timer
    setTimer(120);
    // Reset OTP fields and status
    setOtp(['', '', '', '']);
    setOtpStatus('typing');
    setErrorMessage('');
    // Focus on first input
    document.getElementById('otp-0')?.focus();
    // In a real app, you'd call your API to resend the OTP
  };
  
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Almost done</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* OTP Input Fields */}
        <div className="flex space-x-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              className={`w-16 h-16 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${getBorderColor()}`}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </div>
        
        {/* Error Message */}
        {errorMessage && (
          <p className="text-[#DE3B40] mb-6">{errorMessage}</p>
        )}
        
        {/* Verify Button */}
        <button 
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg mb-6 transition-colors flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="inline-block w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></span>
              Verifying...
            </>
          ) : 'Verify'}
        </button>
        
        {/* Timer */}
        <div className="text-gray-500 mb-4">{formatTime(timer)}</div>
        
        {/* Resend Option */}
        <div className="flex justify-between w-full">
          <span className="text-gray-500">Not received OTP?</span>
          <button 
            type="button" 
            className="text-indigo-500 font-medium hover:underline disabled:text-gray-400 disabled:no-underline"
            onClick={handleResend}
            disabled={timer > 0}
          >
            Resend Now
          </button>
        </div>
      </form>
    </>
  );
}