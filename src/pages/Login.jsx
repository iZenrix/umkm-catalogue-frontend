import React, { useEffect, useState } from 'react';
import { TextField, Typography, Container, Box, Grid2 } from '@mui/material';

import { useAuth } from '@contexts/AuthContext';
import useAxios from '@hooks/useAxios';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("")
    const [selectVisitor, setSelectVisitor] = useState(true)

    const { setUser, setIsLogged, token, setToken } = useAuth()

    const {
        response: responseLogin,
        loading: loadingLogin,
        error: errorLogin,
        fetchData: fetchLogin
    } = useAxios({
        method: 'POST',
        url: '/login',
    });

    const {
        response: responseProfile,
        loading: loadingProfile,
        error: errorProfile,
        fetchData: fetchProfile
    } = useAxios({
        method: 'GET',
        url: '/user/profile',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setLocalError('Email and password are required');
        } else {
            console.log(email)
            console.log(password)
            fetchLogin({
                email: email,
                password: password,
            })
        }
    };

    useEffect(() => {
        if (responseLogin?.data) {
            setIsLogged(true)
            setToken(responseLogin.token)
        }
    }, [responseLogin])

    useEffect(() => {
        if (token) {
            fetchProfile()
        }
    }, [token])

    useEffect(() => {
        if (responseProfile?.data) {
            setUser(responseProfile?.data?.user)
            
            if (responseProfile?.data?.user?.role?.name == "admin") {
                navigate("/dashboard/approval")
            } else {
                navigate("/")
            }
        }
        console.log(responseProfile?.data?.user?.role?.name)
        console.log(errorProfile)
    }, [responseProfile, errorProfile])

    return (
        <div className="form-login w-screen h-screen">
            <Grid2 container sx={{ height: "100%" }}>
                <Grid2 size={6}>
                    <div className="bg-image-login flex justify-center items-center size-full bg-secondary-100">
                        <img src="/img/logo.svg" alt="" className='w-96' />
                    </div>
                </Grid2>
                <Grid2 size={6}>
                    <div className="bg-image-login flex justify-center items-center size-full">
                        <div className="login-content-wrapper">
                            <div className="login-title">
                                <h1 className='text-4xl font-bold text-start mb-3 text-primary-900'>Welcome to</h1>
                                <h1 className='text-4xl font-bold text-start mb-5 text-primary-900'>UMKM Catalogue</h1>
                            </div>
                            <div className="user-admin-toggle mb-4">
                                <div className="bg-toggle bg-secondary-200 flex rounded-lg overflow-hidden">
                                    <button className={`user-button ${selectVisitor ? "text-white bg-secondary-500" : "text-secondary-500"} text-lg font-semibold py-4 px-10 rounded-lg flex-1`} onClick={() => setSelectVisitor(true)}>
                                        Visitor
                                    </button>
                                    <button className={`admin-button ${selectVisitor ? "text-secondary-500" : "text-white bg-secondary-500"} text-lg font-semibold py-4 px-10 rounded-lg flex-1`} onClick={() => setSelectVisitor(false)}>
                                        Admin
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {errorLogin || localError ? (
                                    <Typography color="error" variant="body2" align="center">
                                        {errorLogin.error}
                                    </Typography>
                                ) : ""}
                                <div className="button-wrapper w-full flex justify-center mt-5 px-10">
                                    {
                                        loadingLogin || loadingProfile ?
                                            <div className='bg-secondary-500 py-4 flex-1 rounded-lg text-white font-medium text-lg text-center'>Logging in...</div>
                                            :
                                            <button className='bg-secondary-500 py-4 flex-1 rounded-lg text-white font-medium text-lg' type='submit'>Login</button>
                                    }
                                </div>
                            </form>
                            <p className='text-center mt-5 text-primary-600'>Don’t have an account? <Link to={"/register"} className='text-secondary-500'> Sign up here </Link></p>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default Login;
