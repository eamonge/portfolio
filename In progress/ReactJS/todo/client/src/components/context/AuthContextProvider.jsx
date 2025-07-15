import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const getLoggedIn = async () => {
    console.log('Log in auth!');
    try {
      if (!loggedIn) {
        const loggedInRes = await axios.get(`${BASE_URL}/auth/loggedIn`, {
          withCredentials: true,
        })
        setLoggedIn(loggedInRes.data);
      } else {
        console.log('ee');
      }
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    try {
      getLoggedIn();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <AuthContext.Provider value={{ loggedIn, getLoggedIn, loading }}>
    {props.children}
  </AuthContext.Provider>;
}

export default AuthContext;
export { AuthContextProvider };