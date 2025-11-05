import { Card } from "@/components/ui/card"

export function MiEstadoCuentaView() {
  const cards = [
    { title: "Estado de Cuenta Actual", description: "Consulta tu estado financiero" },
    { title: "Deudas Pendientes", description: "Revisa pagos pendientes" },
    { title: "Becas y Beneficios", description: "Información sobre becas" },
    { title: "Historial Financiero", description: "Consulta movimientos anteriores" },
  ]

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="p-3 bg-card-accent border-border w-[200px]">
            <div className="space-y-2">
              <div className="text-sm text-card-foreground">{card.title}</div>
              <div className="text-xs text-muted-foreground">{card.description}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
