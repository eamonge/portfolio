import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';


function KeypadComponent({ keyValue, onKeyValueChange }) {

    // calc(keyValue)

    const handleInputChange = useCallback(e => {


        if (e.target.value >= 0  || e.target.value) {
            onKeyValueChange(keyValue += e.target.value)
        } else if (e.target.value == '') {
            onKeyValueChange(0)
        } 
    }, [onKeyValueChange])



    return (
        <div onClick={handleInputChange}>
            <Button className='btnKeypad' variant="primary" value="7">7</Button>
            <Button className='btnKeypad' variant="primary" value="8">8</Button>
            <Button className='btnKeypad' variant="primary" value="9">9</Button>
            <Button className='btnKeypad' variant="primary" value="/">÷</Button>
            <br />
            <Button className='btnKeypad' variant="primary" value="4">4</Button>
            <Button className='btnKeypad' variant="primary" value="5">5</Button>
            <Button className='btnKeypad' variant="primary" value="6">6</Button>
            <Button className='btnKeypad' variant="primary" value="*">×</Button>
            <br />
            <Button className='btnKeypad' variant="primary" value="1">1</Button>
            <Button className='btnKeypad' variant="primary" value="2">2</Button>
            <Button className='btnKeypad' variant="primary" value="3">3</Button>
            <Button className='btnKeypad' variant="primary" value="-">-</Button>
            <br />
            <Button className='btnKeypad' variant="primary" value="0">0</Button>
            <Button className='btnKeypad' variant="primary" value=".">.</Button>
            <Button className='btnKeypad' variant="primary" value="+">+</Button>
            <Button className='btnKeypad' variant="primary" value="=">=</Button>
        </div>
    );
}

export default KeypadComponent;