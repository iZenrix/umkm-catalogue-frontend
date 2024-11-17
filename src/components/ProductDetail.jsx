import React, { useEffect, useState } from 'react'

import { CardActionArea } from '@mui/material'

import { useAxios } from '@hooks/useAxios';

const ProductDetail = ({ dataUmkm }) => {
    const [product, setProduct] = useState([])
    const { id } = dataUmkm

    const {
        response: responseProduct,
        loading: loadingProduct,
        error: errorProduct,
        fetchData: fetchProduct
    } = useAxios({
        method: 'GET',
        url: `/product/all/${id}`,
    });


    useEffect(() => {
        fetchProduct()
    }, [])

    useEffect(() => {
        if (responseProduct?.data) {
            setProduct(responseProduct?.data)
            console.log(responseProduct?.data)
        }
    }, [responseProduct])

    return (
        <div className="product-detail mt-3">
            {            
                product.length > 0 ? (
                    product.map((value, index) => (
                        <div className="object-contain rounded-lg" key={index}>
                            <CardActionArea>
                                <div className="product-detail-content flex gap-5 p-3">
                                <img src={value.images ? value.images : "https://placehold.co/150x150"} alt="" className='object-contain rounded-xl' />
                                    <div className="product-detail-info flex flex-col justify-between">
                                        <div className="info-product">
                                            <h1 className='text-xl font-semibold'>{value.name}</h1>
                                            <p>{value.description}</p>
                                        </div>
                                        <p className='font-semibold'>{value.price}</p>
                                    </div>
                                </div>
                            </CardActionArea>
                        </div>
                    ))
                ) : (
                    <p>no product found</p>
                )
            }
        </div>
    )
}

export default ProductDetail