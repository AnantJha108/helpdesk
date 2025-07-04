import React from 'react'
import {
    FaUser,
    FaStar,
} from "react-icons/fa";
import Footer from '../includes/Footer';
import OperationTeamSidebar from '../includes/OperationTeamSidebar';
import Header from '../includes/Header';



const Performance = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1">
                <OperationTeamSidebar/>
                <div className="flex-1 p-4 overflow-auto">
                    <h1 className="text-2xl font-semibold mb-6 text-black">Performance</h1>
                    <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="bg-gray-200 p-4 rounded-xl">
                                    <FaUser className="text-5xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Operation Name</h2>
                                    <div className="bg-gray-200 rounded-md px-4 py-2 mt-2 text-sm">
                                        <p>Contact No: 0123456789</p>
                                        <p>Department: ABC</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-200 p-4 rounded-xl">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total Ticket Handle</span>
                                    <span className="font-semibold">5</span>
                                </div>
                                <div className="text-sm space-y-1">
                                    <p>Ticket Solved: <span className="ml-2">2</span></p>
                                    <p>Ticket Pending: <span className="ml-2">1</span></p>
                                    <p>Ticket in progress: <span className="ml-2">2</span></p>
                                    <div className="flex items-center">
                                        <span className="mr-2">Rating:</span>
                                        <div className="text-yellow-500 flex">
                                            {[...Array(4)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                            <FaStar className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {["Operation Name 1", "Operation Name 2", "Operation Name 3"].map((name, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white p-3 shadow rounded-xl">
                                    <div className="bg-gray-200 p-3 rounded-full">
                                        <FaUser className="text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold">{name}</p>
                                        <button className="mt-1 bg-teal-400 hover:bg-teal-600 text-white px-4 py-1 rounded">
                                            View details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}



export default Performance