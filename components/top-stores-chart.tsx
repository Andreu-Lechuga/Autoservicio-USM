"use client"

import { Card } from "@/components/ui/card"

const stores = [
  { name: "Gateway Ur", value: 87, max: 100 },
  { name: "The Rustic Fox", value: 72, max: 100 },
  { name: "Velvet Vine", value: 59, max: 100 },
  { name: "Blue Harbor", value: 50, max: 100 },
  { name: "Nebula Novelties", value: 39, max: 100 },
  { name: "Crimson Crafters", value: 34, max: 100 },
  { name: "Tidal Treasures", value: 27, max: 100 },
  { name: "Whimsy Wild", value: 21, max: 100 },
  { name: "Mossclade", value: 18, max: 100 },
  { name: "Emporium", value: 17, max: 100 },
]

export function TopStoresChart() {
  return (
    <Card className="p-6 border-2">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Top 10 Stores by sales</h3>
      <div className="space-y-3">
        {stores.map((store, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground w-32 truncate">{store.name}</div>
            <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
              <div className="bg-sidebar h-full rounded-full transition-all" style={{ width: `${store.value}%` }} />
            </div>
            <div className="text-xs font-medium text-muted-foreground w-10 text-right">{store.value}k</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
