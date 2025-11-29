import React from "react";
import { Check, X, Eye, Filter } from "lucide-react";

const leaveRequests = [
  {
    id: 1,
    employee: "Sathish Kumar",
    role: "Software Engineer",
    type: "Sick Leave",
    from: "2025-11-20",
    to: "2025-11-22",
    days: 3,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    employee: "Priya Sharma",
    role: "HR Manager",
    type: "Casual Leave",
    from: "2025-11-25",
    to: "2025-11-25",
    days: 1,
    status: "Approved",
    image: "https://i.pravatar.cc/150?img=12",
  },
];

export default function LeaveRequest() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Leave Requests</h1>
        <button className="flex gap-2 items-center bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h2 className="font-semibold">Pending Requests</h2>
          <p className="text-2xl font-bold text-yellow-600">10</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="font-semibold">Approved Leaves</h2>
          <p className="text-2xl font-bold text-green-600">20</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow">
          <h2 className="font-semibold">Rejected Requests</h2>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 text-sm">
              <th className="p-3">Employee</th>
              <th className="p-3">Leave Type</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Days</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((req) => (
              <tr key={req.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img src={req.image} alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{req.employee}</p>
                    <span className="text-sm text-gray-500">{req.role}</span>
                  </div>
                </td>
                <td className="p-3">{req.type}</td>
                <td className="p-3">{req.from} → {req.to}</td>
                <td className="p-3">{req.days}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${req.status === "Pending" ? "bg-yellow-200 text-yellow-700" :
                      req.status === "Approved" ? "bg-green-200 text-green-700" :
                        "bg-red-200 text-red-700"}`}>
                    {req.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg">
                    <Check size={16} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
                    <X size={16} />
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                    <Eye size={16} />
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
