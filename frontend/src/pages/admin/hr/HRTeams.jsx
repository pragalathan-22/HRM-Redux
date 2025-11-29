export default function HRTeams() {
  const teams = [
    {
      hrName: "Sathish Kumar",
      teamCount: 4,
      employees: ["Arun", "Dinesh", "Kaviya", "Rohit"],
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      hrName: "Priya Sharma",
      teamCount: 3,
      employees: ["Jeeva", "Meena", "Sanjay"],
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">HR Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl">

            <div className="flex items-center gap-4 mb-3">
              <img src={team.image} className="w-16 h-16 rounded-full border-2 border-purple-500" />
              <div>
                <h2 className="text-xl font-semibold">{team.hrName}</h2>
                <p className="text-gray-500">{team.teamCount} Employees</p>
              </div>
            </div>

            <ul className="list-disc ml-5 text-gray-700">
              {team.employees.map((emp, idx) => (
                <li key={idx}>{emp}</li>
              ))}
            </ul>

            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Manage Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
