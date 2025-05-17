// Subjects.js
export default function Subjects() {
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

  return (
    <section className="subjects-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Access all your subjects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card-container cursor-pointer transform transition-transform hover:scale-105">
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
                  <h3 className="relative z-10 text-white text-2xl font-bold text-center px-4">
                    
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Explore All Subjects
          </button>
        </div>
      </div>
    </section>
  );
}