export default function PayrollReports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Payroll Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Total Payout</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">₹18.4L</p>
          <span className="text-xs text-gray-500">This Month</span>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Pending Salary</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-600">₹1.2L</p>
          <span className="text-xs text-gray-500">Processing</span>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Approved Overtime</h3>
          <p className="text-3xl font-bold mt-2 text-green-500">₹42K</p>
          <span className="text-xs text-gray-500">All Departments</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Salary Trend Chart</h2>
        <div className="border rounded-lg p-10 text-center text-gray-400">
          {/* Placeholder for Area Chart */}
          Chart Coming Soon
        </div>
      </div>
    </div>
  );
}
