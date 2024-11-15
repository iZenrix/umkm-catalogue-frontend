import React, { useEffect, useState } from 'react'

import { Grid2, TextField } from '@mui/material'
import { Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const SendDataModal = ({ handleClose, dataIndex, sendData }) => {
    return (
        <Modal
            open={true}
            onClose={() => handleClose(null)}
        >
            <div className="delete-modal bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col items-center gap-5">
                <button className="absolute top-3 right-3" onClick={() => handleClose(null)}>
                    <CloseIcon />
                </button>
                <div className="text-confirmation">
                    <h1 className='text-xl font-semibold text-slate-800 text-center'>Are You Sure To Save?</h1>
                    <p className='text-base font-normal text-slate-800 text-center'>The data that you save can't be deleted or edit again</p>
                </div>
                <div className="delete-confirmation-buttons">
                    <button className='bg-secondary-500 py-2 px-4 rounded-md text-white' onClick={() => sendData(dataIndex)}>Yes, Send Data</button>
                </div>
            </div>
        </Modal>
    )
}

const AddProductForm = ({ productData }) => {
    const [items, setItems] = useState([{ name: '', price: '', description: '', picture: null, is_saved: false }]); // Mulai dengan array kosong
    const [selectedIndex, setSelectedIndex] = useState(null)

    // Fungsi untuk menambah objek kosong
    const addItem = () => {
        setItems([...items, { name: '', price: '', description: '', picture: null }]);
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

    const handleProductPict = (e, index) => {
        const copyArray = Array.from(e.target.files)
        const makeLink = URL.createObjectURL(copyArray[0])
        handleInputChange(index, "picture", {
            files: copyArray,
            url: makeLink
        })
    }

    const sendDataToParent = (index) => {
        handleInputChange(index, "is_saved", true)
        productData(items[index])
        setSelectedIndex(null)
    }

    // useEffect(() => {
    //     console.log(items)
    // }, [items, handleProductPict])

    return (
        <>
            {
                items.map((item, index) => (
                    <Grid2 size={12} container spacing={5} key={index}>
                        <Grid2 size={3}>
                            <div className="content-wrapper h-full flex flex-col">
                                <input type="file" id={`img-product-${index}`} className='hidden' onChange={(e) => handleProductPict(e, index)} disabled={item.is_saved} />
                                <h3 className='text-lg font-semibold mb-3'>Product Picture</h3>
                                {
                                    item.picture ? (
                                        <div className="img-product-input border-2 border-dashed border-primary-600 rounded-lg h-full flex flex-col justify-center items-center hover:cursor-pointer" onClick={() => document.querySelector(`#img-product-${index}`).click()}>
                                            <img src={item.picture.url} alt="" className='object-cover w-full' />
                                        </div>
                                    ) : (
                                        <div className="img-product-input border-2 border-dashed border-primary-600 rounded-lg h-full flex flex-col justify-center items-center hover:cursor-pointer" onClick={() => document.querySelector(`#img-product-${index}`).click()}>
                                            <PhotoOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                            <div className="upload-image flex gap-3 items-center justify-center mt-5">
                                                <FileUploadOutlinedIcon sx={{ color: "#00E696" }} />
                                                <p>Upload Image</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <h3 className='text-lg font-semibold mb-3'>Product</h3>
                            <TextField
                                fullWidth
                                disabled={item.is_saved}
                                value={item.name}
                                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                                id='product-umkm'
                            />
                            <h3 className='text-lg font-semibold my-3'>Price</h3>
                            <TextField
                                fullWidth
                                disabled={item.is_saved}
                                value={item.price}
                                onChange={(e) => handleInputChange(index, "price", e.target.value)}
                                id='product-price'
                            />
                            <h3 className='text-lg font-semibold my-3'>Description</h3>
                            <TextField
                                fullWidth
                                multiline
                                minRows={3}
                                disabled={item.is_saved}
                                value={item.description}
                                onChange={(e) => handleInputChange(index, "description", e.target.value)}
                                id='product-description'
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <button type='button' className='bg-secondary-200 text-secondary-500 hover:bg-secondary-300 p-2 rounded-md me-3' onClick={() => setSelectedIndex(index)} disabled={item.is_saved}><CheckOutlinedIcon /></button>
                            <button type='button' className='bg-red-200 text-tersier-red p-2 hover:bg-red-300 rounded-md' onClick={() => removeItem(index)} disabled={item.is_saved}><DeleteOutlineIcon /></button>
                        </Grid2>
                        {
                            selectedIndex !== null ? <SendDataModal handleClose={() => setSelectedIndex(null)} dataIndex={index} sendData={(i) => sendDataToParent(i)} /> : ""
                        }
                    </Grid2>
                ))
            }
            <Grid2 size={12}>
                <button type='button' className='size-full bg-secondary-200 rounded-xl py-2' onClick={() => addItem()}>
                    <p className='text-5xl text-secondary-500'>+</p>
                </button>
            </Grid2>
        </>
    )
}

export default AddProductForm