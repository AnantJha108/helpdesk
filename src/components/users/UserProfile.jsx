import React, { useState } from 'react'
import { FaEdit, FaUser, FaTachometerAlt, FaTicketAlt, FaClipboardList, FaBell, FaUser as FaUserIcon, FaExchangeAlt } from "react-icons/fa";

const UserProfile = () => {
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Bar */}
            <div className="bg-teal-400 flex items-center justify-between px-4 py-3">
                <h1 className="text-white text-2xl font-bold italic">Helpdesk</h1>
                <div className="flex items-center space-x-4">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
                    <FaBell className="text-black" />
                    <FaUserIcon className="text-black" />
                    <FaExchangeAlt className="text-black" />
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
                    <h2 className="text-2xl font-semibold mb-6">User Profile</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Profile Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md relative">
                            <FaEdit className="absolute top-4 right-4 cursor-pointer text-gray-700" />
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-300 p-6 rounded-full">
                                    <FaUser className="text-4xl" />
                                </div>
                            </div>
                            <div className="text-center space-y-1">
                                <p><strong>Username:</strong> Anant Jha</p>
                                <p><strong>Contact Number:</strong> +91-8002056007</p>
                                <p><strong>Email:</strong> Anantjhapurnea@gmail.com</p>
                                <p><strong>Department:</strong> IT Support</p>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-center font-medium mb-4">Give Your Feedback</h3>
                            <textarea
                                className="w-full border p-2 mb-4"
                                rows={3}
                                placeholder="[Lorem Ipsum]"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <div className="flex justify-center mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className={`text-2xl cursor-pointer ${i <= rating ? "text-yellow-400" : "text-gray-400"}`}
                                        onClick={() => setRating(i)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-center">
                                <button className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500">
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
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

const SidebarItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
        {icon}
        <span>{label}</span>
    </div>
);

export default UserProfile