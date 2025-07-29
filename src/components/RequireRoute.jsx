import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function RequireRoute({ children }) {
    const { isAuth } = useAuth()

    if (!isAuth) {
        return <Navigate to={'/login'} replace />
    }

    return children
}
