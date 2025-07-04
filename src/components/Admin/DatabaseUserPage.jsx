import React from 'react';
import {
    FaTrash,
    FaEdit,
    FaSearch
} from "react-icons/fa";
import AdminSidebar from '../includes/AdminSidebar';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const users = [
    { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
    { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
    { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
];

const DatabaseUserPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
           <Header/>
            <div className="flex flex-1">
                <AdminSidebar/>
                <div className="flex-1 p-4 overflow-auto">
                    <h1 className="text-2xl font-semibold mb-4">Database</h1>

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

                    <div className="text-sm mt-2 text-gray-700">Showing 1 to 3 of 3 entries</div>
                </div>
            </div>

        <Footer/>
        </div>
    )
}


export default DatabaseUserPage;
