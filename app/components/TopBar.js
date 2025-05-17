// components/Topbar.js
"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Linkedin, Instagram, HelpCircle, ChevronDown } from 'lucide-react';

export default function Topbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
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
    <div className="w-full">
      {/* Top Bar - Purple with contact info and social icons */}
      <div className="bg-[#6d35c4] text-white text-base py-3 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="tel:+919818186290" className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <span>+91 9818186290</span>
            </a>
            <a href="tel:+919818186290" className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <span>+91 9818186290</span>
            </a>
            <a href="mailto:contact@intelliedtech.com" className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <span>contact@intelliedtech.com</span>
            </a>
          </div>
          
          <div className="flex gap-5 items-center">
            <a href="#" aria-label="Facebook">
            <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
            <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Help" className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
              <HelpCircle size={14} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar - White with navigation and login button */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#6d35c4]">
            Logo
          </Link>
          
          <nav className="flex gap-8 text-base">
            <Link href="/" className="text-gray-800 hover:text-[#6d35c4]">Home</Link>
            <Link href="/request-tutor" className="text-gray-800 hover:text-[#6d35c4]">Request Tutor</Link>
            <Link href="/pricing" className="text-gray-800 hover:text-[#6d35c4]">Pricing</Link>
            <Link href="/store-hub" className="text-gray-800 hover:text-[#6d35c4]">Store Hub</Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center text-gray-800 hover:text-[#6d35c4]"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <Link href="/question-hub" className="flex items-center px-4 py-2 hover:bg-gray-50">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                      <HelpCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">Question Hub</span>
                  </Link>
                  {/* Add your other dropdown items here */}
                </div>
              )}
            </div>
          </nav>
          
          <Link 
            href="/login" 
            className="bg-[#6d35c4] text-white py-2 px-8 rounded-full text-base font-medium hover:bg-[#5a2b9e] transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}