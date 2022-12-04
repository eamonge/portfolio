import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';
import axios from 'axios';

const API_BASE = "http://localhost:5000";

function HomeComponent(props) {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    async function Login(e) {
        e.preventDefault();

        try {
            const loginData = {
                email, 
                password
            };
            await axios.post(`${API_BASE}/auth/login`, loginData);

            localStorage.setItem("email", loginData.email);

            window.location.href='/main';
        } catch (err) {
            console.log(`Error is: ${err}`)
        }
    }

    return (
        <div className='dvLogin'>
            <h1>Chronos 2- Da Sequel</h1>
            <div className='dvLoginForm'>
                <h1 className=''>Log in</h1>
                <hr />
                <Form className='LgFrm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" id='email' onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id='password' onChange={e => setPassword(e.target.value)}  />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={Login}>
                        <span>
                            Log in
                        </span>
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default HomeComponent;