import { Card } from "@/components/ui/card"
import { Users, MoreVertical } from "lucide-react"

export function UsersCard() {
  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-card-foreground">No of users</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <div className="text-3xl font-bold text-card-foreground">583 K</div>
          <div className="text-sm text-muted-foreground">Total Customers</div>
        </div>
      </div>
    </Card>
  )
}
