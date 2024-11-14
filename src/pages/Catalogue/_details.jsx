import React, { useState, useEffect } from 'react';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import { Grid2, Card, CardContent } from '@mui/material'

import UmkmDetailsCard from '@components/UmkmDetailsCard';
import GaleryProducts from '@components/GaleryProducts';
import ProductDetail from '@components/ProductDetail';
import ReviewProduct from '@components/ReviewProduct';
import RejectModals from '@components/RejectModals';
import ReviewUmkmForm from '@components/ReviewUmkmForm';
import { useAxios } from '@hooks/useAxios';
import { useAuth } from '@contexts/AuthContext'

const DetailCatalogue = () => {
    const [dataDetailUmkm, setDataDetailUmkm] = useState(null)

    const { id } = useParams()
    const { pathname } = useLocation()
    const isDashboard = pathname.includes("dashboard")
    const navigate = useNavigate()

    const { isLogged } = useAuth()

    const [openReject, setOpenReject] = useState(false)


    const {
        response: responseDetailsUmkm,
        loading: loadingDetailsUmkm,
        error: errorDetailsUmkm,
        fetchData: fetchDetailsUmkm
    } = useAxios({
        method: 'GET',
        url: `/umkm/${id}`,
    });

    useEffect(() => {
        fetchDetailsUmkm()
    }, [])

    useEffect(() => {
        if (responseDetailsUmkm?.data) {
            console.log(responseDetailsUmkm?.data)
            setDataDetailUmkm(responseDetailsUmkm?.data)
        }
    }, [responseDetailsUmkm])

    const {
        response: responseApproval,
        loading: loadingApproval,
        error: errorApproval,
        fetchData: fetchApproval
    } = useAxios({
        method: 'POST',
        url: `/umkm/${id}/validate`,
    });

    const handleApprove = () => {
        fetchApproval({
            status: "APPROVED",
        })
    };

    useEffect(() => {
        if (responseApproval?.data) {
            console.log(responseApproval?.data)
            navigate("/dashboard/approval")
        }
        console.log(errorApproval?.error)
    }, [responseApproval])

    return (
        <div className={`detail-catalogue ${isDashboard ? 'p-20 pt-10 bg-blue-50' : 'p-3 pt-10 pb-96'}`}>

            {
                loadingDetailsUmkm ? "" : (
                    isDashboard && dataDetailUmkm?.approval_status !== "APPROVED" ? (
                        <>
                            <div className="approval-box p-3 mb-5 flex items-center justify-end gap-3">
                                <button className='bg-tersier-red hover:bg-red-900 py-2 px-5 rounded-md text-white' onClick={() => setOpenReject(true)}>
                                    Reject
                                </button>
                                <button className='bg-tersier-green hover:bg-green-800 py-2 px-5 rounded-md text-white' onClick={handleApprove}>
                                    {loadingApproval ? "Approving" : "Approve"}
                                </button>
                            </div>
                            {openReject && <RejectModals handleClose={(status) => setOpenReject(status)} id={id} />}
                        </>
                    ) : "")
            }

            <div className="details-content-wrapper">
                <Grid2 container spacing={3}>
                    <Grid2 size={3}>
                        {
                            dataDetailUmkm ? (
                                <UmkmDetailsCard dataUmkm={dataDetailUmkm} />
                            ) : (
                                <div className="profile-card w-full bg-white rounded-lg p-3">
                                    <p>Loading Content...</p>
                                </div>
                            )
                        }
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="umkm-details">
                            <div className="photo-viewer rounded-xl overflow-hidden mb-10">
                                <ReactPhotoSphereViewer
                                    src={dataDetailUmkm ? dataDetailUmkm.panoramic_image : "/img/foto-360.webp"}
                                    height={"60vh"}
                                    width={"100%"}
                                >
                                </ReactPhotoSphereViewer>
                            </div>
                            <Grid2 container spacing={3}>
                                <Grid2 size={8}>
                                    {
                                        dataDetailUmkm ? (
                                            <GaleryProducts dataUmkm={dataDetailUmkm} />
                                        ) : (
                                            <div className="profile-card w-full bg-white rounded-lg p-3">
                                                <p>Loading Content...</p>
                                            </div>
                                        )
                                    }
                                    <div className='product-detail mt-5'>
                                        <Card sx={{ borderRadius: "1rem", boxShadow: '2px 5px 13px -4px rgba(0,0,0,0.15)' }}>
                                            {
                                                dataDetailUmkm ? (
                                                    <CardContent>
                                                        <h1 className='font-semibold text-primary-600'>Product</h1>
                                                        <ProductDetail dataUmkm={dataDetailUmkm} />
                                                    </CardContent>
                                                ) : (
                                                    <div className="profile-card w-full bg-white rounded-lg p-3">
                                                        <p>Loading Content...</p>
                                                    </div>
                                                )
                                            }
                                        </Card>
                                    </div>
                                </Grid2>
                                <Grid2 size={4}>
                                    {
                                        !isDashboard && isLogged ? <ReviewUmkmForm id={id} /> : ""
                                    }
                                    <ReviewProduct idUmkm={id} />
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