"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"
import ProgressBar from "../../../components/ProgressBar"
import NavigationButtons from "../../../components/NavigationButtons"
import { useOnboarding } from "../context/onboarding-context"

const Role = "student" | "teacher" | "parent" | "tutor" | "other"

export default function OnboardingStep1() {
  const { state, updateState } = useOnboarding()
  const [selectedRole, setSelectedRole] = useState(state.role || null)
  const router = useRouter()

  const roles = [
    { id: "student", label: "Student", icon: "/placeholder.svg?height=50&width=50" },
    { id: "teacher", label: "Teacher", icon: "/placeholder.svg?height=50&width=50" },
    { id: "parent", label: "Parent", icon: "/placeholder.svg?height=50&width=50" },
    { id: "tutor", label: "Tutor", icon: "/placeholder.svg?height=50&width=50" },
    { id: "other", label: "Other", icon: "/placeholder.svg?height=50&width=50" },
  ]

  const handleContinue = () => {
    if (selectedRole) {
      updateState({ role: selectedRole })
      router.push("/onboarding/step2")
    }
  }

  return (
    <div>
      <ProgressBar currentStep={1} />

      <h1 className="text-3xl font-bold mb-8">
        Hey! Are you a<span className="text-indigo-500 border-b-2 border-indigo-500 pb-1 ml-2">_______</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg border-2 cursor-pointer transition-all ${
              selectedRole === role.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-indigo-300"
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src={role.icon || "/placeholder.svg"}
                alt={role.label}
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <span className="text-gray-700 font-medium">{role.label}</span>

            {selectedRole === role.id && (
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      <NavigationButtons currentStep={1} disableContinue={!selectedRole} onContinue={handleContinue} />

      <div className="lg:hidden mt-10">
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Onboarding illustration"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>
    </div>
  )
}

