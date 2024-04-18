import React from 'react';
import '../../styles/landing.css';
import NavBarComponent from '../Navbar/Navbar';

function LandingComponent() {
    var user = localStorage.getItem('userName');

    return(
        <div style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            // padding: '1rem'
        }}>
            <div className='landingContentDiv'>
                <h1>Hello {user}</h1>
            </div>
        </div>
    );
};

export default LandingComponent;