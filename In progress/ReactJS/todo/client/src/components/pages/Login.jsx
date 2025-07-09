import React, { useContext, useState } from 'react'
import '../styles/Login.css';
import { Navigate, useNavigate } from 'react-router';
import { logInUser } from '../api/usersAPI';
import AuthContext from '../context/AuthContextProvider';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {getLoggedIn} = useContext(AuthContext);

    // const {loading} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const alertMessage = document.getElementById('alertMessage-login');

        const loginData = {
            email,
            password
        };

        if (email === "" || password === "") {
            window.alert('Please add all necessary values');
        } else {
            try {
                // console.log(loginData);
                await logInUser(loginData);
                // navigate('/home');
                window.location.href = '/home';
            } catch (err) {
                alertMessage.classList.add("display-warning");
                console.log(err);
            } finally {
                setLoading(false);
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
                        <input id='username_input' onChange={(e) => setEmail(e.target.value)}/>
                        <br />
                        <label>
                            <span>
                                Password
                            </span>
                        </label>
                        <input id='pwd_input' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        <button className='login-btn'>Sign in</button>
                        <br />
                        <button type='button' className='login-register-btn' onClick={() => navigate('/register')}>Register</button>
                    </form>
                    <br />
                    <h4 id='alertMessage-login'>Username or password is incorrect!</h4>
                </div>
            </div>
        </div>
    )
}

export default Login