import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchManagers,
  updateManager,
  deleteManager,
} from "../../../features/admin/manager/managerSlice";
import {
  Search,
  Edit3,
  Trash2,
  Calendar,
  X,
  Loader2,
  Save,
  AlertTriangle,
} from "lucide-react";

export default function ManagerProfiles() {
  const dispatch = useDispatch();
  const { managers, isLoading, isError, message } = useSelector(
    (state) => state.managers
  );

  const [editing, setEditing] = useState(null);
  const [lastDate, setLastDate] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [managerToDelete, setManagerToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  const handleEdit = (manager) => {
    setEditing(manager);
    setLastDate(
      manager.lastDate
        ? new Date(manager.lastDate).toISOString().split("T")[0]
        : ""
    );
  };

  const handleSave = async () => {
    if (!editing) return;
    setIsSaving(true);
    try {
      await dispatch(
        updateManager({ id: editing._id, managerData: { lastDate } })
      ).unwrap();
      setEditing(null);
    } catch (err) {
      console.error("Error updating manager:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (manager) => {
    setManagerToDelete(manager);
    setIsConfirmingDelete(true);
  };

  const confirmDelete = async () => {
    if (!managerToDelete) return;
    setIsDeleting(true);
    try {
      await dispatch(deleteManager(managerToDelete._id)).unwrap();
      setIsConfirmingDelete(false);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin w-6 h-6 text-blue-500" />
        <p className="ml-2 text-gray-600">Loading managers...</p>
      </div>
    );

  if (isError)
    return (
      <p className="text-center text-red-500 mt-6">
        Error: {message || "Failed to load managers."}
      </p>
    );

  const filteredManagers = managers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">Managers Profiles</h1>
        <p className="text-gray-500 text-sm">Edit of all managers</p>
      </header>

      {/* Manager Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredManagers.length > 0 ? (
          filteredManagers.map((manager) => (
            <div
              key={manager._id}
              className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow border"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {manager.name}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    manager.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {manager.status}
                </span>
              </div>

              <div className="text-gray-600 text-sm space-y-1">
                <p>Email: {manager.email}</p>
                <p>Phone: {manager.phone || "N/A"}</p>
                <p>Department: {manager.department}</p>
                <p className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Expiry:{" "}
                  {manager.lastDate
                    ? new Date(manager.lastDate).toLocaleDateString()
                    : "Not set"}
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => handleEdit(manager)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <Edit3 className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(manager)}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No managers found.
          </p>
        )}
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Edit Expiry Date
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-3">Manager: {editing.name}</p>
            <input
              type="date"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" /> Save
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isConfirmingDelete && managerToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2 text-red-600 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Confirm Deletion</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{managerToDelete.name}</span>? This
              action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsConfirmingDelete(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" /> Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" /> Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
