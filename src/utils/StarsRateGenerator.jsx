import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';

const StarsRateGenerator = ({ number }) => {
    let items = []

    const isFloat = number % 1 !== 0

    if (number > 5) {
        number = 5
    }

    const loopTheStars = (iterate, isFloat = false) => {
        let count = 0
        let newConstraint = ( isFloat? 4 : 5) - iterate

        while (count < iterate) {
            items.push(<StarRateRoundedIcon sx={{ color: "#FFB605" }} key={count} />)
            if (isFloat) {
                if (count + 1 === iterate) {
                    items.push(<StarHalfRoundedIcon sx={{ color: "#FFB605" }} key={count + 1} />)
                }
            }
            count++
        }

        count = 0

        while (count < newConstraint) {
            items.push(<StarRateRoundedIcon sx={{ color: "#5B5B5B" }} key={count} />)
            count++
        }
    }

    if (isFloat) {
        loopTheStars(Math.floor(number), true)
    } else {
        loopTheStars(number)
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