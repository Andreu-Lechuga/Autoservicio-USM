"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAuth } from "@/components/auth-context"
import { MoreVertical } from "lucide-react"

export function PagoEnLineaView() {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const { logout } = useAuth()
  const [charges, setCharges] = useState([
    {
      tipo: "Matrícula",
      descripcion: "Pregrado Diurno",
      fechaVencimiento: "15-AGO-2025",
      monto: 65000.0,
      intereses: 1040.0,
      total: 66040.0,
      estado: "vencido" as const,
    },
    {
      tipo: "Arancel",
      descripcion: "Ing. Civil Informática",
      fechaVencimiento: "31-AGO-2025",
      monto: 621000.0,
      intereses: 6624.0,
      total: 627624.0,
      estado: "vencido" as const,
    },
    {
      tipo: "Matrícula",
      descripcion: "Pregrado Diurno",
      fechaVencimiento: "15-SEP-2025",
      monto: 65000.0,
      intereses: 368.0,
      total: 65368.0,
      estado: "vencido" as const,
    },
    {
      tipo: "Arancel",
      descripcion: "Ing. Civil Informática",
      fechaVencimiento: "30-SEP-2025",
      monto: 621000.0,
      intereses: 414.0,
      total: 621414.0,
      estado: "vencido" as const,
    },
    {
      tipo: "Arancel",
      descripcion: "Ing. Civil Informática",
      fechaVencimiento: "31-OCT-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
      estado: "por-vencer" as const,
    },
    {
      tipo: "Arancel",
      descripcion: "Ing. Civil Informática",
      fechaVencimiento: "30-NOV-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
      estado: "activo" as const,
    },
    {
      tipo: "Arancel",
      descripcion: "Ing. Civil Informática",
      fechaVencimiento: "31-DIC-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
      estado: "activo" as const,
    },
  ])

  const handleRowSelection = (index: number) => {
    setSelectedRows((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const handleClearSelection = () => {
    setSelectedRows([])
  }

  const totalSeleccionado = selectedRows.reduce((sum, index) => sum + charges[index].total, 0)
  const interesAcumulado = charges.reduce((sum, charge) => sum + charge.intereses, 0)
  const deudaTotal = charges.reduce((sum, charge) => sum + charge.total, 0)

  const saldoCuenta = 3243446.0

  const handlePagoEnLinea = () => {
    if (selectedRows.length > 0) {
      setShowPaymentModal(true)
    }
  }

  const handleConfirmPayment = () => {
    // Remove selected items from charges array
    const newCharges = charges.filter((_, index) => !selectedRows.includes(index))
    setCharges(newCharges)
    // Clear selection
    setSelectedRows([])
    // Close payment modal
    setShowPaymentModal(false)
    // Show success dialog
    setShowSuccessDialog(true)
  }

  const handleSwitchAccount = () => {
    setShowSuccessDialog(false)
    logout()
  }

  const hasSelection = selectedRows.length > 0

  const getStatusBadge = (estado: "vencido" | "por-vencer" | "activo") => {
    switch (estado) {
      case "vencido":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Atrasado
          </span>
        )
      case "por-vencer":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Expira en 7 días
          </span>
        )
      case "activo":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            A tiempo
          </span>
        )
    }
  }

  return (
    <div className="w-full rounded-lg p-6 bg-card">
      <div className="space-y-6">
        {/* Modern Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Deuda Total 2025-2</div>
            <div className="text-2xl font-bold text-gray-900">
              $
              {deudaTotal.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-red-200 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Interés Acumulado
            </div>
            <div className="text-2xl font-bold text-red-700">
              $
              {interesAcumulado.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Total Seleccionado</div>
            <div className="text-2xl font-bold text-gray-900">
              $
              {totalSeleccionado.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>

        {/* Modern Table */}
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selectedRows.length === charges.length}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRows(charges.map((_, i) => i))
                      } else {
                        setSelectedRows([])
                      }
                    }}
                  />
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Detalle
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Vencimiento
                </th>
                <th className="px-4 py-3.5 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Monto
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-4 py-3.5 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {charges.map((charge, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <Checkbox
                      checked={selectedRows.includes(index)}
                      onCheckedChange={() => handleRowSelection(index)}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">{charge.tipo}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{charge.descripcion}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{charge.fechaVencimiento}</span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-semibold text-gray-900">
                        $
                        {charge.total.toLocaleString("es-CL", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                      {charge.intereses > 0 && (
                        <span className="text-xs text-red-600 mt-0.5">
                          +${charge.intereses.toLocaleString("es-CL")} intereses
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">{getStatusBadge(charge.estado)}</td>
                  <td className="px-4 py-4 text-right">
                    <span className="text-sm font-bold text-gray-900">
                      $
                      {charge.total.toLocaleString("es-CL", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-semibold text-gray-700">Saldo Neto a Pagar: </span>
            <span className="font-bold text-gray-900 text-lg">
              $
              {totalSeleccionado.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleClearSelection}
            disabled={!hasSelection}
          >
            Limpiar selección
          </Button>
        </div>

        {/* Payment Button */}
        <div className="flex justify-center pt-4">
          <Button
            className="bg-[#1e3a5f] hover:bg-[#152a45] text-white px-12 py-6 text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
            onClick={handlePagoEnLinea}
            disabled={!hasSelection}
          >
            Proceder al Pago en Línea
          </Button>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmación de Pago</DialogTitle>
            <DialogDescription>
              Esto es una transacción por el monto total de{" "}
              <span className="font-bold text-foreground">
                CLP $
                {totalSeleccionado.toLocaleString("es-CL", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
              Cancelar
            </Button>
            <Button className="bg-[#1e3a5f] hover:bg-[#152a45]" onClick={handleConfirmPayment}>
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-green-600 text-xl font-bold">Pago confirmado</DialogTitle>
            <DialogDescription>Su pago ha sido procesado exitosamente.</DialogDescription>
          </DialogHeader>
          <div className="border-t pt-4 mt-4">
            <p className="text-xs text-muted-foreground text-center mb-3">
              ¿Eres apoderado y quieres pagar en otra cuenta?
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setShowSuccessDialog(false)}>
                No
              </Button>
              <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#152a45]" onClick={handleSwitchAccount}>
                Sí
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
