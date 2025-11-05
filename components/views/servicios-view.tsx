"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function ServiciosView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [categoria, setCategoria] = useState<string>("ninguno")
  const [servicio, setServicio] = useState<string>("ninguno")

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
                onChange={(e) => setCategoria(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ninguno">Ninguno</option>
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
                <option value="ninguno">Ninguno</option>
                <option value="certificados">Certificados Digitales</option>
                <option value="solicitudes">Solicitudes de Servicios</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
              Continuar
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
              Anular
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
              Búsqueda por texto
            </button>
          </div>
        </div>
      )
    }

    if (selectedCard === 1) {
      // Estado de Solicitudes
      return (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
            <p>
              Si tu certificado tiene como Status &apos;Entregada&apos; debes ir a descargarlo en la sección Servicios,{" "}
              <a href="#" className="text-blue-600 underline hover:text-blue-800">
                Descarga de Certificados
              </a>{" "}
              y elegir el modo de descarga. Si tienes problemas con tu certificado, puedes contactarnos al correo
              electrónico{" "}
              <a href="mailto:direccion.estudios@usm.cl" className="text-blue-600 underline hover:text-blue-800">
                direccion.estudios@usm.cl
              </a>{" "}
              indicando tu RUT.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Servicios solicitados</h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Número de servicio
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de entrega estimada
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de captura
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Servicio</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de entrega
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Status</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Fecha de pago</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        8344
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Sin fecha de entrega estimada</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">19-SEP-2022</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Actualización de Cuenta Bancaria</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Sin fecha de entrega</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Aprobada</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Nuevo
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Solicitar un nuevo servicio</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }

    if (selectedCard === 2) {
      // Descarga de Certificados
      return (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded p-4 text-sm flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs mt-0.5">
              !
            </div>
            <p className="text-red-800">No hay solicitudes de servicio con certificados.</p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Solicitudes de Servicio con Certificados</h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Número de Servicio
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de entrega estimada
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de captura
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Servicio</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                      Fecha de entrega
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Estado</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Fecha de pago</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Certificado</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Enviar e-mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Nuevo
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Solicitar un nuevo Servicio</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
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
    </div>
  )
}
