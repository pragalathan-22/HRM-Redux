import React from "react";

export default function AttendanceReports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Attendance Report Generator</h1>

      <p className="text-gray-600 mb-6">
        Generate weekly, monthly, or custom attendance performance reports. Export reports for payroll, compliance,
        and performance review purposes.
      </p>

      {/* Filters */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <input className="border rounded-lg p-3" type="date" />
        <input className="border rounded-lg p-3" type="date" />
        <select className="border rounded-lg p-3">
          <option>All Departments</option>
          <option>IT</option>
          <option>HR</option>
          <option>Design</option>
        </select>
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg">Generate Report</button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Report Summary</h2>

        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• Total Working Days: 30 Days</li>
          <li>• Total Present: 26 Days</li>
          <li>• Total Absent: 2 Days</li>
          <li>• Late Arrivals: 5 Times</li>
          <li>• Half Day: 1 Time</li>
        </ul>

        <div className="flex gap-4">
          <button className="border p-3 rounded-lg w-40">Download PDF</button>
          <button className="border p-3 rounded-lg w-40">Download Excel</button>
        </div>
      </div>
    </div>
  );
}
