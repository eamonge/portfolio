import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getUserData } from '../api/usersAPI';
import { createContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const DataContextProvider = (props) => {
    const [userData, setUserData] = useState([]);
    var emailUser = localStorage.getItem("userEmail");

    const handleDataFetch = async (email) => {
        // if (emailUser) {
        //     console.log('email fetched!')
        //     const data = await axios.get(`${BASE_URL}/auth/data/${email}`, {
        //         withCredentials: true
        //     });
        //     setUserData(data.data[0]);
        // }
        console.log('In function, email is: ', email);
        try {
            if (emailUser) {
                const userData = await axios.get(`${BASE_URL}/auth/data/${email}`, {
                    withCredentials: true
                });
                setUserData(userData.data[0]);
            }
        } catch (err) {
            console.log('Error fetching data: ', err)
        }
    }

    useEffect(() => {
        handleDataFetch(emailUser);
        console.log(userData[0]);
    }, []);

    return <DataContext.Provider value={{ userData, setUserData }}>
        {props.children}
    </DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };