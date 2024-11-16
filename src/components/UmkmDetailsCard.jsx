import React from 'react'

import { Card, CardMedia, CardContent, Chip, } from '@mui/material'

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const UmkmDetailsCard = ({ dataUmkm }) => {
    const { name, description, profile_image, social_medias, umkm_types, location } = dataUmkm


    return (
        <div className="info-umkm">
            <Card sx={{ borderRadius: "0.7rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
                <CardMedia
                    component="img"
                    image={profile_image ? profile_image : '/img/bg-umkm.png'}
                />
                <CardContent>
                    <div className="stats-umkm flex gap-5">
                        <div className="stats-item flex items-center gap-2">
                            <p className='text-sm'>4.5</p>
                            <StarRateRoundedIcon sx={{ color: "#FFB605", fontSize: "1.5rem" }} />
                        </div>
                        <div className="stats-item flex items-center gap-2">
                            <p className='text-sm'>100k</p>
                            <VisibilityIcon sx={{ color: "#0081C9", fontSize: "1.5rem" }} />
                        </div>
                        <div className="stats-item flex items-center gap-2">
                            <p className='text-sm'>32k</p>
                            <FavoriteIcon sx={{ color: "#F04438", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                    <div className="info-umkm mt-5">
                        <h1 className='text-xl font-medium mb-2'>{name}</h1>
                        <p className='text-sm'>{description}</p>
                    </div>
                    <div className="badges-umkm mt-5 flex gap-3">
                        {
                            umkm_types.map((value, index) => (
                                <Chip label={value?.name} variant='outlined' icon={<BookmarkIcon sx={{ color: "#51FFC2" }} />} key={index}/>
                            ))
                        }
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>CONTACT</p>
                        {social_medias.map((value, index) => (
                            <p className='text-sm' key={index}>{value.url}</p>
                        ))}
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>LOCATION</p>
                        <p>{location}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UmkmDetailsCard