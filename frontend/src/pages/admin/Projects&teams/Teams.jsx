import React from "react";
import { UserPlus, Users, User } from "lucide-react";

const teams = [
  {
    name: "Design Team",
    leader: "Sathish Kumar",
    members: 6,
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Frontend Team",
    leader: "Arun Kumar",
    members: 9,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Backend Team",
    leader: "Harini",
    members: 7,
    color: "bg-green-100 text-green-700",
  },
];

export default function Teams() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users /> Teams Management
        </h1>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <UserPlus size={18} /> Create Team
        </button>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-lg p-5 border ${team.color} transition-all hover:scale-105`}
          >
            <p className="font-bold text-lg">{team.name}</p>
            <p className="text-sm font-semibold mt-1">
              <User className="inline-block mr-2" />
              Leader: {team.leader}
            </p>
            <p className="text-sm mt-1">
              <Users className="inline-block mr-2" />
              Members: {team.members}
            </p>
            <button className="mt-4 bg-white text-gray-700 px-4 py-1 rounded-lg shadow hover:bg-gray-100">
              View Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
