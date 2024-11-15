import React, { useState, useEffect } from 'react';

import { TextField, Button, Typography, Container, Box, FormControl, InputLabel, Select, MenuItem, Grid2 } from '@mui/material';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useAxios from '@hooks/useAxios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState('User');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const {
        response : responseRegister,
        loading : loadingRegister,
        error : errorRegister,
        fetchData : fetchDataRegister,
    } = useAxios({
        method : "POST",
        url : '/register'
    })

    useEffect(() => {
        if (responseRegister?.data) {
            console.log(responseRegister?.data)
            navigate("/login")
        }
    },[responseRegister])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi form (misalnya: email dan password tidak boleh kosong)
        if (!email || !password) {
            setError('Email and password are required');
        } else if (password !== passwordConfirm) {
            setError('Your password doesn\'t match');
        } else {
            setError('');
            // Kirim data ke server atau lakukan validasi lebih lanjut
            // console.log('Form Submitted', { username, email, password, role });
            fetchDataRegister({
                name : username,
                email,
                password
            })
        }
    };

    return (
        <div className="form-login w-screen h-screen">
            <Grid2 container sx={{ height: "100%" }}>
                <Grid2 size={6}>
                    <div className="bg-image-login flex justify-center items-center size-full bg-secondary-100">
                        <img src="/img/logo.svg" alt="" className='w-96' />
                    </div>
                </Grid2>
                <Grid2 size={6}>
                    <div className="bg-image-login flex justify-center items-center size-full px-52">
                        <div className="login-content-wrapper">
                            <div className="login-title">
                                <h1 className='text-4xl font-bold text-start mb-3 text-primary-900'>Welcome to</h1>
                                <h1 className='text-4xl font-bold text-start mb-5 text-primary-900'>UMKM Catalogue</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Grid2 container spacing={2}>
                                    <Grid2 size={6}>
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
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <TextField
                                            label="Password Confirmation"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={passwordConfirm}
                                            onChange={(e) => setPasswordConfirm(e.target.value)}
                                            required
                                        />
                                    </Grid2>
                                </Grid2>
                                <div className="register-select mt-5">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Role"
                                            disabled
                                        >
                                            <MenuItem value="User">User</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                {error || errorRegister ? (
                                    <Typography color="error" variant="body2" align="center">
                                        {error || errorRegister?.error}
                                    </Typography>
                                ) : ""}
                                <div className="button-wrapper w-full flex justify-center mt-5 px-10">
                                    <button className='bg-secondary-500 py-4 flex-1 rounded-lg text-white font-medium text-lg' type='submit'>{loadingRegister ? "Processing" : "Register"}</button>
                                </div>
                            </form>
                            <p className='text-center mt-5 text-primary-600'>Have an account? <Link to={"/login"} className='text-secondary-500'> Login here </Link></p>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default Register;


