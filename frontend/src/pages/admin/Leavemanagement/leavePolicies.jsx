import React from "react";
import { Edit3, Plus } from "lucide-react";

const leavePolicies = [
  {
    type: "Sick Leave",
    days: 10,
    carry: "Yes (5 Days)",
    eligibility: "All Employees",
    status: "Active",
  },
  {
    type: "Maternity Leave",
    days: 180,
    carry: "No",
    eligibility: "Female Employees",
    status: "Active",
  },
];

export default function LeavePolicies() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Leave Policies</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={18} /> New Policy
        </button>
      </div>

      {/* Policy Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 text-sm">
              <th className="p-3">Leave Type</th>
              <th className="p-3">Days</th>
              <th className="p-3">Carry Forward</th>
              <th className="p-3">Eligibility</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {leavePolicies.map((policy, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">{policy.type}</td>
                <td className="p-3">{policy.days} Days</td>
                <td className="p-3">{policy.carry}</td>
                <td className="p-3">{policy.eligibility}</td>
                <td className="p-3 text-green-600 font-semibold">{policy.status}</td>
                <td className="p-3 text-center">
                  <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                    <Edit3 size={16} className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
