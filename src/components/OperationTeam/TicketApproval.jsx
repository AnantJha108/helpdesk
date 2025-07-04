import React from "react";
import Header from "../includes/Header";
import OperationTeamSidebar from "../includes/OperationTeamSidebar";
import Footer from "../includes/Footer";

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
      <Header/>

      <div className="flex flex-1">
        <OperationTeamSidebar/>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Ticket Approval</h2>
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

          <div className="mt-4 text-sm text-right pr-4">«‹ 1 ›»</div>
          <div className="mt-2 text-sm">Showing 1 to 5 of 5 entries</div>
        </main>
      </div>

      <Footer/>
    </div>
  );
};

export default TicketApproval;
