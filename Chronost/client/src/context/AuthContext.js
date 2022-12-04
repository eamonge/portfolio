import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:5000";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    
    //Verifying if token exists to render subsequent components
    async function getLoggedIn() {
        const loggedInRes = await axios.get(`${API_BASE}/auth/loggedIn`);
        setLoggedIn(loggedInRes.data)
    }

    //No dependencies. Runs only at log in
    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
};


export default AuthContext;
export {AuthContextProvider};