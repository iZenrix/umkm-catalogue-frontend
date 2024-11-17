import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import BadgesUmkm from '@components/BadgesUmkm'
import AlertComponent from '@components/AlertComponent'

import { Grid2, Typography, Card, CardMedia, CardContent, CardActionArea, Chip, IconButton, Popper, Popover } from '@mui/material'
import { TagFaces } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Share } from '@mui/icons-material'

const CatalogueCard = ({ data }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [copied, setCopied] = useState(false);

    const nowLocation = window.location.href;

    const handleCopyLink = async (e, linkToCopy) => {
        try {
            await navigator.clipboard.writeText(linkToCopy);
            setCopied(true);
            setAnchorEl(e.target);

            setTimeout(() => {
                setCopied(false)
                setAnchorEl(null);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <Grid2 size={3}>
            <div className="card">
                <Card variant='outlined' sx={{ borderRadius: "0.7rem" }}>
                    <Link to={`details/${data.id}`}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={data.profile_image? data.profile_image : "https://placehold.co/600x400"}
                                sx={{maxHeight : "150px"}}
                            />
                            <CardContent>
                                <div className="badges mb-5 flex flex-row gap-2">
                                    <BadgesUmkm label={data.category_id} />
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
                        {/* <IconButton aria-label="add to favorites">
                            <Favorite sx={{ color: "#F04438" }} />
                        </IconButton> */}
                        <IconButton aria-describedby={`share-${data.id}`} aria-label={`share-${data.id}`} color='primary' onClick={(e) => handleCopyLink(e, `${nowLocation}details/${data.id}`)} disabled={copied ? true : false}>
                            <Share />
                        </IconButton>
                        <Popover
                            id={`share-${data.id}`}
                            open={copied}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                              }}
                              transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                              }}
                        >
                            <AlertComponent status={"info"} message={"link berhasil di copy"} isPopup={true}/>
                        </Popover>
                    </div>
                </Card>
            </div>
        </Grid2 >
    )
}

export default CatalogueCard