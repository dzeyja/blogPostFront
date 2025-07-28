import axios from 'axios'
import React, { useState } from 'react'

export default function CreatePostPage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const createPost = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('image', image)

        try {
            const response = await axios.post('http://localhost:3002/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })

            setMessage(response.data.message)
            setTitle('')
            setContent('')
            setImage(null)
            setError('')
        } catch (e) {
            console.log(e.message)
            setError(e.message)
        }
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">Create Post Form</h1>
                {message && (
                    <div className="mb-4 text-center text-green-600 font-medium">{message}</div>
                )}
                {error && (
                    <div className="mb-4 text-center text-red-600 font-medium">{error}</div>
                )}
                <form onSubmit={createPost} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                        type="text"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input 
                        type="file" 
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Create new post
                    </button>
                </form>
            </div>
        </div>
    )
}
