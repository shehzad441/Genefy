"use client"

import { createContext, useContext, useState } from "react"

const OnboardingContext = createContext(undefined)

export function OnboardingProvider({ children }) {
  const [state, setState] = useState({
    role: null,
    school: null,
    curriculum: null,
    grade: null,
    subjects: [],
    referralSources: [],
  })

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  return <OnboardingContext.Provider value={{ state, updateState }}>{children}</OnboardingContext.Provider>
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider")
  }
  return context
}
