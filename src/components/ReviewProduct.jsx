import React, { useEffect, useState } from 'react'

import { Card, CardContent, useScrollTrigger } from '@mui/material'

import dayjs from 'dayjs'

import { useAxios } from '@hooks/useAxios'
import { StarsRateGenerator } from '@utils/StarsRateGenerator'

dayjs.locale("id")

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
            console.log(responseReview?.data)
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
                    <div className="review-product mt-3 flex flex-col gap-5">
                        {
                            review?.length !== 0 ?
                                (
                                    review?.map((value, index) => (
                                        <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }} key={index}>
                                            <CardContent>
                                                <h3 className='text-lg font-semibold'>{value.user_id}</h3>
                                                <p className='font-light'>{dayjs(value.created_at).format('dddd, YYYY-MM-DD')}</p>
                                                <div className="star-rate my-3">
                                                    <StarsRateGenerator number={value.rating} />
                                                </div>
                                                <p className='text-justify'>{value.comment}</p>
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