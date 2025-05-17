// RecentBlogs.js
import Link from 'next/link';

export default function RecentBlogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Aliqua Irure Tempor Lorem Occaecat Volup",
      category: "Do consectetur",
      date: "Dec 22, 2022",
      rating: 4.5,
      image: "/images/blog-1.png"
    },
    {
      id: 2,
      title: "Commodo Deserunt Ipsum Occaecat Qui",
      category: "Consequat labore",
      date: "Nov 20, 2022",
      rating: 4.5,
      image: "/images/blog-2.png"
    },
    {
      id: 3,
      title: "Deserunt Occaecat Qui Amet Tempor Dolore",
      category: "Laboris nulla",
      date: "Nov 12, 2022",
      rating: 4.5,
      image: "/images/blog-3.png"
    },
    {
      id: 4,
      title: "Incididunt Sint Eiusmod Dolore Non",
      category: "Do consectetur",
      date: "Oct 17, 2022",
      rating: 4.5,
      image: "/images/blog-4.png"
    },
    {
      id: 5,
      title: "Ullamco in Laborum do eu Fugiat",
      category: "Consequat labore",
      date: "Oct 10, 2022",
      rating: 4.5,
      image: "/images/blog-5.png"
    },
    {
      id: 6,
      title: "Amet Est Qui Pariatur Ipsum Magna ut Magna",
      category: "Laboris nulla",
      date: "Sep 19, 2022",
      rating: 4.5,
      image: "/images/blog-6.png"
    }
  ];

  return (
    <section className="recent-blogs-section py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Recent Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="blog-image h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="category text-blue-500 text-sm mb-2">{post.category}</div>
                <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="date text-gray-500 text-sm">{post.date}</div>
                  <div className="rating flex items-center">
                    <span className="text-sm text-gray-700 mr-1">Rating: {post.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}