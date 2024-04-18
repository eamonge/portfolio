import React from 'react';
import Paper from '@mui/material/Paper';
// import {
//     Scheduler,
//     WeekView,
//     Appointments,
//     AppointmentTooltip,
//     AppointmentForm,
//     IntegratedGrouping,
//     DayView,
//     ConfirmationDialog,
// } from '@devexpress/dx-react-scheduler-material-ui';

// import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import dayjs from 'dayjs';

 function CalendarViewComponent() {
//     const appointmentsData = props.appointments;

//     const handleChanges = ({added, changed, deleted}) => {
//         this.setState((state) => {
//             let {appointmentsData} = state;

//             if (added) {
//                 const startingAddedId = appointmentsData.length > 0 ? appointmentsData[appointmentsData.length - 1].id + 1 : 0;
//                 appointmentsData = [...appointmentsData, { id: startingAddedId, ...added }];
//               }
//               if (changed) {
//                 appointmentsData = appointmentsData.map(appointment => (
//                   changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//               }
//               if (deleted !== undefined) {
//                 appointmentsData = appointmentsData.filter(appointment => appointment.id !== deleted);
//               }
//               return { appointmentsData };

//             });
//     }


    return (
        <h1>Calendar View placeholder</h1>
        // <Paper>
        //     <Scheduler data={appointmentsData} height={490}>
        //         <WeekView startDayHour={8} endDayHour={22} excludedDays={[0, 6]} />
        //         <EditingState
        //             onCommitChanges={handleChanges}
        //         />
        //         <Appointments />
        //         <AppointmentTooltip 
        //             showCloseButton
        //             showOpenButton
        //         />
        //         <AppointmentForm/>
        //     </Scheduler>
        // </Paper>
    );
}

export default CalendarViewComponent;