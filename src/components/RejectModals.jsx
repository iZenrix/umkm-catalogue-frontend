import React, { useState } from 'react'

import { Modal, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const RejectModals = ({ open, handleClose }) => {
    if (!open) return null;

    const [message, setMessage] = useState("")

    const saveData = () => {
        console.log(message)
        handleClose(false)
    };

    return (
        <Modal
            open={open}
            onClose={() => handleClose(false)}
        >
            <form onSubmit={saveData}>
                <div className="category-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                    <button className="absolute top-3 right-3" onClick={() => handleClose(false)}>
                        <CloseIcon />
                    </button>
                    <div className="icon-bg text-tersier-red bg-red-100 p-3 rounded-full w-fit">
                        <HighlightOffIcon />
                    </div>
                    <div className="text-confirmation">
                        <h1 className='text-xl font-semibold text-slate-800 text-center'>Anda Akan Menolak UMKM</h1>
                        <p className='text-base font-normal text-slate-800 text-center'>Tulis alasan penolakan</p>
                    </div>
                    <TextField id="category-input" label="Alasan Penolakan" variant="outlined" fullWidth onChange={(e) => setMessage(e.target.value)} />
                    <div className="category-confirmation-buttons flex justify-center items-center gap-8">
                        <button className='bg-tersier-green py-2 px-4 rounded-md text-white' type='submit'>Send</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default RejectModals