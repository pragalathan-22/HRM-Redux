import React from "react";
import { BadgeCheck, Heart, Plus } from "lucide-react";

const benefits = [
  {
    name: "Health Insurance",
    coverage: "Medical + Dental",
    eligibility: "All Full-Time Employees",
    status: "Active",
    icon: <Heart className="text-red-500" />,
  },
  {
    name: "Performance Bonus",
    coverage: "Annual Appraisal",
    eligibility: "All Departments",
    status: "Active",
    icon: <BadgeCheck className="text-green-600" />,
  },
];

export default function Benefits() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Employee Benefits</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={18} /> Add Benefit
        </button>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((ben, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-5 rounded-xl flex items-center gap-4"
          >
            <div className="p-3 bg-gray-100 rounded-lg">{ben.icon}</div>
            <div>
              <p className="font-bold text-lg">{ben.name}</p>
              <p className="text-sm text-gray-500">{ben.coverage}</p>
              <p className="text-xs text-blue-600 mt-1">
                Eligibility: {ben.eligibility}
              </p>
            </div>
            <span className="ml-auto text-xs font-semibold bg-green-200 px-3 py-1 rounded-full text-green-700">
              {ben.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
