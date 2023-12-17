import React from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function NewFUComponent(props) {
    return (props.trigger) ? (
        <div className='bckgContainer'>
            <div className='formContainer'>
                <h1>Add Follow up</h1>
                <div className='formContent'>
                    <Tooltip title='Close' arrow>
                        <Button
                            variant="text"
                            className='btnClose'
                            disableRipple
                            onClick={() => props.setTrigger(false)}>
                            < CancelIcon />
                        </Button>
                    </Tooltip>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="SR #" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Type" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Severity" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Region" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Support Area Path" variant="outlined" className='inputFollowUp' />
                        <FormControlLabel required control={<Checkbox />} label="Unresponsive customer" />
                        {/* <FormGroup>
                    </FormGroup> */}
                        <TextField id="outlined-basic" label="Return date" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Due date" variant="outlined" className='inputFollowUp' />
                        <TextField id="outlined-basic" label="Priority" variant="outlined" className='inputFollowUp' />
                        <br/>
                        <Button
                            variant="text"
                            className='btnAdd'
                            disableRipple>
                            Add Follow up
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    ) : "";
};

export default NewFUComponent;