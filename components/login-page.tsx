"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Mail, Lock } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor ingresa correo y contraseña")
      return
    }

    if (!email.includes("@")) {
      setError("El correo debe contener el símbolo @")
      return
    }

    const success = login(email, password)
    if (!success) {
      setError("Credenciales inválidas")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000053] to-white flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="text-center">
          <img src="/logo-usm.svg" alt="Logo USM" className="h-36 w-auto mx-auto" />
          <div>
            <h1 className="text-3xl font-bold text-white">
              Universidad Técnica Federico Santa María
            </h1>
            <p className="text-white/90 mt-2">Portal de Autoservicio Institucional</p>
          </div>
        </div>
        

        {/* Login Card */}
        <Card className="p-8 bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold text-[#385177]">Iniciar Sesión</h2>
              <p className="text-sm text-muted-foreground">Ingresa tus credenciales para continuar</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Correo Electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#385177]" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-[#385177]/20 focus:border-[#385177] focus:ring-[#385177]"
                  placeholder="tu.correo@usm.cl"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#385177]" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-[#385177]/20 focus:border-[#385177] focus:ring-[#385177]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#385177] hover:bg-[#2d4060] text-white">
              Ingresar
            </Button>
          </form>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-1">
          <p className="text-xs text-[#385177]">© Universidad Técnica Federico Santa María</p>
          <p className="text-xs text-[#385177]">Sitio Web administrado por Dirección General de Sistemas de Gestión</p>
        </div>
      </div>
    </div>
  )
}
