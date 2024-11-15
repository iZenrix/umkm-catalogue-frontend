import React, { useEffect, useState } from 'react'

import { Modal, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import useAxios from '@hooks/useAxios';

const RejectModals = ({ id, handleClose }) => {
    const [message, setMessage] = useState("")

    const {
        response: responseRejection,
        loading: loadingRejection,
        error: errorRejection,
        fetchData: fetchRejection
    } = useAxios({
        method: 'POST',
        url: `/umkm/${id}/validate`,
    });

    const saveData = (e) => {
        e.preventDefault()
        fetchRejection({
            status: "REJECTED",
            rejectionNote: message
        })
    };

    useEffect(() => {
        if (responseRejection?.data) {
            handleClose(false)
        }
    }, [responseRejection])

    return (
        <Modal
            open={true}
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
                    {errorRejection ? (
                        <Typography color="error" variant="body2" align="center">
                            {errorRejection.error}
                        </Typography>
                    ) : ""}
                    <div className="category-confirmation-buttons flex justify-center items-center gap-8">
                        <button className='bg-tersier-green py-2 px-4 rounded-md text-white' type='submit'>{loadingRejection ? "Rejecting" : "Send"}</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default RejectModals