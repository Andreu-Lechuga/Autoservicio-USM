"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Mail, Edit, Lock } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export function InformacionPersonalView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const { userEmail } = useAuth()

  const cards = [
    {
      title: "Administrar tus Correos Electronicos",
      description: "",
    },
    {
      title: "Cambiar tu Contraseña",
      description: "Si deseas cambiar tu contraseña local del autoservicio, entra aqui.",
    },
  ]

  const renderContent = () => {
    if (selectedCard === null) return null

    if (selectedCard === 0) {
      // Email management content
      return (
        <div className="space-y-4">
          {/* Correo Institucional */}
          <div className="space-y-2">
            <p className="text-lg font-medium text-black">Correo Institucional</p>
            <div className="bg-[#F0F4F8] border border-[#385177]/20 rounded-lg p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Mail className="h-5 w-5 text-[#385177]" />
                  <p className="text-base text-[#385177] font-medium">{userEmail}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#385177]/30 text-[#385177] hover:bg-[#385177]/20 hover:text-[#385177] bg-white"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Editar
                </Button>
              </div>
            </div>
          </div>

          {/* Correo Personal */}
          <div className="space-y-2">
            <p className="text-lg font-medium text-black">Correo Personal</p>
            <div className="bg-[#F0F4F8] border border-[#385177]/20 rounded-lg p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Mail className="h-5 w-5 text-[#385177]" />
                  <p className="text-base text-[#385177] font-medium">pedrop2002@gmail.com</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#385177]/30 text-[#385177] hover:bg-[#385177]/20 hover:text-[#385177] bg-white"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Editar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (selectedCard === 1) {
      // Password change content (placeholder)
      return (
        <div className="space-y-6 max-w-md">
          {/* Nueva Contraseña */}
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium text-black">
              Ingrese Nueva Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600" />
              <Input
                id="new-password"
                type="password"
                className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Repetir Contraseña */}
          <div className="space-y-2">
            <label htmlFor="repeat-password" className="text-sm font-medium text-black">
              Repetir Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600" />
              <Input
                id="repeat-password"
                type="password"
                className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Botón Actualizar */}
          <Button className="w-full bg-[#385177] hover:bg-[#2d4060] text-white">Actualizar Contraseña</Button>
        </div>
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`p-3 w-[200px] cursor-pointer transition-colors border-2 ${
              selectedCard === index
                ? "bg-blue-50 border-[#385177]"
                : "bg-card-accent border-gray-100 hover:bg-card-accent/80"
            }`}
            onClick={() => setSelectedCard(index)}
          >
            <div className="space-y-2">
              <div className="text-sm">{card.title}</div>
              {card.description && <div className="text-xs text-muted-foreground">{card.description}</div>}
            </div>
          </Card>
        ))}
      </div>

      {selectedCard !== null && <div className="p-6 bg-card w-full">{renderContent()}</div>}
    </div>
  )
}
