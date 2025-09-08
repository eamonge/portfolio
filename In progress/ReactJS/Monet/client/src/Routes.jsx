import React from 'react'
import { Routes as Routez, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';

import Navbar from './components/pages/Navbar';
import MySchedule from './components/pages/MySchedule';
import ScheduleChanges from './components/pages/ScheduleChanges';
import MyAdherance from './components/pages/MyAdherence'
import MyAlerts from './components/pages/MyAlerts';
import Prefernces from './components/pages/Preferences';
import ScheduleAction from './components/pages/ScheduleAction';




const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routez>
                    <Route path='/preferences' element={<Prefernces />} />
                    <Route path='/my-alerts' element={<MyAlerts />} />
                    <Route path='/schedule-actions' element={<ScheduleAction />} />
                    <Route path='/adherence' element={<MyAdherance />} />
                    <Route path='/schedule-changes' element={<ScheduleChanges />} />
                    <Route path='/schedule' element={<MySchedule />} />
                    <Route path='/home' element={<Landing />} />
                    <Route path='/' element={<Login />} />
                </Routez>
            </BrowserRouter>
        </>
    )
}

export default Routes