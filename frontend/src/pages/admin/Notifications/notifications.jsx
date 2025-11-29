export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Leave Request",
      message: "Anjali Gupta requested 2 days leave.",
      time: "10 mins ago",
    },
    {
      id: 2,
      title: "Salary Processed",
      message: "Payroll for January completed successfully.",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "New Employee Added",
      message: "Rahul Sharma added to Sales Department.",
      time: "Today, 09:22 AM",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Mark All Read
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {notifications.map((note) => (
          <div key={note.id} className="p-4 hover:bg-gray-50">
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{note.message}</p>
            <span className="text-xs text-gray-400">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
