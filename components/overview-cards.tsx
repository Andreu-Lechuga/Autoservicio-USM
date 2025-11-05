import { Card } from "@/components/ui/card"

export function OverviewCards() {
  const cards = [
    {
      value: "Opcion 1",
      label: "Descripcion 1",
    },
    {
      value: "Opcion 2",
      label: "Descripcion 2",
    },
    {
      value: "Opcion 3",
      label: "Descripcion 3",
    },
    {
      value: "Opcion 4",
      label: "Descripcion 4",
    },
  ]

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">Over View</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="p-6 border-2 hover:shadow-md transition-shadow h-[250px] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-sm text-card-foreground">{card.value}</div>
              <div className="text-xs text-muted-foreground">{card.label}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
