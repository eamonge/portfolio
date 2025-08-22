import React, { useContext, useState } from 'react'
import '../styles/Login.css';
import { Navigate, useNavigate } from 'react-router';
import { logInUser } from '../api/usersAPI';
import AuthContext from '../context/AuthContextProvider';
import axios from 'axios';

const Login = () => {
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {getLoggedIn} = useContext(AuthContext);

    // const {loading} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const alertMessage = document.getElementById('alertMessage-login');

        const loginData = {
            identifier,
            password
        };

        if (identifier === "" || password === "") {
            // window.alert('');
            setAlertMessage('Please add all necessary values');
        } else {
            try {
                // console.log(loginData);
                // await logInUser(loginData);
                // // navigate('/home');
                // window.location.href = '/home';}

                await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/auth/login`, loginData, {
                    withCredentials: true
                });

                var millisecondsToWait = 3000;
                localStorage.setItem("userIdentifier", identifier);
                setTimeout(function () {
                    // navigate('/home');
                    window.location.href = '/home';
                }, millisecondsToWait);

            } catch (err) {
                setAlertMessage('Username or password is incorrect!');
                console.log(err);
            }
        }
    };

    return (
        <div className='login-backdrop'>
            <div className="login-modalMain">
                <h1>Login</h1>
                <div className="login-modalContent">
                    <form onSubmit={(e) => handleLogin(e)}>
                        <label>
                            <span>
                                Username
                            </span>
                        </label>
                        <br />
                        <input id='username_input' onChange={(e) => setIdentifier(e.target.value)}/>
                        <br />
                        <label>
                            <span>
                                Password
                            </span>
                        </label>
                        <br />
                        <input id='pwd_input' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        <br />
                        <button className='login-btn'>Sign in</button>
                        <br />
                        <button type='button' className='login-register-btn' onClick={() => navigate('/register')}>Register</button>
                    </form>
                    <br />
                    <h4>{alertMessage}</h4>
                </div>
            </div>
        </div>
    )
}

export default Login