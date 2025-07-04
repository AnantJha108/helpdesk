import React, { useState } from "react";
import { FaSearch, FaTachometerAlt, FaTicketAlt, FaClipboardList, FaBell, FaUser, FaExchangeAlt } from "react-icons/fa";

const MyTickets = () => {
  const [search, setSearch] = useState("");

  const tickets = [
    { id: 1234, subject: "Login issue", status: "In Progress", team: "Tech support", date: "13/08/21", rating: 0 },
    { id: 1124, subject: "New ticket issue", status: "On hold", team: "Operation Team", date: "14/08/21", rating: 0 },
    { id: 1224, subject: "New request", status: "Closed", team: "Tech support", date: "13/08/21", rating: 4.5 },
    { id: 1244, subject: "Ticket submission", status: "In Progress", team: "Operation Team", date: "14/08/21", rating: 0 },
    { id: 1114, subject: "Login issue", status: "In Progress", team: "Tech support", date: "3/08/21", rating: 0 },
  ];

  const statusStyle = {
    "In Progress": "bg-green-500",
    "On hold": "bg-blue-900",
    Closed: "bg-gray-700",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <div className="bg-teal-400 flex items-center justify-between px-4 py-3">
        <h1 className="text-white text-2xl font-bold italic">Helpdesk</h1>
        <div className="flex space-x-4 items-center">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
          <FaBell className="text-black cursor-pointer" />
          <FaUser className="text-black cursor-pointer" />
          <FaExchangeAlt className="text-black cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-gray-200 w-48 p-4 space-y-6">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarItem icon={<FaTicketAlt />} label="New Ticket" />
          <SidebarItem icon={<FaClipboardList />} label="My Ticket" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">List of Ticket</h2>

          {/* Search and Entries */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-2 md:space-y-0">
            <div className="flex items-center border shadow px-2 rounded bg-gray-100">
              <input
                type="text"
                placeholder="Find ticket"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 bg-transparent outline-none"
              />
              <FaSearch />
            </div>

            <div className="flex items-center space-x-2">
              <span>Show:</span>
              <select className="border p-1 rounded">
                <option>10</option>
                <option>25</option>
              </select>
              <span>Entries</span>
            </div>
          </div>

          {/* Ticket Table */}
          <table className="w-full border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Ticket No.</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Status</th>
                <th className="p-2">Support by</th>
                <th className="p-2">Date</th>
                <th className="p-2">Rate</th>
              </tr>
            </thead>
            <tbody>
              {tickets
                .filter((t) =>
                  t.subject.toLowerCase().includes(search.toLowerCase()) ||
                  String(t.id).includes(search)
                )
                .map((ticket, i) => (
                  <tr key={ticket.id} className={i % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}>
                    <td className="p-2 text-blue-600 underline cursor-pointer">{ticket.id}</td>
                    <td className="p-2">{ticket.subject}</td>
                    <td className="p-2">
                      <span className={`text-white px-3 py-1 text-sm rounded ${statusStyle[ticket.status]}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-2">{ticket.team}</td>
                    <td className="p-2">{ticket.date}</td>
                    <td className="p-2">{renderStars(ticket.rating)}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Footer Info */}
          <div className="mt-4 text-sm">
            Showing 1 to {tickets.length} of {tickets.length} entries
          </div>

          {/* Pagination */}
          <div className="mt-2 text-right text-sm">
            &laquo;&lt; <span className="mx-2 font-bold">1</span> &gt;&raquo;
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-400 text-center py-2 text-sm text-black">
        Footer Area
      </footer>
    </div>
  );
};

// Sidebar Item
const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

// Render star rating
const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push("⭐");
    } else if (i === full && half) {
      stars.push("⭐"); // placeholder; ideally use a half-star icon
    } else {
      stars.push("☆");
    }
  }

  return <span>{stars.join("")}</span>;
};

export default MyTickets;
