import React from "react";

export default function TimeTracking() {
  const tracking = [
    { id: 1, name: "Sathish Kumar", department: "IT", totalHours: "09:10", overtime: "01:10", breakTime: "00:45", status: "Completed" },
    { id: 2, name: "Ramesh", department: "HR", totalHours: "07:40", overtime: "00:00", breakTime: "00:20", status: "In-Progress" },
    { id: 3, name: "Arjun", department: "Design", totalHours: "00:00", overtime: "00:00", breakTime: "-", status: "Absent" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Employee Time Tracking</h1>

      <p className="mb-6 text-gray-600">
        Track real-time work hours, overtime calculation, break usage and productivity monitoring. Helps managers ensure fairness, efficiency and transparency.
      </p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Total Hours</th>
              <th className="p-3 text-left">Over Time</th>
              <th className="p-3 text-left">Break Time</th>
              <th className="p-3 text-left">Work Status</th>
            </tr>
          </thead>

          <tbody>
            {tracking.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{t.name}</td>
                <td className="p-3">{t.department}</td>
                <td className="p-3">{t.totalHours}</td>
                <td className="p-3">{t.overtime}</td>
                <td className="p-3">{t.breakTime}</td>
                <td className="p-3 font-semibold">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
