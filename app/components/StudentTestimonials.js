import { Star, StarHalf } from 'lucide-react';

export default function StudentTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The AI-driven notes, flashcards, and practice questions make studying so much easier. I love how the platform adapts to my weak areas and helps me improve!"
    },
    {
      id: 2,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The platform's smart recommendations save me so much time by analyzing my performance and suggesting targeted study materials. I can focus only on the areas where I need improvement, and this personalized approach has significantly boosted my understanding and exam scores!"
    },
    {
      id: 3,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The AI-driven notes, flashcards, and practice questions make studying so much easier. I love how the platform adapts to my weak areas and helps me improve!"
    },
    {
      id: 4,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The AI-driven platform identifies my weak spots and provides customized practice questions. It feels like having a personal tutor available 24/7!"
    },
    {
      id: 5,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The AI-driven platform identifies my weak spots and provides customized practice questions. It feels like having a personal tutor available 24/7!"
    },
    {
      id: 6,
      name: "Ashley Wilson",
      program: "IBDP Math AA HL",
      rating: 4,
      image: "/images/ashley.jpg",
      text: "The AI-driven notes, flashcards, and practice questions make studying so much easier. I love how the platform adapts to my weak areas and helps me improve!"
    },

    {
    id: 7,
    name: "Ashley Wilson",
    program: "IBDP Math AA HL",
    rating: 4,
    image: "/images/ashley.jpg",
    text: "The AI-driven notes, flashcards, and practice questions make studying so much easier. I love how the platform adapts to my weak areas and helps me improve!"
    },

    {
        id: 8,
        name: "Ashley Wilson",
        program: "IBDP Math AA HL",
        rating: 4,
        image: "/images/ashley.jpg",
        text: "The platform's smart recommendations save me so much time by analyzing my performance and suggesting targeted study materials. I can focus only on the areas where"
    }

  ];

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />);
      } else {
        stars.push(<Star key={i} size={18} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="testimonials-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          What our students saying
        </h2>
        
        <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
             <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                  <div className="flex mt-1">
                    {renderRating(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}