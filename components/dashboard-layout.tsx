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
  GraduationCap,
  Briefcase,
  AlertTriangle,
  AlertCircle,
  X,
} from "lucide-react"
import { useAuth } from "@/components/auth-context"
import { useTheme } from "next-themes"
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
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const { userEmail, userName, userLastName, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  // Notificaciones estáticas
  const notifications = [
    {
      type: 'alerta',
      title: 'Alerta Pago de Interés',
      message: 'El pago Matrícula de Agosto está atrasado',
    },
    {
      type: 'alerta',
      title: 'Alerta Pago de Interés',
      message: 'El pago Arancel de Agosto está atrasado',
    },
    {
      type: 'alerta',
      title: 'Alerta Pago de Interés',
      message: 'El pago Matrícula de Septiembre está atrasado',
    },
    {
      type: 'alerta',
      title: 'Alerta Pago de Interés',
      message: 'El pago Arancel de Septiembre está atrasado',
    },
    {
      type: 'aviso',
      title: 'Aviso Pago de Interés',
      message: 'El pago Arancel de Octubre vencerá pronto',
    },
  ]

  const menuItems = [
    { icon: User, label: "Informacion Personal", id: "informacion-personal" },
    { icon: ShoppingCart, label: "Pago en Linea", id: "pago-en-linea" },
    { icon: GraduationCap, label: "Matricula", id: "matricula" },
    { icon: Briefcase, label: "Servicios", id: "servicios" },
  ]

  const handleLogout = () => {
    logout()
    setShowLogoutDialog(false)
  }

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleNotifications = () => {
    setShowNotificationsPopup(!showNotificationsPopup)
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
      <div className="px-8 py-4 bg-[#000053]"></div>

      {/* University Logo and Title */}
      <div className="px-8 pb-6 bg-[#000053]">
        <div className="flex gap-6 items-center">
          <div className="w-64 flex justify-center">
            <img src="/logo-usm.svg" alt="Logo USM" className="h-36 w-auto" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">Universidad Tecnica Federico Santa Maria</h1>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8 bg-gradient-to-b from-[#000053] to-white">
        <div className="flex gap-6 items-start">
          <div className="w-64 bg-sidebar rounded-2xl p-6 flex flex-col h-fit">
            <div className="flex flex-col items-center mb-8">
              <Avatar className="w-20 h-20 mb-3">
                <AvatarFallback className="bg-white text-[#385177] text-xl">
                  <User className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-sidebar-foreground font-semibold">{userName} {userLastName}</div>
                <div className="text-sidebar-foreground/70 text-xs">{userEmail}</div>
              </div>
            </div>

            <nav className="space-y-2 flex-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? "bg-[#000053] text-white font-medium"
                      : "text-sidebar-foreground/70 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="border-t border-sidebar-foreground/20 my-4"></div>

            <div className="space-y-2">
              <button
                onClick={() => onSectionChange("configuracion")}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === "configuracion"
                      ? "bg-[#000053] text-white font-medium"
                      : "text-sidebar-foreground/70 hover:bg-white/5"
                }`}
              >
                <Settings className="w-4 h-4" />
                Configuracion
              </button>
              <button
                onClick={() => setShowLogoutDialog(true)}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-white/5 transition-colors"
              >
                <LogOut className="w-4 h-4 text-red-400" />
                Cerrar Sesion
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 relative">
            {/* New Header - Outside content div, on blue background */}
            <div className="absolute -top-12 left-0 right-0 flex items-center justify-between px-6 z-10">
              <h2 className="text-xl font-semibold text-white">
                Bienvenido <span className="font-bold text-blue-200">{userName} {userLastName}</span> al Portal de Autoservicio Institucional
              </h2>
              <div className="flex items-center gap-3 relative">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  onClick={toggleDarkMode}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <div className="relative">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full relative bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                    onClick={toggleNotifications}
                  >
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                  
                  {showNotificationsPopup && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowNotificationsPopup(false)}
                      />

                      <div className="absolute right-0 top-12 w-[480px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                          <h3 className="font-semibold text-gray-900 dark:text-white">Notificaciones</h3>
                          <button
                            onClick={() => setShowNotificationsPopup(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div>
                          {notifications.map((notification, index) => (
                            <div
                              key={index}
                              className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                                notification.type === 'alerta'
                                  ? 'bg-red-50 dark:bg-red-950 border-l-4 border-l-red-500'
                                  : 'bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500'
                              }`}
                            >
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                  {notification.type === 'alerta' ? (
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                  ) : (
                                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">
                                    {notification.message}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6">
              {activeSection !== "informacion-personal" && (
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-card-foreground">
                    {activeSection === "pago-en-linea" && "Pago en Linea"}
                    {activeSection === "matricula" && "Matricula"}
                    {activeSection === "servicios" && "Servicios"}
                  </h2>
                </div>
              )}

              {children}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center space-y-1">
          <p className="text-xs text-[#000053]">© Universidad Técnica Federico Santa María</p>
          <p className="text-xs text-[#000053]">Portal de Requerimientos</p>
          <p className="text-xs text-[#000053]">Sitio Web administrado por Dirección General de Sistemas de Gestión</p>
        </div>
      </div>
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
