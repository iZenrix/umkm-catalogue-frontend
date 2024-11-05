import React from 'react'

import { Link } from 'react-router-dom'

import { Grid2, Typography, Card, CardMedia, CardContent, CardActionArea, Chip, IconButton } from '@mui/material'
import { TagFaces } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Share } from '@mui/icons-material'

const CatalogueCard = ({ data }) => {
    return (
        <Grid2 size={3}>
            <div className="card">
                <Card variant='outlined'>
                    <Link to={`details/${data.id}`}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image='https://placehold.co/600x400'
                            />
                            <CardContent>
                                <div className="badges mb-5 flex flex-row gap-2">
                                    <Chip variant="outlined" size="small" icon={<TagFaces />} label="badges1" />
                                    <Chip variant="outlined" size="small" icon={<TagFaces />} label="badges2" />
                                </div>
                                <Typography variant='h5' fontWeight="bold">
                                    {data.name}
                                </Typography>
                                <Typography variant='body2' sx={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}>
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    <div className="card-interaction flex flex-row justify-end mx-3 mt-1 mb-3">
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </div>
                </Card>
            </div>
        </Grid2 >
    )
}

export default CatalogueCard