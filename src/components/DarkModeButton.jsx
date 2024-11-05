import React, { useEffect, useState } from 'react'

const DarkModeButton = () => {
    const [dark, setDark] = useState(localStorage.getItem("mode") || "light")

    const darkModeHandler = (mode_status) => {
        if (mode_status === "dark") {
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    }

    useEffect(() => {
        darkModeHandler(dark)
        localStorage.setItem("mode", dark)
    }, [dark])

    return (
        <button onClick={() => setDark((prevDark) => (prevDark === "dark" ? "light" : "dark"))} className='text-light-primary dark:text-dark-primary'>
            {dark === "dark" ? 'turn light' : 'turn dark'}
        </button>
    )
}

export default DarkModeButton