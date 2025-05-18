import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function BookmarkList() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const bookmarks = [
    {
      title: "Information Technology",
      savedDate: "01/01/2025",
      bgColor: "bg-gradient-to-r from-blue-500 to-teal-500",
      iconColor: "text-blue-300",
    },
    {
      title: "Information Technology",
      savedDate: "01/01/2025",
      bgColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      iconColor: "text-orange-300",
    },
    {
      title: "Information Technology",
      savedDate: "01/01/2025",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-500",
      iconColor: "text-pink-300",
    },
  ];

  return (
    <div className="mt-12">
      {/* Header Section */}
      <h2 className="text-[40px] font-bold">Bookmarks</h2>

      {/* Bookmark List Section */}
      <div className="mt-4 relative">
        {/* Left Navigation Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 bg-purple-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Bookmark Cards */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar"
        >
          {bookmarks.map((bookmark, index) => (
            <div
              key={index}
              className={`min-w-[300px] h-[200px] p-4 rounded-lg shadow-lg flex flex-col justify-between relative ${bookmark.bgColor}`}
            >
              {/* Title and Saved Date */}
              <div>
                <h3 className="text-white text-lg font-bold">{bookmark.title}</h3>
                <p className="text-white text-sm mt-1">Saved: {bookmark.savedDate}</p>
              </div>

              {/* Delete Button */}
              <div className="absolute bottom-4 left-4">
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6M9 7h6m-7 0a2 2 0 012-2h4a2 2 0 012 2m-8 0h8"
                    />
                  </svg>
                </button>
              </div>

              {/* Bulb Icon */}
              <div className="absolute bottom-4 right-4">
                <img
                  src="/images/bulb.png"
                  alt="Bulb Icon"
                  className="w-[118px] h-[117px] opacity-80"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 bg-purple-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}