import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './month-appointments';

function SchedulerView(props) {
    const data = props.dataAppointments;
    const cD = props.currentDateData;


    return (
        <div>
            <Paper>
                <Scheduler
                    data={data}
                >
                    <ViewState
                        currentDate={cD}
                    />
                    <MonthView />
                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        showOpenButton
                    />
                    <AppointmentForm
                        readOnly
                    />
                </Scheduler>
            </Paper>
        </div>
    );
};

export default SchedulerView;