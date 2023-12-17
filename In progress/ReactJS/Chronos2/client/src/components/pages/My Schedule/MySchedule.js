import React, { useState } from 'react';
import CalendarViewComponent from './CalendarView';
import {appointments} from './month-appointments';
// import '../../assets/styles/chart';
import '../../assets/styles/chart.css';
import Button from '@mui/material/Button';
import AddEventComponet from './AddEvent';

function MySCheduleComponent() {
    const [addEventPopup, setEventPopup] = useState(false);

    return (
        <div className='content-div'>
            <div className='my-schedule-displaydiv'>
                {/* <h1>My schedule component</h1> */}
                <CalendarViewComponent appointments={appointments}/>
            </div>
            <Button className='addBtn' variant="contained" style={{marginTop: '10px'}} onClick={() => setEventPopup(true)}>Add Event</Button>
            <AddEventComponet trigger={addEventPopup} setTrigger={setEventPopup}/>
        </div>
    );
}

export default MySCheduleComponent;