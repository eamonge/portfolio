import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

function AddEventComponent(props) {
    const currentDate = dayjs();
    const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
    const [value, setValue] = useState(dayjs(formattedDate));
    const handleAddEvent = async (e) => {
        e.preventDefault();
    }

    const handleChange = () => {
        var grfgre = document.getElementById('wevertfe4').value;
        var dateParagraph = document.getElementById('deetee').value;

        dateParagraph.innerHTML = grfgre;
    }


    return (props.trigger) ? (
        <div className='backdropPopUpdiv'>
            <div className='popupAddEventdiv'>
                <h1>Add event</h1>
                <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            style={{backgroundColor: 'red', borderRadius: '20px', width: '5px', height: '20px', position: 'absolute', right: '0', top: '0'}}
                            onClick={() => props.setTrigger(false)}
                        >
                            x
                        </Button>
                    </Stack>
                <form onSubmit={handleAddEvent}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id='inptUsername'
                            label="Event title"
                            variant="outlined"
                            type='text'
                            required
                            helperText="Required"

                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker
                                    label="Basic date time picker"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            className='btnLogin'
                        >
                            Add event
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    ) : "";
};

export default AddEventComponent;