import { useState } from 'react';
import { X, Plus, User } from 'lucide-react';

export default function GoogleSignInPopup() {
  const [showPopup, setShowPopup] = useState(true);
  
  // Sample user account
  const userAccount = {
    name: "User name",
    email: "Username@gmail.com",
    avatar: "/images/useravatar.jpg" // Placeholder for user avatar
  };
  
  const handleClose = () => {
    setShowPopup(false);
  };
  
  const handleAccountSelect = () => {
    console.log("Account selected:", userAccount);
    // In a real app, you would handle the authentication flow here
  };
  
  const handleAddAccount = () => {
    console.log("Add another account clicked");
    // In a real app, this would open the account creation flow
  };

  if (!showPopup) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        {/* Header with close button */}
        <div className="relative p-4 flex items-center border-b border-gray-200">
          <div className="flex items-center mr-10">
            <div className="w-6 h-6 mr-3 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <span className="text-lg text-gray-700">Sign in with Google</span>
          </div>
          <button 
            onClick={handleClose} 
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center py-6">
          <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-500">G</span>
          </div>
        </div>
        
        {/* Main content */}
        <div className="px-8 pb-6">
          <h2 className="text-2xl font-normal text-gray-800 mb-1">Choose an account</h2>
          <p className="text-blue-600 mb-6">to continue to Genify</p>
          
          {/* Account selection */}
          <div 
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors mb-2"
            onClick={handleAccountSelect}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
              <img src={userAccount.avatar} alt="User avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-800">{userAccount.name}</div>
              <div className="text-gray-500">{userAccount.email}</div>
            </div>
          </div>
          
          {/* Add another account */}
          <div 
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={handleAddAccount}
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
              <Plus size={20} className="text-gray-600" />
            </div>
            <div className="text-gray-700">Add another account</div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-8 py-6 text-sm text-gray-600 border-t border-gray-200">
          To continue, Google will share your name, email address and profile picture with Club name.
        </div>
      </div>
    </div>
  );
}