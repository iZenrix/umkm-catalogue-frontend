import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Skeleton } from '@mui/material';

import EditUmkmForm from '@components/EditUmkmForm'
import { useAxios } from '@hooks/useAxios';
import { useAuth } from '@contexts/AuthContext';

const EditUmkm = () => {

  const { id } = useParams()
  const { isLogged } = useAuth()
  const navigate = useNavigate()

  const [umkmData, setUmkmData] = useState(null)

  const {
    response: responseUmkm,
    loading: loadingUmkm,
    error: errorUmkm,
    fetchData: fetchUmkm
  } = useAxios({
    method: 'GET',
    url: `/umkm/${id}`,
  });

  useEffect(() => {
    if (isLogged) {
      fetchUmkm()
    }else{
      navigate("/")
    }
  }, [])

  useEffect(() => {
    if (responseUmkm?.data) {
      console.log(responseUmkm?.data)
      setUmkmData(responseUmkm?.data)
    }
  }, [responseUmkm?.data])

  return (
    loadingUmkm ? (
      <Skeleton height={100} />
    ) : (
      umkmData && <EditUmkmForm dataUmkm={umkmData} />
    )
  )
}

export default EditUmkm