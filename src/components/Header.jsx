import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='border'>
        <div className='flex justify-between items-center py-4 max-w-7xl mx-auto'>
            <div className='flex gap-6'>
              <Link to={'/'} className='font-bold'>
                  Blog App
              </Link>
              <Link to={'/create'}>
                Create New Post
              </Link>
              <Link to={'/profile'}>
                My Profile
              </Link>
            </div>

            <div className='flex gap-4'>
                <Link className='underline' to={'/login'}>Login</Link>
                <Link className='underline' to={'/register'}>Register</Link>
            </div>
        </div>
    </header>
  )
}
