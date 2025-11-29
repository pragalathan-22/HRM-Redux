import React from "react";
import { FileDown, TrendingUp, BarChart3 } from "lucide-react";

export default function SalaryReports() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Salary Reports & Analysis</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FileDown size={18} /> Export Report
        </button>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="font-semibold">Monthly Highest Payroll</h2>
          <p className="text-2xl font-bold text-blue-700">₹32,00,000</p>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg shadow">
          <h2 className="font-semibold">Yearly Growth Rate</h2>
          <p className="text-3xl font-bold text-purple-700 flex items-center gap-2">
            12% <TrendingUp size={20} />
          </p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="font-semibold">Avg. Salary / Employee</h2>
          <p className="text-3xl font-bold text-green-700">₹48,500</p>
        </div>
        <div className="p-4 bg-pink-100 rounded-lg shadow">
          <h2 className="font-semibold">Max Bonus Month</h2>
          <p className="text-2xl font-bold text-pink-700">July</p>
        </div>
      </div>

      {/* Placeholder Chart Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-gray-500 gap-2">
        <BarChart3 size={22} /> Graph Analytics Coming Soon...
      </div>
    </div>
  );
}
