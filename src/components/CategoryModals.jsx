import React, { useEffect, useState } from 'react'

import { Modal, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import { useAxios } from '@hooks/useAxios';

const CategoryModals = ({ handleClose, updateTable, data }) => {
    const {
        response: responseCreate,
        loading: loadingCreate,
        error: errorCreate,
        fetchData: fetchCreate
    } = useAxios({
        method: 'POST',
        url: `/category`,
    });

    const {
        response: responseEdit,
        loading: loadingEdit,
        error: errorEdit,
        fetchData: fetchEdit
    } = useAxios({
        method: 'PUT',
        url: `/category/${data?.id}`,
    });

    const [category, setCategory] = useState("")

    const saveData = (e) => {
        e.preventDefault();
        if (data) {
            fetchEdit({
                name: category
            })
        } else {
            fetchCreate({
                name: category
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
            open={true}
            onClose={() => handleClose()}
        >
            <form onSubmit={(e) => saveData(e)}>
                <div className="category-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                    <button className="absolute top-3 right-3" onClick={() => handleClose()}>
                        <CloseIcon />
                    </button>
                    <div className="text-confirmation">
                        <h1 className='text-xl font-semibold text-slate-800 text-center'>{data ? "Edit Category" : "Create New Category"}</h1>
                        <p className='text-base font-normal text-slate-800 text-center'>Masukkan nama category baru</p>
                    </div>
                    <TextField id="category-input" label="Input Category" variant="outlined" fullWidth onChange={(e) => setCategory(e.target.value)} defaultValue={data && data.name}/>
                    {errorCreate || errorEdit ? (
                        <Typography color="error" variant="body2" align="center">
                            {data ? errorCreate.error : errorEdit.error}
                        </Typography>
                    ) : ""}
                    <div className="category-confirmation-buttons flex justify-center items-center gap-8">
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

export default CategoryModals