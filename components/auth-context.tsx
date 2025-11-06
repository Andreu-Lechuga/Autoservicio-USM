"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  userEmail: string | null
  userName: string | null
  userLastName: string | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

function extractNameFromEmail(email: string) {
  const [localPart] = email.split('@')
  const [firstName, lastName] = localPart.split('.')
  return {
    firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1)
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [userLastName, setUserLastName] = useState<string | null>(null)

  const login = (email: string, password: string) => {
    // Simple validation - in a real app, this would call an API
    if (email && password) {
      setUserEmail(email)
      const { firstName, lastName } = extractNameFromEmail(email)
      setUserName(firstName)
      setUserLastName(lastName)
      return true
    }
    return false
  }

  const logout = () => {
    setUserEmail(null)
    setUserName(null)
    setUserLastName(null)
  }

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        userName,
        userLastName,
        login,
        logout,
        isAuthenticated: !!userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
