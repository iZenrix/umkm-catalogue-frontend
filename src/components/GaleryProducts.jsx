import React from 'react'

import { Card, CardContent } from '@mui/material'

import Slider from 'react-slick'

const GaleryProducts = ({ dataUmkm }) => {
    const { images } = dataUmkm

    return (
        <Card sx={{ borderRadius: "1rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <p className='font-semibold text-primary-600 mb-4'>Galery Product</p>
                {
                    images.length === 0 ? (
                        <p>No image found</p>
                    ) : (
                        <Slider
                            dots={false}
                            infinite={true}
                            speed={500}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={true}
                        >
                            {
                                images.length < 3 ? (
                                    images.map((value, index) => (
                                        <>
                                            <div key={index}>
                                                <div className="mx-2 h-36">
                                                    <img src={value ? value.url : "/img/bg-umkm.png"} alt="" className='object-cover rounded-xl size-full' />
                                                </div>
                                            </div>
                                            <div key={index}>
                                                <div className="mx-2 h-36">
                                                    <img src={value ? value.url : "/img/bg-umkm.png"} alt="" className='object-cover rounded-xl size-full' />
                                                </div>
                                            </div>
                                            <div key={index}>
                                                <div className="mx-2 h-36">
                                                    <img src={value ? value.url : "/img/bg-umkm.png"} alt="" className='object-cover rounded-xl size-full' />
                                                </div>
                                            </div>
                                        </>
                                    ))
                                ) : (
                                    images.map((value, index) => (
                                        <div key={index}>
                                            <div className="mx-2 h-36">
                                                <img src={value ? value.url : "/img/bg-umkm.png"} alt="" className='object-cover rounded-xl size-full' />
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </Slider>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default GaleryProducts