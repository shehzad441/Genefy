// app/(dashboard)/layout.js
import Footer from '@/app/components/Footer';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}