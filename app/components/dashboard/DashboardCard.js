// components/dashboard/DashboardCard.js
import Link from 'next/link';
import { MessageCircle, FileText, HelpCircle, Edit3, Book, Archive } from 'lucide-react';

export default function DashboardCard({ title, color, icon, href }) {
  const card = (
    <div
      className={`p-4 rounded-lg shadow-md text-white ${color} cursor-pointer flex flex-col justify-between`}
      style={{ width: '100%', height: '100%' }}
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <div className="flex justify-end items-end">
        <img src={icon} alt={title} className="w-[90px] h-[90px] object-contain" />
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {card}
    </Link>
  ) : (
    card
  );
}