// components/dashboard/DashboardCard.js
import { MessageCircle, FileText, HelpCircle, Edit3, Book, Archive } from 'lucide-react';

export default function DashboardCard({ title, color, icon }) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md text-white ${color} cursor-pointer flex flex-col justify-between`}
      style={{ width: '100%', height: '100%' }} // Ensure the card takes full width and height
    >
      {/* Text at the top */}
      <h3 className="text-3xl font-bold">{title}</h3>

      {/* Icon at the bottom-right */}
      <div className="flex justify-end items-end">
        <img src={icon} alt={title} className="w-[90px] h-[90px] object-contain" />
      </div>
    </div>
  );
}