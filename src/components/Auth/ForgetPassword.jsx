import React from 'react'

const ForgetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-teal-400">
            <div className="bg-teal-100 p-8 rounded-md shadow-lg w-full max-w-md">
                <p className="text-center text-black mb-6">
                    Don’t worry, Enter your email below and we will <br />
                    send you a link to change password.
                </p>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-400 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
                    >
                        Submit
                    </button>

                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword