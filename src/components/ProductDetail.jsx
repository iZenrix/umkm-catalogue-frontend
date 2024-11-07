import React from 'react'

import { CardActionArea } from '@mui/material'

const ProductDetail = () => {
    return (
        <div className="product-detail mt-3">
            <div className="object-contain rounded-lg">
                <CardActionArea>
                    <div className="product-detail-content flex gap-5 p-3">
                        <img src="/img/bg-umkm.png" alt="" className='object-contain rounded-xl' />
                        <div className="product-detail-info flex flex-col justify-between">
                            <div className="info-product">
                                <h1 className='text-xl font-semibold'>Judul Product</h1>
                                <p>Deskripsi Produk</p>
                            </div>
                            <p className='font-semibold'>Rp. 25.000,-</p>
                        </div>
                    </div>
                </CardActionArea>
            </div>
        </div>
    )
}

export default ProductDetail