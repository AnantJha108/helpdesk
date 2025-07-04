import React, { useState } from 'react'
import { FaEdit, FaUser } from "react-icons/fa";
import Footer from '../includes/Footer';
import UserSidebar from '../includes/UserSidebar';
import Header from '../includes/Header';

const UserProfile = () => {
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

            <div className="flex flex-1">
                <UserSidebar/>
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold mb-6">User Profile</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        
                        <div className="bg-white rounded-lg p-6 shadow-md relative">
                            <FaEdit className="absolute top-4 right-4 cursor-pointer text-gray-700" />
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-300 p-6 rounded-full">
                                    <FaUser className="text-4xl" />
                                </div>
                            </div>
                            <div className="text-center space-y-1">
                                <p><strong>Username:</strong> Anant Jha</p>
                                <p><strong>Contact Number:</strong> +91-8002056007</p>
                                <p><strong>Email:</strong> Anantjhapurnea@gmail.com</p>
                                <p><strong>Department:</strong> IT Support</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-center font-medium mb-4">Give Your Feedback</h3>
                            <textarea
                                className="w-full border p-2 mb-4"
                                rows={3}
                                placeholder="[Lorem Ipsum]"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <div className="flex justify-center mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className={`text-2xl cursor-pointer ${i <= rating ? "text-yellow-400" : "text-gray-400"}`}
                                        onClick={() => setRating(i)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-center">
                                <button className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500">
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserProfile