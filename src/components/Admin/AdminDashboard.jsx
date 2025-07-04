import React from 'react'
import {
    FaHeadset,
    FaTools,
    FaChartBar,
    FaStar,
    FaStarHalfAlt,
    FaRegStar
} from "react-icons/fa";
import Header from '../includes/Header';
import AdminSidebar from '../includes/AdminSidebar';
import Footer from '../includes/Footer';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1">
                <AdminSidebar/>
                <div className="flex-1 p-4 overflow-auto">
                    <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <Card color="bg-blue-500" title="Total Tickets" count="12" />
                        <Card color="bg-green-400" title="Total Solved" count="8" />
                        <Card color="bg-red-400" title="Total Awaiting Approval" count="2" />
                        <Card color="bg-yellow-300" title="Total in Progress" count="2" />
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       
                        <div className="bg-teal-300 rounded-lg flex items-center justify-center h-60">
                            <FaChartBar className="text-[80px] text-blue-900" />
                        </div>

                       
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
            <Footer/>
        </div>
    )
}


const Card = ({ color, title, count }) => (
    <div className={`${color} text-center p-4 rounded-lg shadow-md`}>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-4xl font-bold mt-2 text-blue-900">{count}</p>
    </div>
);


export default AdminDashboard