import React, { useState } from 'react';

import { useParams, useLocation } from 'react-router-dom';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import { umkm_catalogue as data } from '@data/catalogue';

import { Grid2, Card, CardContent, TextField } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import UmkmDetailsCard from '@components/UmkmDetailsCard';
import GaleryProducts from '@components/GaleryProducts';
import ProductDetail from '@components/ProductDetail';
import ReviewProduct from '@components/ReviewProduct';
import RejectModals from '@components/RejectModals';
import { StarInput } from '@utils/StarsRateGenerator';


const DetailCatalogue = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const isDashboard = pathname.includes("dashboard")
    const [openReject, setOpenReject] = useState(false)

    const handleReview = () => {

    };

    return (
        <div className={`detail-catalogue ${isDashboard ? 'p-20 pt-10 bg-blue-50' : 'p-3 pt-10 pb-96'}`}>

            {
                isDashboard && (
                    <>
                        <div className="approval-box p-3 mb-5 flex items-center justify-end gap-3">
                            <button className='bg-tersier-red hover:bg-red-900 py-2 px-5 rounded-md text-white' onClick={() => setOpenReject(true)}>
                                Reject
                            </button>
                            <button className='bg-tersier-green hover:bg-green-800 py-2 px-5 rounded-md text-white'>
                                Approve
                            </button>
                        </div>
                        <RejectModals open={openReject} handleClose={(status) => setOpenReject(status)} />
                    </>
                )
            }

            <div className="details-content-wrapper">
                <Grid2 container spacing={3}>
                    <Grid2 size={3}>
                        <UmkmDetailsCard />
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="umkm-details">
                            <div className="photo-viewer rounded-xl overflow-hidden mb-10">
                                <ReactPhotoSphereViewer
                                    src={data[id - 1].image_360}
                                    height={"60vh"}
                                    width={"100%"}
                                >
                                </ReactPhotoSphereViewer>
                            </div>
                            <Grid2 container spacing={3}>
                                <Grid2 size={8}>
                                    <GaleryProducts />
                                    <div className='product-detail mt-5'>
                                        <Card sx={{ borderRadius: "1rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
                                            <CardContent>
                                                <h1 className='font-semibold text-primary-600'>Product</h1>
                                                <ProductDetail />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid2>
                                <Grid2 size={4}>
                                    <h1 className='font-semibold text-primary-600 mb-2'>Review Product</h1>
                                    <form onSubmit={handleReview}></form>
                                    <Card sx={{ boxShadow: '2px 5px 13px 0px rgba(0,0,0,0.15)', borderRadius: "1rem" }}>
                                        <CardContent>
                                            <StarInput />
                                            <TextField
                                                fullWidth
                                                multiline
                                                minRows={3}
                                                label={"Type your comment here..."}
                                            />
                                            <div className="review-insert-buttons mt-3 flex justify-between items-center w-full">
                                                {
                                                    false ?
                                                        <button type='button' className='bg-tersier-red px-4 py-2 rounded-lg text-white text-center font-semibold text-sm'>cancel</button>
                                                        :
                                                        <div></div>
                                                }
                                                <button type='submit' className='hover:bg-slate-200 rounded-full p-2'><SendOutlinedIcon /></button>

                                            </div>
                                        </CardContent>
                                    </Card>
                                    <ReviewProduct />
                                </Grid2>
                            </Grid2>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}

export default DetailCatalogue