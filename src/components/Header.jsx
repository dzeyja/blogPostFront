import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export default function Header() {
  const [token, setToken] = useState(localStorage.getItem('authToken'))
  const { isAuth, logout } = useAuth()

  const logoutHandler = () => {
    logout()
  }

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
              {
                isAuth 
                ? (
                  <button onClick={logoutHandler}>Log out</button>
                ) : (
                  <>
                    <Link className='underline' to={'/login'}>Login</Link>
                    <Link className='underline' to={'/register'}>Register</Link>
                  </>
                )
              }
            </div>
        </div>
    </header>
  )
}
