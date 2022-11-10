import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Nav.css';
import { IoLogOutSharp, IoSettingsSharp } from 'react-icons/io5';

function NavbarComponent() {
    return (
        <div id='NavBarDiv'>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/main">
                            <span>
                                Home
                            </span>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/handovers">
                            <span>
                                Handovers
                            </span>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        <span>
                            Timeouts
                        </span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        <span>
                            Dashboard
                        </span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        <span>
                            Follow ups
                        </span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        <span>
                            My schedule
                        </span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link>
                            <span>
                                <IoLogOutSharp size={20} />
                            </span>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link>
                            <span>
                                <IoSettingsSharp size={20} />
                            </span>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

//
export default NavbarComponent;