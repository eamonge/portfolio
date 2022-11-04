import React from 'react';
import NavbarComponent from '../Navbar/NavBarComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HandoverComponent from '../Handovers/Handovers';

function LandingComponent() {
    return (
        <div className='contentdiv'>
            <h1>Sample landing</h1>
        </div>
    );
};

export default LandingComponent;