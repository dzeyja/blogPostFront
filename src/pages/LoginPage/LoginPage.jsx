import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')


    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3002/api/login', {
                username,
                password
            })
            console.log(response.data)
            // optionally save token or redirect

            setUsername('')
            setPassword('')
            setMessage('Сен успешно кірдің')
        } catch (e) {
            console.log(e.message)
            setError('Сенде ошибка емае')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">Login</h1>
                {message && (
                    <div className="mb-4 text-center text-green-600 font-medium">{message}</div>
                )}
                {error && (
                    <div className="mb-4 text-center text-red-600 font-medium">{message}</div>
                )}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
