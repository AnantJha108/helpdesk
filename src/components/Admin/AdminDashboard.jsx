import React from 'react'
import {
    FaTachometerAlt,
    FaTicketAlt,
    FaClipboardList,
    FaCogs,
    FaBell,
    FaUser,
    FaExchangeAlt,
    FaHeadset,
    FaTools,
    FaChartBar,
    FaStar,
    FaStarHalfAlt,
    FaRegStar
} from "react-icons/fa";

const AdminDashboard = () => {
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

            {/* Body Section */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-gray-200 w-48 p-4 space-y-6">
                    <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
                    <NavItem icon={<FaTicketAlt />} label="Database" />
                    <NavItem icon={<FaClipboardList />} label="Setting" />
                    <NavItem icon={<FaCogs />} label="User Log History" />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 overflow-auto">
                    <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <Card color="bg-blue-500" title="Total Tickets" count="12" />
                        <Card color="bg-green-400" title="Total Solved" count="8" />
                        <Card color="bg-red-400" title="Total Awaiting Approval" count="2" />
                        <Card color="bg-yellow-300" title="Total in Progress" count="2" />
                    </div>

                    {/* Lower Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Chart Placeholder */}
                        <div className="bg-teal-300 rounded-lg flex items-center justify-center h-60">
                            <FaChartBar className="text-[80px] text-blue-900" />
                        </div>

                        {/* Support Team */}
                        <div className="bg-teal-200 rounded-lg flex flex-col items-center justify-center p-4 h-60 space-y-4">
                            <div className="flex justify-around w-full">
                                <div className="flex flex-col items-center">
                                    <FaHeadset className="text-4xl mb-2" />
                                    <p className="text-lg font-semibold">3</p>
                                    <p className="text-sm">Technical Supports</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaTools className="text-4xl mb-2" />
                                    <p className="text-lg font-semibold">4</p>
                                    <p className="text-sm">Operation Team</p>
                                </div>
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="bg-teal-300 rounded-lg flex flex-col items-center justify-center h-60 p-4">
                            <p className="mb-2 font-medium">Customer Feedback</p>
                            <div className="flex text-yellow-500 text-2xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <FaRegStar />
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

const NavItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
        {icon}
        <span>{label}</span>
    </div>
);


const Card = ({ color, title, count }) => (
    <div className={`${color} text-center p-4 rounded-lg shadow-md`}>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-4xl font-bold mt-2 text-blue-900">{count}</p>
    </div>
);


export default AdminDashboard