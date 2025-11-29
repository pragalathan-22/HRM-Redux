export default function UserPermissions() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Permissions</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Role</th>
              <th className="p-3">View</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {["Admin", "Manager", "HR", "Employee"].map((role, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{role}</td>
                {[...Array(3)].map((_, idx) => (
                  <td key={idx} className="p-3">
                    <input type="checkbox" className="h-5 w-5" defaultChecked />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Save Permissions
        </button>
      </div>
    </div>
  );
}
