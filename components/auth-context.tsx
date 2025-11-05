"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  userEmail: string | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  const login = (email: string, password: string) => {
    // Simple validation - in a real app, this would call an API
    if (email && password) {
      setUserEmail(email)
      return true
    }
    return false
  }

  const logout = () => {
    setUserEmail(null)
  }

  return (
    <AuthContext.Provider
      value={{
        userEmail,
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
