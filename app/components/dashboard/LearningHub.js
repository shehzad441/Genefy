import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import DashboardCard from './DashboardCard';

export default function LearningHub() {
  const cards = [
    { title: 'Talk to AI', color: 'bg-blue-500', icon: '/images/chat.png' },
    { title: 'Study Notes', color: 'bg-teal-500', icon: '/images/notes.png', href: '/dashboard/study-notes' },
    { title: 'Flash Cards', color: 'bg-purple-600', icon: '/images/flash-card.png' },
    { title: 'Question Hub', color: 'bg-pink-500', icon: '/images/question-hub.png' },
    { title: 'My Exam', color: 'bg-orange-500', icon: '/images/exam.png' },
    { title: 'My Resource', color: 'bg-green-500', icon: '/images/resource.png' },
    { title: 'Connect Instant Teacher', color: 'bg-indigo-500', icon: '/images/connect.png' },
    { title: 'My Videos', color: 'bg-orange-500', icon: '/images/exam.png' },
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-bold">Your Learning Hub</h2>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
          Pre Assessment Test
        </button>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            color={card.color}
            icon={card.icon}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}