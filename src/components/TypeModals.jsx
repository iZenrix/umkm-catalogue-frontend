import React, { useEffect, useState } from 'react'

import { Modal, Autocomplete, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import { category } from '@data/category';

const formatedOption = category.map((items) => (items.name)).flat()

const TypeModals = ({ open, handleClose, savedData }) => {
    if (!open) return null;

    const [selectedCategory, setSelectedCategory] = useState("")
    const [types, setTypes] = useState("")
    const [dataTypes, setDataTypes] = useState({})

    useEffect(() => {
        setDataTypes({
            types,
            category: selectedCategory
        })
    }, [types, selectedCategory])

    const saveData = () => {
        console.log(dataTypes)
        handleClose(false);
    };

    return (
        <Modal
            open={open}
            onClose={() => handleClose(false)}
        >
            <form onSubmit={saveData}>
                <div className="delete-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                    <button className="absolute top-3 right-3" onClick={() => handleClose(false)}>
                        <CloseIcon />
                    </button>
                    <div className="text-confirmation">
                        <h1 className='text-xl font-semibold text-slate-800 text-center'>Types</h1>
                        <p className='text-base font-normal text-slate-800 text-center'>Masukkan types baru dan kategorinya</p>
                    </div>
                    <TextField id="category-input" label="Input Category" variant="outlined" fullWidth onChange={(e) => setTypes(e.target.value)} />
                    <Autocomplete
                        fullWidth
                        options={formatedOption}
                        getOptionLabel={(option) => option}

                        onChange={(event, newValue) => setSelectedCategory(newValue)}

                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                    <div className="delete-confirmation-buttons flex justify-center items-center gap-8">
                        <button className='bg-tersier-green py-2 px-4 rounded-md text-white' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default TypeModals