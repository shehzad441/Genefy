import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function SubjectList() {
  const subjects = [
    {
      name: "Artificial Intelligence",
      image: "/images/ai.png",
      bgColor: "bg-gradient-to-br from-teal-500 to-blue-800"
    },
    {
      name: "Mathematics",
      image: "/images/math.png", 
      bgColor: "bg-gray-500"
    },
    {
      name: "Chemistry",
      image: "/images/chemistry.png",
      bgColor: "bg-gradient-to-br from-purple-600 to-indigo-900"
    },
    {
      name: "Biology",
      image: "/images/biology.png",
      bgColor: "bg-gradient-to-br from-yellow-500 to-red-500"
    }
  ];
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-12">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Access all your subjects</h2>
        <button className="text-purple-600 hover:underline text-sm flex items-center cursor-pointer">
          View all <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Subject List Section */}
      <div className="mt-6 relative">
        {/* Left Navigation Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Subject Cards */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar pl-12 pr-12"
        >
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="subject-card-container cursor-pointer transform transition-transform hover:scale-105 w-[300px] flex-shrink-0"
            >
              <div className="subject-card rounded-3xl overflow-hidden bg-white shadow-lg">
                <div className={`relative h-64 ${subject.bgColor} flex items-center justify-center`}>
                  {subject.image && (
                    <div className="absolute inset-0">
                      <img 
                        src={subject.image} 
                        alt={subject.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                  )}
                  {/* <h3 className="relative z-10 text-white text-2xl font-bold text-center px-4">
                    {subject.name}
                  </h3> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
