import React from "react";
import { BarChart3, FileDown } from "lucide-react";

export default function LeaveReports() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Leave Reports & Analytics</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FileDown size={18} /> Export Report
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="font-semibold">Total Leaves Taken</h2>
          <p className="text-3xl font-bold text-blue-700">124</p>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg shadow">
          <h2 className="font-semibold">Pending Approvals</h2>
          <p className="text-3xl font-bold text-purple-700">08</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="font-semibold">Avg. Days / Employee</h2>
          <p className="text-3xl font-bold text-green-700">12</p>
        </div>
        <div className="p-4 bg-pink-100 rounded-lg shadow">
          <h2 className="font-semibold">Top Leave Type</h2>
          <p className="text-2xl font-bold text-pink-700">Sick Leave</p>
        </div>
      </div>

      {/* Placeholder for charts */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-gray-500 gap-2">
        <BarChart3 size={22} /> Charts & Insights Coming Soon...
      </div>
    </div>
  );
}
