import React from 'react';

import { useParams } from 'react-router-dom';
import { umkm_catalogue as data } from '@data/catalogue';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import { Grid2, Typography, Card, CardMedia, CardContent, CardActionArea, Chip, IconButton, Avatar } from '@mui/material'

const DetailCatalogue = () => {
    const { id } = useParams()

    return (
        <div className="detail-catalogue p-3 pt-10">
            <div className="details-content-wrapper">
                <Grid2 container spacing={3}>
                    <Grid2 size={3}>
                        <div className="info-owner">
                            <Card variant='outlined'>
                                <CardContent>
                                    <div className="owner-pict-wrapper relative flex justify-center mb-20">
                                        <CardMedia
                                            component="img"
                                            image='https://placehold.co/600x250'
                                        />
                                        <div className="avatar-container absolute top-20">
                                            <Avatar sx={{ width: 100, height: 100 }} />
                                        </div>
                                    </div>
                                    <div className="owner-info-wrapper">
                                        <Typography variant='body1'>Nama Owner : Bijak</Typography>
                                        <Typography variant='body1'>Usia : 20</Typography>
                                        <Typography variant='body1' sx={{ marginBottom: 2 }}>Nama Usaha : </Typography>
                                        <div className="list-umkm flex flex-wrap gap-2 gap-y-2">
                                            <Chip variant='outlined' label="UMKM 1" />
                                            <Chip variant='outlined' label="UMKM 2" />
                                            <Chip variant='outlined' label="UMKM Hebat" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="umkm-details">
                            <div className="photo-viewer rounded-xl overflow-hidden mb-10">
                                <ReactPhotoSphereViewer
                                    src={data[id - 1].image_360}
                                    height={"60vh"}
                                    width={"100%"}
                                >
                                </ReactPhotoSphereViewer>
                            </div>
                            <Typography variant='h3' fontWeight="bold">
                                {data[(id - 1)].name}
                            </Typography>
                            <Typography variant='h6'>
                                {data[(id - 1)].description}
                            </Typography>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default DetailCatalogue