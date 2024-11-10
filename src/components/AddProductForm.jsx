import React, { useState } from 'react'

import { Grid2, TextField } from '@mui/material'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const AddProductForm = () => {
    const [items, setItems] = useState([{ name: '', description: '' }]); // Mulai dengan array kosong

    // Fungsi untuk menambah objek kosong
    const addItem = () => {
        setItems([...items, { name: '', description: '' }]);
    };

    const removeItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    // Fungsi untuk menangani perubahan input berdasarkan indeks
    const handleInputChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    return (
        <>
            {
                items.map((item, index) => (
                    <>
                        <Grid2 size={3}>
                            <div className="content-wrapper h-full flex flex-col">
                                <input type="file" name="image-product" id="img-product" className='hidden' />
                                <h3 className='text-lg font-semibold mb-3'>Product Picture</h3>
                                <div className="img-product-input border-2 border-dashed border-primary-600 rounded-lg h-full flex flex-col justify-center items-center hover:cursor-pointer" onClick={() => document.querySelector("#img-profile").click()}>
                                    <PhotoOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                    <div className="upload-image flex gap-3 items-center justify-center mt-5">
                                        <FileUploadOutlinedIcon sx={{ color: "#00E696" }} />
                                        <p>Upload Image</p>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <h3 className='text-lg font-semibold mb-3'>Product</h3>
                            <TextField
                                fullWidth
                                id='product-umkm'
                            />
                            <h3 className='text-lg font-semibold my-3'>Price</h3>
                            <TextField
                                fullWidth
                                id='product-price'
                            />
                            <h3 className='text-lg font-semibold my-3'>Description</h3>
                            <TextField
                                fullWidth
                                multiline
                                minRows={3}
                                id='product-description'
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <button type='button' className='bg-secondary-200 text-secondary-500 hover:bg-secondary-300 p-2 rounded-md me-3'><CheckOutlinedIcon /></button>
                            <button type='button' className='bg-red-200 text-tersier-red p-2 hover:bg-red-300 rounded-md' onClick={() => removeItem(index)}><DeleteOutlineIcon /></button>
                        </Grid2>
                    </>
                ))
            }
            <Grid2 size={12}>
                <button type='button' className='size-full bg-secondary-200 rounded-xl py-2'><p className='text-5xl text-secondary-500' onClick={() => addItem()}>+</p></button>
            </Grid2>
        </>
    )
}

export default AddProductForm