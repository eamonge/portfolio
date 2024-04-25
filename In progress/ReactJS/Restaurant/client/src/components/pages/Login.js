import React from 'react';
import '../styles/login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function LoginComponent() {

    const handleSubmit = (e) => {
        e.preventDefault();
        var usernameInput = document.getElementById('usernameInput').value;
        var passwordInput = document.getElementById('passwordInput').value;

        var missingDataAlert = document.getElementById('alertLoginWarning');
        var incorrectDataAlert = document.getElementById('alertLoginError');

        if (usernameInput == 'ernesto.monge' && passwordInput == 'b') {
            localStorage.setItem("userName", "Ernesto Monge");
            window.location.href ="/home";


        } else if (usernameInput === '' || passwordInput === '') {
            missingDataAlert.style.display = 'inline-flex';
            incorrectDataAlert.style.display = 'none';
        } else {
            window.alert('Wrong data');
            incorrectDataAlert.style.display = 'inline-flex';
            missingDataAlert.style.display = 'none';
        }

    }
    return (
        <div className='divLoginBackdrop'>
            <div className='divLogin-content divLogin-left'>
                <div className='divLoginForm'>
                    <form onSubmit={handleSubmit}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="usernameInput" label="Username" variant="standard" className='loginUsernameInput'/>
                            <br />
                            <TextField id="passwordInput" label="Password" variant="standard" type='password' className='loginUsernameInput' />
                        </Box>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" type='submit' className='btnLogin'>Log in</Button>
                        </Stack>
                    </form>
                    <Alert severity="warning" id='alertLoginWarning' className='loginAlerts'>All values are needed!</Alert>
                    <Alert severity="error" id='alertLoginError' className='loginAlerts'>Incorrect username/password</Alert>
                </div>
            </div>
            <div className='divLogin-content divLogin-right'>
            </div>
        </div>
    );
};

export default LoginComponent