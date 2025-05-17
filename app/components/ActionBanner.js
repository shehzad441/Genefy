// ActionBanner.js
import Image from 'next/image';
import Link from 'next/link';

export default function ActionBanner() {
  return (
    <section className="action-banner py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="text-center max-w-5xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            One AI-powered platform,
            <br />
            from <span className="text-purple-500 relative">
              learning to mastery
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
            </span>.
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 relative">
            <div className="relative">
              <Link href="/courses" className="browse-courses-btn">
                Browse Courses
              </Link>
              <div className="arrow-icon left-arrow">
                <Image 
                  src="/images/arrow-blue.svg" 
                  alt="Arrow" 
                  width={40} 
                  height={40}
                />
              </div>
            </div>
            
            <div className="relative">
              <Link href="/tools" className="try-tools-btn">
                Try AI Study Tools
              </Link>
              <div className="arrow-icon right-arrow">
                <Image 
                  src="/images/arrow-blue.svg" 
                  alt="Arrow" 
                  width={40} 
                  height={40}
                />
              </div>
            </div>
            
            <div className="relative">
              <Link href="/features" className="explore-features-btn">
                Explore Features
              </Link>
              <div className="arrow-icon top-arrow">
                <Image 
                  src="/images/arrow-coral.svg" 
                  alt="Arrow" 
                  width={40} 
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}