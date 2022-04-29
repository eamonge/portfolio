import React, { useCallback, useState } from 'react';
import './Display.css';

function DisplayComponent({keyValue, onKeyValueChange}) {
    // const [dataView, setDataView] = useState('0');
    // keyValue = 0;

    return (
        <div style={{backgroundColor: '#2A313A'}}>
            <h1 className='ld-Display'>{keyValue}</h1>
        </div>
    );
}

export default DisplayComponent;