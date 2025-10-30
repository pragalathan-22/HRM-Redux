import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchManagers } from "../../../features/manager/managerSlice";
import { User, Mail, Phone, MapPin, Edit, Eye } from "lucide-react";

export default function AllManagers() {
  const dispatch = useDispatch();
  const { managers, isLoading } = useSelector((state) => state.managers);

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  if (isLoading) return <p className="p-6 text-gray-500">Loading managers...</p>;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">Managers</h1>
        <p className="text-gray-500 text-sm">Quick view of all managers</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {managers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No managers found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {managers.map((manager) => (
              <div
                key={manager.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                    {manager.department || "General"}
                  </span>
                  <div className="flex space-x-2 text-gray-400">
                    <button className="hover:text-indigo-600 transition">
                      <Eye size={16} />
                    </button>
                    <button className="hover:text-green-600 transition">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      {manager.name}
                    </h2>
                    <p className="text-xs text-gray-500">{manager.role || "Manager"}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" /> {manager.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-gray-400" />{" "}
                    {manager.phone || "N/A"}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-400" />{" "}
                    {manager.address || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}