import React, { useState, useEffect } from 'react'

import { status_chip } from '@data/umkm'

import { Link } from 'react-router-dom';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { Typography } from '@mui/material';

import { useAxios } from '@hooks/useAxios';

const Approval = () => {
    const [dataTable, setDataTable] = useState(null)

    const {
        response: responseUmkm,
        loading: loadingUmkm,
        error: errorUmkm,
        fetchData: fetchUmkm
    } = useAxios({
        method: 'GET',
        url: '/umkm/all',
    });

    useEffect(() => {
        fetchUmkm()
    }, [])

    useEffect(() => {
        if (responseUmkm?.data) {
            console.log(responseUmkm?.data)
            setDataTable(responseUmkm?.data)
        }
    }, [responseUmkm])

    return (
        <div className='dashboard-pages p-20 bg-blue-50'>
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

                {
                    loadingUmkm ? (
                        <p>Loading the table</p>
                    ) : (
                        <>
                            <table className='w-full border-spacing-10'>
                                <thead>
                                    <tr >
                                        <th className={`font-semibold text-center`} >ID</th>
                                        <th className={`font-semibold text-center`} >UMKM</th>
                                        <th className={`font-semibold text-center`} >Category</th>
                                        <th className={`font-semibold text-center`} >Status</th>
                                        <th className={`font-semibold text-center`} >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataTable?.map((value, index) => (
                                            <tr key={index}>
                                                <td className='py-5 text-center'>{value.id}</td>
                                                <td className='py-5'>
                                                    <div className="data-wrapper flex justify-start items-center gap-5 ms-40">
                                                        <img src={value.profile_image ? value.profile_image : "/img/bg-umkm.png"} alt="" className='w-20 h-20 object-cover rounded-md' />
                                                        <p>{value.name}</p>
                                                    </div>
                                                </td>
                                                <td className='py-5 text-center'>{value.category_id}</td>
                                                <td className='py-5'>
                                                    <div className={`status-wrapper flex justify-center ${status_chip[value.approval_status]} py-2 rounded-lg text-white`}>
                                                        <p>{value.approval_status}</p>
                                                    </div>
                                                </td>
                                                <td className='py-5'>
                                                    <div className="flex justify-center items-center h-full">
                                                        <Link to={`/dashboard/approval/details/${value.id}`} className='bg-secondary-300 hover:bg-secondary-200 py-2 px-5 rounded-full text-secondary-800'>
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
                        </>
                    )

                }
                {errorUmkm ? (
                    <Typography color="error" variant="body2" align="center">
                        {errorUmkm.error}
                    </Typography>
                ) : ""}
            </div>


        </div>
    )
}

export default Approval