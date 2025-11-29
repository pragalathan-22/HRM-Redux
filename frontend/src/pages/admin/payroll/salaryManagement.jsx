import React from "react";
import { Pencil, Plus, Users } from "lucide-react";

const salaryData = [
  {
    id: 1,
    employee: "Arun Kumar",
    role: "Software Developer",
    basic: 35000,
    hra: 15000,
    allowances: 5000,
    deductions: 2000,
    net: 53000,
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 2,
    employee: "Divya R",
    role: "HR Executive",
    basic: 30000,
    hra: 10000,
    allowances: 4000,
    deductions: 1500,
    net: 42500,
    image: "https://i.pravatar.cc/150?img=23",
  },
];

export default function SalaryManagement() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Salary Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={18} /> Add Salary
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-indigo-100 rounded-lg shadow">
          <h2 className="font-semibold">Total Employees</h2>
          <p className="text-3xl font-bold text-indigo-700 flex items-center gap-2">
            <Users size={26} /> 62
          </p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="font-semibold">Monthly Payroll</h2>
          <p className="text-3xl font-bold text-green-700">₹27,50,000</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h2 className="font-semibold">Pending Reviews</h2>
          <p className="text-3xl font-bold text-yellow-700">06</p>
        </div>
      </div>

      {/* Salary Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3">Employee</th>
              <th className="p-3">Basic Salary</th>
              <th className="p-3">HRA</th>
              <th className="p-3">Allowances</th>
              <th className="p-3">Deductions</th>
              <th className="p-3">Net Pay</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-10 h-10 rounded-full"
                    alt="employee"
                  />
                  <div>
                    <p className="font-semibold">{item.employee}</p>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </td>
                <td className="p-3">₹{item.basic}</td>
                <td className="p-3">₹{item.hra}</td>
                <td className="p-3">₹{item.allowances}</td>
                <td className="p-3 text-red-600">₹{item.deductions}</td>
                <td className="p-3 text-green-600 font-semibold">
                  ₹{item.net}
                </td>
                <td className="p-3 text-center">
                  <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                    <Pencil size={16} className="text-gray-700" />
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
