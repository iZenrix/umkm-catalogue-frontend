import React, { useEffect, useState } from 'react'

import { useAxios } from "@hooks/useAxios"

import ClassIcon from '@mui/icons-material/Class';
import CategoryIcon from '@mui/icons-material/Category';

const BadgesUmkm = ({ label, typeLabel, isType = false }) => {

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
    }, [responseCategory?.data])

    return (
        <div className="chip flex gap-2 items-center py-1 px-3  border border-secondary-600 rounded-full">
            {
                isType ? (
                    <>
                        <ClassIcon sx={{ fontSize: "1.2rem", color: "#30916F" }} />
                        <p className='text-xs'>{typeLabel.name}</p>
                    </>
                ) : (
                    <>
                        <CategoryIcon sx={{ fontSize: "1.2rem", color: "#30916F" }} />
                        {category && <p className='text-xs'>{category.find((item) => item.id === label).name}</p>}
                    </>
                )
            }
        </div>
    )
}

export default BadgesUmkm