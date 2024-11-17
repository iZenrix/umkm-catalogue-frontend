import React from 'react'

import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

import { Card, CardMedia, CardContent, Chip, } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import BadgesUmkm from '@components/BadgesUmkm';

const UmkmDetailsCard = ({ dataUmkm }) => {
    const { name, description, profile_image, social_medias, umkm_types, category_id, location, view_count } = dataUmkm


    return (
        <div className="info-umkm">
            <Card sx={{ borderRadius: "0.7rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
                <CardMedia
                    component="img"
                    image={profile_image ? profile_image : 'https://placehold.co/600x400'}
                />
                <CardContent>
                    <div className="stats-umkm flex gap-5">
                        <div className="stats-item flex items-center gap-2">
                            <p className='text-sm'>4.5</p>
                            <StarRateRoundedIcon sx={{ color: "#FFB605", fontSize: "1.5rem" }} />
                        </div>
                        <div className="stats-item flex items-center gap-2">
                            <p className='text-sm'>{view_count}</p>
                            <VisibilityIcon sx={{ color: "#0081C9", fontSize: "1.5rem" }} />
                        </div>
                    </div>
                    <div className="info-umkm mt-5">
                        <h1 className='text-xl font-medium mb-2'>{name}</h1>
                        <p className='text-sm'>{description}</p>
                    </div>
                    <div className="badges-umkm mt-5 flex gap-3">
                        <BadgesUmkm label={category_id} />
                        <BadgesUmkm typeLabel={umkm_types[0]} isType={true} />
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>CONTACT</p>
                        <div className="social-media-content flex gap-2 mt-2">
                            {social_medias.map((value, index) => (
                                <a href={value.url} target='_blank' rel="noopener noreferrer">
                                    {
                                        value.platform === "instagram" ? (<InstagramIcon sx={{ fontSize: "2rem" }} />) : (<FacebookIcon sx={{ fontSize: "2rem" }} />)
                                    }
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-umkm mt-5">
                        <p className='font-semibold text-primary-600'>LOCATION</p>
                        {
                            location[0].latitude && (
                                <MapContainer center={[location[0].latitude, location[0].longitude]} zoom={13} style={{ height: '13rem', width: '100%', zIndex: 2 }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker
                                        position={[location[0].latitude, location[0].longitude]}
                                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                                    >
                                        <Popup>
                                            {`your location is in latitude : ${location[0].latitude} and longitude : ${location[0].longitude}`}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            )
                        }
                        <p className='mt-5'>{location[0].name}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UmkmDetailsCard