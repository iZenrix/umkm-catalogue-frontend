import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@contexts/AuthContext';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'https://umkm-catalogue-backend.vercel.app';

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { token, isLogged } = useAuth()

    const fixHeader = token && isLogged ? {
        accept: '*/*',
        Authorization: 'Bearer ' + token,
    } : {
            accept: '*/*'
    }

    useEffect(()=>{
        console.log(token)
    }, [isLogged, token])
    
    const fetchData = async (params) => {
        setLoading(true);
        try {
            const result = await axios.request({
                ...axiosParams,
                headers: fixHeader,
                data : params
            });
            setResponse(result.data);
        } catch (error) {
            setError(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
};