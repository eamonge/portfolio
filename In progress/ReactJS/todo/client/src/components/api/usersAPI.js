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

//Gets user data
export const getUserData = async (email) => {
    const [userData, setUserData] = useState([]);
    try {
        const userData = await axios.get(`${BASE_URL}/auth/data/${email}`, {
            withCredentials: true
        });
        setUserData(userData.data[0]);
    } catch (err) {
        console.log('Error fetching data: ', err)
    }
}