import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export default function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem('authToken'))
    const [isAuth, setIsAuth] = useState(!!token)

    useEffect(() => {
        setIsAuth(!!token)
    }, [token])
  
    const login = (newToken) => {
        localStorage.setItem('authToken', newToken)
        setToken(newToken)
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ isAuth, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Кастомный хук ыңғайлылық үшін
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider')
    }
    return context
}
