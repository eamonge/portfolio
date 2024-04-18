import React, { useEffect, useState } from 'react';
import SchedulerView from './SchedulerView';
import { appointments } from './month-appointments';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddEventComponent from './AddEvent';

const BASE_URL = "http://localhost:5000";

function DueDatesComponent() {
    const currentDate = new Date();
    const [popup, setPopup] = useState(false);
    const [getEvents, setGetEvents] = useState([]);

    const getEventData = async () => {
        fetch(`${BASE_URL}/events`)
        .then(res => res.json())
        .then(data => setGetEvents(data))
        .catch(err => console.log(`Error is: ${err}`))
    };

    useEffect(() => {
        getEventData();
        console.log(getEvents);
    }, []);

    return (
        <div>
            <h1>Dues componentss</h1>
            <SchedulerView dataAppointments={getEvents} currentDateData={currentDate} />
            <br />  
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    className='btnLogin'
                    onClick={() => setPopup(true)}
                >
                    Add event
                </Button>
            </Stack>
            <AddEventComponent trigger={popup} setTrigger={setPopup}/>
        </div>
    )
};

export default DueDatesComponent;