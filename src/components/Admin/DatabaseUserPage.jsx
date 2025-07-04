import React from 'react';
import {
    FaTachometerAlt,
    FaTicketAlt,
    FaClipboardList,
    FaCogs,
    FaBell,
    FaUser,
    FaExchangeAlt,
    FaTrash,
    FaEdit,
    FaSearch
} from "react-icons/fa";

const users = [
    { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
    { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
    { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
];

const DatabaseUserPage = () => {
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
                    <h1 className="text-2xl font-semibold mb-4">Database</h1>

                    {/* Tabs */}
                    <div className="flex justify-start gap-2 mb-4 text-sm sm:text-base">
                        {["User", "Operation Team", "Technical Support"].map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 border border-gray-300 ${tab === "User" ? "bg-teal-400 text-white font-bold" : "bg-white"
                                    } rounded-t-md`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Find ticket"
                            className="border px-4 py-2 rounded-l-md w-full max-w-xs"
                        />
                        <button className="bg-gray-200 px-3 py-2 rounded-r-md border">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-auto rounded-lg border border-gray-200">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-3"><input type="checkbox" /></th>
                                    <th className="p-3">Staff ID</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Department</th>
                                    <th className="p-3">Speciality</th>
                                    <th className="p-3">Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr
                                        key={idx}
                                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
                                    >
                                        <td className="p-3"><input type="checkbox" /></td>
                                        <td className="p-3">{user.id}</td>
                                        <td className="p-3">{user.name}</td>
                                        <td className="p-3">{user.department}</td>
                                        <td className="p-3">{user.speciality}</td>
                                        <td className="p-3 flex gap-2">
                                            <button className="text-black hover:text-blue-600">
                                                <FaEdit />
                                            </button>
                                            <button className="text-black hover:text-red-600">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="text-sm mt-2 text-gray-700">Showing 1 to 3 of 3 entries</div>
                </div>
            </div>

            {/* Footer */}
            < footer className="bg-teal-400 text-center py-2 text-sm text-black" >
                Footer Area
            </footer >
        </div>
    )
}

const NavItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
        {icon}
        <span>{label}</span>
    </div>
);

export default DatabaseUserPage;
