import React, { useState, useEffect } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material';

import DeleteModals from '@components/DeleteModals';
import TypeModals from '@components/TypeModals';

import { useAxios } from '@hooks/useAxios';

const Types = () => {
    const [dataTypes, setDataTypes] = useState(null)
    const [dataCategory, setDataCategory] = useState(null)

    const [selectedDeleteId, setSelectedDeleteId] = useState(false)
    const [selectedEditId, setSelectedEditId] = useState(false)
    const [openType, setOpenType] = useState(false)
    const [alert, setAlert] = useState(null);

    const {
        response: responseTypes,
        loading: loadingTypes,
        error: errorTypes,
        fetchData: fetchTypes
    } = useAxios({
        method: 'GET',
        url: '/type/all',
    });

    const {
        response: responseCategories,
        loading: loadingCategories,
        error: errorCategories,
        fetchData: fetchCategories
    } = useAxios({
        method: 'GET',
        url: '/category/all',
    });

    useEffect(() => {
        fetchTypes()
        fetchCategories()
    }, [])

    useEffect(() => {
        if (responseTypes?.data) {
            console.log(responseTypes?.data)
            setDataTypes(responseTypes?.data)
        }
        if (responseCategories?.data) {
            console.log(responseCategories?.data)
            setDataCategory(responseCategories?.data)
        }
    }, [responseTypes, responseCategories])

    const updateTable = () => {
        fetchTypes()
        fetchCategories()
    }

    return (
        <div className='dashboard-pages p-20 pb-32 bg-blue-50 h-full overflow-y-scroll'>
            {alert && <AlertComponent status={alert.status} message={alert.message} handleClearAlert={(data) => setAlert(data)}/>}
            {
                selectedDeleteId && (
                    <DeleteModals
                        handleClose={() => setSelectedDeleteId(null)}
                        updateTable={() => {
                            setAlert({ status: 'success', message: 'Data was successfully deleted' });
                            updateTable()
                        }}
                        data={dataTypes.find(item => item.id === selectedDeleteId)}
                        isType={true}
                    />
                )
            }
            {
                openType || selectedEditId ? (
                    <TypeModals
                        handleClose={() => {
                            setOpenType(false)
                            setSelectedEditId(null)
                        }}
                        updateTable={() => {
                            setAlert({ status: 'success', message: 'Data was successfully added and updated' });
                            updateTable()
                        }}
                        data={dataTypes?.find(item => item.id === selectedEditId)}
                        categoryItem={dataCategory ? dataCategory : ""}
                    />
                ) : ""
            }
            <div className="title-table-wrapper w-full flex justify-between items-center">
                <h1 className='text-2xl font-semibold text-primary-main'>Types</h1>
                <button className='bg-secondary-600 hover:bg-secondary-700 py-3 px-5 rounded-lg text-white font-light' onClick={() => setOpenType(true)}>+ Add Types</button>
            </div>
            <div className="table-container bg-white p-10 rounded-lg mt-5">
                {
                    loadingTypes && loadingCategories ?
                        <p>Loading the table</p>
                        :
                        (
                            <table className='w-full border-spacing-10'>
                                <thead>
                                    <tr>
                                        <th className='pb-5'>ID</th>
                                        <th className='pb-5'>Type</th>
                                        <th className='pb-5'>Category</th>
                                        <th className='pb-5'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataTypes?.map((value, index) => (
                                            <tr key={index}>
                                                <td className='text-center py-5'>{value.id}</td>
                                                <td className='text-center py-5'>{value.name}</td>
                                                <td className='text-center py-5'>{dataCategory?.find(item => item.id === value.category_id).name}</td>
                                                <td className='text-center py-5'>
                                                    <button className='border border-tersier-yellow text-tersier-yellow hover:bg-tersier-yellow hover:text-white p-2 rounded-md me-3' onClick={() => setSelectedEditId(value.id)}><EditIcon /></button>
                                                    <button className='border border-tersier-red text-tersier-red hover:bg-tersier-red hover:text-white p-2 rounded-md' onClick={() => setSelectedDeleteId(value.id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                }
                {errorTypes ? (
                    <Typography color="error" variant="body2" align="center">
                        {errorTypes.error}
                    </Typography>
                ) : ""}
            </div>
        </div>
    )
}

export default Types