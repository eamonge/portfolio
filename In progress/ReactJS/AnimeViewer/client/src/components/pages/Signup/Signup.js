import React from 'react';
import '../../assets/styles/signup.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function SignupComponent() {
    
    
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    }


    return(
        <div className='background-div-signup'>
            <div className='content-wrapper'>
                <div className='left-div'>
                    <Typography variant="h5" gutterBottom>
                        Sign up!
                    </Typography>
                    <TextField id="username-input" label="Username" variant="filled" type='text'/> < br />< br />
                    <TextField id="username-input" label="First name" variant="filled" type='text'/>< br />< br />
                    <TextField id="username-input" label="Last name" variant="filled" type='text'/>< br />< br />
                    <TextField id="username-input" label="Email" variant="filled" type='text'/>< br />< br />
                    <TextField id="username-input" label="Confirm email" variant="filled" type='text'/>< br />< br />
                    <TextField id="password-input" label="Password" variant="filled" type='password'/>< br />< br />
                    <TextField id="password-input" label="Confirm password" variant="filled" type='password'/>< br />< br />
                    <Button variant="contained" className='login-btn'>Sign up</Button>< br />< br />
                    <Button variant="contained" className='login-btn' onClick={() => handleCancel()}>Cancel</Button>< br />< br />
                </div>
                <div className='right-div'>
                    {/* <h1>Sign up form!</h1> */}
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;