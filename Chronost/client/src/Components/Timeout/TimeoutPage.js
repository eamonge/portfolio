import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const API_BASE = "http://localhost:5000";

function TimeoutComponent() {
    var storedemail = localStorage.getItem("email");

    const [timeoutdataAgg, setTimeoutDataAgg] = useState([]);
    const [timeoutdataNagg, setTimeoutDataNagg] = useState([]);

    const getAggTimeout = async () => {
        axios.get(`${API_BASE}/timeout/ag/${storedemail}`)
            .then((res) => {
                setTimeoutDataAgg(res.data)
            })
    }

    const getNAggTimeout = async () => {
        axios.get(`${API_BASE}/timeout/nag/${storedemail}`)
            .then((res) => {
                setTimeoutDataNagg(res.data)
            })
    }

    useEffect(() => {
        getAggTimeout();
        getNAggTimeout();
    }, [])

    return (
        <div>
            {
                timeoutdataAgg.map(e => (
                    <h1>Start times: {e.start}</h1>
                ))
            }
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={
                    timeoutdataNagg.map(i => (
                        {
                            title: `${i.title}`, 
                            start: `${i.start}`,
                            end: `${i.end}`
                        }
                    ))
                }
            />


        </div>
    );
}

export default TimeoutComponent;


