import React, { useEffect, useState } from 'react';
import { TextField, Typography, Container, Box } from '@mui/material';

import { useAuth } from '@contexts/AuthContext';
import { useAxios } from '@hooks/useAxios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("")

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
        url: '/users/profile',
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
            setUser(responseLogin.data)
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
        <div className="form-login w-screen h-screen flex justify-center items-center">
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 3,
                        borderRadius: 3,
                        boxShadow: 3,
                    }}
                >
                    <img src="/img/logo.svg" alt="" className='mb-10 w-40' />
                    <form onSubmit={(e) => handleSubmit(e)} style={{ width: '100%' }}>
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
                        <div className="button-wrapper w-full flex justify-center mt-5">
                            {
                                loadingLogin || loadingProfile ?
                                    <div className='bg-secondary-500 py-2 px-10 rounded-md text-white font-medium text-lg'>Logging in...</div>
                                    :
                                    <button className='bg-secondary-500 py-2 px-10 rounded-md text-white font-medium text-lg' type='submit'>Login</button>
                            }
                        </div>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default Login;
