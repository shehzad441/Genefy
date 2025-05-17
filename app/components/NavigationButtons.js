"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function NavigationButtons({
  currentStep,
  totalSteps = 6,
  onContinue,
  disableContinue = false,
  showSkip = false,
}) {
  const router = useRouter()

  const handleBack = () => {
    if (currentStep > 1) {
      router.push(`/onboarding/step${currentStep - 1}`)
    }
  }

  const handleContinue = () => {
    if (onContinue) {
      onContinue()
    } else if (currentStep < totalSteps) {
      router.push(`/onboarding/step${currentStep + 1}`)
    }
  }

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      router.push(`/onboarding/step${currentStep + 1}`)
    }
  }

  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={handleBack}
        className={`flex items-center px-4 py-2 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 ${
          currentStep === 1 ? "invisible" : ""
        }`}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      <div className="flex items-center gap-4">
        {showSkip && (
          <button onClick={handleSkip} className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Skip
          </button>
        )}
        <button
          onClick={handleContinue}
          disabled={disableContinue}
          className="flex items-center px-6 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  )
}
