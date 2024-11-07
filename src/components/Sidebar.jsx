import React from 'react'

import { Link } from 'react-router-dom'

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
              <>
                <ListItem key={index}>
                  <div className="menu-dashboard flex items-center gap-5 my-3">
                    <div className='bg-secondary-200 p-1 rounded-lg text-secondary-800'>
                      {value.icon}
                    </div>
                    <p className='text-base font-semibold text-primary-600'>{value.name}</p>
                  </div>
                </ListItem>
                {index === menuDasboard.length - 3 && <Divider sx={{ margin: "1rem 0" }} ></Divider>}
              </>
            ))
          }
        </List>
      </div>
    </aside>
  )
}

export default Sidebar