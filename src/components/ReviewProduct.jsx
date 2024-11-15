import React, { useEffect, useState } from 'react'

import { Card, CardContent, useScrollTrigger } from '@mui/material'

import useAxios from '@hooks/useAxios'

import { StarsRateGenerator } from '@utils/StarsRateGenerator'

const ReviewProduct = ({ idUmkm }) => {
    const [review, setReview] = useState(null)

    const {
        response: responseReview,
        loading: loadingReview,
        error: errorReview,
        fetchData: fetchReview
    } = useAxios({
        method: 'GET',
        url: `/review/umkm/${idUmkm}`,
    });

    useEffect(() => {
        fetchReview()
    }, [])

    useEffect(() => {
        if (responseReview?.data) {
            console.log("ini review")
            setReview(responseReview?.data)
        }
    }, [responseReview])

    return (
        <>
            {
                loadingReview ? (
                    <div className="review-product mt-3">
                        Loading content...
                    </div>
                ) : (
                    <div className="review-product mt-3">
                        {
                            review?.length !== 0 ?
                                (
                                    review?.map((value, index) => (
                                        <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                                            <CardContent>
                                                <h3 className='text-lg font-semibold'>{value.user_id}</h3>
                                                <p className='font-light'>{value.created_at}</p>
                                                <div className="star-rate my-3">
                                                    <StarsRateGenerator number={value.rating} />
                                                </div>
                                                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et velit a diam interdum porttitor.</p>
                                            </CardContent>
                                        </Card>
                                    ))
                                )
                                :
                                (
                                    <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                                        <CardContent>
                                            <p>no comments yet</p>
                                        </CardContent>
                                    </Card>
                                )
                        }
                    </div>
                )
            }
        </>
    )
}

export default ReviewProduct