// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";

// export default function Adherence({ history }) {
//     const [adherencePct, setAdherencePct] = useState(100);

//     // Set your shift start/end (can be props or Redux-driven)
//     const shiftStart = new Date();
//     shiftStart.setHours(9, 0, 0, 0);

//     const shiftEnd = new Date();
//     shiftEnd.setHours(18, 0, 0, 0);

//     const shiftStartSec = shiftStart.getTime() / 1000;
//     const shiftEndSec = shiftEnd.getTime() / 1000;

//     const allowances = {
//         Break: 1800, // 30 minutes
//         Lunch: 3600, // 60 minutes
//     };

//     // Calculate adherence
//     const calculateAdherence = (historyArr) => {
//         if (!Array.isArray(historyArr)) historyArr = [];

//         const totalShiftSecs = shiftEndSec - shiftStartSec;
//         let totalGoodTime = 0;
//         let totalPenalties = 0;
//         const totals = {};

//         historyArr.forEach(({ status, startTime, endTime }) => {
//             const duration = (endTime - startTime) / 1000;
//             totals[status] = (totals[status] ?? 0) + duration;

//             const startSec = startTime / 1000;
//             const endSec = endTime / 1000;
//             const insideShift = Math.max(
//                 0,
//                 Math.min(endSec, shiftEndSec) - Math.max(startSec, shiftStartSec)
//             );
//             const outsideShift = duration - insideShift;

//             if (status === "Available") {
//                 // Good inside shift
//                 totalGoodTime += insideShift;
//             } else if (status === "Break" || status === "Lunch") {
//                 const allowed = allowances[status] ?? 0;
//                 totalGoodTime += Math.min(duration, allowed); // count up to allowance
//                 if (duration > allowed) totalPenalties += duration - allowed;
//                 if (outsideShift > 0) totalPenalties += outsideShift;
//             } else if (status === "Logged out") {
//                 // Good outside shift; inside shift penalized
//                 if (insideShift > 0) totalPenalties += insideShift;
//                 else totalGoodTime += outsideShift;
//             } else {
//                 // Unknown/bad statuses fully penalized
//                 totalPenalties += duration;
//             }
//         });

//         // Fill any remaining shift time as Available (not covered by events)
//         const coveredTime = Object.entries(totals).reduce(
//             (sum, [, t]) => sum + t,
//             0
//         );
//         const residualAvailable = Math.max(0, totalShiftSecs - coveredTime);
//         totalGoodTime += residualAvailable;

//         // Clamp penalties
//         totalPenalties = Math.min(totalPenalties, totalShiftSecs);

//         let pct = ((totalGoodTime - totalPenalties) / totalShiftSecs) * 100;
//         pct = Math.max(0, Math.min(100, pct));

//         return pct;
//     };

//     // Update adherence when history changes
//     useEffect(() => {
//         const pct = calculateAdherence(history);
//         console.log("Updating adherence! Adherence %:", pct);
//         setAdherencePct(pct);
//     }, [history]);

//     return (
//         <Typography variant="h6">
//             Adherence: {adherencePct.toFixed(2)}%
//         </Typography>
//     );
// }


import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '../../features/statusSlice';
import { isOverLimit, timeRemaining, calculateAdherence } from '../utils/statusUtils';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
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
        border: 'none'
    },
    // 1536px
    [theme.breakpoints.only('xl')]: {
        border: 'none'
    },
}));

const Adherance = () => {
    const { status, elapsed, history } = useSelector((state) => state.status);
    const [adherancePct, setAdherancePct] = useState(100);
    const currentStatus = status || "Logged out";

    const statusColors = {
        Available: "#8ef0b7ff",
        Break: "orange",
        Lunch: "yellow",
        Meeting: "lightblue",
        "System Issues - Tek": "red",
        "System Issues - MS": "darkred",
        "End of shift": "gray",
        "Logged out": "black",
    };

    // Define your allowed statuses and thresholds somewhere above useEffect
    const thresholds = {
        Break: 1800,  // 30 minutes
        Lunch: 3600,  // 1 hour
        Meeting: 7200 // 2 hours
        // Available: no limit, counted as good
        // Any other statuses (e.g., System Issues, Logged out, etc.) will decrease adherence
    };

    const formatTime = (secs) => {
        const safe = Number.isFinite(secs) && secs >= 0 ? secs : 0;
        const h = String(Math.floor(safe / 3600)).padStart(2, '0');
        const m = String(Math.floor((safe % 3600) / 60)).padStart(2, '0');
        const s = String(Math.floor(safe % 60)).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    //Check current status adherence
    const over = isOverLimit(status, elapsed);

    // Compute once when the component mounts or history changes
    const shiftStart = new Date();
    shiftStart.setHours(18, 13, 0, 0); // 12:20 PM
    const shiftEnd = new Date();
    shiftEnd.setHours(18, 20, 0, 0); // 12:25 PM

    useEffect(() => {
        const shiftLengthSecs = (shiftEnd - shiftStart) / 1000;
        const shiftStartSec = shiftStart.getTime() / 1000;
        const shiftEndSec = shiftEnd.getTime() / 1000;

        const updateAdherence = () => {
            const safeHistory = Array.isArray(history) ? history : [];

            // Make sure all entries have startTime/endTime
            const filteredHistory = safeHistory
                .map(({ status, startTime, endTime }) => ({
                    status,
                    startTime: startTime,
                    endTime: endTime
                }))
                .filter(r => r.endTime > r.startTime);

            const { adherencePct, totals, totalPenalties, totalGoodTime } = calculateAdherence(
                filteredHistory,
                shiftStartSec,
                shiftEndSec,
                thresholds
            );

            console.log("Adherence %:", adherencePct.toFixed(2));
            setAdherancePct(adherencePct);
        };
        updateAdherence();
        const intervalId = setInterval(updateAdherence, 6000); // update every 6 seconds
        return () => clearInterval(intervalId);


    }, [history, shiftStart, shiftEnd]); // Includes history so interval sees latest log

    return (
        <div className='adheranceBox contentPanel'>
            Adherance
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Current Schedule:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Current status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div
                                className="statusValDiv"
                                style={{
                                    lineHeight: "65px", position: "relative", "--statusColor": statusColors[status] || '#f31b1bff',
                                }}
                            >
                                {currentStatus}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Time in status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px' }}>
                                {formatTime(elapsed)}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            {over ? (
                                <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#D32D41', color: 'white' }}>
                                    Out of adherance
                                </div>
                            ) : (
                                <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
                                    <b>In adherance</b>
                                </div>
                            )}
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance score:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
                                {adherancePct.toFixed(2)}%
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Adherance