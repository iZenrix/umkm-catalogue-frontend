import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';

import { Skeleton } from '@mui/material';

import RegisterUmkmForm from '@components/RegisterUmkmForm';
import { useAxios } from '@hooks/useAxios';

const RegisterUmkm = () => {
    const [userData, setUserData] = useState(null)

    const {
        response: responseProfile,
        loading: loadingProfile,
        error: errorProfile,
        fetchData: fetchProfile
    } = useAxios({
        method: 'GET',
        url: `/user/profile`,
    });

    useEffect(() => {
        fetchProfile()
    }, [])

    useEffect(() => {
        if (responseProfile?.data) {
            console.log(responseProfile?.data)
            setUserData(responseProfile?.data)
        }
    }, [responseProfile?.data])

    return (
        loadingProfile ? (
            <Skeleton height={100} />
        ) : (
            userData?.umkms?.length > 0 ? (
                <div className="having-umkm-message mt-5 bg-neutral-200 py-6 rounded-xl">
                    <p className='text-center font-semibold'>Kamu Sudah Mendaftarkan UMKM, pergi ke <Link to={"/my-umkm"} className='bg-secondary-500 text-white px-4 py-2 rounded-lg'>My UMKM</Link> untuk melihat detail</p>
                </div>
            ) : (
                <RegisterUmkmForm />
            )
        )
    )
}

export default RegisterUmkm