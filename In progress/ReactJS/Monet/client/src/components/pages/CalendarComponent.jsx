import React from 'react'
import { Calendar } from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarComponent = (props) => {
    const today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth() + 1; //Since months are 0 indexed

    const yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    return (
        <div style={{ width: '100%', overflowX: 'auto', height: '100%' }}>
            <h1>Prop display: {props.display}</h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView={`${props.view}`}   // 👈 default to day view
                // headerToolbar={{
                //     center: "title"
                // }}
                slotMinTime="09:00:00"   // earliest time visible
                slotMaxTime="18:00:00"   // latest time visible
                allDaySlot={false}       // hides "all-day" row
                // hiddenDays={[0, 6]}   // Hide Sunday (0) and Saturday (6)
                aspectRatio={1}
                expandRows
                events={[
                    {
                        start: '2025-09-08',
                        end: '2025-09-13',
                        overlap: false,
                        display: 'background',
                        color: '#0C969C'

                    },
                    {
                        start: '2025-09-15',
                        end: '2025-09-20',
                        overlap: false,
                        display: 'background',
                        color: '#0C969C'

                    },
                    {
                        start: '2025-09-22',
                        end: '2025-09-28',
                        overlap: false,
                        display: 'background',
                        color: '#0C969C'

                    },
                ]}
            />
        </div>
    )
}

export default CalendarComponent