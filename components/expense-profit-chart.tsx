"use client"

import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Dec", expense: 20, profit: 15 },
  { month: "Jan", expense: 25, profit: 18 },
  { month: "Feb", expense: 22, profit: 20 },
  { month: "Mar", expense: 28, profit: 22 },
  { month: "April", expense: 35, profit: 30 },
  { month: "May", expense: 32, profit: 28 },
  { month: "Jun", expense: 30, profit: 35 },
]

export function ExpenseProfitChart() {
  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-card-foreground">Expense vs Profit</h3>
        <div className="text-sm text-muted-foreground">Last 6 months</div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickFormatter={(value) => `${value}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend verticalAlign="top" align="right" iconType="rect" wrapperStyle={{ paddingBottom: "20px" }} />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#dc2626"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorExpense)"
            name="Expense"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#16a34a"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorProfit)"
            name="Profit"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
