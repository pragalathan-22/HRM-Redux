import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchManagers, updateManager, deleteManager } from "../../../features/manager/managerSlice";
import { User, Calendar, Trash2 } from "lucide-react";

export default function ManagerProfiles() {
  const dispatch = useDispatch();
  const { managers, isLoading } = useSelector((state) => state.managers);

  const [editing, setEditing] = useState(null);
  const [lastDate, setLastDate] = useState("");

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  const handleEdit = (manager) => {
    setEditing(manager);
    setLastDate(manager.lastDate ? new Date(manager.lastDate).toISOString().split("T")[0] : "");
  };

  const handleSave = () => {
    dispatch(updateManager({ id: editing._id, managerData: { lastDate } }));
    setEditing(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
      dispatch(deleteManager(id));
    }
  };

  if (isLoading) return <p className="p-6 text-gray-500">Loading...</p>;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-gray-800">Manager Profiles</h1>
        <p className="text-gray-600">Profiles with status and last active date</p>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {managers.map((manager) => (
            <div
              key={manager._id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition relative"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  manager.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {manager.status}
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">{manager.name}</h2>
              <p className="text-gray-600 text-sm">{manager.email}</p>
              <p className="text-gray-600 text-sm mb-2">{manager.phone || "N/A"}</p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Department:</span> {manager.department}
              </p>

              <p className="mt-2 flex items-center gap-2 text-gray-600 text-sm">
                <Calendar size={16} />
                {manager.lastDate ? new Date(manager.lastDate).toLocaleDateString() : "No expiry set"}
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(manager)}
                  className="flex-1 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(manager._id)}
                  className="flex-1 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center justify-center gap-1"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Edit Last Date</h2>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded mb-4"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
