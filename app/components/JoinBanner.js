// JoinBanner.js
import Link from 'next/link';

export default function JoinBanner() {
  return (
    <section className="join-banner py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Join the Learning!</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Ex adipisicing sint occaecat tempor incididunt incididunt eu minim anim irure fugiat mi
        </p>
        
        <div className="flex justify-center">
          <Link href="/signup" className="join-btn bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}