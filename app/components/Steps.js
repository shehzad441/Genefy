import StepCard from './StepCard';

const stepsData = [
  {
    stepNumber: 1,
    title: 'Genify – Your Smart Learning Assistant',
    points: [
      'Intelli AI provides instant AI assistance to solve doubts and queries.',
      'It offers detailed, step-by-step solutions for complex mathematical problems.',
      'The system adapts to each student\'s level for personalized learning.',
      'It is available 24/7 to answer academic questions.',
      'Intelli AI enhances understanding with contextual explanations.',
    ],
    imgSrc: '/images/step1.png',
  },
  {
    stepNumber: 2,
    title: 'AI Study Notes – Learn Smarter, Not Harder',
    points: [
      'Concise, AI-generated summaries for quick learning.',
      'Highlights key concepts and essential points.',
      'Saves time by providing structured notes.',
      'Enhances retention and understanding.',
      'Perfect for efficient exam preparation.',
    ],
    imgSrc: '/images/step2.png',
  },
  {
    stepNumber: 3,
    title: 'AI Flashcards – Memorize Faster',
    points: [
      'Intelli AI provides instant AI assistance to solve doubts and queries.',
      'It offers detailed, step-by-step solutions for complex mathematical problems.',
      "The system adapts to each student's level for personalized learning.",
      'It is available 24/7 to answer academic questions.',
      'Intelli AI enhances understanding with contextual explanations.',
    ],
    imgSrc: '/images/step3.png',
  },
  {
    stepNumber: 4,
    title: 'AI Mock Exams – Test Your Knowledge',
    points: [
      'Concise, AI-generated summaries for quick learning.',
      'Highlights key concepts and essential points.',
      'Saves time by providing structured notes.',
      'Enhances retention and understanding.',
      'Perfect for efficient exam preparation.',
    ],
    imgSrc: '/images/step4.png',
  },
  {
    stepNumber: 5,
    title: 'AI Practice Questions – Personalized for You',
    points: [
      'Intelli AI provides instant AI assistance to solve doubts and queries.',
      'It offers detailed, step-by-step solutions for complex mathematical problems.',
      "The system adapts to each student's level for personalized learning.",
      'It is available 24/7 to answer academic questions.',
      'Intelli AI enhances understanding with contextual explanations.',
    ],
    imgSrc: '/images/step5.png',
  },
];


export default function Steps() {
  return (
    <section className="flex flex-col gap-20 items-center">
      {stepsData.map((step, idx) => (
        <div key={idx}>
          <StepCard {...step} isReversed={idx % 2 !== 0} />
        </div>
      ))}
       
       <div className="mt-16 mb-8">
        <button className="get-started-btn">Get Started</button>
      </div>
    </section>
  );
}