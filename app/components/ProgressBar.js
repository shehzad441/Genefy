export default function ProgressBar({ currentStep, totalSteps = 6 }) {
    return (
      <div className="mb-8">
        <div className="flex space-x-2 mb-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-16 rounded-full ${index < currentStep ? "bg-indigo-500" : "bg-gray-200"}`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {currentStep} of {totalSteps}
        </p>
      </div>
    )
  };
  