import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import { Divider, List, ListItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { menuDasboard } from '@data/menu'

import { useAuth } from '@contexts/AuthContext';

const Sidebar = () => {
  const {
    user,
    setUser,
    setIsLogged,
    setToken
  } = useAuth()

  const loggingOut = () => {
    setUser(null);
    setIsLogged(false);
    setToken(null)
    localStorage.removeItem('authContext');
  };

  return (
    <aside className="sidebar p-10 flex flex-col items-center shadow-xl z-50 h-screen">
      <div className="logo-wrapper mb-5">
        <Link to={'/'}>
          <img src="/img/logo.svg" alt="" className='w-48' />
        </Link>
      </div>

      <div className="dashboard-menu-item-wrapper flex flex-col items-start w-full">
        <List>
          {
            menuDasboard.map((value, index) => (
              <div className='menu-index' key={index}>
                <NavLink to={value.link}>
                  {
                    ({ isActive }) => (
                      <ListItem>
                        <div className="menu-dashboard flex items-center gap-5 my-3">
                          <div className={`${isActive ? 'bg-secondary-200 text-secondary-800' : 'bg-primary-400 text-primary-main'} p-1 rounded-lg`}>
                            {value.icon}
                          </div>
                          <p className={`text-base font-semibold ${isActive ? 'text-secondary-700' : 'text-primary-600'}`}>{value.name}</p>
                        </div>
                      </ListItem>
                    )
                  }
                </NavLink>
                {index === menuDasboard.length - 1 && <Divider sx={{ margin: "1rem 0" }} ></Divider>}
              </div>
            ))
          }
          <div className='menu-index hover:cursor-pointer hover:bg-secondary-100 rounded-lg' onClick={() => loggingOut()}>
            <ListItem>
              <div className="menu-dashboard flex items-center gap-5 my-3">
                <div className={`bg-primary-400 text-primary-main p-1 rounded-lg`}>
                  <LogoutIcon />
                </div>
                <p className={`text-base font-semibold text-primary-600`}>Logout</p>
              </div>
            </ListItem>
          </div>
        </List>
      </div>
    </aside>
  )
}

export default Sidebar