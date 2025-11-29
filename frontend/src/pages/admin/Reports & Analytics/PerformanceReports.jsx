export default function PerformanceReports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Performance Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Top Performers</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">08</p>
          <span className="text-sm text-gray-500">Award Nominees</span>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Under Review</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-500">15</p>
          <span className="text-sm text-gray-500">Pending Appraisal</span>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Low Performers</h3>
          <p className="text-3xl font-bold mt-2 text-red-500">03</p>
          <span className="text-sm text-gray-500">Need Training</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Performance Rating Overview</h2>
        <div className="border rounded-lg p-10 text-center text-gray-400">
          {/* Placeholder for Line Chart */}
          Chart Coming Soon
        </div>
      </div>
    </div>
  );
}
