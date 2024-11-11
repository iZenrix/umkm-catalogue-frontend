import React, { useEffect, useState } from 'react'

import { Grid2, Autocomplete, TextField, FormControlLabel, Checkbox } from '@mui/material'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from 'react-router-dom';

import AddProductForm from '@components/AddProductForm';
import { category } from '@data/category'

const RegisterUmkm = () => {
    const [umkmData, setUmkmData] = useState(null)

    const [checked, setChecked] = useState(false)

    const [categories, setCategories] = useState('')
    const [title, setTitle] = useState('')
    const [bio, setBio] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [socialMedia, setSocialMedia] = useState('')

    const [productItem, setProductItem] = useState([])

    const [profilePicture, setProfilePicture] = useState(null)
    const [galleryPicture, setGalleryPicture] = useState([])
    const [picture360, setPicture360] = useState(null)

    const getProductData = (data) => {
        setProductItem(prevData => [...prevData, data])
    }

    const handleProfilePict = (e) => {
        const copyArray = Array.from(e.target.files)
        const makeLink = URL.createObjectURL(copyArray[0])
        setProfilePicture({
            files: copyArray,
            url: makeLink
        })
    };

    const handle360Pict = (e) => {
        const copyArray = Array.from(e.target.files)
        const makeLink = URL.createObjectURL(copyArray[0])
        setPicture360({
            files: copyArray,
            url: makeLink
        })
    };

    const handleGalleryPict = (e) => {
        const copyArray = Array.from(e.target.files)
        const makeLink = URL.createObjectURL(copyArray[0])
        const newItem = {
            files: copyArray,
            url: makeLink
        }
        setGalleryPicture(prevItem => [
            ...prevItem,
            newItem
        ])
    };

    const handleDeleteGaleryPictItem = (index) => {
        setGalleryPicture(galleryPicture.filter((_, i) => i !== index))
    }

    const handleHaveNo360 = (e) => {
        setPicture360(null)
        setChecked(e.target.checked)
    };

    useEffect(() => {
        if (umkmData) {
            console.log(umkmData)
        }
    }, [umkmData])


    const handleSubmit = (e) => {
        e.preventDefault()
        setUmkmData({
            categories,
            title,
            bio,
            address,
            contact,
            email,
            socialMedia,
            profilePicture,
            galleryPicture,
            picture360,
            productItem
        })
    }

    return (
        <div className="register-umkm p-5 pt-10">
            <div className="back-button-wrapper mb-10">
                <Link to={"/"} className='bg-secondary-500 px-4 py-2 rounded-lg text-white'>{"< back to catalog"}</Link>
            </div>
            <div className="submition-form-bg bg-white p-10 rounded-2xl mb-28">
                <form onSubmit={(e) => handleSubmit(e)}>
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
                                <input type="file" className='image-profile hidden' id="img-profile" onChange={(e) => handleProfilePict(e)} />
                                {
                                    profilePicture ? (
                                        <div className="img-profile-input mb-3 border-2 border-dashed border-primary-600 flex flex-col justify-center items-center rounded-lg w-full hover:cursor-pointer" onClick={() => document.querySelector("#img-profile").click()}>
                                            <img src={profilePicture.url} alt="" className='object-cover w-full' />
                                        </div>
                                    ) : (
                                        <div className="img-profile-input mb-3 border-2 border-dashed border-primary-600 flex flex-col justify-center items-center rounded-lg w-fit p-6 py-8 hover:cursor-pointer" onClick={() => document.querySelector("#img-profile").click()}>
                                            <PhotoOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                            <div className="upload-image flex gap-3 items-center justify-center mt-5">
                                                <FileUploadOutlinedIcon sx={{ color: "#00E696" }} />
                                                <p>Upload Image</p>
                                            </div>
                                        </div>
                                    )
                                }
                                <Autocomplete
                                    fullWidth
                                    options={category}
                                    getOptionLabel={(option) => option.name}

                                    onChange={(e) => setCategories(e.target.value)}
                                    renderInput={(params) => <TextField {...params} label="Categories" />}
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Title</h3>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setTitle(e.target.value)}
                                    id='title-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Bio</h3>
                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    onChange={(e) => setBio(e.target.value)}
                                    id='bio-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Address</h3>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setAddress(e.target.value)}
                                    id='address-umkm'
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Contact</h3>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setContact(e.target.value)}
                                    id='contact-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Email</h3>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setEmail(e.target.value)}
                                    id='email-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Social Media</h3>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setSocialMedia(e.target.value)}
                                    id='social-media-umkm'
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <input type="file" id="img-gallery" className='hidden' onChange={(e) => handleGalleryPict(e)} disabled={galleryPicture.length === 3} />
                                <div className="gallery-upload-wrapper flex gap-3 flex-wrap">
                                    {
                                        galleryPicture && (
                                            galleryPicture.map((value, index) => (
                                                <div
                                                    className="image-gallery-content-wrapper size-20 rounded-md border border-neutral-600"
                                                    style={{
                                                        backgroundImage: `url(${value.url})`,
                                                        backgroundSize: "cover"
                                                    }}
                                                >
                                                    <div className="icon-wrapper w-full flex justify-end hover:cursor-pointer">
                                                        <div className="icon-bg size-fit rounded-full bg-white text-tersier-red" onClick={() => handleDeleteGaleryPictItem(index)}>
                                                            <CancelOutlinedIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                    }
                                    <div className={`add-image-button size-20 rounded-lg border-2 border-dashed border-neutral-600 flex items-center justify-center ${galleryPicture.length === 3 ? '' : 'hover:cursor-pointer'}`} onClick={() => document.querySelector("#img-gallery").click()}>
                                        {
                                            galleryPicture.length === 3 ? (
                                                <p className='text-sm text-center text-neutral-600'>Max Upload Photo : 3</p>
                                            ) : (
                                                <p className='text-7xl text-neutral-600'>+</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </Grid2>
                        </Grid2>

                        <hr className='w-full border-b my-5' />

                        <Grid2 size={12} container>
                            <Grid2 size={9}>
                                <div className="content-wrapper h-full flex flex-col">
                                    <input type="file" id="image-360" className='hidden' onChange={(e) => handle360Pict(e)} disabled={checked} />
                                    <h3 className='text-lg font-semibold mb-3'>360 Picture</h3>
                                    {
                                        picture360 ? (
                                            <div className="img-product-input border-2 border-dashed border-primary-600 rounded-lg h-full flex flex-col justify-center items-center hover:cursor-pointer" onClick={() => document.querySelector("#image-360").click()}>
                                                <img src={picture360.url} alt="" className='object-cover w-full' />
                                            </div>
                                        ) : (
                                            <div className={`img-product-input ${checked && "bg-neutral-300"} border-2 border-dashed border-primary-600 rounded-lg h-full flex flex-col justify-center items-center hover:cursor-pointer py-24 `} onClick={() => document.querySelector("#image-360").click()}>
                                                {
                                                    checked ? (
                                                        <ImageNotSupportedOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                                    )
                                                        : (
                                                            <>
                                                                <PhotoOutlinedIcon sx={{ color: "#7A7C7B", width: "5rem", height: "5rem" }} />
                                                                <div className="upload-image flex gap-3 items-center justify-center mt-5">
                                                                    <FileUploadOutlinedIcon sx={{ color: "#00E696" }} />
                                                                    <p>Upload Image</p>
                                                                </div>
                                                            </>
                                                        )
                                                }
                                            </div>
                                        )
                                    }
                                    <FormControlLabel control={<Checkbox checked={checked} onClick={(e) => handleHaveNo360(e)} />} label="I don't have a 360-degrees photo" />
                                </div>
                            </Grid2>
                        </Grid2>

                        <hr className='w-full border-b my-5' />

                        <Grid2 size={12} container>
                            <AddProductForm productData={(data) => getProductData(data)} />
                        </Grid2>
                    </Grid2>
                </form>
            </div>
        </div>
    )
}

export default RegisterUmkm