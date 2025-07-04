import React from "react";

const tickets = [
  {
    id: 1234,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "13/08/21"
  },
  {
    id: 1124,
    subject: "New ticket issue",
    category: "Access issue",
    priority: "Medium",
    date: "14/08/21"
  },
  {
    id: 1224,
    subject: "New request",
    category: "Feedback",
    priority: "Low",
    date: "13/08/21"
  },
  {
    id: 1244,
    subject: "Ticket submission",
    category: "Ticketing",
    priority: "High",
    date: "14/08/21"
  },
  {
    id: 1114,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "3/08/21"
  }
];

const TicketApproval = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-teal-400 p-4 flex items-center justify-between">
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
          <SidebarItem icon="📝" label="Ticket Approval" />
          <SidebarItem icon="📚" label="My Ticket" />
          <SidebarItem icon="⚙️" label="Performance" />
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Ticket Approval</h2>

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
                <option>50</option>
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
                  <th className="p-2">Action</th>
                  <th className="p-2">Assign to</th>
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
                    <td className="p-2 flex gap-2">
                      <button className="text-green-700">✔️</button>
                      <button className="text-red-600">❌</button>
                    </td>
                    <td className="p-2">
                      <select className="border px-2 py-1 rounded">
                        <option>Assign</option>
                        <option>Team A</option>
                        <option>Team B</option>
                      </select>
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

export default TicketApproval;
