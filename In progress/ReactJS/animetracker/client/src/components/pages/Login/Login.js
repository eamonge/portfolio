import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function LoginComponent() {

    const handleSubmit = (e) => {
        e.preventDefault();
        var usernameInput = document.getElementById('usernameInput').value;
        var passwordInput = document.getElementById('passwordInput').value;

        var missingDataAlert = document.getElementById('alertLoginWarning');
        var incorrectDataAlert = document.getElementById('alertLoginError');

        if (usernameInput == 'ernesto.monge' && passwordInput == 'b') {
            localStorage.setItem("userName", "Ernesto Monge");
            window.location.href ="/landing";
        } else if (usernameInput === '' || passwordInput === '') {
            missingDataAlert.style.setProperty("display", "inline-flex", "important");
            incorrectDataAlert.style.setProperty("display", "none", "important");
        } else {
            missingDataAlert.style.setProperty("display", "none", "important");
            incorrectDataAlert.style.setProperty("display", "inline-flex", "important");
        }
    };


    return (
        <div className='backdropDiv'>
            <div className='leftLoginDiv'>
                <div className='loginContent'>
                    <Typography variant="h3" gutterBottom>
                        Login component
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        
                        <TextField id="usernameInput" label="Username" variant="standard" className='loginInputs' />
                        <br />
                        <TextField id="passwordInput" label="Password" variant="standard" type='password' className='loginInputs' />
                        <br />
                        <Alert id='alertLoginWarning' severity="warning" className='dataInput-alert'>All fields are required</Alert>
                        <Alert id='alertLoginError' severity="error" className='dataInput-alert'>Data is incorrect</Alert>
                        <button type='submit'>Log in</button>
                    </form>
                </div>
            </div>
            <div className='rightLoginDiv'></div>
        </div>
    );
};

export default LoginComponent;