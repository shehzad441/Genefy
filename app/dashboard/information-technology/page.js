// app/dashboard/study-notes/information-technology/page.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, BookOpenCheck, HelpCircle, 
        Calendar, FileText, Users, CheckCircle, 
        Bookmark, ArrowLeft, ArrowRight, ThumbsUp,
        ChevronDown, Search, MessageCircle, Bell } from 'lucide-react';

export default function InformationTechnology() {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  
  const handleFeedback = () => {
    setFeedbackGiven(true);
    setTimeout(() => setFeedbackGiven(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex-shrink-0">
        <div className="p-4">
          <div className="text-indigo-600 font-bold mb-2">Logo</div>
          <div className="text-indigo-800 font-medium">Information Technology</div>
        </div>
        
        {/* Sidebar Navigation */}
        <nav className="mt-4">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-gray-700 mb-1">
              <span className="text-sm font-medium">1. Introduction to Computers</span>
            </div>
            <div className="ml-4 border-l border-gray-200 pl-2 space-y-2">
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>1.1 Basics of Computers</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>1.2 Importance & Applications of IT</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>1.3 Careers in IT</span>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-gray-700 mb-1">
              <span className="text-sm font-medium">2. Computer Fundamentals</span>
            </div>
            <div className="ml-4 border-l border-gray-200 pl-2 space-y-2">
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>2.1 Types of Computers</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>2.2 Computer Hardware & Software</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>2.3 Input, Output, and Storage Devices</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>2.4 Operating Systems</span>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-gray-700 mb-1">
              <span className="text-sm font-medium">3. Networking & Internet</span>
            </div>
            <div className="ml-4 border-l border-gray-200 pl-2 space-y-2">
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>3.1 Basics of Computer Networks</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>3.2 Types of Networks (LAN, WAN, MAN)</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>3.3 Network Devices</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm py-1">
                <ChevronDown size={14} className="mr-1" />
                <span>3.4 Cloud Computing</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Search" 
                className="border rounded-md pl-8 pr-3 py-1 w-full" 
              />
              <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500">
              <Bell size={18} />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-full w-8 h-8 flex items-center justify-center overflow-hidden">
                <img src="/api/placeholder/30/30" alt="User" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm">My Example</span>
              <button className="text-gray-400">?</button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Information Technology</h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/" className="text-indigo-600 hover:underline flex items-center">
            <span className="inline-block mr-1">🏠</span> Home
          </Link>
          <span>/</span>
          <Link href="/study-notes" className="text-indigo-600 hover:underline">
            Study Notes
          </Link>
          <span>/</span>
          <Link href="/subjects/information-technology" className="text-indigo-600 hover:underline">
            Information Technology
          </Link>
          <span>/</span>
          <span className="text-gray-500">Introduction to Information...</span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-8">
          <Link href="/subjects/information-technology" className="flex items-center gap-1 px-4 py-2 text-indigo-600 border-b-2 border-indigo-600">
            <div className="bg-teal-500 rounded-full p-1">
              <BookOpen size={16} className="text-white" />
            </div>
            <span>Study Notes</span>
          </Link>
          <Link href="/subjects/information-technology/flash-cards" className="flex items-center gap-1 px-4 py-2 text-gray-600">
            <div className="bg-indigo-500 rounded-full p-1">
              <BookOpenCheck size={16} className="text-white" />
            </div>
            <span>Flash Cards</span>
          </Link>
          <Link href="/subjects/information-technology/question-hub" className="flex items-center gap-1 px-4 py-2 text-gray-600">
            <div className="bg-pink-500 rounded-full p-1">
              <HelpCircle size={16} className="text-white" />
            </div>
            <span>Question Hub</span>
          </Link>
          <Link href="/subjects/information-technology/my-exam" className="flex items-center gap-1 px-4 py-2 text-gray-600">
            <div className="bg-orange-500 rounded-full p-1">
              <Calendar size={16} className="text-white" />
            </div>
            <span>My Exam</span>
          </Link>
          <Link href="/subjects/information-technology/my-resource" className="flex items-center gap-1 px-4 py-2 text-gray-600">
            <div className="bg-emerald-500 rounded-full p-1">
              <FileText size={16} className="text-white" />
            </div>
            <span>My Resource</span>
          </Link>
          <Link href="/subjects/information-technology/connect-teacher" className="flex items-center gap-1 px-4 py-2 text-gray-600">
            <div className="bg-blue-500 rounded-full p-1">
              <Users size={16} className="text-white" />
            </div>
            <span>Connect Instant Teacher</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">1.1.1 Definition of Computer</h2>
            <div className="flex gap-2">
              <button className="text-gray-400">
                <CheckCircle size={20} />
              </button>
              <button className="text-gray-400">
                <Bookmark size={20} />
              </button>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100 mb-6">
            <h3 className="text-indigo-600 font-medium mb-2">Overview</h3>
            <p className="text-gray-700 text-sm">
              The evolution of Information Technology (IT) traces the development of computers and 
              digital systems from early mechanical devices to modern-day computing and networking. IT has 
              transformed industries, economies, and daily life through continuous innovation in 
              hardware, software, and communication technologies.
            </p>
          </div>

          {/* What is a Computer */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-medium text-lg mb-3">
              <span className="text-indigo-600">♦</span> What is a Computer?
            </h3>
            <ul className="pl-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  A computer is an <span className="text-indigo-600 font-medium">electronic device</span> that processes data and performs 
                  operations based on instructions provided by <span className="text-indigo-600 font-medium">hardware</span> and <span className="text-indigo-600 font-medium">software</span>. It is 
                  designed to execute a sequence of arithmetic or logical operations 
                  automatically.
                </p>
              </li>
            </ul>
          </div>

          {/* History of Computers */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-medium text-lg mb-3">
              <span className="text-indigo-600">♦</span> History of Computers
            </h3>
            <p className="mb-2">Computers evolved in five generations based on technology improvements:</p>
            <ul className="pl-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">a.</span>
                <p>
                  <span className="font-medium">First Generation (1940s-1950s)</span> – Used <span className="text-indigo-600 font-medium">vacuum tubes</span>, very large, slow, 
                  and expensive (e.g., ENIAC).
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">b.</span>
                <p>
                  <span className="font-medium">Second Generation (1950s-1960s)</span> – Used <span className="text-indigo-600 font-medium">transistors</span>, making them 
                  smaller and more efficient.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">c.</span>
                <p>
                  <span className="font-medium">Third Generation (1960s-1970s)</span> – Used <span className="text-indigo-600 font-medium">integrated circuits (ICs)</span>, 
                  improving speed and size.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">d.</span>
                <p>
                  <span className="font-medium">Fourth Generation (1970s-Present)</span> – Used <span className="text-indigo-600 font-medium">microprocessors</span>, leading to 
                  personal computers.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">e.</span>
                <p>
                  <span className="font-medium">Fifth Generation (Present & Future)</span> – Focuses on <span className="text-indigo-600 font-medium">AI, quantum 
                  computing</span>, and <span className="text-indigo-600 font-medium">IoT</span>.
                </p>
              </li>
            </ul>
          </div>

          {/* Impact of IT on Society */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-medium text-lg mb-3">
              <span className="text-indigo-600">♦</span> Impact of IT on Society
            </h3>
            <p className="mb-2">IT has transformed various sectors:</p>
            <ul className="pl-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p><span className="font-medium">Education</span> – Online learning, digital books.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p><span className="font-medium">Healthcare</span> – Electronic health records, AI diagnosis.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p><span className="font-medium">Business</span> – E-commerce, cloud computing.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p><span className="font-medium">Communication</span> – Social media, instant messaging.</p>
              </li>
            </ul>
          </div>

          {/* Exam Preparation Points */}
          <div className="border border-green-200 rounded-md p-4 bg-green-50 mb-6">
            <div className="flex items-center gap-2 mb-2 text-green-600">
              <FileText size={18} />
              <h3 className="font-medium">Exam Preparation Points</h3>
            </div>
            <p className="text-sm text-gray-700">
              The evolution of Information Technology (IT) traces the development of computers and digital systems from early 
              mechanical devices to modern-day computing and networking. IT has transformed industries, economies, and 
              daily life through continuous innovation in hardware, software, and communication technologies.
            </p>
          </div>

          {/* Key words to remember */}
          <div className="border border-yellow-200 rounded-md p-4 bg-yellow-50 mb-6">
            <div className="flex items-center gap-2 mb-2 text-yellow-600">
              <FileText size={18} />
              <h3 className="font-medium">Key words to remember</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex gap-1">
                <span>•</span>
                <p><span className="text-yellow-600 font-medium">Vacuum Tubes</span> – First generation computer technology</p>
              </li>
              <li className="flex gap-1">
                <span>•</span>
                <p><span className="text-yellow-600 font-medium">Transistors</span> – Used in second gen, making computers more efficient</p>
              </li>
              <li className="flex gap-1">
                <span>•</span>
                <p><span className="text-yellow-600 font-medium">Microprocessors</span> – Heart of modern computers</p>
              </li>
              <li className="flex gap-1">
                <span>•</span>
                <p><span className="text-yellow-600 font-medium">Cloud Computing</span> – Internet-based computing services</p>
              </li>
              <li className="flex gap-1">
                <span>•</span>
                <p><span className="text-yellow-600 font-medium">Artificial Intelligence (AI)</span> – The key focus of the fifth generation</p>
              </li>
            </ul>
          </div>

          {/* Key Tip for Exams */}
          <div className="border border-indigo-200 rounded-md p-4 bg-indigo-50 mb-6">
            <div className="flex items-center gap-2 mb-2 text-indigo-600">
              <HelpCircle size={18} />
              <h3 className="font-medium">Key Tip for Exams</h3>
            </div>
            <p className="text-sm text-gray-700">
              Remember the main technology behind each computer generation (Vacuum Tubes → Transistors → ICs → 
              Microprocessors → AI). This pattern will help in MCQs and short answers.
            </p>
          </div>

          {/* Possible Exam Questions */}
          <div className="border border-red-200 rounded-md p-4 bg-red-50 mb-6">
            <div className="flex items-center gap-2 mb-2 text-red-600">
              <FileText size={18} />
              <h3 className="font-medium">Possible Exam Questions</h3>
            </div>
            {/* Exam questions would go here */}
          </div>

          <div className="text-center text-gray-500 text-sm mb-6">
            End of Article
          </div>

          <div className="bg-blue-50 p-4 rounded-lg text-center mb-6">
            <div className="mb-2 text-blue-800 text-lg">How helpful was these notes?</div>
            <div className="flex justify-center gap-4">
              {feedbackGiven ? (
                <div className="text-green-600 font-medium">Thank you for your feedback!</div>
              ) : (
                <>
                  <button onClick={handleFeedback} className="hover:scale-110 transition-transform">
                    <img src="/images/happy.png" alt="Happy Emoji" className="w-10 h-10" />
                  </button>
                  <button onClick={handleFeedback} className="hover:scale-110 transition-transform">
                    <img src="/images/excited.png" alt="Excited Emoji" className="w-10 h-10" />
                  </button>
                  <button onClick={handleFeedback} className="hover:scale-110 transition-transform">
                    <img src="/images/angry.png" alt="angry Emoji" className="w-10 h-10" />
                  </button>
                  <button onClick={handleFeedback} className="hover:scale-110 transition-transform">
                    <img src="/images/confused.png" alt="Confused Emoji" className="w-10 h-10" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Chat with Genify Bot */}
          <div className="fixed bottom-4 right-4">
            <div className="relative">
              <div className="absolute -top-16 right-0 bg-white rounded-lg shadow-lg p-3 w-64 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-gray-600">Hi! I can Genify! Ask me if you have any doubt.</p>
              </div>
              <button className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 group">
                <MessageCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}