import React from 'react'

import { Link } from 'react-router-dom'

import { Avatar } from '@mui/material'

const Navbar = () => {
    return (
        <div className='bg-white px-20 sticky top-0 shadow-md z-50'>
            <div className="navbar-content-wrapper p-3 flex justify-between items-center">
                <Link to={'/'}>
                    <img src="/img/logo.svg" alt="" className='h-12' />
                </Link>
                <div className="user-account flex items-center gap-3">
                    <Avatar />
                    <div className="username-wrapper">
                        <p className='font-semibold text-lg'>User</p>
                        <p className='font-medium text-sm'>Role</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar