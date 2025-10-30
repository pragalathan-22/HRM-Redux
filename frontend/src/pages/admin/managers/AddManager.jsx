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
    documents: [],
    image: null,
  });

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.managers);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDocumentsChange = (e) => {
    setFormData({ ...formData, documents: Array.from(e.target.files) });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append text fields
    ["name", "email", "department", "role", "phone", "experience", "salary", "address"].forEach(
      (key) => data.append(key, formData[key])
    );

    // Append image
    if (formData.image) data.append("image", formData.image);

    // Append documents
    formData.documents.forEach((file) => data.append("documents", file));

    // Dispatch Redux action
    dispatch(addManager(data));

    // Reset form
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
      image: null,
    });
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden p-6">
      <header className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm mb-4">
        <h1 className="text-xl font-bold text-gray-800">Add Manager</h1>
        <p className="text-gray-500 text-sm">Add a new manager</p>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            encType="multipart/form-data"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded col-span-1 md:col-span-2"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />

            {/* Department */}
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />

            {/* Role */}
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />

            {/* Experience */}
            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />

            {/* Salary */}
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />

            {/* Address */}
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border px-3 py-2 rounded col-span-1 md:col-span-2"
            />

            {/* Image Upload */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 font-medium">Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {formData.image && <p className="text-sm mt-1">{formData.image.name}</p>}
            </div>

            {/* Documents Upload */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 font-medium">Upload Documents</label>
              <input type="file" multiple onChange={handleDocumentsChange} />
              {formData.documents.length > 0 &&
                formData.documents.map((file, idx) => (
                  <p key={idx} className="text-sm">{file.name}</p>
                ))}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-teal-500 text-white py-2 rounded col-span-1 md:col-span-2"
            >
              {isLoading ? "Adding..." : "Add Manager"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
