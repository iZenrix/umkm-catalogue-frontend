import React from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)

    const value = {
        user,
        setUser, 
        isLogged,
        setIsLogged
    }

    return (
        
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        
    )
}