import React, { useState } from 'react'

import { Modal, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const CategoryModals = ({ open, handleClose }) => {
    if (!open) return null;

    const [category, setCategory] = useState("")

    const saveData = () => {
        console.log(category)
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
                    <div className="text-confirmation">
                        <h1 className='text-xl font-semibold text-slate-800 text-center'>Category</h1>
                        <p className='text-base font-normal text-slate-800 text-center'>Masukkan nama category baru</p>
                    </div>
                    <TextField id="category-input" label="Input Category" variant="outlined" fullWidth onChange={(e) => setCategory(e.target.value)}/>
                    <div className="category-confirmation-buttons flex justify-center items-center gap-8">
                        <button className='bg-tersier-green py-2 px-4 rounded-md text-white' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default CategoryModals