import React from 'react'
import {
    FaTachometerAlt,
    FaTicketAlt,
    FaClipboardList,
    FaCogs
} from "react-icons/fa";

const AdminSidebar = () => {
    return (
        <div className="bg-gray-200 w-48 p-4 space-y-6">
            <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
            <NavItem icon={<FaTicketAlt />} label="Database" />
            <NavItem icon={<FaClipboardList />} label="Setting" />
            <NavItem icon={<FaCogs />} label="User Log History" />
        </div>
    )
}

const NavItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 cursor-pointer hover:font-medium">
        {icon}
        <span>{label}</span>
    </div>
);

export default AdminSidebar