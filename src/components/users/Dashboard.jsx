import React from 'react'
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaClipboardList,
  FaBell,
  FaUser,
  FaExchangeAlt,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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

      {/* Body Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-gray-200 w-48 p-4 space-y-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaTicketAlt />
            <span>New Ticket</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaClipboardList />
            <span>My Ticket</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-center text-2xl font-semibold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card color="bg-blue-500" title="Total Tickets" count="12" />
            <Card color="bg-green-400" title="Total Solved" count="8" />
            <Card color="bg-red-400" title="Total Awaiting Approval" count="2" />
            <Card color="bg-yellow-300" title="Total in Progress" count="2" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-400 text-center py-2 text-sm text-black">
        Footer Area
      </footer>
    </div>
  )
}

const Card = ({ color, title, count }) => (
  <div className={`${color} text-center p-4 rounded-lg shadow-md`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-4xl font-bold mt-2 text-blue-900">{count}</p>
  </div>
);

export default Dashboard