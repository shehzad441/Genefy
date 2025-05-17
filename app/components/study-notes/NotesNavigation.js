// components/study-notes/NotesNavigation.js
import Link from 'next/link';
import { FileText, Book, HelpCircle, Edit3, Archive, Users, Home } from 'lucide-react';

export default function NotesNavigation() {
  return (
    <div className="flex mt-8 border-b">
      <Link href="/study-notes" className="flex items-center p-3 text-blue-600 border-b-2 border-blue-600">
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-2">
          <FileText className="w-4 h-4 text-white" />
        </div>
        <span>Study Notes</span>
      </Link>
      
      <Link href="/flash-cards" className="flex items-center p-3 text-gray-600 hover:text-blue-600">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2">
          <Book className="w-4 h-4 text-white" />
        </div>
        <span>Flash Cards</span>
      </Link>
      
      <Link href="/question-hub" className="flex items-center p-3 text-gray-600 hover:text-blue-600">
        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
          <HelpCircle className="w-4 h-4 text-white" />
        </div>
        <span>Question Hub</span>
      </Link>
      
      <Link href="/my-exam" className="flex items-center p-3 text-gray-600 hover:text-blue-600">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2">
          <Edit3 className="w-4 h-4 text-white" />
        </div>
        <span>My Exam</span>
      </Link>
      
      <Link href="/my-resource" className="flex items-center p-3 text-gray-600 hover:text-blue-600">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
          <Archive className="w-4 h-4 text-white" />
        </div>
        <span>My Resource</span>
      </Link>
      
      <Link href="/connect-teacher" className="flex items-center p-3 text-gray-600 hover:text-blue-600">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
          <Users className="w-4 h-4 text-white" />
        </div>
        <span>Connect Instant Teacher</span>
      </Link>
    </div>
  );
}