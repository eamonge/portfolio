import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const handlePwd = async () => {
    var pwd = document.getElementById('inptPwd').value;
    var input = document.getElementById('as2');
    input.innerHTML = pwd;
};

function LoginComponent() {
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        var username = document.getElementById('inptUsername').value;
        var pwd = document.getElementById('inptPwd').value;
        var warning = document.getElementById('sevAlertWarningInput');
        var alert = document.getElementById('sevAlertIncorrectInput');

        if (username == 'A' && pwd == 'A') {
            localStorage.setItem('userName', username);
            navigate("/landing");
        } else if (username == '' || pwd == '') {
            warning.style.display = 'block';
            alert.style.display = 'none';
            
        } else {
            alert.style.display = 'block';
            warning.style.display = 'none';
        }
    };

    return (
        <div className='loginDivBackdrop'>
            <div className='loginDivContent'>
                <h1>Login Component</h1>
                <form onSubmit={handleLoginSubmit}>
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
                            label="Username"
                            variant="outlined"
                            type='text'
                            required
                            helperText="Required"

                        />
                        <TextField
                            id="inptPwd"
                            label="Password"
                            variant="outlined"
                            type='password'
                            required
                            helperText="Required"
                        />
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            className='btnLogin'
                            type='submit'
                        >
                            Log in
                        </Button>
                    </Stack>
                </form>

                <Stack
                    sx={{ width: '94%', position: 'absolute', left: '3%', marginTop: '1rem' }}
                    spacing={2}
                    id='sevAlertIncorrectInput'
                    style={{
                        display: 'none'
                    }}
                >
                    <Alert
                        severity="error"
                    >
                        Username or password is incorrect
                    </Alert>
                </Stack>
                <Stack
                    sx={{ width: '94%', position: 'absolute', left: '3%', marginTop: '1rem' }}
                    spacing={2}
                    id='sevAlertWarningInput'
                    style={{
                        display: 'none'
                    }}
                >
                    <Alert
                        severity="warning"
                    >
                        Username/password are both required
                    </Alert>
                </Stack>
            </div>
        </div>
    );
};

export default LoginComponent;