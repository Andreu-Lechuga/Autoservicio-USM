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

export function PagoEnLineaView() {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const { logout } = useAuth()
  const [charges, setCharges] = useState([
    {
      periodo: "2025",
      codigo: "MTRD",
      descripcion: "MATRICULA PREGRADO DIURNO",
      fechaVencimiento: "15-AGO-2025",
      monto: 65000.0,
      intereses: 1040.0,
      total: 66040.0,
    },
    {
      periodo: "2025",
      codigo: "1773",
      descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
      fechaVencimiento: "31-AGO-2025",
      monto: 621000.0,
      intereses: 6624.0,
      total: 627624.0,
    },
    {
      periodo: "2025",
      codigo: "MTRD",
      descripcion: "MATRICULA PREGRADO DIURNO",
      fechaVencimiento: "15-SEP-2025",
      monto: 65000.0,
      intereses: 368.0,
      total: 65368.0,
    },
    {
      periodo: "2025",
      codigo: "1773",
      descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
      fechaVencimiento: "30-SEP-2025",
      monto: 621000.0,
      intereses: 414.0,
      total: 621414.0,
    },
    {
      periodo: "2025",
      codigo: "1773",
      descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
      fechaVencimiento: "31-OCT-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
    },
    {
      periodo: "2025",
      codigo: "1773",
      descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
      fechaVencimiento: "30-NOV-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
    },
    {
      periodo: "2025",
      codigo: "1773",
      descripcion: "ARA ING CIVIL INFORMA DI SJOAQ",
      fechaVencimiento: "31-DIC-2025",
      monto: 621000.0,
      intereses: 0.0,
      total: 621000.0,
    },
  ])

  const handleRowSelection = (index: number) => {
    setSelectedRows((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const handleClearSelection = () => {
    setSelectedRows([])
  }

  const totalSeleccionado = selectedRows.reduce((sum, index) => sum + charges[index].total, 0)

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

  return (
    <div className="w-full rounded-lg p-6 bg-card">
      <div className="space-y-6">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold">Periodo</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold">Código</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold">Descripción</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold">
                  Fecha de Vencimiento
                </th>
                <th className="border border-gray-300 px-3 py-2 text-right text-sm font-semibold">Monto (CLP)</th>
                <th className="border border-gray-300 px-3 py-2 text-right text-sm font-semibold">Intereses</th>
                <th className="border border-gray-300 px-3 py-2 text-right text-sm font-semibold">Total</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold">Selección</th>
              </tr>
            </thead>
            <tbody>
              {charges.map((charge, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm">{charge.periodo}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm">{charge.codigo}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm">{charge.descripcion}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm">{charge.fechaVencimiento}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-right">
                    {charge.monto.toLocaleString("es-CL", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-right">
                    {charge.intereses.toLocaleString("es-CL", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-right">
                    {charge.total.toLocaleString("es-CL", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    <Checkbox
                      checked={selectedRows.includes(index)}
                      onCheckedChange={() => handleRowSelection(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            className="bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleClearSelection}
            disabled={!hasSelection}
          >
            Limpiar selección
          </Button>
        </div>

        {/* Summary Section */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Saldo de Cuenta:</span>
            <span className="font-bold text-lg">
              {saldoCuenta.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total Seleccionado para Pagar:</span>
            <span className="font-bold">
              {totalSeleccionado.toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Porcentaje de Descuento del Pago:</span>
            <span>0 %</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Descuento Aplicable del Pago:</span>
            <span>0</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Saldo Neto a Pagar:</span>
            <span className="font-bold">0</span>
          </div>
        </div>

        {/* Payment Button */}
        <div className="flex justify-center">
          <Button
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handlePagoEnLinea}
            disabled={!hasSelection}
          >
            Pago en Línea
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
