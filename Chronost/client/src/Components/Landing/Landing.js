import React from 'react';
import './Landing.css';

function LandingComponent() {
    var username = localStorage.getItem("name");
    return (
        <div className='contentdiv'>
            <h1 style={{textAlign: 'center'}}>Welcome {username}</h1>
            
            <div id='dmdiv' className='landingContentdvs'>
                <h3>Available DMs</h3>
                <hr/>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
            </div>
            
            <div id='casediv' className='landingContentdvs'>
                <h3>Assigned cases</h3>
                <hr/>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
                <h1>Username | Status</h1>
            </div>
            
            <div id='availdiv' className='landingContentdvs'>
                <h3>Engineer Availability</h3>
            </div>
        </div>
    );
};

export default LandingComponent;