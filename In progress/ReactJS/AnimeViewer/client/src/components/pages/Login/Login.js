import React from 'react';
import '../../assets/styles/login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const navigate = useNavigate();
    const usr = document.getElementById('username-input');
    const pwd = document.getElementById('password-input');

    const handleSubmit = () => {

        if (document.getElementById('username-input').value == "Ernesto Monge" && document.getElementById('password-input').value == "a") {
            localStorage.setItem('username', document.getElementById('username-input').value);
            // window.alert(`Data is ${username_input.value}`);
            navigate("/landing");
        } else {
            window.alert('It fake!')
        }
    }

    const handleRedirect = () => {
        navigate("/signup");
    };

    return (
        <div className='backdrop-div'>
            <div className='login-form-div'>
                <h1>¡Welcome!</h1>
                {/* <h1>Data input is: {username}</h1> */}
                {/* <input ></input> */}
                <div style={{padding: '1rem'}} className='login-form'>
                    <TextField id="username-input" label="Username" variant="filled" type='text' className='login-input'/>
                    <br />
                    <br />
                    <TextField id="password-input" label="Password" variant="filled" type='password' className='login-input' />
                    <br />
                    <br />
                    <Button variant="contained" className='login-btn' onClick={() => handleSubmit()}>Log in</Button>
                    <br />
                    <br />
                    <Typography variant="h6" gutterBottom className='small-txt'>
                        Not a user?
                        <Button variant="text" onClick={() => handleRedirect()}>
                            Sign up!
                        </Button>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;