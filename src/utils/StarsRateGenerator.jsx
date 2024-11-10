import React, { useState } from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';

export const StarsRateGenerator = ({ number }) => {
    let items = []

    const isFloat = number % 1 !== 0

    if (number > 5) {
        number = 5
    }

    const loopTheStars = (iterate, isFloat = false) => {
        let count = 0
        let newConstraint = (isFloat ? 4 : 5) - iterate

        while (count < iterate) {
            items.push(<StarRateRoundedIcon sx={{ color: "#FFB605" }} key={`activeStar-${count}`} />)
            if (isFloat) {
                if (count + 1 === iterate) {
                    items.push(<StarHalfRoundedIcon sx={{ color: "#FFB605" }} key={`halfStar-${count}`} />)
                }
            }
            count++
        }

        count = 0

        while (count < newConstraint) {
            items.push(<StarRateRoundedIcon sx={{ color: "#5B5B5B" }} key={`deadStar-${count}`} />)
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

export const StarInput = () => {
    const [rating, setRating] = useState(null)
    const [startStars, setStartStars] = useState(["#5B5B5B","#5B5B5B","#5B5B5B","#5B5B5B","#5B5B5B"])

    const handleRate = (index) => {
        const newColor = [...startStars]
        for (let n = 0; n < 5; n++) {
            if (n < index) {
                newColor[n] = "#FFB605";
            }else{
                newColor[n] = "#5B5B5B";
            }
        }
        setStartStars(newColor)
        setRating(index)
    }

    return (
        <>
            <div className="star-input-wrapper mb-3 flex">
                {
                    startStars.map((value, index) => (
                        <div className="stars-button" onClick={() => handleRate(index + 1)}>
                            <StarRateRoundedIcon sx={{ color: value }} key={index}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}