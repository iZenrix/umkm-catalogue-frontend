import React, { useEffect } from 'react'

import { Modal, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

import { useAxios } from '@hooks/useAxios';

const DeleteModals = ({ handleClose, updateTable, data, isType = false }) => {
    const {
        response: responseDelete,
        loading: loadingDelete,
        error: errorDelete,
        fetchData: fetchDelete
    } = useAxios({
        method: 'DELETE',
        url: `/category/${data.id}`,
    });

    const {
        response: responseDeleteType,
        loading: loadingDeleteType,
        error: errorDeleteType,
        fetchData: fetchDeleteType
    } = useAxios({
        method: 'DELETE',
        url: `/type/${data.id}`,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isType) {
            fetchDeleteType()
        } else {
            fetchDelete()
        }
    };

    useEffect(() => {
        if (responseDelete?.data) {
            updateTable()
            handleClose(null)
        }
    }, [responseDelete])

    useEffect(() => {
        if (responseDeleteType?.data) {
            updateTable()
            handleClose(null)
        }
    }, [responseDeleteType])

    return (
        <Modal
            open={true}
            onClose={() => handleClose(null)}
        >
            <div className="delete-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                <button className="absolute top-3 right-3" onClick={() => handleClose(null)}>
                    <CloseIcon />
                </button>
                <div className="icon-bg text-tersier-red bg-red-100 p-3 rounded-full w-fit">
                    <DeleteOutlineIcon />
                </div>
                <div className="text-confirmation">
                    <h1 className='text-xl font-semibold text-slate-800 text-center'>Are You Sure ?</h1>
                    <p className='text-base font-normal text-slate-800 text-center'>You want to delete "{data.name}" {isType ? "type" : "category"}</p>
                </div>
                {errorDelete ? (
                    <Typography color="error" variant="body2" align="center">
                        {errorDelete.error}
                    </Typography>
                ) : ""}
                <div className="delete-confirmation-buttons flex justify-center items-center gap-8">
                    {
                        loadingDelete || loadingDeleteType ?
                            <div className="loading-delete bg-tersier-red py-2 px-4 rounded-md text-white w-full">
                                <p>Deleting Data...</p>
                            </div>
                            :
                            <>
                                <button className='bg-primary-600 py-2 px-4 rounded-md text-white' onClick={() => handleClose(null)}>No, Cancel</button>
                                <form onSubmit={handleSubmit}>
                                    <button className='bg-tersier-red py-2 px-4 rounded-md text-white' type='submit'>Yes, Delete</button>
                                </form>
                            </>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModals