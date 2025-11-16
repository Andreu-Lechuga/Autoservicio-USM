"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { InformacionPersonalView } from "@/components/views/informacion-personal-view"
import { MatriculaView } from "@/components/views/matricula-view"
import { PagoEnLineaView } from "@/components/views/pago-en-linea-view"
import { EstadoCuentaView } from "@/components/views/estado-cuenta-view"
import { ServiciosView } from "@/components/views/servicios-view"
import { ConfiguracionView } from "@/components/views/configuracion-view"
import { AuthProvider, useAuth } from "@/components/auth-context"
import { LoginPage } from "@/components/login-page"

function DashboardContent() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { isAuthenticated } = useAuth()

  const handleSectionChange = (section: string) => {
    // Toggle: si la sección clickeada ya está activa, des-seleccionar
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const renderContent = () => {
    if (!activeSection) return null

    switch (activeSection) {
      case "informacion-personal":
        return <InformacionPersonalView />
      case "matricula":
        return <MatriculaView />
      case "pago-en-linea":
        return <PagoEnLineaView />
      case "estado-cuenta":
        return <EstadoCuentaView />
      case "servicios":
        return <ServiciosView />
      case "configuracion":
        return <ConfiguracionView />
      default:
        return null
    }
  }

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={handleSectionChange}>
      <div className="space-y-6">{renderContent()}</div>
    </DashboardLayout>
  )
}

export default function DashboardPage() {
  return (
    <AuthProvider>
      <DashboardContent />
    </AuthProvider>
  )
}
