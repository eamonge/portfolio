import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Calendar } from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from "@fullcalendar/daygrid";
import Adherance from './Adherance';
import StatusChange from './StatusChange';
import CalendarComponent from './CalendarComponent';
import BulkChange from './BulkChange';

import AbiTest from './abiTest';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    height: '80vh',
    overflow: 'auto',
    boxShadow: 'none',
    borderRight: 'solid 2px gray',
    borderRadius: '0',
    // 0px
    [theme.breakpoints.only('xs')]: {
        border: 'none'
    },
    // 600px
    [theme.breakpoints.only('sm')]: {
        border: 'none'
    },
    // 900px
    [theme.breakpoints.only('md')]: {
        border: 'none'
    },
    // 1200px
    [theme.breakpoints.only('lg')]: {
        borderRight: 'solid 2px #F1F1F1'
    },
    // 1536px
    [theme.breakpoints.only('xl')]: {
        borderRight: 'solid 2px #F1F1F1'
    },
}));

const Landing = () => {
    const [gridView, setGridView] = useState("dayGridMonth");
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

    // const formattedDate = `${dd}-${mm}-${yyyy}`;
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    const formattedDate2 = `${dd}/${mm}/${yyyy}`;

    console.log(formattedDate)

    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: 'UTC',
            initialView: 'timeGridWeek',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay'
            },
            events: 'https://fullcalendar.io/api/demo-feeds/events.json'
        });

        calendar.render();
    });

    return (
        <div className='contentDivBody homeBodyDiv'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                        <Item>
                            {/* <AbiTest message={abiMessage}/> */}
                            <Accordion defaultExpanded sx={{ width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant='h6'>
                                        Shift
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{width: '100%', overflowX: 'auto', height: '100%'}}>
                                        <FullCalendar
                                            plugins={[dayGridPlugin, timeGridPlugin]}
                                            initialView="timeGridDay"   // 👈 default to day view
                                            // headerToolbar={{
                                            //     center: "title"
                                            // }}
                                            slotMinTime="09:00:00"   // earliest time visible
                                            slotMaxTime="18:00:00"   // latest time visible
                                            allDaySlot={false}       // hides "all-day" row
                                            hiddenDays={[0, 6]}   // Hide Sunday (0) and Saturday (6)
                                            aspectRatio={1}
                                            expandRows
                                            events={[
                                                {
                                                    title: "First break",
                                                    start: `${formattedDate}T10:15:00`,
                                                    end: `${formattedDate}T10:30:00`,
                                                },
                                                {
                                                    title: "Lunch",
                                                    start: `${formattedDate}T14:00:00`,
                                                    end: `${formattedDate}T15:00:00`,
                                                },
                                                {
                                                    title: "Second break",
                                                    start: `${formattedDate}T16:45:00`,
                                                    end: `${formattedDate}T17:00:00`,
                                                },
                                            ]}
                                        />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                        <Item>
                            <Accordion defaultExpanded sx={{ width: "100%", boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant='h6'>
                                        My stats for {formattedDate2}
                                        <br />
                                        <br />
                                        Adherance
                                    </Typography>
                                    <Typography variant='h5'>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Adherance />
                                </AccordionDetails>
                            </Accordion>
                            <hr />
                            <Accordion defaultExpanded sx={{ width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant='h6'>
                                        My schedule calendar
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
                                                <Item>
                                                    <CalendarComponent view="dayGridMonth" display="background"/>
                                                </Item>
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                                                <Item>
                                                    <BulkChange />
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                        <Item>
                            <StatusChange/>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Landing