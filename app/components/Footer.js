"use client";

import Link from 'next/link';
import { Mail, ChevronDown, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };
  
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Logo</h2>
            <p className="text-white/80">
              Intelli EdTech - Your Learning Partner
            </p>
          </div>
          
          {/* Categories */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Course</Link></li>
              <li><Link href="#popularexam" className="text-white/80 hover:text-white">Exam</Link></li>
              <li><Link href="/tutor" className="text-white/80 hover:text-white">Tutor</Link></li>
              <li><Link href="#recentblogs" className="text-white/80 hover:text-white">Blogs</Link></li>
              <li><Link href="#faq" className="text-white/80 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><Link href="/support/help-center" className="text-white/80 hover:text-white">Help Center</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Stay in the Loop */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Stay in the Loop with Intelli EdTech</h2>
            <p className="text-white/80 mb-4">Subscribe with your email</p>
            
            <form onSubmit={handleSubscribe} className="flex">
              <div className="relative flex-grow">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  placeholder="Input your email"
                  className="w-full py-2 pl-10 pr-3 bg-white/10 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-indigo-700 font-semibold py-2 px-4 rounded-r-md hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="relative inline-block">
              <button className="flex items-center space-x-2 bg-white/10 text-white py-2 px-4 rounded-md">
                <span>English</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
          
          <div className="text-white/80 mb-4 md:mb-0">
            2025 Intelli EdTech • <Link href="/privacy" className="hover:text-white">Privacy</Link> • <Link href="/terms" className="hover:text-white">Terms</Link> • <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white/80" aria-label="Twitter">
            <img src="/images/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white/80" aria-label="Facebook">
            <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white/80" aria-label="LinkedIn">
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white/80" aria-label="YouTube">
            <img src="/images/youtube.svg" alt="YouTube" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}