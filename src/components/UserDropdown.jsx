import React, { useState } from 'react'

import { Avatar, Typography, Card, CardActionArea, CardContent, Menu, MenuItem, Divider } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StorefrontIcon from '@mui/icons-material/Storefront';

import { Link } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';

const UserDropdown = () => {
    const {
        user,
        setUser,
        setIsLogged,
        setToken
    } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null); // State untuk mengatur anchor

    // Fungsi untuk membuka menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // Mengatur elemen pemicu
    };

    // Fungsi untuk menutup menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    const loggingOut = () => {
        setUser(null);
        setIsLogged(false);
        setToken(null)
        localStorage.removeItem('authContext');
        handleClose();
    };

    return (
        <div className="user-account flex items-center gap-3">
            <CardActionArea>
                <CardContent onClick={handleClick}>
                    <div className="user-account flex items-center gap-3">
                        <div className="user-account-wrapper flex items-center gap-3">
                            <Avatar />
                            <div className="user-name-email text-start">
                                {/* <p className='text-sm font-semibold'>{user?.name}</p>
                                <p className='text-sm font-normal'>{user?.email}</p> */}
                                <p className='text-sm font-semibold'>{user.name}</p>
                                <p className='text-sm font-normal'>{user.email}</p>
                            </div>
                        </div>
                        <KeyboardArrowDownIcon sx={{
                            transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease', // Animasi rotasi
                        }} />
                    </div>
                </CardContent>
            </CardActionArea>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}

                elevation={0}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {/* Item di dalam Menu */}
                <Link to={"/register-umkm"}>
                    <MenuItem onClick={handleClose}>
                        <AddBusinessIcon sx={{ marginRight: "1rem" }} />
                        Register UMKM
                    </MenuItem>
                </Link>
                <Link to={"details/1"}><MenuItem onClick={handleClose}>
                    <StorefrontIcon sx={{ marginRight: "1rem" }} />
                    My UMKM
                </MenuItem>
                </Link>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={loggingOut}> <LogoutOutlinedIcon sx={{ marginRight: "1rem" }} /> Logout</MenuItem>
            </Menu>
        </div >
    )
}

export default UserDropdown