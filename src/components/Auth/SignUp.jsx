import React from 'react'

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-teal-400">
            <div className="bg-teal-100 p-8 rounded-md shadow-lg w-full max-w-md">
                <h1 className="text-center text-2xl font-bold italic text-black mb-2">
                    Helpdesk System
                </h1>
                <p className="text-center text-black mb-6">Sign up here</p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border border-gray-400 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-400 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-400 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex justify-between mt-4 text-sm">
                    <a href="#" className="text-red-600 hover:underline">
                        Forgot password
                    </a>
                    <a href="#" className="text-black hover:underline">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignUp