import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';

const StarsRateGenerator = ({ number }) => {
    let items = []
    let count = 0

    const isFloat = number % 1 !== 0

    if (number > 5) {
        number = 5
    }

    if (isFloat) {
        while (count < Math.floor(number)) {
            items.push(<StarRateRoundedIcon sx={{ color: "#FFB605" }} key={count} />)
            if (count + 1 === Math.floor(number)) {
                items.push(<StarHalfRoundedIcon sx={{ color: "#FFB605" }} key={count + 1} />)
            }
            count++
        }
    } else {
        while (count < number) {
            items.push(<StarRateRoundedIcon sx={{ color: "#FFB605" }} key={count} />)
            count++
        }
    }


    return (
        <div className="stars-rate-wrapper flex items-center gap-2">
            <div className="stars-rate">
                {items}
            </div>
            <p>{number}</p>
        </div>
    )
}

export default StarsRateGenerator