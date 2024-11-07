import React from 'react';

import { useParams } from 'react-router-dom';
import { umkm_catalogue as data } from '@data/catalogue';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import { Grid2, Typography } from '@mui/material'
import { Card, CardContent } from '@mui/material'

import UmkmDetailsCard from '@components/UmkmDetailsCard';
import GaleryProducts from '@components/GaleryProducts';
import ProductDetail from '@components/ProductDetail';
import ReviewProduct from '@components/ReviewProduct';

const DetailCatalogue = () => {
    const { id } = useParams()

    return (
        <div className="detail-catalogue p-3 pt-10 pb-96">
            <div className="details-content-wrapper">
                <Grid2 container spacing={3}>
                    <Grid2 size={3}>
                        <UmkmDetailsCard />
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
                            <Grid2 container spacing={3}>
                                <Grid2 size={8}>
                                    <GaleryProducts />
                                    <div className='product-detail mt-5'>
                                        <Card elevation={4} sx={{ borderRadius: "1rem" }}>
                                            <CardContent>
                                                <h1 className='font-semibold text-primary-600'>Product</h1>
                                                <ProductDetail />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid2>
                                <Grid2 size={4}>
                                    <h1 className='font-semibold text-primary-600'>Review Product</h1>
                                    <ReviewProduct />
                                </Grid2>
                            </Grid2>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}

export default DetailCatalogue