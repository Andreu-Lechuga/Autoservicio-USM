"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export function MatriculaView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const getStatusBadge = (estado: string) => {
    if (estado === "Matriculado") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Matriculado
        </span>
      )
    }
    return null
  }

  const cards = [
    { title: "Inicia tu Matricula", description: "" },
    { title: "Revisa el Estado de tus Postulaciones", description: "" },
  ]

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
              {card.description && <div className="text-xs text-muted-foreground">{card.description}</div>}
            </div>
          </Card>
        ))}
      </div>

      {selectedCard !== null && (
        <div className="w-full rounded-lg p-6 bg-card">
          {selectedCard === 0 && (
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <p className="text-base text-foreground">Fuera de periodo de matricula</p>
            </div>
          )}
          {selectedCard === 1 && (
            <div className="space-y-6">
              {/* Modern Table */}
              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Periodo
                      </th>
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Carrera
                      </th>
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Campus
                      </th>
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Ingreso
                      </th>
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Fecha de Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold text-gray-900">2020</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">Ingeniería Civil en Informática</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">Casa Central</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">Regular</span>
                      </td>
                      <td className="px-4 py-4">{getStatusBadge("Matriculado")}</td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">10-MAR-2020</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
