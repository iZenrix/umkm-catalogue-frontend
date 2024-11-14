import React, { useEffect, useState } from 'react'

import CatalogueCard from '@components/CatalogueCard'
import FilterUmkm from '@components/FilterUmkm'
import AdsCarousel from '@components/AdsCarousel'
import { umkm_catalogue } from '@data/catalogue'
import { useAuth } from '@contexts/AuthContext'
import { useAxios } from '@hooks/useAxios'

import { Grid2, Typography } from '@mui/material'


const Catalogue = () => {
    const [dataCatalogue, setDataCatalogue] = useState(null)
    const [dataCatalogueBackup, setDataCatalogueBackup] = useState(null)
    const [isNull, setIsNull] = useState(false)

    const {
        response: responseCatalogue,
        loading: loadingCatalogue,
        error: errorCatalogue,
        fetchData: fetchCatalogue
    } = useAxios({
        method: 'GET',
        url: '/umkm/all',
    });

    useEffect(() => {
        fetchCatalogue()
    }, [])

    useEffect(() => {
        if (responseCatalogue?.data) {
            setDataCatalogue(responseCatalogue?.data)
            setDataCatalogueBackup(responseCatalogue?.data)
        }
        console.log(responseCatalogue?.data)
    }, [responseCatalogue])

    const handleFilter = (value) => {
        if (value === "empty") {
            setDataCatalogue(dataCatalogueBackup);
            setIsNull(false)
        } else {
            const filteredData = dataCatalogueBackup.filter(item => item.category_id === value);
            setDataCatalogue(filteredData.length > 0 ? filteredData : dataCatalogueBackup);
            filteredData.length === 0 ? setIsNull(true) : setIsNull(false)
            
        }
    }

    return (
        <div className='p-3 pt-10 pb-48'>
            <div className="banner rounded-2xl mb-8 overflow-hidden">
                <AdsCarousel />
            </div>
            <div className="catalogue">
                {
                    loadingCatalogue ? (
                        <p>loading content...</p>
                    ) : (
                        <Grid2 container spacing={4}>
                            <Grid2 size={3}>
                                <FilterUmkm handleChange={(value) => handleFilter(value)} />
                                {isNull ? (
                                    <Typography color="error" variant="body2" align="center">
                                        No UMKM found
                                    </Typography>
                                ) : ""}
                            </Grid2>
                            <Grid2 size={9}>
                                <div className="catalogue-content">
                                    <Grid2 container spacing={2}>
                                        {
                                            dataCatalogue?.map((value, index) => (
                                                <CatalogueCard data={value} key={index} />
                                            ))
                                        }
                                    </Grid2>
                                </div>
                            </Grid2>
                        </Grid2>
                    )
                }
                {errorCatalogue ? (
                    <Typography color="error" variant="body2" align="center">
                        {errorCatalogue.error}
                    </Typography>
                ) : ""}
            </div>
        </div>
    )
}

export default Catalogue