import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid2, Button, Chip } from '@mui/material';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { category } from '@data/category';

const formatedOption = category.map((items) => (
    items.type.map((value) => ({
        name: items.name,
        type: value
    }))
)).flat()

const FilterUmkm = () => {
    const [selectedOption, setSelectedOption] = useState([])

    return (
        <div className="category-filter p-3 bg-white rounded-lg">
            <Grid2 container spacing={2}>
                <Grid2 size={9}>
                    <Autocomplete
                        freeSolo
                        multiple

                        options={formatedOption}
                        getOptionLabel={(option) => option.type}
                        groupBy={(option) => option.name}

                        value={selectedOption}
                        onChange={(event, newValue) => setSelectedOption(newValue)}

                        renderInput={(params) => <TextField {...params} label="Category Filter" />}
                    />
                </Grid2>
                <Grid2 size={3}>
                    <Button sx={{ height: '100%', maxHeight: '4rem' }} variant='outlined'>
                        <FilterAltIcon />
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default FilterUmkm