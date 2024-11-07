import React from 'react'

import { Link } from 'react-router-dom'

import UserDropdown from '@components/UserDropdown'

const Navbar = ({isDashboard}) => {
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
                <UserDropdown />
            </div>
        </div>
    )
}

export default Navbar