import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Nav.css';
import { IoLogOutSharp, IoSettingsSharp } from 'react-icons/io5';
import axios from 'axios';

const API_BASE = "http://localhost:5000";

function NavbarComponent() {
    const [logout, setLogOut] = useState([]);

    async function Logout(e) {
        e.preventDefault();

        try {
            await axios.get(`${API_BASE}/auth/logout`);
            localStorage.removeItem("email");

            window.location.href='/';
        } catch(err) {
            console.log(`Error msg: ${err}`)
        }
    }

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
                    <Nav.Link>
                        <Link to="/timeout">
                            <span>
                                Timeouts
                            </span>
                        </Link>
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
                        <Link onClick={Logout}>
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