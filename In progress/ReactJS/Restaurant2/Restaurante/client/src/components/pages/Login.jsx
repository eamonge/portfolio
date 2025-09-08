import React, { useState } from 'react'
import '../styles/login.css';
import Typography from '@mui/material/Typography';
import { navigationRoute } from '../utils/navigationUtil';

const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Submittion event triggered!');
    var userNameInput = document.getElementById('usrInput').value;
    var passWordInput = document.getElementById('pswrdInput').value;

    if (userNameInput === "" || passWordInput === "") {
        window.alert('Missing data!');
    } else if ( userNameInput != "1" || passWordInput != "a") {
        window.alert('Hey, incorrecto datos');
    } else {
        window.alert('Jalo!');

        setTimeout(() => {
            navigationRoute('/home')
        }, 2000)
    }
}

const Login = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    return (
        <div className='backgroundMainModal backModal-login'>
            <div className="contentModal-login">
                <Typography variant="h4" gutterBottom>
                    Login {passWord}
                </Typography>
                <hr />
                <form onSubmit={handleLoginSubmit}>
                    <input 
                        placeholder='Usuario o correo'
                        type='text'
                        id='usrInput'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder='Contraseña'
                        type='password'
                        id='pswrdInput'
                        value={passWord}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <br />
                    <button type='submit'>Login</button>
                    <br />
                    <button type='button' onClick={() => navigationRoute('/register')}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Login