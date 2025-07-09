import axios from 'axios';
import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// const BASE_URL = "http://localhost:5000";

const instance = axios.create({
    baseURL: BASE_URL,
});

//Log in user
export const logInUser = async (loginData) => {
    try {
        await axios.post(`${BASE_URL}/auth/login`, loginData, {
            withCredentials: true
        });
        // console.log(true);
    } catch (err) {
        console.log(`Error throwing data: ${err}`);
    }
}