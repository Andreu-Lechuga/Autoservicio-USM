"use client"

import { type ReactNode, useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Moon,
  Sun,
  User,
} from "lucide-react"
import { useAuth } from "@/components/auth-context"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface DashboardLayoutProps {
  children: ReactNode
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [showNotificationDialog, setShowNotificationDialog] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const { userEmail, logout } = useAuth()

  const menuItems = [
    { icon: ShoppingCart, label: "Pago en Linea", id: "pago-en-linea" },
    { icon: Package, label: "Matricula", id: "matricula" },
    { icon: BarChart3, label: "Servicios", id: "servicios" },
    { icon: LayoutDashboard, label: "Informacion Personal", id: "informacion-personal" },
    { icon: Settings, label: "Configuracion", id: "configuracion", disabled: true },
  ]

  const handleLogout = () => {
    logout()
    setShowLogoutDialog(false)
  }

  const handleAcceptNotifications = () => {
    setShowNotificationDialog(false)
    setShowSuccessToast(true)
  }

  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => {
        setShowSuccessToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showSuccessToast])

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="px-8 py-4 bg-[#385177]"></div>

      {/* University Logo and Title */}
      <div className="px-8 pb-6 bg-[#385177]">
        <div className="flex gap-6 items-center">
          <div className="w-64 flex justify-center">
            <img src="/logo-usm.svg" alt="Logo USM" className="h-24 w-auto" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">Universidad Tecnica Federico Santa Maria</h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8 bg-gradient-to-b from-[#385177] to-white">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-sidebar rounded-2xl p-6 flex flex-col h-fit">
            {/* User Profile */}
            <div className="flex flex-col items-center mb-8">
              <Avatar className="w-20 h-20 mb-3">
                <AvatarFallback className="bg-white text-[#385177] text-xl">
                  <User className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-sidebar-foreground font-semibold">Bienvenid@</div>
                <div className="text-sidebar-foreground/70 text-xs">{userEmail}</div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-2 flex-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSectionChange(item.id)}
                  disabled={item.disabled}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? "bg-[#385177] text-white font-medium"
                      : "text-sidebar-foreground/70 hover:bg-white/5"
                  } ${item.disabled ? "opacity-40 cursor-not-allowed hover:bg-transparent" : ""}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setShowLogoutDialog(true)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-white/5 transition-colors mt-4"
            >
              <LogOut className="w-4 h-4 text-red-400" />
              Cerrar Sesion
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-card rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-card-foreground">
                Bienvenid@ al Portal de Autoservicio Institucional
              </h2>
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-sidebar text-sidebar-foreground hover:bg-sidebar/90"
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full relative"
                  onClick={() => setShowNotificationDialog(true)}
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
              </div>
            </div>

            {/* Dashboard Content */}
            {children}
          </div>
        </div>

        {/* Footer Texts */}
        <div className="mt-4 text-center space-y-1">
          <p className="text-xs text-black">© Universidad Técnica Federico Santa María</p>
          <p className="text-xs text-black">Portal de Requerimientos</p>
          <p className="text-xs text-black">Sitio Web administrado por Dirección General de Sistemas de Gestión</p>
        </div>
      </div>

      {/* Notification Dialog */}
      <AlertDialog open={showNotificationDialog} onOpenChange={setShowNotificationDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Notificaciones</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Le gustaría recibir notificaciones y recordatorios del portal de autoservicio institucional?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={handleAcceptNotifications}>Sí</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Logout Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de cerrar sesión. Tendrás que volver a iniciar sesión para acceder al portal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Cerrar Sesión</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transition-all duration-500 ${
          showSuccessToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="font-medium">Notificaciones activadas correctamente para {userEmail}</p>
      </div>
    </div>
  )
}
