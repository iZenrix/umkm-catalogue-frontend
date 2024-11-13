import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import { useAuth } from '@contexts/AuthContext';

const DashboardLayout = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { user, isLogged } = useAuth()

    useEffect(() => {
        if (user) {
            if (user.role.name === "admin") {
                if (pathname === "/dashboard/" || pathname === "/dashboard") {
                    navigate("/dashboard/approval")
                }
            } else {
                navigate("/")
            }
        }
    }, [user])

    useEffect(() => {
        if (!isLogged) {
            navigate("/login")
        }
    }, [isLogged])

    return (
        <div className='flex'>
            <Sidebar />
            <div className="w-screen h-screen overflow-y-scroll">
                <Navbar isDashboard={true} />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout