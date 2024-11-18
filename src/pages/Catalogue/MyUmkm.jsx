import React, { useState, useEffect } from 'react'

import { Skeleton } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { useAxios } from '@hooks/useAxios';
import { useAuth } from '@contexts/AuthContext';
import MyUmkmContent from '@components/MyUmkmContent';

const MyUmkm = () => {

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
    }else{
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
    loadingUserProfile ? (
      <Skeleton height={100} />
    ) : (
      umkmData && <MyUmkmContent umkmId={umkmData?.id}/>
    )
  )
}

export default MyUmkm