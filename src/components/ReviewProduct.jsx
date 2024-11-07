import { Card, CardContent } from '@mui/material'
import React from 'react'

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ReviewProduct = () => {
    return (
        <div className="review-product mt-3">
            <Card elevation={4}>
                <CardContent>
                    <h3 className='text-lg font-semibold'>Nama User</h3>
                    <p className='font-light'>07 November 2024</p>
                    <div className="star-rate my-3">
                        <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                        <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                        <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                        <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                        <StarRateRoundedIcon sx={{ color: "#FFB605" }} />
                    </div>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et velit a diam interdum porttitor.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReviewProduct