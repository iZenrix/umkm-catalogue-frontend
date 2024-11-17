import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { Skeleton } from '@mui/material';

import EditUmkmForm from '@components/EditUmkmForm'
import { useAxios } from '@hooks/useAxios';

const EditUmkm = () => {

  const { id } = useParams()

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
    fetchUmkm()
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