import React from 'react'
import Slider from 'react-slick'

const AdsCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings}>
            <div className='h-80'>
                <img src="img/banner-umkm.webp" alt="" className='w-full'/>
            </div>
            <div className='h-80'>
                <img src="img/banner-umkm.webp" alt="" className='w-full'/>
            </div>
            <div className='h-80'>
                <img src="img/banner-umkm.webp" alt="" className='w-full'/>
            </div>
        </Slider>
    )
}

export default AdsCarousel