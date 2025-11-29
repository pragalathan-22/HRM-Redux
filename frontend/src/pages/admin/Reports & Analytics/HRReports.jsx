export default function HRReports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">HR Reports & Insights</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Total Employees</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">145</p>
          <span className="text-xs text-gray-500">Updated Today</span>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">New Joiners</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">12</p>
          <span className="text-xs text-gray-500">This Month</span>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Attrition Rate</h3>
          <p className="text-3xl font-bold mt-2 text-red-500">3.4%</p>
          <span className="text-xs text-gray-500">Compared Last Month</span>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Active Departments</h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">07</p>
          <span className="text-xs text-gray-500">HR, IT, Finance...</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Employee Gender Distribution</h2>
        <div className="border rounded-lg p-10 text-center text-gray-400">
          {/* Placeholder for Pie Chart */}
          Chart Coming Soon
        </div>
      </div>
    </div>
  );
}
