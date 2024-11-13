import React, { useEffect, useState } from 'react'

import { Card, CardContent, TextField } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { useAuth } from '@contexts/AuthContext';

import { StarInput } from '@utils/StarsRateGenerator';

const ReviewUmkmForm = () => {
    const [review, setReview] = useState(null)
    const [comments, setComments] = useState('')
    const [rating, setRating] = useState(null)
    const [resetRating, setResetRating] = useState(false)

    const { user } = useAuth()

    const handleReview = (e) => {
        e.preventDefault()
        setReview({
            comments,
            rating
        })
        resetReview()
    };

    const resetReview = () => {
        setComments('')
        setResetRating(true)
    }

    useEffect(() => {
        console.log(review)
    }, [review])

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <>
            <h1 className='font-semibold text-primary-600 mb-2'>Review Product</h1>
            <form onSubmit={handleReview}>
                <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                    <CardContent>
                        <StarInput getRating={(i) => setRating(i)} resetValue={resetRating} setResetValue={setResetRating} />
                        <TextField
                            fullWidth
                            multiline
                            minRows={3}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            label={"Type your comment here..."}
                        />
                        <div className="review-insert-buttons mt-3 flex justify-between items-center w-full">
                            {
                                comments || rating ?
                                    <button type='button' className='bg-tersier-red px-4 py-2 rounded-lg text-white text-center font-semibold text-sm' onClick={resetReview}>cancel</button>
                                    :
                                    <div></div>
                            }
                            <button type='submit' className='hover:bg-slate-200 rounded-full p-2'><SendOutlinedIcon /></button>

                        </div>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default ReviewUmkmForm