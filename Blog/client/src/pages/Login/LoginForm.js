import React from 'react';
import './login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginFormComponent() {

    return (
        <div className='login-div-form'>
            
            <h1>Log in!</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField className='form-input-login' id="outlined-basic" label="Username" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                <br />
                <Button variant="outlined" className='btnLogin'>Sign in</Button>
            </Box>

        </div>
    );

}


export default LoginFormComponent;