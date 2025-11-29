export default function SystemSettings() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">System Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Platform Controls</h2>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <span className="font-medium">Enable Email Notifications</span>
            <input type="checkbox" defaultChecked className="toggle-checkbox" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Enable Two-Factor Authentication</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Auto Backup HR Data</span>
            <input type="checkbox" defaultChecked className="toggle-checkbox" />
          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
