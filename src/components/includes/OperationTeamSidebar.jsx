import React from 'react'

const OperationTeamSidebar = () => {
    return (
        <aside className="w-48 bg-gray-200 p-4 space-y-4">
            <SidebarItem icon="📊" label="Dashboard" />
            <SidebarItem icon="🧾" label="Ticket Approval" />
            <SidebarItem icon="📋" label="My Ticket" />
            <SidebarItem icon="⚙️" label="Performance" />
        </aside>
    )
}

const SidebarItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 hover:font-semibold cursor-pointer">
        <span>{icon}</span>
        <span>{label}</span>
    </div>
);

export default OperationTeamSidebar