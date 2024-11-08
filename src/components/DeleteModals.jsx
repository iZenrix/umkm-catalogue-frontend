import React, {useEffect, useState} from 'react'

import { Modal } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

const DeleteModals = ({open, handleClose}) => {
    if (!open) return null;

    return (
        <Modal
            open={open}
            onClose={() => handleClose(false)}
        >
            <div className="delete-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                <button className="absolute top-3 right-3" onClick={() => handleClose(false)}>
                    <CloseIcon />
                </button>
                <div className="icon-bg text-tersier-red bg-red-100 p-3 rounded-full w-fit">
                    <DeleteOutlineIcon />
                </div>
                <div className="text-confirmation">
                    <h1 className='text-xl font-semibold text-slate-800 text-center'>Are You Sure?</h1>
                    <p className='text-base font-normal text-slate-800 text-center'>You want to delete this item</p>
                </div>
                <div className="delete-confirmation-buttons flex justify-center items-center gap-8">
                    <button className='bg-primary-600 py-2 px-4 rounded-md text-white'>No, Cancel</button>
                    <button className='bg-tersier-red py-2 px-4 rounded-md text-white'>Yes, Delete</button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModals