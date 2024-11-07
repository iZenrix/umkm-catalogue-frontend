import React from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from '@components/Navbar'

const AppLayout = () => {
    return (
    <div className="app-layout">
        <Navbar />
        <div className="h-full bg-neutral-100 px-20">
            <Outlet />
        </div>
    </div>
    )
}

export default AppLayout