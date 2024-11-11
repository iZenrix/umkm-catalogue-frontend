import React from 'react'
import { Chip } from '@mui/material'

import VerifiedIcon from '@mui/icons-material/Verified';
import StarsIcon from '@mui/icons-material/Stars';
import RecommendIcon from '@mui/icons-material/Recommend';

const BadgesUmkm = ({ badgesName }) => {
    const badges = {
        recommended: <Chip color='primary' size='small' icon={<VerifiedIcon />} label="Highly Recommended"/>,
        best: <Chip color='warning' size='small' icon={<StarsIcon  />} label="Rising Star"/>,
        favorite: <Chip color='success' size='small' icon={<RecommendIcon />} label="Customer Favorite" />,
    }

    return (badges[badgesName])
}

export default BadgesUmkm