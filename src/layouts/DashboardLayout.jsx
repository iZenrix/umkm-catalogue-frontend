import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'

const DashboardLayout = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(()=>{
        if (pathname === "/dashboard/") {
            navigate("/dashboard/approval")
        }
    },[])

    return (
        <div className='flex'>
            <Sidebar />
            <div className="w-screen h-screen overflow-y-scroll">
                <Navbar isDashboard={true}/>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout