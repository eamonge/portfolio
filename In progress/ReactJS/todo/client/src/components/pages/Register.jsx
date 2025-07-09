import React, { useState } from 'react'
import '../styles/register.css';
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdConfirm, setPwdConfirm] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        let inputAlerts = document.querySelectorAll('input');
        // var fNameInput = document.getElementById('').value;
        if (firstName == "" || lastName == "" || email == "" || pwd == "") {
            for (const alert of inputAlerts) {
                alert.classList.add('warning');
            }
            console.log('All values must be added!');
        } else {
            console.log('user added!');
        }

    }


    return (
        <div className='login-backdrop register-bckdrop'>
            <div className="login-modalMain register-mdMain">
                <h1>Register</h1>
                <div className="login-modalContent register-mdContent">
                    <form onSubmit={(e) => handleRegister(e)}>
                        <label>
                            <span>
                                First Name
                            </span>
                        </label>
                        <input id='fName_input' onChange={(e) => setFirstName(e.target.value)} className='inputs'/>
                        <br />
                        <label>
                            <span>
                                Last name
                            </span>
                        </label>
                        <input id='lName_input' type='text' onChange={(e) => setLastName(e.target.value)} className='inputs'/>
                        <br />
                        <label>
                            <span>
                                Email
                            </span>
                        </label>
                        <input id='email_input' type='text' onChange={(e) => setEmail(e.target.value)} className='inputs'/>
                        <br />
                        <label>
                            <span>
                                Password
                            </span>
                        </label>
                        <input id='pwd_input' type='password' onChange={(e) => setPwd(e.target.value)} className='inputs'/>
                        <br />
                        <label>
                            <span>
                                Reconfirm password
                            </span>
                        </label>
                        <input id='pwd2_input' type='password' onChange={(e) => setPwdConfirm(e.target.value)} className='inputs'/>
                        <br />
                        <br />
                        <button className='login-btn'>Register</button>
                        <br />
                        <button type='button' className='login-register-btn' onClick={() => navigate('/')}>Cancel</button>
                    </form>
                    <br />
                    <h4 id='alertMessage-login'>Username or password is incorrect!</h4>
                </div>
            </div>
        </div>
    )
}

export default Register