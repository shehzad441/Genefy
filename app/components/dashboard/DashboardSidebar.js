// components/dashboard/DashboardSidebar.js
import { Home, Book, FileText, Edit3, Users, Clock, ShoppingBag, Activity, MessageCircle, ChevronRight } from 'lucide-react';

export default function DashboardSidebar() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white shadow-sm">
        <div className="p-4 flex items-center justify-between">
          <div className="font-bold text-lg">Logo</div>
        </div>
        
        <div className="p-4 flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100"></div>
          <div className="ml-2 text-sm font-medium text-gray-700">My Example</div>
          <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
        </div>
        
        <div className="mt-4">
          <div className="px-4 py-2 text-blue-600 bg-blue-50 flex items-center">
            <Home className="w-5 h-5 mr-3" />
            <span className="text-sm">Home</span>
          </div>
          
          <div className="px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <Book className="w-5 h-5 mr-3" />
            <span className="text-sm">All Subjects</span>
          </div>
        </div>
        
        <div className="mt-6 px-4 py-2">
          <div className="text-xs font-semibold text-gray-500 mb-2">Learning & Study Resource</div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-sm">My class</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-sm">My notes</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <span className="text-sm">My Exam</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm">Request tutor</span>
          </div>
        </div>
        
        <div className="mt-6 px-4 py-2">
          <div className="text-xs font-semibold text-gray-500 mb-2">Support & Connectivity</div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-sm">Instant connect</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-sm">Instant History</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm">Our community</span>
          </div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="text-sm">My order</span>
          </div>
        </div>
        
        <div className="mt-6 px-4 py-2">
          <div className="text-xs font-semibold text-gray-500 mb-2">Activity & Progress</div>
          
          <div className="py-2 text-gray-600 hover:bg-gray-50 flex items-center">
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-sm">My activity</span>
          </div>
        </div>
      </div>
    </div>
  );
}