import React, { useState } from 'react'
import UserSidebar from '../includes/UserSidebar';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const EditUserProfile = () => {
     const [formData, setFormData] = useState({
        username: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        email: "",
        realName: "",
        accessLevel: "",
        projectAccessLevel: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Updated data:", formData);
        // Add update API call here
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1">
                <UserSidebar/>
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold mb-6">User Profile</h2>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="bg-teal-400 px-6 py-3 text-black font-semibold">
                            Edit Account
                        </div>

                        <form onSubmit={handleUpdate} className="grid md:grid-cols-2 gap-4 p-6 bg-gray-100">
                            {[
                                ["username", "Username"],
                                ["currentPassword", "Current Password"],
                                ["newPassword", "New Password"],
                                ["confirmPassword", "Confirm Password"],
                                ["email", "Email"],
                                ["realName", "Real Name"],
                                ["accessLevel", "Access Level"],
                                ["projectAccessLevel", "Project Access Level"]
                            ].map(([name, label]) => (
                                <div key={name} className="col-span-2 md:col-span-1">
                                    <label className="block font-medium text-gray-800 mb-1">
                                        {label}
                                    </label>
                                    <input
                                        type={name.toLowerCase().includes("password") ? "password" : "text"}
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-400 rounded bg-white"
                                        required
                                    />
                                </div>
                            ))}

                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500 transition"
                                >
                                    Update User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default EditUserProfile