import React from "react";

const tickets = [
  {
    id: 1234,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "13/08/21",
    status: "In Progress"
  },
  {
    id: 1124,
    subject: "New ticket issue",
    category: "Access issue",
    priority: "Medium",
    date: "14/08/21",
    status: "On hold"
  },
  {
    id: 1224,
    subject: "New request",
    category: "Feedback",
    priority: "Low",
    date: "13/08/21",
    status: "Closed"
  },
  {
    id: 1244,
    subject: "Ticket submission",
    category: "Ticketing",
    priority: "High",
    date: "14/08/21",
    status: "In Progress"
  },
  {
    id: 1114,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "3/08/21",
    status: "In Progress"
  }
];

const statusStyles = {
  "In Progress": "bg-green-400 text-white",
  "On hold": "bg-blue-800 text-white",
  "Closed": "bg-black text-white"
};

const MyTicket = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-teal-400 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl italic font-bold">Helpdesk</h1>
        <div className="flex gap-2">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
          <span>🔔</span>
          <span>👤</span>
          <span>🔁</span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-gray-200 p-4 space-y-4">
          <SidebarItem icon="📊" label="Dashboard" />
          <SidebarItem icon="🧾" label="Ticket Approval" />
          <SidebarItem icon="📋" label="My Ticket" />
          <SidebarItem icon="⚙️" label="Performance" />
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">My Ticket</h2>

          {/* Search and Filter */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find ticket"
                className="border rounded px-4 py-2"
              />
              <span className="absolute right-2 top-2">🔍</span>
            </div>

            <div className="flex items-center gap-2">
              <label>Show:</label>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>20</option>
              </select>
              <span>Entries</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2">Ticket No.</th>
                  <th className="p-2">Subject</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Person in charge</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr key={ticket.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                    <td className="p-2 text-blue-600 underline cursor-pointer">{ticket.id}</td>
                    <td className="p-2">{ticket.subject}</td>
                    <td className="p-2">{ticket.category}</td>
                    <td className="p-2">{ticket.priority}</td>
                    <td className="p-2">{ticket.date}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 text-sm rounded ${statusStyles[ticket.status]}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-2 text-xl">👤👥</td>
                    <td className="p-2 text-xl flex gap-2">
                      📄➕⬇️
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 text-sm text-right pr-4">«‹ 1 ›»</div>
          <div className="mt-2 text-sm">Showing 1 to 5 of 5 entries</div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-teal-400 text-center py-2 text-black text-sm">
        Footer Area
      </footer>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-2 hover:font-semibold cursor-pointer">
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

export default MyTicket;
