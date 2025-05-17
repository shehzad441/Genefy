"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqItems = [
    {
      id: 1,
      question: "Excepteur esse sit sit eiusmod cillum nostr ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 2,
      question: "Excepteur esse sit sit eiusmod cillum nostr ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 3,
      question: "Est ad incididunt sint magna incididunt?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 4,
      question: "Est ad incididunt sint magna incididunt?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 5,
      question: "Proident irure officia anim ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 6,
      question: "Proident irure officia anim ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 7,
      question: "Id anim nisi ut magna ut ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    },
    {
      id: 8,
      question: "Id anim nisi ut magna ut ?",
      answer: "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet"
    }
  ];

  // Split the FAQ items into two equal columns
  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumnItems = faqItems.slice(0, midpoint);
  const rightColumnItems = faqItems.slice(midpoint);

  return (
    <section className="faq-section py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          Frequently Ask Questions
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="faq-column">
            {leftColumnItems.map((item) => (
              <div key={item.id} className="faq-item border-b border-gray-200">
                <div 
                  className="faq-question py-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    {openItems[item.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {openItems[item.id] && (
                  <div className="faq-answer pb-5 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="faq-column">
            {rightColumnItems.map((item) => (
              <div key={item.id} className="faq-item border-b border-gray-200">
                <div 
                  className="faq-question py-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    {openItems[item.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {openItems[item.id] && (
                  <div className="faq-answer pb-5 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}