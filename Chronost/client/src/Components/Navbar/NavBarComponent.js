import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavbarComponent() {
    return (
        <div id='NavBarDiv'>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/main">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/handovers">Handovers</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Timeouts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Follow ups</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">My schedule</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavbarComponent;