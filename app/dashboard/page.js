// app/dashboard/page.js
'use client';

import { useState } from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';
import LearningHub from '../components/dashboard/LearningHub';
import SubjectList from '../components/dashboard/SubjectList';
import BookmarkList from '../components/dashboard/BookmarkList';
import NotesList from '../components/dashboard/NotesList';

export default function DashboardPage() {
  const [studentName, setStudentName] = useState('student name');
  
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-50 w-full min-w-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[40px] font-bold">Hey {studentName},</h1>
            <p className="text-gray-600">Let's Achieve Greatness Today!</p>
          </div>
          
          <div className="flex space-x-2 items-center">
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex-1 rounded-lg px-4 py-3 bg-white shadow-sm flex items-center">
            <input
              type="text"
              placeholder="Ask your doubt here......"
              className="flex-1 focus:outline-none"
            />
            <button className="ml-2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm flex items-center">
              <span className="mr-1">★</span>
              Ask Geniify
            </button>
          </div>
        </div>
        
        <LearningHub />
        <SubjectList />
        <BookmarkList />
        <NotesList />
      </div>
    </div>
  );
}