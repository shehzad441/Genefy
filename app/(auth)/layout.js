// app/(auth)/layout.js
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-lg">
        {/* Close button - links back to home */}
        <Link 
          href="/"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <X size={24} />
        </Link>
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">
            <Image 
              src="/images/logo-robot.svg" 
              alt="Intelli EdTech Logo" 
              width={86} 
              height={86}
            />
          </div>
        </div>
        
        {/* Child content (login, signup, or verify) */}
        {children}
      </div>
    </div>
  );
}