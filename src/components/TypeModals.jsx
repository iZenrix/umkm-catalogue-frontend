import React, { useEffect, useState } from 'react'

import { Modal, Autocomplete, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import { useAxios } from "@hooks/useAxios"

const TypeModals = ({ handleClose, updateTable, data, categoryItem }) => {
    const {
        response: responseCreate,
        loading: loadingCreate,
        error: errorCreate,
        fetchData: fetchCreate
    } = useAxios({
        method: 'POST',
        url: `/type`,
    });

    const {
        response: responseEdit,
        loading: loadingEdit,
        error: errorEdit,
        fetchData: fetchEdit
    } = useAxios({
        method: 'PUT',
        url: `/type/${data?.id}`,
    });

    const [type, setType] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const saveData = (e) => {
        e.preventDefault();
        if (data) {
            fetchEdit({
                name: type,
                category_id: selectedCategory.id
            })
        } else {
            fetchCreate({
                name: type,
                category_id: selectedCategory.id
            })
        }
    };

    useEffect(() => {
        if (responseCreate?.data) {
            updateTable()
            handleClose()
        }
    }, [responseCreate])

    useEffect(() => {
        if (responseEdit?.data) {
            updateTable()
            handleClose()
        }
    }, [responseEdit])

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
                    <TextField id="category-input" label="Input Type" variant="outlined" fullWidth onChange={(e) => setType(e.target.value)} defaultValue={data && data.name} />
                    <Autocomplete
                        fullWidth
                        options={categoryItem}
                        getOptionLabel={(option) => option.name}
                        defaultValue={data && categoryItem.find(item => item.id === data.category_id)}

                        onChange={(event, newValue) => setSelectedCategory(newValue)}

                        renderInput={(params) => <TextField {...params} label="Select Category" />}
                    />
                    {errorCreate || errorEdit ? (
                        <Typography color="error" variant="body2" align="center">
                            {data ? errorCreate.error : errorEdit.error}
                        </Typography>
                    ) : ""}
                    <div className="delete-confirmation-buttons flex justify-center items-center gap-8">
                        {
                            loadingCreate || loadingEdit ?
                                <div className='bg-tersier-green py-2 px-4 rounded-md text-white' >{data ? "Updating data..." : "Adding data..."}</div>
                                :
                                <button className='bg-tersier-green py-2 px-4 rounded-md text-white' type='submit'>Submit</button>
                        }
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default TypeModals