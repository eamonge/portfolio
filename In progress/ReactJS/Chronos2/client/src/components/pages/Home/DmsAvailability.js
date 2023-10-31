import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DmComponent() {
    const [status, setStatus] = useState("Online");

    const handleChange = (statusState) => {
        setStatus(statusState);
    }

    const handleChangeValue = (e) => {
        setStatus(e.target.value);
    }

    function handleClass2(classStatus) {
        switch (status) {
            case 'Online':
                return 'typography-dm online';
            case 'Break':
                return 'typography-dm break';
            case 'Lunch':
                return 'typography-dm lunch';
            default:
                return 'typography-dm offline';
        }
    }

    // const handleClass = classStatus => {};

    return (
        <div className='dm-availab-container content-div'>
            <h1>DM Availability</h1>
            <div className='content-typ-div'>
                <Typography variant="h6" className={handleClass2(status)}>
                    <span>
                        Jose Picado
                    </span>
                </Typography>
                <Typography variant="h6" className={handleClass2(status)}>
                    <span>
                        Pame Bonilla
                    </span>
                </Typography>
                <Typography variant="h6" className={handleClass2(status)}>
                    <span>
                        Sebastian Gonzalez
                    </span>
                </Typography>
                <Typography variant="h6" className={handleClass2(status)}>
                    <span>
                        Stephanie Mora
                    </span>
                </Typography>
            </div>
        </div>
    );
};

export default DmComponent;