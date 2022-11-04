import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function HomeComponent(props) {

    function Login() {
        var usr = document.getElementById('email').value;
        var pwd = document.getElementById('password').value;
        // let navigate = useNavigate();
        // let path = '/main';

        // alert(`The email is ${usr}!`);

        if (usr == 'a' && pwd == 'b') {
            console.log('Login successfull!');
            // navigate.path(path);
            window.location.href = '/main';
        } else {
            console.log('Error!')
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
                        <Form.Control type="text" id='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id='password' />
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