// app/(dashboard)/study-notes/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Book, HelpCircle, Edit3, Archive, Users, Home } from 'lucide-react';
import NotesNavigation from '../../components/study-notes/NotesNavigation';
// import NotesList from '../../components/study-notes/NotesList';

export default function StudyNotesPage() {
  const [activeSubject, setActiveSubject] = useState('all');
  
  return (
    <div className="flex-1 p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">Study Notes</h1>
      
      {/* Breadcrumb */}
      <div className="flex items-center mt-4 text-blue-600">
        <Link href="/dashboard" className="flex items-center">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Study Notes</span>
      </div>
      
      {/* Navigation Tabs */}
      <NotesNavigation />
      
      {/* Notes List */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-teal-600 rounded-lg text-white cursor-pointer hover:bg-teal-700 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-teal-500 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Information Technology</h3>
          </div>
        </div>
        
        <div className="p-4 bg-orange-500 rounded-lg text-white cursor-pointer hover:bg-orange-600 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-orange-400 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Biology</h3>
          </div>
        </div>
        
        {/* Repeat for multiple notes */}
        <div className="p-4 bg-teal-600 rounded-lg text-white cursor-pointer hover:bg-teal-700 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-teal-500 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Information Technology</h3>
          </div>
        </div>
        
        <div className="p-4 bg-orange-500 rounded-lg text-white cursor-pointer hover:bg-orange-600 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-orange-400 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Biology</h3>
          </div>
        </div>
        
        {/* Add more note items */}
        <div className="p-4 bg-teal-600 rounded-lg text-white cursor-pointer hover:bg-teal-700 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-teal-500 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Information Technology</h3>
          </div>
        </div>
        
        <div className="p-4 bg-orange-500 rounded-lg text-white cursor-pointer hover:bg-orange-600 transition-colors">
          <div className="flex items-center">
            <div className="p-2 bg-orange-400 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium ml-3">Biology</h3>
          </div>
        </div>
        
        {/* Add more rows as needed */}
      </div>
    </div>
  );
}