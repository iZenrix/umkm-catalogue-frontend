import React from 'react'

import { Link } from 'react-router-dom'

import UserDropdown from '@components/UserDropdown'
import { useAuth } from '@contexts/AuthContext'

const Navbar = ({ isDashboard }) => {
    const { isLogged } = useAuth()

    return (
        <div className={`bg-white px-24 sticky top-0 z-50 shadow-md`}>
            <div className="navbar-content-wrapper flex justify-between items-center">
                {
                    isDashboard ?
                        <div></div>
                        :
                        <Link to={'/'}>
                            <img src="/img/logo.svg" alt="" className='h-12' />
                        </Link>
                }
                {
                    !isLogged ?
                        <div className="login-button flex gap-3 py-5">
                            <Link to={"/register"}>
                                <div className='text-sm font-semibold text-secondary-600 border border-secondary-600 py-2 px-4 rounded-md text-center'>Register</div>
                            </Link>
                            <Link to={"/login"}>
                                <div className='text-sm font-semibold text-white bg-secondary-600 py-2 px-4 rounded-md text-center'>Login</div>
                            </Link>
                        </div>
                        :
                        <UserDropdown />
                }
            </div>
        </div>
    )
}

export default Navbar