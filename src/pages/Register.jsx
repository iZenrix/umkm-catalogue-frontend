import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi form (misalnya: email dan password tidak boleh kosong)
        if (!email || !password) {
            setError('Email and password are required');
        } else {
            setError('');
            // Kirim data ke server atau lakukan validasi lebih lanjut
            console.log('Form Submitted', { email, password, role });
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
                    <img src="/img/logo.svg" alt="" className='mb-10 w-40' />
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                        {error && (
                            <Typography color="error" variant="body2" align="center">
                                {error}
                            </Typography>
                        )}
                        <div className="button-wrapper w-full flex justify-center mt-5">
                            <button className='bg-secondary-500 py-2 px-10 rounded-md text-white font-medium text-lg' type='submit'>Register</button>
                        </div>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default Register;