import React from 'react'

const Header = () => {
    return (
        <header className="bg-teal-400 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl italic font-bold">Helpdesk</h1>
            <div className="flex gap-2">
                <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
                <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
                <span>🔔</span>
                <span>👤</span>
                <span>🔁</span>
            </div>
        </header>
    )
}

export default Header