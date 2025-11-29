import React from "react";

export default function ViewAttendance() {
  const attendance = [
    { id: 1, employeeId: "EMP001", name: "Sathish Kumar", designation: "Senior Developer", department: "IT", date: "2025-11-25", checkIn: "09:05 AM", checkOut: "06:15 PM", status: "Present" },
    { id: 2, employeeId: "EMP012", name: "Ramesh", designation: "HR Executive", department: "Human Resources", date: "2025-11-25", checkIn: "09:20 AM", checkOut: "-", status: "Late" },
    { id: 3, employeeId: "EMP034", name: "Arjun", designation: "UI/UX Designer", department: "Design", date: "2025-11-25", checkIn: "-", checkOut: "-", status: "Absent" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Employee Attendance Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold text-green-700">120</h2>
          <p className="font-medium">Present Today</p>
        </div>

        <div className="bg-red-100 p-4 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold text-red-700">25</h2>
          <p className="font-medium">Absent Today</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold text-yellow-700">18</h2>
          <p className="font-medium">Late Arrivals</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold text-blue-700">143</h2>
          <p className="font-medium">Total Employees</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <input type="date" className="border p-2 rounded-lg" />
        <select className="border p-2 rounded-lg">
          <option>All Departments</option>
          <option>IT</option>
          <option>HR</option>
          <option>Design</option>
        </select>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Search
        </button>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Check In</th>
              <th className="p-3 text-left">Check Out</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{a.employeeId}</td>
                <td className="p-3">{a.name}</td>
                <td className="p-3">{a.designation}</td>
                <td className="p-3">{a.department}</td>
                <td className="p-3">{a.date}</td>
                <td className="p-3">{a.checkIn}</td>
                <td className="p-3">{a.checkOut}</td>
                <td className="p-3 font-semibold">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
