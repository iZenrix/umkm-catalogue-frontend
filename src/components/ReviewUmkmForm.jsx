import React, { useEffect, useState } from 'react'

import { Card, CardContent, TextField, Typography } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { useAuth } from '@contexts/AuthContext';
import { useAxios } from '@hooks/useAxios';

import { StarInput } from '@utils/StarsRateGenerator';

const ReviewUmkmForm = ({ id }) => {
    const [comments, setComments] = useState('')
    const [rating, setRating] = useState(null)
    const [resetRating, setResetRating] = useState(false)

    const [errorData, setErrorData] = useState(false)

    const { user } = useAuth()

    const {
        response: responseReview,
        loading: loadingReview,
        error: errorReview,
        fetchData: fetchReview
    } = useAxios({
        method: 'POST',
        url: '/review',
    });

    const handleReview = (e) => {
        e.preventDefault()
        fetchReview({
            umkm_id: parseInt(id),
            user_id: user.id,
            rating: rating,
            comment: comments,
        })
    };

    const resetReview = () => {
        setComments('')
        setResetRating(true)
    }

    useEffect(() => {
        if (responseReview?.data) {
            resetReview()
            window.location.reload()
        }
    }, [responseReview])

    useEffect(() => {
        if (errorReview?.error) {
            setErrorData(true)
        }
    }, [errorReview])

    return (
        <>
            <h1 className='font-semibold text-primary-600 mb-2'>Review Product</h1>
            <form onSubmit={handleReview}>
                <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                    <CardContent>
                        <StarInput
                            getRating={(i) => setRating(i)}
                            resetValue={resetRating}
                            setResetValue={() => {
                                setResetRating()
                                setErrorData(false)
                            }} />
                        <TextField
                            fullWidth
                            multiline
                            minRows={3}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            label={"Type your comment here..."}
                        />
                        {errorData ? (
                            <Typography color="error" variant="body2" align="center">
                                {errorReview?.error}
                            </Typography>
                        ) : ""}
                        <div className="review-insert-buttons mt-3 flex justify-between items-center w-full">
                            {
                                comments || rating ?
                                    <button type='button' className='bg-tersier-red px-4 py-2 rounded-lg text-white text-center font-semibold text-sm' onClick={resetReview}>cancel</button>
                                    :
                                    <div></div>
                            }
                            <button type='submit' className='hover:bg-slate-200 rounded-full p-2'>{loadingReview && "mengirim..."}<SendOutlinedIcon /></button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default ReviewUmkmForm