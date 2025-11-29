export default function CompanyProfile() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Company Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-600">Company Name</label>
          <input
            type="text"
            placeholder="Example Pvt Ltd"
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Head Office</label>
          <input
            type="text"
            placeholder="Chennai, India"
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Industry</label>
            <input
              type="text"
              placeholder="Software / IT"
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Founded Year</label>
            <input
              type="number"
              placeholder="2017"
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">About Company</label>
          <textarea
            rows="4"
            placeholder="Company mission, achievements, culture..."
            className="w-full p-3 border rounded-lg mt-1"
          ></textarea>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Update Profile
        </button>
      </div>
    </div>
  );
}
