import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
// Importing pages
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';
import AuthContext from './components/context/AuthContextProvider';
import LoadingComponent from './components/pages/Loading';

const AppRoutes = () => {
  const { loggedIn, loading } = useContext(AuthContext);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 3000); // 2-second delay

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  if (loading || localLoading) return <LoadingComponent />

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          {
            !loggedIn && (
              <>
                <Route path='/loding' element={<LoadingComponent />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Login />} />
                <Route path='*' element={<NotFound />} />
              </>
            )
          }
          {/* Authenticated users */}
          {loggedIn && (
            <>
              <Route path='/home' element={<Landing />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default AppRoutes