import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addManager } from "../../../features/manager/managerSlice";

export default function AddManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    phone: "",
    experience: "",
    salary: "",
    address: "",
    documents: [], // new field for uploaded docs
  });

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.managers);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare FormData for file uploads
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "documents") {
        formData.documents.forEach((file) => data.append("documents", file));
      } else {
        data.append(key, formData[key]);
      }
    });

    dispatch(addManager(data));

    setFormData({
      name: "",
      email: "",
      department: "",
      role: "",
      phone: "",
      experience: "",
      salary: "",
      address: "",
      documents: [],
    });
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Add Manager</h1>
            <p className="text-gray-600 mt-1">
              Create a new manager profile for your organization.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            encType="multipart/form-data"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +91 9876543210"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Experience (Years)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Salary */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Salary (₹)</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., 50000"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows={3}
              ></textarea>
            </div>

            {/* Documents */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Upload Documents</label>
              <input
                type="file"
                name="documents"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              />
              {formData.documents.length > 0 && (
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                  {formData.documents.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Adding Manager..." : "Add Manager"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
