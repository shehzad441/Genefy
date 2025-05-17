import { OnboardingProvider } from "./context/onboarding-context"

export default function OnboardingLayout({ children }) {
  return (
    <OnboardingProvider>
      <div className="flex min-h-screen">
        <div className="flex-1 p-10">
          <div className="mb-10">
            <h1 className="text-2xl font-medium text-gray-600">Logo</h1>
          </div>
          {children}
        </div>
        <div className="hidden lg:flex lg:flex-1 bg-gray-50 items-center justify-center">
          <div className="p-10">{/* Illustrations will be handled in each page */}</div>
        </div>
      </div>
    </OnboardingProvider>
  )
}
