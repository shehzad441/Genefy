// app/(auth)/google-accounts/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function GoogleAccountsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'User name',
      email: 'Username@gmail.com',
      avatar: '/images/avatars/user1.jpg'
    }
  ]);
  
  const handleAccountSelect = (accountId) => {
    // In a real app, you'd handle the Google OAuth login process
    // and then redirect to the dashboard or home page
    router.push('/');
  };
  
  const handleClose = () => {
    router.push('/login');
  };
  
  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Header with Google logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Image 
            src="/images/google-logo.svg"
            alt="Google"
            width={24}
            height={24}
            className="mr-3"
          />
          <h2 className="text-xl text-gray-800 font-normal">Sign in with Google</h2>
        </div>
        <button 
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
      
      <hr className="mb-8" />
      
      {/* App logo */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center">
          <Image 
            src="/images/logo-robot.svg" 
            alt="Intelli EdTech Logo" 
            width={40} 
            height={40}
          />
        </div>
      </div>
      
      {/* Choose account heading */}
      <h1 className="text-3xl font-normal text-gray-800 mb-2">Choose an account</h1>
      <p className="text-indigo-600 mb-8">to continue to Genify</p>
      
      {/* Account list */}
      <div className="space-y-4 mb-4">
        {accounts.map(account => (
          <div 
            key={account.id}
            className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
            onClick={() => handleAccountSelect(account.id)}
          >
            <Image 
              src={account.avatar} 
              alt={account.name}
              width={36}
              height={36}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium text-gray-800">{account.name}</p>
              <p className="text-gray-500">{account.email}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add another account */}
      <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer text-indigo-600 transition-colors mb-8">
        <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
          <UserPlus size={20} className="text-indigo-600" />
        </div>
        <span>Add another account</span>
      </div>
      
      {/* Privacy notice */}
      <p className="text-gray-600 text-sm">
        To continue, Google will share your name, email address and profile picture with Club name.
      </p>
    </div>
  );
}