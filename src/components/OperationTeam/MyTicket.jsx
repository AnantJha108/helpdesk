import React, { useState } from "react";
import { FaSyncAlt, FaUserPlus } from 'react-icons/fa';
import Header from "../includes/Header";
import OperationTeamSidebar from "../includes/OperationTeamSidebar";
import Footer from "../includes/Footer";

const tickets = [
    {
        id: 1234,
        subject: "Login issue",
        category: "Access issue",
        priority: "High",
        date: "13/08/21",
        status: "In Progress"
    },
    {
        id: 1124,
        subject: "New ticket issue",
        category: "Access issue",
        priority: "Medium",
        date: "14/08/21",
        status: "On hold"
    },
    {
        id: 1224,
        subject: "New request",
        category: "Feedback",
        priority: "Low",
        date: "13/08/21",
        status: "Closed"
    },
    {
        id: 1244,
        subject: "Ticket submission",
        category: "Ticketing",
        priority: "High",
        date: "14/08/21",
        status: "In Progress"
    },
    {
        id: 1114,
        subject: "Login issue",
        category: "Access issue",
        priority: "High",
        date: "3/08/21",
        status: "In Progress"
    }
];

const statusStyles = {
    "In Progress": "bg-green-400 text-white",
    "On hold": "bg-blue-800 text-white",
    "Closed": "bg-black text-white"
};

const MyTicket = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex flex-1">
                <OperationTeamSidebar />

                <main className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold mb-4">My Ticket</h2>

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
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Person in charge</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket, idx) => (
                                    <tr key={ticket.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                                        <td onClick={() => setIsOpen(true)} className="p-2 text-blue-600 underline cursor-pointer">{ticket.id}</td>
                                        <td className="p-2">{ticket.subject}</td>
                                        <td className="p-2">{ticket.category}</td>
                                        <td className="p-2">{ticket.priority}</td>
                                        <td className="p-2">{ticket.date}</td>
                                        <td className="p-2">
                                            <button onClick={() => setModal1(true)} className={`px-2 py-1 text-sm rounded ${statusStyles[ticket.status]}`}>
                                                {ticket.status}
                                            </button>
                                        </td>
                                        <td onClick={() => setModal2(true)} className="p-2 text-xl">👤👥</td>
                                        <td className="p-2 text-xl flex gap-2">
                                            📄➕⬇️
                                        </td>
                                    </tr>
                                ))}
                                {isOpen && (
                                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                      
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                                            <h2 className="text-xl font-semibold text-center mb-4">Ticket Details</h2>

                                            <div className="space-y-2 text-sm md:text-base">
                                                <p><strong>Ticket No:</strong> { }</p>
                                                <p><strong>Date:</strong> { }</p>
                                                <p><strong>Name:</strong> { }</p>
                                                <p><strong>Dept:</strong> { }</p>

                                                <p><strong>Title:</strong> </p>
                                                <p><strong>Description:</strong> </p>
                                                <p><strong>Category:</strong> </p>
                                                <p><strong>Type:</strong></p>
                                                <p><strong>Priority:</strong></p>
                                                <p><strong>Status:</strong></p>
                                                <p><strong>Attachment:</strong></p>
                                            </div>


                                            <div className="flex justify-end space-x-2">
                                                <button className="bg-indigo-400 text-white px-6 py-2 rounded hover:bg-indigo-500">
                                                    Update
                                                </button>

                                                <button
                                                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {modal1 && (
                                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                        
                                        <div onClick={() => setModal1(false)} className="bg-teal-400 p-6  rounded-lg shadow-lg w-[90%] max-w-md">
                                            <h2 className="text-xl font-semibold text-center mb-4">My Ticket - Close Ticket</h2>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                
                                                <div className="space-y-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Ticket No."
                                                        className="w-full px-4 py-2 rounded-md shadow-sm placeholder-italic focus:outline-none focus:ring-2 focus:ring-white"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Team name"
                                                        className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                                                    />
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="Team Member"
                                                            className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white pr-10"
                                                        />
                                                        <FaUserPlus className="absolute top-2.5 right-3 text-black" />
                                                    </div>
                                                </div>

                                                
                                                <textarea
                                                    placeholder="Remark"
                                                    className="w-full h-full min-h-[120px] px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white resize-none"
                                                />

                                        
                                                <div className="flex items-center justify-center gap-4 mt-6">
                                                    <button className="text-xl text-black hover:text-white transition duration-300">
                                                        <FaSyncAlt />
                                                    </button>
                                                    <button className="bg-gray-400 hover:bg-gray-600 text-black hover:text-white font-semibold py-2 px-6 rounded shadow">
                                                        Close Ticket
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {modal2 && (
                                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                       
                                        <div onClick={() => setModal2(false)} className="bg-teal-400 p-6  rounded-lg shadow-lg w-[90%] max-w-md">
                                            <h2 className="text-xl font-semibold text-center mb-4">My Ticket - Team Creation</h2>
                                            <div className="grid md:grid-cols-2 gap-4">
                                            
                                                <div className="space-y-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Ticket No."
                                                        className="w-full px-4 py-2 rounded-md shadow-sm placeholder-italic focus:outline-none focus:ring-2 focus:ring-white"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Team name"
                                                        className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                                                    />
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="Team Member"
                                                            className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white pr-10"
                                                        />
                                                        <FaUserPlus className="absolute top-2.5 right-3 text-black" />
                                                    </div>
                                                </div>

                             
                                                <textarea
                                                    placeholder="Remark"
                                                    className="w-full h-full min-h-[120px] px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white resize-none"
                                                />
                                            </div>

                                     
                                            <div className="flex items-center justify-center gap-4 mt-6">
                                                <button className="text-xl text-black hover:text-white transition duration-300">
                                                    <FaSyncAlt />
                                                </button>
                                                <button className="bg-gray-400 hover:bg-gray-600 text-black hover:text-white font-semibold py-2 px-6 rounded shadow">
                                                    Create Team
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </tbody>
                        </table>
                    </div>

                    
                    <div className="mt-4 text-sm text-right pr-4">«‹ 1 ›»</div>
                    <div className="mt-2 text-sm">Showing 1 to 5 of 5 entries</div>
                </main>
            </div >
            <Footer/>
        </div >
    );
};

export default MyTicket;
