import React from 'react'

import { Card, CardMedia, CardContent, Chip, } from '@mui/material'

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const UmkmDetailsCard = () => {
    return (
        <div className="info-umkm">
            <Card elevation={5} sx={{ borderRadius: "0.7rem" }}>
                <CardMedia
                    component="img"
                    image='/img/bg-umkm.png'
                />
                <CardContent>
                    <div className="stats-umkm flex gap-5">
                        <div className="stats-item flex gap-2">
                            <p>4.5</p>
                            <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                        </div>
                        <div className="stats-item flex gap-1">
                            <p>100k</p>
                            <VisibilityIcon sx={{ color: "#0081C9" }} />
                        </div>
                        <div className="stats-item flex gap-1">
                            <p>32k</p>
                            <FavoriteIcon sx={{ color: "#F04438" }} />
                        </div>
                    </div>
                    <div className="info-umkm mt-5">
                        <h1 className='text-2xl font-medium mb-2'>Bakso Kepala Sapi</h1>
                        <p>Bakso ini sangat enak seperti anda menjadi iron man</p>
                    </div>
                    <div className="badges-umkm mt-5 flex gap-3">
                        <Chip label="Inovatif" variant='outlined' icon={<BookmarkIcon sx={{ color: "#51FFC2" }} />} />
                        <Chip label="Aktif" variant='outlined' icon={<BookmarkIcon sx={{ color: "#51FFC2" }} />} />
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>CONTACT</p>
                        <p>+62 753221207</p>
                        <p>@kepalasapi77</p>
                        <p>kepalasapi77@gmail.com</p>
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>LOCATION</p>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6348667760003!2d112.77377377400167!3d-7.28231999272494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa39b647f08f%3A0x862bc80b617de7a9!2sBakso%20Kepala%20Sapi!5e0!3m2!1sid!2sid!4v1730959078517!5m2!1sid!2sid" 
                        width="100%" 
                        height="250"  
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        className='my-5'
                        ></iframe>
                        <p>Jl. Tapal Gajah No 77 Surabaya, Jawa Timur, 73752</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UmkmDetailsCard