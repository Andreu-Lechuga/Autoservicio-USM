"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useAuth } from "@/components/auth-context"

export function ConfiguracionView() {
  const [notificacionesActivas, setNotificacionesActivas] = useState(false)
  const [correoSeleccionado, setCorreoSeleccionado] = useState("")
  const { userEmail } = useAuth()

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card">
        <div className="space-y-6 max-w-2xl">
          <h3 className="text-lg font-semibold text-card-foreground">Configuración General</h3>

          {/* Toggle para Notificaciones Preventivas */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
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

          {/* Dropdown de Correos Electrónicos */}
          <div className="space-y-3">
            <Label htmlFor="correo-notificaciones" className="text-base font-medium">
              Correo para Notificaciones
            </Label>
            <Select value={correoSeleccionado} onValueChange={setCorreoSeleccionado}>
              <SelectTrigger id="correo-notificaciones" className="w-full">
                <SelectValue placeholder="Selecciona un correo electrónico" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={userEmail || ""}>{userEmail}</SelectItem>
                <SelectItem value="pedrop2002@gmail.com">pedrop2002@gmail.com</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Las notificaciones se enviarán a este correo electrónico</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
