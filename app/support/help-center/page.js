// app/contact/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    question: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };
  
  return (
    <>
      <TopBar />
      
      <div className="bg-[#BCC1CA] py-4">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4 mb-4">
          <Link href="/" className="flex items-center text-indigo-600 font-medium w-fit">
            <img src="/images/home-icon.svg" alt="Home" className="fill-[#6454D6] w-10 h-10 mr-2"/>
            <span className="text-2xl font-bold">Home</span>
          </Link>
        </div>
        
        {/* Main contact card - match Figma dimensions */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-4">
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Contact form */}
              <div className="contact-us-card w-full md:w-1/2 py-6 md:py-12 px-4 md:px-6 lg:px-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-full flex items-center justify-center">
                    <Image 
                      src="/images/logo-robot.svg" 
                      alt="Logo" 
                      width={73} 
                      height={73}
                    />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact us</h1>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700 font-bold">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700 font-bold">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@email.com"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block mb-2 text-gray-700 font-bold">Mobile number</label>
                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                      <div className="py-3 px-3 flex items-center border-r border-gray-300">
                        <Image 
                          src="/images/india-flag.png" 
                          alt="India" 
                          width={30} 
                          height={30} 
                          className="mr-2"
                        />
                        <span>91+</span>
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="1234567890"
                        className="flex-1 p-3 outline-none"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="question" className="block mb-2 text-gray-700 font-bold">Question</label>
                    <textarea
                      id="question"
                      name="question"
                      placeholder="Enter message"
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none resize-none"
                      value={formData.question}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
              
              {/* Map section */}
              <div className="w-full md:w-1/2 h-[400px] md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.979370715262!2d77.08363359999999!3d28.459524599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a17eb8a52b%3A0x4a3918af9a97de50!2sNirvana%20Courtyard!5e0!3m2!1sen!2sin!4v1650956805419!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-12 md:py-16 lg:py-[60px] bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-500 mb-12">Drop Us a Line</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Phone size={24} className="text-indigo-500" />
              <span className="text-gray-700">+91 88000 22994</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Mail size={24} className="text-indigo-500" />
              <span className="text-gray-700">contact@intelliedtech.com</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <MapPin size={24} className="text-indigo-500 flex-shrink-0" />
              <span className="text-gray-700">
                C-301, Third floor, Nirvana Courtyard, Sector 50, Gurugram, Haryana, INDIA -122018
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}