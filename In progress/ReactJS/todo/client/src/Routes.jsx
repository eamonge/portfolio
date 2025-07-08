import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
// Importing pages
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';

const AppRoutes = () => {
  return (
    <>
        <BrowserRouter>
            {/* Public routes */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes