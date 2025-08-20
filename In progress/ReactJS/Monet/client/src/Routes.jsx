import React from 'react'
import { Routes as Routez, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';

import Navbar from './components/pages/Navbar';
import MySchedule from './components/pages/MySchedule';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routez>
                    <Route path='/schedule' element={<MySchedule />} />
                    <Route path='/home' element={<Landing />} />
                    <Route path='/' element={<Login />} />
                </Routez>
            </BrowserRouter>
        </>
    )
}

export default Routes