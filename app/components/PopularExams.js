// PopularExams.js
import Link from 'next/link';

export default function PopularExams() {
  const exams = [
    {
      id: 1,
      title: "Digital Poster Design: Best Practices",
      category: "Graphic Design",
      price: 39,
      image: "/images/exam-1.png"
    },
    {
      id: 2,
      title: "Digital Poster Design: Best Practices",
      category: "Graphic Design",
      price: 39,
      image: "/images/exam-2.png"
    },
    {
      id: 3,
      title: "Digital Poster Design: Best Practices",
      category: "Graphic Design",
      price: 39,
      image: "/images/exam-3.png"
    },
    {
      id: 4,
      title: "Digital Poster Design: Best Practices",
      category: "Graphic Design",
      price: 39,
      image: "/images/exam-4.png"
    }
  ];

  return (
    <section className="popular-exams-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Popular Exams</h2>
          <Link href="/exams" className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
            View all 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam) => (
            <div key={exam.id} className="exam-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="exam-image h-48 overflow-hidden">
                <img 
                  src={exam.image} 
                  alt={exam.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="category text-gray-500 text-sm">{exam.category}</div>
                <div className="price text-2xl font-bold text-gray-800 my-2">${exam.price}</div>
                <h3 className="text-lg font-semibold mb-4">{exam.title}</h3>
                
                <div className="flex space-x-3">
                  <button className="buy-now-btn bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex-1">
                    Buy Now
                  </button>
                  <button className="view-details-btn border border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex-1">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}