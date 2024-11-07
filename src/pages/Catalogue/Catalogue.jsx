import React, { useEffect } from 'react'

import CatalogueCard from '@components/CatalogueCard'
import FilterUmkm from '@components/FilterUmkm'
import { umkm_catalogue } from '@data/catalogue'
import { useAuth } from '@contexts/AuthContext'

import { Grid2 } from '@mui/material'

import { useNavigate } from 'react-router-dom'


const Catalogue = () => {
    const { user, isLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate("/login")
            console.log(isLogged)
        }
    }, [])

    return (
        <div className='p-3 pt-10'>
            <div className="banner bg-primary-800 p-24 rounded-xl mb-8">

            </div>
            <div className="catalogue">
                <Grid2 container spacing={4}>
                    <Grid2 size={3}>
                        <FilterUmkm />
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="catalogue-content">
                            <Grid2 container spacing={2}>
                                {
                                    umkm_catalogue.map((value, index) => (
                                        <CatalogueCard data={value} key={index} />
                                    ))
                                }
                            </Grid2>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}

export default Catalogue