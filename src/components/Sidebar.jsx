import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import { Divider, List, ListItem } from '@mui/material';

import { menuDasboard } from '@data/menu'


const Sidebar = () => {
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
                          <div className={`${isActive && value.name !== "Logout" ? 'bg-secondary-200 text-secondary-800' : 'bg-primary-400 text-primary-main'} p-1 rounded-lg`}>
                            {value.icon}
                          </div>
                          <p className={`text-base font-semibold ${isActive && value.name !== "Logout" ? 'text-secondary-700' : 'text-primary-600'}`}>{value.name}</p>
                        </div>
                      </ListItem>
                    )
                  }
                </NavLink>
                {index === menuDasboard.length - 2 && <Divider sx={{ margin: "1rem 0" }} ></Divider>}
              </div>
            ))
          }
        </List>
      </div>
    </aside>
  )
}

export default Sidebar