// components/Navbar.js
"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#6d35c4]">
          Logo
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-800 hover:text-indigo-600">Home</Link>
          <Link href="/request-tutor" className="text-gray-800 hover:text-indigo-600">Request Tutor</Link>
          <Link href="/pricing" className="text-gray-800 hover:text-indigo-600">Pricing</Link>
          <Link href="/store-hub" className="text-gray-800 hover:text-indigo-600">Store Hub</Link>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center text-gray-800 hover:text-indigo-600"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Product
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isProductsOpen && (
              <div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                {/* Dropdown items here */}
              </div>
            )}
          </div>
        </nav>
        
        <Link href="/login" className="bg-[#6d35c4] text-white py-2 px-8 rounded-full hover:bg-[#5a2b9e] transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
}