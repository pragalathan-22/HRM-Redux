export default function AllHRs() {
  const hrList = [
    {
      id: 1,
      name: "Sathish Kumar",
      email: "sathish.hr@gmail.com",
      phone: "9876543210",
      designation: "Senior HR",
      department: "Human Resources",
      status: "active",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.hr@gmail.com",
      phone: "9876004563",
      designation: "HR Executive",
      department: "HR & Operations",
      status: "inactive",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya.hr@gmail.com",
      phone: "9876004563",
      designation: "HR Executive",
      department: "HR & Operations",
      status: "inactive",
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All HRs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hrList.map((hr) => (
          <div key={hr.id} className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition-all">

            <div className="flex items-center gap-4">
              <img src={hr.image} alt="profile" className="w-20 h-20 rounded-full border-2 border-blue-500" />
              <div>
                <h2 className="text-xl font-bold">{hr.name}</h2>
                <p className="text-gray-500">{hr.designation}</p>
                <span className={`text-sm px-3 py-1 rounded-md font-semibold ${
                    hr.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {hr.status}
                </span>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> {hr.email}</p>
              <p><strong>Phone:</strong> {hr.phone}</p>
              <p><strong>Department:</strong> {hr.department}</p>
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">View</button>
              <button className="flex-1 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600">Edit</button>
              <button className="flex-1 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700">Delete</button>
            </div>

            <button className={`w-full mt-3 py-2 rounded-lg font-semibold ${
                hr.status === "active" ? "bg-gray-800 text-white" : "bg-green-600 text-white"
              }`}>
              {hr.status === "active" ? "Set Inactive" : "Set Active"}
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
