import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const {user, setUser, isLogged, setIsLogged} = useAuth()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi form (misalnya: email dan password tidak boleh kosong)
        if (!email || !password) {
            setError('Email and password are required');
        } else {
            setError('');
            setUser({
                name : username,
                email : email,
            })
            setIsLogged(true);
            navigate("/")
        }
    };

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
                    <img src="/img/logo.svg" alt="" className='mb-10 w-40'/>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                        {error && (
                            <Typography color="error" variant="body2" align="center">
                                {error}
                            </Typography>
                        )}
                        <div className="button-wrapper w-full flex justify-center mt-5">
                        <button className='bg-secondary-500 py-2 px-10 rounded-md text-white font-medium text-lg' type='submit'>Login</button>
                        </div>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default Login;