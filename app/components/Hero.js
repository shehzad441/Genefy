"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e9efff] to-white text-gray-900"
    style={{
      backgroundImage: "url('/images/bg_img.png')", // Add the background image
    }}
    >
      {/* Top Bar */}
      <div className="bg-[#6d35c4] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <i className="fas fa-phone" />
          <span>+91 9818186290</span>
          <i className="fas fa-phone" />
          <span>+91 9818186290</span>
          <i className="fas fa-envelope" />
          <span>contact@intelliedtech.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <i className="fab fa-facebook-f cursor-pointer" />
          <i className="fab fa-linkedin-in cursor-pointer" />
          <i className="fab fa-instagram cursor-pointer" />
          <span className="text-xl font-bold cursor-pointer">?</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center py-6 px-10">
        <div className="text-xl font-bold text-[#6d35c4]">Logo</div>
        
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Request Tutor</a>
          <a href="#">Pricing</a>
          <a href="#">Store Hub</a>
          <div className="relative" ref={dropdownRef}>
        <button 
          className="flex items-center text-gray-800 hover:text-indigo-600 transition-colors"
          onClick={() => setIsProductsOpen(!isProductsOpen)}
        >
          Products
          <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isProductsOpen && (
          <div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
            <Link href="/question-hub" className="product-dropdown-item">
              <div className="icon-circle bg-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Question Hub</span>
            </Link>
            
            <Link href="/study-notes" className="product-dropdown-item">
              <div className="icon-circle bg-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Study Notes</span>
            </Link>
            
            <Link href="/flash-cards" className="product-dropdown-item">
              <div className="icon-circle bg-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v3m0 0v3m0-3h3m-3 0H9" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Flash Cards</span>
            </Link>
          </div>
        )}
      </div>
        </nav>
        {/* <Link 
  href="/login" 
  className="bg-white text-indigo-600 border border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50"
>
  Log In
</Link> */}
          <Link 
            href="/login" 
            className="bg-[#6d35c4] text-white py-2 px-8 rounded-full text-base font-medium hover:bg-[#5a2b9e] transition-colors"
          >
            Login
          </Link>
        {/* <button className="bg-[#6d35c4] text-white px-6 py-2 rounded-full">Login</button> */}
      </div>

      {/* Hero Content */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-archivo">
          Master Your Exams with <br />
          <span className="text-[#6d35c4] underline underline-offset-4">Genify!</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Smart learning, AI-powered practice, and stress-free exam prep.
        </p>

        {/* Search Bar */}
        <div className="searchBar">
          <input type="text" placeholder="Ask your doubt here......" />
          <button><i className="fa-solid fa-star"></i> Ask Genify</button>
        </div>
      </div>
    </div>
  );
}
