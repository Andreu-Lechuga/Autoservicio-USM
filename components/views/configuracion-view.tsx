"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-context"

export function ConfiguracionView() {
  const [notificacionesActivas, setNotificacionesActivas] = useState(false)
  const [correoSeleccionado, setCorreoSeleccionado] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const { userEmail } = useAuth()

  // Cargar configuración guardada al montar el componente
  useEffect(() => {
    const savedNotificaciones = localStorage.getItem("notificacionesActivas")
    const savedCorreo = localStorage.getItem("correoSeleccionado")
    
    if (savedNotificaciones !== null) {
      setNotificacionesActivas(savedNotificaciones === "true")
    }
    if (savedCorreo) {
      setCorreoSeleccionado(savedCorreo)
    }
  }, [])

  // Función para guardar la configuración
  const handleGuardar = () => {
    localStorage.setItem("notificacionesActivas", String(notificacionesActivas))
    localStorage.setItem("correoSeleccionado", correoSeleccionado)
    
    setPopupMessage("Correo guardado correctamente")
    setShowPopup(true)
    
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      {/* Toggle para Notificaciones Preventivas */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200 max-w-2xl">
        <div className="space-y-0.5">
          <Label htmlFor="notificaciones-preventivas" className="text-base font-medium">
            Activar Notificaciones Preventivas
          </Label>
          <p className="text-sm text-muted-foreground">Recibe alertas sobre fechas importantes y recordatorios</p>
        </div>
        <Switch
          id="notificaciones-preventivas"
          checked={notificacionesActivas}
          onCheckedChange={setNotificacionesActivas}
        />
      </div>

      {/* Dropdown de Correos Electrónicos - Solo visible si notificaciones activas */}
      {notificacionesActivas && (
        <div className="space-y-3 max-w-2xl">
          <Label htmlFor="correo-notificaciones" className="text-base font-medium">
            Correo para Notificaciones
          </Label>
          <Select value={correoSeleccionado} onValueChange={setCorreoSeleccionado}>
            <SelectTrigger id="correo-notificaciones" className="w-full">
              <SelectValue placeholder="Selecciona un correo electrónico" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={userEmail || ""}>{userEmail}</SelectItem>
              <SelectItem value="correo.personal@gmail.com">correo.personal@gmail.com</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">Las notificaciones se enviarán a este correo electrónico</p>
          
          {/* Botón Guardar */}
          <div className="pt-2">
            <button 
              onClick={handleGuardar}
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
            >
              Guardar
            </button>
          </div>
        </div>
      )}

      {/* Pop-up de confirmación */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 z-50 ${
          showPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="font-medium">{popupMessage}</p>
      </div>
    </div>
  )
}
