"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { Mail, Edit, Lock, User } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export function InformacionPersonalView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const { userEmail, userName, userLastName } = useAuth()
  const [isEditingPersonalEmail, setIsEditingPersonalEmail] = useState(false)
  const [personalEmail, setPersonalEmail] = useState("correo.personal@gmail.com")
  const [tempPersonalEmail, setTempPersonalEmail] = useState("")
  const [showPasswordSuccessPopup, setShowPasswordSuccessPopup] = useState(false)

  const handleEditPersonalEmail = () => {
    setTempPersonalEmail(personalEmail)
    setIsEditingPersonalEmail(true)
  }

  const handleSavePersonalEmail = () => {
    setPersonalEmail(tempPersonalEmail)
    setIsEditingPersonalEmail(false)
  }

  const handleCancelEditPersonalEmail = () => {
    setIsEditingPersonalEmail(false)
  }

  const handleUpdatePassword = () => {
    setShowPasswordSuccessPopup(true)
  }

  useEffect(() => {
    if (showPasswordSuccessPopup) {
      const timer = setTimeout(() => {
        setShowPasswordSuccessPopup(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showPasswordSuccessPopup])

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
      return (
        <div className="space-y-4 max-w-4xl mx-auto px-20">
          <div className="space-y-2">
            <p className="text-base font-medium text-black">Correo Institucional</p>
            <div className="bg-[#F0F4F8] border border-[#385177]/20 rounded-lg p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Mail className="h-4 w-4 text-[#385177]" />
                  <p className="text-sm text-[#385177] font-medium">{userEmail}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  disabled
                  className="border-[#385177]/30 text-[#385177] bg-white opacity-50 cursor-not-allowed"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Editar
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-base font-medium text-black">Correo Personal</p>
            <div className="bg-[#F0F4F8] border border-[#385177]/20 rounded-lg p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Mail className="h-4 w-4 text-[#385177]" />
                  {isEditingPersonalEmail ? (
                    <Input
                      type="email"
                      value={tempPersonalEmail}
                      onChange={(e) => setTempPersonalEmail(e.target.value)}
                      className="text-sm text-[#385177] font-medium border-[#385177]/30 focus:border-[#385177] bg-white"
                      placeholder="Ingrese su correo personal"
                    />
                  ) : (
                    <p className="text-sm text-[#385177] font-medium">{personalEmail}</p>
                  )}
                </div>
                {isEditingPersonalEmail ? (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleSavePersonalEmail}
                      className="border-green-600/30 text-green-700 hover:bg-green-50 hover:text-green-700 bg-white"
                    >
                      Guardar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCancelEditPersonalEmail}
                      className="border-red-600/30 text-red-700 hover:bg-red-50 hover:text-red-700 bg-white"
                    >
                      Cancelar
                    </Button>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleEditPersonalEmail}
                    className="border-[#385177]/30 text-[#385177] hover:bg-[#385177]/20 hover:text-[#385177] bg-white"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Editar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (selectedCard === 1) {
      // Password change content (placeholder)
      return (
        <div className="space-y-6 max-w-md mx-auto">
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

          <Button onClick={handleUpdatePassword} className="w-full bg-[#385177] hover:bg-[#2d4060] text-white">Actualizar Contraseña</Button>
        </div>
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-48 relative">
          <img 
            src="/perfil-fondo-1.jpg" 
            alt="Fondo de perfil" 
            className="w-full h-50 object-cover"
          />
          <div className="absolute -bottom-13 right-4 flex gap-2">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-400 text-blue-700 text-sm font-medium rounded-full">
              Alumno Regular
            </span>
            <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-400 text-amber-700 text-sm font-medium rounded-full">
              Vespertino
            </span>
            <span className="inline-block px-3 py-1 bg-green-50 border border-green-400 text-green-700 text-sm font-medium rounded-full">
              Matrícula Activa
            </span>
          </div>
        </div>
        
        <div className="absolute top-32 left-8">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarFallback className="bg-white text-[#385177] text-4xl">
              <User className="w-16 h-16" />
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="pt-20 px-8 pb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {userName} {userLastName}
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-lg text-gray-600">
                Ingeniería Civil Informática
              </p>
              <p className="text-lg text-gray-600">
                Casa Central, Valparaíso
              </p>
            </div>
            
            {/* Bloque antiguo - Ahora se muestra en la triple columna inferior
            <div className="space-y-1">
              <p className="text-lg text-gray-600">
                <span className="font-bold">Rol:</span> 202073197-5
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">Año de Ingreso:</span> 2020
              </p>
            </div>
            */}
          </div>
          
          
          {/* Nueva sección de triple columna para datos fijos */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {/* Columna RUT */}
              <div className="px-4 text-center">
                <p className="text-base font-bold text-gray-700 mb-2">
                  Rut
                </p>
                <p className="text-lg text-gray-600">
                  20.188.608-K
                </p>
              </div>
              
              {/* Columna AÑO DE INGRESO */}
              <div className="px-4 text-center">
                <p className="text-base font-bold text-gray-700 mb-2">
                  Año de Ingreso
                </p>
                <p className="text-lg text-gray-600">
                  2020
                </p>
              </div>
              
              {/* Columna ROL */}
              <div className="px-4 text-center">
                <p className="text-base font-bold text-gray-700 mb-2">
                  Rol
                </p>
                <p className="text-lg text-gray-600">
                  202073455-6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      {/* Pop-up de confirmación de contraseña */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 z-50 ${
          showPasswordSuccessPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="font-medium">Nueva Contraseña Guardada</p>
      </div>
    </div>
  )
}
