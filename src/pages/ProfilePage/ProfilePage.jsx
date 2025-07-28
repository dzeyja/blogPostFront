import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProfilePage() {
    const [user, setUser] = useState({})
    
    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('authToken')
            const response = await axios.get('http://localhost:3002/api/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                    {/* Profile Header with animated gradient */}
                    <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 animate-gradient-x"></div>
                    
                    {/* Profile Content */}
                    <div className="px-6 pb-8 relative">
                        {/* Avatar circle */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            <div className="h-32 w-32 rounded-full border-4 border-white bg-indigo-100 shadow-md flex items-center justify-center">
                                <span className="text-5xl font-bold text-indigo-600">
                                    {user.username?.charAt(0).toUpperCase() || 'U'}
                                </span>
                            </div>
                        </div>
                        
                        {/* User info */}
                        <div className="pt-20 text-center">
                            <h1 className="text-3xl font-bold text-gray-800 mb-1">
                                @{user.username || 'username'}
                            </h1>
                            <p className="text-indigo-500 mb-6">Member</p>
                            
                            {/* Stats */}
                            <div className="flex justify-center space-x-6 border-t border-gray-100 pt-6">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-gray-800">0</span>
                                    <span className="text-sm text-gray-500">Posts</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-gray-800">0</span>
                                    <span className="text-sm text-gray-500">Followers</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-gray-800">0</span>
                                    <span className="text-sm text-gray-500">Following</span>
                                </div>
                            </div>
                            
                            {/* Edit button */}
                            <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Additional sections can be added here */}
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
                    <p className="text-gray-600">
                        {user.bio || 'No bio added yet.'}
                    </p>
                </div>
            </div>
        </div>
    )
}