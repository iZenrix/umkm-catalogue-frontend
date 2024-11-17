import React, { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid2, Button, Skeleton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { useAxios } from '@hooks/useAxios'

const FilterUmkm = ({ handleChange }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [category, setCategory] = useState(null)

    const {
        response: responseCategory,
        loading: loadingCategory,
        error: errorCategory,
        fetchData: fetchCategory
    } = useAxios({
        method: 'GET',
        url: '/category/all',
    });

    useEffect(() => {
        fetchCategory()
    }, [])

    useEffect(() => {
        if (responseCategory?.data) {
            setCategory(responseCategory?.data)
        }
    }, [responseCategory])

    const sendDataFilter = () => {
        handleChange(selectedOption ? selectedOption.id : "empty")
    }


    return (
        <div className="category-filter p-3 bg-white rounded-lg">
            {
                loadingCategory ? (
                    <Skeleton height={80} />
                ) : (
                    <Grid2 container spacing={2}>
                        <Grid2 size={9}>
                            <Autocomplete
                                options={category}
                                getOptionLabel={(option) => option.name}

                                onChange={(event, newValue) => setSelectedOption(newValue)}
                                renderInput={(params) => <TextField {...params} label="Category Filter" />}
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <Button sx={{ height: '100%', maxHeight: '4rem' }} variant='outlined' onClick={() => sendDataFilter()}>
                                <FilterAltIcon />
                            </Button>
                        </Grid2>
                    </Grid2>
                )
            }
        </div>
    )
}

export default FilterUmkm