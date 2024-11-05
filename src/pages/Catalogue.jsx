import React from 'react'

import CatalogueCard from '@components/CatalogueCard'
import { umkm_catalogue } from '@data/catalogue'

import { Grid2 } from '@mui/material'


const Catalogue = () => {
    return (
        <div className='h-screen p-3 pt-10'>
            <div className="banner bg-light-background p-20 rounded-xl mb-8">
                banner
            </div>
            <div className="catalogue">
                <Grid2 container spacing={4}>
                    <Grid2 size={3}>
                        <div className="category-filter bg-light-secondary rounded-xl p-10">
                            ini filter
                        </div>
                    </Grid2>
                    <Grid2 size={9}>
                        <div className="catalogue-content">
                            <Grid2 container spacing={2}>
                                {
                                    umkm_catalogue.map((value, index) => (
                                        <CatalogueCard data={value} key={index}/>
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