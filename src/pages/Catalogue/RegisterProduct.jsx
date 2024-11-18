import React, { useEffect, useState } from 'react'

import { Grid2, Skeleton } from '@mui/material'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AddProductForm from '@components/AddProductForm';
import { useAuth } from '@contexts/AuthContext';
import { useAxios } from '@hooks/useAxios';

const RegisterProduct = () => {

    const [userProfile, setUserProfile] = useState(null)
    const [umkmData, setUmkmData] = useState(null)
    const { isLogged } = useAuth()
    const navigate = useNavigate()

    const {
        response: responseUserProfile,
        loading: loadingUserProfile,
        error: errorUserProfile,
        fetchData: fetchUserProfile
    } = useAxios({
        method: 'GET',
        url: `/user/profile`,
    });
    
    useEffect(() => {
        if (isLogged) {
            fetchUserProfile()
        } else {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        if (responseUserProfile?.data) {
            setUserProfile(responseUserProfile?.data)
            setUmkmData(responseUserProfile?.data?.umkms[0])
        }
    }, [responseUserProfile])

    return (
        <div className="register-umkm p-5 pt-10">
            <div className="back-button-wrapper mb-10">
                <Link to={"/"} className='bg-secondary-500 px-4 py-2 rounded-lg text-white'>{"< back to catalog"}</Link>
            </div>
            <div className="submition-form-bg bg-white p-10 rounded-2xl mb-28">
                <Grid2 container spacing={5}>
                    <Grid2 size={12} container>
                        {
                            loadingUserProfile ? (
                                <Skeleton height={100} />
                            ) : (
                                umkmData && <AddProductForm umkmId={umkmData?.id} />
                            )
                        }
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}

export default RegisterProduct