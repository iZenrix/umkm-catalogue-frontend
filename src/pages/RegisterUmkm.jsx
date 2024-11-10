import React, { useEffect, useState } from 'react'

import { Grid2, Autocomplete, TextField, Divider } from '@mui/material'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import AddProductForm from '@components/AddProductForm';

import { category } from '@data/category'

const RegisterUmkm = () => {
    const [selectedImage, setSelectedImage] = useState([])

    // const handleImageChange = (e) => {
    //     const files = Array.from(e.target.files)
    //     const previewImage = files.map(file => (
    //         {
    //             file,
    //             previewURL: URL.createObjectURL(file)
    //         }
    //     ))
    //     setSelectedImage(prevFiles => [...prevFiles, ...previewImage])
    // }

    // const removeFile = (index) => {
    //     setSelectedImage(prevFiles => prevFiles.filter((_, i) => i !== index));
    // };

    // useEffect(() => {
    //     if (selectedImage) {
    //         console.log(selectedImage)
    //     }
    // }, [selectedImage])

    const handleSubmit = () => {

    }
    return (
        <div className="register-umkm p-5 pt-10">
            <div className="submition-form-bg bg-white p-10 rounded-2xl mb-28">
                <form onSubmit={handleSubmit}>
                    <div className="form-submition flex justify-between items-center mb-8">
                        <h1 className='text-2xl font-semibold'>Fill Information</h1>
                        <div className="button-submition-wrapper flex gap-3">
                            <button type='button' className="cancel border border-secondary-500 text-secondary-500 py-2 px-4 rounded-md font-semibold">Cancel</button>
                            <input type="submit" value="Submit" label="Save" className='submit-button bg-secondary-500 py-2 px-4 rounded-md text-white font-semibold' />
                        </div>
                    </div>
                    <Grid2 container spacing={5}>
                        <Grid2 size={12} container>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Profile Picture</h3>
                                <input type="file" className='image-profile hidden' name="image-profile" id="img-profile" onChange={(e) => handleImageChange(e)} multiple />
                                <div className="img-profile-input mb-3 border-2 border-dashed border-primary-600 flex flex-col justify-center items-center rounded-lg w-fit p-6 py-8 hover:cursor-pointer" onClick={() => document.querySelector("#img-profile").click()}>
                                    <PhotoOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                    <div className="upload-image flex gap-3 items-center justify-center mt-5">
                                        <FileUploadOutlinedIcon sx={{ color: "#00E696" }} />
                                        <p>Upload Image</p>
                                    </div>
                                </div>
                                {/* {
                                    selectedImage && (
                                        selectedImage.map((image, index) => (
                                            <div className="image-preview" key={index}>
                                                <img src={image.previewURL} alt="" />
                                                <div onClick={() => removeFile(index)}>hapus</div>
                                            </div>
                                        ))
                                    )

                                } */}
                                <Autocomplete
                                    fullWidth
                                    options={category}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => <TextField {...params} label="Categories" />}
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Title</h3>
                                <TextField
                                    fullWidth
                                    id='title-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Bio</h3>
                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    id='bio-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Address</h3>
                                <TextField
                                    fullWidth
                                    id='address-umkm'
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Contact</h3>
                                <TextField
                                    fullWidth
                                    id='contact-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Email</h3>
                                <TextField
                                    fullWidth
                                    id='email-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Social Media</h3>
                                <TextField
                                    fullWidth
                                    id='social-media-umkm'
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <input type="file" name="image-gallery" id="img-gallery" className='hidden' />
                                <div className="gallery-upload-wrapper flex gap-3 flex-wrap">
                                    <img src="/img/bg-umkm.png" alt="" className='size-20 object-cover rounded-md' />
                                    <img src="/img/bg-umkm.png" alt="" className='size-20 object-cover rounded-md' />
                                    <img src="/img/bg-umkm.png" alt="" className='size-20 object-cover rounded-md' />
                                    <img src="/img/bg-umkm.png" alt="" className='size-20 object-cover rounded-md' />
                                    <div className="add-image-button size-20 rounded-lg border-2 border-dashed border-neutral-600 flex items-center justify-center hover:cursor-pointer" onClick={() => document.querySelector("#img-gallery").click()}><p className='text-7xl text-neutral-600'>+</p></div>
                                </div>
                            </Grid2>
                        </Grid2>
                        
                        <hr className='w-full border-b my-5'/>
                        
                        <Grid2 size={12} container>
                            <AddProductForm />
                        </Grid2>
                    </Grid2>
                </form>
            </div>
        </div>
    )
}

export default RegisterUmkm