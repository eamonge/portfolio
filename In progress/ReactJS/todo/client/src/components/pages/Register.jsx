import React, { useState } from 'react'
import '../styles/register.css';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { addUser } from '../api/usersAPI';

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("")
    const [pwd, setPwd] = useState("");
    const [pwdConfirm, setPwdConfirm] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        let inputAlerts = document.querySelectorAll('input');
        let dangerAlert = document.getElementById('alertMessage');
        // var fNameInput = document.getElementById('').value;
        if (firstName == "" || lastName == "" || email == "" || pwd == "") {
            for (const alert of inputAlerts) {
                alert.classList.add('warning');
            }
            setAlertMessage("Please add all values!");
            dangerAlert.classList.add('displayAlert');
        } else {
            addUser(firstName, lastName, email, userName, pwd)
            console.log('user added!');
        }

    }


    return (
        <div className='main-backDrop'>
            <div className="login-modalMain register-mdMain">
                <div className="linediv"></div>
                <h1>Register</h1>
                <div className="register-mdContent">
                    <form onSubmit={(e) => handleRegister(e)}>
                        <label>
                            <span>
                                First Name
                            </span>
                        </label>
                        <br />
                        <input id='fName_input' onChange={(e) => setFirstName(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <label>
                            <span>
                                Last name
                            </span>
                        </label>
                        <br />
                        <input id='lName_input' type='text' onChange={(e) => setLastName(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <label>
                            <span>
                                Email
                            </span>
                        </label>
                        <br />
                        <input id='email_input' type='text' onChange={(e) => setEmail(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <label>
                            <span>
                                Username
                            </span>
                        </label>
                        <br />
                        <input id='email_input' type='text' onChange={(e) => setUserName(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <label>
                            <span>
                                Password
                            </span>
                        </label>
                        <br />
                        <input id='pwd_input' type='password' onChange={(e) => setPwd(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <label>
                            <span>
                                Reconfirm password
                            </span>
                        </label>
                        <br />
                        <br />
                        <input id='pwd2_input' type='password' onChange={(e) => setPwdConfirm(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <button className='login-btn'>Register</button>
                        <br />
                        <button type='button' className='login-register-btn' onClick={() => navigate('/')}>Cancel</button>
                    </form>
                    <br />
                    {/* <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert id='alertMessage' variant="filled" severity="error">
                            {alertMessage}
                        </Alert>
                    </Stack> */}
                </div>
            </div>
        </div>
    )
}

export default Register