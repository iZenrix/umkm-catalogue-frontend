import { Card, CardContent } from '@mui/material'
import React from 'react'

import StarsRateGenerator from '@utils/StarsRateGenerator'

const ReviewProduct = () => {
    return (
        <div className="review-product mt-3">
            <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                <CardContent>
                    <h3 className='text-lg font-semibold'>Nama User</h3>
                    <p className='font-light'>07 November 2024</p>
                    <div className="star-rate my-3">
                        <StarsRateGenerator number={3.9} />
                    </div>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et velit a diam interdum porttitor.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReviewProduct