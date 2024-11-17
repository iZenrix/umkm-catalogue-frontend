import React, { useEffect, useState } from 'react'

import { Grid2, Autocomplete, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Link } from 'react-router-dom';

import AddProductForm from '@components/AddProductForm';
import MapInput from '@components/MapInput';
import { useAxios } from '@hooks/useAxios';
import { useAuth } from '@contexts/AuthContext';

const RegisterUmkm = () => {
    const { user } = useAuth()
    
    const [categories, setCategories] = useState(null)
    const [types, setTypes] = useState(null)
    const [urlTypes, setUrlTypes] = useState(`/type/category/1`)

    const {
        response: responseCategories,
        loading: loadingCategories,
        error: errorCategories,
        fetchData: fetchCategories
    } = useAxios({
        method: 'GET',
        url: '/category/all',
    });

    const {
        response: responseTypes,
        loading: loadingTypes,
        error: errorTypes,
        fetchData: fetchTypes
    } = useAxios({
        method: 'GET',
        url: urlTypes,
    });

    const {
        response: responseCreateUmkm,
        loading: loadingCreateUmkm,
        error: errorCreateUmkm,
        fetchData: fetchCreateUmkm
    } = useAxios({
        method: 'POST',
        url: '/umkm',
    }, true);

    useEffect(() => {
        fetchCategories()
        fetchTypes()
    }, [])

    useEffect(() => {
        if (responseCategories?.data) {
            // console.log(responseCategories?.data)
            setCategories(responseCategories?.data)
        }
        if (responseTypes?.data) {
            // console.log(responseTypes?.data)
            setTypes(responseTypes?.data)
        }
    }, [responseCategories, responseTypes])

    const formData = new FormData()

    useEffect(() => {
        if (responseCreateUmkm?.data) {
            console.log(responseCreateUmkm?.data)
            setCategories(responseCreateUmkm?.data)
        }
        if (errorCreateUmkm?.error) {
            console.log(errorCreateUmkm?.error)
        }
    }, [responseCreateUmkm, errorCreateUmkm])

    const [checked, setChecked] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedType, setSelectedType] = useState(null)

    const [title, setTitle] = useState('')
    const [bio, setBio] = useState('')
    const [address, setAddress] = useState('')
    const [location, setLocation] = useState(null);
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

    const [socialMedia, setSocialMedia] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')

    const [profilePicture, setProfilePicture] = useState(null)
    const [galleryPicture, setGalleryPicture] = useState([])
    const [picture360, setPicture360] = useState(null)

    // kode kocak =====================

    useEffect(() => {
        if (selectedCategory?.id) {
            setUrlTypes(`/type/category/${selectedCategory?.id}`);
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (urlTypes) {
            fetchTypes()
        }
    }, [urlTypes]);

    const handleProfilePict = (e) => {
        const copyArray = e.target.files[0]
        const makeLink = URL.createObjectURL(copyArray)
        setProfilePicture({
            files: copyArray,
            url: makeLink
        })
    };

    const handle360Pict = (e) => {
        const copyArray = e.target.files[0]
        const makeLink = URL.createObjectURL(copyArray)
        setPicture360({
            files: copyArray,
            url: makeLink
        })
    };

    const handleGalleryPict = (e) => {
        const copyArray = e.target.files[0]
        const makeLink = URL.createObjectURL(copyArray)
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

    const handleLocationSelect = (coords) => {
        setLocation({
            "name": address,
            "latitude": coords.lat,
            "longitude": coords.lng
        });
    };

    useEffect(() => {
        setSocialMedia([
            {
                "platform": "instagram",
                "url": instagram
            },
            {
                "platform": "facebook",
                "url": facebook
            },
        ])
    }, [facebook, instagram])

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.append("categoryId", selectedCategory.id)
        formData.append("name", title)
        formData.append("description", bio)
        formData.append("contact", contact)
        formData.append("location", JSON.stringify(location))
        formData.append("socialMedias", JSON.stringify(socialMedia))
        galleryPicture.forEach((item) => {
            formData.append("images", item.files)
        })
        formData.append("panoramicImage", picture360.files)
        formData.append("profileImage", profilePicture.files)
        formData.append("typeIds", JSON.stringify([selectedType.id]))
        formData.append("userId", user.id)

        fetchCreateUmkm(formData)
    }

    const handleCancel = () => {
        setSelectedCategory(null)
        setSelectedType('')
        setTitle('')
        setBio('')
        setAddress('')
        setLocation(null);
        setContact('')
        setEmail('')
        setSocialMedia('')
        setFacebook('')
        setInstagram('')
        setProductItem([])
        setProfilePicture(null)
        setGalleryPicture([])
        setPicture360(null)
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
                            <button type='button' className="cancel border border-secondary-500 text-secondary-500 py-2 px-4 rounded-md font-semibold" onClick={() => handleCancel()}>Cancel</button>
                            <input type="submit" value={loadingCreateUmkm ? "Processing" : "Submit"} label="Save" className='submit-button bg-secondary-500 py-2 px-4 rounded-md text-white font-semibold hover:cursor-pointer' />
                        </div>
                    </div>
                    <Grid2 container spacing={5}>
                        <Grid2 size={12} container>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Profile Picture</h3>
                                <input type="file" accept="image/png, image/jpeg, image/webp" className='image-profile hidden' id="img-profile" onChange={(e) => handleProfilePict(e)} />
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
                                {errorCategories ? (
                                    <Typography color="error" variant="body2" align="center">
                                        {errorCategories.error}
                                    </Typography>
                                ) : ""}
                                {errorTypes ? (
                                    <Typography color="error" variant="body2" align="center">
                                        {errorTypes.error}
                                    </Typography>
                                ) : ""}
                                {
                                    loadingCategories ? "" : (
                                        <>
                                            <Autocomplete
                                                fullWidth
                                                options={categories}
                                                getOptionLabel={(option) => option.name}
                                                value={selectedCategory}
                                                onChange={(e, value) => setSelectedCategory(value)}
                                                renderInput={(params) => <TextField {...params} label="Categories" />}
                                            />
                                            {
                                                selectedCategory && (
                                                    <Autocomplete
                                                        fullWidth
                                                        options={types}
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={(e, value) => setSelectedType(value)}
                                                        value={selectedType}
                                                        renderInput={(params) => <TextField {...params} label="Type" />}
                                                        sx={{ marginTop: "1rem" }}
                                                    />
                                                )
                                            }
                                        </>
                                    )
                                }
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Title</h3>
                                <TextField
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id='title-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Bio</h3>
                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    id='bio-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Address</h3>
                                <TextField
                                    fullWidth
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    id='address-umkm'
                                />
                            </Grid2>
                            <Grid2 size={3}>
                                <h3 className='text-lg font-semibold mb-3'>Contact</h3>
                                <TextField
                                    fullWidth
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    id='contact-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Email</h3>
                                <TextField
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id='email-umkm'
                                />
                                <h3 className='text-lg font-semibold my-3'>Social Media</h3>
                                <div className="input-wrapper flex items-center gap-4">
                                    <InstagramIcon sx={{ fontSize: "2rem", color: "#5b5b5b" }} />
                                    <TextField
                                        fullWidth
                                        value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)}
                                        placeholder='Masukan link instagram'
                                        id='social-media-umkm-instagram'
                                    />
                                </div>
                                <div className="input-wrapper flex items-center gap-4 mt-5">
                                    <FacebookIcon sx={{ fontSize: "2rem", color: "#5b5b5b" }} />
                                    <TextField
                                        fullWidth
                                        value={facebook}
                                        onChange={(e) => setFacebook(e.target.value)}
                                        id='social-media-umkm-facebook'
                                        placeholder='Masukan link facebook'
                                    />
                                </div>
                            </Grid2>
                            <Grid2 size={3}>
                                <input type="file" accept="image/png, image/jpeg, image/webp" id="img-gallery" className='hidden' onChange={(e) => handleGalleryPict(e)} disabled={galleryPicture.length === 3} />
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
                        <Grid2 size={9}>
                            <h3 className='text-lg font-semibold my-3'>Maps Location</h3>
                            <div className="map-wrapper">
                                <MapInput onLocationSelect={handleLocationSelect} />
                            </div>
                        </Grid2>
                        <hr className='w-full border-b my-5' />
                        <Grid2 size={12} container>
                            <Grid2 size={9}>
                                <div className="content-wrapper h-full flex flex-col">
                                    <input type="file" accept="image/png, image/jpeg, image/webp" id="image-360" className='hidden' onChange={(e) => handle360Pict(e)} disabled={checked} />
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
                    </Grid2>
                </form>
            </div>
        </div>
    )
}

export default RegisterUmkm