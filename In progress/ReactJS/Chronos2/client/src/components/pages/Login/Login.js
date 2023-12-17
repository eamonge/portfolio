import React from 'react';

function LoginComponent() {
    return(
        <div style={{backgroundColor: 'teal', position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: '9999!important'}}>
            <div style={{backgroundColor: 'pink', zIndex: '9999!important', position: 'absolute', width: '100vw', height: '100vh'}}>
                <h1>Log in comp!</h1>
            </div>
        </div>
    );
}

export default LoginComponent;