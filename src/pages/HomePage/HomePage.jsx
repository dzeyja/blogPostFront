import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomePage() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3002/api/posts')
      setPosts(res.data)
    } catch (error) {
      console.error('Ошибка при получении постов:', error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-500">Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
           <img src={`http://localhost:3002/${post.image}`} />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
