import React from 'react'
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaClipboardList,
  FaBell,
  FaUser,
  FaExchangeAlt,
  FaPaperclip,
} from "react-icons/fa";

const CreateTicket = () => {
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
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold text-center mb-6">Create New Ticket</h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Ticket No." />
                        <Input label="Date" type="date" />
                        <Input label="Name" />
                        <Input label="Department" />
                        <Input label="Subject" className="md:col-span-2" />
                        <Input label="Category" />
                        <Textarea label="Description" icon={<FaPaperclip />} />
                        <Input label="Type" />
                        <Input label="Priority" />

                        {/* Captcha */}
                        <div className="md:cols-2 mt-4">
                            <div className="bg-white p-4 border rounded flex items-center justify-between">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="w-5 h-5" />
                                    <span>I'm not a robot</span>
                                </label>
                                <img
                                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                    alt="captcha"
                                    className="h-10"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:cols-2 mt-4">
                            <button
                                type="submit"
                                className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-teal-400 text-center py-2 text-sm text-black">
                Footer Area
            </footer>
        </div>
    )
}

// Reusable Input
const Input = ({ label, type = "text", className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="mb-1">{label}:</label>
    <input type={type} className="p-2 border rounded shadow-sm" />
  </div>
);

// Reusable Textarea with optional icon
const Textarea = ({ label, icon }) => (
  <div className="flex flex-col">
    <label className="mb-1">{label}:</label>
    <div className="relative">
      <textarea
        rows="5"
        className="w-full p-2 border rounded shadow-sm resize-none"
      ></textarea>
      {icon && (
        <div className="absolute bottom-2 right-2 text-teal-600 cursor-pointer">
          {icon}
        </div>
      )}
    </div>
  </div>
);

// Sidebar Item
const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

export default CreateTicket