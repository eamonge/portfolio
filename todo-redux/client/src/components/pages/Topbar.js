import React from 'react';

function Topbar() {
    const username = "Elmo"
    return(
        <div style={{
            backgroundColor: '#1F2831',
            color: '#D7DFE7',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            padding: '1rem',
            height: '87px'}}>
            <h1>Hello {username}!</h1>
        </div>
    );
}

export default Topbar;