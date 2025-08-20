import React from 'react';
import '../styles/login.css';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    // Handles login function (currently using static data)
    const handleLogin = async (e) => {
        e.preventDefault();
        var username = document.getElementById('userInputVal').value;
        var password = document.getElementById('pwdInputVal').value;

        if (username === "" || password === "") {
            console.log('All values must be inserted!');
        } else if (username != 'ernesto' || password != 'test123') {
            console.log('Incorret username or password!');
        } else {
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }
    };

    return (
        <div className="backdropModal">
            <div className="foredropModal">
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <hr />
                <br />
                <form onSubmit={handleLogin}>
                    <input id='userInputVal' type='text' placeholder='Username or email' />
                    <br />
                    <input id='pwdInputVal' type='password' placeholder='Password' />
                    <br />
                    <button className='login-Btn'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login