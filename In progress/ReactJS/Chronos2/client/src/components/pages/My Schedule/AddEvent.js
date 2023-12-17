import React from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';

function AddEventComponet(props) {
    return (props.trigger) ? (
        <div className='bckgContainer'>
            <div className='formContainer'>
                <Button
                    variant="text"
                    className='btnClose'
                    disableRipple
                    onClick={() => props.setTrigger(false)}>
                    < CancelIcon />
                </Button>
                <h1>This is the add event component</h1>
            </div>
        </div>
    ) : "";
}

export default AddEventComponet;