import React, { useState, useEffect } from 'react';

import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import { Grid2, Card, CardContent } from '@mui/material'

import UmkmDetailsCard from '@components/UmkmDetailsCard';
import GaleryProducts from '@components/GaleryProducts';
import ProductDetail from '@components/ProductDetail';
import ReviewProduct from '@components/ReviewProduct';
import { useAxios } from '@hooks/useAxios';
import {useAuth} from '@contexts/AuthContext'

const MyUmkmContent = ({umkmId}) => {
    const [dataDetailUmkm, setDataDetailUmkm] = useState(null)

    const {user} = useAuth()

    const {
        response: responseDetailsUmkm,
        loading: loadingDetailsUmkm,
        error: errorDetailsUmkm,
        fetchData: fetchDetailsUmkm
    } = useAxios({
        method: 'GET',
        url: `/umkm/${umkmId}`,
    });

    useEffect(() => {
        fetchDetailsUmkm()
        console.log(user)
    }, [])

    useEffect(() => {
        if (responseDetailsUmkm?.data) {
            console.log(responseDetailsUmkm?.data)
            setDataDetailUmkm(responseDetailsUmkm?.data)
        }
    }, [responseDetailsUmkm])

    return (
        <div className={`detail-catalogue p-3 pt-10 pb-96`}>

            <div className="details-content-wrapper">
                <Grid2 container spacing={3}>
                    <Grid2 size={3}>
                        {
                            dataDetailUmkm ? (
                                <UmkmDetailsCard dataUmkm={dataDetailUmkm} />
                            ) : (
                                <div className="profile-card w-full bg-white rounded-lg p-3">
                                    <p>Loading Content...</p>
                                </div>
                            )
                        }
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="umkm-details">
                            <div className="photo-viewer rounded-xl overflow-hidden mb-10">
                                <ReactPhotoSphereViewer
                                    src={dataDetailUmkm ? dataDetailUmkm.panoramic_image : "/img/foto-360.webp"}
                                    height={"60vh"}
                                    width={"100%"}
                                >
                                </ReactPhotoSphereViewer>
                            </div>
                            <Grid2 container spacing={3}>
                                <Grid2 size={8}>
                                    {
                                        dataDetailUmkm ? (
                                            <GaleryProducts dataUmkm={dataDetailUmkm} />
                                        ) : (
                                            <div className="profile-card w-full bg-white rounded-lg p-3">
                                                <p>Loading Content...</p>
                                            </div>
                                        )
                                    }
                                    <div className='product-detail mt-5'>
                                        <Card sx={{ borderRadius: "1rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
                                            {
                                                dataDetailUmkm ? (
                                                    <CardContent>
                                                        <h1 className='font-semibold text-primary-600'>Product</h1>
                                                        <ProductDetail dataUmkm={dataDetailUmkm} />
                                                    </CardContent>
                                                ) : (
                                                    <div className="profile-card w-full bg-white rounded-lg p-3">
                                                        <p>Loading Content...</p>
                                                    </div>
                                                )
                                            }
                                        </Card>
                                    </div>
                                </Grid2>
                                <Grid2 size={4}>                                    
                                    <ReviewProduct idUmkm={umkmId} />
                                </Grid2>
                            </Grid2>
                        </div>
                    </Grid2>
                </Grid2>
            </div>


        </div>
    )
}

export default MyUmkmContent