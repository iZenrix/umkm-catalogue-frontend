import React, { useState, useEffect } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material';

import DeleteModals from '@components/DeleteModals';
import CategoryModals from '@components/CategoryModals';

import { useAxios } from '@hooks/useAxios';

const Categories = () => {
    const [dataTable, setDataTable] = useState(null)
    const [selectedDeleteId, setSelectedDeleteId] = useState(false)
    const [selectedEditId, setSelectedEditId] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)

    const {
        response: responseCategory,
        loading: loadingCategory,
        error: errorCategory,
        fetchData: fetchCategory
    } = useAxios({
        method: 'GET',
        url: '/category/all',
    });

    useEffect(() => {
        fetchCategory()
    }, [])

    useEffect(() => {
        if (responseCategory?.data) {
            console.log(responseCategory?.data)
            setDataTable(responseCategory?.data)
        }
    }, [responseCategory])

    const updateTable = () => {
        fetchCategory()
    }

    return (
        <div className='dashboard-pages p-20 bg-blue-50'>
            {
                selectedDeleteId && (
                    <DeleteModals
                        handleClose={() => setSelectedDeleteId(null)}
                        updateTable={() => updateTable()}
                        data={dataTable.find(item => item.id === selectedDeleteId)}
                    />
                )
            }
            {
                openCategory || selectedEditId ? (
                    <CategoryModals
                        handleClose={() => {
                            setOpenCategory(false)
                            setSelectedEditId(null)
                        }}
                        updateTable={() => updateTable()}
                        data={dataTable.find(item => item.id === selectedEditId)}
                    />
                ) : ""
            }
            <div className="title-table-wrapper w-full flex justify-between items-center">
                <h1 className='text-2xl font-semibold text-primary-main'>Category</h1>
                <button className='bg-secondary-600 hover:bg-secondary-700 py-3 px-5 rounded-lg text-white font-light' onClick={() => setOpenCategory(true)}>+ Add Category</button>
            </div>
            <div className="table-container bg-white p-10 rounded-lg mt-5">
                {
                    loadingCategory ?
                        <p>Loading the table</p>
                        :
                        (<table className='w-full border-spacing-10'>
                            <thead>
                                <tr>
                                    <th className='pb-5'>ID</th>
                                    <th className='pb-5'>Category</th>
                                    <th className='pb-5'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataTable?.map((value, index) => (
                                        <tr key={index}>
                                            <td className='text-center py-5'>{value.id}</td>
                                            <td className='text-center py-5'>{value.name}</td>
                                            <td className='text-center py-5'>
                                                <button className='border border-tersier-yellow text-tersier-yellow hover:bg-tersier-yellow hover:text-white p-2 rounded-md me-3' onClick={() => setSelectedEditId(value.id)}><EditIcon /></button>
                                                <button className='border border-tersier-red text-tersier-red hover:bg-tersier-red hover:text-white p-2 rounded-md' onClick={() => setSelectedDeleteId(value.id)}><DeleteOutlineIcon /></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>)
                }
                {errorCategory ? (
                    <Typography color="error" variant="body2" align="center">
                        {errorCategory.error}
                    </Typography>
                ) : ""}
            </div>
        </div>
    )
}

export default Categories