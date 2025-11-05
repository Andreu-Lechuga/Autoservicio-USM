"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Sold units", value: 68 },
  { name: "Total units", value: 32 },
]

const COLORS = ["#475569", "#94a3b8"]

export function InventoryValuesChart() {
  return (
    <Card className="p-6 border-2">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Inventory Values</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            formatter={(value, entry: any) => (
              <span className="text-sm text-muted-foreground">
                {value} <span className="font-semibold">{entry.payload.value}%</span>
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
