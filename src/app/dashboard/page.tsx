import { Card } from "@/components/ui/card"
import { MonthlyReportsChart } from "@/components/MonthlyReportsChart"
import { ResolvedReportsChart } from "@/components/ResolvedReportsChart"
import { LatestReports } from "@/components/LatestReports"

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 text-sm bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div className="text-sm text-gray-400 mb-2">Total Reports</div>
          <div className="text-2xl font-bold text-gray-100">2,345</div>
          <div className="text-sm text-yellow-400 mt-2">+12% from last month</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div className="text-sm text-gray-400 mb-2">Active Users</div>
          <div className="text-2xl font-bold text-gray-100">1,234</div>
          <div className="text-sm text-yellow-400 mt-2">+8% from last month</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div className="text-sm text-gray-400 mb-2">Resolved Issues</div>
          <div className="text-2xl font-bold text-gray-100">789</div>
          <div className="text-sm text-yellow-400 mt-2">+23% from last month</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div className="text-sm text-gray-400 mb-2">Response Time</div>
          <div className="text-2xl font-bold text-gray-100">1.2h</div>
          <div className="text-sm text-yellow-400 mt-2">-15% from last month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Monthly Reports</h2>
          <div className="w-full">
            <MonthlyReportsChart />
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Resolved Reports</h2>
          <div className="w-full">
            <ResolvedReportsChart />
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-gray-100">Latest Reports</h2>
        <LatestReports />
      </div>
    </div>
  )
} 