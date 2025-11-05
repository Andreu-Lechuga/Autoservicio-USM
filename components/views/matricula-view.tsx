"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export function MatriculaView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

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
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Postulaciones Actuales</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Periodo
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Carrera
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Campus/Sede
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Tipo de Ingreso
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Estado
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Fecha Estado
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-foreground">
                        Paso
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">2020</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">
                        Ingeniería Civil en Informática
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">San Joaquín</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">Ingreso Regular</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">Matriculado</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">10-MAR-2020</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-foreground">4</td>
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
