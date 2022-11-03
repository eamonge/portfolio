import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';

function HomeComponent() {
    return (
        <div className='dvLogin'>
            <h1>Chronos 2- Da Sequel</h1>
            <div className='dvLoginForm'>
                <h1 className=''>Log in</h1>
                <hr />
                <Form className='LgFrm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
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