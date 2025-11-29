import React from "react";
import { Plus, Users, Calendar, FolderKanban } from "lucide-react";

const projectList = [
  {
    id: 1,
    name: "HRM Software Revamp",
    client: "Techify Solutions",
    deadline: "2025-02-10",
    status: "In Progress",
    progress: "65%",
    team: 8,
  },
  {
    id: 2,
    name: "E-Commerce Web Automation",
    client: "Flipkart Global",
    deadline: "2025-01-25",
    status: "On Hold",
    progress: "32%",
    team: 5,
  },
  {
    id: 3,
    name: "Mobile Banking App",
    client: "Axis Bank",
    deadline: "2024-12-10",
    status: "Completed",
    progress: "100%",
    team: 10,
  },
];

export default function AllProjects() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FolderKanban /> All Projects
        </h1>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={18} /> Create Project
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="font-semibold">Total Projects</h2>
          <p className="text-3xl font-bold text-blue-700">18</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="font-semibold">Active Projects</h2>
          <p className="text-3xl font-bold text-green-700">10</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold">Completed</h2>
          <p className="text-3xl font-bold text-gray-700">6</p>
        </div>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3">Project</th>
              <th className="p-3">Client</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">Status</th>
              <th className="p-3">Team</th>
              <th className="p-3">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((prj) => (
              <tr key={prj.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">{prj.name}</td>
                <td className="p-3">{prj.client}</td>
                <td className="p-3 flex items-center gap-2">
                  <Calendar size={16} /> {prj.deadline}
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                    ${
                      prj.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : prj.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {prj.status}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-1">
                  <Users size={16} /> {prj.team}
                </td>
                <td className="p-3 font-bold text-cyan-700">{prj.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
