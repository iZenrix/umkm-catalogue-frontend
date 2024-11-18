import React from 'react'

import { Modal } from '@mui/material'

import { useNavigate } from 'react-router-dom';

const RegisterConfirmationModals = () => {

    const navigate = useNavigate()

    return (
        <Modal
            open={true}
            onClose={true}
        >
            <div className="delete-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                <div className="text-confirmation">
                    <h1 className='text-xl font-semibold text-slate-800 text-center'>Register UMKM ?</h1>
                    <p className='text-base font-normal text-slate-800 text-center'>Do you want to register your UMKM?</p>
                </div>
                <div className="delete-confirmation-buttons flex justify-center items-center gap-8">
                    <button className='bg-tersier-red py-2 px-4 rounded-md text-white' onClick={() => navigate("/")}>No, Just Visitor</button>
                    <button className='bg-secondary-500 py-2 px-4 rounded-md text-white' onClick={() => navigate("/register-umkm")}>Yes, Register</button>
                </div>
            </div>
        </Modal>
    )
}

export default RegisterConfirmationModals