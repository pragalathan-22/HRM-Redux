export default function CustomReports() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create Custom Reports</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">Report Filter Options</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border rounded-lg p-3 text-sm">
            <option>Select Department</option>
            <option>HR</option>
            <option>Finance</option>
            <option>IT</option>
          </select>

          <select className="border rounded-lg p-3 text-sm">
            <option>Select Report Type</option>
            <option>Performance</option>
            <option>Payroll</option>
            <option>Leave</option>
          </select>

          <select className="border rounded-lg p-3 text-sm">
            <option>Select Time Range</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>Yearly</option>
          </select>
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Generate Report
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="p-10 border rounded-lg text-center text-gray-400">
          Select filters to generate report
        </div>
      </div>
    </div>
  );
}
