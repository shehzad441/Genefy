// app/(dashboard)/layout.js
'use client';
import { usePathname } from 'next/navigation';
import Footer from '@/app/components/Footer';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  // Hide sidebar for information-technology and any other routes you want
  const hideSidebar = pathname.startsWith('/dashboard/information-technology');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1">
        {!hideSidebar && <DashboardSidebar />}
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}