import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const sendData = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3002/api/register', {
                username,
                password
            })

            console.log(response.data)
            setUsername('')
            setPassword('')
            setMessage('Сен сәтті тіркелдің!')
            navigate('/login')
        } catch (e) {
            setMessage(`Қате шықты ${e.message}`)
            console.log(e.message)
        }
    } 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">Register Form</h1>
                {message && (
                    <div className="mb-4 text-center text-green-600 font-medium">{message}</div>
                )}
                <form onSubmit={sendData} className="flex flex-col gap-4">
                    <input 
                        placeholder="Enter username" 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input 
                        placeholder="Enter password" 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button 
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}
