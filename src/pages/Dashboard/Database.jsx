import React, { useState } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

import { Modal, Autocomplete, TextField } from '@mui/material';

import { category } from '@data/category'
import DeleteModals from '@components/DeleteModals';
import CategoryModals from '@components/CategoryModals';
import TypeModals from '@components/TypeModals';

const formatedCategory = category.map((items) => (
    items.type.map((value) => ({
        name: items.name,
        type: value
    }))
)).flat()

const Database = () => {
    const [openDelete, setOpenDelete] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)
    const [openTypes, setOpenTypes] = useState(false)

    return (
        <div className='dashboard-pages p-20 bg-blue-50'>
            <DeleteModals open={openDelete} handleClose={(status) => setOpenDelete(status)} />
            <CategoryModals open={openCategory} handleClose={(status) => setOpenCategory(status)} />
            <TypeModals open={openTypes} handleClose={(status) => setOpenTypes(status)} savedData={(data) => console.log(data)}/>
            <div className="title-table-wrapper w-full flex justify-between items-center">
                <h1 className='text-2xl font-semibold text-primary-main'>Category</h1>
                <button className='bg-secondary-600 hover:bg-secondary-700 py-3 px-5 rounded-lg text-white font-light' onClick={() => setOpenCategory(true)}>+ Add Category</button>
            </div>
            <div className="table-container bg-white p-10 rounded-lg mt-5">
                <table className='w-full border-spacing-10'>
                    <thead>
                        <tr>
                            <th className='pb-5'>ID</th>
                            <th className='pb-5'>Category</th>
                            <th className='pb-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((value, index) => (
                                <tr key={index}>
                                    <td className='text-center py-5'>{index + 1}</td>
                                    <td className='text-center py-5'>{value.name}</td>
                                    <td className='text-center py-5'>
                                        <button className='border border-tersier-yellow text-tersier-yellow hover:bg-tersier-yellow hover:text-white p-2 rounded-md me-3' ><EditIcon /></button>
                                        <button className='border border-tersier-red text-tersier-red hover:bg-tersier-red hover:text-white p-2 rounded-md' onClick={() => setOpenDelete(true)}><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="title-table-wrapper w-full flex justify-between items-center mt-20">
                <h1 className='text-2xl font-semibold text-primary-main'>Types</h1>
                <button className='bg-secondary-600 hover:bg-secondary-700 py-3 px-5 rounded-lg text-white font-light' onClick={() => setOpenTypes(true)}>+ Add Types</button>
            </div>
            <div className="table-container bg-white p-10 rounded-lg mt-5">
                <table className='w-full border-spacing-10'>
                    <thead>
                        <tr>
                            <th className='pb-5'>ID</th>
                            <th className='pb-5'>Type</th>
                            <th className='pb-5'>Category ID</th>
                            <th className='pb-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formatedCategory.map((value, index) => (
                                <tr key={index}>
                                    <td className='text-center py-5'>{index + 1}</td>
                                    <td className='text-center py-5'>{value.type}</td>
                                    <td className='text-center py-5'>{value.name}</td>
                                    <td className='text-center py-5'>
                                        <button className='border border-tersier-yellow text-tersier-yellow hover:bg-tersier-yellow hover:text-white p-2 rounded-md me-3'><EditIcon /></button>
                                        <button className='border border-tersier-red text-tersier-red hover:bg-tersier-red hover:text-white p-2 rounded-md'><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Database