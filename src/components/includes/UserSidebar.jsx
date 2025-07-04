import React from 'react'
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaClipboardList,
} from "react-icons/fa";

const UserSidebar = () => {
    return (
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
    )
}

export default UserSidebar