"use client"

import { apiLogin, apiLogout } from "@/actions/user"
import { createContext, useState } from "react"

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState({
        nome: "Joao Carlos",
        email: "email@fiap.com.br"
    })

    const login = async (credenciais) => {
        const resp = await apiLogin(credenciais)
        
        if (resp?.error) return {error: resp?.error}
            
        setUser({
            nome: credenciais.email,
            email: credenciais.email
        })
        
    }

    const logout = () => {
        setUser(null)
        apiLogout()
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}