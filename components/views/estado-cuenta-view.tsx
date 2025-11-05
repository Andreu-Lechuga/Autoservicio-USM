"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function EstadoCuentaView() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const cards = [
    {
      title: "Resumen Histórico",
      description: "Resumen de cargos, pagos, saldos y beneficios en tu cuenta agrupados por periodo.",
    },
    {
      title: "Saldos y Movimientos",
      description: "Detalle de movimientos y saldos de arancel, matrícula, pagos, becas, certificados y otros.",
    },
    {
      title: "Becas y Pagos Recibidos",
      description: "Becas, beneficios, devoluciones y pagos recibidos.",
    },
    {
      title: "Cuenta Bancaria",
      description: "Detalle de la cuenta bancaria habilitada para la recepción de pagos.",
    },
  ]

  const renderHistoricalSummary = () => {
    return (
      <div className="space-y-8">
        <p className="text-sm text-muted-foreground border border-gray-300 p-3 rounded bg-gray-50">
          Resumen histórico de los cargos y pagos realizados en tu cuenta agrupados por código de detalle y periodo
          académico.
        </p>

        {/* Account Balance */}
        <div className="flex justify-between items-center pb-2">
          <span className="font-semibold text-base">Saldo de Cuenta:</span>
          <span className="font-semibold text-base">$3,235,000</span>
        </div>

        {/* Segundo Semestre 2025 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Segundo Semestre 2025</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$130,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$130,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA DIU SJQ ING CIVIL INFORMAT</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,105,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,105,000</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,235,000</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,235,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Primer Semestre 2025 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Primer Semestre 2025</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MORA</td>
                  <td className="border border-gray-300 px-3 py-2">INTERES DE MORA</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$28,381</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$130,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA DIU SJQ ING CIVIL INFORMAT</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,105,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTC</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA CREDITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,877,904</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTD</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA DEBITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,385,477</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,263,381</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,263,381</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Segundo Semestre 2024 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Segundo Semestre 2024</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MORA</td>
                  <td className="border border-gray-300 px-3 py-2">INTERES DE MORA</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$75,899</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$122,500</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA DIU SJQ ING CIVIL INFORMAT</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$2,970,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTC</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA CREDITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,168,399</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,168,399</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,168,399</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Primer Semestre 2024 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Primer Semestre 2024</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MORA</td>
                  <td className="border border-gray-300 px-3 py-2">INTERES DE MORA</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$48,101</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$122,500</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA DIU SJQ ING CIVIL INFORMAT</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$2,970,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTC</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA CREDITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,140,601</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,140,601</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,140,601</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Segundo Semestre 2023 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Segundo Semestre 2023</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA ING CIVIL INFORMA DI SJOAQ</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,105,000</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$3,105,000</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Primer Semestre 2023 */}
        <div className="space-y-3">
          <h3 className="text-orange-500 font-medium text-base">Primer Semestre 2023</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Detalle de Código</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                  <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">CTTN</td>
                  <td className="border border-gray-300 px-3 py-2">TARJETA UNIVERSITA INTELIGENTE</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$4,200</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MORA</td>
                  <td className="border border-gray-300 px-3 py-2">INTERES DE MORA</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$108,260</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">MTRD</td>
                  <td className="border border-gray-300 px-3 py-2">MATRICULA PREGRADO DIURNO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$114,500</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">1773</td>
                  <td className="border border-gray-300 px-3 py-2">ARA DIU SJQ ING CIVIL INFORMAT</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,275,750</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTC</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA CREDITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,498,510</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">POTD</td>
                  <td className="border border-gray-300 px-3 py-2">PAGO TARJETA DEBITO</td>
                  <td className="border border-gray-300 px-3 py-2 text-right"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$4,200</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Cargos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,502,710</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Créditos y Pagos del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$1,502,710</td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-gray-300 px-3 py-2" colSpan={2}>
                    Saldo del Periodo:
                  </td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <td className="border border-gray-300 px-3 py-2 text-right">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderBalancesAndMovements = () => {
    const transactions = [
      {
        periodo: "202510",
        fecha: "21-JUL-2025",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "14904",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202510",
        fecha: "21-JUL-2025",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "1877904",
        saldo: "0",
        recibo: "757284",
      },
      {
        periodo: "202510",
        fecha: "20-MAY-2025",
        codigo: "POTD",
        descripcion: "PAGO TARJETA DEBITO",
        cargo: "0",
        pago: "690898",
        saldo: "0",
        recibo: "745872",
      },
      {
        periodo: "202510",
        fecha: "20-MAY-2025",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "4898",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202510",
        fecha: "06-MAY-2025",
        codigo: "POTD",
        descripcion: "PAGO TARJETA DEBITO",
        cargo: "0",
        pago: "694579",
        saldo: "0",
        recibo: "743834",
      },
      {
        periodo: "202510",
        fecha: "06-MAY-2025",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "8579",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202520",
        fecha: "14-ENE-2025",
        codigo: "MTRD",
        descripcion: "MATRICULA PREGRADO DIURNO",
        cargo: "130000",
        pago: "0",
        saldo: "130000",
        recibo: "",
      },
      {
        periodo: "202510",
        fecha: "14-ENE-2025",
        codigo: "MTRD",
        descripcion: "MATRICULA PREGRADO DIURNO",
        cargo: "130000",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202510",
        fecha: "14-ENE-2025",
        codigo: "1773",
        descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
        cargo: "3105000",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202520",
        fecha: "14-ENE-2025",
        codigo: "1773",
        descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
        cargo: "3105000",
        pago: "0",
        saldo: "3105000",
        recibo: "",
      },
      {
        periodo: "202420",
        fecha: "10-ENE-2025",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "75899",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202420",
        fecha: "10-ENE-2025",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "3168399",
        saldo: "0",
        recibo: "720171",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "1189980",
        saldo: "0",
        recibo: "681751",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "1980",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "23734",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "1272984",
        saldo: "0",
        recibo: "681748",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "677637",
        saldo: "0",
        recibo: "681747",
      },
      {
        periodo: "202410",
        fecha: "10-JUL-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "22387",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "14288",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "269438",
        saldo: "0",
        recibo: "645622",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "16840",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "271990",
        saldo: "0",
        recibo: "645620",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "274626",
        saldo: "0",
        recibo: "645618",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "19476",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "22028",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
      {
        periodo: "202310",
        fecha: "14-ENE-2024",
        codigo: "POTC",
        descripcion: "PAGO TARJETA CREDITO",
        cargo: "0",
        pago: "405278",
        saldo: "0",
        recibo: "645616",
      },
      {
        periodo: "202220",
        fecha: "08-ENE-2024",
        codigo: "MORA",
        descripcion: "INTERES DE MORA",
        cargo: "62458",
        pago: "0",
        saldo: "0",
        recibo: "",
      },
    ]

    return (
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Detalle de saldos y movimientos</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Periodo</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fecha</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Código</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                <th className="border border-gray-300 px-3 py-2 text-right font-medium">Cargo</th>
                <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pago</th>
                <th className="border border-gray-300 px-3 py-2 text-right font-medium">Saldo</th>
                <th className="border border-gray-300 px-3 py-2 text-right font-medium">Recibo</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">{transaction.periodo}</td>
                  <td className="border border-gray-300 px-3 py-2">{transaction.fecha}</td>
                  <td className="border border-gray-300 px-3 py-2">{transaction.codigo}</td>
                  <td className="border border-gray-300 px-3 py-2">{transaction.descripcion}</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">
                    {transaction.cargo !== "0" ? transaction.cargo : ""}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">
                    {transaction.pago !== "0" ? transaction.pago : ""}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">
                    {transaction.saldo !== "0" ? transaction.saldo : ""}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right">{transaction.recibo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderScholarshipsAndPayments = () => {
    const payments = [
      {
        fechaDocumento: "25-ABR-2023",
        tipoDocumento: "REABONO VALE VISTA",
        descripcion: "0208065041 REABONO VVISTA.I0363569",
        documento: "J0048054",
        montoTotal: "38160",
        tipoPago: "Depósito Directo",
        fechaEmision: "24-AGO-2023",
      },
      {
        fechaDocumento: "14-DIC-2022",
        tipoDocumento: "BECA AYUDANTIA",
        descripcion: "BECA AYUDANTIA DIC 2022 DEF INF CC",
        documento: "20221214",
        montoTotal: "38160",
        tipoPago: "Depósito Directo",
        fechaEmision: "16-DIC-2022",
      },
      {
        fechaDocumento: "22-NOV-2022",
        tipoDocumento: "BECA AYUDANTIA",
        descripcion: "BECA AYUDANTIA NOV 2022 DEF INF CC",
        documento: "20221122",
        montoTotal: "71550",
        tipoPago: "Depósito Directo",
        fechaEmision: "24-NOV-2022",
      },
      {
        fechaDocumento: "24-OCT-2022",
        tipoDocumento: "BECA AYUDANTIA",
        descripcion: "BECA AYUDANTIA OCT 2022 DEF INF CC",
        documento: "20221024",
        montoTotal: "71550",
        tipoPago: "Depósito Directo",
        fechaEmision: "26-OCT-2022",
      },
      {
        fechaDocumento: "27-SEP-2022",
        tipoDocumento: "BECA AYUDANTIA",
        descripcion: "BECA AYUDANTIA SEP 2022 DEF INF CC",
        documento: "20220927",
        montoTotal: "71550",
        tipoPago: "Depósito Directo",
        fechaEmision: "28-SEP-2022",
      },
      {
        fechaDocumento: "15-SEP-2022",
        tipoDocumento: "BECA AYUDANTIA",
        descripcion: "BECA AYUDANTIA AGO 2022 DEF INF CC",
        documento: "20220915",
        montoTotal: "38160",
        tipoPago: "Vale Vista",
        fechaEmision: "16-SEP-2022",
      },
    ]

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground border border-gray-300 p-3 rounded bg-gray-50">
          A continuación, se muestran las becas, beneficios, devoluciones y pagos emitidos por la universidad.
        </p>
        <h3 className="text-base font-semibold">Detalle de pagos</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fecha Documento</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Tipo Documento</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Descripción</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Documento</th>
                <th className="border border-gray-300 px-3 py-2 text-right font-medium">Monto Total</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Tipo Pago</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fecha Emisión Pago</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">{payment.fechaDocumento}</td>
                  <td className="border border-gray-300 px-3 py-2">{payment.tipoDocumento}</td>
                  <td className="border border-gray-300 px-3 py-2">{payment.descripcion}</td>
                  <td className="border border-gray-300 px-3 py-2">{payment.documento}</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">{payment.montoTotal}</td>
                  <td className="border border-gray-300 px-3 py-2">{payment.tipoPago}</td>
                  <td className="border border-gray-300 px-3 py-2">{payment.fechaEmision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderBankAccount = () => {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground border border-gray-300 p-3 rounded bg-gray-50">
          Cuenta bancaria a donde se realizarán los reembolsos, depósitos de becas, pagos de boletas de honorarios,
          entre otros. En caso de que requiera actualizar estos datos, por favor realizar la Solicitud de Servicio de{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Actualización de Cuenta Bancaria
          </a>
        </p>
        <h3 className="text-base font-semibold">Detalle de cuenta bancaria</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Banco</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Número de cuenta</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fecha actualización</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">BCI - BANCO DE CREDITO E INVERSIONES</td>
                <td className="border border-gray-300 px-3 py-2">87294563</td>
                <td className="border border-gray-300 px-3 py-2">19-SEP-2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
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
          {selectedCard === 0 ? (
            renderHistoricalSummary()
          ) : selectedCard === 1 ? (
            renderBalancesAndMovements()
          ) : selectedCard === 2 ? (
            renderScholarshipsAndPayments()
          ) : selectedCard === 3 ? (
            renderBankAccount()
          ) : (
            <p className="text-muted-foreground">Contenido de {cards[selectedCard].title} se mostrará aquí.</p>
          )}
        </div>
      )}
    </div>
  )
}
