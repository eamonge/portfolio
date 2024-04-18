import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import './schedule.css';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function AddEventComponet(props) {
    // var now = dayjs();
    // const [date, setDate] = useState(null);
    // const [value, setValue] = useState(null);


    const [age, setAge] = useState('');

    const handleChange = (event) => {
        var option = document.getElementById('')
        setAge(event.target.value);
    };

    return (props.trigger) ? (
        <div className='bckgContainer'>
            <div className='formContainer'>
                <h1>This is the add event component</h1>
                <Button
                    variant="text"
                    className='btnClose'
                    disableRipple
                    onClick={() => props.setTrigger(false)}>
                    < CancelIcon />
                </Button>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {/* <TextField id="outlined-basic" label="Event title" variant="outlined" className='addEventinput' />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Select date & time for event"
                            value={value}
                            onChange={(e) => { setValue(dayjs(e).format('YYYY-MM-DDTHH:mm:ss')); console.log(value) }}
                            className='addEventinput'
                        />
                    </LocalizationProvider> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='addEventinput' >
                        <InputLabel id="demo-simple-select-helper-label">Event priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'Low'}>Low</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <h1> Date is {value}</h1> */}
                    <br />
                    <Button
                        variant="text"
                        className='btnAdd'
                        disableRipple>
                        Add Follow up
                    </Button>
                </Box>
            </div>
        </div>

    ) : "";
}

export default AddEventComponet;