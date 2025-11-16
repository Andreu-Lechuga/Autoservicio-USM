"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Download } from "lucide-react"

export function ServiciosView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [categoria, setCategoria] = useState<string>("ninguno")
  const [servicio, setServicio] = useState<string>("Ninguno")
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [popupColor, setPopupColor] = useState("bg-blue-600")

  // Objeto estático con las categorías y servicios correspondientes
  const serviciosPorCategoria: Record<string, string[]> = {
    "ninguno": ["Ninguno"],
    "certificados": [
      "Ninguno",
      "Certificado de Alumno Regular",
      "Certificado de Arancel y Matricula",
      "Seguro de Practica"
    ],
    "solicitudes": [
      "Ninguno",
      "Actualizacion de Cuenta Bancaria"
    ]
  }

  // Función para manejar el cambio de categoría
  const handleCategoriaChange = (newCategoria: string) => {
    setCategoria(newCategoria)
    setServicio("Ninguno") // Resetear servicio cuando cambia la categoría
  }

  // Función para manejar la confirmación con dos mensajes consecutivos
  const handleConfirmar = () => {
    // Primer mensaje: "Documento Solicitado"
    setPopupMessage("Documento Solicitado")
    setPopupColor("bg-blue-600")
    setShowPopup(true)
    
    // Ocultar primer mensaje después de 3 segundos
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
    
    // Mostrar segundo mensaje después de 4 segundos (con pausa de 0.5s)
    setTimeout(() => {
      setPopupMessage("Revisa Descarga de Certificados")
      setPopupColor("bg-blue-600")
      setShowPopup(true)
    }, 4000)
    
    // Ocultar segundo mensaje después de 7 segundos
    setTimeout(() => {
      setShowPopup(false)
    }, 7000)
  }

  const handleDownload = () => {
    // Primer mensaje: "Descargando Certificado"
    setPopupMessage("Descargando Certificado")
    setPopupColor("bg-blue-600")
    setShowPopup(true)
    
    // Ocultar primer mensaje después de 3 segundos
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
    
    // Mostrar segundo mensaje después de 4 segundos (con pausa de 0.5s)
    setTimeout(() => {
      setPopupMessage("Descargado Correctamente")
      setPopupColor("bg-green-600")
      setShowPopup(true)
    }, 4000)
    
    // Ocultar segundo mensaje después de 7 segundos
    setTimeout(() => {
      setShowPopup(false)
    }, 7000)
  }

  const getStatusBadge = (estado: string) => {
    if (estado === "Entregado") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Entregado
        </span>
      )
    }
    if (estado === "Aprobada") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Aprobada
        </span>
      )
    }
    return null
  }

  const cards = [
    {
      title: "Solicitud de Servicio",
      description:
        "En esta opción puedes solicitar certificados digitales con entrega inmediata y realizar solicitudes de servicio.",
    },
    {
      title: "Estado de Solicitudes",
      description: "En esta sección puedes revisar el estado de un servicio solicitado previamente.",
    },
    {
      title: "Descarga de Certificados",
      description:
        "En esta opción puedes descargar o reenviar a un correo los certificados que previamente hayas adquirido.",
    },
  ]

  const renderContent = () => {
    if (selectedCard === 0) {
      // Solicitud de Servicio
      return (
        <div className="space-y-6">
          <div className="text-sm text-red-600">
            <span className="font-bold">*</span> indica campo requerido
          </div>

          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium min-w-[100px]">
                Categoría: <span className="text-red-600">*</span>
              </label>
              <select
                value={categoria}
                onChange={(e) => handleCategoriaChange(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ninguno">Ninguno</option>
                <option value="certificados">Certificados Digitales</option>
                <option value="solicitudes">Solicitud de Servicios</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm font-medium min-w-[100px]">
                Servicio: <span className="text-red-600">*</span>
              </label>
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {serviciosPorCategoria[categoria].map((servicioOpcion) => (
                  <option key={servicioOpcion} value={servicioOpcion}>
                    {servicioOpcion}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={handleConfirmar}
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
            >
              Confirmar
            </button>
          </div>
        </div>
      )
    }

    if (selectedCard === 1) {
      // Estado de Solicitudes
      return (
        <div className="space-y-6">
          {/* Modern Table */}
          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Servicio
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Fecha de Solicitud
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Fecha de Entrega
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Nro Servicio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">Actualización de Cuenta Bancaria</span>
                  </td>
                  <td className="px-4 py-4">{getStatusBadge("Aprobada")}</td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">19-SEPT-2022</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">Sin fecha</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-gray-900">8344</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    if (selectedCard === 2) {
      // Descarga de Certificados
      return (
        <div className="space-y-6">
          {/* Modern Table */}
          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Servicio
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Fecha Solicitud
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Fecha Entrega
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    ID Servicio
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">Seguro de Practica</span>
                  </td>
                  <td className="px-4 py-4">{getStatusBadge("Entregado")}</td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">12-NOV-2025</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">12-NOV-2025</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-gray-900">99059</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <Button
                        onClick={handleDownload}
                        size="icon"
                        className="bg-sky-700 hover:bg-sky-900 text-white h-9 w-9"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    return <p className="text-muted-foreground">Contenido de {cards[selectedCard!].title} se mostrará aquí.</p>
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
              <div className="text-sm text-card-foreground">{card.title}</div>
              <div className="text-xs text-muted-foreground">{card.description}</div>
            </div>
          </Card>
        ))}
      </div>

      {selectedCard !== null && (
        <div className="w-full rounded-lg p-6 bg-card">
          <h3 className="text-lg font-medium mb-4">{cards[selectedCard].title}</h3>
          {renderContent()}
        </div>
      )}

      {/* Pop-up de mensajes */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 ${popupColor} text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 z-50 ${
          showPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="font-medium">{popupMessage}</p>
      </div>
    </div>
  )
}
