import React, { useState } from 'react'
import '../styles/Login.css';

const Login = () => {
    const [userName, setUserName] = useState("")
    const [pwd, setPwd] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        var unameinput = document.getElementById('username_input').value;
        var pwdInput = document.getElementById('pwd_input').value;
        const alertMessage = document.getElementById('alertMessage-login');

        var testInput = "erny"
        var testPwd = "pwdTest";

        if (userName == "" || pwd == "") {
            alert('All details must be added!');
        } else if (userName != testInput || pwd != testPwd) {
            alert('Incorrect username or password!');
            alertMessage.classList.add("display-warning");
        } else {
            alert('Login sucessfull!');
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
                        <input id='username_input' onChange={(e) => setUserName(e.target.value)}/>
                        <br />
                        <label>
                            <span>
                                Password
                            </span>
                        </label>
                        <input id='pwd_input' type='password' onChange={(e) => setPwd(e.target.value)}/>
                        <button className='login-btn'>Sign in</button>
                        <br />
                        <button className='login-register-btn'>Register</button>
                    </form>
                    <br />
                    <h4 id='alertMessage-login'>Username or password is incorrect!</h4>
                </div>
            </div>
        </div>
    )
}

export default Login