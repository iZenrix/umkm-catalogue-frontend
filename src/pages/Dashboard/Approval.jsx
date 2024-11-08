import React from 'react'

import { data_umkm } from '@data/umkm'

import { Link } from 'react-router-dom';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Approval = () => {
    return (
        <div className='dashboard-pages p-20 bg-blue-50'>
            <div className="button-container w-full flex justify-end">
                <button className='bg-secondary-800 hover:bg-secondary-700 py-3 px-5 rounded-lg text-white font-light mb-3'>+ Add Category</button>
            </div>

            <div className="table-container bg-white p-10 rounded-lg">
                <div className="filter-button mb-5 flex gap-5">
                    <button className='flex justify-start items-center gap-2 p-2 ps-0'>
                        <p>Sort</p>
                        <SortOutlinedIcon sx={{ color: "#1FBB84" }} />
                    </button>
                    <button className='flex justify-start items-center gap-2 p-2 ps-0'>
                        <p>Filter</p>
                        <FilterAltOutlinedIcon sx={{ color: "#1FBB84" }} />
                    </button>
                </div>
                <table className='w-full border-spacing-10'>
                    <thead>
                        <tr >
                            {
                                Object.keys(data_umkm[0]).map((value, index) => (
                                    <th className={`font-semibold text-left ${value !== "id" && 'text-center'}`} key={index}>{value.toUpperCase()}</th>
                                ))
                            }
                            <th className='font-semibold text-center'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data_umkm.map((value, index) => (
                                <tr key={index}>
                                    <td className='py-5'>{value.id}</td>
                                    <td className='py-5'>
                                        <div className="data-wrapper flex justify-center items-center gap-5">
                                            <img src="/img/bg-umkm.png" alt="" className='w-20 h-20 object-cover rounded-md' />
                                            <p>{value.umkm}</p>
                                        </div>
                                    </td>
                                    <td className='py-5 text-center'>{value.category}</td>
                                    <td className='py-5 text-center'>{value.location}</td>
                                    <td className='py-5 text-center'>
                                        <div className="data-rate-wrapper flex justify-center items-center gap-2">
                                            <p>{value.rate}</p>
                                            <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className="flex justify-center items-center h-full">
                                            <Link to={`/dashboard/approval/details/${index + 1}`} className='bg-secondary-300 hover:bg-secondary-200 py-2 px-5 rounded-full text-secondary-800'>
                                                Lihat Detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className="pagination-container w-full flex justify-center mt-5 gap-5">
                    <button className='hover:bg-primary-400 py-3 px-5 rounded-lg text-primary-800'>{'<'}</button>
                    <button className='bg-secondary-100 hover:bg-secondary-200 py-3 px-5 rounded-lg text-secondary-600'>1</button>
                    <button className='bg-primary-400 hover:bg-primary-600 py-3 px-5 rounded-lg text-primary-800'>2</button>
                    <button className='bg-primary-400 hover:bg-primary-600 py-3 px-5 rounded-lg text-primary-800'>3</button>
                    <button className='bg-primary-400 hover:bg-primary-600 py-3 px-5 rounded-lg text-primary-800'>4</button>
                    <button className='bg-primary-400 hover:bg-primary-600 py-3 px-5 rounded-lg text-primary-800'>5</button>
                    <button className='hover:bg-primary-400 py-3 px-5 rounded-lg text-primary-800'>{'>'}</button>
                </div>
            </div>


        </div>
    )
}

export default Approval