import React, { useEffect } from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('authContext') ? JSON.parse(localStorage.getItem('authContext')).user : null)
    const [token, setToken] = useState(localStorage.getItem('authContext') ? JSON.parse(localStorage.getItem('authContext')).token : null)
    const [isLogged, setIsLogged] = useState(false)

    const value = {
        user,
        setUser,
        token,
        setToken,
        isLogged,
        setIsLogged
    }

    useEffect(() => {
        if (token) {
            localStorage.setItem('authContext', JSON.stringify({
                user,
                token
            }))
        }
    }, [user])

    useEffect(() => {
        if (localStorage.getItem('authContext')) {
            const dataAuth = JSON.parse(localStorage.getItem('authContext'))

            setUser(dataAuth.user)
            setToken(dataAuth.token)
            setIsLogged(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}