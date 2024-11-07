import React from 'react'

import { Card, CardContent } from '@mui/material'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GaleryProducts = () => {

    return (
        <Card elevation={4} sx={{borderRadius : "1rem"}}>
            <CardContent>
                <p className='font-semibold text-primary-600 mb-4'>Galery Product</p>
                <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay={true}
                >
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                    <div>
                        <div className="mx-2">
                            <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        </div>
                    </div>
                </Slider>
            </CardContent>
        </Card>
    )
}

export default GaleryProducts