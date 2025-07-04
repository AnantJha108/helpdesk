import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-400">
            <div className="bg-teal-100 p-8 rounded-md shadow-lg w-full max-w-md">
                <h1 className="text-center text-2xl font-semibold italic text-black mb-8">
                    Helpdesk System
                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 border border-gray-400 rounded"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border border-gray-400 rounded"
                />

                <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
                    Sign In
                </button>

                <div className="flex justify-between mt-4 text-sm">
                    <a href="#" className="text-red-600 hover:underline">
                        Forgot password
                    </a>
                    <a href="#" className="text-black hover:underline">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login